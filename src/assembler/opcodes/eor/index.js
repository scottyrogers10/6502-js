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
	if (absolute.isMode(params)) return absolute.assemble("4d", params);
	if (absoluteX.isMode(params)) return absoluteX.assemble("5d", params);
	if (absoluteY.isMode(params)) return absoluteY.assemble("59", params);
	if (immediate.isMode(params)) return immediate.assemble("49", params);
	if (indirectX.isMode(params)) return indirectX.assemble("41", params);
	if (indirectY.isMode(params)) return indirectY.assemble("51", params);
	if (zeroPage.isMode(params)) return zeroPage.assemble("45", params);
	if (zeroPageX.isMode(params)) return zeroPageX.assemble("55", params);
};
