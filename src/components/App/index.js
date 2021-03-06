import React, { useState } from "react";
import { assemble, getBinary, getHexdump } from "/assembler";
import { Button, View } from "/library/components";
import { Binary, Hexdump, TextArea } from "./components";
import styles from "./styles";

const App = ({ jss }) => {
	const [code, setCode] = useState("");
	const [binary, setBinary] = useState("");
	const [hexdump, setHexdump] = useState("");

	const handleAssembleClick = () => {
		const assembledLines = assemble(code);
		setHexdump(getHexdump(assembledLines));
		setBinary(getBinary(assembledLines));
	};

	return (
		<View jss={{ ...styles.view, ...jss }}>
			<TextArea jss={styles.textArea} onChange={setCode} value={code} />
			<Button jss={styles.assembleButton} label={"Assemble"} onClick={handleAssembleClick} />
			{hexdump.length > 0 && <Hexdump jss={styles.hexdump} value={hexdump} />}
			{binary.length > 0 && <Binary jss={styles.binary} value={binary} />}
		</View>
	);
};

App.defaultProps = {
	jss: {},
};

export default App;
