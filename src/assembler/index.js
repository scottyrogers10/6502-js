import { lex } from "./lexer";
import opcodes from "./opcodes";

// MEMORY MAP
/*
	ZeroPage => $00 - $ff
	Stack => $0100 - $01ff
	Screen Memory => $0400 - $07e7
	Program ROM => $8000 - $ffff
*/

// SIMPLE PROGRAM
/*
posLo = $00	; pointer position of current pixel
posHi = $01

SPEED = $01
BLACK_COLOR = $00
WHITE_COLOR = $01

	jsr init
	jsr gameLoop

init:
	jsr initSnake
	rts

initSnake:
	lda #$00
	sta posLo
	lda #$04
	sta posHi
	lda #WHITE_COLOR
	ldy #$00
	sta (posHi), y
	rts

gameLoop:
	ldy #$00
loopPixels:
	lda #BLACK_COLOR
	sta (posHi), y
	lda #SPEED
	clc
	adc posLo	; only the lo byte gets incremented $00-$ff
	sta snakePosLo
	lda #WHITE_COLOR
	iny
	sta (posHi), y
	jmp gameLoop
*/

const assemble = ({ programRom = "$8000", src = "" }) => {
	const { lines, symbolTable } = lex(src);
	console.log(lines);
	console.log(symbolTable);

	// return lines.reduce((prevVal, line) => {
	// 	const tokens = cleanLine(line).split(/[ ,]+/);

	// 	if (tokens.length > 0 && tokens[0] !== "") {
	// 		const opcode = tokens[0].toLowerCase();
	// 		const bytes = opcodes[opcode](tokens.slice(1));
	// 		prevVal.push(bytes);
	// 	}

	// 	return prevVal;
	// }, []);
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
