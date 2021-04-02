const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy, addWebpackPlugin, addWebpackAlias } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const path = require('path');

process.env.ESLINT_NO_DEV_ERRORS = 'true';

module.exports = override(
  addDecoratorsLegacy(),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }, {
    libraryName: 'lodash',
    libraryDirectory: '',
    camel2DashComponentName: false,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1890ff',
      // dark: true, // 开启暗黑模式
      // compact: true, // 开启紧凑模式
    },
  }),
);
