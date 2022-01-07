import { absolute, absoluteX, accumulator, zeroPage, zeroPageX } from "/assembler/address-modes";

export default (params) => {
	if (absolute.isMode(params)) return absolute.assemble("6e", params);
	if (absoluteX.isMode(params)) return absoluteX.assemble("7e", params);
	if (accumulator.isMode(params)) return accumulator.assemble("6a");
	if (zeroPage.isMode(params)) return zeroPage.assemble("66", params);
	if (zeroPageX.isMode(params)) return zeroPageX.assemble("76", params);
};
