import React from "react";
import { jssToClassName } from "../../utils/styles";
import styles from "./styles";

const Button = ({ jss, label, onClick }) => {
	return (
		<button className={jssToClassName({ ...jss, ...styles.button })} onClick={onClick} type={"button"}>
			{label}
		</button>
	);
};

Button.defaultProps = {
	jss: {},
	label: "",
	onClick: () => {},
};

export default Button;
