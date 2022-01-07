import { absolute, immediate, zeroPage } from "/assembler/address-modes";

export default (params) => {
	if (absolute.isMode(params)) return absolute.assemble("ec", params);
	if (immediate.isMode(params)) return immediate.assemble("e0", params);
	if (zeroPage.isMode(params)) return zeroPage.assemble("e4", params);
};
