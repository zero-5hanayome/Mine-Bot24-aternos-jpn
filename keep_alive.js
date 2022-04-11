const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Mine-Bot24\nVer1.0\n作成者ページ\n http://zero.5hanayome.ml\nCopyright © zero_5hanayome - 2022'));

app.listen(port, () => console.log(`Mine-Bot24のWebServerの位置は、 http://localhost:${port}だよ！！`));