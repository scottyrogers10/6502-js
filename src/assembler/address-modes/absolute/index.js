const assemble = (hexOpcode, params) => {
	const word = params[0].substring(1).toLowerCase();
	return [hexOpcode, word.substring(2, 4), word.substring(0, 2)];
};

const isMode = (params) => {
	return params.length === 1 && params[0].charAt(0) === "$" && params[0].length === 5;
};

export default { assemble, isMode };
