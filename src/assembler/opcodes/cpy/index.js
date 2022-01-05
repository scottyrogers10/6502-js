import { isImmediateMode, isZeroPageMode, isAbsoluteMode } from "/assembler/address-modes";

const assembleImmediateMode = (tokens) => {
	return ["c0", tokens[0].substring(2).toLowerCase()];
};

const assembleZeroPageMode = (tokens) => {
	return ["c4", tokens[0].substring(1).toLowerCase()];
};

const assembleAbsoluteMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["cc", word.substring(2, 4), word.substring(0, 2)];
};

export default (tokens) => {
	if (isImmediateMode(tokens)) return assembleImmediateMode(tokens);
	if (isZeroPageMode(tokens)) return assembleZeroPageMode(tokens);
	if (isAbsoluteMode(tokens)) return assembleAbsoluteMode(tokens);
};
