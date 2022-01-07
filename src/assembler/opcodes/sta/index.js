import {
	isZeroPageMode,
	isZeroPageXMode,
	isAbsoluteMode,
	isAbsoluteXMode,
	isAbsoluteYMode,
	isIndirectXMode,
	isIndirectYMode,
} from "/assembler/address-modes";

const assembleZeroPageMode = (tokens) => {
	return ["85", tokens[0].substring(1).toLowerCase()];
};

const assembleZeroPageXMode = (tokens) => {
	return ["95", tokens[0].substring(1).toLowerCase()];
};

const assembleAbsoluteMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["8d", word.substring(2, 4), word.substring(0, 2)];
};

const assembleAbsoluteXMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["9d", word.substring(2, 4), word.substring(0, 2)];
};

const assembleAbsoluteYMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["99", word.substring(2, 4), word.substring(0, 2)];
};

const assembleIndirectXMode = (tokens) => {
	return ["81", tokens[0].substring(2)];
};

const assembleIndirectYMode = (tokens) => {
	return ["91", tokens[0].substring(2, 4)];
};

export default (tokens) => {
	if (isZeroPageMode(tokens)) return assembleZeroPageMode(tokens);
	if (isZeroPageXMode(tokens)) return assembleZeroPageXMode(tokens);
	if (isAbsoluteMode(tokens)) return assembleAbsoluteMode(tokens);
	if (isAbsoluteXMode(tokens)) return assembleAbsoluteXMode(tokens);
	if (isAbsoluteYMode(tokens)) return assembleAbsoluteYMode(tokens);
	if (isIndirectXMode(tokens)) return assembleIndirectXMode(tokens);
	if (isIndirectYMode(tokens)) return assembleIndirectYMode(tokens);
};
