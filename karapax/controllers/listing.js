/**
 * Created by Mia on 2015-05-07.
 */
var apt = require('../models/apartment').model;

var api = module.exports;

api.getAptInfo = function(req,res,next){
    var id = req.query.id;
    var aptInfo;
    console.log(id);
    apt.findOne({_id:id},function(err, apt){
        if(err) console.log(err);
        //return apt;
        res.render('listing',apt);
    });
}

api.getAptListForIndex = function(req,res,next){
    apt.find().limit(9).select('_id imgPath price').exec(function(err,apts,next){
        if(err) console.log(err);
        //return max 9 apts' first img and id
        res.render('index',{'apts': apts});
    })
}

api.getAptListForList = function(req,res,next){
    if(req.query.filterSort===undefined) {
        res.render('aptList', {'aptList': [], 'filterArea': [], 'filterType': []});
    }
    else{
        //get select conditions
        var date,priceLow,priceHigh,area,aptType,rentType;

        if(req.query.filterDate===undefined){
            date = Date.now();
        }
        else date = req.query.filterDate;

        if(req.query.filterPrice1===undefined) priceLow = 0;
        else priceLow = req.query.filterPrice1;
        if(req.query.filterPrice2===undefined) priceHigh = Number.MAX_VALUE;
        else priceHigh = req.query.filterPrice2;

        if(req.query.filterArea===undefined) area = ['市中心','CDN','NDG','Monk','French'];
        else area = req.query.filterArea.split(' ');

        if(req.query.filterType===undefined) {
            aptType = [1, 2, 3, 4, 5];
            rentType = [1, 2, 3];
        }
        else{
            if (req.query.filterType.aptType) aptType = req.query.filterType.aptType.split(' ');
            else aptType = [1, 2, 3, 4, 5];
            if (req.query.filterType.rentType) rentType = req.query.filterType.rentType.split(' ');
            else rentType = [1, 2, 3];
        }

        var sort = 'price.eight';
        if(req.query.filterSort==='priceHigh') sort = '-price.eight';
        else if(req.query.filterSort==='viewer') sort = 'viewer';


        apt.find()
            .where('avaDate').gt(date)
            .where('price.eight').gt(priceLow-1).lt(priceHigh+1)
            .where('area').in(area)
            .where('type.aptType').in(aptType)
            .where('type.rentType').in(rentType)
            .sort(sort)
            .exec(function (err, apts) {
                if (err) console.log(err);
                console.log(apts);
                res.send(apts);
        })
    }
}