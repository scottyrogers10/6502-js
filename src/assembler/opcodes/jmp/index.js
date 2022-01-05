import { isAbsoluteMode, isIndirectMode } from "/assembler/address-modes";

const assembleAbsoluteMode = (tokens) => {
	const word = tokens[0].substring(1).toLowerCase();
	return ["4c", word.substring(2, 4), word.substring(0, 2)];
};

const assembleIndirectMode = (tokens) => {
	const word = tokens[0].substring(2, 6).toLowerCase();
	return ["6c", word.substring(2, 4), word.substring(0, 2)];
};

export default (tokens) => {
	if (isAbsoluteMode(tokens)) return assembleAbsoluteMode(tokens);
	if (isIndirectMode(tokens)) return assembleIndirectMode(tokens);
};
