const 		sortBy = require('lodash.sortby');

module.exports = function objectToArray(obj, sortByX = true, sortDirection = 'asc'){

	// Takes  data object of objects created by lodash/countby and transforms it into an array of objects.

	// Create a new array of objects with the object keys moved into the object.
	let arr = [];
	Object.keys(obj).forEach(key => {
		// Some shootings don't have a time, so we'll omit them. They are under the "-1"key.
		if (key > -1 || isNaN(key)){
			arr.push({
				x: key,
				y: obj[key]
			});
		}
	});

	// Now we sort it.
	let sorted;

	// If the user wants it sorted by the x attribute, then do 
	// so (this is default). Otherwise sort it by the Y
	if (sortByX) {
		sorted = sortBy(arr, d => parseInt(d.x))
	} else {
		sorted = sortBy(arr, d => parseInt(d.y));
	}
	
	// Lodash sorts only in ascending order.
	// If the user has opted for a descending 
	// order, then reverse it.
	if (sortDirection == "desc") return sorted.reverse();
	return sorted;
}