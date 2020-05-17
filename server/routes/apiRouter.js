const express = require('express');
const axios = require('axios');

const router = express.Router();

const cache = {};

router.get('/:category', (req, res) => {
  const category = req.params.category;

  if (category in cache) {
    return res.json(cache[category]);
  }

  axios.get(`${process.env.RESOURCE_API_URL}/${category}`)
    .then((apiResult) => {
      const data = apiResult.data;
      cache[category] = data;
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
