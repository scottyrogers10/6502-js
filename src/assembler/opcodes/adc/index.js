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
	if (absolute.isMode(params)) return absolute.assemble("6d", params);
	if (absoluteX.isMode(params)) return absoluteX.assemble("7d", params);
	if (absoluteY.isMode(params)) return absoluteY.assemble("79", params);
	if (immediate.isMode(params)) return immediate.assemble("69", params);
	if (indirectX.isMode(params)) return indirectX.assemble("61", params);
	if (indirectY.isMode(params)) return indirectY.assemble("71", params);
	if (zeroPage.isMode(params)) return zeroPage.assemble("65", params);
	if (zeroPageX.isMode(params)) return zeroPageX.assemble("75", params);
};
