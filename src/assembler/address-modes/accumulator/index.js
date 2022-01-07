const assemble = (hexOpcode) => {
	return [hexOpcode];
};

const isMode = (params) => {
	return params[0].charAt(0).toLowerCase() === "a";
};

export default { assemble, isMode };
