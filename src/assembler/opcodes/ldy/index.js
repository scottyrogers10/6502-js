import { absolute, absoluteX, immediate, zeroPage, zeroPageX } from "/assembler/address-modes";

export default (params) => {
	if (absolute.isMode(params)) return absolute.assemble("ac", params);
	if (absoluteX.isMode(params)) return absoluteX.assemble("bc", params);
	if (immediate.isMode(params)) return immediate.assemble("a0", params);
	if (zeroPage.isMode(params)) return zeroPage.assemble("a4", params);
	if (zeroPageX.isMode(params)) return zeroPageX.assemble("b4", params);
};
