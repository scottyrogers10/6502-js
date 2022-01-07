import { isZeroPageMode, isZeroPageXMode, isAbsoluteMode } from "/assembler/address-modes";

const assembleZeroPageMode = (tokens) => {
	return ["84", tokens[0].substring(1).toLowerCase()];
};

const assembleZeroPageXMode = (tokens) => {
	return ["94", tokens[0].substring(1).toLowerCase()];
};

const assembleAbsoluteMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["8c", word.substring(2, 4), word.substring(0, 2)];
};

export default (tokens) => {
	if (isZeroPageMode(tokens)) return assembleZeroPageMode(tokens);
	if (isZeroPageXMode(tokens)) return assembleZeroPageXMode(tokens);
	if (isAbsoluteMode(tokens)) return assembleAbsoluteMode(tokens);
};
