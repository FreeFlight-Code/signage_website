const express = require('express'),
    path = require('path'),
    fs = require('fs'),
    bodyParser = require('body-parser');

const config = {
    port: 3031
}

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

console.log('SERVING FILES FORM BACKEND', __dirname)
app.use(express.static(__dirname + '/../build'));

app.get('/tvdata/:building/:tvIndex', (req, res) => {
    const { building, tvIndex } = req.params;

    const fileLocation = `../src/Buildings/${building}/tvs.json`;
    
    const tvData = JSON.parse(fs.readFileSync(path.resolve(__dirname, fileLocation), 'utf8'));

    res.status(200).send(tvData[tvIndex]);
})


app.listen(config.port, () => { console.log(`Success!  Listening on port: ${config.port}`) });