const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // proxy是一个函数，第一个参数是 前缀
    app.use("/uplate",  createProxyMiddleware ({
        target: "http://m.maoyan.com/ajax",
        changeOrigin: true,
        pathRewrite: {
            "^/uplate": ""
        }
    }));
}
// const { createProxyMiddleware } = require('http-proxy-middleware');
// module.exports = function(app) {
//   app.use(
//     '/org',
//     proxy({
//       target: 'http://localhost:5000',
//       changeOrigin: true,
//     })
//   );
//   app.use(
//     '/sys',
//     proxy({
//       target: 'http://localhost:5001',
//       changeOrigin: true,
//     })
//   );
// };
