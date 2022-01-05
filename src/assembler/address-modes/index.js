const isAccumulatorMode = (tokens) => {
	return tokens[0].charAt(0).toLowerCase() === "a";
};

const isImmediateMode = (tokens) => {
	return tokens[0].charAt(0) === "#";
};

const isZeroPageMode = (tokens) => {
	return tokens.length === 1 && tokens[0].charAt(0) === "$" && tokens[0].length === 3;
};

const isZeroPageXMode = (tokens) => {
	return (
		tokens.length === 2 && tokens[0].charAt(0) === "$" && tokens[0].length === 3 && tokens[1].toLowerCase() === "x"
	);
};

const isZeroPageYMode = (tokens) => {
	return (
		tokens.length === 2 && tokens[0].charAt(0) === "$" && tokens[0].length === 3 && tokens[1].toLowerCase() === "y"
	);
};

const isAbsoluteMode = (tokens) => {
	return tokens.length === 1 && tokens[0].charAt(0) === "$" && tokens[0].length === 5;
};

const isAbsoluteXMode = (tokens) => {
	return (
		tokens.length === 2 && tokens[0].charAt(0) === "$" && tokens[0].length === 5 && tokens[1].toLowerCase() === "x"
	);
};

const isAbsoluteYMode = (tokens) => {
	return (
		tokens.length === 2 && tokens[0].charAt(0) === "$" && tokens[0].length === 5 && tokens[1].toLowerCase() === "y"
	);
};

const isIndirectMode = (tokens) => {
	return tokens.length === 1 && tokens[0].charAt(0) === "(" && tokens[0].length === 7;
};

const isIndirectXMode = (tokens) => {
	return (
		tokens.length === 2 && tokens[0].charAt(0) === "(" && tokens[0].length === 4 && tokens[1].toLowerCase() === "x)"
	);
};

const isIndirectYMode = (tokens) => {
	return (
		tokens.length === 2 && tokens[0].charAt(0) === "(" && tokens[0].length === 5 && tokens[1].toLowerCase() === "y"
	);
};

export {
	isAccumulatorMode,
	isImmediateMode,
	isZeroPageMode,
	isZeroPageXMode,
	isZeroPageYMode,
	isAbsoluteMode,
	isAbsoluteXMode,
	isAbsoluteYMode,
	isIndirectMode,
	isIndirectXMode,
	isIndirectYMode,
};
