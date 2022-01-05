import React from "react";
import { View } from "@library/components";
import styles from "./styles";

const Binary = ({ jss, value }) => {
	return (
		<View jss={{ ...styles.view, ...jss }}>
			<View jss={styles.code}>{value}</View>
		</View>
	);
};

Binary.defaultProps = {
	jss: {},
	value: "",
};

export default Binary;
