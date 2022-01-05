import { StyleSheet } from "aphrodite";
import { css } from "aphrodite/no-important";

const jssToClassName = (styles) => {
	if (Object.keys(styles).length > 0) {
		const styleSheet = StyleSheet.create({ styles });
		return css(styleSheet.styles);
	}

	return null;
};

export default jssToClassName;
