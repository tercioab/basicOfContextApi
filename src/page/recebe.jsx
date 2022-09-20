import React, { useContext } from "react";
import myContext from "../contextApi/context";


function Recebe() {

    const { state } = useContext(myContext)
    console.log(state);
    
    
	return <div>{state}</div>;
}



export default Recebe;
