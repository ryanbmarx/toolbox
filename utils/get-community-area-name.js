module.exports = function getCommunityAreaName(area, format){

	/*
		Returns desired format of community area. Takes any of the formats
		as input, finds a match then returns the desired format.
	*/

	const areas = [
		{
			slug: "albany-park",
			id: 1,
			readable: "Albany Park"
		},{
			slug: "archer-heights",
			id: 2,
			readable: "Archer Heights"
		},{
			slug: "armour-square",
			id: 3,
			readable: "Armour Square"
		},{
			slug: "ashburn",
			id: 4,
			readable: "Ashburn"
		},{
			slug: "auburn-gresham",
			id: 5,
			readable: "Auburn Gresham"
		},{
			slug: "austin",
			id: 6,
			readable: "Austin"
		},{
			slug: "avalon-park",
			id: 7,
			readable: "Avalon Park"
		},{
			slug: "avondale",
			id: 8,
			readable: "Avondale"
		},{
			slug: "belmont-cragin",
			id: 9,
			readable: "Belmont Cragin"
		},{
			slug: "beverly",
			id: 10,
			readable: "Beverly"
		},{
			slug: "bridgeport",
			id: 11,
			readable: "Bridgeport"
		},{
			slug: "brighton-park",
			id: 12,
			readable: "Brighton Park"
		},{
			slug: "burnside",
			id: 13,
			readable: "Burnside"
		},{
			slug: "calumet-heights",
			id: 14,
			readable: "Calumet Heights"
		},{
			slug: "chatham",
			id: 15,
			readable: "Chatham"
		},{
			slug: "chicago-lawn",
			id: 16,
			readable: "Chicago Lawn"
		},{
			slug: "clearing",
			id: 17,
			readable: "Clearing"
		},{
			slug: "douglas",
			id: 18,
			readable: "Douglas"
		},{
			slug: "dunning",
			id: 19,
			readable: "Dunning"
		},{
			slug: "east-garfield-park",
			id: 20,
			readable: "East Garfield Park"
		},{
			slug: "east-side",
			id: 21,
			readable: "East Side"
		},{
			slug: "edgewater",
			id: 22,
			readable: "Edgewater"
		},{
			slug: "edison-park",
			id: 23,
			readable: "Edison Park"
		},{
			slug: "englewood",
			id: 24,
			readable: "Englewood"
		},{
			slug: "forest-glen",
			id: 25,
			readable: "Forest Glen"
		},{
			slug: "fuller-park",
			id: 26,
			readable: "Fuller Park"
		},{
			slug: "gage-park",
			id: 27,
			readable: "Gage Park"
		},{
			slug: "garfield-ridge",
			id: 28,
			readable: "Garfield Ridge"
		},{
			slug: "grand-boulevard",
			id: 29,
			readable: "Grand Boulevard"
		},{
			slug: "greater-grand-crossing",
			id: 30,
			readable: "Greater Grand Crossing"
		},{
			slug: "hegewisch",
			id: 31,
			readable: "Hegewisch"
		},{
			slug: "hermosa",
			id: 32,
			readable: "Hermosa"
		},{
			slug: "humboldt-park",
			id: 33,
			readable: "Humboldt Park"
		},{
			slug: "hyde-park",
			id: 34,
			readable: "Hyde Park"
		},{
			slug: "irving-park",
			id: 35,
			readable: "Irving Park"
		},{
			slug: "jefferson-park",
			id: 36,
			readable: "Jefferson Park"
		},{
			slug: "kenwood",
			id: 37,
			readable: "Kenwood"
		},{
			slug: "lakeview",
			id: 38,
			readable: "Lakeview"
		},{
			slug: "lincoln-park",
			id: 39,
			readable: "Lincoln Park"
		},{
			slug: "lincoln-square",
			id: 40,
			readable: "Lincoln Square"
		},{
			slug: "logan-square",
			id: 41,
			readable: "Logan Square"
		},{
			slug: "loop",
			id: 42,
			readable: "Loop"
		},{
			slug: "lower-west-side",
			id: 43,
			readable: "Lower West Side"
		},{
			slug: "mckinley-park",
			id: 44,
			readable: "McKinley Park"
		},{
			slug: "montclare",
			id: 45,
			readable: "Montclare"
		},{
			slug: "morgan-park",
			id: 46,
			readable: "Morgan Park"
		},{
			slug: "mount-greenwood",
			id: 47,
			readable: "Mount Greenwood"
		},{
			slug: "near-north-side",
			id: 48,
			readable: "Near North Side"
		},{
			slug: "near-south-side",
			id: 49,
			readable: "Near South Side"
		},{
			slug: "near-west-side",
			id: 50,
			readable: "Near West Side"
		},{
			slug: "new-city",
			id: 51,
			readable: "New City"
		},{
			slug: "north-center",
			id: 52,
			readable: "North Center"
		},{
			slug: "north-lawndale",
			id: 53,
			readable: "North Lawndale"
		},{
			slug: "north-park",
			id: 54,
			readable: "North Park"
		},{
			slug: "norwood-park",
			id: 55,
			readable: "Norwood Park"
		},{
			slug: "o-hare",
			id: 56,
			readable: "O’Hare"
		},{
			slug: "oakland",
			id: 57,
			readable: "Oakland"
		},{
			slug: "portage-park",
			id: 58,
			readable: "Portage Park"
		},{
			slug: "pullman",
			id: 59,
			readable: "Pullman"
		},{
			slug: "riverdale",
			id: 60,
			readable: "Riverdale"
		},{
			slug: "rogers-park",
			id: 61,
			readable: "Rogers Park"
		},{
			slug: "roseland",
			id: 62,
			readable: "Roseland"
		},{
			slug:"south-chicago",
			id: 63,
			readable: "South Chicago"
		},{
			slug:"south-deering",
			id: 64,
			readable: "South Deering"
		},{
			slug: "south-lawndale",
			id: 65,
			readable: "South Lawndale"
		},{
			slug: "south-shore",
			id: 66,
			readable: "South Shore"
		},{
			slug: "uptown",
			id: 67,
			readable: "Uptown"
		},{
			slug: "washington-heights",
			id: 68,
			readable: "Washington Heights"
		},{
			slug: "washington-park",
			id: 69,
			readable: "Washington Park"
		},{
			slug: "west-elsdon",
			id: 70,
			readable: "West Elsdon"
		},{
			slug: "west-englewood",
			id: 71,
			readable: "West Englewood"
		},{
			slug: "west-garfield-park",
			id: 72,
			readable: "West Garfield Park"
		},{
			slug: "west-lawn",
			id: 73,
			readable: "West Lawn"
		},{
			slug: "west-pullman",
			id: 74,
			readable: "West Pullman"
		},{
			slug: "west-ridge",
			id: 75,
			readable: "West Ridge"
		},{
			slug: "west-town",
			id: 76,
			readable: "West Town"
		},{
			slug: "woodlawn",
			id: 77,
			readable: "Woodlawn"
		}
	];

	for(let i = 0; i < areas.length; i++) {
		
		if(area == areas[i].slug || area == areas[i].id || area == areas[i].readable) {
			return areas[i][format];
		}
	}
	// If no match is found, just return what was sent. No need to spoil the whole thing.
	return area;

}