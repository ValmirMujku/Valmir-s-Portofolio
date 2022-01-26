var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  let dataArray =[
    {name: "TOP-GUN-(responsive)", link:"https://github.com/ValmirMujku/TOP-GUN-HTML-CSS-SASS-",type:'Individual Project', techno:"HTML-CSS-SASS"},
    {name: "TOP-GUN", link:"https://github.com/ValmirMujku/TopGun",type:'Individual Project', techno:"BootStrap-JavaScript"},
    {name: "BootCamp React", link:"https://github.com/ValmirMujku/BootCamp-React",type:'Individual Project', techno:"BootStrap-ReactJs-Express"},
    {name: "Weather-Widget", link:"https://github.com/ValmirMujku/weatherWidget",type:'Individual Project', techno:"BootStrap-ReactJs"},
    {name: "Military-Web", link:"https://github.com/ValmirMujku/JS---PROJECT---Military-web",type:'Individual Project', techno:"HTML-CSS-JS-FireBase"},
    {name: "ICDS", link:"https://github.com/ValmirMujku/ICDS---Java-project",type:'Individual Project', techno:"Pure Java-MySQL"} 
   
  ];

  res.json({
    data: dataArray
  });
});

module.exports = router;
