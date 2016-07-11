import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.deepEqual(result.css, output);
            t.deepEqual(result.warnings().length, 0);
        });
}

var expected = '@import "some-lib/some-style.scss"';

test('omits tilde as first char', t => {
    return run(t, '@import "~some-lib/some-style.scss"', expected, { });
});

test('do not change string without tilde', t => {
    return run(t, '@import "some-lib/some-style.scss"', expected, { });
});

test('omits only first tilde', t => {
    return run(
        t,
        '@import "~some-lib/some-style.scss~1"',
        '@import "some-lib/some-style.scss~1"',
        { }
    );
});
