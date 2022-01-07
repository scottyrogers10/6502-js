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
	if (absolute.isMode(params)) return absolute.assemble("ad", params);
	if (absoluteX.isMode(params)) return absoluteX.assemble("bd", params);
	if (absoluteY.isMode(params)) return absoluteY.assemble("b9", params);
	if (immediate.isMode(params)) return immediate.assemble("a9", params);
	if (indirectX.isMode(params)) return indirectX.assemble("a1", params);
	if (indirectY.isMode(params)) return indirectY.assemble("b1", params);
	if (zeroPage.isMode(params)) return zeroPage.assemble("a5", params);
	if (zeroPageX.isMode(params)) return zeroPageX.assemble("b5", params);
};
