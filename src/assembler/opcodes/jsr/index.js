import { absolute } from "/assembler/address-modes";

export default (params) => {
	if (absolute.isMode(params)) return absolute.assemble("20", params);
};
