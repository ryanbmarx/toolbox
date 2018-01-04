// Taken from here: https://stackoverflow.com/a/35970186/4476336
// Takes a hex color, i.e. a background color, and determines whether black
// or white text will be most readable/have most contrast. 
// @param [hex] <string> A 3- or 6-digit hex color, with or without the "#"
// @param [bw] <boolean> If false, will return opposite of [hex] color. If true, will return black or white, whichever provides most contrast.

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

function getTextColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }

    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
    	return (r * 0.299 + g * 0.587 + b * 0.114) > 186
        	? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
	b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}

module.exports = getTextColor;