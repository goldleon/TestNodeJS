const lodash =  require("lodash");

function countString(stringChain){
    return stringChain.length;
}

var arrayCount = (stringArray) => {
    var newArray = [];
    for (var i =0;  i < stringArray.length; i++){
        var sCount = countString(stringArray[i]);
        if(sCount > 50){
            newArray.push(stringArray[i]);
        }
    }

    return newArray;
}

module.exports = {arrayCount};