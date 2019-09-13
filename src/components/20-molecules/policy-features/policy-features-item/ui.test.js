import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL;
const TAG = 'axa-policy-features-item';
const CLASS = '.m-policy-features-item';
const defaultWindowHeight = 1000;
const lgWindowWidth = 992;
const mdWindowWidth = 768;
const smWindowWidth = 576;

// Selectors
const svgImageOfFirstPolicyFeaturesItem = Selector(
  () => {
    return document.querySelector(TAG).shadowRoot;
  },
  { dependencies: { TAG } }
).find('svg');

const titleOfFirstPolicyFeaturesItem = Selector(
  () => {
    return document.querySelector(TAG).shadowRoot;
  },
  { dependencies: { TAG } }
).find('h1');

const descriptionOfFirstPolicyFeaturesItem = Selector(
  () => {
    return document.querySelector(TAG).shadowRoot;
  },
  { dependencies: { TAG } }
).find('p');

const firstPolicyFeaturesItem = Selector(
  () => {
    return document.querySelector(TAG).shadowRoot;
  },
  { dependencies: { TAG } }
).find('section');

fixture('Policy features item - basic functionality')
  .page(`${host}/iframe.html?id=molecules-policy-features--policy-features`)
  .afterEach(async t => {
    await t.maximizeWindow();
  });

test('should render policy-features-item', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadowEl = await Selector(
    () => {
      return document.querySelector(TAG).shadowRoot;
    },
    { dependencies: { TAG } }
  ).find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

test('should set correct text of title of the first policy-features-item', async t => {
  await t
    .expect(titleOfFirstPolicyFeaturesItem.textContent)
    .eql('Get Discount');
});

test('should set correct text of description of the first policy-features-item', async t => {
  await t
    .expect(descriptionOfFirstPolicyFeaturesItem.textContent)
    .eql('A 5 star car insurance with affordable premium services');
});

test('should render svg icon of the first policy-features-item', async t => {
  await t.expect(svgImageOfFirstPolicyFeaturesItem.exists).ok();
});

test('should set correct svg size for screen size md-up', async t => {
  await t
    .expect(await svgImageOfFirstPolicyFeaturesItem.getStyleProperty('width'))
    .eql('96px')
    .expect(await svgImageOfFirstPolicyFeaturesItem.getStyleProperty('height'))
    .eql('96px');
}).before(async t => {
  await t.resizeWindow(mdWindowWidth, defaultWindowHeight);
});

test('should set correct svg size for screen size smaller than md', async t => {
  await t
    .expect(await svgImageOfFirstPolicyFeaturesItem.getStyleProperty('width'))
    .eql('42px')
    .expect(await svgImageOfFirstPolicyFeaturesItem.getStyleProperty('height'))
    .eql('42px');
}).before(async t => {
  await t.resizeWindow(smWindowWidth, defaultWindowHeight);
});

test('should render title and description with correct sizes on screen md', async t => {
  await t
    .expect(await titleOfFirstPolicyFeaturesItem.getStyleProperty('font-size'))
    .eql('18px')
    .expect(
      await descriptionOfFirstPolicyFeaturesItem.getStyleProperty('font-size')
    )
    .eql('18px');
}).before(async t => {
  await t.resizeWindow(mdWindowWidth, defaultWindowHeight);
});

test('should render title and description with correct size on screen size smaller than md', async t => {
  await t
    .expect(await titleOfFirstPolicyFeaturesItem.getStyleProperty('font-size'))
    .eql('16px')
    .expect(
      await descriptionOfFirstPolicyFeaturesItem.getStyleProperty('font-size')
    )
    .eql('16px');
}).before(async t => {
  await t.resizeWindow(smWindowWidth, defaultWindowHeight);
});

test('should set width of the first policy-features-item on screen size lg-up', async t => {
  await t
    .expect(await firstPolicyFeaturesItem.getStyleProperty('width'))
    .eql('255px');
}).before(async t => {
  await t.resizeWindow(lgWindowWidth, defaultWindowHeight);
});

test('should set width of the first policy-features-item with screen size md-up', async t => {
  await t
    .expect(await firstPolicyFeaturesItem.getStyleProperty('width'))
    .eql('210px');
}).before(async t => {
  await t.resizeWindow(mdWindowWidth, defaultWindowHeight);
});

test('should set width of the first policy-features-item with screen size sm-up', async t => {
  await t
    .expect(await firstPolicyFeaturesItem.getStyleProperty('width'))
    .eql('240px');
}).before(async t => {
  await t.resizeWindow(smWindowWidth, defaultWindowHeight);
});

fixture('Policy features item - svg loading').page(
  `${host}/iframe.html?id=molecules-policy-features--policy-features&knob-variant=dark-indigo&knob-title=A 5 star car insurance with affordable premium services&knob-Show title?=y&knob-title (of item)=Get Discount&knob-icon - load svg icon from this url instead:=${host}/static/media/logo-axa.ce44e802.svg&knob-description=A 5 star car insurance with affordable premium services`
);

test('should render svg icon of the first policy-features-item (if set with url)', async t => {
  await t.expect(svgImageOfFirstPolicyFeaturesItem.exists).ok();
});

fixture('Policy features item - no svg').page(
  `${host}/iframe.html?id=molecules-policy-features--policy-features&knob-variant=dark-indigo&knob-title=A 5 star car insurance with affordable premium services&knob-Show title?=y&knob-title (of item)=Get Discount&knob-icon - load svg icon from this url instead:=thisisnotavalidsvg&knob-description=A 5 star car insurance with affordable premium services`
);

test('should not render svg icon of the first policy-features-item if no valid svg is set', async t => {
  await t.expect(svgImageOfFirstPolicyFeaturesItem.exists).notOk();
});