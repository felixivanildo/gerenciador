import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainTheme from './commun/Maintheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigate } from 'react-router-dom';
// import "./tester.css"

const Testerte = () => {

  const [elements, setElements] = useState([])
  const Navigate = useNavigate ()
  let data = useParams();


  useEffect(() => {
    
    try {
      const userReceived = atob(data.data)
      const info = JSON.parse(userReceived)
      console.log(info)      
        
      setElements([<h1>LOGGED</h1>])
      const running = async ()=>{
        await AsyncStorage.setItem('@User', JSON.stringify(info))
        
      }
      
      running ()
    } catch (error) {
      
      setElements([<h1  style={{display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}} >USUARIO NÃO AUTENTICADO <br></br> <button onClick={()=>{window.location.href = 'https://intranet.casal.al.gov.br'}}>Logar na Intranet</button></h1>,              
    ])
      
    }





  }, [])


  return (
    <div >
    {elements}
    
    <div className="drop-container">
      <div className='drop'></div>
    </div>
  
      
    </div>
  );
};

export default Testerte;