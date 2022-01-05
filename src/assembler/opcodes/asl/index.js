import {
	isAccumulatorMode,
	isZeroPageMode,
	isZeroPageXMode,
	isAbsoluteMode,
	isAbsoluteXMode,
} from "/assembler/address-modes";

const assembleAccumulatorMode = (tokens) => {
	return ["0a"];
};

const assembleZeroPageMode = (tokens) => {
	return ["06", tokens[0].substring(1).toLowerCase()];
};

const assembleZeroPageXMode = (tokens) => {
	return ["16", tokens[0].substring(1).toLowerCase()];
};

const assembleAbsoluteMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["0e", word.substring(2, 4), word.substring(0, 2)];
};

const assembleAbsoluteXMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["1e", word.substring(2, 4), word.substring(0, 2)];
};

export default (tokens) => {
	if (isAccumulatorMode(tokens)) return assembleAccumulatorMode(tokens);
	if (isZeroPageMode(tokens)) return assembleZeroPageMode(tokens);
	if (isZeroPageXMode(tokens)) return assembleZeroPageXMode(tokens);
	if (isAbsoluteMode(tokens)) return assembleAbsoluteMode(tokens);
	if (isAbsoluteXMode(tokens)) return assembleAbsoluteXMode(tokens);
};
