import {
	isImmediateMode,
	isZeroPageMode,
	isZeroPageYMode,
	isAbsoluteMode,
	isAbsoluteYMode,
} from "/assembler/address-modes";

const assembleImmediateMode = (tokens) => {
	return ["a2", tokens[0].substring(2).toLowerCase()];
};

const assembleZeroPageMode = (tokens) => {
	return ["a6", tokens[0].substring(1).toLowerCase()];
};

const assembleZeroPageYMode = (tokens) => {
	return ["b6", tokens[0].substring(1).toLowerCase()];
};

const assembleAbsoluteMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["ae", word.substring(2, 4), word.substring(0, 2)];
};

const assembleAbsoluteYMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["be", word.substring(2, 4), word.substring(0, 2)];
};

export default (tokens) => {
	if (isImmediateMode(tokens)) return assembleImmediateMode(tokens);
	if (isZeroPageMode(tokens)) return assembleZeroPageMode(tokens);
	if (isZeroPageYMode(tokens)) return assembleZeroPageYMode(tokens);
	if (isAbsoluteMode(tokens)) return assembleAbsoluteMode(tokens);
	if (isAbsoluteYMode(tokens)) return assembleAbsoluteYMode(tokens);
};
