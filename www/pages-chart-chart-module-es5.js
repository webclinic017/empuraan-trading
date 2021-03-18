(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chart-chart-module"], {
    /***/
    "2SVd":
    /*!*********************************************************!*\
      !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function SVd(module, exports, __webpack_require__) {
      "use strict";
      /**
       * Determines whether the specified URL is absolute
       *
       * @param {string} url The URL to test
       * @returns {boolean} True if the specified URL is absolute, otherwise false
       */

      module.exports = function isAbsoluteURL(url) {
        // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
        // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
        // by any combination of letters, digits, plus, period, or hyphen.
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
      };
      /***/

    },

    /***/
    "5oMp":
    /*!*******************************************************!*\
      !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function oMp(module, exports, __webpack_require__) {
      "use strict";
      /**
       * Creates a new URL by combining the specified URLs
       *
       * @param {string} baseURL The base URL
       * @param {string} relativeURL The relative URL
       * @returns {string} The combined URL
       */

      module.exports = function combineURLs(baseURL, relativeURL) {
        return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
      };
      /***/

    },

    /***/
    "5v4I":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chart/chart.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function v4I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"home/watchlist\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Chart</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<div id=\"tradingview\"></div>\n</ion-content>\n";
      /***/
    },

    /***/
    "6fw9":
    /*!*******************************************!*\
      !*** ./src/app/shared/chart-mock-data.ts ***!
      \*******************************************/

    /*! exports provided: BTC_PRICE_LIST */

    /***/
    function fw9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BTC_PRICE_LIST", function () {
        return BTC_PRICE_LIST;
      });

      var BTC_PRICE_LIST = [{
        'time': 1545595560000,
        'open': 3919.95,
        'close': 3916.05,
        'low': 3916.05,
        'high': 3920.95,
        'amount': 2.6494,
        'count': 50,
        'vol': 10382.654567
      }, {
        'time': 1545595620000,
        'open': 3915.58,
        'close': 3910.86,
        'low': 3909.05,
        'high': 3915.58,
        'amount': 31.3374,
        'count': 196,
        'vol': 122540.368748
      }, {
        'time': 1545595680000,
        'open': 3911.82,
        'close': 3909.85,
        'low': 3909.85,
        'high': 3913.59,
        'amount': 1.2824,
        'count': 36,
        'vol': 5017.295088
      }, {
        'time': 1545595740000,
        'open': 3910.61,
        'close': 3908,
        'low': 3907.51,
        'high': 3910.61,
        'amount': 6.417655824483938,
        'count': 37,
        'vol': 25084.547188
      }, {
        'time': 1545595800000,
        'open': 3908,
        'close': 3904.46,
        'low': 3903.78,
        'high': 3908,
        'amount': 5.734735049846349,
        'count': 96,
        'vol': 22398.001773
      }, {
        'time': 1545595860000,
        'open': 3904.53,
        'close': 3910.95,
        'low': 3903.69,
        'high': 3911.48,
        'amount': 6.79244631682586,
        'count': 59,
        'vol': 26535.201696
      }, {
        'time': 1545595920000,
        'open': 3910.64,
        'close': 3910.76,
        'low': 3907.99,
        'high': 3911.19,
        'amount': 10.6691,
        'count': 75,
        'vol': 41711.810846
      }, {
        'time': 1545595980000,
        'open': 3910.95,
        'close': 3912.95,
        'low': 3910.75,
        'high': 3914.73,
        'amount': 2.6783,
        'count': 35,
        'vol': 10482.124166
      }, {
        'time': 1545596040000,
        'open': 3914.31,
        'close': 3912.37,
        'low': 3911.83,
        'high': 3914.31,
        'amount': 4.4520148393593075,
        'count': 37,
        'vol': 17420.59877762
      }, {
        'time': 1545596100000,
        'open': 3912.92,
        'close': 3916.53,
        'low': 3911.23,
        'high': 3916.53,
        'amount': 1.4375,
        'count': 32,
        'vol': 5624.996441
      }, {
        'time': 1545596160000,
        'open': 3915.4,
        'close': 3922.08,
        'low': 3915.4,
        'high': 3927.44,
        'amount': 11.074641427959069,
        'count': 112,
        'vol': 43435.55565132
      }, {
        'time': 1545596220000,
        'open': 3922.08,
        'close': 3925.31,
        'low': 3915.66,
        'high': 3926.47,
        'amount': 8.1356,
        'count': 136,
        'vol': 31899.973721
      }, {
        'time': 1545596280000,
        'open': 3925.31,
        'close': 3924.41,
        'low': 3919.59,
        'high': 3929.99,
        'amount': 7.2071,
        'count': 96,
        'vol': 28288.055944
      }, {
        'time': 1545596340000,
        'open': 3925.16,
        'close': 3921.84,
        'low': 3920.78,
        'high': 3925.16,
        'amount': 0.9036,
        'count': 20,
        'vol': 3544.389167
      }, {
        'time': 1545596400000,
        'open': 3920.79,
        'close': 3927.45,
        'low': 3920.79,
        'high': 3928.81,
        'amount': 6.9504,
        'count': 44,
        'vol': 27273.102012
      }, {
        'time': 1545596460000,
        'open': 3927.84,
        'close': 3925.43,
        'low': 3925.05,
        'high': 3931.17,
        'amount': 5.5312,
        'count': 71,
        'vol': 21729.200603
      }, {
        'time': 1545596520000,
        'open': 3925.44,
        'close': 3924.05,
        'low': 3921.97,
        'high': 3930.87,
        'amount': 18.766416788529444,
        'count': 111,
        'vol': 73701.664237
      }, {
        'time': 1545596580000,
        'open': 3923.87,
        'close': 3923.44,
        'low': 3922.43,
        'high': 3924.41,
        'amount': 5.683518305300905,
        'count': 35,
        'vol': 22300.73222496
      }, {
        'time': 1545596640000,
        'open': 3922.4,
        'close': 3917.16,
        'low': 3916.56,
        'high': 3922.43,
        'amount': 4.739220279412065,
        'count': 46,
        'vol': 18578.08270412
      }, {
        'time': 1545596700000,
        'open': 3918.23,
        'close': 3917.94,
        'low': 3916.11,
        'high': 3919.44,
        'amount': 3.710854899323265,
        'count': 37,
        'vol': 14539.14573631
      }, {
        'time': 1545596760000,
        'open': 3916.85,
        'close': 3917.84,
        'low': 3916.27,
        'high': 3917.88,
        'amount': 1.9814,
        'count': 26,
        'vol': 7760.490482
      }, {
        'time': 1545596820000,
        'open': 3916.82,
        'close': 3915.24,
        'low': 3915.24,
        'high': 3917.51,
        'amount': 3.203,
        'count': 38,
        'vol': 12543.175451
      }, {
        'time': 1545596880000,
        'open': 3915.21,
        'close': 3917.6,
        'low': 3915.05,
        'high': 3918.09,
        'amount': 1.113,
        'count': 39,
        'vol': 4358.376304
      }, {
        'time': 1545596940000,
        'open': 3918.18,
        'close': 3920.77,
        'low': 3918.18,
        'high': 3927.54,
        'amount': 14.533,
        'count': 102,
        'vol': 57025.050161
      }, {
        'time': 1545597000000,
        'open': 3920.77,
        'close': 3909.89,
        'low': 3909.05,
        'high': 3920.77,
        'amount': 5.518229793251023,
        'count': 81,
        'vol': 21609.08130213139
      }, {
        'time': 1545597060000,
        'open': 3908.45,
        'close': 3917.95,
        'low': 3907.69,
        'high': 3918.12,
        'amount': 11.188309775742098,
        'count': 121,
        'vol': 43782.71338653
      }, {
        'time': 1545597120000,
        'open': 3916.15,
        'close': 3921.01,
        'low': 3913.95,
        'high': 3922.23,
        'amount': 2.2769,
        'count': 42,
        'vol': 8924.323983
      }, {
        'time': 1545597180000,
        'open': 3921.03,
        'close': 3917.27,
        'low': 3917.14,
        'high': 3923.77,
        'amount': 8.305542612647999,
        'count': 74,
        'vol': 32564.190933
      }, {
        'time': 1545597240000,
        'open': 3917.51,
        'close': 3923.64,
        'low': 3916.87,
        'high': 3924.19,
        'amount': 3.7977,
        'count': 53,
        'vol': 14897.274348
      }, {
        'time': 1545597300000,
        'open': 3921.5,
        'close': 3917.66,
        'low': 3917,
        'high': 3921.5,
        'amount': 2.9686,
        'count': 46,
        'vol': 11634.109757
      }, {
        'time': 1545597360000,
        'open': 3918.74,
        'close': 3914.15,
        'low': 3914.15,
        'high': 3919.74,
        'amount': 1.4102,
        'count': 57,
        'vol': 5523.201325
      }, {
        'time': 1545597420000,
        'open': 3914.15,
        'close': 3916.97,
        'low': 3913.18,
        'high': 3922.07,
        'amount': 8.9157,
        'count': 83,
        'vol': 34918.423295
      }, {
        'time': 1545597480000,
        'open': 3916.96,
        'close': 3922.21,
        'low': 3916.6,
        'high': 3925.55,
        'amount': 7.2153,
        'count': 97,
        'vol': 28294.37888
      }, {
        'time': 1545597540000,
        'open': 3922.19,
        'close': 3919.82,
        'low': 3919.68,
        'high': 3924.02,
        'amount': 2.4399,
        'count': 40,
        'vol': 9568.192585
      }, {
        'time': 1545597600000,
        'open': 3918.7,
        'close': 3921.71,
        'low': 3918.7,
        'high': 3922.79,
        'amount': 1.754297691214625,
        'count': 37,
        'vol': 6878.857166
      }, {
        'time': 1545597660000,
        'open': 3921.19,
        'close': 3920.44,
        'low': 3916.48,
        'high': 3921.19,
        'amount': 3.7597,
        'count': 47,
        'vol': 14731.930322
      }, {
        'time': 1545597720000,
        'open': 3921.08,
        'close': 3922.05,
        'low': 3919.91,
        'high': 3924.69,
        'amount': 4.1617,
        'count': 62,
        'vol': 16323.263617
      }, {
        'time': 1545597780000,
        'open': 3921.05,
        'close': 3927.16,
        'low': 3921.05,
        'high': 3927.34,
        'amount': 2.481283858384118,
        'count': 56,
        'vol': 9736.2059905
      }, {
        'time': 1545597840000,
        'open': 3927.56,
        'close': 3937.53,
        'low': 3927.56,
        'high': 3938.44,
        'amount': 10.91627529268147,
        'count': 159,
        'vol': 42943.31075
      }, {
        'time': 1545597900000,
        'open': 3937.54,
        'close': 3933.31,
        'low': 3929.72,
        'high': 3938.09,
        'amount': 15.711093725879334,
        'count': 157,
        'vol': 61785.79985459
      }, {
        'time': 1545597960000,
        'open': 3932.51,
        'close': 3927.9,
        'low': 3925.72,
        'high': 3932.51,
        'amount': 13.0184,
        'count': 65,
        'vol': 51138.2109
      }, {
        'time': 1545598020000,
        'open': 3927.91,
        'close': 3931.09,
        'low': 3927.91,
        'high': 3931.09,
        'amount': 2.1967,
        'count': 42,
        'vol': 8631.892303
      }, {
        'time': 1545598080000,
        'open': 3931.91,
        'close': 3934.52,
        'low': 3929.76,
        'high': 3937.09,
        'amount': 3.3394980005184878,
        'count': 64,
        'vol': 13136.894765
      }, {
        'time': 1545598140000,
        'open': 3933.52,
        'close': 3937.35,
        'low': 3932.78,
        'high': 3937.39,
        'amount': 3.591289423364062,
        'count': 49,
        'vol': 14133.625718
      }, {
        'time': 1545598200000,
        'open': 3936.61,
        'close': 3932.95,
        'low': 3932.5,
        'high': 3936.61,
        'amount': 4.7224000320253765,
        'count': 34,
        'vol': 18575.753901
      }, {
        'time': 1545598260000,
        'open': 3932.51,
        'close': 3930.29,
        'low': 3930.25,
        'high': 3932.56,
        'amount': 1.3119,
        'count': 29,
        'vol': 5157.514888
      }, {
        'time': 1545598320000,
        'open': 3930.15,
        'close': 3931.76,
        'low': 3930.03,
        'high': 3931.76,
        'amount': 2.0674,
        'count': 13,
        'vol': 8125.287038
      }, {
        'time': 1545598380000,
        'open': 3931.54,
        'close': 3933.42,
        'low': 3930.99,
        'high': 3934.13,
        'amount': 1.3813,
        'count': 14,
        'vol': 5431.267363
      }, {
        'time': 1545598440000,
        'open': 3935.74,
        'close': 3937.02,
        'low': 3933.49,
        'high': 3937.3,
        'amount': 2.3958,
        'count': 42,
        'vol': 9428.64404
      }, {
        'time': 1545598500000,
        'open': 3937.49,
        'close': 3931.09,
        'low': 3930.7,
        'high': 3937.86,
        'amount': 4.7534,
        'count': 62,
        'vol': 18705.741879
      }, {
        'time': 1545598560000,
        'open': 3930.7,
        'close': 3934.42,
        'low': 3929.07,
        'high': 3938.01,
        'amount': 6.7871,
        'count': 74,
        'vol': 26700.907256
      }, {
        'time': 1545598620000,
        'open': 3933.47,
        'close': 3938.56,
        'low': 3932.79,
        'high': 3938.64,
        'amount': 1.936054189681424,
        'count': 49,
        'vol': 7621.217088
      }, {
        'time': 1545598680000,
        'open': 3938.56,
        'close': 3938.62,
        'low': 3937.82,
        'high': 3941.09,
        'amount': 2.2721,
        'count': 62,
        'vol': 8948.444527
      }, {
        'time': 1545598740000,
        'open': 3937.61,
        'close': 3939.73,
        'low': 3937.39,
        'high': 3939.73,
        'amount': 1.5454,
        'count': 48,
        'vol': 6086.396394
      }, {
        'time': 1545598800000,
        'open': 3939.19,
        'close': 3938.04,
        'low': 3938.04,
        'high': 3940.15,
        'amount': 1.1774,
        'count': 32,
        'vol': 4638.497767
      }, {
        'time': 1545598860000,
        'open': 3938.04,
        'close': 3937.23,
        'low': 3937.22,
        'high': 3938.46,
        'amount': 1.0392,
        'count': 49,
        'vol': 4092.08
      }, {
        'time': 1545598920000,
        'open': 3937.78,
        'close': 3936.88,
        'low': 3936.88,
        'high': 3938.29,
        'amount': 0.8415,
        'count': 24,
        'vol': 3313.249109
      }, {
        'time': 1545598980000,
        'open': 3937.4,
        'close': 3932.32,
        'low': 3931.05,
        'high': 3937.59,
        'amount': 4.065612565421939,
        'count': 39,
        'vol': 15994.74723526
      }, {
        'time': 1545599040000,
        'open': 3930.69,
        'close': 3932.56,
        'low': 3930.69,
        'high': 3933.95,
        'amount': 1.3386,
        'count': 26,
        'vol': 5263.914208
      }, {
        'time': 1545599100000,
        'open': 3932.25,
        'close': 3930.68,
        'low': 3930.68,
        'high': 3932.94,
        'amount': 6.5182,
        'count': 38,
        'vol': 25629.750181
      }, {
        'time': 1545599160000,
        'open': 3931.34,
        'close': 3933.04,
        'low': 3931.34,
        'high': 3934.46,
        'amount': 7.1751,
        'count': 54,
        'vol': 28217.612016
      }, {
        'time': 1545599220000,
        'open': 3933.47,
        'close': 3936.14,
        'low': 3933.47,
        'high': 3936.14,
        'amount': 1.5349,
        'count': 27,
        'vol': 6038.532258
      }, {
        'time': 1545599280000,
        'open': 3936.55,
        'close': 3938.49,
        'low': 3936.11,
        'high': 3938.49,
        'amount': 4.4013,
        'count': 58,
        'vol': 17328.643269
      }, {
        'time': 1545599340000,
        'open': 3938.89,
        'close': 3937.87,
        'low': 3937.5,
        'high': 3940.93,
        'amount': 4.9441,
        'count': 38,
        'vol': 19473.55667
      }, {
        'time': 1545599400000,
        'open': 3938.47,
        'close': 3941.91,
        'low': 3937.31,
        'high': 3943.33,
        'amount': 3.6492,
        'count': 32,
        'vol': 14377.061675
      }, {
        'time': 1545599460000,
        'open': 3941.92,
        'close': 3951.48,
        'low': 3940.96,
        'high': 3951.48,
        'amount': 19.0896,
        'count': 152,
        'vol': 75321.243486
      }, {
        'time': 1545599520000,
        'open': 3950.16,
        'close': 3945.44,
        'low': 3944.07,
        'high': 3952.97,
        'amount': 10.052,
        'count': 144,
        'vol': 39678.46404
      }, {
        'time': 1545599580000,
        'open': 3945.81,
        'close': 3947,
        'low': 3944.36,
        'high': 3947.95,
        'amount': 2.2663,
        'count': 39,
        'vol': 8944.416663
      }, {
        'time': 1545599640000,
        'open': 3947,
        'close': 3940.95,
        'low': 3940.17,
        'high': 3947.1,
        'amount': 8.1658,
        'count': 69,
        'vol': 32210.599269
      }, {
        'time': 1545599700000,
        'open': 3940.76,
        'close': 3937.78,
        'low': 3937.34,
        'high': 3944.56,
        'amount': 10.508098858128854,
        'count': 101,
        'vol': 41406.605846
      }, {
        'time': 1545599760000,
        'open': 3937.29,
        'close': 3935.69,
        'low': 3934.95,
        'high': 3937.73,
        'amount': 3.2426,
        'count': 80,
        'vol': 12766.614728
      }, {
        'time': 1545599820000,
        'open': 3935.68,
        'close': 3936.98,
        'low': 3934.45,
        'high': 3938.05,
        'amount': 1.7317,
        'count': 39,
        'vol': 6817.557127
      }, {
        'time': 1545599880000,
        'open': 3936.99,
        'close': 3940.85,
        'low': 3936.99,
        'high': 3948.3,
        'amount': 15.7253,
        'count': 150,
        'vol': 62027.095291
      }, {
        'time': 1545599940000,
        'open': 3942.07,
        'close': 3947.31,
        'low': 3941.39,
        'high': 3947.85,
        'amount': 5.9625,
        'count': 54,
        'vol': 23520.403807
      }, {
        'time': 1545600000000,
        'open': 3947.76,
        'close': 3943.58,
        'low': 3942.59,
        'high': 3948.93,
        'amount': 6.5566,
        'count': 60,
        'vol': 25861.074679
      }, {
        'time': 1545600060000,
        'open': 3943.58,
        'close': 3943.99,
        'low': 3941.42,
        'high': 3943.99,
        'amount': 1.8408992182825035,
        'count': 48,
        'vol': 7257.041934
      }, {
        'time': 1545600120000,
        'open': 3943.46,
        'close': 3946.15,
        'low': 3943.46,
        'high': 3946.16,
        'amount': 4.4229,
        'count': 45,
        'vol': 17447.576058
      }, {
        'time': 1545600180000,
        'open': 3946.03,
        'close': 3948.38,
        'low': 3945.16,
        'high': 3949.95,
        'amount': 8.819229845089179,
        'count': 86,
        'vol': 34814.17183561
      }, {
        'time': 1545600240000,
        'open': 3948,
        'close': 3954.43,
        'low': 3947.94,
        'high': 3954.43,
        'amount': 4.93,
        'count': 64,
        'vol': 19475.314857
      }, {
        'time': 1545600300000,
        'open': 3954.36,
        'close': 3945.42,
        'low': 3944.05,
        'high': 3954.97,
        'amount': 17.7092,
        'count': 149,
        'vol': 69986.674812
      }, {
        'time': 1545600360000,
        'open': 3945.36,
        'close': 3946.36,
        'low': 3945.34,
        'high': 3948.05,
        'amount': 1.4839,
        'count': 30,
        'vol': 5856.112596
      }, {
        'time': 1545600420000,
        'open': 3946.36,
        'close': 3947.65,
        'low': 3945.9,
        'high': 3948.26,
        'amount': 4.8448,
        'count': 47,
        'vol': 19119.585917
      }, {
        'time': 1545600480000,
        'open': 3947.65,
        'close': 3946.78,
        'low': 3946.05,
        'high': 3948.4,
        'amount': 1.8645,
        'count': 36,
        'vol': 7359.221465
      }, {
        'time': 1545600540000,
        'open': 3947.59,
        'close': 3941.28,
        'low': 3941.28,
        'high': 3947.59,
        'amount': 3.4008,
        'count': 58,
        'vol': 13418.441823
      }, {
        'time': 1545600600000,
        'open': 3941.28,
        'close': 3937.38,
        'low': 3937.36,
        'high': 3942.32,
        'amount': 12.680310328318946,
        'count': 75,
        'vol': 49958.29184613
      }, {
        'time': 1545600660000,
        'open': 3937.59,
        'close': 3945.09,
        'low': 3937.32,
        'high': 3945.73,
        'amount': 10.57,
        'count': 88,
        'vol': 41678.702534
      }, {
        'time': 1545600720000,
        'open': 3945.94,
        'close': 3942.65,
        'low': 3942.5,
        'high': 3945.94,
        'amount': 1.7193,
        'count': 57,
        'vol': 6780.34045
      }, {
        'time': 1545600780000,
        'open': 3942.46,
        'close': 3933.11,
        'low': 3932.36,
        'high': 3942.46,
        'amount': 8.852162883313042,
        'count': 76,
        'vol': 34848.3311678
      }, {
        'time': 1545600840000,
        'open': 3934.95,
        'close': 3938.06,
        'low': 3933.92,
        'high': 3938.06,
        'amount': 2.2307,
        'count': 70,
        'vol': 8778.806471
      }, {
        'time': 1545600900000,
        'open': 3938.1,
        'close': 3938.24,
        'low': 3935.71,
        'high': 3939.51,
        'amount': 1.9563,
        'count': 35,
        'vol': 7703.065286
      }, {
        'time': 1545600960000,
        'open': 3938.25,
        'close': 3935.59,
        'low': 3935.1,
        'high': 3938.27,
        'amount': 4.3032,
        'count': 48,
        'vol': 16938.56607
      }, {
        'time': 1545601020000,
        'open': 3935.8,
        'close': 3936.94,
        'low': 3935.8,
        'high': 3937.1,
        'amount': 3.8502,
        'count': 43,
        'vol': 15158.169032
      }, {
        'time': 1545601080000,
        'open': 3936.05,
        'close': 3935.25,
        'low': 3935.1,
        'high': 3936.34,
        'amount': 1.296135442475065,
        'count': 50,
        'vol': 5100.709647
      }, {
        'time': 1545601140000,
        'open': 3935.25,
        'close': 3936.14,
        'low': 3935.25,
        'high': 3936.4,
        'amount': 1.5555,
        'count': 32,
        'vol': 6122.245259
      }, {
        'time': 1545601200000,
        'open': 3936.14,
        'close': 3936.1,
        'low': 3935.26,
        'high': 3936.41,
        'amount': 8.7553,
        'count': 25,
        'vol': 34458.005571
      }, {
        'time': 1545601260000,
        'open': 3936.11,
        'close': 3935.88,
        'low': 3935.76,
        'high': 3937.51,
        'amount': 4.762506533118966,
        'count': 44,
        'vol': 18749.830133
      }, {
        'time': 1545601320000,
        'open': 3935.86,
        'close': 3934.9,
        'low': 3934.06,
        'high': 3936.97,
        'amount': 4.5626,
        'count': 30,
        'vol': 17957.066572
      }, {
        'time': 1545601380000,
        'open': 3934.88,
        'close': 3933.05,
        'low': 3932.83,
        'high': 3934.88,
        'amount': 9.4831,
        'count': 32,
        'vol': 37301.723001
      }, {
        'time': 1545601440000,
        'open': 3932.83,
        'close': 3930.23,
        'low': 3929.23,
        'high': 3932.83,
        'amount': 16.998800266475456,
        'count': 51,
        'vol': 66817.381812
      }, {
        'time': 1545601500000,
        'open': 3929.52,
        'close': 3924.94,
        'low': 3920.43,
        'high': 3929.52,
        'amount': 12.3244,
        'count': 100,
        'vol': 48384.259691
      }, {
        'time': 1545601560000,
        'open': 3925,
        'close': 3923.82,
        'low': 3922.64,
        'high': 3926.44,
        'amount': 14.1284,
        'count': 67,
        'vol': 55445.861756
      }, {
        'time': 1545601620000,
        'open': 3923.81,
        'close': 3926.84,
        'low': 3920.42,
        'high': 3926.84,
        'amount': 15.1771,
        'count': 72,
        'vol': 59535.938427
      }, {
        'time': 1545601680000,
        'open': 3926.77,
        'close': 3925.64,
        'low': 3924.15,
        'high': 3927.54,
        'amount': 23.4884,
        'count': 66,
        'vol': 92205.559564
      }, {
        'time': 1545601740000,
        'open': 3924.61,
        'close': 3923.75,
        'low': 3919.94,
        'high': 3925.02,
        'amount': 20.5572,
        'count': 71,
        'vol': 80624.415389
      }, {
        'time': 1545601800000,
        'open': 3924.51,
        'close': 3925.48,
        'low': 3923.57,
        'high': 3925.75,
        'amount': 23.60549538686875,
        'count': 41,
        'vol': 92653.967643
      }, {
        'time': 1545601860000,
        'open': 3925.45,
        'close': 3925.67,
        'low': 3924.66,
        'high': 3926.41,
        'amount': 13.09534497319991,
        'count': 73,
        'vol': 51408.759286
      }, {
        'time': 1545601920000,
        'open': 3925.67,
        'close': 3925.04,
        'low': 3924.8,
        'high': 3926.28,
        'amount': 22.0919,
        'count': 39,
        'vol': 86729.933872
      }, {
        'time': 1545601980000,
        'open': 3925.03,
        'close': 3927.86,
        'low': 3924.95,
        'high': 3927.86,
        'amount': 24.6371,
        'count': 55,
        'vol': 96711.959994
      }, {
        'time': 1545602040000,
        'open': 3927.95,
        'close': 3932.82,
        'low': 3927.56,
        'high': 3933.39,
        'amount': 19.5134,
        'count': 79,
        'vol': 76696.404155
      }, {
        'time': 1545602100000,
        'open': 3931.86,
        'close': 3935.17,
        'low': 3931.68,
        'high': 3937,
        'amount': 38.2892,
        'count': 93,
        'vol': 150601.701063
      }, {
        'time': 1545602160000,
        'open': 3935.15,
        'close': 3937.98,
        'low': 3935.15,
        'high': 3939.15,
        'amount': 16.950698386724056,
        'count': 70,
        'vol': 66753.62026417723
      }, {
        'time': 1545602220000,
        'open': 3937.47,
        'close': 3932.24,
        'low': 3930.8,
        'high': 3937.66,
        'amount': 19.84286009598419,
        'count': 93,
        'vol': 78035.04407179
      }, {
        'time': 1545602280000,
        'open': 3932.23,
        'close': 3937.67,
        'low': 3932.23,
        'high': 3939.49,
        'amount': 26.356156548739673,
        'count': 117,
        'vol': 103724.45060376
      }, {
        'time': 1545602340000,
        'open': 3937.56,
        'close': 3929.56,
        'low': 3929.23,
        'high': 3937.56,
        'amount': 17.457281753322878,
        'count': 94,
        'vol': 68666.95031293
      }, {
        'time': 1545602400000,
        'open': 3929.55,
        'close': 3926.77,
        'low': 3925.05,
        'high': 3931.57,
        'amount': 28.80078441438699,
        'count': 98,
        'vol': 113104.81705889628
      }, {
        'time': 1545602460000,
        'open': 3926.75,
        'close': 3929.93,
        'low': 3926.75,
        'high': 3930.02,
        'amount': 3.869,
        'count': 53,
        'vol': 15201.284333
      }, {
        'time': 1545602520000,
        'open': 3929.46,
        'close': 3926.26,
        'low': 3925,
        'high': 3930.92,
        'amount': 20.42251783242407,
        'count': 101,
        'vol': 80238.811333
      }, {
        'time': 1545602580000,
        'open': 3925.77,
        'close': 3922.93,
        'low': 3922.93,
        'high': 3926.89,
        'amount': 29.499,
        'count': 97,
        'vol': 115796.232113
      }, {
        'time': 1545602640000,
        'open': 3923.04,
        'close': 3925.35,
        'low': 3922.56,
        'high': 3925.57,
        'amount': 15.254329005822356,
        'count': 43,
        'vol': 59854.59656833
      }, {
        'time': 1545602700000,
        'open': 3924.32,
        'close': 3924.93,
        'low': 3923.71,
        'high': 3927.46,
        'amount': 5.7951,
        'count': 49,
        'vol': 22749.682282
      }, {
        'time': 1545602760000,
        'open': 3924.84,
        'close': 3924.64,
        'low': 3921.05,
        'high': 3925.47,
        'amount': 29.1128,
        'count': 94,
        'vol': 114201.00159
      }, {
        'time': 1545602820000,
        'open': 3924.33,
        'close': 3923.27,
        'low': 3923.17,
        'high': 3925.78,
        'amount': 10.142,
        'count': 40,
        'vol': 39802.179869
      }, {
        'time': 1545602880000,
        'open': 3923.23,
        'close': 3924.09,
        'low': 3922.05,
        'high': 3924.19,
        'amount': 26.4123,
        'count': 43,
        'vol': 103620.364922
      }, {
        'time': 1545602940000,
        'open': 3923.95,
        'close': 3925.95,
        'low': 3923.94,
        'high': 3929.41,
        'amount': 19.98282410025188,
        'count': 72,
        'vol': 78449.57498488
      }, {
        'time': 1545603000000,
        'open': 3925.76,
        'close': 3929.68,
        'low': 3925.76,
        'high': 3931.73,
        'amount': 19.2385,
        'count': 93,
        'vol': 75604.026341
      }, {
        'time': 1545603060000,
        'open': 3930.07,
        'close': 3932.62,
        'low': 3930.07,
        'high': 3933.99,
        'amount': 10.3461,
        'count': 76,
        'vol': 40682.521952
      }, {
        'time': 1545603120000,
        'open': 3932.27,
        'close': 3927.98,
        'low': 3927.39,
        'high': 3932.63,
        'amount': 34.0194,
        'count': 121,
        'vol': 133650.102086
      }, {
        'time': 1545603180000,
        'open': 3927.99,
        'close': 3921.85,
        'low': 3921.85,
        'high': 3927.99,
        'amount': 14.3462,
        'count': 83,
        'vol': 56297.621491
      }, {
        'time': 1545603240000,
        'open': 3922.44,
        'close': 3928.03,
        'low': 3921.24,
        'high': 3928.03,
        'amount': 30.664809203431485,
        'count': 83,
        'vol': 120327.02192646
      }, {
        'time': 1545603300000,
        'open': 3926.15,
        'close': 3927.09,
        'low': 3926.15,
        'high': 3928.04,
        'amount': 3.947,
        'count': 32,
        'vol': 15502.597704
      }, {
        'time': 1545603360000,
        'open': 3927.49,
        'close': 3927.36,
        'low': 3926.86,
        'high': 3927.92,
        'amount': 24.481464248609953,
        'count': 54,
        'vol': 96146.1532104
      }, {
        'time': 1545603420000,
        'open': 3927.52,
        'close': 3923.56,
        'low': 3922.06,
        'high': 3927.57,
        'amount': 25.33250007841999,
        'count': 70,
        'vol': 99433.434601
      }, {
        'time': 1545603480000,
        'open': 3923.52,
        'close': 3922.11,
        'low': 3922.05,
        'high': 3924.02,
        'amount': 2.7788,
        'count': 48,
        'vol': 10900.069297
      }, {
        'time': 1545603540000,
        'open': 3923.16,
        'close': 3921.47,
        'low': 3921.32,
        'high': 3923.16,
        'amount': 9.0486,
        'count': 26,
        'vol': 35490.745623
      }, {
        'time': 1545603600000,
        'open': 3921.67,
        'close': 3916.08,
        'low': 3916.06,
        'high': 3921.67,
        'amount': 15.8492,
        'count': 124,
        'vol': 62093.226584
      }, {
        'time': 1545603660000,
        'open': 3916.73,
        'close': 3918.8,
        'low': 3916.73,
        'high': 3918.8,
        'amount': 17.2309,
        'count': 51,
        'vol': 67507.407651
      }, {
        'time': 1545603720000,
        'open': 3916.87,
        'close': 3918.95,
        'low': 3916.87,
        'high': 3919.52,
        'amount': 8.025812030038734,
        'count': 34,
        'vol': 31453.55032
      }, {
        'time': 1545603780000,
        'open': 3918.03,
        'close': 3918.94,
        'low': 3918.03,
        'high': 3919.83,
        'amount': 14.5777,
        'count': 31,
        'vol': 57124.561276
      }, {
        'time': 1545603840000,
        'open': 3918.95,
        'close': 3918.97,
        'low': 3917.97,
        'high': 3919,
        'amount': 19.2721,
        'count': 38,
        'vol': 75520.071379
      }, {
        'time': 1545603900000,
        'open': 3917.99,
        'close': 3918.34,
        'low': 3917.35,
        'high': 3918.61,
        'amount': 16.303599719260276,
        'count': 50,
        'vol': 63877.107609
      }, {
        'time': 1545603960000,
        'open': 3918.32,
        'close': 3914.33,
        'low': 3914.33,
        'high': 3918.32,
        'amount': 30.9665,
        'count': 80,
        'vol': 121287.993562
      }, {
        'time': 1545604020000,
        'open': 3914.33,
        'close': 3912.35,
        'low': 3910.06,
        'high': 3914.83,
        'amount': 24.92,
        'count': 162,
        'vol': 97474.89565
      }, {
        'time': 1545604080000,
        'open': 3912.34,
        'close': 3905.8,
        'low': 3905.02,
        'high': 3912.95,
        'amount': 39.80613120856292,
        'count': 169,
        'vol': 155651.238596
      }, {
        'time': 1545604140000,
        'open': 3906.31,
        'close': 3902,
        'low': 3902,
        'high': 3906.31,
        'amount': 56.591,
        'count': 152,
        'vol': 220871.15498
      }, {
        'time': 1545604200000,
        'open': 3902.36,
        'close': 3894.09,
        'low': 3890.01,
        'high': 3902.36,
        'amount': 104.94481083748725,
        'count': 411,
        'vol': 408943.08126608224
      }, {
        'time': 1545604260000,
        'open': 3894.22,
        'close': 3900.21,
        'low': 3889.4,
        'high': 3905.26,
        'amount': 222.1311,
        'count': 479,
        'vol': 864932.506027
      }, {
        'time': 1545604320000,
        'open': 3900.21,
        'close': 3889.57,
        'low': 3889.52,
        'high': 3901.36,
        'amount': 23.381960206438222,
        'count': 207,
        'vol': 91087.271321
      }, {
        'time': 1545604380000,
        'open': 3889.57,
        'close': 3897.94,
        'low': 3889.13,
        'high': 3897.95,
        'amount': 20.2779,
        'count': 125,
        'vol': 78928.824837
      }, {
        'time': 1545604440000,
        'open': 3897.94,
        'close': 3902.95,
        'low': 3896.25,
        'high': 3902.95,
        'amount': 26.1656,
        'count': 76,
        'vol': 102025.172012
      }, {
        'time': 1545604500000,
        'open': 3902.95,
        'close': 3908.97,
        'low': 3902.31,
        'high': 3911.36,
        'amount': 19.05252110764433,
        'count': 115,
        'vol': 74455.87415486
      }, {
        'time': 1545604560000,
        'open': 3908.75,
        'close': 3908.52,
        'low': 3907.09,
        'high': 3909.85,
        'amount': 14.5468,
        'count': 43,
        'vol': 56849.93244
      }, {
        'time': 1545604620000,
        'open': 3907.41,
        'close': 3905.62,
        'low': 3905.62,
        'high': 3907.45,
        'amount': 22.8787,
        'count': 70,
        'vol': 89381.794543
      }, {
        'time': 1545604680000,
        'open': 3905.52,
        'close': 3902.26,
        'low': 3901.05,
        'high': 3905.52,
        'amount': 21.723,
        'count': 57,
        'vol': 84776.967893
      }, {
        'time': 1545604740000,
        'open': 3902.16,
        'close': 3902.83,
        'low': 3902.15,
        'high': 3904.55,
        'amount': 35.9406,
        'count': 58,
        'vol': 140282.631178
      }, {
        'time': 1545604800000,
        'open': 3902.84,
        'close': 3905.31,
        'low': 3902.84,
        'high': 3907.1,
        'amount': 15.218,
        'count': 56,
        'vol': 59421.989726
      }, {
        'time': 1545604860000,
        'open': 3906.88,
        'close': 3914.06,
        'low': 3905.56,
        'high': 3914.39,
        'amount': 27.7121,
        'count': 124,
        'vol': 108400.886932
      }, {
        'time': 1545604920000,
        'open': 3914.05,
        'close': 3912.3,
        'low': 3911.65,
        'high': 3914.06,
        'amount': 26.3361,
        'count': 53,
        'vol': 103051.171226
      }, {
        'time': 1545604980000,
        'open': 3912.05,
        'close': 3906.83,
        'low': 3906.83,
        'high': 3912.05,
        'amount': 27.3156,
        'count': 81,
        'vol': 106793.529554
      }, {
        'time': 1545605040000,
        'open': 3907,
        'close': 3907.29,
        'low': 3906.83,
        'high': 3908.95,
        'amount': 14.115927519154761,
        'count': 59,
        'vol': 55151.994791
      }, {
        'time': 1545605100000,
        'open': 3907.93,
        'close': 3912.99,
        'low': 3907.32,
        'high': 3912.99,
        'amount': 14.0939,
        'count': 55,
        'vol': 55084.81528
      }, {
        'time': 1545605160000,
        'open': 3912.99,
        'close': 3916.68,
        'low': 3912,
        'high': 3916.68,
        'amount': 7.643100440852875,
        'count': 90,
        'vol': 29911.15121457
      }, {
        'time': 1545605220000,
        'open': 3915.69,
        'close': 3914.16,
        'low': 3914.16,
        'high': 3915.69,
        'amount': 16.2344044877475,
        'count': 53,
        'vol': 63557.37821407
      }, {
        'time': 1545605280000,
        'open': 3914.86,
        'close': 3919.04,
        'low': 3914.2,
        'high': 3919.28,
        'amount': 10.884016159064545,
        'count': 79,
        'vol': 42632.36531137
      }, {
        'time': 1545605340000,
        'open': 3919.16,
        'close': 3926.38,
        'low': 3919.15,
        'high': 3932.37,
        'amount': 40.6423,
        'count': 228,
        'vol': 159501.710725
      }, {
        'time': 1545605400000,
        'open': 3926.38,
        'close': 3937.91,
        'low': 3926.38,
        'high': 3938.68,
        'amount': 62.2637,
        'count': 241,
        'vol': 244964.24849
      }, {
        'time': 1545605460000,
        'open': 3937.95,
        'close': 3932.64,
        'low': 3927.08,
        'high': 3941.44,
        'amount': 30.1323,
        'count': 220,
        'vol': 118473.27103
      }, {
        'time': 1545605520000,
        'open': 3931.15,
        'close': 3929.11,
        'low': 3928.88,
        'high': 3931.98,
        'amount': 15.5869,
        'count': 78,
        'vol': 61257.553022
      }, {
        'time': 1545605580000,
        'open': 3929.11,
        'close': 3937.93,
        'low': 3929.11,
        'high': 3940.58,
        'amount': 24.3865,
        'count': 127,
        'vol': 95972.263919
      }, {
        'time': 1545605640000,
        'open': 3937.86,
        'close': 3930.84,
        'low': 3930.75,
        'high': 3938.44,
        'amount': 14.0069,
        'count': 83,
        'vol': 55106.237804
      }, {
        'time': 1545605700000,
        'open': 3931.56,
        'close': 3934.66,
        'low': 3930.78,
        'high': 3935.61,
        'amount': 8.2119,
        'count': 81,
        'vol': 32294.893276
      }, {
        'time': 1545605760000,
        'open': 3934.66,
        'close': 3937.69,
        'low': 3934.65,
        'high': 3937.69,
        'amount': 5.3634,
        'count': 44,
        'vol': 21105.098143
      }, {
        'time': 1545605820000,
        'open': 3936.47,
        'close': 3930.78,
        'low': 3930.78,
        'high': 3937.03,
        'amount': 36.2,
        'count': 122,
        'vol': 142399.277185
      }, {
        'time': 1545605880000,
        'open': 3930.77,
        'close': 3934.5,
        'low': 3930.77,
        'high': 3936.33,
        'amount': 39.9542,
        'count': 72,
        'vol': 157128.10813
      }, {
        'time': 1545605940000,
        'open': 3934.82,
        'close': 3939.94,
        'low': 3934.63,
        'high': 3940.38,
        'amount': 41.1882,
        'count': 109,
        'vol': 162195.175978
      }, {
        'time': 1545606000000,
        'open': 3939.94,
        'close': 3942.57,
        'low': 3939.24,
        'high': 3944.98,
        'amount': 25.2533,
        'count': 138,
        'vol': 99555.263077
      }, {
        'time': 1545606060000,
        'open': 3942.57,
        'close': 3940.85,
        'low': 3935.61,
        'high': 3942.57,
        'amount': 35.26444365296618,
        'count': 144,
        'vol': 138893.670399
      }, {
        'time': 1545606120000,
        'open': 3940.15,
        'close': 3938.35,
        'low': 3938.35,
        'high': 3941.5,
        'amount': 22.5085,
        'count': 70,
        'vol': 88694.554922
      }, {
        'time': 1545606180000,
        'open': 3937.58,
        'close': 3933.58,
        'low': 3933.34,
        'high': 3939.19,
        'amount': 22.5156,
        'count': 129,
        'vol': 88628.549622
      }, {
        'time': 1545606240000,
        'open': 3933.58,
        'close': 3931.05,
        'low': 3931.05,
        'high': 3935.37,
        'amount': 59.48352701326103,
        'count': 91,
        'vol': 233885.97452828
      }, {
        'time': 1545606300000,
        'open': 3931.06,
        'close': 3928.07,
        'low': 3926.16,
        'high': 3931.06,
        'amount': 48.14614916540102,
        'count': 146,
        'vol': 189115.57272278253
      }, {
        'time': 1545606360000,
        'open': 3927.6,
        'close': 3928.35,
        'low': 3926.87,
        'high': 3929.29,
        'amount': 6.8014,
        'count': 77,
        'vol': 26712.651305
      }, {
        'time': 1545606420000,
        'open': 3928.35,
        'close': 3935.05,
        'low': 3928.35,
        'high': 3936.72,
        'amount': 6.7874,
        'count': 131,
        'vol': 26699.112616
      }, {
        'time': 1545606480000,
        'open': 3934.53,
        'close': 3917.47,
        'low': 3913.32,
        'high': 3935.38,
        'amount': 91.26175084742137,
        'count': 310,
        'vol': 358272.33420653
      }, {
        'time': 1545606540000,
        'open': 3917.43,
        'close': 3918.22,
        'low': 3916.81,
        'high': 3922.27,
        'amount': 37.55741439349171,
        'count': 119,
        'vol': 147198.761821
      }, {
        'time': 1545606600000,
        'open': 3918.95,
        'close': 3921.39,
        'low': 3918.95,
        'high': 3926.43,
        'amount': 31.1701,
        'count': 116,
        'vol': 122289.753081
      }, {
        'time': 1545606660000,
        'open': 3921.24,
        'close': 3920.33,
        'low': 3918.97,
        'high': 3927.65,
        'amount': 21.5483,
        'count': 99,
        'vol': 84563.483275
      }, {
        'time': 1545606720000,
        'open': 3921.28,
        'close': 3920.58,
        'low': 3918.07,
        'high': 3921.46,
        'amount': 16.2248,
        'count': 54,
        'vol': 63591.335592
      }, {
        'time': 1545606780000,
        'open': 3920.58,
        'close': 3923.64,
        'low': 3919.05,
        'high': 3924.95,
        'amount': 14.4216,
        'count': 74,
        'vol': 56555.085859
      }, {
        'time': 1545606840000,
        'open': 3923.76,
        'close': 3922.8,
        'low': 3922.8,
        'high': 3924.44,
        'amount': 16.33428507822924,
        'count': 49,
        'vol': 64090.847882
      }, {
        'time': 1545606900000,
        'open': 3922.86,
        'close': 3925.78,
        'low': 3921.39,
        'high': 3925.78,
        'amount': 7.2988,
        'count': 65,
        'vol': 28636.992997
      }, {
        'time': 1545606960000,
        'open': 3925.62,
        'close': 3929.8,
        'low': 3925.62,
        'high': 3930.07,
        'amount': 3.1525,
        'count': 54,
        'vol': 12384.438971
      }, {
        'time': 1545607020000,
        'open': 3929.8,
        'close': 3921.74,
        'low': 3921.39,
        'high': 3929.86,
        'amount': 30.101720284514712,
        'count': 117,
        'vol': 118188.3275345
      }, {
        'time': 1545607080000,
        'open': 3922.36,
        'close': 3925.33,
        'low': 3921.07,
        'high': 3926.12,
        'amount': 32.3838,
        'count': 92,
        'vol': 126998.92687
      }, {
        'time': 1545607140000,
        'open': 3925.47,
        'close': 3922.26,
        'low': 3921.77,
        'high': 3925.87,
        'amount': 12.8722,
        'count': 44,
        'vol': 50523.006696
      }, {
        'time': 1545607200000,
        'open': 3922.25,
        'close': 3920.77,
        'low': 3920.77,
        'high': 3922.25,
        'amount': 32.2674,
        'count': 75,
        'vol': 126535.021394
      }, {
        'time': 1545607260000,
        'open': 3920.77,
        'close': 3917.84,
        'low': 3910,
        'high': 3920.77,
        'amount': 36.8855,
        'count': 185,
        'vol': 144377.965487
      }, {
        'time': 1545607320000,
        'open': 3918.54,
        'close': 3919.92,
        'low': 3918.05,
        'high': 3922.86,
        'amount': 35.2259,
        'count': 107,
        'vol': 138057.158929
      }, {
        'time': 1545607380000,
        'open': 3919.9,
        'close': 3921.24,
        'low': 3918.31,
        'high': 3922.88,
        'amount': 18.1279,
        'count': 75,
        'vol': 71075.546764
      }, {
        'time': 1545607440000,
        'open': 3921.95,
        'close': 3921.92,
        'low': 3921.27,
        'high': 3923,
        'amount': 15.1487,
        'count': 46,
        'vol': 59416.152107
      }, {
        'time': 1545607500000,
        'open': 3921.93,
        'close': 3922,
        'low': 3921.04,
        'high': 3922.95,
        'amount': 23.9147,
        'count': 67,
        'vol': 93794.164261
      }, {
        'time': 1545607560000,
        'open': 3922,
        'close': 3933.05,
        'low': 3922,
        'high': 3933.05,
        'amount': 32.8344,
        'count': 128,
        'vol': 128947.565709
      }, {
        'time': 1545607620000,
        'open': 3933.04,
        'close': 3934.32,
        'low': 3929.67,
        'high': 3935.19,
        'amount': 40.7488,
        'count': 86,
        'vol': 160235.833989
      }, {
        'time': 1545607680000,
        'open': 3933.98,
        'close': 3933.05,
        'low': 3932.05,
        'high': 3934.69,
        'amount': 17.2281,
        'count': 59,
        'vol': 67774.768829
      }, {
        'time': 1545607740000,
        'open': 3933.49,
        'close': 3931.31,
        'low': 3928.97,
        'high': 3933.49,
        'amount': 5.2675,
        'count': 104,
        'vol': 20703.788348
      }, {
        'time': 1545607800000,
        'open': 3931.95,
        'close': 3927.98,
        'low': 3927.56,
        'high': 3932.3,
        'amount': 18.369980534757804,
        'count': 91,
        'vol': 72194.81625486857
      }, {
        'time': 1545607860000,
        'open': 3928.58,
        'close': 3931.95,
        'low': 3927,
        'high': 3932.32,
        'amount': 10.7516,
        'count': 65,
        'vol': 42241.985134
      }, {
        'time': 1545607920000,
        'open': 3931.95,
        'close': 3925.95,
        'low': 3925.55,
        'high': 3932.81,
        'amount': 12.9938,
        'count': 83,
        'vol': 51051.688588
      }, {
        'time': 1545607980000,
        'open': 3925.95,
        'close': 3924.97,
        'low': 3924.97,
        'high': 3925.95,
        'amount': 22.002286683549592,
        'count': 52,
        'vol': 86371.995701
      }, {
        'time': 1545608040000,
        'open': 3924.96,
        'close': 3930.95,
        'low': 3924.96,
        'high': 3930.95,
        'amount': 14.06060144935907,
        'count': 74,
        'vol': 55213.83933396
      }, {
        'time': 1545608100000,
        'open': 3930.92,
        'close': 3921.59,
        'low': 3921.05,
        'high': 3930.92,
        'amount': 26.00103708139733,
        'count': 131,
        'vol': 102082.39342440561
      }, {
        'time': 1545608160000,
        'open': 3922.37,
        'close': 3919.69,
        'low': 3919.05,
        'high': 3924.28,
        'amount': 26.21762183625206,
        'count': 107,
        'vol': 102782.53756286
      }, {
        'time': 1545608220000,
        'open': 3919.69,
        'close': 3926.07,
        'low': 3918.11,
        'high': 3926.95,
        'amount': 15.065,
        'count': 72,
        'vol': 59100.677899
      }, {
        'time': 1545608280000,
        'open': 3926.08,
        'close': 3926.95,
        'low': 3923.23,
        'high': 3927,
        'amount': 17.6514,
        'count': 59,
        'vol': 69291.221128
      }, {
        'time': 1545608340000,
        'open': 3926.95,
        'close': 3922.06,
        'low': 3921.05,
        'high': 3928.73,
        'amount': 13.8007,
        'count': 81,
        'vol': 54187.275983
      }, {
        'time': 1545608400000,
        'open': 3922.06,
        'close': 3922.82,
        'low': 3920.05,
        'high': 3923.99,
        'amount': 19.70236212678642,
        'count': 99,
        'vol': 77262.27470815
      }, {
        'time': 1545608460000,
        'open': 3922.95,
        'close': 3926.62,
        'low': 3922.26,
        'high': 3927.49,
        'amount': 14.5148,
        'count': 62,
        'vol': 56974.751397
      }, {
        'time': 1545608520000,
        'open': 3926.95,
        'close': 3926.95,
        'low': 3925.04,
        'high': 3927.5,
        'amount': 18.0552,
        'count': 44,
        'vol': 70895.92336
      }, {
        'time': 1545608580000,
        'open': 3926.41,
        'close': 3930.42,
        'low': 3926.41,
        'high': 3930.42,
        'amount': 25.3432,
        'count': 48,
        'vol': 99542.407647
      }, {
        'time': 1545608640000,
        'open': 3929.06,
        'close': 3930.11,
        'low': 3928.01,
        'high': 3930.42,
        'amount': 14.483,
        'count': 34,
        'vol': 56907.515598
      }, {
        'time': 1545608700000,
        'open': 3930.28,
        'close': 3933.8,
        'low': 3929.82,
        'high': 3934.56,
        'amount': 16.490011037933087,
        'count': 56,
        'vol': 64840.99634841
      }, {
        'time': 1545608760000,
        'open': 3934.34,
        'close': 3933.16,
        'low': 3931.57,
        'high': 3936.72,
        'amount': 39.918188962066914,
        'count': 125,
        'vol': 157113.28349859
      }, {
        'time': 1545608820000,
        'open': 3931.62,
        'close': 3927.93,
        'low': 3925.36,
        'high': 3932.29,
        'amount': 22.7650012209928,
        'count': 113,
        'vol': 89460.76550189
      }, {
        'time': 1545608880000,
        'open': 3928.4,
        'close': 3930.44,
        'low': 3928.4,
        'high': 3930.44,
        'amount': 45.7224,
        'count': 57,
        'vol': 179638.457109
      }, {
        'time': 1545608940000,
        'open': 3930.5,
        'close': 3929.82,
        'low': 3929.65,
        'high': 3932.81,
        'amount': 10.4191,
        'count': 72,
        'vol': 40956.718729
      }, {
        'time': 1545609000000,
        'open': 3930.93,
        'close': 3931.22,
        'low': 3929.77,
        'high': 3933.1,
        'amount': 3.688792530654846,
        'count': 57,
        'vol': 14499.56488328
      }, {
        'time': 1545609060000,
        'open': 3930.52,
        'close': 3929.85,
        'low': 3928.22,
        'high': 3930.52,
        'amount': 9.455878980014809,
        'count': 67,
        'vol': 37153.58330956
      }, {
        'time': 1545609120000,
        'open': 3929.85,
        'close': 3932.62,
        'low': 3928.25,
        'high': 3932.62,
        'amount': 11.051471066020332,
        'count': 53,
        'vol': 43429.5082998
      }, {
        'time': 1545609180000,
        'open': 3932,
        'close': 3933.98,
        'low': 3931.28,
        'high': 3936.03,
        'amount': 21.7875,
        'count': 86,
        'vol': 85696.861397
      }, {
        'time': 1545609240000,
        'open': 3933.57,
        'close': 3932.08,
        'low': 3931.42,
        'high': 3934.18,
        'amount': 10.833287450497943,
        'count': 67,
        'vol': 42597.530691
      }, {
        'time': 1545609300000,
        'open': 3932.35,
        'close': 3929.95,
        'low': 3927.46,
        'high': 3934.23,
        'amount': 33.8195,
        'count': 141,
        'vol': 132941.502984
      }, {
        'time': 1545609360000,
        'open': 3931.62,
        'close': 3930.05,
        'low': 3929.07,
        'high': 3932.81,
        'amount': 33.0711,
        'count': 57,
        'vol': 129978.508107
      }, {
        'time': 1545609420000,
        'open': 3930.61,
        'close': 3926.63,
        'low': 3925.11,
        'high': 3931.32,
        'amount': 15.125852540531454,
        'count': 61,
        'vol': 59429.87071136
      }, {
        'time': 1545609480000,
        'open': 3925.95,
        'close': 3927.96,
        'low': 3925.11,
        'high': 3928.44,
        'amount': 21.040259257201825,
        'count': 119,
        'vol': 82618.38922943546
      }, {
        'time': 1545609540000,
        'open': 3927.96,
        'close': 3929.89,
        'low': 3927.95,
        'high': 3932.22,
        'amount': 19.961948645196436,
        'count': 107,
        'vol': 78447.21338643
      }, {
        'time': 1545609600000,
        'open': 3929.94,
        'close': 3930.55,
        'low': 3928.43,
        'high': 3932.36,
        'amount': 30.860526519048733,
        'count': 119,
        'vol': 121266.97530076306
      }, {
        'time': 1545609660000,
        'open': 3929.88,
        'close': 3933.44,
        'low': 3929.88,
        'high': 3935.03,
        'amount': 28.682521496201527,
        'count': 92,
        'vol': 112812.43635500947
      }, {
        'time': 1545609720000,
        'open': 3934.14,
        'close': 3935.47,
        'low': 3932.96,
        'high': 3936.66,
        'amount': 26.92797746883556,
        'count': 125,
        'vol': 105939.496689
      }, {
        'time': 1545609780000,
        'open': 3935.68,
        'close': 3936.9,
        'low': 3933.43,
        'high': 3936.91,
        'amount': 26.0351,
        'count': 136,
        'vol': 102458.440485
      }, {
        'time': 1545609840000,
        'open': 3936.91,
        'close': 3946.43,
        'low': 3936.91,
        'high': 3947.29,
        'amount': 37.0594,
        'count': 176,
        'vol': 146111.293245
      }, {
        'time': 1545609900000,
        'open': 3946.57,
        'close': 3949.2,
        'low': 3945.03,
        'high': 3949.69,
        'amount': 32.588450750102645,
        'count': 230,
        'vol': 128620.443524
      }, {
        'time': 1545609960000,
        'open': 3949.73,
        'close': 3965.33,
        'low': 3949.73,
        'high': 3969.85,
        'amount': 73.4791,
        'count': 402,
        'vol': 290951.1036612121
      }, {
        'time': 1545610020000,
        'open': 3964.03,
        'close': 3955,
        'low': 3950.91,
        'high': 3965.3,
        'amount': 39.988517498686114,
        'count': 198,
        'vol': 158219.39608958
      }, {
        'time': 1545610080000,
        'open': 3955.15,
        'close': 3966.54,
        'low': 3955.15,
        'high': 3967.01,
        'amount': 44.322738942580344,
        'count': 169,
        'vol': 175531.862393
      }, {
        'time': 1545610140000,
        'open': 3964.38,
        'close': 3970.34,
        'low': 3964,
        'high': 3971.76,
        'amount': 53.498890875666646,
        'count': 329,
        'vol': 212200.29098017368
      }, {
        'time': 1545610200000,
        'open': 3970.34,
        'close': 3969.06,
        'low': 3968.87,
        'high': 3974.34,
        'amount': 46.937170224297475,
        'count': 471,
        'vol': 186417.84748887565
      }, {
        'time': 1545610260000,
        'open': 3969.37,
        'close': 3980.88,
        'low': 3968.2,
        'high': 3980.88,
        'amount': 92.47297740919853,
        'count': 337,
        'vol': 367647.061699
      }, {
        'time': 1545610320000,
        'open': 3980.88,
        'close': 3995.33,
        'low': 3980.02,
        'high': 3997.96,
        'amount': 61.55591243951104,
        'count': 591,
        'vol': 245465.27062605988
      }, {
        'time': 1545610380000,
        'open': 3995.33,
        'close': 3979.99,
        'low': 3979.99,
        'high': 3996.66,
        'amount': 91.28705166556199,
        'count': 576,
        'vol': 364031.20821579965
      }, {
        'time': 1545610440000,
        'open': 3980.09,
        'close': 3996.82,
        'low': 3979.89,
        'high': 3998.65,
        'amount': 50.66011073925956,
        'count': 353,
        'vol': 202076.44482891
      }, {
        'time': 1545610500000,
        'open': 3996.82,
        'close': 4000.31,
        'low': 3995.58,
        'high': 4003.63,
        'amount': 151.85517196927114,
        'count': 604,
        'vol': 607432.46771
      }, {
        'time': 1545610560000,
        'open': 4001.36,
        'close': 3982.05,
        'low': 3981.54,
        'high': 4003.87,
        'amount': 84.36354600627165,
        'count': 457,
        'vol': 337233.87847330037
      }, {
        'time': 1545610620000,
        'open': 3982.05,
        'close': 3982.53,
        'low': 3980,
        'high': 3986.05,
        'amount': 30.630706647059856,
        'count': 249,
        'vol': 121975.58571470765
      }, {
        'time': 1545610680000,
        'open': 3981.15,
        'close': 3988.22,
        'low': 3980.72,
        'high': 3990.01,
        'amount': 96.2522,
        'count': 301,
        'vol': 383880.087433
      }, {
        'time': 1545610740000,
        'open': 3988.23,
        'close': 3989.09,
        'low': 3988.22,
        'high': 3991.61,
        'amount': 14.996373997620363,
        'count': 152,
        'vol': 59823.28850619
      }, {
        'time': 1545610800000,
        'open': 3988.8,
        'close': 3982.39,
        'low': 3981.59,
        'high': 3989.09,
        'amount': 48.8388,
        'count': 195,
        'vol': 194681.535374
      }, {
        'time': 1545610860000,
        'open': 3982.6,
        'close': 3976.24,
        'low': 3976.05,
        'high': 3982.69,
        'amount': 50.720659820201455,
        'count': 250,
        'vol': 201870.881232
      }, {
        'time': 1545610920000,
        'open': 3977.1,
        'close': 3982.6,
        'low': 3975.61,
        'high': 3986.01,
        'amount': 44.8539,
        'count': 214,
        'vol': 178520.356969
      }, {
        'time': 1545610980000,
        'open': 3982.6,
        'close': 3984.87,
        'low': 3981.77,
        'high': 3987.96,
        'amount': 25.05266131761505,
        'count': 219,
        'vol': 99802.474772
      }, {
        'time': 1545611040000,
        'open': 3985.91,
        'close': 3984.01,
        'low': 3982.71,
        'high': 3987.73,
        'amount': 32.62014464714176,
        'count': 140,
        'vol': 129983.60372601
      }, {
        'time': 1545611100000,
        'open': 3984.62,
        'close': 3992.98,
        'low': 3984.03,
        'high': 3993,
        'amount': 14.4764,
        'count': 117,
        'vol': 57721.428007
      }, {
        'time': 1545611160000,
        'open': 3992.98,
        'close': 3988.96,
        'low': 3988.88,
        'high': 3993.32,
        'amount': 44.767680032148945,
        'count': 143,
        'vol': 178655.12165145
      }, {
        'time': 1545611220000,
        'open': 3990.17,
        'close': 3982.89,
        'low': 3982.88,
        'high': 3990.17,
        'amount': 56.48384483754173,
        'count': 204,
        'vol': 225149.4054233329
      }, {
        'time': 1545611280000,
        'open': 3982.89,
        'close': 3988.91,
        'low': 3982.88,
        'high': 3990,
        'amount': 53.93468505205421,
        'count': 236,
        'vol': 215032.35929590405
      }, {
        'time': 1545611340000,
        'open': 3989.05,
        'close': 3988.5,
        'low': 3986.18,
        'high': 3990,
        'amount': 40.6706,
        'count': 153,
        'vol': 162205.227738
      }, {
        'time': 1545611400000,
        'open': 3988.47,
        'close': 3982.91,
        'low': 3982.88,
        'high': 3990,
        'amount': 53.10878088473323,
        'count': 225,
        'vol': 211790.77281313
      }, {
        'time': 1545611460000,
        'open': 3982.92,
        'close': 3984.09,
        'low': 3982.88,
        'high': 3987.31,
        'amount': 5.345051399860643,
        'count': 156,
        'vol': 21299.079390867897
      }, {
        'time': 1545611520000,
        'open': 3982.98,
        'close': 3984.12,
        'low': 3982.96,
        'high': 3987.22,
        'amount': 22.7605,
        'count': 126,
        'vol': 90696.22750804527
      }, {
        'time': 1545611580000,
        'open': 3984.69,
        'close': 3984.17,
        'low': 3984.09,
        'high': 3985,
        'amount': 12.976,
        'count': 140,
        'vol': 51701.672573
      }, {
        'time': 1545611640000,
        'open': 3984.17,
        'close': 3983.74,
        'low': 3983.05,
        'high': 3985,
        'amount': 15.88438882782366,
        'count': 107,
        'vol': 63288.080446
      }, {
        'time': 1545611700000,
        'open': 3983.74,
        'close': 3982.88,
        'low': 3982.88,
        'high': 3984.28,
        'amount': 25.46413613723049,
        'count': 213,
        'vol': 101445.43846434
      }, {
        'time': 1545611760000,
        'open': 3982.88,
        'close': 3983.92,
        'low': 3981.88,
        'high': 3984.95,
        'amount': 18.84,
        'count': 144,
        'vol': 75049.214537
      }, {
        'time': 1545611820000,
        'open': 3984.42,
        'close': 3990.87,
        'low': 3984.26,
        'high': 3993.67,
        'amount': 24.311043266711092,
        'count': 242,
        'vol': 97006.799608
      }, {
        'time': 1545611880000,
        'open': 3990.72,
        'close': 3989.97,
        'low': 3988.1,
        'high': 3990.77,
        'amount': 31.055570012616638,
        'count': 180,
        'vol': 123887.24912924
      }, {
        'time': 1545611940000,
        'open': 3989.79,
        'close': 3997.82,
        'low': 3989.78,
        'high': 3999,
        'amount': 39.669058027411715,
        'count': 204,
        'vol': 158478.83458871
      }, {
        'time': 1545612000000,
        'open': 3998.12,
        'close': 4014.09,
        'low': 3997.8,
        'high': 4015,
        'amount': 193.55886223012777,
        'count': 512,
        'vol': 775170.83295
      }, {
        'time': 1545612060000,
        'open': 4014.09,
        'close': 4038,
        'low': 4012.52,
        'high': 4039,
        'amount': 320.5294223220344,
        'count': 1235,
        'vol': 1291052.0309064453
      }, {
        'time': 1545612120000,
        'open': 4038,
        'close': 4030,
        'low': 4029.39,
        'high': 4038,
        'amount': 218.3157547718048,
        'count': 879,
        'vol': 880894.248773
      }, {
        'time': 1545612180000,
        'open': 4029.43,
        'close': 4021.34,
        'low': 4020,
        'high': 4030.63,
        'amount': 76.25472208642904,
        'count': 556,
        'vol': 307064.676276913
      }, {
        'time': 1545612240000,
        'open': 4021.34,
        'close': 4047.37,
        'low': 4020.01,
        'high': 4049,
        'amount': 153.2245,
        'count': 660,
        'vol': 618252.967552
      }, {
        'time': 1545612300000,
        'open': 4048.59,
        'close': 4088,
        'low': 4044.87,
        'high': 4088,
        'amount': 374.8349845315417,
        'count': 1481,
        'vol': 1524923.6323487165
      }, {
        'time': 1545612360000,
        'open': 4086.26,
        'close': 4101.29,
        'low': 4076.05,
        'high': 4108.54,
        'amount': 693.0413154376816,
        'count': 2184,
        'vol': 2840070.9806519095
      }, {
        'time': 1545612420000,
        'open': 4101.29,
        'close': 4088.55,
        'low': 4084.7,
        'high': 4103.27,
        'amount': 106.03580357869618,
        'count': 759,
        'vol': 434018.8573674
      }, {
        'time': 1545612480000,
        'open': 4087.92,
        'close': 4102.7,
        'low': 4087.92,
        'high': 4105.86,
        'amount': 152.50976136677295,
        'count': 745,
        'vol': 625146.87218493
      }, {
        'time': 1545612540000,
        'open': 4103.7,
        'close': 4085.78,
        'low': 4085.33,
        'high': 4103.89,
        'amount': 39.64372136408007,
        'count': 367,
        'vol': 162340.1804161818
      }, {
        'time': 1545612600000,
        'open': 4085.78,
        'close': 4103.85,
        'low': 4085.78,
        'high': 4114.5,
        'amount': 156.4542,
        'count': 792,
        'vol': 641735.8790275267
      }, {
        'time': 1545612660000,
        'open': 4103.85,
        'close': 4130,
        'low': 4102.66,
        'high': 4130,
        'amount': 189.1381617146422,
        'count': 872,
        'vol': 778369.1653020186
      }, {
        'time': 1545612720000,
        'open': 4130,
        'close': 4150.04,
        'low': 4129,
        'high': 4158,
        'amount': 364.8719426062168,
        'count': 1256,
        'vol': 1512350.5522929032
      }, {
        'time': 1545612780000,
        'open': 4150.04,
        'close': 4145,
        'low': 4145,
        'high': 4155.13,
        'amount': 219.1980081459858,
        'count': 640,
        'vol': 910218.07382932
      }, {
        'time': 1545612840000,
        'open': 4145,
        'close': 4131.28,
        'low': 4126,
        'high': 4145,
        'amount': 131.93445013457006,
        'count': 578,
        'vol': 545263.4676552344
      }, {
        'time': 1545612900000,
        'open': 4131.28,
        'close': 4141.05,
        'low': 4129.16,
        'high': 4141.16,
        'amount': 77.38850135129577,
        'count': 450,
        'vol': 319985.75298
      }, {
        'time': 1545612960000,
        'open': 4141.09,
        'close': 4135.98,
        'low': 4130,
        'high': 4141.15,
        'amount': 196.6795058485776,
        'count': 689,
        'vol': 813776.168094
      }, {
        'time': 1545613020000,
        'open': 4135.16,
        'close': 4150.7,
        'low': 4133.22,
        'high': 4158,
        'amount': 134.44853420698104,
        'count': 615,
        'vol': 557339.4105989955
      }, {
        'time': 1545613080000,
        'open': 4150.7,
        'close': 4147.1,
        'low': 4139.5,
        'high': 4153.84,
        'amount': 84.7122,
        'count': 438,
        'vol': 351266.737787
      }, {
        'time': 1545613140000,
        'open': 4147.95,
        'close': 4144.05,
        'low': 4141.44,
        'high': 4148.95,
        'amount': 52.412352860008646,
        'count': 319,
        'vol': 217179.14359642
      }, {
        'time': 1545613200000,
        'open': 4144.05,
        'close': 4162.46,
        'low': 4143.99,
        'high': 4165.22,
        'amount': 146.49894032504648,
        'count': 652,
        'vol': 608320.7634383774
      }, {
        'time': 1545613260000,
        'open': 4161.65,
        'close': 4132.71,
        'low': 4132.71,
        'high': 4165.19,
        'amount': 105.62858369947831,
        'count': 560,
        'vol': 438550.76689449
      }, {
        'time': 1545613320000,
        'open': 4133.94,
        'close': 4129.86,
        'low': 4122.84,
        'high': 4133.94,
        'amount': 107.90185485935464,
        'count': 520,
        'vol': 445522.10037637816
      }, {
        'time': 1545613380000,
        'open': 4129.86,
        'close': 4130.38,
        'low': 4121.89,
        'high': 4133,
        'amount': 64.72686752009344,
        'count': 357,
        'vol': 267201.833258
      }, {
        'time': 1545613440000,
        'open': 4130.38,
        'close': 4130.63,
        'low': 4123.79,
        'high': 4132.52,
        'amount': 34.72735261627907,
        'count': 240,
        'vol': 143376.252804
      }, {
        'time': 1545613500000,
        'open': 4132.01,
        'close': 4129.99,
        'low': 4128.03,
        'high': 4137.7,
        'amount': 52.16401507356659,
        'count': 301,
        'vol': 215532.39173211
      }];
      /***/
    },

    /***/
    "9rSQ":
    /*!***********************************************************!*\
      !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function rSQ(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__(
      /*! ./../utils */
      "xTJ+");

      function InterceptorManager() {
        this.handlers = [];
      }
      /**
       * Add a new interceptor to the stack
       *
       * @param {Function} fulfilled The function to handle `then` for a `Promise`
       * @param {Function} rejected The function to handle `reject` for a `Promise`
       *
       * @return {Number} An ID used to remove interceptor later
       */


      InterceptorManager.prototype.use = function use(fulfilled, rejected) {
        this.handlers.push({
          fulfilled: fulfilled,
          rejected: rejected
        });
        return this.handlers.length - 1;
      };
      /**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       */


      InterceptorManager.prototype.eject = function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      };
      /**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       */


      InterceptorManager.prototype.forEach = function forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      };

      module.exports = InterceptorManager;
      /***/
    },

    /***/
    "CgaS":
    /*!**********************************************!*\
      !*** ./node_modules/axios/lib/core/Axios.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function CgaS(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__(
      /*! ./../utils */
      "xTJ+");

      var buildURL = __webpack_require__(
      /*! ../helpers/buildURL */
      "MLWZ");

      var InterceptorManager = __webpack_require__(
      /*! ./InterceptorManager */
      "9rSQ");

      var dispatchRequest = __webpack_require__(
      /*! ./dispatchRequest */
      "UnBK");

      var mergeConfig = __webpack_require__(
      /*! ./mergeConfig */
      "SntB");
      /**
       * Create a new instance of Axios
       *
       * @param {Object} instanceConfig The default config for the instance
       */


      function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager(),
          response: new InterceptorManager()
        };
      }
      /**
       * Dispatch a request
       *
       * @param {Object} config The config specific for this request (merged with this.defaults)
       */


      Axios.prototype.request = function request(config) {
        /*eslint no-param-reassign:0*/
        // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof config === 'string') {
          config = arguments[1] || {};
          config.url = arguments[0];
        } else {
          config = config || {};
        }

        config = mergeConfig(this.defaults, config); // Set config.method

        if (config.method) {
          config.method = config.method.toLowerCase();
        } else if (this.defaults.method) {
          config.method = this.defaults.method.toLowerCase();
        } else {
          config.method = 'get';
        } // Hook up interceptors middleware


        var chain = [dispatchRequest, undefined];
        var promise = Promise.resolve(config);
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          chain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          chain.push(interceptor.fulfilled, interceptor.rejected);
        });

        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }

        return promise;
      };

      Axios.prototype.getUri = function getUri(config) {
        config = mergeConfig(this.defaults, config);
        return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
      }; // Provide aliases for supported request methods


      utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
        /*eslint func-names:0*/
        Axios.prototype[method] = function (url, config) {
          return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
          }));
        };
      });
      utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
        /*eslint func-names:0*/
        Axios.prototype[method] = function (url, data, config) {
          return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: data
          }));
        };
      });
      module.exports = Axios;
      /***/
    },

    /***/
    "DfZB":
    /*!**************************************************!*\
      !*** ./node_modules/axios/lib/helpers/spread.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function DfZB(module, exports, __webpack_require__) {
      "use strict";
      /**
       * Syntactic sugar for invoking a function and expanding an array for arguments.
       *
       * Common use case would be to use `Function.prototype.apply`.
       *
       *  ```js
       *  function f(x, y, z) {}
       *  var args = [1, 2, 3];
       *  f.apply(null, args);
       *  ```
       *
       * With `spread` this example can be re-written.
       *
       *  ```js
       *  spread(function(x, y, z) {})([1, 2, 3]);
       *  ```
       *
       * @param {Function} callback
       * @returns {Function}
       */

      module.exports = function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      };
      /***/

    },

    /***/
    "FvzE":
    /*!*********************************************!*\
      !*** ./src/app/pages/chart/chart.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function FvzE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  box-shadow: 0px -4px 20px 11px #fafafa !important;\n}\n\n.app-chart-container {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhcnQvY2hhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaURBQUE7QUFBSjs7QUFDQztFQUNHLFlBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJ0L2NoYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLXRvb2xiYXJ7XG4gICAgYm94LXNoYWRvdzogMHB4IC00cHggMjBweCAxMXB4ICNmYWZhZmEgIWltcG9ydGFudDtcbn0uYXBwLWNoYXJ0LWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
      /***/
    },

    /***/
    "GDyY":
    /*!*******************************************!*\
      !*** ./src/app/pages/chart/chart.page.ts ***!
      \*******************************************/

    /*! exports provided: ChartPage */

    /***/
    function GDyY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartPage", function () {
        return ChartPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chart_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chart.page.html */
      "5v4I");
      /* harmony import */


      var _chart_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chart.page.scss */
      "FvzE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_services_chart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/chart.service */
      "tC2j");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");

      var ChartPage = /*#__PURE__*/function () {
        function ChartPage(chartService, route, userService) {
          _classCallCheck(this, ChartPage);

          this.chartService = chartService;
          this.route = route;
          this.userService = userService;
          this.wsMessage = 'you may need to send specific message to subscribe data, eg: BTC';
          this.hold = true;
          this.granularityMap = {
            '1': 60,
            '5': 300,
            '30': 30 * 60,
            '60': 60 * 60,
            '120': 60 * 60 * 2,
            '240': 60 * 60 * 4,
            '360': 60 * 60 * 6,
            'D': 86400
          };
        }

        _createClass(ChartPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.params.subscribe(function (p) {
              _this.stockId = p.sId;
              _this.watchlistId = p.wId;
              console.log(p);
            });
            this.userService.authenticated.subscribe(function (u) {
              console.log(u);
              _this.uToken = u.token;
            });
            this.ws = this.chartService.fakeWebSocket();

            this.ws.onopen = function () {
              console.log('connect success');

              _this.drawTv();
            };
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.ws.close();
          }
        }, {
          key: "drawTv",
          value: function drawTv() {
            var that = this;
            this.tradingview = new window.TradingView.widget({
              // debug: true, // uncomment this line to see Library errors and warnings in the console
              fullscreen: true,
              timezone: 'Asia/Kolkata',
              symbol: that.symbol,
              interval: '1',
              container_id: 'tradingview',
              library_path: 'assets/vendors/charting_library/',
              locale: 'en',
              disabled_features: [// 'timeframes_toolbar',
              // 'go_to_date',
              // 'use_localstorage_for_settings',
              'volume_force_overlay', // 'show_interval_dialog_on_key_press',
              'symbol_search_hot_key', 'study_dialog_search_control', 'display_market_status',
              /*'header_compare',
              'header_symbol_search',
              'header_fullscreen_button',
              'header_settings',
              'header_chart_type',
              'header_resolutions',*/
              'control_bar', 'edit_buttons_in_legend', 'border_around_the_chart', // 'main_series_scale_menu',
              'star_some_intervals_by_default', 'datasource_copypaste', 'header_indicators', // 'context_menus',
              // 'compare_symbol',
              'header_undo_redo', 'border_around_the_chart', 'timezone_menu', 'remove_library_container_border'],
              allow_symbol_change: true,
              enabled_features: ['study_templates'],
              // charts_storage_url: 'http://saveload.tradingview.com',
              charts_storage_api_version: '1.1',
              client_id: 'tradingview.com',
              user_id: 'public_user_id',
              // timezone: 'America/New_York',
              volumePaneSize: 'tiny',
              datafeed: {
                onReady: function onReady(x) {
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1e3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
                    x({
                      supported_resolutions: ['1', '5', '30', '60', '120', '240', '360', 'D']
                    });
                  })).subscribe();
                },
                getBars: function getBars(symbol, granularity, startTime, endTime, onResult, onError, isFirst) {
                  var _this2 = this;

                  console.log('granularity', granularity); // console.log(startTime, endTime);
                  // console.log('getBars:', arguments[1]);
                  // console.log('symbol:', symbol);

                  var instance = axios__WEBPACK_IMPORTED_MODULE_6___default.a.create({
                    baseURL: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl
                  });
                  instance.defaults.headers.common['Authorization'] = 'Bearer ' + this.uToken;
                  instance.defaults.headers.post['Content-Type'] = 'application/json';
                  this.hold = true; // stockid/watchlistId

                  instance.get("/stocks/history/".concat(this.stockId, "/").concat(this.watchlistId, "/").concat(granularity)).then(function (res) {
                    var finalDataSet = res.data.data.historyData;
                    finalDataSet.map(function (val) {
                      val.time = val.date;
                      val.vol = val.volume;
                      return val;
                    });
                    console.log(finalDataSet);
                    onResult(finalDataSet, {
                      noData: false
                    });
                    _this2.hold = false;
                  }); // that.mockService.getHistoryList({
                  //   granularity: that.granularityMap[granularity],
                  //   startTime,
                  //   endTime
                  // }).subscribe((data: any) => {
                  //   // push the history data to callback
                  //   console.log(data);
                  //   onResult(data);
                  // });
                },
                resolveSymbol: function resolveSymbol(symbol, onResolve) {
                  console.log('resolveSymbol:', arguments);
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1e3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
                    onResolve({
                      name: that.symbol,
                      full_name: that.symbol,
                      base_name: that.symbol,
                      has_intraday: true
                    });
                  })).subscribe();
                },
                getServerTime: function getServerTime() {
                  console.log('serverTime:', arguments);
                },
                subscribeBars: function subscribeBars(symbol, granularity, onTick) {
                  var _this3 = this;

                  that.chartService.listen("".concat(this.stockId, "-").concat(this.watchlistId)).subscribe(function (res) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              if (res) {
                                res.map(function (val) {
                                  val.volume = val.vol;
                                  return val;
                                });
                                console.log(res[0]);

                                if (!this.hold) {
                                  // console.log(res[0]);
                                  onTick(res[0]);
                                }
                              }

                            case 1:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee, this);
                    }));
                  }); // that.ws.onmessage = (e) => {
                  //   try {
                  //     const data = e;
                  //     if (data) {
                  //       // realtime data
                  //       // data's timestamp === recent one ? Update the recent one : A new timestamp data
                  //       // in this example mock service always returns a new timestamp(current time)
                  //       console.log(data)
                  //       onTick(data);
                  //     }
                  //   } catch (e) {
                  //     console.error(e);
                  //   }
                  // };
                  // // subscribe the realtime data
                  // that.ws.send(`${that.wsMessage}_kline_${that.granularityMap[granularity]}`);
                },
                unsubscribeBars: function unsubscribeBars() {
                  console.log('refreshing'); // that.ws.send('stop receiving data or just close websocket');
                }
              }
            });
          }
        }]);

        return ChartPage;
      }();

      ChartPage.ctorParameters = function () {
        return [{
          type: src_app_services_chart_service__WEBPACK_IMPORTED_MODULE_7__["ChartService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]
        }];
      };

      ChartPage.propDecorators = {
        symbol: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ChartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chart',
        template: _raw_loader_chart_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chart_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChartPage);
      /***/
    },

    /***/
    "HSsa":
    /*!************************************************!*\
      !*** ./node_modules/axios/lib/helpers/bind.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function HSsa(module, exports, __webpack_require__) {
      "use strict";

      module.exports = function bind(fn, thisArg) {
        return function wrap() {
          var args = new Array(arguments.length);

          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }

          return fn.apply(thisArg, args);
        };
      };
      /***/

    },

    /***/
    "JEQr":
    /*!********************************************!*\
      !*** ./node_modules/axios/lib/defaults.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function JEQr(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__(
      /*! ./utils */
      "xTJ+");

      var normalizeHeaderName = __webpack_require__(
      /*! ./helpers/normalizeHeaderName */
      "yK9s");

      var DEFAULT_CONTENT_TYPE = {
        'Content-Type': 'application/x-www-form-urlencoded'
      };

      function setContentTypeIfUnset(headers, value) {
        if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
          headers['Content-Type'] = value;
        }
      }

      function getDefaultAdapter() {
        var adapter;

        if (typeof XMLHttpRequest !== 'undefined') {
          // For browsers use XHR adapter
          adapter = __webpack_require__(
          /*! ./adapters/xhr */
          "tQ2B");
        } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
          // For node use HTTP adapter
          adapter = __webpack_require__(
          /*! ./adapters/http */
          "tQ2B");
        }

        return adapter;
      }

      var defaults = {
        adapter: getDefaultAdapter(),
        transformRequest: [function transformRequest(data, headers) {
          normalizeHeaderName(headers, 'Accept');
          normalizeHeaderName(headers, 'Content-Type');

          if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
            return data;
          }

          if (utils.isArrayBufferView(data)) {
            return data.buffer;
          }

          if (utils.isURLSearchParams(data)) {
            setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
            return data.toString();
          }

          if (utils.isObject(data)) {
            setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
            return JSON.stringify(data);
          }

          return data;
        }],
        transformResponse: [function transformResponse(data) {
          /*eslint no-param-reassign:0*/
          if (typeof data === 'string') {
            try {
              data = JSON.parse(data);
            } catch (e) {
              /* Ignore */
            }
          }

          return data;
        }],

        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        }
      };
      defaults.headers = {
        common: {
          'Accept': 'application/json, text/plain, */*'
        }
      };
      utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });
      utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
        defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
      });
      module.exports = defaults;
      /***/
    },

    /***/
    "LYNF":
    /*!****************************************************!*\
      !*** ./node_modules/axios/lib/core/createError.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function LYNF(module, exports, __webpack_require__) {
      "use strict";

      var enhanceError = __webpack_require__(
      /*! ./enhanceError */
      "OH9c");
      /**
       * Create an Error with the specified message, config, error code, request and response.
       *
       * @param {string} message The error message.
       * @param {Object} config The config.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The created error.
       */


      module.exports = function createError(message, config, code, request, response) {
        var error = new Error(message);
        return enhanceError(error, config, code, request, response);
      };
      /***/

    },

    /***/
    "Lmem":
    /*!***************************************************!*\
      !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function Lmem(module, exports, __webpack_require__) {
      "use strict";

      module.exports = function isCancel(value) {
        return !!(value && value.__CANCEL__);
      };
      /***/

    },

    /***/
    "MLWZ":
    /*!****************************************************!*\
      !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function MLWZ(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__(
      /*! ./../utils */
      "xTJ+");

      function encode(val) {
        return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
      }
      /**
       * Build a URL by appending params to the end
       *
       * @param {string} url The base of the url (e.g., http://www.google.com)
       * @param {object} [params] The params to be appended
       * @returns {string} The formatted url
       */


      module.exports = function buildURL(url, params, paramsSerializer) {
        /*eslint no-param-reassign:0*/
        if (!params) {
          return url;
        }

        var serializedParams;

        if (paramsSerializer) {
          serializedParams = paramsSerializer(params);
        } else if (utils.isURLSearchParams(params)) {
          serializedParams = params.toString();
        } else {
          var parts = [];
          utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') {
              return;
            }

            if (utils.isArray(val)) {
              key = key + '[]';
            } else {
              val = [val];
            }

            utils.forEach(val, function parseValue(v) {
              if (utils.isDate(v)) {
                v = v.toISOString();
              } else if (utils.isObject(v)) {
                v = JSON.stringify(v);
              }

              parts.push(encode(key) + '=' + encode(v));
            });
          });
          serializedParams = parts.join('&');
        }

        if (serializedParams) {
          var hashmarkIndex = url.indexOf('#');

          if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
          }

          url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
        }

        return url;
      };
      /***/

    },

    /***/
    "OH9c":
    /*!*****************************************************!*\
      !*** ./node_modules/axios/lib/core/enhanceError.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function OH9c(module, exports, __webpack_require__) {
      "use strict";
      /**
       * Update an Error with the specified config, error code, and response.
       *
       * @param {Error} error The error to update.
       * @param {Object} config The config.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The error.
       */

      module.exports = function enhanceError(error, config, code, request, response) {
        error.config = config;

        if (code) {
          error.code = code;
        }

        error.request = request;
        error.response = response;
        error.isAxiosError = true;

        error.toJSON = function toJSON() {
          return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code
          };
        };

        return error;
      };
      /***/

    },

    /***/
    "OTTw":
    /*!***********************************************************!*\
      !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function OTTw(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__(
      /*! ./../utils */
      "xTJ+");

      module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
      // whether the request URL is of the same origin as current location.
      function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement('a');
        var originURL;
        /**
        * Parse a URL to discover it's components
        *
        * @param {String} url The URL to be parsed
        * @returns {Object}
        */

        function resolveURL(url) {
          var href = url;

          if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
          }

          urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
          };
        }

        originURL = resolveURL(window.location.href);
        /**
        * Determine if a URL shares the same origin as the current location
        *
        * @param {String} requestURL The URL to test
        * @returns {boolean} True if URL shares the same origin, otherwise false
        */

        return function isURLSameOrigin(requestURL) {
          var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
          return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
        };
      }() : // Non standard browser envs (web workers, react-native) lack needed support.
      function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      }();
      /***/
    },

    /***/
    "Rn+g":
    /*!***********************************************!*\
      !*** ./node_modules/axios/lib/core/settle.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function RnG(module, exports, __webpack_require__) {
      "use strict";

      var createError = __webpack_require__(
      /*! ./createError */
      "LYNF");
      /**
       * Resolve or reject a Promise based on response status.
       *
       * @param {Function} resolve A function that resolves the promise.
       * @param {Function} reject A function that rejects the promise.
       * @param {object} response The response.
       */


      module.exports = function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus;

        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
        }
      };
      /***/

    },

    /***/
    "SntB":
    /*!****************************************************!*\
      !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function SntB(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__(
      /*! ../utils */
      "xTJ+");
      /**
       * Config-specific merge-function which creates a new config-object
       * by merging two configuration objects together.
       *
       * @param {Object} config1
       * @param {Object} config2
       * @returns {Object} New object resulting from merging config2 to config1
       */


      module.exports = function mergeConfig(config1, config2) {
        // eslint-disable-next-line no-param-reassign
        config2 = config2 || {};
        var config = {};
        var valueFromConfig2Keys = ['url', 'method', 'data'];
        var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
        var defaultToConfig2Keys = ['baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress', 'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'];
        var directMergeKeys = ['validateStatus'];

        function getMergedValue(target, source) {
          if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge(target, source);
          } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
          } else if (utils.isArray(source)) {
            return source.slice();
          }

          return source;
        }

        function mergeDeepProperties(prop) {
          if (!utils.isUndefined(config2[prop])) {
            config[prop] = getMergedValue(config1[prop], config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            config[prop] = getMergedValue(undefined, config1[prop]);
          }
        }

        utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            config[prop] = getMergedValue(undefined, config2[prop]);
          }
        });
        utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
        utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            config[prop] = getMergedValue(undefined, config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            config[prop] = getMergedValue(undefined, config1[prop]);
          }
        });
        utils.forEach(directMergeKeys, function merge(prop) {
          if (prop in config2) {
            config[prop] = getMergedValue(config1[prop], config2[prop]);
          } else if (prop in config1) {
            config[prop] = getMergedValue(undefined, config1[prop]);
          }
        });
        var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
        var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
          return axiosKeys.indexOf(key) === -1;
        });
        utils.forEach(otherKeys, mergeDeepProperties);
        return config;
      };
      /***/

    },

    /***/
    "ThXp":
    /*!*********************************************!*\
      !*** ./src/app/pages/chart/chart.module.ts ***!
      \*********************************************/

    /*! exports provided: ChartPageModule */

    /***/
    function ThXp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartPageModule", function () {
        return ChartPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _chart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chart-routing.module */
      "w9TJ");
      /* harmony import */


      var _chart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chart.page */
      "GDyY");

      var ChartPageModule = function ChartPageModule() {
        _classCallCheck(this, ChartPageModule);
      };

      ChartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chart_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartPageRoutingModule"]],
        declarations: [_chart_page__WEBPACK_IMPORTED_MODULE_6__["ChartPage"]]
      })], ChartPageModule);
      /***/
    },

    /***/
    "UnBK":
    /*!********************************************************!*\
      !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function UnBK(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__(
      /*! ./../utils */
      "xTJ+");

      var transformData = __webpack_require__(
      /*! ./transformData */
      "xAGQ");

      var isCancel = __webpack_require__(
      /*! ../cancel/isCancel */
      "Lmem");

      var defaults = __webpack_require__(
      /*! ../defaults */
      "JEQr");
      /**
       * Throws a `Cancel` if cancellation has been requested.
       */


      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
      }
      /**
       * Dispatch a request to the server using the configured adapter.
       *
       * @param {object} config The config that is to be used for the request
       * @returns {Promise} The Promise to be fulfilled
       */


      module.exports = function dispatchRequest(config) {
        throwIfCancellationRequested(config); // Ensure headers exist

        config.headers = config.headers || {}; // Transform request data

        config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

        config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
        utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
          delete config.headers[method];
        });
        var adapter = config.adapter || defaults.adapter;
        return adapter(config).then(function onAdapterResolution(response) {
          throwIfCancellationRequested(config); // Transform response data

          response.data = transformData(response.data, response.headers, config.transformResponse);
          return response;
        }, function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config); // Transform response data

            if (reason && reason.response) {
              reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
            }
          }

          return Promise.reject(reason);
        });
      };
      /***/

    },

    /***/
    "XwJu":
    /*!********************************************************!*\
      !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function XwJu(module, exports, __webpack_require__) {
      "use strict";
      /**
       * Determines whether the payload is an error thrown by Axios
       *
       * @param {*} payload The value to test
       * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
       */

      module.exports = function isAxiosError(payload) {
        return typeof payload === 'object' && payload.isAxiosError === true;
      };
      /***/

    },

    /***/
    "endd":
    /*!*************************************************!*\
      !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function endd(module, exports, __webpack_require__) {
      "use strict";
      /**
       * A `Cancel` is an object that is thrown when an operation is canceled.
       *
       * @class
       * @param {string=} message The message.
       */

      function Cancel(message) {
        this.message = message;
      }

      Cancel.prototype.toString = function toString() {
        return 'Cancel' + (this.message ? ': ' + this.message : '');
      };

      Cancel.prototype.__CANCEL__ = true;
      module.exports = Cancel;
      /***/
    },

    /***/
    "eqyj":
    /*!***************************************************!*\
      !*** ./node_modules/axios/lib/helpers/cookies.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function eqyj(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__(
      /*! ./../utils */
      "xTJ+");

      module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
      function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));

            if (utils.isNumber(expires)) {
              cookie.push('expires=' + new Date(expires).toGMTString());
            }

            if (utils.isString(path)) {
              cookie.push('path=' + path);
            }

            if (utils.isString(domain)) {
              cookie.push('domain=' + domain);
            }

            if (secure === true) {
              cookie.push('secure');
            }

            document.cookie = cookie.join('; ');
          },
          read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
          }
        };
      }() : // Non standard browser env (web workers, react-native) lack needed support.
      function nonStandardBrowserEnv() {
        return {
          write: function write() {},
          read: function read() {
            return null;
          },
          remove: function remove() {}
        };
      }();
      /***/
    },

    /***/
    "g7np":
    /*!******************************************************!*\
      !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function g7np(module, exports, __webpack_require__) {
      "use strict";

      var isAbsoluteURL = __webpack_require__(
      /*! ../helpers/isAbsoluteURL */
      "2SVd");

      var combineURLs = __webpack_require__(
      /*! ../helpers/combineURLs */
      "5oMp");
      /**
       * Creates a new URL by combining the baseURL with the requestedURL,
       * only when the requestedURL is not already an absolute URL.
       * If the requestURL is absolute, this function returns the requestedURL untouched.
       *
       * @param {string} baseURL The base URL
       * @param {string} requestedURL Absolute or relative URL to combine
       * @returns {string} The combined full path
       */


      module.exports = function buildFullPath(baseURL, requestedURL) {
        if (baseURL && !isAbsoluteURL(requestedURL)) {
          return combineURLs(baseURL, requestedURL);
        }

        return requestedURL;
      };
      /***/

    },

    /***/
    "jfS+":
    /*!******************************************************!*\
      !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function jfS(module, exports, __webpack_require__) {
      "use strict";

      var Cancel = __webpack_require__(
      /*! ./Cancel */
      "endd");
      /**
       * A `CancelToken` is an object that can be used to request cancellation of an operation.
       *
       * @class
       * @param {Function} executor The executor function.
       */


      function CancelToken(executor) {
        if (typeof executor !== 'function') {
          throw new TypeError('executor must be a function.');
        }

        var resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });
        var token = this;
        executor(function cancel(message) {
          if (token.reason) {
            // Cancellation has already been requested
            return;
          }

          token.reason = new Cancel(message);
          resolvePromise(token.reason);
        });
      }
      /**
       * Throws a `Cancel` if cancellation has been requested.
       */


      CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      };
      /**
       * Returns an object that contains a new `CancelToken` and a function that, when called,
       * cancels the `CancelToken`.
       */


      CancelToken.source = function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token: token,
          cancel: cancel
        };
      };

      module.exports = CancelToken;
      /***/
    },

    /***/
    "tC2j":
    /*!*******************************************!*\
      !*** ./src/app/services/chart.service.ts ***!
      \*******************************************/

    /*! exports provided: ChartService */

    /***/
    function tC2j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartService", function () {
        return ChartService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_chart_mock_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/chart-mock-data */
      "6fw9");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! socket.io-client */
      "gFX4");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var ChartService_1;

      var ChartService = ChartService_1 = /*#__PURE__*/function () {
        function ChartService() {
          _classCallCheck(this, ChartService);

          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].socketUrl);
        }

        _createClass(ChartService, [{
          key: "getHistoryList",
          value: function getHistoryList(param) {
            var list = [];
            var timePoint = +new Date(param.startTime * 1e3).setSeconds(0, 0);
            var now = +new Date();

            while (timePoint < now) {
              this.lastBarTimestamp = timePoint;
              list.push(ChartService_1.dataGenerator(timePoint));
              timePoint += param.granularity * 1e3;
            }

            console.log(list[list.length - 1]);
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (ob) {
              ob.next(list);
              ob.complete();
            });
          }
        }, {
          key: "listen",
          value: function listen(eventName) {
            var _this4 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
              _this4.socket.on(eventName, function (data) {
                subscriber.next(data);
              });
            });
          }
        }, {
          key: "fakeWebSocket",
          value: function fakeWebSocket() {
            var _this5 = this;

            var granularity;
            var subscription;
            var ws = {
              send: function send(message) {
                var matched = message.match(/.+_kline_(\d+)/); // if matched, then send data base on granularity, else unsubscribe.

                if (matched) {
                  granularity = +matched[1] * 1e3;
                  sendData();
                } else {
                  subscription.unsubscribe();
                }
              },
              close: function close() {}
            };

            var sendData = function sendData() {
              var duration = 1e3;
              subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(duration).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
                var currentTimestamp = +new Date();

                if (currentTimestamp - _this5.lastBarTimestamp >= granularity) {
                  _this5.lastBarTimestamp += granularity;
                }

                return ChartService_1.dataGenerator(_this5.lastBarTimestamp);
              })).subscribe(function (x) {
                ws.onmessage && ws.onmessage(x);
              });
            }; // simulate open websocket after one second


            setTimeout(function () {
              ws.onopen();
            }, 1e3);
            return ws;
          }
        }], [{
          key: "dataGenerator",
          value: function dataGenerator() {
            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +new Date();
            var obj = {};
            Object.assign(obj, _shared_chart_mock_data__WEBPACK_IMPORTED_MODULE_4__["BTC_PRICE_LIST"][this.dataIndex], {
              time: time
            });
            ++this.dataIndex >= this.dataLength && (this.dataIndex = 0);
            return obj;
          }
        }]);

        return ChartService;
      }();

      ChartService.dataTemplate = {
        'time': 1545572340000,
        'open': 3917,
        'high': 3917,
        'low': 3912.03,
        'close': 3912.62,
        'volume': 3896
      };
      ChartService.dataIndex = 0;
      ChartService.dataLength = _shared_chart_mock_data__WEBPACK_IMPORTED_MODULE_4__["BTC_PRICE_LIST"].length;

      ChartService.ctorParameters = function () {
        return [];
      };

      ChartService = ChartService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ChartService);
      /***/
    },

    /***/
    "tQ2B":
    /*!************************************************!*\
      !*** ./node_modules/axios/lib/adapters/xhr.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function tQ2B(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__(
      /*! ./../utils */
      "xTJ+");

      var settle = __webpack_require__(
      /*! ./../core/settle */
      "Rn+g");

      var cookies = __webpack_require__(
      /*! ./../helpers/cookies */
      "eqyj");

      var buildURL = __webpack_require__(
      /*! ./../helpers/buildURL */
      "MLWZ");

      var buildFullPath = __webpack_require__(
      /*! ../core/buildFullPath */
      "g7np");

      var parseHeaders = __webpack_require__(
      /*! ./../helpers/parseHeaders */
      "w0Vi");

      var isURLSameOrigin = __webpack_require__(
      /*! ./../helpers/isURLSameOrigin */
      "OTTw");

      var createError = __webpack_require__(
      /*! ../core/createError */
      "LYNF");

      module.exports = function xhrAdapter(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          var requestData = config.data;
          var requestHeaders = config.headers;

          if (utils.isFormData(requestData)) {
            delete requestHeaders['Content-Type']; // Let the browser set it
          }

          var request = new XMLHttpRequest(); // HTTP basic authentication

          if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
            requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
          }

          var fullPath = buildFullPath(config.baseURL, config.url);
          request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

          request.timeout = config.timeout; // Listen for ready state

          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            } // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request


            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
              return;
            } // Prepare the response


            var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
            var response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config: config,
              request: request
            };
            settle(resolve, reject, response); // Clean up request

            request = null;
          }; // Handle browser request cancellation (as opposed to a manual cancellation)


          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }

            reject(createError('Request aborted', config, 'ECONNABORTED', request)); // Clean up request

            request = null;
          }; // Handle low level network errors


          request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError('Network Error', config, null, request)); // Clean up request

            request = null;
          }; // Handle timeout


          request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';

            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }

            reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request)); // Clean up request

            request = null;
          }; // Add xsrf header
          // This is only done if running in a standard browser environment.
          // Specifically not if we're in a web worker, or react-native.


          if (utils.isStandardBrowserEnv()) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

            if (xsrfValue) {
              requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
          } // Add headers to the request


          if ('setRequestHeader' in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
              if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                // Remove Content-Type if data is undefined
                delete requestHeaders[key];
              } else {
                // Otherwise add header to the request
                request.setRequestHeader(key, val);
              }
            });
          } // Add withCredentials to request if needed


          if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
          } // Add responseType to request if needed


          if (config.responseType) {
            try {
              request.responseType = config.responseType;
            } catch (e) {
              // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
              // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
              if (config.responseType !== 'json') {
                throw e;
              }
            }
          } // Handle progress if needed


          if (typeof config.onDownloadProgress === 'function') {
            request.addEventListener('progress', config.onDownloadProgress);
          } // Not all browsers support upload events


          if (typeof config.onUploadProgress === 'function' && request.upload) {
            request.upload.addEventListener('progress', config.onUploadProgress);
          }

          if (config.cancelToken) {
            // Handle cancellation
            config.cancelToken.promise.then(function onCanceled(cancel) {
              if (!request) {
                return;
              }

              request.abort();
              reject(cancel); // Clean up request

              request = null;
            });
          }

          if (!requestData) {
            requestData = null;
          } // Send the request


          request.send(requestData);
        });
      };
      /***/

    },

    /***/
    "vDqi":
    /*!*************************************!*\
      !*** ./node_modules/axios/index.js ***!
      \*************************************/

    /*! no static exports found */

    /***/
    function vDqi(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! ./lib/axios */
      "zuR4");
      /***/
    },

    /***/
    "w0Vi":
    /*!********************************************************!*\
      !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function w0Vi(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__(
      /*! ./../utils */
      "xTJ+"); // Headers whose duplicates are ignored by node
      // c.f. https://nodejs.org/api/http.html#http_message_headers


      var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
      /**
       * Parse headers into an object
       *
       * ```
       * Date: Wed, 27 Aug 2014 08:58:49 GMT
       * Content-Type: application/json
       * Connection: keep-alive
       * Transfer-Encoding: chunked
       * ```
       *
       * @param {String} headers Headers needing to be parsed
       * @returns {Object} Headers parsed into an object
       */

      module.exports = function parseHeaders(headers) {
        var parsed = {};
        var key;
        var val;
        var i;

        if (!headers) {
          return parsed;
        }

        utils.forEach(headers.split('\n'), function parser(line) {
          i = line.indexOf(':');
          key = utils.trim(line.substr(0, i)).toLowerCase();
          val = utils.trim(line.substr(i + 1));

          if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
              return;
            }

            if (key === 'set-cookie') {
              parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            } else {
              parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
          }
        });
        return parsed;
      };
      /***/

    },

    /***/
    "w9TJ":
    /*!*****************************************************!*\
      !*** ./src/app/pages/chart/chart-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ChartPageRoutingModule */

    /***/
    function w9TJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartPageRoutingModule", function () {
        return ChartPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _chart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chart.page */
      "GDyY");

      var routes = [{
        path: '',
        component: _chart_page__WEBPACK_IMPORTED_MODULE_3__["ChartPage"]
      }];

      var ChartPageRoutingModule = function ChartPageRoutingModule() {
        _classCallCheck(this, ChartPageRoutingModule);
      };

      ChartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChartPageRoutingModule);
      /***/
    },

    /***/
    "xAGQ":
    /*!******************************************************!*\
      !*** ./node_modules/axios/lib/core/transformData.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function xAGQ(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__(
      /*! ./../utils */
      "xTJ+");
      /**
       * Transform the data for a request or a response
       *
       * @param {Object|String} data The data to be transformed
       * @param {Array} headers The headers for the request or response
       * @param {Array|Function} fns A single function or Array of functions
       * @returns {*} The resulting transformed data
       */


      module.exports = function transformData(data, headers, fns) {
        /*eslint no-param-reassign:0*/
        utils.forEach(fns, function transform(fn) {
          data = fn(data, headers);
        });
        return data;
      };
      /***/

    },

    /***/
    "xTJ+":
    /*!*****************************************!*\
      !*** ./node_modules/axios/lib/utils.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function xTJ(module, exports, __webpack_require__) {
      "use strict";

      var bind = __webpack_require__(
      /*! ./helpers/bind */
      "HSsa");
      /*global toString:true*/
      // utils is a library of generic helper functions non-specific to axios


      var toString = Object.prototype.toString;
      /**
       * Determine if a value is an Array
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Array, otherwise false
       */

      function isArray(val) {
        return toString.call(val) === '[object Array]';
      }
      /**
       * Determine if a value is undefined
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if the value is undefined, otherwise false
       */


      function isUndefined(val) {
        return typeof val === 'undefined';
      }
      /**
       * Determine if a value is a Buffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Buffer, otherwise false
       */


      function isBuffer(val) {
        return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
      }
      /**
       * Determine if a value is an ArrayBuffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an ArrayBuffer, otherwise false
       */


      function isArrayBuffer(val) {
        return toString.call(val) === '[object ArrayBuffer]';
      }
      /**
       * Determine if a value is a FormData
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an FormData, otherwise false
       */


      function isFormData(val) {
        return typeof FormData !== 'undefined' && val instanceof FormData;
      }
      /**
       * Determine if a value is a view on an ArrayBuffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
       */


      function isArrayBufferView(val) {
        var result;

        if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && val.buffer instanceof ArrayBuffer;
        }

        return result;
      }
      /**
       * Determine if a value is a String
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a String, otherwise false
       */


      function isString(val) {
        return typeof val === 'string';
      }
      /**
       * Determine if a value is a Number
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Number, otherwise false
       */


      function isNumber(val) {
        return typeof val === 'number';
      }
      /**
       * Determine if a value is an Object
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Object, otherwise false
       */


      function isObject(val) {
        return val !== null && typeof val === 'object';
      }
      /**
       * Determine if a value is a plain Object
       *
       * @param {Object} val The value to test
       * @return {boolean} True if value is a plain Object, otherwise false
       */


      function isPlainObject(val) {
        if (toString.call(val) !== '[object Object]') {
          return false;
        }

        var prototype = Object.getPrototypeOf(val);
        return prototype === null || prototype === Object.prototype;
      }
      /**
       * Determine if a value is a Date
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Date, otherwise false
       */


      function isDate(val) {
        return toString.call(val) === '[object Date]';
      }
      /**
       * Determine if a value is a File
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a File, otherwise false
       */


      function isFile(val) {
        return toString.call(val) === '[object File]';
      }
      /**
       * Determine if a value is a Blob
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Blob, otherwise false
       */


      function isBlob(val) {
        return toString.call(val) === '[object Blob]';
      }
      /**
       * Determine if a value is a Function
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Function, otherwise false
       */


      function isFunction(val) {
        return toString.call(val) === '[object Function]';
      }
      /**
       * Determine if a value is a Stream
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Stream, otherwise false
       */


      function isStream(val) {
        return isObject(val) && isFunction(val.pipe);
      }
      /**
       * Determine if a value is a URLSearchParams object
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a URLSearchParams object, otherwise false
       */


      function isURLSearchParams(val) {
        return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
      }
      /**
       * Trim excess whitespace off the beginning and end of a string
       *
       * @param {String} str The String to trim
       * @returns {String} The String freed of excess whitespace
       */


      function trim(str) {
        return str.replace(/^\s*/, '').replace(/\s*$/, '');
      }
      /**
       * Determine if we're running in a standard browser environment
       *
       * This allows axios to run in a web worker, and react-native.
       * Both environments support XMLHttpRequest, but not fully standard globals.
       *
       * web workers:
       *  typeof window -> undefined
       *  typeof document -> undefined
       *
       * react-native:
       *  navigator.product -> 'ReactNative'
       * nativescript
       *  navigator.product -> 'NativeScript' or 'NS'
       */


      function isStandardBrowserEnv() {
        if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
          return false;
        }

        return typeof window !== 'undefined' && typeof document !== 'undefined';
      }
      /**
       * Iterate over an Array or an Object invoking a function for each item.
       *
       * If `obj` is an Array callback will be called passing
       * the value, index, and complete array for each item.
       *
       * If 'obj' is an Object callback will be called passing
       * the value, key, and complete object for each property.
       *
       * @param {Object|Array} obj The object to iterate
       * @param {Function} fn The callback to invoke for each item
       */


      function forEach(obj, fn) {
        // Don't bother if no value provided
        if (obj === null || typeof obj === 'undefined') {
          return;
        } // Force an array if not already something iterable


        if (typeof obj !== 'object') {
          /*eslint no-param-reassign:0*/
          obj = [obj];
        }

        if (isArray(obj)) {
          // Iterate over array values
          for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          // Iterate over object keys
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              fn.call(null, obj[key], key, obj);
            }
          }
        }
      }
      /**
       * Accepts varargs expecting each argument to be an object, then
       * immutably merges the properties of each object and returns result.
       *
       * When multiple objects contain the same key the later object in
       * the arguments list will take precedence.
       *
       * Example:
       *
       * ```js
       * var result = merge({foo: 123}, {foo: 456});
       * console.log(result.foo); // outputs 456
       * ```
       *
       * @param {Object} obj1 Object to merge
       * @returns {Object} Result of all merge properties
       */


      function merge()
      /* obj1, obj2, obj3, ... */
      {
        var result = {};

        function assignValue(val, key) {
          if (isPlainObject(result[key]) && isPlainObject(val)) {
            result[key] = merge(result[key], val);
          } else if (isPlainObject(val)) {
            result[key] = merge({}, val);
          } else if (isArray(val)) {
            result[key] = val.slice();
          } else {
            result[key] = val;
          }
        }

        for (var i = 0, l = arguments.length; i < l; i++) {
          forEach(arguments[i], assignValue);
        }

        return result;
      }
      /**
       * Extends object a by mutably adding to it the properties of object b.
       *
       * @param {Object} a The object to be extended
       * @param {Object} b The object to copy properties from
       * @param {Object} thisArg The object to bind function to
       * @return {Object} The resulting value of object a
       */


      function extend(a, b, thisArg) {
        forEach(b, function assignValue(val, key) {
          if (thisArg && typeof val === 'function') {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        });
        return a;
      }
      /**
       * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
       *
       * @param {string} content with BOM
       * @return {string} content value without BOM
       */


      function stripBOM(content) {
        if (content.charCodeAt(0) === 0xFEFF) {
          content = content.slice(1);
        }

        return content;
      }

      module.exports = {
        isArray: isArray,
        isArrayBuffer: isArrayBuffer,
        isBuffer: isBuffer,
        isFormData: isFormData,
        isArrayBufferView: isArrayBufferView,
        isString: isString,
        isNumber: isNumber,
        isObject: isObject,
        isPlainObject: isPlainObject,
        isUndefined: isUndefined,
        isDate: isDate,
        isFile: isFile,
        isBlob: isBlob,
        isFunction: isFunction,
        isStream: isStream,
        isURLSearchParams: isURLSearchParams,
        isStandardBrowserEnv: isStandardBrowserEnv,
        forEach: forEach,
        merge: merge,
        extend: extend,
        trim: trim,
        stripBOM: stripBOM
      };
      /***/
    },

    /***/
    "yK9s":
    /*!***************************************************************!*\
      !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function yK9s(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__(
      /*! ../utils */
      "xTJ+");

      module.exports = function normalizeHeaderName(headers, normalizedName) {
        utils.forEach(headers, function processHeader(value, name) {
          if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
          }
        });
      };
      /***/

    },

    /***/
    "zuR4":
    /*!*****************************************!*\
      !*** ./node_modules/axios/lib/axios.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function zuR4(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__(
      /*! ./utils */
      "xTJ+");

      var bind = __webpack_require__(
      /*! ./helpers/bind */
      "HSsa");

      var Axios = __webpack_require__(
      /*! ./core/Axios */
      "CgaS");

      var mergeConfig = __webpack_require__(
      /*! ./core/mergeConfig */
      "SntB");

      var defaults = __webpack_require__(
      /*! ./defaults */
      "JEQr");
      /**
       * Create an instance of Axios
       *
       * @param {Object} defaultConfig The default config for the instance
       * @return {Axios} A new instance of Axios
       */


      function createInstance(defaultConfig) {
        var context = new Axios(defaultConfig);
        var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

        utils.extend(instance, Axios.prototype, context); // Copy context to instance

        utils.extend(instance, context);
        return instance;
      } // Create the default instance to be exported


      var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

      axios.Axios = Axios; // Factory for creating new instances

      axios.create = function create(instanceConfig) {
        return createInstance(mergeConfig(axios.defaults, instanceConfig));
      }; // Expose Cancel & CancelToken


      axios.Cancel = __webpack_require__(
      /*! ./cancel/Cancel */
      "endd");
      axios.CancelToken = __webpack_require__(
      /*! ./cancel/CancelToken */
      "jfS+");
      axios.isCancel = __webpack_require__(
      /*! ./cancel/isCancel */
      "Lmem"); // Expose all/spread

      axios.all = function all(promises) {
        return Promise.all(promises);
      };

      axios.spread = __webpack_require__(
      /*! ./helpers/spread */
      "DfZB"); // Expose isAxiosError

      axios.isAxiosError = __webpack_require__(
      /*! ./helpers/isAxiosError */
      "XwJu");
      module.exports = axios; // Allow use of default import syntax in TypeScript

      module.exports["default"] = axios;
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-chart-chart-module-es5.js.map