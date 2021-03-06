'use strict';

var _ = require('lodash');

module.exports = function(){

  return {
    auth:{
      attributes: function(attr){
        var template = {
          googleEmail: {
            type: 'string'
          },
          name:{
            type: 'string'
          }
        };

        _.merge(template, attr);
        _.merge(attr, template); 
      }
    }
  };
};
