module.exports = {
  webpack: {
    configure: (webpackConfig, { paths }) => {
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        assets: `${paths.appSrc}/assets/`,
        components: `${paths.appSrc}/components/`,
        HoCs: `${paths.appSrc}/utils/HoCs/`,
        utils: `${paths.appSrc}/utils/`,
        services: `${paths.appSrc}/services/`,
        pages: `${paths.appSrc}/pages/`,
        appredux: `${paths.appSrc}/redux/`,
        styles: `${paths.appSrc}/styles/`,
      }
      return webpackConfig
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^assets(.*)$': '<rootDir>/src/assets$1',
        '^components(.*)$': '<rootDir>/src/components$1',
        '^HoCs(.*)$': '<rootDir>/src/utils/HoCs$1',
        '^utils(.*)$': '<rootDir>/src/utils$1',
        '^services(.*)$': '<rootDir>/src/services$1',
        '^pages(.*)$': '<rootDir>/src/pages$1',
        '^appredux(.*)$': '<rootDir>/src/redux$1',
        '^styles(.*)$': '<rootDir>/src/styles$1',
      },
    },
  },
}