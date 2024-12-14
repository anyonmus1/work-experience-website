const webpack = require('webpack');

module.exports = function override(config) {
  // Add polyfills
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    "stream": require.resolve("stream-browserify"),
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "os": require.resolve("os-browserify"),
    "url": require.resolve("url"),
    "assert": require.resolve("assert"),
    "crypto": require.resolve("crypto-browserify"),
    "buffer": require.resolve("buffer")
  });
  config.resolve.fallback = fallback;

  // Add plugins
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ]);

  // Resolve react-refresh
  config.resolve.modules = ['src', 'node_modules'];
  
  return config;
};