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
	if (absolute.isMode(params)) return absolute.assemble("0d", params);
	if (absoluteX.isMode(params)) return absoluteX.assemble("1d", params);
	if (absoluteY.isMode(params)) return absoluteY.assemble("19", params);
	if (immediate.isMode(params)) return immediate.assemble("09", params);
	if (indirectX.isMode(params)) return indirectX.assemble("01", params);
	if (indirectY.isMode(params)) return indirectY.assemble("11", params);
	if (zeroPage.isMode(params)) return zeroPage.assemble("05", params);
	if (zeroPageX.isMode(params)) return zeroPageX.assemble("15", params);
};
