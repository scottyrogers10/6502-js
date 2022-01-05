import React from "react";
import { View } from "@library/components";
import styles from "./styles";

const Hexdump = ({ jss, value }) => {
	return (
		<View jss={{ ...styles.view, ...jss }}>
			<View jss={styles.code}>{value}</View>
		</View>
	);
};

Hexdump.defaultProps = {
	jss: {},
	value: "",
};

export default Hexdump;
