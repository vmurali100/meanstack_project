const express = require('express')
const stocksController = require('../controller/stocks.controller');
const passport = require("passport")

module.exports = (function () {
  let router = express.Router();
  const ensureToken = (req, res, next) => {
    const bearerToken = req.headers['authorization'];
    console.log("bearrer token::"+req.headers['authorization'])
    if(bearerToken !== undefined && bearerToken !=''){
        const tokenArray = bearerToken.split(" ");
        const token = tokenArray[1];
        req.token = token;
        next();
    }else{
       return res.send({
            status : "TOKEN_NOT_AVAILABLE"
        })
    }
}
  
  router.get('/home', (req, res) => {
    res.send("HOME PAGE");
  })

  router.post('/login', stocksController.login);
  router.post('/register/user',stocksController.registerUser);
  router.get('/dashboard',ensureToken,stocksController.dashboard);
  router.post('/buystock',ensureToken,stocksController.buyStock);
  router.post('/sellstock',ensureToken, stocksController.sellStock);
  router.get('/getUserStocks',ensureToken, stocksController.getUserStocks);
  
  router.get('/logout',(req, res) => {
    req.logout();
    res.send({ "statusCode": 200, "msg": "logged out successfuly" })
  })
  
  return router;
  
  })();
  

