const express = require('express');
const app = express();
const port = 3202;
const path = require('path');
const axios = require('axios');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:bundleId', async (req, res, next) => {
  console.log(req.params.bundleId);
  const bundleId = req.params.bundleId;
  try {
    let getGame = await axios.get(`http://localhost:3200/games/single/${bundleId}`);
    console.log('game got', getGame);
    let resolvePromise = await Promise.resolve(getGame);
    console.log('resolved:', resolvePromise.data);
    res.json(resolvePromise.data);
    // res.send('Hii');
  } catch (error) {
    next(error);
  }
  // .then((response) => {
  //   const game = await response
  //   // console.log(response);
  //   res.send(game);
  // })
  // .catch((err) => {
  //   console.error('Error getting bundle info:', err);
  // })
  // res.send('Hello from proxy');
});

app.listen(port, () => {
  `App listening at http://localhost:${port}`
});