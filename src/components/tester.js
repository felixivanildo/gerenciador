import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainTheme from './commun/Maintheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigate } from 'react-router-dom';

// import "./tester.css"

const Testerte = () => {

  const [elements, setElements] = useState([])
  const Navigate = useNavigate()
  let data = useParams();


  useEffect(() => {

    try {

      const userReceived = data.data
      const decodedString = hexToString(data.data);

      // console.log(decodedString);

      function hexToString(hex) {
        let string = "";
        for (let i = 0; i < hex.length; i += 2) {
          string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        return string;
      }

      const info = JSON.parse(decodedString)


      // Convert the object to JSON
      const jsonOutput = { name: info.display_name, email: info.user_email, cpf: info.user_login }
      // console.log(jsonOutput)


      setElements([<h1>{userReceived}</h1>])
      const running = async () => {
        // await AsyncStorage.clear('@Userchamados')
        await AsyncStorage.setItem('@Userchamados', JSON.stringify(jsonOutput))
        Navigate('/')
      }

      running()
    } catch (error) {
      console.log(error)

      setElements([<h1 style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >USUARIO NÃO AUTENTICADO <br></br> <button onClick={() => { window.location.href = 'https://intranet.casal.al.gov.br' }}>Logar na Intranet</button></h1>,
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