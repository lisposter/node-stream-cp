'use strict';

var fs = require('fs');
var path = require('path');

var async = require('async');
var mkdirp = require('mkdirp');

module.expotrs = exports.cp = function(src, dst, fn, next) {
    if (!fs.existsSync(dst)) {
        mkdirp.sync(dst);
    }

    async.each(fs.readdirSync(src), function(file, callback) {
        fs.createReadStream(path.join(src, file))
                .pipe(fs.createWriteStream(path.join(dst, fn(file))))
                .on('finish', function() {
                    callback(null);
                })
                .on('error', function(err) {
                    callback(err);
                });
    }, function(err) {
        if (err) {
            next(err);
        }
        next(null);
    });
};
