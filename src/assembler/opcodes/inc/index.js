import { absolute, absoluteX, zeroPage, zeroPageX } from "/assembler/address-modes";

export default (params) => {
	if (absolute.isMode(params)) return absolute.assemble("ee", params);
	if (absoluteX.isMode(params)) return absoluteX.assemble("fe", params);
	if (zeroPage.isMode(params)) return zeroPage.assemble("e6", params);
	if (zeroPageX.isMode(params)) return zeroPageX.assemble("f6", params);
};
