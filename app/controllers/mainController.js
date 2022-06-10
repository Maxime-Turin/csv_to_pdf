const express = require("express");



const mainController = {
  home: (req, res) => {
    res.render('main')
  },
  
  sendFile: (req, res) => {
    console.log(req.file);
    res.send('complete');
  }
};

module.exports = mainController;