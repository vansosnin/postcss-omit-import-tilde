'use strict';

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-omit-import-tilde', function () {
    return function (css) {
        css.walkAtRules('import', function (rule) {
            if (rule.params.indexOf('~') === 1) {
                rule.params = rule.params.replace(/[~]+/, '');
            }
        });
    };
});
