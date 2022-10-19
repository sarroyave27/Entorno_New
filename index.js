const express = require('express');
const server = express();
const dotenv = require('dotenv');
dotenv.config();

const title = process.env.title;
const row1 = process.env.row1;
const row2 = process.env.row2;
const row3 = process.env.row3;
const port = process.env.port;

server.get('/', (req,res)=> {
    res.send(`
    <center>
    <h1>${title}</h1>
    <table border="black">
    <tr>
      <td>${row1}</td>
      <td>${row2}</td>
      <td>${row3}</td>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
  </table>
  </center>
    `);
})


server.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})