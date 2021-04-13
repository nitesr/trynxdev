const fse = require('fs-extra');

const srcDir = `./overrides`;
const destDir = `.`;

fse.copySync(srcDir, destDir, {overwrite : true}, function (err) {
    if (err) {                 
      console.error(err);
    } else {
      console.log("success!");
    }
});