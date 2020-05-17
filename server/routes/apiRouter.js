const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/:category', (req, res) => {
  const category = req.params.category;
  axios.get(`${process.env.RESOURCE_API_URL}/${category}`)
    .then((apiResult) => { res.send(apiResult.data); })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
