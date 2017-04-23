"use strict";
module.exports = function(count) {
    let randomNumbers = [];
     if (count > 0) {
         for(let i = 0; i < count; i++) {
             randomNumbers.push(Math.floor((Math.random() * 9) + 1));
         }
     }
     return parseInt(randomNumbers.join(""));
};
