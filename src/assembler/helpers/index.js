const binToInt = (val) => {
	return parseInt(val, 2);
};

const hexToInt = (val) => {
	return parseInt(val, 16);
};

const toInt = (val) => {
	const str = val.toString();

	if (str[0] === "%") {
		return binToInt(str.substring(1));
	}

	if (str[0] === "$") {
		return hexToInt(str.substring(1));
	}

	return parseInt(str, 10);
};

export { binToInt, hexToInt, toInt };
