import { absolute, zeroPage } from "/assembler/address-modes";

export default (params) => {
	if (absolute.isMode(params)) return absolute.assemble("2c", params);
	if (zeroPage.isMode(params)) return zeroPage.assemble("24", params);
};
