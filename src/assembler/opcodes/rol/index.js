import { absolute, absoluteX, accumulator, zeroPage, zeroPageX } from "/assembler/address-modes";

export default (params) => {
	if (absolute.isMode(params)) return absolute.assemble("2e", params);
	if (absoluteX.isMode(params)) return absoluteX.assemble("3e", params);
	if (accumulator.isMode(params)) return accumulator.assemble("2a");
	if (zeroPage.isMode(params)) return zeroPage.assemble("26", params);
	if (zeroPageX.isMode(params)) return zeroPageX.assemble("36", params);
};
