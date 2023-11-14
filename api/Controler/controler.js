const pool = require('../DbConnection/db.js')
// const queries = require("./queries")
// const gsan = require('../gsanDB')
const axios = require('axios')
const multer = require('multer')
const upload = multer({ dest: "../images" })
const path = require('path')
const fs = require('fs')
const Buffer = require('buffer')
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 6969 })
// const { exec } = require('child_process');
const mysql = require ('mysql')





wss.on('connection', (ws) => {
    console.log('WebSocket client connected');

    // Handle WebSocket messages if needed
    ws.on('message', (message) => {
        console.log('Received WebSocket message:', message);
    });
});



const getRegisters = (req, res) => {
    const connection = mysql.createConnection({
        host: '34.151.241.20',
        user: 'newredmine',
        password: 'redmine@getin',
        database: 'redmine'
      });
      
      console.log(req.body)
      
      connection.query(`select iss.id as "Chamado", pj.name as "Projeto",
      tk.name as "Tipo", iss.description as "Descricao",
      st.name as "Status", SUBSTRING(iss.updated_on, 1, 10)  as "Atualizado" from issues iss
      left join trackers tk on tk.id = iss.tracker_id
      left join projects pj on pj.id = iss.project_id 
      left join issue_statuses st on st.id = iss.status_id 
      where iss.description like '%${req.body.name}%'      
      `, (err, rows) => {
        if (err) {
          console.error('Error executing query: ' + err.stack);
          return;
        }
      
        // Process the query result
        console.log('Query result:');
          res.status(200).json(rows);
      
          // Close the database connection
          connection.end((err) => {
            if (err) {
              console.error('Error closing database connection: ' + err.stack);
              return;
            }
      
            console.log('Database connection closed.');
        });
      });
}

// const getRegistersId = (req, res) => {
//     const isncrição = req.params.id;
//     console.log(isncrição)
//     pool.query(queries.getRegistersId + "'" + isncrição + "'", (err, results) => {
//         console.log(queries.getRegistersId, "'" + isncrição + "' 1")
//         if (err) {
//             throw err
//         }

//         res.status(200).json(results.rows)
//         console.log(results.rows)


//     })
// }



// const getGsanCode = (req, res) => {
//     const code = req.params.id;
//     gsan.query(queries.getGsanCode + code, (err, results) => {
//         // console.log(queries.getGsanCode+code)
//         if (err) {
//             throw err
//         }

//         res.status(200).json(results.rows)
//         // console.log(results.rows)
//     })
// }


const postUpdate = (req, res) => {
    console.log(req.body)

    // const data = req.body;
    // var pushjson = {}
    // pushjson.cpf = data.nickname[0]
    // pushjson.nome = data.first_name[0]
    // pushjson.matricula = data.last_name[0]

    // const url =  'http://10.254.4.132:3000/websk/'+ btoa(JSON.stringify(pushjson))


    // // Check if the platform is Windows
    // const isWindows = process.platform === 'win32';

    // // Use the appropriate command based on the platform
    // const command = isWindows ? `start ${url}` : `open ${url}`;

    // // Spawn a new process to open the URL
    // exec(command, (error, stdout, stderr) => {
    //     if (error) {
    //         console.error(`Failed to open URL: ${error}`);
    //     }
    // });

    // console.log(btoa(JSON.stringify(pushjson)))


    // res.sendStatus(200);
}



// const testeambiente = async (req, res) =>{
//     const environmentVariable = process.env.MY_ENV_VARIABLE;

//     if (environmentVariable) {
//       console.log(`Value of MY_ENV_VARIABLE: ${environmentVariable}`);
//     } else {
//       console.error('MY_ENV_VARIABLE is not set.');
//     }
// }


const imgConverter = async (req, res) => {

    console.log(req.body)
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

    var base64img = req.body.image
    console.log(base64img.split(",")[1])

    fs.writeFile(`${req.body.name}${req.body.extension}`, base64img.split(",")[1], { encoding: 'base64' }, function (err) {
        console.log('File created');
    });

    var imagepath = "./" + req.body.name + req.body.extension
    var condition = false

    while (!condition) {
        if (fs.existsSync(imagepath)) {
            condition = true
            await delay(2000)
        }
        await delay(2000)
    }


    imageBuffer = fs.readFileSync(imagepath)

    // console.log(imageBuffer)


    try {
        imagepath = "./" + req.body.name + req.body.extension
        imageBuffer = fs.readFileSync(imagepath)

        // console.log(imageBuffer)
        const apiUrl = 'https://redmine.casal.al.gov.br/uploads.json?key=ca239e06a3f10435c63c610ebd1809737ef72dd8'
        const headers = {
            'Content-Type': 'application/octet-stream',
        };

        fs.unlink(imagepath, function(err){
            if (err){
                console.log(err)
            }

            console.log('file deleted')
        })

        await axios.post(apiUrl, imageBuffer, { headers })
            .then(response => {
                console.log(response.data.upload.token)
                res.status(200).json({ "token": response.data.upload.token, "extension": req.body.extension, "name": req.body.name })
            })
            .catch(error => {

            });
    } catch (error) {
        throw error
    }

}

const teste = (req, res) => {

    // console.log("req.body.issue")


    try {
        // console.log(req.body.issue)
        axios.post('https://redmine.casal.al.gov.br/issues.json?key=ca239e06a3f10435c63c610ebd1809737ef72dd8', req.body).then((e) => { console.log(e) })


        // fs.writeFile('image.jpg', req.body.issue.uploads[0].data.substring(22), {encoding: 'base64'}, function(err) {
        //     console.log('File created');
        // });




        res.status(200).json({ 'mariachi': 'req' })
    } catch (error) {
        throw error
    }

}

module.exports = {
    getRegisters,
    // getRegistersId,
    // getGsanCode,
    postUpdate,
    teste,
    imgConverter
    // testeambiente
}