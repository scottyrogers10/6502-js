import { isAbsoluteMode } from "/assembler/address-modes";

const assembleAbsoluteMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["20", word.substring(2, 4), word.substring(0, 2)];
};

export default (tokens) => {
	if (isAbsoluteMode(tokens)) return assembleAbsoluteMode(tokens);
};
