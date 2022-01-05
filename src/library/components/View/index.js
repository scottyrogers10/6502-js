import React from "react";
import { jssToClassName } from "../../utils/styles";

const View = ({ jss, ...props }) => {
	return <div className={jssToClassName(jss)} {...props} />;
};

View.defaultProps = {
	children: null,
	jss: {},
	style: {},
};

export default View;
