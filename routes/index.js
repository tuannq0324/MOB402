var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //xu ly du lieu hoac la truy van vao database
  var array = [
    {id:0, name:'Tuan Nguyen'},
    {id:1, name:'Tuan Nguyen'},
    {id:2, name:'Tuan Nguyen'},
    {id:3, name:'Tuan Nguyen'},
    {id:4, name:'Tuan Nguyen'},
  ]

  res.render('index', {data: array,name:'Tuan Nguyen', title: 'Express' });
});

router.get('/asia',function (req,res){
  console.log('asia')
  res.render('category',{title: 'Asia'});
})

router.get('/euro',function (req,res){
  console.log('Euro')
  res.render('category',{title: 'Euro'});
})

router.get('/america',function (req,res){
  console.log('America')
  res.render('category',{title: 'America'});
})

module.exports = router;
