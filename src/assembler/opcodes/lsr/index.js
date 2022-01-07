import {
	isAccumulatorMode,
	isZeroPageMode,
	isZeroPageXMode,
	isAbsoluteMode,
	isAbsoluteXMode,
} from "/assembler/address-modes";

const assembleAccumulatorMode = (tokens) => {
	return ["4a"];
};

const assembleZeroPageMode = (tokens) => {
	return ["46", tokens[0].substring(1).toLowerCase()];
};

const assembleZeroPageXMode = (tokens) => {
	return ["56", tokens[0].substring(1).toLowerCase()];
};

const assembleAbsoluteMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["4e", word.substring(2, 4), word.substring(0, 2)];
};

const assembleAbsoluteXMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["5e", word.substring(2, 4), word.substring(0, 2)];
};

export default (tokens) => {
	if (isAccumulatorMode(tokens)) return assembleAccumulatorMode(tokens);
	if (isZeroPageMode(tokens)) return assembleZeroPageMode(tokens);
	if (isZeroPageXMode(tokens)) return assembleZeroPageXMode(tokens);
	if (isAbsoluteMode(tokens)) return assembleAbsoluteMode(tokens);
	if (isAbsoluteXMode(tokens)) return assembleAbsoluteXMode(tokens);
};
