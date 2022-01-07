import { isZeroPageMode, isZeroPageYMode, isAbsoluteMode } from "/assembler/address-modes";

const assembleZeroPageMode = (tokens) => {
	return ["86", tokens[0].substring(1).toLowerCase()];
};

const assembleZeroPageYMode = (tokens) => {
	return ["96", tokens[0].substring(1).toLowerCase()];
};

const assembleAbsoluteMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["8e", word.substring(2, 4), word.substring(0, 2)];
};

export default (tokens) => {
	if (isZeroPageMode(tokens)) return assembleZeroPageMode(tokens);
	if (isZeroPageYMode(tokens)) return assembleZeroPageYMode(tokens);
	if (isAbsoluteMode(tokens)) return assembleAbsoluteMode(tokens);
};
