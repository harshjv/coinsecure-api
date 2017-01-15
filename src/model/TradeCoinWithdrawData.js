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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TimeData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TimeData'));
  } else {
    // Browser globals (root is window)
    if (!root.CoinsecureApiDocumentation) {
      root.CoinsecureApiDocumentation = {};
    }
    root.CoinsecureApiDocumentation.TradeCoinWithdrawData = factory(root.CoinsecureApiDocumentation.ApiClient, root.CoinsecureApiDocumentation.TimeData);
  }
}(this, function(ApiClient, TimeData) {
  'use strict';




  /**
   * The TradeCoinWithdrawData model module.
   * @module model/TradeCoinWithdrawData
   * @version beta
   */

  /**
   * Constructs a new <code>TradeCoinWithdrawData</code>.
   * @alias module:model/TradeCoinWithdrawData
   * @class
   * @param timeDetails {module:model/TimeData} 
   * @param address {String} 
   * @param value {Number} 
   * @param fees {Number} 
   * @param withdrawID {String} 
   * @param txHash {String} 
   */
  var exports = function(timeDetails, address, value, fees, withdrawID, txHash) {
    var _this = this;

    _this['timeDetails'] = timeDetails;
    _this['address'] = address;
    _this['value'] = value;
    _this['fees'] = fees;
    _this['withdrawID'] = withdrawID;
    _this['txHash'] = txHash;
  };

  /**
   * Constructs a <code>TradeCoinWithdrawData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TradeCoinWithdrawData} obj Optional instance to populate.
   * @return {module:model/TradeCoinWithdrawData} The populated <code>TradeCoinWithdrawData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('timeDetails')) {
        obj['timeDetails'] = TimeData.constructFromObject(data['timeDetails']);
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
      if (data.hasOwnProperty('fees')) {
        obj['fees'] = ApiClient.convertToType(data['fees'], 'Number');
      }
      if (data.hasOwnProperty('withdrawID')) {
        obj['withdrawID'] = ApiClient.convertToType(data['withdrawID'], 'String');
      }
      if (data.hasOwnProperty('txHash')) {
        obj['txHash'] = ApiClient.convertToType(data['txHash'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TimeData} timeDetails
   */
  exports.prototype['timeDetails'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {Number} fees
   */
  exports.prototype['fees'] = undefined;
  /**
   * @member {String} withdrawID
   */
  exports.prototype['withdrawID'] = undefined;
  /**
   * @member {String} txHash
   */
  exports.prototype['txHash'] = undefined;



  return exports;
}));

