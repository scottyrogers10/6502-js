import {
	absolute,
	absoluteX,
	absoluteY,
	immediate,
	indirectX,
	indirectY,
	zeroPage,
	zeroPageX,
} from "/assembler/address-modes";

export default (params) => {
	if (absolute.isMode(params)) return absolute.assemble("cd", params);
	if (absoluteX.isMode(params)) return absoluteX.assemble("dd", params);
	if (absoluteY.isMode(params)) return absoluteY.assemble("d9", params);
	if (immediate.isMode(params)) return immediate.assemble("c9", params);
	if (indirectX.isMode(params)) return indirectX.assemble("c1", params);
	if (indirectY.isMode(params)) return indirectY.assemble("d1", params);
	if (zeroPage.isMode(params)) return zeroPage.assemble("c5", params);
	if (zeroPageX.isMode(params)) return zeroPageX.assemble("d5", params);
};
