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
	if (absolute.isMode(params)) return absolute.assemble("2d", params);
	if (absoluteX.isMode(params)) return absoluteX.assemble("3d", params);
	if (absoluteY.isMode(params)) return absoluteY.assemble("39", params);
	if (immediate.isMode(params)) return immediate.assemble("29", params);
	if (indirectX.isMode(params)) return indirectX.assemble("21", params);
	if (indirectY.isMode(params)) return indirectY.assemble("31", params);
	if (zeroPage.isMode(params)) return zeroPage.assemble("25", params);
	if (zeroPageX.isMode(params)) return zeroPageX.assemble("35", params);
};
