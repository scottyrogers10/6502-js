import opcodes from "./opcodes";

const cleanLine = (line) => {
	const removedComments = line.replace(/^(.*?);.*/, "$1");
	const trimmedLine = removedComments.trim();

	return trimmedLine;
};

const assemble = (code = "") => {
	const lines = code.split("\n");

	return lines.reduce((prevVal, line) => {
		const tokens = cleanLine(line).split(/[ ,]+/);

		if (tokens.length > 0 && tokens[0] !== "") {
			const opcode = tokens[0].toLowerCase();
			const bytes = opcodes[opcode](tokens.slice(1));
			prevVal.push(bytes);
		}

		return prevVal;
	}, []);
};

const getBinary = (assembledLines) => {
	return assembledLines.reduce((prevVal, assembledLine) => {
		assembledLine.forEach((byte) => {
			const hexInt = Number(`0x${byte}`);
			const rawBin = hexInt.toString(2);
			const bin = `${"00000000".substring(rawBin.length)}${rawBin}`;
			prevVal = `${prevVal}${bin} `;
		});

		return prevVal;
	}, "");
};

const getHexdump = (assembledLines) => {
	let byteCount = 0;

	return assembledLines.reduce((prevVal, assembledLine) => {
		assembledLine.forEach((byte) => {
			if (byteCount % 16 === 0 && byteCount !== 0) {
				prevVal = `${prevVal}\n`;
			}

			byteCount++;
			prevVal = `${prevVal}${byte} `;
		});

		return prevVal;
	}, "");
};

export { assemble, getBinary, getHexdump };
