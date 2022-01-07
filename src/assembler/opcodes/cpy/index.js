import { absolute, immediate, zeroPage } from "/assembler/address-modes";

export default (params) => {
	if (absolute.isMode(params)) return absolute.assemble("cc", params);
	if (immediate.isMode(params)) return immediate.assemble("c0", params);
	if (zeroPage.isMode(params)) return zeroPage.assemble("c4", params);
};
