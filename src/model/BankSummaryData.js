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
    root.CoinsecureApiDocumentation.BankSummaryData = factory(root.CoinsecureApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BankSummaryData model module.
   * @module model/BankSummaryData
   * @version beta
   */

  /**
   * Constructs a new <code>BankSummaryData</code>.
   * @alias module:model/BankSummaryData
   * @class
   * @param pendingCoinBalance {Number} 
   * @param pendingFiatBalance {Number} 
   * @param availableCoinBalance {Number} 
   * @param availableFiatBalance {Number} 
   * @param totalCoinBalance {Number} 
   * @param totalFiatBalance {Number} 
   * @param coinFeePercentage {Number} 
   * @param fiatFeePercentage {Number} 
   * @param bankLinkStatus {String} 
   * @param hasTradeNetki {Boolean} 
   * @param tradeNetkiName {String} 
   * @param tradeNetkiAddress {String} 
   */
  var exports = function(pendingCoinBalance, pendingFiatBalance, availableCoinBalance, availableFiatBalance, totalCoinBalance, totalFiatBalance, coinFeePercentage, fiatFeePercentage, bankLinkStatus, hasTradeNetki, tradeNetkiName, tradeNetkiAddress) {
    var _this = this;

    _this['pendingCoinBalance'] = pendingCoinBalance;
    _this['pendingFiatBalance'] = pendingFiatBalance;
    _this['availableCoinBalance'] = availableCoinBalance;
    _this['availableFiatBalance'] = availableFiatBalance;
    _this['totalCoinBalance'] = totalCoinBalance;
    _this['totalFiatBalance'] = totalFiatBalance;
    _this['coinFeePercentage'] = coinFeePercentage;
    _this['fiatFeePercentage'] = fiatFeePercentage;
    _this['bankLinkStatus'] = bankLinkStatus;
    _this['hasTradeNetki'] = hasTradeNetki;
    _this['tradeNetkiName'] = tradeNetkiName;
    _this['tradeNetkiAddress'] = tradeNetkiAddress;
  };

  /**
   * Constructs a <code>BankSummaryData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BankSummaryData} obj Optional instance to populate.
   * @return {module:model/BankSummaryData} The populated <code>BankSummaryData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pendingCoinBalance')) {
        obj['pendingCoinBalance'] = ApiClient.convertToType(data['pendingCoinBalance'], 'Number');
      }
      if (data.hasOwnProperty('pendingFiatBalance')) {
        obj['pendingFiatBalance'] = ApiClient.convertToType(data['pendingFiatBalance'], 'Number');
      }
      if (data.hasOwnProperty('availableCoinBalance')) {
        obj['availableCoinBalance'] = ApiClient.convertToType(data['availableCoinBalance'], 'Number');
      }
      if (data.hasOwnProperty('availableFiatBalance')) {
        obj['availableFiatBalance'] = ApiClient.convertToType(data['availableFiatBalance'], 'Number');
      }
      if (data.hasOwnProperty('totalCoinBalance')) {
        obj['totalCoinBalance'] = ApiClient.convertToType(data['totalCoinBalance'], 'Number');
      }
      if (data.hasOwnProperty('totalFiatBalance')) {
        obj['totalFiatBalance'] = ApiClient.convertToType(data['totalFiatBalance'], 'Number');
      }
      if (data.hasOwnProperty('coinFeePercentage')) {
        obj['coinFeePercentage'] = ApiClient.convertToType(data['coinFeePercentage'], 'Number');
      }
      if (data.hasOwnProperty('fiatFeePercentage')) {
        obj['fiatFeePercentage'] = ApiClient.convertToType(data['fiatFeePercentage'], 'Number');
      }
      if (data.hasOwnProperty('bankLinkStatus')) {
        obj['bankLinkStatus'] = ApiClient.convertToType(data['bankLinkStatus'], 'String');
      }
      if (data.hasOwnProperty('hasTradeNetki')) {
        obj['hasTradeNetki'] = ApiClient.convertToType(data['hasTradeNetki'], 'Boolean');
      }
      if (data.hasOwnProperty('tradeNetkiName')) {
        obj['tradeNetkiName'] = ApiClient.convertToType(data['tradeNetkiName'], 'String');
      }
      if (data.hasOwnProperty('tradeNetkiAddress')) {
        obj['tradeNetkiAddress'] = ApiClient.convertToType(data['tradeNetkiAddress'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} pendingCoinBalance
   */
  exports.prototype['pendingCoinBalance'] = undefined;
  /**
   * @member {Number} pendingFiatBalance
   */
  exports.prototype['pendingFiatBalance'] = undefined;
  /**
   * @member {Number} availableCoinBalance
   */
  exports.prototype['availableCoinBalance'] = undefined;
  /**
   * @member {Number} availableFiatBalance
   */
  exports.prototype['availableFiatBalance'] = undefined;
  /**
   * @member {Number} totalCoinBalance
   */
  exports.prototype['totalCoinBalance'] = undefined;
  /**
   * @member {Number} totalFiatBalance
   */
  exports.prototype['totalFiatBalance'] = undefined;
  /**
   * @member {Number} coinFeePercentage
   */
  exports.prototype['coinFeePercentage'] = undefined;
  /**
   * @member {Number} fiatFeePercentage
   */
  exports.prototype['fiatFeePercentage'] = undefined;
  /**
   * @member {String} bankLinkStatus
   */
  exports.prototype['bankLinkStatus'] = undefined;
  /**
   * @member {Boolean} hasTradeNetki
   * @default false
   */
  exports.prototype['hasTradeNetki'] = false;
  /**
   * @member {String} tradeNetkiName
   */
  exports.prototype['tradeNetkiName'] = undefined;
  /**
   * @member {String} tradeNetkiAddress
   */
  exports.prototype['tradeNetkiAddress'] = undefined;



  return exports;
}));

