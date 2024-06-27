module.exports = {
    // outras configurações do webpack
  
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader', // ou outro loader para TypeScript
          },
        },
        {
          test: /\.(mov|mp4|avi|webm)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // opcional: renomear o arquivo de saída
              outputPath: 'videos/', // opcional: diretório de saída para os vídeos
            },
          },
        },
        // outras regras
      ],
    },
  };
  