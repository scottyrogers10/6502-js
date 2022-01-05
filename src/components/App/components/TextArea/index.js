import React from "react";
import { jssToClassName } from "/library/utils/styles";
import styles from "./styles";

const TextArea = ({ jss, onChange, value }) => {
	const handleChange = ({ target }) => onChange(target.value);

	return (
		<textarea
			autoFocus={true}
			className={jssToClassName({ ...styles.textArea, ...jss })}
			onChange={handleChange}
			spellCheck={false}
			value={value}
		/>
	);
};

TextArea.defaultProps = {
	jss: {},
	onChange: () => {},
	value: "",
};

export default TextArea;
