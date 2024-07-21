const searchJson = <T>(JsonArray: Array<T>, searchKey: string, keysOfInterest: Array<keyof T>) => {
	searchKey = searchKey.trim().replace(/\W/g, (e) => (e === " " ? " " : ""));

	if (!searchKey || !JsonArray.length) return JsonArray;
	const searchRes = [];

	for (let i = 0; i < JsonArray.length; i++) {
		let searchRegexp = new RegExp(searchKey, "ig");
		let el = JsonArray[i];
		if (keysOfInterest.some((k: keyof T) => !!el[k] && searchRegexp.test(String(el[k])))) searchRes.push(el);
		else continue;
	}

	return searchRes;
};

export { searchJson };
