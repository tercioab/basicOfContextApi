import React from "react";
import MyContextProvider from "./contextApi/myContextProvider";
import Recebe from "./page/recebe";

function App() {
	return (
		<MyContextProvider>
			<div>
				<Recebe />
			</div>
		</MyContextProvider>
	);
}

export default App;
