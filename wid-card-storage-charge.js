'use strict';

(function () {

  Polymer({

    is: 'wid-card-storage-charge',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior],

    properties: {

      /**
       * name
       * @type {String}
       */
      name: {
        type: String
      },

      /**
       * icon
       * @type {String}
       */
      icon: {
        type: String
      },

      /**
       * month_names
       * @type {Object}
       */
      monthNames: {
        type: Object
      },

      /**
       * month01
       * @type {Object}
       */
      month01: {
        type: Object
      },

      /**
       * month02
       * @type {Object}
       */
      month02: {
        type: Object
      },

      /**
       * month03
       * @type {Object}
       */
      month03: {
        type: Object
      }

    },

    _getCurrencyValue: function _getCurrencyValue(value) {
      return '$' + value;
    }

  });
})();