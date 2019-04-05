'use strict';
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 2236;
const server = http.createServer(app);
server.listen(port);
//var express = require('express');
//var webtorrent = require('webtorrent-hybrid');


//var app = express();

//app.get('/', function (req, res) {
//    var client = new webtorrent();

//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    //res.end('Hello World\n');
//    //res.writeHead(200, { 'Content-Type': 'video/mp4' });
//    var torrentId = ['FD8914DD7FB84D7F21ED65F63B1D636F12B5CB27','magnet:?xt=urn:btih:E2BFDFDE61D6E537732B7DE7C0BB103DD0856AFC&dn=Bumblebee+%282018%29+%5B720p%5D+%5BYTS.AM%5D&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fp4p.arenabg.ch%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337'];
//    var torrent = client.add(torrentId[0], function (torrent) {
//        var file = torrent.files.find(function (file) {
//            return file.name.endsWith('.mp4')
//        });
//        console.log(file.name);
//    });
//    //var torrent2 = client.add(torrentId[1], function (torrent) {
//    //    var file = torrent.files.find(function (file) {
//    //        return file.name.endsWith('.mp4')
//    //    });
//    //    console.log(file.name);
//    //});
//    let range = req.headers.range;
//    console.log(range);
//    torrent.on('ready', function () {
//        var file = torrent.files.find(function (file) {
//            return file.name.endsWith('.mp4')
//        });
//        console.log(file.name);
//        res.end('Hello World\n');
//    });
//});

//app.listen(port, function () {
//    console.log('server up and runnnin..');
//});
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'video/mp4' });
//    var torrentId = 'FD8914DD7FB84D7F21ED65F63B1D636F12B5CB27';
//    var torrent = client.add(torrentId, function (torrent) {
//        console.log("asd");
//    });
//    torrent.on('ready', function () {
//        var file = torrent.files.find(function (file) {
//            return file.name.endsWith('.mp4')
//        });
//        var stream = file.createReadStream();
//        stream.pipe(res);
//    });
//    //res.end('Hello World\n');
//}).listen(port);
