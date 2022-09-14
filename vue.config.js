module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.html$/i,
          use: [
            {
              loader: 'raw-loader',
              options: {
                esModule: false,
              },
            },
          ],
        },
      ],
    },
  },
};
