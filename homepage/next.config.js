/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  /**windows上のDockerでホットリロードを適用させる */
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    }
    return config
  },
}
