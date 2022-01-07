import { absolute, absoluteX, zeroPage, zeroPageX } from "/assembler/address-modes";

export default (params) => {
	if (absolute.isMode(params)) return absolute.assemble("ce", params);
	if (absoluteX.isMode(params)) return absoluteX.assemble("de", params);
	if (zeroPage.isMode(params)) return zeroPage.assemble("c6", params);
	if (zeroPageX.isMode(params)) return zeroPageX.assemble("c6", params);
};
