import React, {useState} from "react";
import Logo from "../../img/logocasal60.png"
import { useNavigate } from "react-router-dom";
import search from "../../img/search.png"


function MainLayout (){

    const Navigate = useNavigate ()


    const [color, setColor] = useState ([{background: 'rgb(0, 147, 221)'}, {texto: "white"}])

    const enterhandler = (data)=>{
       setColor([{background: 'white'}, {texto: "black"}])
       
   }


   const leavehandler = () =>{
    setColor([{background: 'rgb(0, 147, 221)'}, {texto: "white"}])
   }

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
                <div onMouseEnter={enterhandler} onMouseLeave={leavehandler} style={{background: `${color[0].background}`,
                     display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px'}} onClick={()=>{Navigate('/')}}>

                    <a href="/" style={{marginLeft: '20px', color: `${color[1].texto}`, textDecoration: 'none', fontSize: "large", fontWeight: 'bold', 
                     display: 'flex', justifyContent: 'center', alignItems: 'center', margin:'0px'}}>PÁGINA INICIAL</a>


                </div>
                
               
                    <input  className="searchinput" style={{marginLeft: "50%", width: "280px", height: "4px", borderRadius: "10px", border: "10px", backgroundColor:'#005CA1', borderColor: 'white',
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