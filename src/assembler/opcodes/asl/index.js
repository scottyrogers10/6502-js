import { absolute, absoluteX, accumulator, zeroPage, zeroPageX } from "/assembler/address-modes";

export default (params) => {
	if (absolute.isMode(params)) return absolute.assemble("0e", params);
	if (absoluteX.isMode(params)) return absoluteX.assemble("1e", params);
	if (accumulator.isMode(params)) return accumulator.assemble("0a");
	if (zeroPage.isMode(params)) return zeroPage.assemble("06", params);
	if (zeroPageX.isMode(params)) return zeroPageX.assemble("16", params);
};
