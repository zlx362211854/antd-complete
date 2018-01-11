require('./server.babel'); // babel registration (runtime transpilation for node)
var express = require('express');
var app = express();
var path = require('path');
var proxyMiddleWare = require("http-proxy-middleware");

const {PORT, APIHOST, APIPORT} = process.env;

var proxyPath = `http://${APIHOST}:${APIPORT}`;// 后端服务地址
var proxyOption = {
  target: proxyPath,
  pathRewrite: {
    '^/api': ''
  }
};

var server = app.listen(PORT || 8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('ADMIN app listening at http://%s:%s', host, port);
});

app.use(express.static(path.join(__dirname, 'dist')));

// 代理接口
app.use('/api', proxyMiddleWare(proxyOption));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

