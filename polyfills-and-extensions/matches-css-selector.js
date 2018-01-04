// Polyfill for matches() from https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
// For browsers that do not support Element.matches() or Element.matchesSelector(), 
// but carry support for document.querySelectorAll(), a polyfill exists:

if (!Element.prototype.matches) {
    Element.prototype.matches = 
        Element.prototype.matchesSelector || 
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector || 
        Element.prototype.oMatchesSelector || 
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;            
        };
}