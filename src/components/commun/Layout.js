import React from "react";
import Logo from "../../img/logocasal60.png"
import search from "../../img/search.png"
import NavButton from "./Navbarbutton";
import "./Layout.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

function MainLayout() {

  const Navigate = useNavigate()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {

    const cleaner = async () => {




      const value = await AsyncStorage.getItem('@User') ?? false;

      console.log(typeof (value))



      if (!value) {
        // value previously stored
        //  Navigate("/websk/:data")
      }


    }

    cleaner()
  })



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
    justifyContent: 'center'


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
    marginLeft: "30%"
  
  }




  return (


    <div>


      <div className="navbar" style={navbarStyle}>
        
        <div>
          {[ 'top'].map((anchor) => (
            <React.Fragment key={anchor}>
              <div onClick={toggleDrawer(anchor, true)}  style={imgstyle} className="clicklogo" />
              {/* <Button >{anchor}</Button> */}
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                <NavButton link="" nome="PAGINA INICIAL"></NavButton>
                <NavButton type="dropdown" nome="SETORES"></NavButton>
                <NavButton link="MEUS CHAMADOS" nome="MEUS CHAMADOS"></NavButton>
                <NavButton link="" nome="SAIR"></NavButton>




                {/* <input className="searchinput" style={{
                  marginLeft: "41%", width: "280px", height: "4px", borderRadius: "10px", border: "10px", backgroundColor: '#005CA1', borderColor: 'white',
                  backgroundImage: `url(${search})`,
                  backgroundRepeat: ' no-repeat',
                  backgroundSize: '7%',
                  backgroundPosition: '10px',
                  padding: '20px'

                }}

                  onFocus={(data) => { data.target.style.backgroundColor = "white"; data.target.style.backgroundImage = "" }}
                  onBlur={(data) => { data.target.style.backgroundColor = "#005CA1"; data.target.style.backgroundImage = `url(${search})` }}>



                </input> */}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>


      </div>
    </div>
  )
}

export default MainLayout