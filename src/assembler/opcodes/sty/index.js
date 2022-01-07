import { absolute, zeroPage, zeroPageX } from "/assembler/address-modes";

export default (params) => {
	if (absolute.isMode(params)) return absolute.assemble("8c", params);
	if (zeroPage.isMode(params)) return zeroPage.assemble("84", params);
	if (zeroPageX.isMode(params)) return zeroPageX.assemble("94", params);
};
