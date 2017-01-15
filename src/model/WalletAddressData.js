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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CoinsecureApiDocumentation) {
      root.CoinsecureApiDocumentation = {};
    }
    root.CoinsecureApiDocumentation.WalletAddressData = factory(root.CoinsecureApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WalletAddressData model module.
   * @module model/WalletAddressData
   * @version beta
   */

  /**
   * Constructs a new <code>WalletAddressData</code>.
   * @alias module:model/WalletAddressData
   * @class
   * @param walletID {String} 
   * @param address {String} 
   * @param time {Number} 
   * @param info {String} 
   * @param minConf {Number} 
   * @param netki {String} 
   */
  var exports = function(walletID, address, time, info, minConf, netki) {
    var _this = this;

    _this['walletID'] = walletID;
    _this['address'] = address;
    _this['time'] = time;
    _this['info'] = info;
    _this['minConf'] = minConf;
    _this['netki'] = netki;
  };

  /**
   * Constructs a <code>WalletAddressData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WalletAddressData} obj Optional instance to populate.
   * @return {module:model/WalletAddressData} The populated <code>WalletAddressData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('walletID')) {
        obj['walletID'] = ApiClient.convertToType(data['walletID'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Number');
      }
      if (data.hasOwnProperty('info')) {
        obj['info'] = ApiClient.convertToType(data['info'], 'String');
      }
      if (data.hasOwnProperty('minConf')) {
        obj['minConf'] = ApiClient.convertToType(data['minConf'], 'Number');
      }
      if (data.hasOwnProperty('netki')) {
        obj['netki'] = ApiClient.convertToType(data['netki'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} walletID
   */
  exports.prototype['walletID'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {Number} time
   */
  exports.prototype['time'] = undefined;
  /**
   * @member {String} info
   */
  exports.prototype['info'] = undefined;
  /**
   * @member {Number} minConf
   */
  exports.prototype['minConf'] = undefined;
  /**
   * @member {String} netki
   */
  exports.prototype['netki'] = undefined;



  return exports;
}));


