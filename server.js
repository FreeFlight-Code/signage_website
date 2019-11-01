const express = require('express'),
    path = require('path'),
    fs = require('fs'),
    bodyParser = require('body-parser');

const config = {
    port: 3001
}

const app = express();

app.use(bodyParser.json());
// app.use(express.static(__dirname + '/build'));

// console.log('SERVING FILES FORM BACKEND', __dirname)

//default building location
var building = 'blackridge';

app.get('/', (req, res)=>{
  console.log('sent once')
  res.redirect('/tvData/blackridge/0');

})


app.get('/tvData/blackridge/0', (req, res)=>{
  console.log('tv get')
  if (req.params.building) building = req.params.building;
  let fileLocation = `/src/Buildings/${building}/tvs.json`;

  const tvData = JSON.parse(fs.readFileSync(path.resolve(__dirname + fileLocation), 'utf8'));
  res.body = tvData;
  console.log(res.body)
  // console.log(__dirname)

  res.send(tvData);

})


app.listen(config.port, () => { console.log(`Success!  Listening on port: ${config.port}`) });