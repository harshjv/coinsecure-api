/**
 * Coinsecure Api Documentation
 * To generate an API key, please visit <a href='https://coinsecure.in/api' target='_new' class='homeapi'>https://coinsecure.in/api</a>.<br>Guidelines for use can be accessed at <a href='https://api.coinsecure.in/v1/guidelines'>https://api.coinsecure.in/v1/guidelines</a>.<br>Programming Language Libraries for use can be accessed at <a href='https://api.coinsecure.in/v1/code-libraries'>https://api.coinsecure.in/v1/code-libraries</a>.
 *
 * OpenAPI spec version: beta
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CoinsecureApiDocumentation);
  }
}(this, function(expect, CoinsecureApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoinsecureApiDocumentation.SuccCoinRefData();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SuccCoinRefData', function() {
    it('should create an instance of SuccCoinRefData', function() {
      // uncomment below and update the code to test SuccCoinRefData
      //var instane = new CoinsecureApiDocumentation.SuccCoinRefData();
      //expect(instance).to.be.a(CoinsecureApiDocumentation.SuccCoinRefData);
    });

    it('should have the property refPercent (base name: "refPercent")', function() {
      // uncomment below and update the code to test the property refPercent
      //var instane = new CoinsecureApiDocumentation.SuccCoinRefData();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new CoinsecureApiDocumentation.SuccCoinRefData();
      //expect(instance).to.be();
    });

    it('should have the property orderID (base name: "orderID")', function() {
      // uncomment below and update the code to test the property orderID
      //var instane = new CoinsecureApiDocumentation.SuccCoinRefData();
      //expect(instance).to.be();
    });

    it('should have the property refID (base name: "refID")', function() {
      // uncomment below and update the code to test the property refID
      //var instane = new CoinsecureApiDocumentation.SuccCoinRefData();
      //expect(instance).to.be();
    });

    it('should have the property tradeID (base name: "tradeID")', function() {
      // uncomment below and update the code to test the property tradeID
      //var instane = new CoinsecureApiDocumentation.SuccCoinRefData();
      //expect(instance).to.be();
    });

    it('should have the property newUserIDMasked (base name: "newUserIDMasked")', function() {
      // uncomment below and update the code to test the property newUserIDMasked
      //var instane = new CoinsecureApiDocumentation.SuccCoinRefData();
      //expect(instance).to.be();
    });

    it('should have the property depositID (base name: "depositID")', function() {
      // uncomment below and update the code to test the property depositID
      //var instane = new CoinsecureApiDocumentation.SuccCoinRefData();
      //expect(instance).to.be();
    });

    it('should have the property amtPaid (base name: "amtPaid")', function() {
      // uncomment below and update the code to test the property amtPaid
      //var instane = new CoinsecureApiDocumentation.SuccCoinRefData();
      //expect(instance).to.be();
    });

  });

}));
