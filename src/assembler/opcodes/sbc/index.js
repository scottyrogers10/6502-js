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
	if (absolute.isMode(params)) return absolute.assemble("ed", params);
	if (absoluteX.isMode(params)) return absoluteX.assemble("fd", params);
	if (absoluteY.isMode(params)) return absoluteY.assemble("f9", params);
	if (immediate.isMode(params)) return immediate.assemble("e9", params);
	if (indirectX.isMode(params)) return indirectX.assemble("e1", params);
	if (indirectY.isMode(params)) return indirectY.assemble("f1", params);
	if (zeroPage.isMode(params)) return zeroPage.assemble("e5", params);
	if (zeroPageX.isMode(params)) return zeroPageX.assemble("f5", params);
};
