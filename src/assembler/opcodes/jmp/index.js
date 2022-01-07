import { absolute, indirect } from "/assembler/address-modes";

export default (params) => {
	if (absolute.isMode(params)) return absolute.assemble("4c", params);
	if (indirect.isMode(params)) return indirect.assemble("6c", params);
};
