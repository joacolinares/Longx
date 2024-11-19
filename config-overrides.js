module.exports = function override(config) {
    // Agregar regla para procesar archivos .mjs
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });
  
    // Alias para ignorar el módulo problemático
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '../../vendor-js/eth-eip712-util/index.cjs': false, // Ignorar eip712
    };
  
    return config;
  };
  