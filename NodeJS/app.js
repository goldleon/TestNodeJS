const fs = require("fs");

function CheckMyDir(folderName){
    var fullPath = __dirname+ "/" +folderName;
    console.log("The full path is :", fullPath+'\n');
    try {
        fs.statSync(fullPath);
        console.log(folderName , "Already exist !");
    } catch (error) {
        fs.mkdirSync(fullPath);
        console.log("The Folder Was created !");
    }
}

CheckMyDir("anass");
CheckMyDir("test");
CheckMyDir("test1");
CheckMyDir("test");