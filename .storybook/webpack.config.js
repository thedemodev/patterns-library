const path = require('path');
const base = path.resolve(process.cwd(), 'src');
const babelOptions = require('./.babelrc'); // get the babelrc file
const autoprefixer = require('autoprefixer');

require('dotenv-extended').load();

// Global Import SCSS Materials -> SCSS Materials as they are always a dependency.
const globals = require(path.resolve(__dirname, '..', 'config', 'globals.js'))
  .map(item => `@import '${base}/${item}';`)
  .join('\n')
  .replace(/\\/g, '/'); // use '/' dir seps on win32, to satisfy sass-loader/LibSass; otherwise crash
;

module.exports = ({ config }) => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '~/materials': path.join(base, 'components', 'materials'),
  });

  config.module.rules.push(
    {
      test: /\.scss$/,
      loaders: [
        'to-string-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer({ grid: 'autoplace' })]
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            data: globals,
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    },
    {
      test: /\.js$/,
      exclude: /node_modules\/(?!lit\-element|lit\-html|@axa\-ch)/,
      loader: 'babel-loader',
      options: babelOptions,
    },
    {
      test: /\.jsx/,
      exclude: /node_modules\/(?!lit\-element|lit\-html|@axa\-ch)/,
      loader: 'babel-loader',
      options: {...babelOptions, presets: [...babelOptions.presets]},
    },
    {
      test: /\CHANGELOG.md$/,
      use: [
        {
          loader: "html-loader"
        },
        {
          loader: "markdown-loader",
          options: {
            gfm: true,
            breaks: false // TODO: make it work
          }
        }
      ]
    }
  );

  return config;
};
