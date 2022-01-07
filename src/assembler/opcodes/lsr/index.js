import { absolute, absoluteX, accumulator, zeroPage, zeroPageX } from "/assembler/address-modes";

export default (params) => {
	if (absolute.isMode(params)) return absolute.assemble("4e", params);
	if (absoluteX.isMode(params)) return absoluteX.assemble("5e", params);
	if (accumulator.isMode(params)) return accumulator.assemble("4a");
	if (zeroPage.isMode(params)) return zeroPage.assemble("46", params);
	if (zeroPageX.isMode(params)) return zeroPageX.assemble("56", params);
};
