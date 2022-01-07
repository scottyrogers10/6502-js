import { absolute, zeroPage, zeroPageY } from "/assembler/address-modes";

export default (params) => {
	if (absolute.isMode(params)) return absolute.assemble("8e", params);
	if (zeroPage.isMode(params)) return zeroPage.assemble("86", params);
	if (zeroPageY.isMode(params)) return zeroPageY.assemble("96", params);
};
