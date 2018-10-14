module.exports={
    getCollectionObject:function(name){
        var collectionName=require('../models/'+name);
        return collectionName

    },
    sortByKey:function(array,key){
            return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

}
