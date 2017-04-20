var db = require('../dbconnection');

var trainer = {
    
    getmytrainings:function(name,callback){
       // console.log('Text :'+searchText);
        return db.query("select * from training where trainer=?",[name], callback);
    },

    getsearchtrainings:function(searchText,callback){
       // console.log('Text :'+searchText);
        return db.query("select * from training where title like ? and trainer=?",['%' + searchText.searchText + '%',searchText.username], callback);
    },
};

module.exports = trainer;