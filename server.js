const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;

const https = require('https');

const TOKEN = process.env.ACCESS_TOKEN;
const USER_ID = process.env.USER_ID;

const ENDPOINT = `https://api.instagram.com/v1/users/${USER_ID}/media/recent/?count=99&&access_token=${TOKEN}`;

// app.get( '/api/instafeed')
//   getPhotos()
//     then res
//       if good
//         res.json
//     catch
//        da kine error brah

// func getPhotos
//   return Promise (resolve, reject)
//     https.get( THE_ENDPOINT)
//        res.on(data)
//          // store the rawData into a chunk
//        res.on(end)
//          resolve(THE_DATA_CHUNK_THING)
//      if err
//          reject(REASON_WHY)

app.get('/api/instafeed', (req, res) => {
  getPhotos()
  .then( (data) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.json(JSON.parse(data));
  })
  .catch( err => {
    console.log(err);
  });
});

function getPhotos() {
  return new Promise ((resolve, reject) => {
    https.get(`${ENDPOINT}`, (res) => {

      let myData = '';

      res.on('data', (d) => {
        myData += d;
      });

      res.on('end', () => {
        resolve(myData);
      });
    })
    .on('error', (e) => {
      reject(e);
    });

  });
}

app.listen(PORT, () => {
  console.log('Server listening on', PORT);
});