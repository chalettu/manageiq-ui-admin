/* eslint camelcase: "off" */
(function() {
  'use strict';

  angular.module('app.config')
    .config(navigation)
    .run(init);

  /** @ngInject */
  function navigation() {
    var dashboard = createItem(
      N_('Dashboard'),
      'dashboard',
      'fa fa-dashboard'
    );
    var services = createItem(
      N_('My Services'),
      'services',
      'fa fa-file-o',
      N_('The total number of services that you have ordered, both active and retired')
    );
    var requests = createItem(
      N_('My Requests'),
      'requests',
      'fa fa-file-text-o'
    );
    var marketplace = createItem(
      N_('Service Catalog'),
      'marketplace',
      'fa fa-copy',
      N_('The total number of available catalog items')
    );
    var designer = createItem(
      N_('Designer'),
      'designer',
      'pficon pficon-blueprint'
    );
    var administration = createItem(
      N_('Administration'),
      'administration',
      'fa fa-cog'
    );

    requests.secondary = {
      requests: createItem(
        N_('Requests'),
        'requests.requests',
        undefined,
        N_('The total number of requests that you have submitted')
      ),
      orders: createItem(
        N_('Order History'),
        'requests.orders',
        undefined,
        N_('The total number of orders that you have submitted')
      ),
    };

    designer.secondary = {
      blueprints: createItem(
        N_('Blueprints'),
        'designer.blueprints',
        undefined,
        N_('The total number of available blueprints')
      ),
      dialogs: createItem(
        N_('Dialogs'),
        'designer.dialogs',
        undefined,
        N_('The total number of available dialogs')
      ),
    };

    administration.secondary = {
      profiles: createItem(
        N_('Profiles'),
        'administration.profiles',
        undefined,
        N_('The total number of available arbitration profiles')
      ),
      rules: createItem(
        N_('Rules'),
        'administration.rules',
        undefined,
        N_('The total number of available arbitration rules')
      ),
    };


    function createItem(title, state, iconClass, badgeTooltip) {
      var item = {
        title: title,
        state: state,
        iconClass: iconClass,
      };

      if (angular.isString(badgeTooltip)) {
        item.badges =  [
          {
            count: 0,
            tooltip: badgeTooltip,
          },
        ];
      }

      return item;
    }
  }

  /** @ngInject */
  function init(lodash) {

  }
})();
