import { absolute, absoluteY, immediate, zeroPage, zeroPageY } from "/assembler/address-modes";

export default (params) => {
	if (absolute.isMode(params)) return absolute.assemble("ae", params);
	if (absoluteY.isMode(params)) return absoluteY.assemble("be", params);
	if (immediate.isMode(params)) return immediate.assemble("a2", params);
	if (zeroPage.isMode(params)) return zeroPage.assemble("a6", params);
	if (zeroPageY.isMode(params)) return zeroPageY.assemble("b6", params);
};
