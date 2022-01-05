import { isZeroPageMode, isAbsoluteMode } from "/assembler/address-modes";

const assembleZeroPageMode = (tokens) => {
	return ["24", tokens[0].substring(1).toLowerCase()];
};

const assembleAbsoluteMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["2c", word.substring(2, 4), word.substring(0, 2)];
};

export default (tokens) => {
	if (isZeroPageMode(tokens)) return assembleZeroPageMode(tokens);
	if (isAbsoluteMode(tokens)) return assembleAbsoluteMode(tokens);
};
