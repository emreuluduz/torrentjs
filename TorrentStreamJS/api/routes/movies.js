﻿const express = require('express');
const router = express.Router();
var webtorrent = require('webtorrent-hybrid');

router.get('/:torrentId', (req, res, next) => {
    var client = new webtorrent();
    var date = new Date();
    var torrentId = req.params.torrentId;
    var torrent = client.add(torrentId, { store: require('memory-chunk-store') }, function (torrent) {
    });
    torrent.on('ready', function () {
        console.log('torrent ready time: ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
        var file = torrent.files.find(function (file) {
            return file.name.endsWith('.mp4')
        });
        console.log('found a movie : ' + file.name);

        let range = req.headers.range;
        console.log(range);
        if (!range) {
            let err = new Error("Wrong range");
            return next(err);
        }
        let positions = range.replace(/bytes=/, "").split("-");
        let start = parseInt(positions[0], 10);
        let file_size = file.length;
        let end = positions[1] ? parseInt(positions[1], 10) : file_size - 1;
        let chunksize = (end - start) + 1;
        let head = {
            "Content-Range": "bytes " + start + "-" + end + "/" + file_size,
            "Accept-Ranges": "bytes",
            "Content-Length": chunksize,
            "Content-Type": "video/mp4"
        }
        res.writeHead(206, head);
        let stream_position = {
            start: start,
            end: end
        }
        console.log("stream position" + stream_position.start + "," + stream_position.end);

        var stream = file.createReadStream(stream_position);
        stream.pipe(res);

        stream.on("error", function (err) {
            return next(err);
        });
    });
});

module.exports = router;