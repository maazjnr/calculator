import React, { useContext } from "react";
import { CalcContext } from "../Context/CalContext";
import { ReactTextField } from "react-textfield";


const Wrapper = () => {

    const {calc} = useContext(CalcContext)

    return(
        <div className="screen">
            <h1 className="resultNumber">
                {calc.num ? calc.num : calc.res}
            </h1>
        </div>
    )
}

export default Wrapper;