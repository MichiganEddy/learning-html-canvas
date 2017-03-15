'use strict';
const $ = require('jquery3.1.1');


module.exports = functon() {
  
  return ({

    getHeight: function() {
      var height = Math.floor($('window').height() * 0.9);
      console.log(height);
      return height;
    },
    getWidth: function() {
        var width = Math.floor($('window').width() * 0.6);
        console.log(width);
        return width;
    },
    rgba: function(r,g,b, fallb) {
      for(let i=0; i<3; i++){
        fallback[i]= parseInt(fallb[i]) || 0;
      }
      return (`rgb(${r||fallback[0]}, ${g||fallback[1]}, ${b||fallback[2]})`);
    }
  });
}