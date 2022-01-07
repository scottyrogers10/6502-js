const assemble = (hexOpcode, params) => {
	return [hexOpcode, params[0].substring(1).toLowerCase()];
};

const isMode = (params) => {
	return (
		params.length === 2 && params[0].charAt(0) === "$" && params[0].length === 3 && params[1].toLowerCase() === "x"
	);
};

export default { assemble, isMode };
