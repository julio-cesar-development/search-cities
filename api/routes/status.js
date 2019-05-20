const express = require('express');
const connection = require('../db/connection');
const router = express.Router();
const logger = require('knoblr');

router.get('/status', (req, res) => {
  connection.ping(function (err) {
    if (err) {
      logger.info('Server unavailable');
      return res.status(500).json({'status': 'Server unavailable'});
    }
    logger.info('Up and Running');
    return res.status(200).json({'status': 'Up and Running'});
  })
});

module.exports = app => app.use('/api/v1', router);