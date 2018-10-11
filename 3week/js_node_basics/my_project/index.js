const QRCode = require("qrcode");

QRCode.toFile("hello.png", "Hello CodeCore gudes", (err) =>{

if (err) throw err;
});