import React from "react";
import Logo from "../../img/logocasal60.png"
import search from "../../img/search.png"
import NavButton from "./Navbarbutton";


function MainLayout (){

   
    const navbarStyle = {
        backgroundColor: '#0093DD',
        paddingTop: '0px',
        top: '0px',
        left: '0px',
        right: '0px',
        position: 'relative',
        zIndex: '50',
        height: '75px',
        display: 'flex',
        alignItems: 'center',
        

      };

      const imgstyle = {
      backgroundImage: `url(${Logo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '70px',
      backgroundPosition: 'center center',
      objectFit: 'cover',
      backgroundColor: "white", 
      width: "75px",
      height: "75px",
      marginLeft: "10%"
      }

    return(
        <div>
            <div className="navbar" style={navbarStyle}>
                <div style={imgstyle}/>
                
                <NavButton link="" nome="PAGINA INICIAL" ></NavButton>
                <NavButton link="" nome="MEUS CHAMADOS"></NavButton>
                <NavButton link="" nome="SAIR"></NavButton>
                             
                
               
                    <input  className="searchinput" style={{marginLeft: "41%", width: "280px", height: "4px", borderRadius: "10px", border: "10px", backgroundColor:'#005CA1', borderColor: 'white',
                                    backgroundImage:  `url(${search})` ,
                                    backgroundRepeat:' no-repeat',
                                    backgroundSize: '7%',
                                    backgroundPosition: '10px',
                                    padding: '20px'
                                   
                                }}
                                    
                            onFocus={(data)=>{data.target.style.backgroundColor = "white"; data.target.style.backgroundImage = ""}} 
                            onBlur={(data)=>{data.target.style.backgroundColor = "#005CA1"; data.target.style.backgroundImage = `url(${search})`}}>
                            
                          

                    </input>
                
            </div>
        </div>
    )
}

export default MainLayout