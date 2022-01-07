import {
	isImmediateMode,
	isZeroPageMode,
	isZeroPageXMode,
	isAbsoluteMode,
	isAbsoluteXMode,
	isAbsoluteYMode,
	isIndirectXMode,
	isIndirectYMode,
} from "/assembler/address-modes";

const assembleImmediateMode = (tokens) => {
	return ["e9", tokens[0].substring(2).toLowerCase()];
};

const assembleZeroPageMode = (tokens) => {
	return ["e5", tokens[0].substring(1).toLowerCase()];
};

const assembleZeroPageXMode = (tokens) => {
	return ["f5", tokens[0].substring(1).toLowerCase()];
};

const assembleAbsoluteMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["ed", word.substring(2, 4), word.substring(0, 2)];
};

const assembleAbsoluteXMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["fd", word.substring(2, 4), word.substring(0, 2)];
};

const assembleAbsoluteYMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["f9", word.substring(2, 4), word.substring(0, 2)];
};

const assembleIndirectXMode = (tokens) => {
	return ["e1", tokens[0].substring(2)];
};

const assembleIndirectYMode = (tokens) => {
	return ["f1", tokens[0].substring(2, 4)];
};

export default (tokens) => {
	if (isImmediateMode(tokens)) return assembleImmediateMode(tokens);
	if (isZeroPageMode(tokens)) return assembleZeroPageMode(tokens);
	if (isZeroPageXMode(tokens)) return assembleZeroPageXMode(tokens);
	if (isAbsoluteMode(tokens)) return assembleAbsoluteMode(tokens);
	if (isAbsoluteXMode(tokens)) return assembleAbsoluteXMode(tokens);
	if (isAbsoluteYMode(tokens)) return assembleAbsoluteYMode(tokens);
	if (isIndirectXMode(tokens)) return assembleIndirectXMode(tokens);
	if (isIndirectYMode(tokens)) return assembleIndirectYMode(tokens);
};
