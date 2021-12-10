const createDomPurify = require('dompurify');
const {JSDOM} = require('jsdom');
const dompurify = createDomPurify(new JSDOM().window);

function sanitize(input){
    return dompurify.sanitize(input);
}

module.exports = sanitize;

// The resulting HTML can be written into a DOM element using innerHTML or the DOM using document.write(). That is fully up to you. Note that by default, we permit HTML, SVG and MathML. If you only need HTML, which might be a very common use-case, you can easily set that up as well:

// let clean = DOMPurify.sanitize( dirty , {USE_PROFILES: {html: true}} );