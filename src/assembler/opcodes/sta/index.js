import { absolute, absoluteX, absoluteY, indirectX, indirectY, zeroPage, zeroPageX } from "/assembler/address-modes";

export default (params) => {
	if (absolute.isMode(params)) return absolute.assemble("8d", params);
	if (absoluteX.isMode(params)) return absoluteX.assemble("9d", params);
	if (absoluteY.isMode(params)) return absoluteY.assemble("99", params);
	if (indirectX.isMode(params)) return indirectX.assemble("81", params);
	if (indirectY.isMode(params)) return indirectY.assemble("91", params);
	if (zeroPage.isMode(params)) return zeroPage.assemble("85", params);
	if (zeroPageX.isMode(params)) return zeroPageX.assemble("95", params);
};
