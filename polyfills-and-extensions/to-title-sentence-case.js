String.prototype.toSentenceCase = function(){
	// returns string in sentence case (lower, except for first char)
	let retval = this.toLowerCase();
	if (this.length < 2) return this.toUpperCase(); // For single- or no-character strings
	return retval[0].toUpperCase() + retval.slice(1);
}

String.prototype.toTitleCase = function(){
	// returns string in title case (Every word capitalized)
	const words_arr = this.split(' '),
		doNotCap = ["a", "an", "aka", "a.k.a.", "the", "and", "but", "or", "for", "nor", "etc.", "on", "at", "to", "from", "by", "with"];

	let retval="";

	words_arr.forEach(word => {
		if (doNotCap.indexOf(word) > -1){
			retval += word + " ";
		} else {
			retval += word.toSentenceCase() + " ";
		}
	})
	return retval;
}