'use strict';

const assert = require('assert');
const Router = require('../../lib/js/router.js');

describe('Router', function(){

  describe('insert', function(){
    it('Should return -1 until implemented', function(){
      let router = new Router();
      let result = router.insert();
      let expected = -1;
      assert(result === expected);
    });
  });

  describe('lookup', function(){
    it('Should return -1 until implemented', function(){
      let router = new Router();
      let result = router.lookup();
      let expected = -1;
      assert(result === expected);
    });
  });

  describe('remove', function(){
    it('Should return -1 until implemented', function(){
      let router = new Router();
      let result = router.remove();
      let expected = -1;
      assert(result === expected);
    });
  });

});
