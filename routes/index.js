var express = require('express');
var router = express.Router();
var fs = require('fs');

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
  res.render('category',{title: 'Asia',
    link1:'https://www.remotelands.com/travelogues/app/uploads/2020/12/10-Asia-Beach-2021-11.jpg',
    link2:'https://www.remotelands.com/travelogues/app/uploads/2020/12/10-Asia-Beach-2021-03.jpg',
    link3:'https://www.remotelands.com/travelogues/app/uploads/2020/12/10-Asia-Beach-2021-04.jpg',
    link4:'https://www.remotelands.com/travelogues/app/uploads/2020/12/10-Asia-Beach-2021-05.jpg',
    link5:'https://www.remotelands.com/travelogues/app/uploads/2020/12/10-Asia-Beach-2021-06.jpg',
    link6:'https://www.remotelands.com/travelogues/app/uploads/2020/12/10-Asia-Beach-2021-07.jpg',
    link7:'https://www.remotelands.com/travelogues/app/uploads/2020/12/10-Asia-Beach-2021-08.jpg',
    link8:'https://www.remotelands.com/travelogues/app/uploads/2020/12/10-Asia-Beach-2021-09.jpg',
    link9:'https://www.remotelands.com/travelogues/app/uploads/2020/12/10-Asia-Beach-2021-10.jpg'});
})

router.get('/euro',function (req,res){
  console.log('Euro')
  res.render('category',{title: 'Euro',
    link1:'https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2021/01/12111822/Famous-Zlatni-rat-beach-in-Bol-Island-Brac-Croatia-Europe.jpg',
    link2:'https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2021/01/12130732/beach-3416010_1920.jpg',
    link3:'https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2021/01/12130434/nazare-5240698_1920.jpg',
    link4:'https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2021/01/12112152/La-Pelosa-Stintino-Beautiful-coast-of-sardinia-72975204.jpg',
    link5:'https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2021/01/12115245/Shipwreck-beach.jpg',
    link6:'https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2021/01/12115127/beach-218859_1280.jpg',
    link7:'https://media.cntraveler.com/photos/5f2167abff9177bf36f2f629/master/w_1920%2Cc_limit/MyrtosBeachKefaloniaGreece-GettyImages-167465945.jpg',
    link8:'https://media.cntraveler.com/photos/5d1a76330821680008fdfcd3/master/w_1920%2Cc_limit/21-faro-sweden-GettyImages-462528045.jpg',
    link9:'https://media.cntraveler.com/photos/5d1a763010dc170008df86e9/master/w_1920%2Cc_limit/14-oludeniz-beach-turkey-GettyImages-1002913898-copy.jpg'});
})

router.get('/america',function (req,res){
  console.log('America')
  res.render('category',{title: 'America',
    link1:'https://bigseventravel.com/wp-content/uploads/2019/08/Rehoboth-Beach-Delaware-1024x681.jpg',
    link2:'https://bigseventravel.com/wp-content/uploads/2019/08/North-Avenue-Beach-Chicago-Illinois-1024x681.jpg',
    link3:'https://bigseventravel.com/wp-content/uploads/2019/08/actionvance-F2MuCzV_KqU-unsplash-1024x683.jpg',
    link4:'https://bigseventravel.com/wp-content/uploads/2019/08/lucy.jpg',
    link5:'https://bigseventravel.com/wp-content/uploads/2019/08/Cape-Hatteras-National-Seashore-North-Carolina-1024x796.jpg',
    link6:'https://bigseventravel.com/wp-content/uploads/2019/08/grand-isle.jpg',
    link7:'https://bigseventravel.com/wp-content/uploads/2019/08/Ruby-Beach-Washington.jpg',
    link8:'https://bigseventravel.com/wp-content/uploads/2019/08/Maniniowali-Beach-1024x777.jpg',
    link9:'https://bigseventravel.com/wp-content/uploads/2019/08/Cannon-Beach-Cannon-Beach-Oregon-1024x569.jpg'});
})

router.get('/about',function (req,res){
  console.log('About')
  res.render('about',{title: 'About', message:''});
})

router.post("/support", function (req,res){
  var email = req.body.email;
  var content = req.body.content;

  console.log(email);
  console.log(content);
  fs.appendFile('about/' + email + '.txt','Email: '+email + '\n' +'Content: ' + content +'\n\n',function (err){
    var message;
    if (err){
      message = err;
    }
    else {
      message='Chúng tôi đã nhận phản hồi của bạn. Cảm ơn bạn chúc 1 ngày vui vẻ!!! Love you'
    }

    res.render('about',{
      title:'About',
      message: message
    })
  })
});

router.post("/delete_support", function (req,res){
  var email = req.body.email;

  console.log(email);
  fs.unlink('about/' + email + '.txt',function (err){
    var message;
    if (err){
      message = 'Chúng tôi chưa nhận được phản hồi nào từ bạn!';
    }
    else {
      message='Xoá phản hồi thành công. Cảm ơn bạn chúc 1 ngày vui vẻ!!! Love you'
    }

    res.render('about',{
      title:'About',
      message: message
    })
  })
});

module.exports = router;
