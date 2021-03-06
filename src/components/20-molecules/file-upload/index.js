import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/input-file';
import { classMap } from 'lit-html/directives/class-map';

import {
  AddSvg,
  DeleteForeverSvg,
  ClearSvg,
  AttachFileSvg,
} from '@axa-ch/materials/icons';

// icon isolated from others, because it's a component specific icon
import { FileUploadGroupSvg } from './icons';

import defineOnce from '../../../utils/define-once';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';
import compressImage from './utils/imageCompressor';

const ADD_ICON = svg([AddSvg]);
const ATTACH_FILE_ICON = svg([AttachFileSvg]);
const DELETE_FOREVER_ICON = svg([DeleteForeverSvg]);
const CLEAR_ICON = svg([ClearSvg]);
const FILE_UPLOAD_GROUP_ICON = svg([FileUploadGroupSvg]);

const ACCEPTED_FILE_TYPES = 'image/jpg, image/jpeg, application/pdf, image/png';
const NOT_IMAGE_FILE_TYPES = ACCEPTED_FILE_TYPES.split(', ').filter(
  type => type.indexOf('image') === -1
);

export const getBytesFromKilobyte = kilobyte => 1024 * kilobyte;

class AXAFileUpload extends LitElement {
  static get tagName() {
    return 'axa-file-upload';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      inputFileText: { type: String, defaultValue: 'Upload file' },
      maxSizeOfSingleFileKB: { type: Number, defaultValue: 100 },
      maxSizeOfAllFilesKB: { type: Number, defaultValue: 500 },
      maxNumberOfFiles: { type: Number, defaultValue: 10 },
      showFileOverview: { type: Boolean },
      icon: { type: String, defaultValue: 'cloud-upload' },
      deleteStatusText: { type: String, defaultValue: 'Delete' },
      addStatusText: { type: String, defaultValue: 'Add more' },
      fileTooBigStatusText: {
        type: String,
        defaultValue: 'File size exceeds maximum size',
      },
      filesTooBigStatusText: {
        type: String,
        defaultValue: 'File sizes exceed maximum size',
      },
      tooManyFilesStatusText: {
        type: String,
        defaultValue: 'You exceeded the maximum number of files',
      },
      orText: { type: String, defaultValue: 'or' },
      infoText: {
        type: String,
        defaultValue: 'Drag and drop to upload your file',
      },
      wrongFileTypeStatusText: {
        type: String,
        defaultValue:
          'Your file does not correspond with our allowed file-types',
      },
    };
  }

  constructor() {
    super();
    applyDefaults(this);

    this.files = [];
    this.faultyFiles = [];
    this.allFiles = [];

    this.sizeOfAllFilesByte = 0;
    this.allDroppedFiles = 0;
    this.isFileMaxReached = false;

    this.globalErrorMessage = '';
    this.addMoreInputFile = '';
    this.showAddMoreInputFile = '';
  }

  handleAddMoreInputClick() {
    // trigger input-file component after clicking the "fake" inputFile (addMoreInput)
    this.inputFile.querySelector('input').click();
  }

  handleInputFileChange(e) {
    this.addFiles(e.target.files);
  }

  handleDropZoneDragover(e) {
    // prevent default browser behavior to execute the link that comes with the event
    e.preventDefault();
    if (!this.isFileMaxReached) {
      e.dataTransfer.dropEffect = 'copy';
      this.dropZone.classList.add('m-file-upload__dropzone_dragover');
    }
  }

  handleDropZoneDragleave() {
    this.dropZone.classList.remove('m-file-upload__dropzone_dragover');
  }

  handleDropZoneDrop(e) {
    const { files } = e.dataTransfer;
    let removeGlobalMessage = true;
    // prevent browser to display the file fullscreen
    e.preventDefault();

    const validFileTypesFiles = [...files].filter(file =>
      file.type ? ACCEPTED_FILE_TYPES.indexOf(file.type) > -1 : false
    );

    this.dropZone.classList.remove('m-file-upload__dropzone_dragover');

    if (validFileTypesFiles.length < files.length) {
      this.globalErrorMessage = this.wrongFileTypeStatusText;
      removeGlobalMessage = false;
      this.requestUpdate();
    }

    if (validFileTypesFiles.length > 0) {
      this.addFiles(validFileTypesFiles, removeGlobalMessage);
    }
  }

  handleFileDeletion(index) {
    let clonedFiles = [];

    this.allDroppedFiles = this.files.length + this.faultyFiles.length - 1;
    this.globalErrorMessage = '';

    if (index >= this.files.length) {
      // wrong file
      clonedFiles = [...this.faultyFiles];
      clonedFiles.splice(index - this.files.length, 1);
      this.faultyFiles = clonedFiles;
    } else {
      // valid file
      clonedFiles = [...this.files];
      clonedFiles.splice(index, 1);
      this.files = clonedFiles;
      if (this.files.length + 1 === this.maxNumberOfFiles) {
        this.showAddMoreInputFile = true;
      }
    }

    this.handleMaxNumberOfFiles();

    this.sizeOfAllFilesByte -= this.allFiles[index].size;

    if (this.files.length + this.faultyFiles.length === 0) {
      this.showFileOverview = false;
      this.sizeOfAllFilesByte = 0;
      this.allDroppedFiles = 0;
      this.files = [];
      this.allFiles = [];
      this.faultyFiles = [];
      this.showAddMoreInputFile = false;
    }
    this.requestUpdate();
  }

  async addFiles(droppedFiles, removeGlobalMessage) {
    this.showAddMoreInputFile = true;

    if (removeGlobalMessage) {
      this.globalErrorMessage = '';
    }

    this.allDroppedFiles += droppedFiles.length;

    const notImagesFiles = [...droppedFiles].filter(
      file => NOT_IMAGE_FILE_TYPES.indexOf(file.type) > -1
    );

    // compress all images. pngs will become jpeg's and unrecognised files will be deleted
    const compressedImages = await compressImage(droppedFiles);

    this.validateFiles(compressedImages, notImagesFiles);

    if (
      (this.files.length > 0 || this.faultyFiles.length > 0) &&
      droppedFiles.length > 0
    ) {
      this.showFileOverview = true;
    }
    if (this.files.length >= this.maxNumberOfFiles) {
      this.showAddMoreInputFile = false;
    }

    this.handleMaxNumberOfFiles();
    this.requestUpdate();
  }

  validateFiles(compressedImages, notImagesFiles) {
    const maxSizeOfSingleFileByte = getBytesFromKilobyte(
      this.maxSizeOfSingleFileKB
    );
    const maxSizeOfAllFilesByte = getBytesFromKilobyte(
      this.maxSizeOfAllFilesKB
    );

    const faultyFiles = [];
    let finalFiles = notImagesFiles;

    for (let i = 0; i < compressedImages.length; i++) {
      if (
        this.sizeOfAllFilesByte + compressedImages[i].size >
        maxSizeOfAllFilesByte
      ) {
        this.globalErrorMessage = this.filesTooBigStatusText;
      } else if (compressedImages[i].size > maxSizeOfSingleFileByte) {
        faultyFiles.push(compressedImages[i]);
      } else {
        this.sizeOfAllFilesByte += compressedImages[i].size;
        finalFiles = finalFiles.concat(compressedImages[i]);
      }
    }

    const numberOfFilesLeftOver = Math.max(
      this.maxNumberOfFiles - this.files.length,
      0
    );

    // finalFiles is not an Array, therefore we can not use slice
    const filesLeftOver = Array.prototype.slice.call(
      finalFiles,
      0,
      numberOfFilesLeftOver
    );

    // concat the latest valid files from a file-upload to the existing ones
    this.files = this.files.concat(filesLeftOver);

    // concat the latest faulty files from a file-upload to the existing ones
    this.faultyFiles = this.faultyFiles.concat(faultyFiles);
  }

  handleMaxNumberOfFiles() {
    const {
      allDroppedFiles,
      faultyFiles,
      maxNumberOfFiles,
      tooManyFilesStatusText,
    } = this;

    if (
      allDroppedFiles - faultyFiles.length > maxNumberOfFiles &&
      faultyFiles.length + this.files.length >= maxNumberOfFiles
    ) {
      this.globalErrorMessage = tooManyFilesStatusText;
    }

    this.isFileMaxReached = this.files.length === maxNumberOfFiles;
  }

  fileOverviewMapping() {
    const { deleteStatusText, fileTooBigStatusText } = this;
    const urlCreator = window.URL || window.webkitURL;

    return this.allFiles.map((file, index) => {
      let isfaultyFile = false;
      if (!file) {
        return '';
      }
      for (let i = 0; i < this.faultyFiles.length; i++) {
        if (this.faultyFiles[i] === file) {
          isfaultyFile = true;
          break;
        }
      }
      this.faultyFiles.forEach(faultyFile => {
        if (faultyFile === file) {
          isfaultyFile = true;
        }
      });
      const isFile = file.type.indexOf('application') > -1;
      const imageUrl = urlCreator.createObjectURL(file);
      return html`
        <figure class="m-file-upload__img-figure js-file-upload__img-figure">
          <div
            class="m-file-upload__icon-hover-area"
            @click=${() => this.handleFileDeletion(index)}
          >
            ${isFile
              ? html`
                  <span class="m-file-upload__file-element">
                    ${ATTACH_FILE_ICON}</span
                  >
                `
              : html`
                  <img
                    class="m-file-upload__img-element"
                    src="${imageUrl}"
                    alt="${file.name}"
                  />
                `}
            <div class="m-file-upload__icon-layer">
              <span class="m-file-upload__icon-error"
                >${isfaultyFile ? CLEAR_ICON : ''}</span
              >
              <span class="m-file-upload__icon-delete"
                >${DELETE_FOREVER_ICON}</span
              >
            </div>
          </div>
          ${isfaultyFile
            ? html`
                <figcaption
                  class="m-file-upload__img-caption js-file-upload__img-caption m-file-upload__img-caption-error"
                  title="${fileTooBigStatusText}"
                  data-status="${deleteStatusText}"
                >
                  <span class="m-file-upload__filename js-file-upload__filename"
                    >${fileTooBigStatusText}</span
                  >
                </figcaption>
              `
            : html`
                <figcaption
                  class="m-file-upload__img-caption js-file-upload__img-caption"
                  title="${file.name}"
                  data-status="${deleteStatusText}"
                >
                  <span class="m-file-upload__filename js-file-upload__filename"
                    >${file.name}</span
                  >
                </figcaption>
              `}
        </figure>
      `;
    });
  }

  generateAddMoreInputFile() {
    const { addStatusText } = this;
    return html`
      <figure
        class="m-file-upload__img-figure js-file-upload__img-figure m-file-upload__add-more js-file-upload__add-more"
      >
        <div
          class="m-file-upload__icon-wrapper"
          @click=${this.handleAddMoreInputClick}
        >
          <div class="m-file-upload__icon-layer">
            ${ADD_ICON}
          </div>
        </div>
        <figcaption
          class="m-file-upload__img-caption js-file-upload__img-caption"
          title="${addStatusText}"
        >
          ${addStatusText}
        </figcaption>
      </figure>
    `;
  }

  render() {
    const fileOverviewClasses = {
      'm-file-upload__dropzone': true,
      'js-file-upload__dropzone': true,
      'm-file-upload__dropzone-file-overview': this.showFileOverview,
      'js-file-upload__dropzone-file-overview': this.showFileOverview,
    };
    const errorMessageWrapperClasses = {
      'm-file-upload__error-wrapper': true,
      'js-file-upload__error-wrapper': true,
    };

    // displaying files with errors (e.g. too big) after valid ones
    this.allFiles = this.files.concat(this.faultyFiles);
    const fileOverview = this.fileOverviewMapping(this.allFiles);
    this.addMoreInputFile = this.generateAddMoreInputFile();

    return html`
      <article class="m-file-upload">
        <h1><slot></slot></h1>
        <section
          @dragover="${this.handleDropZoneDragover}"
          @dragleave="${this.handleDropZoneDragleave}"
          @drop="${this.handleDropZoneDrop}"
          class="${classMap(fileOverviewClasses)}"
        >
          ${!this.showFileOverview
            ? html`
                <div>
                  ${FILE_UPLOAD_GROUP_ICON}
                </div>
                <p class="m-file-upload__information">${this.infoText}</p>
                <p class="m-file-upload__or">${this.orText}</p>
                <axa-input-file
                  class="m-file-upload__input js-file-upload__input"
                  accept="${ACCEPTED_FILE_TYPES}"
                  icon="${this.icon}"
                  multiple
                  @change=${this.handleInputFileChange}
                  variant="red"
                >
                  ${this.inputFileText}
                </axa-input-file>
              `
            : html`
                ${fileOverview}
                ${this.showAddMoreInputFile ? this.addMoreInputFile : ``}
              `}
        </section>

        <div class="${classMap(errorMessageWrapperClasses)}">
          ${this.globalErrorMessage}
        </div>
      </article>
    `;
  }

  firstUpdated() {
    this.dropZone = this.shadowRoot.querySelector('.js-file-upload__dropzone');
    this.inputFile = this.shadowRoot.querySelector('.js-file-upload__input');
    this.errorWrapper = this.shadowRoot.querySelector(
      '.js-file-upload__error-wrapper'
    );
  }

  querySelector(selector) {
    return this.shadowRoot.querySelector(selector);
  }
}

defineOnce(AXAFileUpload.tagName, AXAFileUpload);

export default AXAFileUpload;
