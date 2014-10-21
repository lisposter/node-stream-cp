'use strict';

var fs = require('fs');
var path = require('path');

var async = require('async');
var mkdirp = require('mkdirp');

function cp(src, dst, fn, next) {
    if (!fs.existsSync(dst)) {
        mkdirp.sync(dst);
    }

    async.each(fs.readdirSync(src), function(file, callback) {
        if (fs.statSync(path.join(src, file)).isFile()) {
            fs.createReadStream(path.join(src, file))
                .pipe(fs.createWriteStream(path.join(dst, fn(file))))
                .on('finish', function() {
                    callback(null);
                })
                .on('error', function(err) {
                    callback(err);
                });
        } else {
            cp(path.join(src, file), path.join(dst, file), fn, next);
        }


    }, function(err) {
        if (err) {
            next(err);
        }
        next(null);
    });
};

module.exports = exports.cp = cp;
