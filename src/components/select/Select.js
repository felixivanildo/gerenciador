import React from "react";
import './Select.css'
import { useNavigate } from "react-router-dom";
import Divisionbar from "../commun/Divisionbar";

function Selectscreen() {

    const navigate = useNavigate()
    const handleClick = (data) => {
        
        navigate(`/${data.target.textContent}`)
    }

  

    return (
        <div className="wholescreen" >
            
            <div className="mainsquare">
            <div className="img"></div>
                <div class="grid">
                    <div class="grid-item" style={{ background: "#0075bc" }} onClick={handleClick}>DENÚNCIA</div>
                    <div class="grid-item" style={{ background: "#ffcc00" }} onClick={handleClick}>SUDEO</div>
                    <div class="grid-item" style={{ background: "#a7ce43" }} onClick={handleClick}>GETIN</div>
                    <div class="grid-item" style={{ background: "#aa8603" }} onClick={handleClick}>GEROC</div>
                    <div class="grid-item" style={{ background: "#00cc96" }} onClick={handleClick}>GESUP</div>
                    <div class="grid-item" style={{ background: "#00aeee" }} onClick={handleClick}>GESEA</div>
                    <div class="grid-item" style={{ background: "#55AA55" }} onClick={handleClick}>GEPAT</div>
                    <div class="grid-item" style={{ background: "#5243cee3" }} onClick={handleClick}>RH</div>
                    <div class="grid-item" style={{ background: "#05A64B" }} onClick={handleClick}>CIPA</div>
                    <div class="grid-item" style={{ display: "NONE" }}></div>

                </div>
                <Divisionbar />
                <div className="meus">
                    MEUS CHAMADOS
                </div>
            </div>
        </div>
    );
}

export default Selectscreen;


