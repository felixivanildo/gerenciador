import React from "react";
import "./Form.css"

function MainTheme (Props){

    const {elements} = Props;

    console.log (Props.message)

    return(
        <div className="tela">
            <div className="bgfitter">
                <div className="mainform" style={{display: 'flex', textAlign: "justify", textJustify: "inter-word"}}>
                    {elements}
                </div>
                
            </div>
        </div>
    )
}

export default MainTheme;