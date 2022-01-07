const assemble = (hexOpcode, params) => {
	return [hexOpcode, params[0].substring(2, 4)];
};

const isMode = (params) => {
	return (
		params.length === 2 && params[0].charAt(0) === "(" && params[0].length === 5 && params[1].toLowerCase() === "y"
	);
};

export default { assemble, isMode };
