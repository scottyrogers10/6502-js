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
	return ["69", tokens[0].substring(2).toLowerCase()];
};

const assembleZeroPageMode = (tokens) => {
	return ["65", tokens[0].substring(1).toLowerCase()];
};

const assembleZeroPageXMode = (tokens) => {
	return ["75", tokens[0].substring(1).toLowerCase()];
};

const assembleAbsoluteMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["6d", word.substring(2, 4), word.substring(0, 2)];
};

const assembleAbsoluteXMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["7d", word.substring(2, 4), word.substring(0, 2)];
};

const assembleAbsoluteYMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["79", word.substring(2, 4), word.substring(0, 2)];
};

const assembleIndirectXMode = (tokens) => {
	return ["61", tokens[0].substring(2)];
};

const assembleIndirectYMode = (tokens) => {
	return ["71", tokens[0].substring(2, 4)];
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
