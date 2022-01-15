import { toInt } from "../helpers";

const sanitize = (chunk) => {
	const removedComments = chunk.replace(/^(.*?);.*/, "$1");
	const trimmedLine = removedComments.trim();

	return trimmedLine;
};

const tokenize = (chunk) => {
	return sanitize(chunk).split(" ");
};

const getLineTokensType = (tokens) => {
	if (tokens[0].slice(-1) === ":") {
		return "LABEL";
	}

	if (tokens.length === 3 && tokens[1] === "=") {
		return "VAR";
	}

	return "OP";
};

const lexLine = (tokens, symbolTable) => {
	const line = {
		tokens,
		type: getLineTokensType(tokens),
	};

	if (line.type === "VAR") {
		symbolTable[`__${tokens[0]}`] = toInt(tokens[2]);
	}

	return { line, symbolTable };
};

const lex = (src) => {
	return src.split("\n").reduce(
		(prevVal, chunk) => {
			const tokens = tokenize(chunk);

			if (tokens.length > 0 && tokens[0] !== "") {
				const { line, symbolTable } = lexLine(tokens, prevVal.symbolTable);
				prevVal.lines.push(line);
				prevVal.symbolTable = symbolTable;
			}

			return prevVal;
		},
		{ lines: [], symbolTable: {} }
	);
};

export { lex };
