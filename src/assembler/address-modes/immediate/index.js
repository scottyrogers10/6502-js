const assemble = (hexOpcode, params) => {
	return [hexOpcode, params[0].substring(2).toLowerCase()];
};

const isMode = (params) => {
	return params[0].charAt(0) === "#";
};

export default { assemble, isMode };
