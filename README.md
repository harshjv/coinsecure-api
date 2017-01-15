# Coinsecure API

> This repo is ***only* for `coinsecure-api` NPM package**
>
> Original content here.
> https://github.com/coinsecure/plugins/tree/master/master/javascript


## Installation

    npm install coinsecure-api


## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:


    var coinsecure = require('coinsecure-api')

    var api = new coinsecure.AccountActionsApi()

    var body = new coinsecure.LoginFormNew() // {LoginFormNew} Please send the form with valid inputs.

    var opts = {
      'accept': "accept_example" // {String} JSON, XML or CSV can be returned (Optional)
    }

    var callback = function(error, data, response) {
      if (error) {
        console.error(error)
      } else {
        console.log('API called successfully. Returned data: ' + data)
      }
    }

    api.v1login(body, opts, callback)


## Documentation for API Endpoints

All URIs are relative to *https://api.coinsecure.in/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CoinsecureApiDocumentation.AccountActionsApi* | [**v1login**](docs/AccountActionsApi.md#v1login) | **POST** /v1/login | Creates a Login Instance and returns an API Key.
*CoinsecureApiDocumentation.AccountActionsApi* | [**v1logininitiate**](docs/AccountActionsApi.md#v1logininitiate) | **POST** /v1/login/initiate | Initiate Login
*CoinsecureApiDocumentation.AccountActionsApi* | [**v1loginpasswordforgot**](docs/AccountActionsApi.md#v1loginpasswordforgot) | **POST** /v1/login/password/forgot | Sends an email with a password reset token
*CoinsecureApiDocumentation.AccountActionsApi* | [**v1signup**](docs/AccountActionsApi.md#v1signup) | **POST** /v1/signup | Creates a new Unverified Account.
*CoinsecureApiDocumentation.AccountActionsApi* | [**v1signupverifyToken**](docs/AccountActionsApi.md#v1signupverifyToken) | **PUT** /v1/signup/verify/{token} | Verifies an Email token for Signup .
*CoinsecureApiDocumentation.AccountActionsApi* | [**v1userbankotpNumber**](docs/AccountActionsApi.md#v1userbankotpNumber) | **GET** /v1/user/bank/otp/{number} | Send OTP for Bank Link
*CoinsecureApiDocumentation.AccountActionsApi* | [**v1userexchangekyc**](docs/AccountActionsApi.md#v1userexchangekyc) | **PUT** /v1/user/exchange/kyc | Submits a New Bank Link and initial KYC Documents.
*CoinsecureApiDocumentation.AccountActionsApi* | [**v1usergcmCode**](docs/AccountActionsApi.md#v1usergcmCode) | **DELETE** /v1/user/gcm/{code} | Delete GCM Code
*CoinsecureApiDocumentation.AccountActionsApi* | [**v1userkycotpNumber**](docs/AccountActionsApi.md#v1userkycotpNumber) | **GET** /v1/user/kyc/otp/{number} | Send OTP for KYC Link
*CoinsecureApiDocumentation.AccountActionsApi* | [**v1userlogout**](docs/AccountActionsApi.md#v1userlogout) | **DELETE** /v1/user/logout | Logout User
*CoinsecureApiDocumentation.AccountActionsApi* | [**v1usernetkicreate**](docs/AccountActionsApi.md#v1usernetkicreate) | **PUT** /v1/user/netki/create | Create Neki Wallet Name
*CoinsecureApiDocumentation.AccountActionsApi* | [**v1usernetkiupdate**](docs/AccountActionsApi.md#v1usernetkiupdate) | **POST** /v1/user/netki/update | Update Netki Address
*CoinsecureApiDocumentation.AccountActionsApi* | [**v1userprofileimagedeleteNetkiName**](docs/AccountActionsApi.md#v1userprofileimagedeleteNetkiName) | **DELETE** /v1/user/profile/image/delete/{netkiName} | Delete Profile Image
*CoinsecureApiDocumentation.AccountActionsApi* | [**v1userprofileimageupdate**](docs/AccountActionsApi.md#v1userprofileimageupdate) | **POST** /v1/user/profile/image/update | Update Profile Image
*CoinsecureApiDocumentation.AccountActionsApi* | [**v1userprofilephone**](docs/AccountActionsApi.md#v1userprofilephone) | **PUT** /v1/user/profile/phone/new | New Profile Phone
*CoinsecureApiDocumentation.AccountActionsApi* | [**v1userprofilephoneNumber**](docs/AccountActionsApi.md#v1userprofilephoneNumber) | **DELETE** /v1/user/profile/phone/delete | Delete Profile Phone Number
*CoinsecureApiDocumentation.AccountActionsApi* | [**v1userprofilephoneotpNumber**](docs/AccountActionsApi.md#v1userprofilephoneotpNumber) | **GET** /v1/user/profile/phone/otp/{number} | Send OTP for Profile Phone
*CoinsecureApiDocumentation.AccountDataApi* | [**v1exchangebanksummary**](docs/AccountDataApi.md#v1exchangebanksummary) | **GET** /v1/user/exchange/bank/summary | Exchange Bank Summary
*CoinsecureApiDocumentation.AccountDataApi* | [**v1exchangeusercoinfee**](docs/AccountDataApi.md#v1exchangeusercoinfee) | **GET** /v1/user/exchange/coin/fee | Users Coin Fee Percentage
*CoinsecureApiDocumentation.AccountDataApi* | [**v1exchangeuserfiatfee**](docs/AccountDataApi.md#v1exchangeuserfiatfee) | **GET** /v1/user/exchange/fiat/fee | Users Fiat Fee Percentage
*CoinsecureApiDocumentation.AccountDataApi* | [**v1netkisearchNetkiName**](docs/AccountDataApi.md#v1netkisearchNetkiName) | **GET** /v1/netki/search/{netkiName} | Coinsecure.me Netki Lookup
*CoinsecureApiDocumentation.AccountDataApi* | [**v1userexchangekycs**](docs/AccountDataApi.md#v1userexchangekycs) | **GET** /v1/user/exchange/kycs | Gets KYC Status Details
*CoinsecureApiDocumentation.AccountDataApi* | [**v1userexchangereferralcoinpaid**](docs/AccountDataApi.md#v1userexchangereferralcoinpaid) | **GET** /v1/user/exchange/referral/coin/paid | Users Paid Fiat Referrals
*CoinsecureApiDocumentation.AccountDataApi* | [**v1userexchangereferralcoinsuccessful**](docs/AccountDataApi.md#v1userexchangereferralcoinsuccessful) | **GET** /v1/user/exchange/referral/coin/successful | Gets Users Successful Referral Links
*CoinsecureApiDocumentation.AccountDataApi* | [**v1userexchangereferralfiatpaid**](docs/AccountDataApi.md#v1userexchangereferralfiatpaid) | **GET** /v1/user/exchange/referral/fiat/paid | Users Paid Fiat Referrals
*CoinsecureApiDocumentation.AccountDataApi* | [**v1userexchangereferrals**](docs/AccountDataApi.md#v1userexchangereferrals) | **GET** /v1/user/exchange/referrals | Gets Users Referral Links
*CoinsecureApiDocumentation.AccountDataApi* | [**v1userexchangetradesummary**](docs/AccountDataApi.md#v1userexchangetradesummary) | **GET** /v1/user/exchange/trade/summary | Exchange Trade Summary
*CoinsecureApiDocumentation.AccountDataApi* | [**v1userlogintokenToken**](docs/AccountDataApi.md#v1userlogintokenToken) | **GET** /v1/user/login/token/{token} | Login Token Email
*CoinsecureApiDocumentation.AccountDataApi* | [**v1usersummary**](docs/AccountDataApi.md#v1usersummary) | **GET** /v1/user/summary | Exchange Bank Summary
*CoinsecureApiDocumentation.AccountDataApi* | [**v1userwalletsummary**](docs/AccountDataApi.md#v1userwalletsummary) | **GET** /v1/user/wallet/summary | Exchange Bank Summary
*CoinsecureApiDocumentation.BlockchainToolsApi* | [**v1bitcoinsearchAddress**](docs/BlockchainToolsApi.md#v1bitcoinsearchAddress) | **GET** /v1/bitcoin/search/{any} | Search Bitcoin Blockchain
*CoinsecureApiDocumentation.BlockchainToolsApi* | [**v1bitcoinsearchTxid**](docs/BlockchainToolsApi.md#v1bitcoinsearchTxid) | **GET** /v1/bitcoin/search/confirmation/{txid} | Get Confirmations
*CoinsecureApiDocumentation.ExchangeBankActionsApi* | [**v1userexchangebankcoinwithdrawinitiate**](docs/ExchangeBankActionsApi.md#v1userexchangebankcoinwithdrawinitiate) | **POST** /v1/user/exchange/bank/coin/withdraw/initiate | Initiate Bitcoin Withdrawal
*CoinsecureApiDocumentation.ExchangeBankActionsApi* | [**v1userexchangebankcoinwithdrawnewVerifycode**](docs/ExchangeBankActionsApi.md#v1userexchangebankcoinwithdrawnewVerifycode) | **POST** /v1/user/exchange/bank/coin/withdraw/newVerifycode | Gets a Verification Code.
*CoinsecureApiDocumentation.ExchangeBankActionsApi* | [**v1userexchangebankcoinwithdrawunverifiedcancelWithdrawID**](docs/ExchangeBankActionsApi.md#v1userexchangebankcoinwithdrawunverifiedcancelWithdrawID) | **DELETE** /v1/user/exchange/bank/coin/withdraw/unverified/cancel/{withdrawID} | Cancel Bitcoin Withdrawal
*CoinsecureApiDocumentation.ExchangeBankActionsApi* | [**v1userexchangebankcoinwithdrawverify**](docs/ExchangeBankActionsApi.md#v1userexchangebankcoinwithdrawverify) | **PUT** /v1/user/exchange/bank/coin/withdraw/verify | Verify Bitcoin Withdrawal
*CoinsecureApiDocumentation.ExchangeBankActionsApi* | [**v1userexchangebankfiataccountnew**](docs/ExchangeBankActionsApi.md#v1userexchangebankfiataccountnew) | **PUT** /v1/user/exchange/bank/fiat/account/new | New Bank Link
*CoinsecureApiDocumentation.ExchangeBankActionsApi* | [**v1userexchangebankfiatdepositcancelDepositID**](docs/ExchangeBankActionsApi.md#v1userexchangebankfiatdepositcancelDepositID) | **DELETE** /v1/user/exchange/bank/fiat/deposit/cancel/{depositID} | Cancel Unverified Exchange Fiat Deposit
*CoinsecureApiDocumentation.ExchangeBankActionsApi* | [**v1userexchangebankfiatdepositnew**](docs/ExchangeBankActionsApi.md#v1userexchangebankfiatdepositnew) | **PUT** /v1/user/exchange/bank/fiat/deposit/new | New Exchange Fiat Deposit
*CoinsecureApiDocumentation.ExchangeBankActionsApi* | [**v1userexchangebankfiatwithdrawinitiate**](docs/ExchangeBankActionsApi.md#v1userexchangebankfiatwithdrawinitiate) | **POST** /v1/user/exchange/bank/fiat/withdraw/initiate | Initiate Fiat Withdrawal
*CoinsecureApiDocumentation.ExchangeBankActionsApi* | [**v1userexchangebankfiatwithdrawnewVerifycode**](docs/ExchangeBankActionsApi.md#v1userexchangebankfiatwithdrawnewVerifycode) | **POST** /v1/user/exchange/bank/fiat/withdraw/newVerifycode | Gets a Fiat Verification Code.
*CoinsecureApiDocumentation.ExchangeBankActionsApi* | [**v1userexchangebankfiatwithdrawunverifiedcancelWithdrawID**](docs/ExchangeBankActionsApi.md#v1userexchangebankfiatwithdrawunverifiedcancelWithdrawID) | **DELETE** /v1/user/exchange/bank/fiat/withdraw/unverified/cancel/{withdrawID} | Cancel Fiat Withdrawal
*CoinsecureApiDocumentation.ExchangeBankActionsApi* | [**v1userexchangebankfiatwithdrawverify**](docs/ExchangeBankActionsApi.md#v1userexchangebankfiatwithdrawverify) | **PUT** /v1/user/exchange/bank/fiat/withdraw/verify | Verify Fiat Withdrawal
*CoinsecureApiDocumentation.ExchangeBankCoinDataApi* | [**v1userexchangebankcoinaddresses**](docs/ExchangeBankCoinDataApi.md#v1userexchangebankcoinaddresses) | **GET** /v1/user/exchange/bank/coin/addresses | Exchange Coin Addresses
*CoinsecureApiDocumentation.ExchangeBankCoinDataApi* | [**v1userexchangebankcoinbalanceavailable**](docs/ExchangeBankCoinDataApi.md#v1userexchangebankcoinbalanceavailable) | **GET** /v1/user/exchange/bank/coin/balance/total | Available Exchange Coin Balance
*CoinsecureApiDocumentation.ExchangeBankCoinDataApi* | [**v1userexchangebankcoinbalancepending**](docs/ExchangeBankCoinDataApi.md#v1userexchangebankcoinbalancepending) | **GET** /v1/user/exchange/bank/coin/balance/pending | In Trade Coin Balance
*CoinsecureApiDocumentation.ExchangeBankCoinDataApi* | [**v1userexchangebankcoinbalancetotal**](docs/ExchangeBankCoinDataApi.md#v1userexchangebankcoinbalancetotal) | **GET** /v1/user/exchange/bank/coin/balance/available | Total Exchange Coin Balance
*CoinsecureApiDocumentation.ExchangeBankCoinDataApi* | [**v1userexchangebankcoindepositcancelled**](docs/ExchangeBankCoinDataApi.md#v1userexchangebankcoindepositcancelled) | **GET** /v1/user/exchange/bank/coin/deposit/cancelled | Cancelled Exchange Coin Deposits
*CoinsecureApiDocumentation.ExchangeBankCoinDataApi* | [**v1userexchangebankcoindepositunverified**](docs/ExchangeBankCoinDataApi.md#v1userexchangebankcoindepositunverified) | **GET** /v1/user/exchange/bank/coin/deposit/unverified | Unverified Exchange Coin Deposits
*CoinsecureApiDocumentation.ExchangeBankCoinDataApi* | [**v1userexchangebankcoindepositverified**](docs/ExchangeBankCoinDataApi.md#v1userexchangebankcoindepositverified) | **GET** /v1/user/exchange/bank/coin/deposit/verified | Verified Exchange Coin Deposits
*CoinsecureApiDocumentation.ExchangeBankCoinDataApi* | [**v1userexchangebankcoinwithdrawcancelled**](docs/ExchangeBankCoinDataApi.md#v1userexchangebankcoinwithdrawcancelled) | **GET** /v1/user/exchange/bank/coin/withdraw/cancelled | Cancelled Exchange Coin Withdrawals
*CoinsecureApiDocumentation.ExchangeBankCoinDataApi* | [**v1userexchangebankcoinwithdrawcompleted**](docs/ExchangeBankCoinDataApi.md#v1userexchangebankcoinwithdrawcompleted) | **GET** /v1/user/exchange/bank/coin/withdraw/completed | Completed Exchange Coin Withdrawals
*CoinsecureApiDocumentation.ExchangeBankCoinDataApi* | [**v1userexchangebankcoinwithdrawunverified**](docs/ExchangeBankCoinDataApi.md#v1userexchangebankcoinwithdrawunverified) | **GET** /v1/user/exchange/bank/coin/withdraw/unverified | Unverified Exchange Coin Withdrawals
*CoinsecureApiDocumentation.ExchangeBankCoinDataApi* | [**v1userexchangebankcoinwithdrawverified**](docs/ExchangeBankCoinDataApi.md#v1userexchangebankcoinwithdrawverified) | **GET** /v1/user/exchange/bank/coin/withdraw/verified | Verified Exchange Coin Withdrawals
*CoinsecureApiDocumentation.ExchangeBankFiatDataApi* | [**v1userexchangebankfiataccounts**](docs/ExchangeBankFiatDataApi.md#v1userexchangebankfiataccounts) | **GET** /v1/user/exchange/bank/fiat/accounts | Exchange Bitcoin Deposit Addresses
*CoinsecureApiDocumentation.ExchangeBankFiatDataApi* | [**v1userexchangebankfiatbalanceavailable**](docs/ExchangeBankFiatDataApi.md#v1userexchangebankfiatbalanceavailable) | **GET** /v1/user/exchange/bank/fiat/balance/total | Available Exchange Fiat Balance
*CoinsecureApiDocumentation.ExchangeBankFiatDataApi* | [**v1userexchangebankfiatbalancepending**](docs/ExchangeBankFiatDataApi.md#v1userexchangebankfiatbalancepending) | **GET** /v1/user/exchange/bank/fiat/balance/pending | In Trade Coin Balance
*CoinsecureApiDocumentation.ExchangeBankFiatDataApi* | [**v1userexchangebankfiatbalancetotal**](docs/ExchangeBankFiatDataApi.md#v1userexchangebankfiatbalancetotal) | **GET** /v1/user/exchange/bank/fiat/balance/available | Total Exchange Fiat Balance
*CoinsecureApiDocumentation.ExchangeBankFiatDataApi* | [**v1userexchangebankfiatdepositcancelled**](docs/ExchangeBankFiatDataApi.md#v1userexchangebankfiatdepositcancelled) | **GET** /v1/user/exchange/bank/fiat/deposit/cancelled | Cancelled Exchange Fiat Deposits
*CoinsecureApiDocumentation.ExchangeBankFiatDataApi* | [**v1userexchangebankfiatdepositunverified**](docs/ExchangeBankFiatDataApi.md#v1userexchangebankfiatdepositunverified) | **GET** /v1/user/exchange/bank/fiat/deposit/unverified | Unverified Exchange Fiat Deposits
*CoinsecureApiDocumentation.ExchangeBankFiatDataApi* | [**v1userexchangebankfiatdepositverified**](docs/ExchangeBankFiatDataApi.md#v1userexchangebankfiatdepositverified) | **GET** /v1/user/exchange/bank/fiat/deposit/verified | Verified Exchange Fiat Deposits
*CoinsecureApiDocumentation.ExchangeBankFiatDataApi* | [**v1userexchangebankfiatwithdrawcancelled**](docs/ExchangeBankFiatDataApi.md#v1userexchangebankfiatwithdrawcancelled) | **GET** /v1/user/exchange/bank/fiat/withdraw/cancelled | Cancelled Exchange Fiat Withdrawals
*CoinsecureApiDocumentation.ExchangeBankFiatDataApi* | [**v1userexchangebankfiatwithdrawcompleted**](docs/ExchangeBankFiatDataApi.md#v1userexchangebankfiatwithdrawcompleted) | **GET** /v1/user/exchange/bank/fiat/withdraw/completed | Completed Exchange Fiat Withdrawals
*CoinsecureApiDocumentation.ExchangeBankFiatDataApi* | [**v1userexchangebankfiatwithdrawunverified**](docs/ExchangeBankFiatDataApi.md#v1userexchangebankfiatwithdrawunverified) | **GET** /v1/user/exchange/bank/fiat/withdraw/unverified | Unverified Exchange Fiat Withdrawals
*CoinsecureApiDocumentation.ExchangeBankFiatDataApi* | [**v1userexchangebankfiatwithdrawverified**](docs/ExchangeBankFiatDataApi.md#v1userexchangebankfiatwithdrawverified) | **GET** /v1/user/exchange/bank/fiat/withdraw/verified | Verified Exchange Fiat Withdrawals
*CoinsecureApiDocumentation.ExchangeTradeActionsApi* | [**v1userexchangeaskcancelOrderID**](docs/ExchangeTradeActionsApi.md#v1userexchangeaskcancelOrderID) | **DELETE** /v1/user/exchange/ask/cancel/{orderID} | Cancel Open Sell Order
*CoinsecureApiDocumentation.ExchangeTradeActionsApi* | [**v1userexchangeasknew**](docs/ExchangeTradeActionsApi.md#v1userexchangeasknew) | **PUT** /v1/user/exchange/ask/new | BTC Sell Order
*CoinsecureApiDocumentation.ExchangeTradeActionsApi* | [**v1userexchangebidcancelOrderID**](docs/ExchangeTradeActionsApi.md#v1userexchangebidcancelOrderID) | **DELETE** /v1/user/exchange/bid/cancel/{orderID} | Cancel Open Buy Order
*CoinsecureApiDocumentation.ExchangeTradeActionsApi* | [**v1userexchangebidnew**](docs/ExchangeTradeActionsApi.md#v1userexchangebidnew) | **PUT** /v1/user/exchange/bid/new | BTC Buy Order
*CoinsecureApiDocumentation.ExchangeTradeActionsApi* | [**v1userexchangeinstantbuy**](docs/ExchangeTradeActionsApi.md#v1userexchangeinstantbuy) | **PUT** /v1/user/exchange/instant/buy | Instantly Buy BTC
*CoinsecureApiDocumentation.ExchangeTradeActionsApi* | [**v1userexchangeinstantsell**](docs/ExchangeTradeActionsApi.md#v1userexchangeinstantsell) | **PUT** /v1/user/exchange/instant/sell | Instantly Sell BTC
*CoinsecureApiDocumentation.ExchangeTradeDataApi* | [**v1exchangeasklow**](docs/ExchangeTradeDataApi.md#v1exchangeasklow) | **GET** /v1/exchange/ask/low | Lowest Ask
*CoinsecureApiDocumentation.ExchangeTradeDataApi* | [**v1exchangeaskorders**](docs/ExchangeTradeDataApi.md#v1exchangeaskorders) | **GET** /v1/exchange/ask/orders | All Sell Orders
*CoinsecureApiDocumentation.ExchangeTradeDataApi* | [**v1exchangebidhigh**](docs/ExchangeTradeDataApi.md#v1exchangebidhigh) | **GET** /v1/exchange/bid/high | Returns the Highest Bid in the Order Book
*CoinsecureApiDocumentation.ExchangeTradeDataApi* | [**v1exchangebidorders**](docs/ExchangeTradeDataApi.md#v1exchangebidorders) | **GET** /v1/exchange/bid/orders | All Buy Orders
*CoinsecureApiDocumentation.ExchangeTradeDataApi* | [**v1exchangelastTrade**](docs/ExchangeTradeDataApi.md#v1exchangelastTrade) | **GET** /v1/exchange/lastTrade | Last Trade
*CoinsecureApiDocumentation.ExchangeTradeDataApi* | [**v1exchangemax24Hr**](docs/ExchangeTradeDataApi.md#v1exchangemax24Hr) | **GET** /v1/exchange/max24Hr | Max 24 Hour Rate
*CoinsecureApiDocumentation.ExchangeTradeDataApi* | [**v1exchangemin24Hr**](docs/ExchangeTradeDataApi.md#v1exchangemin24Hr) | **GET** /v1/exchange/min24Hr | Min 24 Hour Rate
*CoinsecureApiDocumentation.ExchangeTradeDataApi* | [**v1exchangeticker**](docs/ExchangeTradeDataApi.md#v1exchangeticker) | **GET** /v1/exchange/ticker | Exchange Ticker
*CoinsecureApiDocumentation.ExchangeTradeDataApi* | [**v1userexchangeaskcancelled**](docs/ExchangeTradeDataApi.md#v1userexchangeaskcancelled) | **GET** /v1/user/exchange/ask/cancelled | Cancelled User Sell Orders
*CoinsecureApiDocumentation.ExchangeTradeDataApi* | [**v1userexchangeaskcompleted**](docs/ExchangeTradeDataApi.md#v1userexchangeaskcompleted) | **GET** /v1/user/exchange/ask/completed | Completed User Sell Orders
*CoinsecureApiDocumentation.ExchangeTradeDataApi* | [**v1userexchangeaskpending**](docs/ExchangeTradeDataApi.md#v1userexchangeaskpending) | **GET** /v1/user/exchange/ask/pending | Pending User Sell Orders
*CoinsecureApiDocumentation.ExchangeTradeDataApi* | [**v1userexchangebidcancelled**](docs/ExchangeTradeDataApi.md#v1userexchangebidcancelled) | **GET** /v1/user/exchange/bid/cancelled | Cancelled User Buy Orders
*CoinsecureApiDocumentation.ExchangeTradeDataApi* | [**v1userexchangebidcompleted**](docs/ExchangeTradeDataApi.md#v1userexchangebidcompleted) | **GET** /v1/user/exchange/bid/completed | Completed User Buy Orders
*CoinsecureApiDocumentation.ExchangeTradeDataApi* | [**v1userexchangebidpending**](docs/ExchangeTradeDataApi.md#v1userexchangebidpending) | **GET** /v1/user/exchange/bid/pending | Pending User Buy Orders
*CoinsecureApiDocumentation.ExchangeTradeDataApi* | [**v1userexchangetrades**](docs/ExchangeTradeDataApi.md#v1userexchangetrades) | **GET** /v1/exchange/trades | Completed Exchange Trades
*CoinsecureApiDocumentation.SecurityActionsApi* | [**v1mfaauthyinitiate**](docs/SecurityActionsApi.md#v1mfaauthyinitiate) | **POST** /v1/mfa/authy/initiate | Initiate Authy Registration.
*CoinsecureApiDocumentation.SecurityActionsApi* | [**v1mfagainitiate**](docs/SecurityActionsApi.md#v1mfagainitiate) | **POST** /v1/mfa/ga/initiate | Initiate GA Registration.
*CoinsecureApiDocumentation.SecurityActionsApi* | [**v1usermfaauthycall**](docs/SecurityActionsApi.md#v1usermfaauthycall) | **GET** /v1/mfa/authy/call | Authy Call Code
*CoinsecureApiDocumentation.SecurityActionsApi* | [**v1usermfaauthydisableCode**](docs/SecurityActionsApi.md#v1usermfaauthydisableCode) | **DELETE** /v1/user/mfa/authy/disable/{code} | Disable Authy
*CoinsecureApiDocumentation.SecurityActionsApi* | [**v1usermfaauthyinitiateenable**](docs/SecurityActionsApi.md#v1usermfaauthyinitiateenable) | **PUT** /v1/user/mfa/authy/initiate/enable | Verify Authy Registration
*CoinsecureApiDocumentation.SecurityActionsApi* | [**v1usermfaauthysms**](docs/SecurityActionsApi.md#v1usermfaauthysms) | **GET** /v1/mfa/authy/sms | Authy Sms Code
*CoinsecureApiDocumentation.SecurityActionsApi* | [**v1usermfagadisableCode**](docs/SecurityActionsApi.md#v1usermfagadisableCode) | **DELETE** /v1/user/mfa/ga/disable/{code} | Disable Google Authenticator
*CoinsecureApiDocumentation.SecurityActionsApi* | [**v1usermfagainitiateenable**](docs/SecurityActionsApi.md#v1usermfagainitiateenable) | **PUT** /v1/user/mfa/ga/initiate/enable | Enable Google Authenticator
*CoinsecureApiDocumentation.SecurityActionsApi* | [**v1userpasswordchange**](docs/SecurityActionsApi.md#v1userpasswordchange) | **POST** /v1/user/password/change | Change Password.
*CoinsecureApiDocumentation.SecurityActionsApi* | [**v1userpasswordreset**](docs/SecurityActionsApi.md#v1userpasswordreset) | **POST** /v1/user/password/reset | Reset Password.
*CoinsecureApiDocumentation.WalletActionsApi* | [**v1userwalletcoinaddressnew**](docs/WalletActionsApi.md#v1userwalletcoinaddressnew) | **PUT** /v1/user/wallet/coin/address/new | New Bitcoin Address
*CoinsecureApiDocumentation.WalletActionsApi* | [**v1userwalletcoinnew**](docs/WalletActionsApi.md#v1userwalletcoinnew) | **PUT** /v1/user/wallet/coin/new | Create New Wallet
*CoinsecureApiDocumentation.WalletActionsApi* | [**v1userwalletcoinwithdrawinitiate**](docs/WalletActionsApi.md#v1userwalletcoinwithdrawinitiate) | **POST** /v1/user/wallet/coin/withdraw/initiate | Initiate Bitcoin Withdrawal
*CoinsecureApiDocumentation.WalletActionsApi* | [**v1userwalletcoinwithdrawsendToExchange**](docs/WalletActionsApi.md#v1userwalletcoinwithdrawsendToExchange) | **PUT** /v1/user/wallet/coin/withdraw/sendToExchange | Send to Exchange
*CoinsecureApiDocumentation.WalletActionsApi* | [**v1userwalletcoinwithdrawunverifiedcancelWithdrawID**](docs/WalletActionsApi.md#v1userwalletcoinwithdrawunverifiedcancelWithdrawID) | **DELETE** /v1/user/wallet/coin/withdraw/unverified/cancel/{withdrawID} | Cancel Bitcoin Withdrawal
*CoinsecureApiDocumentation.WalletActionsApi* | [**v1userwalletcoinwithdrawverify**](docs/WalletActionsApi.md#v1userwalletcoinwithdrawverify) | **PUT** /v1/user/wallet/coin/withdraw/verify | Verify Bitcoin Withdrawal
*CoinsecureApiDocumentation.WalletActionsApi* | [**v1walletcoinwithdrawnewVerifycode**](docs/WalletActionsApi.md#v1walletcoinwithdrawnewVerifycode) | **POST** /v1/wallet/coin/withdraw/newVerifycode | Gets a Verification Code
*CoinsecureApiDocumentation.WalletDataApi* | [**v1userwalletcoinaddressWalletID**](docs/WalletDataApi.md#v1userwalletcoinaddressWalletID) | **GET** /v1/user/wallet/coin/address/{walletID} | Wallet Bitcoin Addresses
*CoinsecureApiDocumentation.WalletDataApi* | [**v1userwalletcoindepositconfirmedWalletID**](docs/WalletDataApi.md#v1userwalletcoindepositconfirmedWalletID) | **GET** /v1/user/wallet/coin/deposit/confirmed/{walletID} | Confirmed Wallet Transactions
*CoinsecureApiDocumentation.WalletDataApi* | [**v1userwalletcoindepositconfirmedall**](docs/WalletDataApi.md#v1userwalletcoindepositconfirmedall) | **GET** /v1/user/wallet/coin/deposit/confirmed/all | Confirmed Wallet Deposit
*CoinsecureApiDocumentation.WalletDataApi* | [**v1userwalletcoindepositunconfirmedWalletID**](docs/WalletDataApi.md#v1userwalletcoindepositunconfirmedWalletID) | **GET** /v1/user/wallet/coin/deposit/unconfirmed/{walletID} | Unconfirmed Transactions in Wallet
*CoinsecureApiDocumentation.WalletDataApi* | [**v1userwalletcoindepositunconfirmedall**](docs/WalletDataApi.md#v1userwalletcoindepositunconfirmedall) | **GET** /v1/user/wallet/coin/deposit/unconfirmed/all | All Unconfirmed Deposits
*CoinsecureApiDocumentation.WalletDataApi* | [**v1userwalletcoinwallets**](docs/WalletDataApi.md#v1userwalletcoinwallets) | **GET** /v1/user/wallet/coin/wallets | Wallet Details
*CoinsecureApiDocumentation.WalletDataApi* | [**v1walletwithdrawcancelled**](docs/WalletDataApi.md#v1walletwithdrawcancelled) | **GET** /v1/wallet/coin/withdraw/cancelled | Cancelled Coin Withdrawals
*CoinsecureApiDocumentation.WalletDataApi* | [**v1walletwithdrawcompleted**](docs/WalletDataApi.md#v1walletwithdrawcompleted) | **GET** /v1/wallet/coin/withdraw/completed | Completed Coin Withdrawals
*CoinsecureApiDocumentation.WalletDataApi* | [**v1walletwithdrawunverified**](docs/WalletDataApi.md#v1walletwithdrawunverified) | **GET** /v1/wallet/coin/withdraw/unverified | Unverified Coin Withdrawals
*CoinsecureApiDocumentation.WalletDataApi* | [**v1walletwithdrawverified**](docs/WalletDataApi.md#v1walletwithdrawverified) | **GET** /v1/wallet/coin/withdraw/verified | Verified Coin Withdrawals


## Documentation for Models

 - [CoinsecureApiDocumentation.Address](docs/Address.md)
 - [CoinsecureApiDocumentation.AllRefData](docs/AllRefData.md)
 - [CoinsecureApiDocumentation.AllRefDataResponse](docs/AllRefDataResponse.md)
 - [CoinsecureApiDocumentation.BankSummaryData](docs/BankSummaryData.md)
 - [CoinsecureApiDocumentation.BankSummaryDataResponse](docs/BankSummaryDataResponse.md)
 - [CoinsecureApiDocumentation.ChangePassword](docs/ChangePassword.md)
 - [CoinsecureApiDocumentation.Code](docs/Code.md)
 - [CoinsecureApiDocumentation.CodeCountryMobile](docs/CodeCountryMobile.md)
 - [CoinsecureApiDocumentation.CoinDepData](docs/CoinDepData.md)
 - [CoinsecureApiDocumentation.CoinDepDataResponse](docs/CoinDepDataResponse.md)
 - [CoinsecureApiDocumentation.ConfirmData](docs/ConfirmData.md)
 - [CoinsecureApiDocumentation.ConfirmDataResponse](docs/ConfirmDataResponse.md)
 - [CoinsecureApiDocumentation.DoubleData](docs/DoubleData.md)
 - [CoinsecureApiDocumentation.DoubleDataResponse](docs/DoubleDataResponse.md)
 - [CoinsecureApiDocumentation.Email](docs/Email.md)
 - [CoinsecureApiDocumentation.FailResult](docs/FailResult.md)
 - [CoinsecureApiDocumentation.FiatBankData](docs/FiatBankData.md)
 - [CoinsecureApiDocumentation.FiatBankDataResponse](docs/FiatBankDataResponse.md)
 - [CoinsecureApiDocumentation.FiatDepData](docs/FiatDepData.md)
 - [CoinsecureApiDocumentation.FiatDepDataResponse](docs/FiatDepDataResponse.md)
 - [CoinsecureApiDocumentation.FiatWithData](docs/FiatWithData.md)
 - [CoinsecureApiDocumentation.FiatWithDataResponse](docs/FiatWithDataResponse.md)
 - [CoinsecureApiDocumentation.JsValue](docs/JsValue.md)
 - [CoinsecureApiDocumentation.KYCData](docs/KYCData.md)
 - [CoinsecureApiDocumentation.KYCDataResponse](docs/KYCDataResponse.md)
 - [CoinsecureApiDocumentation.LastTradeData](docs/LastTradeData.md)
 - [CoinsecureApiDocumentation.LastTradeDataResponse](docs/LastTradeDataResponse.md)
 - [CoinsecureApiDocumentation.LoginFormNew](docs/LoginFormNew.md)
 - [CoinsecureApiDocumentation.LoginId](docs/LoginId.md)
 - [CoinsecureApiDocumentation.MaxVol](docs/MaxVol.md)
 - [CoinsecureApiDocumentation.MethodCountryMobile](docs/MethodCountryMobile.md)
 - [CoinsecureApiDocumentation.MinFiat](docs/MinFiat.md)
 - [CoinsecureApiDocumentation.NetkiNameAddress](docs/NetkiNameAddress.md)
 - [CoinsecureApiDocumentation.NewAddress](docs/NewAddress.md)
 - [CoinsecureApiDocumentation.NewBankForm](docs/NewBankForm.md)
 - [CoinsecureApiDocumentation.NewFiatBankDeposit](docs/NewFiatBankDeposit.md)
 - [CoinsecureApiDocumentation.NewWallet](docs/NewWallet.md)
 - [CoinsecureApiDocumentation.NumberOtp](docs/NumberOtp.md)
 - [CoinsecureApiDocumentation.OrderData](docs/OrderData.md)
 - [CoinsecureApiDocumentation.OrderDataResponse](docs/OrderDataResponse.md)
 - [CoinsecureApiDocumentation.RateData](docs/RateData.md)
 - [CoinsecureApiDocumentation.RateDataResponse](docs/RateDataResponse.md)
 - [CoinsecureApiDocumentation.RateDiffData](docs/RateDiffData.md)
 - [CoinsecureApiDocumentation.RateDiffDataResponse](docs/RateDiffDataResponse.md)
 - [CoinsecureApiDocumentation.RateVolData](docs/RateVolData.md)
 - [CoinsecureApiDocumentation.RateVolDataResponse](docs/RateVolDataResponse.md)
 - [CoinsecureApiDocumentation.RateVolTimeTypeData](docs/RateVolTimeTypeData.md)
 - [CoinsecureApiDocumentation.RateVolTimeTypeDataResponse](docs/RateVolTimeTypeDataResponse.md)
 - [CoinsecureApiDocumentation.ResetPassword](docs/ResetPassword.md)
 - [CoinsecureApiDocumentation.SendCoin](docs/SendCoin.md)
 - [CoinsecureApiDocumentation.SendCoinWallet](docs/SendCoinWallet.md)
 - [CoinsecureApiDocumentation.SendExchange](docs/SendExchange.md)
 - [CoinsecureApiDocumentation.SignupForm](docs/SignupForm.md)
 - [CoinsecureApiDocumentation.StandardInitiateLoginResultData](docs/StandardInitiateLoginResultData.md)
 - [CoinsecureApiDocumentation.StandardLoginResultData](docs/StandardLoginResultData.md)
 - [CoinsecureApiDocumentation.StandardTickerResultData](docs/StandardTickerResultData.md)
 - [CoinsecureApiDocumentation.StandardVerifySignupResultData](docs/StandardVerifySignupResultData.md)
 - [CoinsecureApiDocumentation.SuccCoinRefData](docs/SuccCoinRefData.md)
 - [CoinsecureApiDocumentation.SuccCoinRefDataResponse](docs/SuccCoinRefDataResponse.md)
 - [CoinsecureApiDocumentation.SuccRefData](docs/SuccRefData.md)
 - [CoinsecureApiDocumentation.SuccRefDataResponse](docs/SuccRefDataResponse.md)
 - [CoinsecureApiDocumentation.SuccessCancelData](docs/SuccessCancelData.md)
 - [CoinsecureApiDocumentation.SuccessCancelDataResponse](docs/SuccessCancelDataResponse.md)
 - [CoinsecureApiDocumentation.SuccessInitiateLoginResponse](docs/SuccessInitiateLoginResponse.md)
 - [CoinsecureApiDocumentation.SuccessLoginResponse](docs/SuccessLoginResponse.md)
 - [CoinsecureApiDocumentation.SuccessOrderData](docs/SuccessOrderData.md)
 - [CoinsecureApiDocumentation.SuccessOrderDataResponse](docs/SuccessOrderDataResponse.md)
 - [CoinsecureApiDocumentation.SuccessResult](docs/SuccessResult.md)
 - [CoinsecureApiDocumentation.SuccessTickerResponse](docs/SuccessTickerResponse.md)
 - [CoinsecureApiDocumentation.SuccessVerifySignupResponse](docs/SuccessVerifySignupResponse.md)
 - [CoinsecureApiDocumentation.TimeData](docs/TimeData.md)
 - [CoinsecureApiDocumentation.TimeDataCoin](docs/TimeDataCoin.md)
 - [CoinsecureApiDocumentation.TimeKYCData](docs/TimeKYCData.md)
 - [CoinsecureApiDocumentation.TradeAddressData](docs/TradeAddressData.md)
 - [CoinsecureApiDocumentation.TradeAddressDataResponse](docs/TradeAddressDataResponse.md)
 - [CoinsecureApiDocumentation.TradeCoinWithdrawData](docs/TradeCoinWithdrawData.md)
 - [CoinsecureApiDocumentation.TradeCoinWithdrawDataResponse](docs/TradeCoinWithdrawDataResponse.md)
 - [CoinsecureApiDocumentation.TradeSummaryData](docs/TradeSummaryData.md)
 - [CoinsecureApiDocumentation.TradeSummaryDataResponse](docs/TradeSummaryDataResponse.md)
 - [CoinsecureApiDocumentation.UserSummaryData](docs/UserSummaryData.md)
 - [CoinsecureApiDocumentation.UserSummaryDataResponse](docs/UserSummaryDataResponse.md)
 - [CoinsecureApiDocumentation.ValidAddressSearchData](docs/ValidAddressSearchData.md)
 - [CoinsecureApiDocumentation.ValidAddressSearchDataResponse](docs/ValidAddressSearchDataResponse.md)
 - [CoinsecureApiDocumentation.VolData](docs/VolData.md)
 - [CoinsecureApiDocumentation.VolDataResponse](docs/VolDataResponse.md)
 - [CoinsecureApiDocumentation.WalletAddressData](docs/WalletAddressData.md)
 - [CoinsecureApiDocumentation.WalletAddressDataResponse](docs/WalletAddressDataResponse.md)
 - [CoinsecureApiDocumentation.WalletCoinWithdrawData](docs/WalletCoinWithdrawData.md)
 - [CoinsecureApiDocumentation.WalletCoinWithdrawDataResponse](docs/WalletCoinWithdrawDataResponse.md)
 - [CoinsecureApiDocumentation.WalletSummaryData](docs/WalletSummaryData.md)
 - [CoinsecureApiDocumentation.WalletSummaryDataResponse](docs/WalletSummaryDataResponse.md)
 - [CoinsecureApiDocumentation.WalletsData](docs/WalletsData.md)
 - [CoinsecureApiDocumentation.WalletsDataResponse](docs/WalletsDataResponse.md)
 - [CoinsecureApiDocumentation.WithdrawFiat](docs/WithdrawFiat.md)
 - [CoinsecureApiDocumentation.WithdrawID](docs/WithdrawID.md)


## Documentation for Authorization

All endpoints do not require authorization.
