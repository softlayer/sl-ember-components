/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/components/demos/row-expander-content', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({});

});
define('dummy/components/property-text', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        classNameBindings: ["required:list-group-item-warning"],

        classNames: ["list-group-item"],

        required: false
    });

});
define('dummy/components/sl-alert', ['exports', 'sl-ember-components/components/sl-alert'], function (exports, SlAlert) {

	'use strict';

	exports['default'] = SlAlert['default'];

});
define('dummy/components/sl-button', ['exports', 'sl-ember-components/components/sl-button'], function (exports, SlButton) {

	'use strict';

	exports['default'] = SlButton['default'];

});
define('dummy/components/sl-calendar-day', ['exports', 'sl-ember-components/components/sl-calendar-day'], function (exports, SlCalendarDay) {

	'use strict';

	exports['default'] = SlCalendarDay['default'];

});
define('dummy/components/sl-calendar-month', ['exports', 'sl-ember-components/components/sl-calendar-month'], function (exports, SlCalendarMonth) {

	'use strict';

	exports['default'] = SlCalendarMonth['default'];

});
define('dummy/components/sl-calendar-year', ['exports', 'sl-ember-components/components/sl-calendar-year'], function (exports, SlCalendarYear) {

	'use strict';

	exports['default'] = SlCalendarYear['default'];

});
define('dummy/components/sl-calendar', ['exports', 'sl-ember-components/components/sl-calendar'], function (exports, SlCalendar) {

	'use strict';

	exports['default'] = SlCalendar['default'];

});
define('dummy/components/sl-chart', ['exports', 'sl-ember-components/components/sl-chart'], function (exports, SlChart) {

	'use strict';

	exports['default'] = SlChart['default'];

});
define('dummy/components/sl-checkbox', ['exports', 'sl-ember-components/components/sl-checkbox'], function (exports, SlCheckbox) {

	'use strict';

	exports['default'] = SlCheckbox['default'];

});
define('dummy/components/sl-date-picker', ['exports', 'sl-ember-components/components/sl-date-picker'], function (exports, SlDatePicker) {

	'use strict';

	exports['default'] = SlDatePicker['default'];

});
define('dummy/components/sl-date-range-picker', ['exports', 'sl-ember-components/components/sl-date-range-picker'], function (exports, SlDateRangePicker) {

	'use strict';

	exports['default'] = SlDateRangePicker['default'];

});
define('dummy/components/sl-date-time', ['exports', 'sl-ember-components/components/sl-date-time'], function (exports, SlDateTime) {

	'use strict';

	exports['default'] = SlDateTime['default'];

});
define('dummy/components/sl-dialog', ['exports', 'sl-ember-components/components/sl-dialog'], function (exports, SlDialog) {

	'use strict';

	exports['default'] = SlDialog['default'];

});
define('dummy/components/sl-drop-button', ['exports', 'sl-ember-components/components/sl-drop-button'], function (exports, SlDropButton) {

	'use strict';

	exports['default'] = SlDropButton['default'];

});
define('dummy/components/sl-drop-option', ['exports', 'sl-ember-components/components/sl-drop-option'], function (exports, SlDropOption) {

	'use strict';

	exports['default'] = SlDropOption['default'];

});
define('dummy/components/sl-grid-header-settings', ['exports', 'sl-ember-components/components/sl-grid-header-settings'], function (exports, SlGridHeaderSettings) {

	'use strict';

	exports['default'] = SlGridHeaderSettings['default'];

});
define('dummy/components/sl-grid-table-cell-actions', ['exports', 'sl-ember-components/components/sl-grid-table-cell-actions'], function (exports, SlGridTableCellActions) {

	'use strict';

	exports['default'] = SlGridTableCellActions['default'];

});
define('dummy/components/sl-grid-table-cell-link', ['exports', 'sl-ember-components/components/sl-grid-table-cell-link'], function (exports, SlGridTableCellLink) {

	'use strict';

	exports['default'] = SlGridTableCellLink['default'];

});
define('dummy/components/sl-grid-table-cell-row-expander', ['exports', 'sl-ember-components/components/sl-grid-table-cell-row-expander'], function (exports, SlGridTableCellRowExpander) {

	'use strict';

	exports['default'] = SlGridTableCellRowExpander['default'];

});
define('dummy/components/sl-grid-table-cell', ['exports', 'sl-ember-components/components/sl-grid-table-cell'], function (exports, SlGridTableCell) {

	'use strict';

	exports['default'] = SlGridTableCell['default'];

});
define('dummy/components/sl-grid-table-header', ['exports', 'sl-ember-components/components/sl-grid-table-header'], function (exports, SlGridTableHeader) {

	'use strict';

	exports['default'] = SlGridTableHeader['default'];

});
define('dummy/components/sl-grid-table-row-expander', ['exports', 'sl-ember-components/components/sl-grid-table-row-expander'], function (exports, SlGridTableRowExpander) {

	'use strict';

	exports['default'] = SlGridTableRowExpander['default'];

});
define('dummy/components/sl-input', ['exports', 'sl-ember-components/components/sl-input'], function (exports, SlInput) {

	'use strict';

	exports['default'] = SlInput['default'];

});
define('dummy/components/sl-loading-icon', ['exports', 'sl-ember-components/components/sl-loading-icon'], function (exports, SlLoadingIcon) {

	'use strict';

	exports['default'] = SlLoadingIcon['default'];

});
define('dummy/components/sl-menu', ['exports', 'sl-ember-components/components/sl-menu'], function (exports, SlMenu) {

	'use strict';

	exports['default'] = SlMenu['default'];

});
define('dummy/components/sl-pagination-controls', ['exports', 'sl-ember-components/components/sl-pagination-controls'], function (exports, SlPaginationControls) {

	'use strict';

	exports['default'] = SlPaginationControls['default'];

});
define('dummy/components/sl-pagination-info', ['exports', 'sl-ember-components/components/sl-pagination-info'], function (exports, SlPaginationInfo) {

	'use strict';

	exports['default'] = SlPaginationInfo['default'];

});
define('dummy/components/sl-pagination-per-page-select', ['exports', 'sl-ember-components/components/sl-pagination-per-page-select'], function (exports, SlPaginationPerPageSelect) {

	'use strict';

	exports['default'] = SlPaginationPerPageSelect['default'];

});
define('dummy/components/sl-panel', ['exports', 'sl-ember-components/components/sl-panel'], function (exports, SlPanel) {

	'use strict';

	exports['default'] = SlPanel['default'];

});
define('dummy/components/sl-progress-bar', ['exports', 'sl-ember-components/components/sl-progress-bar'], function (exports, SlProgressBar) {

	'use strict';

	exports['default'] = SlProgressBar['default'];

});
define('dummy/components/sl-radio-group', ['exports', 'sl-ember-components/components/sl-radio-group'], function (exports, SlRadioGroup) {

	'use strict';

	exports['default'] = SlRadioGroup['default'];

});
define('dummy/components/sl-radio', ['exports', 'sl-ember-components/components/sl-radio'], function (exports, SlRadio) {

	'use strict';

	exports['default'] = SlRadio['default'];

});
define('dummy/components/sl-select', ['exports', 'sl-ember-components/components/sl-select'], function (exports, SlSelect) {

	'use strict';

	exports['default'] = SlSelect['default'];

});
define('dummy/components/sl-span', ['exports', 'sl-ember-components/components/sl-span'], function (exports, SlSpan) {

	'use strict';

	exports['default'] = SlSpan['default'];

});
define('dummy/components/sl-tab-pane', ['exports', 'sl-ember-components/components/sl-tab-pane'], function (exports, SlTabPane) {

	'use strict';

	exports['default'] = SlTabPane['default'];

});
define('dummy/components/sl-tab-panel', ['exports', 'sl-ember-components/components/sl-tab-panel'], function (exports, SlTabPanel) {

	'use strict';

	exports['default'] = SlTabPanel['default'];

});
define('dummy/components/sl-textarea', ['exports', 'sl-ember-components/components/sl-textarea'], function (exports, SlTextarea) {

	'use strict';

	exports['default'] = SlTextarea['default'];

});
define('dummy/components/sl-tooltip', ['exports', 'sl-ember-components/components/sl-tooltip'], function (exports, SlTooltip) {

	'use strict';

	exports['default'] = SlTooltip['default'];

});
define('dummy/components/sl-translate', ['exports', 'sl-ember-translate/components/sl-translate'], function (exports, component) {

	'use strict';

	exports['default'] = component['default'];

});
define('dummy/controllers/browsers', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        components: [{ name: "alert", lib: { twb: true } }, { name: "button", lib: { twb: true } }, { name: "calendar", lib: { sec: true } }, { name: "chart", lib: { hc: true } }, { name: "checkbox", lib: { twb: true } }, { name: "date-picker", lib: { bd: true } }, { name: "date-range-picker", lib: { bd: true } }, { name: "date-time", lib: { sec: true } }, { name: "dialog", lib: { twb: true } }, { name: "drop-button", lib: { twb: true } }, { name: "grid system", lib: { sec: true, set: true } }, { name: "input", lib: { twb: true, ta: true } }, { name: "loading-icon", lib: { sec: true } }, { name: "menu", lib: { sec: true } }, { name: "pagination-controls", lib: { sec: true } }, { name: "pagination-info", lib: { sec: true, set: true, ses: true } }, { name: "pagination-per-page-select", lib: { sec: true, set: true, s2: true } }, { name: "panel", lib: { twb: true, bd: true } }, { name: "progress-bar", lib: { twb: true } }, { name: "radio", lib: { sec: true } }, { name: "radio-group", lib: { twb: true } }, { name: "select", lib: { s2: true } }, { name: "span", lib: { sec: true } }, { name: "tab-panel", lib: { twb: true } }, { name: "textarea", lib: { sec: true } }, { name: "tooltip", lib: { twb: true } }]
    });

});
define('dummy/controllers/demos/sl-calendar', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].ArrayController.extend({
        actions: {
            alertLabel: function alertLabel(dateObjects) {
                alert(dateObjects.objectAt(0).label);
            }
        }
    });

});
define('dummy/controllers/demos/sl-chart', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].ArrayController.extend({
        actions: {
            logOptions: function logOptions() {
                console.log(this.get("chartOptions"));
            },

            logSeries: function logSeries() {
                console.log(this.get("content"));
            }
        },

        chartOptions: {
            chart: {
                type: "bar"
            },

            xAxis: {
                categories: ["Apples", "Bananas", "Oranges"]
            },

            yAxis: {
                title: {
                    text: "Fruit Eaten"
                }
            }
        }
    });

});
define('dummy/controllers/demos/sl-date-time', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        firstDayDate: (function () {
            return moment().dayOfYear(1);
        }).property(),

        threeMonthsAgoDate: (function () {
            var now = moment();

            return moment().month(now.month() - 3);
        }).property()
    });

});
define('dummy/controllers/demos/sl-dialog', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            openModal: function openModal() {
                this.set("showModal", true);
            }
        },

        showModal: false
    });

});
define('dummy/controllers/demos/sl-drop-button', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    /* globals alert */

    exports['default'] = Ember['default'].ArrayController.extend({
        actions: {
            alertRed: function alertRed() {
                alert("Red!");
            },

            alertGreen: function alertGreen() {
                alert("Green!");
            },

            alertBlue: function alertBlue() {
                alert("Blue!");
            },

            alertWhite: function alertWhite() {
                alert("White!");
            }
        }
    });

});
define('dummy/controllers/demos/sl-grid-item', ['exports', 'ember', 'sl-ember-translate/mixins/sl-get-translation'], function (exports, Ember, SlGetTranslate) {

    'use strict';

    /* global alert */
    exports['default'] = Ember['default'].ObjectController.extend(SlGetTranslate['default'], {
        actions: {
            testItemAction: function testItemAction() {
                alert("This is a test from the sl-grid-item controller!");
            }
        },

        fmtProvisionDate: (function () {
            return this.get("provisionDate").format("MM-DD-YY");
        }).property("provisionDate"),

        rowExpanderComponent: "row-expander-content",

        actionsButton: [{ action: "testItemAction", label: "Test" }]
    });

});
define('dummy/controllers/demos/sl-grid', ['exports', 'ember', 'sl-ember-components/mixins/sl-grid-controller'], function (exports, Ember, SlGridMixin) {

    'use strict';

    /* global alert */
    exports['default'] = Ember['default'].ArrayController.extend(SlGridMixin['default'], {

        actions: {
            /**
             * Trigger reload of the model
             *
             * @function actions.reload
             * @returns  {void}
             */
            reload: function reload() {
                this.reloadModel(true);
            },

            /**
             * testAction - simple test action
             * @return {void}
             */
            testAction: function testAction() {
                alert("This is a test from the sl-grid controller!");
            }
        },

        itemController: "demos.sl-grid-item",

        gridDefinition: {
            options: {
                rowExpander: true,
                settingsMenu: {
                    translationKeys: {
                        actions: "ACTIONS",
                        columns: "COLUMNS",
                        resetColumnsToDefaults: "RESETCOLUMNS"
                    },
                    actions: [{
                        label: "TESTACTION",
                        action: "testAction"
                    }],
                    hideableColumns: true
                }
            },
            columns: [{
                component: "sl-grid-table-cell-row-expander",
                cssClass: "sl-grid-table-cell-row-expander",
                cssThClass: "sl-grid-table-cell-row-expander",
                movable: false,
                fixedWidth: 30
            }, {
                component: "sl-grid-table-cell",
                key: "name",
                title: "HOSTNAME",
                defaultText: "translate.UNKNOWNDEVICE",
                sortable: true,
                resizable: true,
                widthHint: 2
            }, {
                component: "sl-grid-table-cell",
                key: "ip",
                title: "IPADDRESS",
                sortable: true,
                hideable: true,
                resizable: true,
                widthHint: 1
            }, {
                component: "sl-grid-table-cell",
                key: "type",
                title: "DEVICETYPE",
                sortable: true,
                hideable: true,
                resizable: true,
                widthHint: 1
            }, {
                component: "sl-grid-table-cell",
                key: "notes",
                title: "NOTES",
                hideable: true,
                resizable: true,
                widthHint: 2
            }, {
                component: "sl-grid-table-cell",
                key: "fmtProvisionDate",
                title: "PROVISIONDATE",
                hideable: true,
                resizable: true,
                widthHint: 1
            }, {
                cssClass: "sl-grid-table-cell-actions",
                cssThClass: "sl-grid-table-cell-actions",
                component: "sl-grid-table-cell-actions",
                movable: false,
                fixedWidth: 120
            }]
        },

        /**
         * Reload the model for this controller
         *
         * @function reloadModel
         * @return {void}
         */
        reloadModel: function reloadModel() {
            var model = this.store.find("device");

            this.set("model", model);
        }
    });

});
define('dummy/controllers/demos/sl-input', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        colors: ["Black", "Blue", "Gray", "Green", "Orange", "Purple", "Red", "White", "Yellow"],

        colorValue: null
    });

});
define('dummy/controllers/demos/sl-menu', ['exports', 'ember', 'sl-ember-components/utils/sl-menu-key-adapter'], function (exports, Ember, KeyManager) {

    'use strict';

    exports['default'] = Ember['default'].ObjectController.extend({

        keyHandler: KeyManager['default'].create(),

        /**
         * Is the menu being interacted with via the keyboard?
         *
         * This value gets set by the inner workings of the component and is exposed for use by view logic
         *
         * @param {boolean}
         */
        keyboardInUse: null,

        actions: {
            selectionMadeHandler: function selectionMadeHandler(path) {
                console.log("Selection:", path);
            },

            actionInitiatedHandler: function actionInitiatedHandler(actionName, data) {
                console.log("Action [", actionName, "]");
                if (data) {
                    console.log("   data:", data);
                }
            },

            changeRouteHandler: function changeRouteHandler(route) {
                this.transitionToRoute(route);
            }
        }

    });

});
define('dummy/controllers/demos/sl-pagination-info', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        needs: ["pagination"]
    });

});
define('dummy/controllers/demos/sl-pagination-per-page-select', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        needs: ["pagination"]
    });

});
define('dummy/controllers/demos/sl-radio-group', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].ArrayController.extend({
        currentColor: "blue"
    });

});
define('dummy/controllers/demos/sl-select', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].ArrayController.extend({
        numbers: [10, 20, 30, 40, 50, 60, 70, 80, 90]
    });

});
define('dummy/controllers/demos/sl-span', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        init: function init() {
            this._super();

            var self = this;

            setTimeout(function () {
                self.set("isLoading", false);
            }, 5000);
        },

        isLoading: true
    });

});
define('dummy/controllers/demos/sl-tab-panel', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].ArrayController.extend({
        needs: ["demos/tabs/one"],

        one: Ember['default'].computed.alias("controllers.demos/tabs/one")
    });

});
define('dummy/controllers/demos/tabs/home', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        testValue: "Hello"
    });

});
define('dummy/controllers/demos/tabs/one', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].ObjectController.extend({
        inputText: "One input text",

        text: "Here is some dynamic content from One's controller."
    });

});
define('dummy/controllers/pagination', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        translations: {
            displaying: "PAGINATION_DISPLAYING",
            label: "DEVICE_LIST_PAGINATION_LABEL",
            perPage: "DEVICE_LIST_PAGINATION_PER_PAGE"
        },

        pagingData: {
            perPageOptions: [25, 50, 100],
            itemCountPerPage: 25,
            pageFirstRow: 1,
            pageLastRow: 2,
            totalRows: 125,
            modelNames: "Items"
        }
    });

});
define('dummy/initializers/app-version', ['exports', 'dummy/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;

  exports['default'] = {
    name: "App Version",
    initialize: function initialize(container, application) {
      var appName = classify(application.toString());
      Ember['default'].libraries.register(appName, config['default'].APP.version);
    }
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  };

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('dummy/initializers/register-helpers', ['exports', 'sl-ember-components/initializers/register-helpers'], function (exports, initializer) {

  'use strict';

  exports['default'] = {
    name: "sl-ember-components-register-helpers",

    initialize: initializer['default']
  };

});
define('dummy/initializers/translate-service', ['exports', 'sl-ember-translate/initializers/translate-service'], function (exports, initializer) {

  'use strict';

  exports['default'] = {
    name: "translate-service",

    initialize: initializer['default']
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

    'use strict';

    var Router = Ember['default'].Router.extend({
        location: config['default'].locationType,

        scrollToTopAfterRouteTransition: (function () {
            window.scrollTo(0, 0);
        }).observes("url")
    });

    Router.map(function () {
        this.route("index", { path: "/" });
        this.route("browsers");

        this.resource("demos", function () {
            this.route("sl-alert");
            this.route("sl-button");
            this.route("sl-calendar");
            this.route("sl-chart");
            this.route("sl-checkbox");
            this.route("sl-date-picker");
            this.route("sl-date-range-picker");
            this.route("sl-date-time");
            this.route("sl-dialog");
            this.route("sl-drop-button");
            this.route("sl-input");
            this.route("sl-grid");
            this.route("sl-loading-icon");
            this.route("sl-menu");
            this.route("sl-pagination-controls");
            this.route("sl-pagination-info");
            this.route("sl-pagination-per-page-select");
            this.route("sl-panel");
            this.route("sl-progress-bar");
            this.route("sl-radio");
            this.route("sl-radio-group");
            this.route("sl-select");
            this.route("sl-span");
            this.route("sl-tab-panel");
            this.route("sl-textarea");
            this.route("sl-tooltip");
        });
    });

    exports['default'] = Router;

});
define('dummy/routes/application', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        setupController: function setupController() {
            this.controllerFor("pagination").get("translateService").setDictionary(Ember['default'].Object.create({
                PAGINATION_DISPLAYING: "Displaying",
                DEVICE_LIST_PAGINATION_LABEL: "Viewing {0} to {1} of {2} Devices",
                DEVICE_LIST_PAGINATION_PER_PAGE: " per page",
                HOSTNAME: "Hostname",
                IPADDRESS: "IP Address",
                DEVICETYPE: "Device Type",
                PROVISIONDATE: "Provision Date",
                ACTIONS: "Actions",
                COLUMNS: "Columns",
                RESETCOLUMNS: "Reset Columns",
                TESTACTION: "Test Action",
                UNKNOWNDEVICE: "--Unknown Device--",
                NOTES: "Notes"
            }));
        }
    });

});
define('dummy/routes/demos/sl-calendar', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model() {
            return [{
                date: new Date(),
                label: "Today!"
            }];
        }
    });

});
define('dummy/routes/demos/sl-chart', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model() {
            return [{
                name: "Jane",
                data: [1, 0, 4]
            }, {
                name: "John",
                data: [5, 7, 3]
            }];
        }
    });

});
define('dummy/routes/demos/sl-grid', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({

        store: Ember['default'].Object.create({
            find: function find() {
                var promise = new Ember['default'].RSVP.Promise(function (resolve) {
                    Ember['default'].run.later(this, function () {
                        resolve([{
                            id: 1,
                            type: "server",
                            name: "test.server.com",
                            ip: "192.168.1.1",
                            notes: "Test Note",
                            provisionDate: moment("2014-09-12")
                        }, {
                            id: 2,
                            type: "firewall",
                            name: "fw.server.com",
                            ip: "192.168.1.21",
                            notes: "Test Note",
                            provisionDate: moment("2013-03-16")
                        }, {
                            id: 3,
                            type: "server",
                            name: "test2.server.com",
                            ip: "192.168.1.41",
                            notes: "Test Note",
                            provisionDate: moment("2014-09-01")
                        }, {
                            id: 4,
                            type: "server",
                            ip: "192.168.1.13",
                            notes: "Test Note",
                            provisionDate: moment("2014-09-12")
                        }, {
                            id: 5,
                            type: "loadBalancer",
                            name: "test11.server.com",
                            ip: "192.168.1.1",
                            notes: "Test Note",
                            provisionDate: moment("2013-05-22")
                        }, {
                            id: 6,
                            type: "server",
                            name: "test32.server.com",
                            ip: "192.168.1.131",
                            notes: "Test Note",
                            provisionDate: moment("2011-02-15")
                        }, {
                            id: 7,
                            type: "server",
                            name: "test12.server.com",
                            ip: "192.168.1.211",
                            notes: "Test Note",
                            provisionDate: moment("2014-09-12")
                        }]);
                    }, 1000);
                }),
                    devices = Ember['default'].ArrayProxy.createWithMixins(Ember['default'].PromiseProxyMixin);

                devices.set("promise", promise);

                return devices;
            },

            metadataFor: function metadataFor() {
                return {
                    totalCount: 7,
                    totalPages: 1
                };
            }
        }),

        model: function model() {
            return this.store.find("devices");
        },

        setupController: function setupController(controller, model) {
            this._super(controller, model);
            controller.set("store", this.store);
        },

        renderTemplate: function renderTemplate() {
            this.render("demos.sl-grid-demo");
        }
    });

});
define('dummy/routes/demos/sl-menu', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({

        model: function model() {
            return Ember['default'].Object.create({ label: null, pages: [Ember['default'].Object.create({ label: "Colors", pages: [Ember['default'].Object.create({ label: "Red", action: function action() {
                            alert("The color RED");
                        } }), Ember['default'].Object.create({ label: "Green", action: function action() {
                            alert("The color GREEN");
                        } }), Ember['default'].Object.create({ label: "Blue", action: function action() {
                            alert("The color BLUE");
                        } })] }), Ember['default'].Object.create({ label: "Numbers", pages: [Ember['default'].Object.create({ label: "1-5", pages: [Ember['default'].Object.create({ label: "1", action: { actionName: "number clicked", data: "1" } }), Ember['default'].Object.create({ label: "2", action: { actionName: "number clicked", data: "2" } }), Ember['default'].Object.create({ label: "3", action: { actionName: "number clicked", data: "3" } }), Ember['default'].Object.create({ label: "4", action: { actionName: "number clicked", data: "4" } }), Ember['default'].Object.create({ label: "5", action: { actionName: "number clicked", data: "5" } })] }), Ember['default'].Object.create({ label: "6-10", pages: [Ember['default'].Object.create({ label: "6", action: { actionName: "number clicked", data: "6" } }), Ember['default'].Object.create({ label: "7", action: { actionName: "number clicked", data: "7" } }), Ember['default'].Object.create({ label: "8", action: { actionName: "number clicked", data: "8" } }), Ember['default'].Object.create({ label: "9", action: { actionName: "number clicked", data: "9" } }), Ember['default'].Object.create({ label: "10", action: { actionName: "number clicked", data: "10" } })] })] }), Ember['default'].Object.create({ label: "Cities", pages: [Ember['default'].Object.create({ label: "Texas", pages: [Ember['default'].Object.create({ label: "Dallas" }), Ember['default'].Object.create({ label: "Houston" }), Ember['default'].Object.create({ label: "San Antonio" }), Ember['default'].Object.create({ label: "Austin" })] }), Ember['default'].Object.create({ label: "Oklahoma", pages: [Ember['default'].Object.create({ label: "Oklahoma City" }), Ember['default'].Object.create({ label: "Norman" })] }), Ember['default'].Object.create({ label: "California", pages: [Ember['default'].Object.create({ label: "Los Angeles" }), Ember['default'].Object.create({ label: "San Francisco" }), Ember['default'].Object.create({ label: "Palo Alto" }), Ember['default'].Object.create({ label: "Oakland", link: "http://www.cnn.com" })] })] }), Ember['default'].Object.create({ label: "Routes", pages: [Ember['default'].Object.create({ label: "Checkbox", route: "sl-checkbox" }), Ember['default'].Object.create({ label: "Button", route: "sl-button" }), Ember['default'].Object.create({ label: "Calendar", route: "sl-calendar" }), Ember['default'].Object.create({ label: "Alert", route: "sl-alert" })] })] });
        }
    });

});
define('dummy/routes/demos/sl-select', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model() {
            return [{
                label: "Red",
                description: "Apples",
                value: "red"
            }, {
                label: "Orange",
                description: "Oranges",
                value: "orange"
            }, {
                label: "Yellow",
                description: "Bananas",
                value: "yellow"
            }, {
                label: "Green",
                description: "Avocados",
                value: "green"
            }, {
                label: "Purple",
                description: "Blueberries",
                value: "purple"
            }, {
                label: "Splorge",
                description: "???",
                value: "splorge"
            }];
        }
    });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-alert.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-alert.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-alert.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-button.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-button.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-button.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-calendar-day.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-calendar-day.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-calendar-day.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-calendar-month.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-calendar-month.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-calendar-month.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-calendar-year.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-calendar-year.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-calendar-year.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-calendar.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-calendar.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-calendar.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-chart.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-chart.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-chart.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-checkbox.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-checkbox.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-checkbox.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-date-picker.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-date-picker.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-date-picker.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-date-range-picker.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-date-range-picker.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-date-range-picker.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-date-time.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-date-time.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-date-time.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-dialog.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-dialog.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-dialog.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-drop-button.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-drop-button.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-drop-button.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-drop-option.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-drop-option.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-drop-option.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-grid-header-settings.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-grid-header-settings.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-grid-header-settings.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-grid-table-cell-actions.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-grid-table-cell-actions.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-grid-table-cell-actions.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-grid-table-cell-link.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-grid-table-cell-link.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-grid-table-cell-link.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-grid-table-cell-row-expander.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-grid-table-cell-row-expander.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-grid-table-cell-row-expander.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-grid-table-cell.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-grid-table-cell.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-grid-table-cell.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-grid-table-header.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-grid-table-header.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-grid-table-header.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-grid-table-row-expander.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-grid-table-row-expander.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-grid-table-row-expander.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-input.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-input.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-input.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-loading-icon.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-loading-icon.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-loading-icon.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-menu.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-menu.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-menu.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-pagination-controls.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-pagination-controls.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-pagination-controls.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-pagination-info.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-pagination-info.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-pagination-info.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-pagination-per-page-select.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-pagination-per-page-select.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-pagination-per-page-select.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-panel.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-panel.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-panel.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-progress-bar.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-progress-bar.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-progress-bar.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-radio-group.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-radio-group.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-radio-group.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-radio.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-radio.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-radio.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-select.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-select.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-select.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-span.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-span.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-span.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-tab-pane.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-tab-pane.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-tab-pane.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-tab-panel.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-tab-panel.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-tab-panel.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-textarea.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-textarea.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-textarea.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/components/sl-tooltip.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/components");
  test("modules/sl-ember-components/components/sl-tooltip.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/components/sl-tooltip.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/helpers/get-key.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/helpers");
  test("modules/sl-ember-components/helpers/get-key.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/helpers/get-key.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/helpers/render-component.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/helpers");
  test("modules/sl-ember-components/helpers/render-component.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/helpers/render-component.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/helpers/render-tab-pane.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/helpers");
  test("modules/sl-ember-components/helpers/render-tab-pane.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/helpers/render-tab-pane.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/helpers/render-template.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/helpers");
  test("modules/sl-ember-components/helpers/render-template.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/helpers/render-template.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/initializers/register-helpers.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/initializers");
  test("modules/sl-ember-components/initializers/register-helpers.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/initializers/register-helpers.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/mixins/sl-grid-controller.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/mixins");
  test("modules/sl-ember-components/mixins/sl-grid-controller.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/mixins/sl-grid-controller.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/mixins/sl-grid-key-controller.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/mixins");
  test("modules/sl-ember-components/mixins/sl-grid-key-controller.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/mixins/sl-grid-key-controller.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/mixins/sl-grid-table-cell-resize.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/mixins");
  test("modules/sl-ember-components/mixins/sl-grid-table-cell-resize.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/mixins/sl-grid-table-cell-resize.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/mixins/sl-input-based.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/mixins");
  test("modules/sl-ember-components/mixins/sl-input-based.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/mixins/sl-input-based.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/mixins/sl-modal-manager.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/mixins");
  test("modules/sl-ember-components/mixins/sl-modal-manager.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/mixins/sl-modal-manager.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/mixins/sl-modal.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/mixins");
  test("modules/sl-ember-components/mixins/sl-modal.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/mixins/sl-modal.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/mixins/sl-notify-view.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/mixins");
  test("modules/sl-ember-components/mixins/sl-notify-view.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/mixins/sl-notify-view.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/mixins/sl-pagination-controller.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/mixins");
  test("modules/sl-ember-components/mixins/sl-pagination-controller.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/mixins/sl-pagination-controller.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/mixins/sl-tooltip-enabled.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/mixins");
  test("modules/sl-ember-components/mixins/sl-tooltip-enabled.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/mixins/sl-tooltip-enabled.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/utils/sl-grid-key-adapter.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/utils");
  test("modules/sl-ember-components/utils/sl-grid-key-adapter.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/utils/sl-grid-key-adapter.js should pass jshint.");
  });

});
define('dummy/sl-ember-components/tests/modules/sl-ember-components/utils/sl-menu-key-adapter.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-components/utils");
  test("modules/sl-ember-components/utils/sl-menu-key-adapter.js should pass jshint", function () {
    ok(true, "modules/sl-ember-components/utils/sl-menu-key-adapter.js should pass jshint.");
  });

});
define('dummy/sl-ember-translate/tests/modules/sl-ember-translate/components/sl-translate.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-translate/components");
  test("modules/sl-ember-translate/components/sl-translate.js should pass jshint", function () {
    ok(true, "modules/sl-ember-translate/components/sl-translate.js should pass jshint.");
  });

});
define('dummy/sl-ember-translate/tests/modules/sl-ember-translate/initializers/translate-service.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-translate/initializers");
  test("modules/sl-ember-translate/initializers/translate-service.js should pass jshint", function () {
    ok(true, "modules/sl-ember-translate/initializers/translate-service.js should pass jshint.");
  });

});
define('dummy/sl-ember-translate/tests/modules/sl-ember-translate/mixins/sl-get-translation.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-translate/mixins");
  test("modules/sl-ember-translate/mixins/sl-get-translation.js should pass jshint", function () {
    ok(true, "modules/sl-ember-translate/mixins/sl-get-translation.js should pass jshint.");
  });

});
define('dummy/sl-ember-translate/tests/modules/sl-ember-translate/services/translate.jshint', function () {

  'use strict';

  module("JSHint - modules/sl-ember-translate/services");
  test("modules/sl-ember-translate/services/translate.js should pass jshint", function () {
    ok(true, "modules/sl-ember-translate/services/translate.js should pass jshint.");
  });

});
define('dummy/templates/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n                        <i class=\"fa fa-home\"></i>\n                        Home\n                    ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n                        <i class=\"fa fa-cubes\"></i>\n                        Documentation\n                    ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n                        <i class=\"fa fa-gears\"></i>\n                        Supported Browsers\n                    ");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("sl-alert");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("sl-button");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("sl-calendar");
    }

  function program13(depth0,data) {
    
    
    data.buffer.push("sl-chart");
    }

  function program15(depth0,data) {
    
    
    data.buffer.push("sl-checkbox");
    }

  function program17(depth0,data) {
    
    
    data.buffer.push("sl-date-picker");
    }

  function program19(depth0,data) {
    
    
    data.buffer.push("sl-date-range-picker");
    }

  function program21(depth0,data) {
    
    
    data.buffer.push("sl-date-time");
    }

  function program23(depth0,data) {
    
    
    data.buffer.push("sl-dialog");
    }

  function program25(depth0,data) {
    
    
    data.buffer.push("sl-drop-button");
    }

  function program27(depth0,data) {
    
    
    data.buffer.push("sl-input");
    }

  function program29(depth0,data) {
    
    
    data.buffer.push("sl-grid system");
    }

  function program31(depth0,data) {
    
    
    data.buffer.push("sl-loading-icon");
    }

  function program33(depth0,data) {
    
    
    data.buffer.push("sl-menu");
    }

  function program35(depth0,data) {
    
    
    data.buffer.push("sl-pagination-controls");
    }

  function program37(depth0,data) {
    
    
    data.buffer.push("sl-pagination-info");
    }

  function program39(depth0,data) {
    
    
    data.buffer.push("sl-pagination-per-page-select");
    }

  function program41(depth0,data) {
    
    
    data.buffer.push("sl-panel");
    }

  function program43(depth0,data) {
    
    
    data.buffer.push("sl-progress-bar");
    }

  function program45(depth0,data) {
    
    
    data.buffer.push("sl-radio");
    }

  function program47(depth0,data) {
    
    
    data.buffer.push("sl-radio-group");
    }

  function program49(depth0,data) {
    
    
    data.buffer.push("sl-select");
    }

  function program51(depth0,data) {
    
    
    data.buffer.push("sl-span");
    }

  function program53(depth0,data) {
    
    
    data.buffer.push("sl-tab-panel");
    }

  function program55(depth0,data) {
    
    
    data.buffer.push("sl-textarea");
    }

  function program57(depth0,data) {
    
    
    data.buffer.push("sl-tooltip");
    }

    data.buffer.push("<br>\n<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"btn-group pull-right\">\n                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                    <i class=\"fa fa-reorder\"></i> <span class=\"caret\"></span>\n                </button>\n\n                <ul class=\"dropdown-menu\" role=\"menu\">\n\n                <li role=\"presentation\">\n                    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                </li>\n                <li role=\"presentation\">\n                    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos", options) : helperMissing.call(depth0, "link-to", "demos", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                </li>\n                <li role=\"presentation\">\n                    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "browsers", options) : helperMissing.call(depth0, "link-to", "browsers", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                </li>\n                <li role=\"presentation\">\n                    <a href=\"https://github.com/softlayer/sl-ember-components/blob/master/README.md\">\n                        <i class=\"fa fa-wrench\"></i>\n                        Get Started\n                    </a>\n                </li>\n                <li role=\"presentation\">\n                    <a href=\"https://github.com/softlayer/sl-ember-components/blob/master/CONTRIBUTING.md\">\n                        <i class=\"fa fa-cog\"></i>\n                        Contribution Guide\n                    </a>\n                </li>\n                <li role=\"presentation\">\n                    <a href=\"https://github.com/softlayer/sl-ember-components/stargazers\">\n                        <i class=\"fa fa-star\"></i>\n                        Star Our Repo\n                    </a>\n                </li>\n                <li role=\"presentation\">\n                    <a href=\"https://github.com/softlayer/sl-ember-components/fork\">\n                        <i class=\"fa fa-code-fork\"></i>\n                        Fork Our Repo\n                    </a>\n                </li>\n                <li class=\"divider\" role=\"presentation\"></li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-alert", options) : helperMissing.call(depth0, "link-to", "demos.sl-alert", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-button", options) : helperMissing.call(depth0, "link-to", "demos.sl-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-calendar", options) : helperMissing.call(depth0, "link-to", "demos.sl-calendar", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-chart", options) : helperMissing.call(depth0, "link-to", "demos.sl-chart", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-checkbox", options) : helperMissing.call(depth0, "link-to", "demos.sl-checkbox", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-date-picker", options) : helperMissing.call(depth0, "link-to", "demos.sl-date-picker", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-date-range-picker", options) : helperMissing.call(depth0, "link-to", "demos.sl-date-range-picker", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-date-time", options) : helperMissing.call(depth0, "link-to", "demos.sl-date-time", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-dialog", options) : helperMissing.call(depth0, "link-to", "demos.sl-dialog", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-drop-button", options) : helperMissing.call(depth0, "link-to", "demos.sl-drop-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-input", options) : helperMissing.call(depth0, "link-to", "demos.sl-input", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-grid", options) : helperMissing.call(depth0, "link-to", "demos.sl-grid", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(31, program31, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-loading-icon", options) : helperMissing.call(depth0, "link-to", "demos.sl-loading-icon", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(33, program33, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-menu", options) : helperMissing.call(depth0, "link-to", "demos.sl-menu", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(35, program35, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-pagination-controls", options) : helperMissing.call(depth0, "link-to", "demos.sl-pagination-controls", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(37, program37, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-pagination-info", options) : helperMissing.call(depth0, "link-to", "demos.sl-pagination-info", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(39, program39, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-pagination-per-page-select", options) : helperMissing.call(depth0, "link-to", "demos.sl-pagination-per-page-select", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(41, program41, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-panel", options) : helperMissing.call(depth0, "link-to", "demos.sl-panel", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(43, program43, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-progress-bar", options) : helperMissing.call(depth0, "link-to", "demos.sl-progress-bar", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(45, program45, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-radio", options) : helperMissing.call(depth0, "link-to", "demos.sl-radio", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(47, program47, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-radio-group", options) : helperMissing.call(depth0, "link-to", "demos.sl-radio-group", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(49, program49, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-select", options) : helperMissing.call(depth0, "link-to", "demos.sl-select", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(51, program51, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-span", options) : helperMissing.call(depth0, "link-to", "demos.sl-span", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(53, program53, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-tab-panel", options) : helperMissing.call(depth0, "link-to", "demos.sl-tab-panel", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(55, program55, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-textarea", options) : helperMissing.call(depth0, "link-to", "demos.sl-textarea", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n                <li role=\"presentation\">");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(57, program57, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-tooltip", options) : helperMissing.call(depth0, "link-to", "demos.sl-tooltip", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    ");
    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    <br><br>\n    <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n            <p>ember install:addon sl-ember-components</p>\n            <p><a href=\"https://github.com/softlayer/sl-ember-components/blob/master/LICENSE.md\">MIT Licensed</a></p>\n        </div>\n    </div>\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/browsers', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    
    data.buffer.push("TWB");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("SEC");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("HC");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("BD");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("SET");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("TA");
    }

  function program13(depth0,data) {
    
    
    data.buffer.push("S2");
    }

  function program15(depth0,data) {
    
    
    data.buffer.push("SES");
    }

  function program17(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n                <tr>\n                    <td>");
    stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</td>\n                    <td class=\"text-center\">\n                        ");
    stack1 = helpers['if'].call(depth0, "lib.twb", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                    </td>\n                    <td class=\"text-center\">\n                        ");
    stack1 = helpers['if'].call(depth0, "lib.sec", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                    </td>\n                    <td class=\"text-center\">\n                        ");
    stack1 = helpers['if'].call(depth0, "lib.hc", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                    </td>\n                    <td class=\"text-center\">\n                        ");
    stack1 = helpers['if'].call(depth0, "lib.bd", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                    </td>\n                    <td class=\"text-center\">\n                        ");
    stack1 = helpers['if'].call(depth0, "lib.set", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                    </td>\n                    <td class=\"text-center\">\n                        ");
    stack1 = helpers['if'].call(depth0, "lib.ta", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                    </td>\n                    <td class=\"text-center\">\n                        ");
    stack1 = helpers['if'].call(depth0, "lib.s2", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                    </td>\n                    <td class=\"text-center\">\n                        ");
    stack1 = helpers['if'].call(depth0, "lib.ses", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                    </td>\n                </tr>\n            ");
    return buffer;
    }
  function program18(depth0,data) {
    
    
    data.buffer.push("<i class=\"fa fa-check text-success\"></i>");
    }

  function program20(depth0,data) {
    
    
    data.buffer.push("<span class=\"text-muted\">&mdash;</span>");
    }

    data.buffer.push("<h3>Supported Browsers</h3>\n<p>As not all of the components in sl-ember-components are based upon the same third-party libraries it is possible that there is varying support for browser versions across the different components. Below is a table of each component's library dependencies. Beneath this table are the supported browsers for said libraries.</p>\n\n<section>\n    <h5>Legend</h5>\n\n    <div class=\"row\">\n        <div class=\"col-md-1\">\n            TWB\n        </div>\n        <div class=\"col-md-11\">\n            Twitter Bootstrap\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-1\">\n            SEC\n        </div>\n        <div class=\"col-md-11\">\n            sl-ember-components\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-1\">\n            HC\n        </div>\n        <div class=\"col-md-11\">\n            Highcharts\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-1\">\n            BD\n        </div>\n        <div class=\"col-md-11\">\n            Bootstrap-Datepicker\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-1\">\n            SET\n        </div>\n        <div class=\"col-md-11\">\n            sl-ember-translate\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-1\">\n            TA\n        </div>\n        <div class=\"col-md-11\">\n            typeahead.js\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-1\">\n            S2\n        </div>\n        <div class=\"col-md-11\">\n            Select2\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-1\">\n            SES\n        </div>\n        <div class=\"col-md-11\">\n            sl-ember-store\n        </div>\n    </div>\n</section>\n\n<section>\n    <table class=\"table table-hover table-striped\">\n        <thead>\n            <tr>\n                <th class=\"col-sm-4\">Component</th>\n                <th class=\"col-sm-1 text-center\">");
    stack1 = (helper = helpers['sl-tooltip'] || (depth0 && depth0['sl-tooltip']),options={hash:{
      'title': ("Twitter Bootstrap")
    },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-tooltip", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</th>\n                <th class=\"col-sm-1 text-center\">");
    stack1 = (helper = helpers['sl-tooltip'] || (depth0 && depth0['sl-tooltip']),options={hash:{
      'title': ("sl-ember-components")
    },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-tooltip", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</th>\n                <th class=\"col-sm-1 text-center\">");
    stack1 = (helper = helpers['sl-tooltip'] || (depth0 && depth0['sl-tooltip']),options={hash:{
      'title': ("Highcharts")
    },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-tooltip", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</th>\n                <th class=\"col-sm-1 text-center\">");
    stack1 = (helper = helpers['sl-tooltip'] || (depth0 && depth0['sl-tooltip']),options={hash:{
      'title': ("Bootstrap-Datepicker")
    },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-tooltip", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</th>\n                <th class=\"col-sm-1 text-center\">");
    stack1 = (helper = helpers['sl-tooltip'] || (depth0 && depth0['sl-tooltip']),options={hash:{
      'title': ("sl-ember-translate")
    },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-tooltip", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</th>\n                <th class=\"col-sm-1 text-center\">");
    stack1 = (helper = helpers['sl-tooltip'] || (depth0 && depth0['sl-tooltip']),options={hash:{
      'title': ("typeahead.js")
    },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-tooltip", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</th>\n                <th class=\"col-sm-1 text-center\">");
    stack1 = (helper = helpers['sl-tooltip'] || (depth0 && depth0['sl-tooltip']),options={hash:{
      'title': ("Select2")
    },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-tooltip", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</th>\n                <th class=\"col-sm-1 text-center\">");
    stack1 = (helper = helpers['sl-tooltip'] || (depth0 && depth0['sl-tooltip']),options={hash:{
      'title': ("sl-ember-store")
    },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-tooltip", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</th>\n            </tr>\n        </thead>\n        <tbody>\n            ");
    stack1 = helpers.each.call(depth0, "components", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n        </tbody>\n    </table>\n</section>\n\n<section>\n    <h5>Twitter Bootstrap</h5>\n\n    <p>From <a href=\"http://getbootstrap.com/getting-started/#support\">http://getbootstrap.com/getting-started/#support</a>:</p>\n    <p>Generally the latest versions of browsers are supported. On Windows, Internet Explorer 8-11 are supported.</p>\n    <p>See provided link for most up-to-date information.</p>\n</section>\n\n<section>\n    <h5>sl-ember-components</h5>\n\n    <p>Latest versions of browsers plus one version prior. Version 0.8.0 supports Internet Explorer 10+.</p>\n</section>\n\n<section>\n    <h5>Highcharts</h5>\n\n    <p>From <a href=\"http://www.highcharts.com/products/highcharts/#compatible\">http://www.highcharts.com/products/highcharts/#compatible</a>:</p>\n    <p>Works in all modern mobile and desktop browsers including the iPhone/iPad and Internet Explorer from version 6. On iOS and Android, multitouch support provides a seamless user experience. Standard browsers use SVG for the graphics rendering. In legacy Internet Explorer graphics are drawn using VML.</p>\n    <p>See provided link for most up-to-date information.</p>\n</section>\n\n<section>\n    <h5>Bootstrap-Datepicker</h5>\n\n    <p>From <a href=\"http://bootstrap-datepicker.readthedocs.org/en/release/#\">http://bootstrap-datepicker.readthedocs.org/en/release/#</a>:</p>\n    <p>Has a dependency on Twitter Bootstrap so same support previously listed.</p>\n    <p>See provided link for most up-to-date information.</p>\n</section>\n\n<section>\n    <h5>typeahead.js</h5>\n\n    <p>From <a href=\"https://github.com/twitter/typeahead.js\">https://github.com/twitter/typeahead.js</a>:</p>\n    <ul>\n        <li>Chrome</li>\n        <li>Firefox 3.5+</li>\n        <li>Safari 4+</li>\n        <li>Internet Explorer 7+</li>\n        <li>Opera 11+</li>\n        <li>Not tested on mobile browsers</li>\n    </ul>\n    <p>See provided link for most up-to-date information.</p>\n</section>\n\n<section>\n    <h5>Select2</h5>\n\n    <p>From <a href=\"http://ivaynberg.github.io/select2/\">http://ivaynberg.github.io/select2/</a>:</p>\n    <ul>\n        <li>IE 8+</li>\n        <li>Chrome 8+</li>\n        <li>Firefox 10+</li>\n        <li>Safari 3+</li>\n        <li>Opera 10.6+</li>\n    </ul>\n    <p>See provided link for most up-to-date information.</p>\n</section>\n");
    return buffer;
    
  });

});
define('dummy/templates/components/property-text', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n        <small class=\"text-danger\">required</small>\n    ");
    }

  function program3(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push(", <span class=\"text-info\">default: ");
    stack1 = helpers._triageMustache.call(depth0, "default", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</span>");
    return buffer;
    }

  function program5(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push(", <span class=\"text-danger\">requires ");
    stack1 = helpers._triageMustache.call(depth0, "requires", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</span>");
    return buffer;
    }

    data.buffer.push("<h4 class=\"list-group-item-heading\">\n    ");
    stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = helpers['if'].call(depth0, "required", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</h4>\n<p>\n    <span class=\"text-primary\">");
    stack1 = helpers._triageMustache.call(depth0, "type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</span>");
    stack1 = helpers['if'].call(depth0, "default", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    stack1 = helpers['if'].call(depth0, "requires", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</p>\n<p>");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</p>");
    return buffer;
    
  });

});
define('dummy/templates/components/row-expander-content', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <p>Row Expander Component: This device's hostname is ");
    stack1 = helpers._triageMustache.call(depth0, "data.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</p>\n");
    return buffer;
    }

    stack1 = (helper = helpers['sl-panel'] || (depth0 && depth0['sl-panel']),options={hash:{
      'title': ("Device Item")
    },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-panel", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    else { data.buffer.push(''); }
    
  });

});
define('dummy/templates/components/sl-alert', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '';
    data.buffer.push("\n    <button ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "dismiss", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
    data.buffer.push(" class=\"close\" data-dismiss=\"alert\" type=\"button\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n    </button>\n");
    return buffer;
    }

    stack1 = helpers['if'].call(depth0, "dismissable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-button', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    ");
    stack1 = helpers._triageMustache.call(depth0, "currentLabel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    }

  function program3(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    ");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    }

    stack1 = helpers['if'].call(depth0, "currentLabel", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-calendar-day', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var stack1;


    stack1 = helpers._triageMustache.call(depth0, "day", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    else { data.buffer.push(''); }
    
  });

});
define('dummy/templates/components/sl-calendar-month', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var stack1;


    stack1 = helpers._triageMustache.call(depth0, "shortName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    else { data.buffer.push(''); }
    
  });

});
define('dummy/templates/components/sl-calendar-year', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var stack1;


    stack1 = helpers._triageMustache.call(depth0, "year", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    else { data.buffer.push(''); }
    
  });

});
define('dummy/templates/components/sl-calendar', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n        <div class=\"datepicker-days\" style=\"display: block;\">\n            <table class=\"table-condensed\">\n                <thead>\n                    <tr>\n                        <th ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeMonth", -1, {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","INTEGER"],data:data})));
    data.buffer.push(" class=\"prev\"><span class=\"fa fa-angle-left\"></span></th>\n                        <th ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "setView", "months", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
    data.buffer.push(" colspan=\"5\" class=\"datepicker-switch\">");
    stack1 = helpers._triageMustache.call(depth0, "currentMonthString", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push(" ");
    stack1 = helpers._triageMustache.call(depth0, "currentYear", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</th>\n                        <th ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeMonth", 1, {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","INTEGER"],data:data})));
    data.buffer.push("class=\"next\"><span class=\"fa fa-angle-right\"></span></th>\n                    </tr>\n                    <tr>\n                        <th class=\"dow\">");
    data.buffer.push(escapeExpression((helper = helpers.shortWeekDayName || (depth0 && depth0.shortWeekDayName),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["INTEGER"],data:data},helper ? helper.call(depth0, 0, options) : helperMissing.call(depth0, "shortWeekDayName", 0, options))));
    data.buffer.push("</th>\n                        <th class=\"dow\">");
    data.buffer.push(escapeExpression((helper = helpers.shortWeekDayName || (depth0 && depth0.shortWeekDayName),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["INTEGER"],data:data},helper ? helper.call(depth0, 1, options) : helperMissing.call(depth0, "shortWeekDayName", 1, options))));
    data.buffer.push("</th>\n                        <th class=\"dow\">");
    data.buffer.push(escapeExpression((helper = helpers.shortWeekDayName || (depth0 && depth0.shortWeekDayName),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["INTEGER"],data:data},helper ? helper.call(depth0, 2, options) : helperMissing.call(depth0, "shortWeekDayName", 2, options))));
    data.buffer.push("</th>\n                        <th class=\"dow\">");
    data.buffer.push(escapeExpression((helper = helpers.shortWeekDayName || (depth0 && depth0.shortWeekDayName),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["INTEGER"],data:data},helper ? helper.call(depth0, 3, options) : helperMissing.call(depth0, "shortWeekDayName", 3, options))));
    data.buffer.push("</th>\n                        <th class=\"dow\">");
    data.buffer.push(escapeExpression((helper = helpers.shortWeekDayName || (depth0 && depth0.shortWeekDayName),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["INTEGER"],data:data},helper ? helper.call(depth0, 4, options) : helperMissing.call(depth0, "shortWeekDayName", 4, options))));
    data.buffer.push("</th>\n                        <th class=\"dow\">");
    data.buffer.push(escapeExpression((helper = helpers.shortWeekDayName || (depth0 && depth0.shortWeekDayName),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["INTEGER"],data:data},helper ? helper.call(depth0, 5, options) : helperMissing.call(depth0, "shortWeekDayName", 5, options))));
    data.buffer.push("</th>\n                        <th class=\"dow\">");
    data.buffer.push(escapeExpression((helper = helpers.shortWeekDayName || (depth0 && depth0.shortWeekDayName),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["INTEGER"],data:data},helper ? helper.call(depth0, 6, options) : helperMissing.call(depth0, "shortWeekDayName", 6, options))));
    data.buffer.push("</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    ");
    stack1 = helpers.each.call(depth0, "week", "in", "weeksInMonthView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                </tbody>\n            </table>\n        </div>\n    ");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n                        <tr>\n                            ");
    stack1 = helpers.each.call(depth0, "day", "in", "week", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                        </tr>\n                    ");
    return buffer;
    }
  function program3(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n                                ");
    data.buffer.push(escapeExpression((helper = helpers['sl-calendar-day'] || (depth0 && depth0['sl-calendar-day']),options={hash:{
      'action': ("sendDateContent"),
      'active': ("day.active"),
      'content': ("day.content"),
      'day': ("day.day"),
      'new': ("day.new"),
      'old': ("day.old")
    },hashTypes:{'action': "STRING",'active': "ID",'content': "ID",'day': "ID",'new': "ID",'old': "ID"},hashContexts:{'action': depth0,'active': depth0,'content': depth0,'day': depth0,'new': depth0,'old': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-calendar-day", options))));
    data.buffer.push("\n                            ");
    return buffer;
    }

  function program5(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n        <div class=\"datepicker-months\" style=\"display: block;\">\n            <table class=\"table-condensed\">\n                <thead>\n                    <tr>\n                        <th ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeYear", -1, {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","INTEGER"],data:data})));
    data.buffer.push(" class=\"prev\" style=\"visibility: visible;\"><span class=\"fa fa-angle-left\"></span></th>\n                        <th ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "setView", "years", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
    data.buffer.push(" colspan=\"5\" class=\"datepicker-switch\">");
    stack1 = helpers._triageMustache.call(depth0, "currentYear", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</th>\n                        <th ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeYear", 1, {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","INTEGER"],data:data})));
    data.buffer.push(" class=\"next\" style=\"visibility: visible;\"><span class=\"fa fa-angle-right\"></span></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td colspan=\"7\">\n                            ");
    stack1 = helpers.each.call(depth0, "month", "in", "monthsInYearView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    ");
    return buffer;
    }
  function program6(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n                                ");
    data.buffer.push(escapeExpression((helper = helpers['sl-calendar-month'] || (depth0 && depth0['sl-calendar-month']),options={hash:{
      'action': ("setMonth"),
      'active': ("month.active"),
      'month': ("month.month")
    },hashTypes:{'action': "STRING",'active': "ID",'month': "ID"},hashContexts:{'action': depth0,'active': depth0,'month': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-calendar-month", options))));
    data.buffer.push("\n                            ");
    return buffer;
    }

  function program8(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n        <div class=\"datepicker-years\" style=\"display: block;\">\n            <table class=\"table-condensed\">\n                <thead>\n                    <tr>\n                        <th ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeDecade", -1, {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","INTEGER"],data:data})));
    data.buffer.push(" class=\"prev\" style=\"visibility: visible;\"><span class=\"fa fa-angle-left\"></span></th>\n                        <th colspan=\"5\" class=\"datepicker-switch\">");
    stack1 = helpers._triageMustache.call(depth0, "decadeStart", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("-");
    stack1 = helpers._triageMustache.call(depth0, "decadeEnd", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</th>\n                        <th ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeDecade", 1, {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","INTEGER"],data:data})));
    data.buffer.push(" class=\"next\" style=\"visibility: visible;\"><span class=\"fa fa-angle-right\"></span></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td colspan=\"7\">\n                            ");
    stack1 = helpers.each.call(depth0, "year", "in", "yearsInDecadeView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    ");
    return buffer;
    }
  function program9(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n                                ");
    data.buffer.push(escapeExpression((helper = helpers['sl-calendar-year'] || (depth0 && depth0['sl-calendar-year']),options={hash:{
      'action': ("setYear"),
      'active': ("year.active"),
      'old': ("year.old"),
      'new': ("year.new"),
      'year': ("year.year")
    },hashTypes:{'action': "STRING",'active': "ID",'old': "ID",'new': "ID",'year': "ID"},hashContexts:{'action': depth0,'active': depth0,'old': depth0,'new': depth0,'year': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-calendar-year", options))));
    data.buffer.push("\n                            ");
    return buffer;
    }

    data.buffer.push("<div class=\"datepicker datepicker-inline\">\n    ");
    stack1 = helpers['if'].call(depth0, "viewingDays", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = helpers['if'].call(depth0, "viewingMonths", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = helpers['if'].call(depth0, "viewingYears", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-chart', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, self=this, escapeExpression=this.escapeExpression;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <div class=\"panel-heading\">");
    stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</div>\n");
    return buffer;
    }

    stack1 = helpers['if'].call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n<div class=\"panel-body\">\n    <div ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'style': ("style")
    },hashTypes:{'style': "ID"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" class=\"chart sl-maskable-content\"></div>\n    <div class=\"sl-mask\"></div>\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-checkbox', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


    data.buffer.push("<label>\n    ");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'checked': ("value"),
      'disabled': ("disabled"),
      'name': ("name"),
      'type': ("checkbox")
    },hashTypes:{'checked': "ID",'disabled': "ID",'name': "ID",'type': "STRING"},hashContexts:{'checked': depth0,'disabled': depth0,'name': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n    ");
    stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</label>\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-date-picker', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <label ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'for': ("sl-date-picker-view.elementId")
    },hashTypes:{'for': "STRING"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(">");
    stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</label>\n");
    return buffer;
    }

  function program3(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <p class=\"help-block\">");
    stack1 = helpers._triageMustache.call(depth0, "helpText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</p>\n");
    return buffer;
    }

    stack1 = helpers['if'].call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'viewName': ("sl-date-picker-view"),
      'type': ("text"),
      'action': ("enter"),
      'class': ("date-picker form-control"),
      'disabled': ("disabled"),
      'placeholder': ("placeholder"),
      'value': ("value")
    },hashTypes:{'viewName': "STRING",'type': "STRING",'action': "STRING",'class': "STRING",'disabled': "ID",'placeholder': "ID",'value': "ID"},hashContexts:{'viewName': depth0,'type': depth0,'action': depth0,'class': depth0,'disabled': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n\n");
    stack1 = helpers['if'].call(depth0, "helpText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-date-range-picker', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <label ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'for': ("inputElementId")
    },hashTypes:{'for': "ID"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(">");
    stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</label>\n");
    return buffer;
    }

  function program3(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <p class=\"help-block\">");
    stack1 = helpers._triageMustache.call(depth0, "helpText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</p>\n");
    return buffer;
    }

    stack1 = helpers['if'].call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n<div class=\"row\">\n    ");
    data.buffer.push(escapeExpression((helper = helpers['sl-date-picker'] || (depth0 && depth0['sl-date-picker']),options={hash:{
      'change': ("startDateChange"),
      'class': ("sl-daterange-start-date col-md-6"),
      'endDate': ("latestStartDate"),
      'placeholder': ("startDatePlaceholder"),
      'startDate': ("minDate"),
      'value': ("startDateValue"),
      'inputElementIdBinding': ("inputElementId")
    },hashTypes:{'change': "STRING",'class': "STRING",'endDate': "ID",'placeholder': "ID",'startDate': "ID",'value': "ID",'inputElementIdBinding': "STRING"},hashContexts:{'change': depth0,'class': depth0,'endDate': depth0,'placeholder': depth0,'startDate': depth0,'value': depth0,'inputElementIdBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-date-picker", options))));
    data.buffer.push("\n\n    ");
    data.buffer.push(escapeExpression((helper = helpers['sl-date-picker'] || (depth0 && depth0['sl-date-picker']),options={hash:{
      'change': ("endDateChange"),
      'class': ("sl-daterange-end-date col-md-6"),
      'endDate': ("maxDate"),
      'placeholder': ("endDatePlaceholder"),
      'startDate': ("earliestEndDate"),
      'value': ("endDateValue")
    },hashTypes:{'change': "STRING",'class': "STRING",'endDate': "ID",'placeholder': "ID",'startDate': "ID",'value': "ID"},hashContexts:{'change': depth0,'class': depth0,'endDate': depth0,'placeholder': depth0,'startDate': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-date-picker", options))));
    data.buffer.push("\n</div>\n\n");
    stack1 = helpers['if'].call(depth0, "helpText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    return buffer;
    
  });

});
define('dummy/templates/components/sl-date-time', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1;


    stack1 = helpers._triageMustache.call(depth0, "formattedValue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-dialog', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n                <span class=\"modal-title\">");
    stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</span>\n            ");
    return buffer;
    }

    data.buffer.push("<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <button class=\"close\" data-dismiss=\"modal\" type=\"button\">\n                <span aria-hidden=\"true\">&times;</span>\n                <span class=\"sr-only\">Close</span>\n            </button>\n\n            ");
    stack1 = helpers['if'].call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n        </div>\n\n        <div class=\"modal-body\">\n            ");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n        </div>\n\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary\" data-dismiss=\"modal\">");
    stack1 = helpers._triageMustache.call(depth0, "buttonText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</button>\n        </div>\n    </div>\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-drop-button', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    ");
    stack1 = helpers['if'].call(depth0, "view.label", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n        ");
    stack1 = helpers._triageMustache.call(depth0, "view.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n        <span ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': ("iconClass")
    },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push("></span>\n    ");
    return buffer;
    }

  function program4(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n        ");
    stack1 = helpers['if'].call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    return buffer;
    }
  function program5(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n            ");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n        ");
    return buffer;
    }

  function program7(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n        ");
    stack1 = helpers.each.call(depth0, "option", "in", "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    return buffer;
    }
  function program8(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n            ");
    data.buffer.push(escapeExpression((helper = helpers['sl-drop-option'] || (depth0 && depth0['sl-drop-option']),options={hash:{
      'action': ("option.action"),
      'icon': ("option.icon"),
      'label': ("option.label")
    },hashTypes:{'action': "ID",'icon': "ID",'label': "ID"},hashContexts:{'action': depth0,'icon': depth0,'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-drop-option", options))));
    data.buffer.push("\n        ");
    return buffer;
    }

  function program10(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n        ");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    return buffer;
    }

    stack1 = (helper = helpers['sl-button'] || (depth0 && depth0['sl-button']),options={hash:{
      'class': ("dropdown-toggle"),
      'data-toggle': ("dropdown"),
      'size': ("size"),
      'type': ("button")
    },hashTypes:{'class': "STRING",'data-toggle': "STRING",'size': "ID",'type': "STRING"},hashContexts:{'class': depth0,'data-toggle': depth0,'size': depth0,'type': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n<ul ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': (":dropdown-menu rightAligned:dropdown-menu-right")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" role=\"menu\">\n    ");
    stack1 = helpers['if'].call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</ul>\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-drop-option', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <a ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "click", "action", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
    data.buffer.push(" role=\"menuitem\" tab-index=\"-1\">\n        ");
    stack1 = helpers['if'].call(depth0, "icon", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </a>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '';
    data.buffer.push("\n            <img ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'src': ("icon")
    },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
    data.buffer.push("/>\n        ");
    return buffer;
    }

    stack1 = helpers['if'].call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-grid-header-settings', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n        <li class=\"text-center\" role=\"presentation\">");
    data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
      'key': ("translationKeys.actions")
    },hashTypes:{'key': "ID"},hashContexts:{'key': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
    data.buffer.push("</li>\n        <li role=\"presentation\" class=\"divider\"></li>\n        ");
    stack1 = helpers.each.call(depth0, "entry", "in", "clickableActions", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n        <li role=\"presentation\" class=\"divider\"></li>\n    ");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n            <li class=\"text-center\" role=\"presentation\" >\n                ");
    stack1 = helpers['if'].call(depth0, "entry.action", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n            </li>\n        ");
    return buffer;
    }
  function program3(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n                    <a ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "click", "entry.action", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
    data.buffer.push(" role=\"menuitem\" tab-index=\"-1\">\n                        ");
    stack1 = helpers['if'].call(depth0, "entry.icon", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
      'key': ("entry.label")
    },hashTypes:{'key': "ID"},hashContexts:{'key': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
    data.buffer.push("\n                    </a>\n                ");
    return buffer;
    }
  function program4(depth0,data) {
    
    var buffer = '';
    data.buffer.push("\n                            <img ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'src': ("entry.icon")
    },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
    data.buffer.push("/>\n                        ");
    return buffer;
    }

  function program6(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n                    ");
    data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
      'key': ("entry.label")
    },hashTypes:{'key': "ID"},hashContexts:{'key': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
    data.buffer.push("\n                ");
    return buffer;
    }

  function program8(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n        <li class=\"text-center\" role=\"presentation\">");
    data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
      'key': ("translationKeys.columns")
    },hashTypes:{'key': "ID"},hashContexts:{'key': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
    data.buffer.push("</li>\n        <li role=\"presentation\" class=\"divider\"></li>\n        <li  class=\"text-center\" role=\"presentation\">\n            <a role=\"menuitem\" ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "click", "resetColumns", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
    data.buffer.push(">\n                ");
    data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
      'key': ("translationKeys.resetColumnsToDefaults")
    },hashTypes:{'key': "ID"},hashContexts:{'key': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
    data.buffer.push("\n            </a>\n        </li>\n        ");
    stack1 = helpers.each.call(depth0, "column", "in", "hideableColumns", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    return buffer;
    }
  function program9(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n            <li role=\"presentation\" class=\"hideableColumn stay-open\">\n                ");
    stack1 = helpers['if'].call(depth0, "column.action", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n            </li>\n        ");
    return buffer;
    }
  function program10(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n                    <label ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "click", "column.action", "column.key", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data})));
    data.buffer.push(">\n                        ");
    data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.columnCheckbox", {hash:{
      'column': ("column")
    },hashTypes:{'column': "ID"},hashContexts:{'column': depth0},contexts:[depth0],types:["ID"],data:data})));
    data.buffer.push("\n                        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
      'key': ("column.label")
    },hashTypes:{'key': "ID"},hashContexts:{'key': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
    data.buffer.push("\n                    </label>\n                ");
    return buffer;
    }

  function program12(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n                    ");
    data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
      'key': ("column.label")
    },hashTypes:{'key': "ID"},hashContexts:{'key': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
    data.buffer.push("\n                ");
    return buffer;
    }

    data.buffer.push("<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n    <i class=\"fa fa-cog\"></i> <span class=\"caret\"></span>\n</button>\n\n<ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n    ");
    stack1 = helpers['if'].call(depth0, "showActions", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = helpers['if'].call(depth0, "showColumns", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</ul>\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-grid-table-cell-actions', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


    data.buffer.push(escapeExpression((helper = helpers['sl-drop-button'] || (depth0 && depth0['sl-drop-button']),options={hash:{
      'label': ("Actions"),
      'content': ("row.actionsButton"),
      'theme': ("hover"),
      'target': ("targetObject")
    },hashTypes:{'label': "STRING",'content': "ID",'theme': "STRING",'target': "ID"},hashContexts:{'label': depth0,'content': depth0,'theme': depth0,'target': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-drop-button", options))));
    
  });

});
define('dummy/templates/components/sl-grid-table-cell-link', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n    ");
    data.buffer.push(escapeExpression((helper = helpers['get-key'] || (depth0 && depth0['get-key']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data},helper ? helper.call(depth0, "row", "column.key", "column.defaultText", options) : helperMissing.call(depth0, "get-key", "row", "column.key", "column.defaultText", options))));
    data.buffer.push("\n");
    return buffer;
    }

    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "column.link", "row", options) : helperMissing.call(depth0, "link-to", "column.link", "row", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-grid-table-cell-row-expander', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', escapeExpression=this.escapeExpression;


    data.buffer.push("<a href=\"#\" ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleRowExpander", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
    data.buffer.push("><i ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': (":fa expanded:fa-caret-down:fa-caret-right")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push("></i></a>\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-grid-table-cell', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


    data.buffer.push(escapeExpression((helper = helpers['get-key'] || (depth0 && depth0['get-key']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data},helper ? helper.call(depth0, "row", "column.key", "column.defaultText", options) : helperMissing.call(depth0, "get-key", "row", "column.key", "column.defaultText", options))));
    
  });

});
define('dummy/templates/components/sl-grid-table-column-resize', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    


    data.buffer.push("&nbsp;\n");
    
  });

});
define('dummy/templates/components/sl-grid-table-header', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    ");
    stack1 = helpers['if'].call(depth0, "column.sortable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n        <a href=\"#\" ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortColumn", "column", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
    data.buffer.push(">");
    data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
      'key': ("column.title")
    },hashTypes:{'key': "ID"},hashContexts:{'key': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
    data.buffer.push(" \n        <span ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': ("view.sortClasses")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push("/>\n        </a>\n    ");
    return buffer;
    }

  function program4(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
      'key': ("column.title")
    },hashTypes:{'key': "ID"},hashContexts:{'key': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
    data.buffer.push("\n    ");
    return buffer;
    }

    stack1 = helpers['if'].call(depth0, "column.title", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    else { data.buffer.push(''); }
    
  });

});
define('dummy/templates/components/sl-grid-table-row-expander', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, escapeExpression=this.escapeExpression;


    data.buffer.push("<td ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'colspan': ("visibleColumns"),
      'class': (":row-expander-cell")
    },hashTypes:{'colspan': "ID",'class': "STRING"},hashContexts:{'colspan': depth0,'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(">\n    ");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</td>\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-input', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <label ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'for': ("sl-input-view.elementId")
    },hashTypes:{'for': "STRING"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" class=\"control-label\">\n        ");
    stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = helpers['if'].call(depth0, "optional", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = helpers['if'].call(depth0, "required", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </label>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    
    data.buffer.push("\n            <small class=\"text-info\">Optional</small>\n        ");
    }

  function program4(depth0,data) {
    
    
    data.buffer.push("\n            <small class=\"text-danger\">Required</small>\n        ");
    }

  function program6(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <p class=\"help-block\">");
    stack1 = helpers._triageMustache.call(depth0, "helpText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</p>\n");
    return buffer;
    }

    stack1 = helpers['if'].call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'viewName': ("sl-input-view"),
      'type': ("type"),
      'action': ("enter"),
      'class': ("inputClass"),
      'disabled': ("disabled"),
      'placeholder': ("placeholder"),
      'readonly': ("readonly"),
      'value': ("value")
    },hashTypes:{'viewName': "STRING",'type': "ID",'action': "STRING",'class': "ID",'disabled': "ID",'placeholder': "ID",'readonly': "ID",'value': "ID"},hashContexts:{'viewName': depth0,'type': depth0,'action': depth0,'class': depth0,'disabled': depth0,'placeholder': depth0,'readonly': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n\n");
    stack1 = helpers['if'].call(depth0, "helpText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-menu', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <a href=\"#\" ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': ("menu.pages:submenu")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "selected", {hash:{
      'target': ("view"),
      'bubbles': (false)
    },hashTypes:{'target': "STRING",'bubbles': "BOOLEAN"},hashContexts:{'target': depth0,'bubbles': depth0},contexts:[depth0],types:["STRING"],data:data})));
    data.buffer.push(">");
    stack1 = helpers._triageMustache.call(depth0, "view.menu.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</a>\n");
    return buffer;
    }

  function program3(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <ul ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': ("view.isRoot:list-inline")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(">\n        ");
    stack1 = helpers.each.call(depth0, "page", "in", "menu.pages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = helpers['if'].call(depth0, "view.displayShowAll", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </ul>\n");
    return buffer;
    }
  function program4(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n            ");
    data.buffer.push(escapeExpression((helper = helpers['sl-menu'] || (depth0 && depth0['sl-menu']),options={hash:{
      'tagName': ("li"),
      'menuBinding': ("page"),
      'isRoot': (false)
    },hashTypes:{'tagName': "STRING",'menuBinding': "STRING",'isRoot': "BOOLEAN"},hashContexts:{'tagName': depth0,'menuBinding': depth0,'isRoot': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-menu", options))));
    data.buffer.push("\n        ");
    return buffer;
    }

  function program6(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n            ");
    stack1 = helpers.view.call(depth0, "view.AllView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n        ");
    return buffer;
    }
  function program7(depth0,data) {
    
    
    data.buffer.push("\n                <a href=\"#\" class=\"fa fa-chevron-circle-down\" style=\"font-size: 18px;\"></a>\n            ");
    }

    stack1 = helpers['if'].call(depth0, "menu.label", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    stack1 = helpers['if'].call(depth0, "menu.pages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-pagination-controls', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


    data.buffer.push("<span class=\"sl-pagination-links\">\n    <ul class=\"pagination\">\n        <li ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': ("firstLinkDisabled:disabled")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push("><a  ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "changePage", "first", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
    data.buffer.push(" class=\"first-page\" title=\"First page\"><span class=\"fa fa-angle-double-left\"></span></a></li>\n        <li ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': ("prevLinkDisabled:disabled")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" ><a ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "changePage", "prev", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
    data.buffer.push(" class=\"previous-page\" title=\"Previous page\"><span class=\"fa fa-angle-left\"></span></a></li>\n    </ul>\n</span>\n\n<span class=\"sl-pagination-input form-inline\">\n        <div class=\"form-group\">\n            <span>Page</span> ");
    data.buffer.push(escapeExpression((helper = helpers['sl-input'] || (depth0 && depth0['sl-input']),options={hash:{
      'action': ("changePage"),
      'disabled': ("disabled"),
      'value': ("currentPageInput")
    },hashTypes:{'action': "STRING",'disabled': "ID",'value': "ID"},hashContexts:{'action': depth0,'disabled': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-input", options))));
    data.buffer.push(" <span>of ");
    stack1 = helpers._triageMustache.call(depth0, "totalPages", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</span>\n        </div>\n</span>\n\n<span class=\"sl-pagination-links\">\n    <ul class=\"pagination\">\n        <li ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': ("nextLinkDisabled:disabled")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push("><a  ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "changePage", "next", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
    data.buffer.push(" class=\"next-page\" title=\"Next page\"><span class=\"fa fa-angle-right\"></span></a></li>\n        <li ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': ("lastLinkDisabled:disabled")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push("><a ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "changePage", "last", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
    data.buffer.push(" class=\"last-page\" title=\"Last page\"><span class=\"fa fa-angle-double-right\"></span></a></li>\n    </ul>\n</span>\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-pagination-info', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n    ");
    data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
      'key': ("pagingInfo"),
      '$0': ("pagingData.pageFirstRow"),
      '$1': ("pagingData.pageLastRow"),
      '$2': ("pagingData.totalRows"),
      '$3': ("pagingData.modelNames")
    },hashTypes:{'key': "ID",'$0': "ID",'$1': "ID",'$2': "ID",'$3': "ID"},hashContexts:{'key': depth0,'$0': depth0,'$1': depth0,'$2': depth0,'$3': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
    data.buffer.push("\n");
    return buffer;
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n    No data to display\n");
    }

    stack1 = helpers['if'].call(depth0, "pagingData.totalRows", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-pagination-per-page-select', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


    data.buffer.push(escapeExpression((helper = helpers['sl-select'] || (depth0 && depth0['sl-select']),options={hash:{
      'content': ("perPageOptions"),
      'disableSearch': (true),
      'value': ("itemCountPerPage")
    },hashTypes:{'content': "ID",'disableSearch': "BOOLEAN",'value': "ID"},hashContexts:{'content': depth0,'disableSearch': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-select", options))));
    data.buffer.push(" ");
    data.buffer.push(escapeExpression((helper = helpers['sl-translate'] || (depth0 && depth0['sl-translate']),options={hash:{
      'key': ("label")
    },hashTypes:{'key': "ID"},hashContexts:{'key': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-translate", options))));
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-panel', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <div class=\"panel-heading\">");
    stack1 = helpers._triageMustache.call(depth0, "heading", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</div>\n");
    return buffer;
    }

    stack1 = helpers['if'].call(depth0, "heading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n<div class=\"panel-body\">\n    <div class=\"sl-maskable-content\">\n        ");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </div>\n    <div class=\"sl-mask\"></div>\n</div>");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-progress-bar', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n        <span class=\"sl-progress-bar-value\">");
    stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("%</span>\n    ");
    return buffer;
    }

  function program3(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n        <span class=\"sr-only\">");
    stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("% Complete</span>\n    ");
    return buffer;
    }

    data.buffer.push("<div aria-valuemin=\"0\" aria-valuemax=\"100\" ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'aria-valuenow': ("value"),
      'class': (":progress-bar striped:progress-bar-striped animated:active themeClassName"),
      'style': ("styleString")
    },hashTypes:{'aria-valuenow': "ID",'class': "STRING",'style': "ID"},hashContexts:{'aria-valuenow': depth0,'class': depth0,'style': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" role=\"progressbar\">\n    ");
    stack1 = helpers['if'].call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-radio-group', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <label>\n        ");
    stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = helpers['if'].call(depth0, "optional", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = helpers['if'].call(depth0, "required", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </label>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    
    data.buffer.push("\n            <small class=\"text-info\">Optional</small>\n        ");
    }

  function program4(depth0,data) {
    
    
    data.buffer.push("\n            <small class=\"text-danger\">Required</small>\n        ");
    }

    stack1 = helpers['if'].call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-radio', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


    data.buffer.push("<label ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'for': ("sl-radio-view.elementId")
    },hashTypes:{'for': "STRING"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(">\n    ");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'viewName': ("sl-radio-view"),
      'type': ("radio"),
      'disabled': ("disabled"),
      'id': ("inputId"),
      'name': ("name"),
      'readonly': ("readonly"),
      'value': ("value")
    },hashTypes:{'viewName': "STRING",'type': "STRING",'disabled': "ID",'id': "ID",'name': "ID",'readonly': "ID",'value': "ID"},hashContexts:{'viewName': depth0,'type': depth0,'disabled': depth0,'id': depth0,'name': depth0,'readonly': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n\n    ");
    stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</label>\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-select', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <label ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'for': ("sl-select-view.elementId")
    },hashTypes:{'for': "STRING"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" class=\"control-label\">\n        ");
    stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = helpers['if'].call(depth0, "optional", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = helpers['if'].call(depth0, "required", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </label>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    
    data.buffer.push("\n            <small class=\"text-info\">Optional</small>\n        ");
    }

  function program4(depth0,data) {
    
    
    data.buffer.push("\n            <small class=\"text-danger\">Required</small>\n        ");
    }

  function program6(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <p class=\"help-block\">");
    stack1 = helpers._triageMustache.call(depth0, "helpText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</p>\n");
    return buffer;
    }

    stack1 = helpers['if'].call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'viewName': ("sl-select-view"),
      'type': ("hidden"),
      'class': ("form-control"),
      'disabled': ("disabled"),
      'readonly': ("readonly")
    },hashTypes:{'viewName': "STRING",'type': "STRING",'class': "STRING",'disabled': "ID",'readonly': "ID"},hashContexts:{'viewName': depth0,'type': depth0,'class': depth0,'disabled': depth0,'readonly': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n\n");
    stack1 = helpers['if'].call(depth0, "helpText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-span', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var stack1, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    ");
    stack1 = helpers._triageMustache.call(depth0, "sl-loading-icon", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    }

  function program3(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    ");
    stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    }

    stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    else { data.buffer.push(''); }
    
  });

});
define('dummy/templates/components/sl-tab-pane', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n    ");
    data.buffer.push(escapeExpression((helper = helpers['render-tab-pane'] || (depth0 && depth0['render-tab-pane']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "templateName", options) : helperMissing.call(depth0, "render-tab-pane", "templateName", options))));
    data.buffer.push("\n");
    return buffer;
    }

  function program3(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    ");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    }

    stack1 = helpers['if'].call(depth0, "templateName", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-tab-panel', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n        <li ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'class': (":tab tab.active"),
      'data-tab-name': ("tab.name")
    },hashTypes:{'class': "STRING",'data-tab-name': "ID"},hashContexts:{'class': depth0,'data-tab-name': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(">\n            <a ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "change", "tab.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
    data.buffer.push(" role=\"tab\">");
    stack1 = helpers._triageMustache.call(depth0, "tab.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</a>\n        </li>\n    ");
    return buffer;
    }

    data.buffer.push("<ul class=\"nav nav-tabs\" role=\"tablist\">\n    ");
    stack1 = helpers.each.call(depth0, "tab", "in", "tabs", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</ul>\n\n<div class=\"tab-content\">\n    ");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/components/sl-textarea', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <label ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'for': ("sl-textarea-view.elementId")
    },hashTypes:{'for': "STRING"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" class=\"control-label\">\n        ");
    stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = helpers['if'].call(depth0, "optional", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = helpers['if'].call(depth0, "required", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </label>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    
    data.buffer.push("\n            <small class=\"text-info\">Optional</small>\n        ");
    }

  function program4(depth0,data) {
    
    
    data.buffer.push("\n            <small class=\"text-danger\">Required</small>\n        ");
    }

  function program6(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    <p class=\"help-block\">");
    stack1 = helpers._triageMustache.call(depth0, "helpText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</p>\n");
    return buffer;
    }

    stack1 = helpers['if'].call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
      'autofocus': ("autofocus"),
      'class': ("form-control"),
      'cols': ("cols"),
      'disabled': ("disabled"),
      'maxlength': ("maxlength"),
      'placeholder': ("placeholder"),
      'readonly': ("readonly"),
      'rows': ("rows"),
      'selectionDirection': ("selectionDirection"),
      'selectionEnd': ("selectionEnd"),
      'selectionStart': ("selectionStart"),
      'spellcheck': ("spellcheck"),
      'tabindex': ("tabindex"),
      'value': ("value"),
      'viewName': ("sl-textarea-view"),
      'wrap': ("wrap")
    },hashTypes:{'autofocus': "ID",'class': "STRING",'cols': "ID",'disabled': "ID",'maxlength': "ID",'placeholder': "ID",'readonly': "ID",'rows': "ID",'selectionDirection': "ID",'selectionEnd': "ID",'selectionStart': "ID",'spellcheck': "ID",'tabindex': "ID",'value': "ID",'viewName': "STRING",'wrap': "ID"},hashContexts:{'autofocus': depth0,'class': depth0,'cols': depth0,'disabled': depth0,'maxlength': depth0,'placeholder': depth0,'readonly': depth0,'rows': depth0,'selectionDirection': depth0,'selectionEnd': depth0,'selectionStart': depth0,'spellcheck': depth0,'tabindex': depth0,'value': depth0,'viewName': depth0,'wrap': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
    data.buffer.push("\n\n");
    stack1 = helpers['if'].call(depth0, "helpText", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    
    data.buffer.push("sl-alert");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("sl-button");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("sl-calendar");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("sl-chart");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("sl-checkbox");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("sl-date-picker");
    }

  function program13(depth0,data) {
    
    
    data.buffer.push("sl-date-range-picker");
    }

  function program15(depth0,data) {
    
    
    data.buffer.push("sl-date-time");
    }

  function program17(depth0,data) {
    
    
    data.buffer.push("sl-dialog");
    }

  function program19(depth0,data) {
    
    
    data.buffer.push("sl-drop-button");
    }

  function program21(depth0,data) {
    
    
    data.buffer.push("sl-input");
    }

  function program23(depth0,data) {
    
    
    data.buffer.push("sl-grid system");
    }

  function program25(depth0,data) {
    
    
    data.buffer.push("sl-loading-icon");
    }

  function program27(depth0,data) {
    
    
    data.buffer.push("sl-menu");
    }

  function program29(depth0,data) {
    
    
    data.buffer.push("sl-pagination-controls");
    }

  function program31(depth0,data) {
    
    
    data.buffer.push("sl-pagination-info");
    }

  function program33(depth0,data) {
    
    
    data.buffer.push("sl-pagination-per-page-select");
    }

  function program35(depth0,data) {
    
    
    data.buffer.push("sl-panel");
    }

  function program37(depth0,data) {
    
    
    data.buffer.push("sl-progress-bar");
    }

  function program39(depth0,data) {
    
    
    data.buffer.push("sl-radio");
    }

  function program41(depth0,data) {
    
    
    data.buffer.push("sl-radio-group");
    }

  function program43(depth0,data) {
    
    
    data.buffer.push("sl-select");
    }

  function program45(depth0,data) {
    
    
    data.buffer.push("sl-span");
    }

  function program47(depth0,data) {
    
    
    data.buffer.push("sl-tab-panel");
    }

  function program49(depth0,data) {
    
    
    data.buffer.push("sl-textarea");
    }

  function program51(depth0,data) {
    
    
    data.buffer.push("sl-tooltip");
    }

  function program53(depth0,data) {
    
    
    data.buffer.push("sl-grid system docs");
    }

    data.buffer.push("\n<h3>Components</h3>\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-alert", options) : helperMissing.call(depth0, "link-to", "demos.sl-alert", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-button", options) : helperMissing.call(depth0, "link-to", "demos.sl-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-calendar", options) : helperMissing.call(depth0, "link-to", "demos.sl-calendar", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-chart", options) : helperMissing.call(depth0, "link-to", "demos.sl-chart", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-checkbox", options) : helperMissing.call(depth0, "link-to", "demos.sl-checkbox", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-date-picker", options) : helperMissing.call(depth0, "link-to", "demos.sl-date-picker", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-date-range-picker", options) : helperMissing.call(depth0, "link-to", "demos.sl-date-range-picker", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-date-time", options) : helperMissing.call(depth0, "link-to", "demos.sl-date-time", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-dialog", options) : helperMissing.call(depth0, "link-to", "demos.sl-dialog", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-drop-button", options) : helperMissing.call(depth0, "link-to", "demos.sl-drop-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-input", options) : helperMissing.call(depth0, "link-to", "demos.sl-input", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-grid", options) : helperMissing.call(depth0, "link-to", "demos.sl-grid", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-loading-icon", options) : helperMissing.call(depth0, "link-to", "demos.sl-loading-icon", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-menu", options) : helperMissing.call(depth0, "link-to", "demos.sl-menu", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(29, program29, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-pagination-controls", options) : helperMissing.call(depth0, "link-to", "demos.sl-pagination-controls", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(31, program31, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-pagination-info", options) : helperMissing.call(depth0, "link-to", "demos.sl-pagination-info", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(33, program33, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-pagination-per-page-select", options) : helperMissing.call(depth0, "link-to", "demos.sl-pagination-per-page-select", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(35, program35, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-panel", options) : helperMissing.call(depth0, "link-to", "demos.sl-panel", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(37, program37, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-progress-bar", options) : helperMissing.call(depth0, "link-to", "demos.sl-progress-bar", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(39, program39, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-radio", options) : helperMissing.call(depth0, "link-to", "demos.sl-radio", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(41, program41, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-radio-group", options) : helperMissing.call(depth0, "link-to", "demos.sl-radio-group", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(43, program43, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-select", options) : helperMissing.call(depth0, "link-to", "demos.sl-select", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(45, program45, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-span", options) : helperMissing.call(depth0, "link-to", "demos.sl-span", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(47, program47, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-tab-panel", options) : helperMissing.call(depth0, "link-to", "demos.sl-tab-panel", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(49, program49, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-textarea", options) : helperMissing.call(depth0, "link-to", "demos.sl-textarea", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("list-group-item")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(51, program51, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-tooltip", options) : helperMissing.call(depth0, "link-to", "demos.sl-tooltip", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n\n<hr>\n\n<h3>Mixins</h3>\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <h6>sl-ajax-aware</h6>\n        <p>A common use case for this mixin is to initialize particular behaviors during AJAX activity and fall back to\n        other, default, behaviors when no AJAX activity is ongoing.  This is mixed into the <em>sl-button</em> component\n        by default but can be applied to other situations as needed.</p>\n    </div>\n\n    <div class=\"list-group-item\">\n        <h6>sl-grid-controller</h6>\n        <p>A controller should use this mixin when it is being used to back an implementation\n        of the <em>sl-grid system</em>.</p>\n        ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(53, program53, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-grid", options) : helperMissing.call(depth0, "link-to", "demos.sl-grid", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    </div>\n\n    <div class=\"list-group-item\">\n        <h6>sl-grid-key-controller</h6>\n        <p>A controller should use this mixin when it is being used to back an implementation of the <em>sl-grid system</em>\n        component and wishes to bind keyboard events to any of the following supported actions on the <em>sl-grid system</em>\n        component:</p>\n        <ul>\n            <li>navigate to the first page of records</li>\n            <li>navigate to the last page of records</li>\n            <li>navigate to the next page of records</li>\n            <li>navigate to the previous page of records</li>\n            <li>refresh the grid</li>\n        </ul>\n    </div>\n\n    <div class=\"list-group-item\">\n        <h6>sl-modal-manager</h6>\n        <p>Provides an advanced implemention of the modal component.</p>\n        <p>The documentation is viewable at <a href=\"https://github.com/softlayer/sl-ember-components/blob/master/addon/mixins/docs/modal.md\">https://github.com/softlayer/sl-ember-components/blob/master/addon/mixins/docs/modal.md</a></p>\n    </div>\n\n    <div class=\"list-group-item\">\n        <h6>sl-modal</h6>\n        <p>Provides an advanced implemention of the modal component.</p>\n        <p>The documentation is viewable at <a href=\"https://github.com/softlayer/sl-ember-components/blob/master/addon/mixins/docs/modal.md\">https://github.com/softlayer/sl-ember-components/blob/master/addon/mixins/docs/modal.md</a></p>\n    </div>\n\n    <div class=\"list-group-item\">\n        <h6>sl-notify-view</h6>\n        <p>Use this mixin on a view when you need to notify its controller of any of the following events:</p>\n        <ul>\n            <li>didInsertElement</li>\n            <li>willClearRender</li>\n            <li>willDestroyElement</li>\n            <li>willInsertElement</li>\n        </ul>\n    </div>\n\n    <div class=\"list-group-item\">\n        <h6>sl-pagination-controller</h6>\n        <p>Most usually employed by a controller being used to back an implementation of the <em>sl-grid system</em> component, this mixin should be used whenever pagination support for a data set is desired.</p>\n        <p>Requires either the use of <a href=\"https://github.com/softlayer/sl-ember-store\">https://github.com/softlayer/sl-ember-store</a> or the use of a <code>metaData</code> property on your Array Controller's model data for the mixin to work correctly.</p>\n    </div>\n</div>\n\n<hr>\n\n<h3>Helpers</h3>\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <h6>get-key</h6>\n        <p><strong>arguments:</strong> an object, a key, a default key</p>\n        <p>The key is resolved on the object, to be returned.  If it is falsy, and a default key is supplied, the default\n        key is resolved on the object and that result is returned.</p>\n    </div>\n\n    <div class=\"list-group-item\">\n        <h6>render-component</h6>\n        <p><strong>arguments:</strong> component name, optional bound properties</p>\n        <p>Render the component referenced by name. Bound properties can be passed to the component in the normal\n        fashion.</p>\n    </div>\n</div>\n\n<hr>\n\n<h3>Utility Classes</h3>\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <h6>sl-grid-key-adapter</h6>\n        <p>Provides an abstraction between the events the <em>sl-grid system</em> component listens for and the ability to associate\n        any keyboard shortcuts in your application to trigger them.</p>\n    </div>\n\n    <div class=\"list-group-item\">\n        <h6>sl-menu-key-adapter</h6>\n        <p>Provides an abstraction between the events the <em>sl-menu</em> component listens for and the ability to associate\n        any keyboard shortcuts in your application to trigger them.</p>\n    </div>\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-alert', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    
    data.buffer.push("Dismissable info alert");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("Success alert");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("Warning alert");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("Danger alert");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("\n        An action to call when the button is dismissed.\n    ");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("\n        Whether to add a dismiss button.\n    ");
    }

  function program13(depth0,data) {
    
    
    data.buffer.push("\n        Bootstrap contextual color type; \"danger\", \"info\", \"success\", \"warning\".\n    ");
    }

    data.buffer.push("<h2>sl-alert</h2>\n<p class=\"lead\">A message box component for short alert messages. Based on <a href=\"http://getbootstrap.com/javascript/#alerts\">Bootstrap - Alert messages</a>.</p>\n\n<hr>\n\n<h3>Examples</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-alert dismissable=true theme=\"info\"}}\n    Dismissable info alert\n{{/sl-alert}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    stack1 = (helper = helpers['sl-alert'] || (depth0 && depth0['sl-alert']),options={hash:{
      'dismissable': (true),
      'theme': ("info")
    },hashTypes:{'dismissable': "BOOLEAN",'theme': "STRING"},hashContexts:{'dismissable': depth0,'theme': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-alert", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-alert theme=\"success\"}}\n    Success alert\n{{/sl-alert}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    stack1 = (helper = helpers['sl-alert'] || (depth0 && depth0['sl-alert']),options={hash:{
      'theme': ("success")
    },hashTypes:{'theme': "STRING"},hashContexts:{'theme': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-alert", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-alert theme=\"warning\"}}\n    Warning alert\n{{/sl-alert}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    stack1 = (helper = helpers['sl-alert'] || (depth0 && depth0['sl-alert']),options={hash:{
      'theme': ("warning")
    },hashTypes:{'theme': "STRING"},hashContexts:{'theme': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-alert", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-alert theme=\"danger\"}}\n    Danger alert\n{{/sl-alert}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    stack1 = (helper = helpers['sl-alert'] || (depth0 && depth0['sl-alert']),options={hash:{
      'theme': ("danger")
    },hashTypes:{'theme': "STRING"},hashContexts:{'theme': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-alert", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>Mixins used</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <p>sl-tooltip-enabled</p>\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("dismiss"),
      'type': ("string"),
      'requires': ("dismissable=true")
    },hashTypes:{'name': "STRING",'type': "STRING",'requires': "STRING"},hashContexts:{'name': depth0,'type': depth0,'requires': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("dismissable"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("theme"),
      'type': ("string"),
      'default': ("\"info\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-button', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    
    data.buffer.push("Default Button");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("Primary Button");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("Info Button");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("Success Button");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("Warning Button");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("Danger Button");
    }

  function program13(depth0,data) {
    
    
    data.buffer.push("Disabled Button");
    }

  function program15(depth0,data) {
    
    
    data.buffer.push("Hover Button");
    }

  function program17(depth0,data) {
    
    
    data.buffer.push("Link Button");
    }

  function program19(depth0,data) {
    
    
    data.buffer.push("\n        An action to fire when the button is clicked.\n    ");
    }

  function program21(depth0,data) {
    
    
    data.buffer.push("\n        <code>class</code> attribute for the button.\n    ");
    }

  function program23(depth0,data) {
    
    
    data.buffer.push("\n        Whether the button is disabled.\n    ");
    }

  function program25(depth0,data) {
    
    
    data.buffer.push("\n        Text label on the button.\n    ");
    }

  function program27(depth0,data) {
    
    
    data.buffer.push("\n        When true, the button is placed in a pending state, with the <code>pendingLabel</code> value becoming the primary button label text.\n    ");
    }

  function program29(depth0,data) {
    
    
    data.buffer.push("\n        Text to display during associated AJAX activity.\n    ");
    }

  function program31(depth0,data) {
    
    
    data.buffer.push("\n        Popover content string.\n    ");
    }

  function program33(depth0,data) {
    
    
    data.buffer.push("\n        Suffix string of Bootstrap button sizes; \"extra-small\", \"small\", \"medium\" (default) or \"large\".\n    ");
    }

  function program35(depth0,data) {
    
    
    data.buffer.push("\n        Bootstrap contextual style type; \"danger\", \"default\", \"hover\", \"info\", \"link\", \"primary\", \"success\", \"warning\".\n    ");
    }

  function program37(depth0,data) {
    
    
    data.buffer.push("\n        Tooltip text string, or becomes popover title with supplied popover property.\n    ");
    }

    data.buffer.push("<h2>sl-button</h2>\n<p class=\"lead\">An active &lt;button&gt; component. Based on <a href=\"http://getbootstrap.com/css/#buttons\">Bootstrap - Buttons</a>.</p>\n\n<hr>\n\n<h3>Examples</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-button theme=\"default\"}}Default Button{{/sl-button}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        <div>");
    stack1 = (helper = helpers['sl-button'] || (depth0 && depth0['sl-button']),options={hash:{
      'theme': ("default")
    },hashTypes:{'theme': "STRING"},hashContexts:{'theme': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-button theme=\"primary\"}}Primary Button{{/sl-button}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        <div>");
    stack1 = (helper = helpers['sl-button'] || (depth0 && depth0['sl-button']),options={hash:{
      'theme': ("primary")
    },hashTypes:{'theme': "STRING"},hashContexts:{'theme': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-button theme=\"info\"}}Info Button{{/sl-button}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        <div>");
    stack1 = (helper = helpers['sl-button'] || (depth0 && depth0['sl-button']),options={hash:{
      'theme': ("info")
    },hashTypes:{'theme': "STRING"},hashContexts:{'theme': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-button theme=\"success\"}}Success Button{{/sl-button}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        <div>");
    stack1 = (helper = helpers['sl-button'] || (depth0 && depth0['sl-button']),options={hash:{
      'theme': ("success")
    },hashTypes:{'theme': "STRING"},hashContexts:{'theme': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-button theme=\"warning\"}}Warning Button{{/sl-button}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        <div>");
    stack1 = (helper = helpers['sl-button'] || (depth0 && depth0['sl-button']),options={hash:{
      'theme': ("warning")
    },hashTypes:{'theme': "STRING"},hashContexts:{'theme': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-button theme=\"danger\"}}Danger Button{{/sl-button}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        <div>");
    stack1 = (helper = helpers['sl-button'] || (depth0 && depth0['sl-button']),options={hash:{
      'theme': ("danger")
    },hashTypes:{'theme': "STRING"},hashContexts:{'theme': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-button disabled=true}}Disabled Button{{/sl-button}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        <div>");
    stack1 = (helper = helpers['sl-button'] || (depth0 && depth0['sl-button']),options={hash:{
      'disabled': (true)
    },hashTypes:{'disabled': "BOOLEAN"},hashContexts:{'disabled': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-button theme=\"hover\"}}Hover Button{{/sl-button}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        <div>");
    stack1 = (helper = helpers['sl-button'] || (depth0 && depth0['sl-button']),options={hash:{
      'theme': ("hover")
    },hashTypes:{'theme': "STRING"},hashContexts:{'theme': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-button theme=\"link\"}}Link Button{{/sl-button}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        <div>");
    stack1 = (helper = helpers['sl-button'] || (depth0 && depth0['sl-button']),options={hash:{
      'theme': ("link")
    },hashTypes:{'theme': "STRING"},hashContexts:{'theme': depth0},inverse:self.noop,fn:self.program(17, program17, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</div>\n    </div>\n</div>\n\n<hr>\n\n<h3>Mixins used</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <p>sl-tooltip-enabled</p>\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("action"),
      'type': ("function")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(19, program19, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("class"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(21, program21, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("disabled"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(23, program23, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("label"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(25, program25, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("pending"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(27, program27, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("pendingLabel"),
      'type': ("function"),
      'default': ("null"),
      'requires': ("ajaxEnabled=true")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING",'requires': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0,'requires': depth0},inverse:self.noop,fn:self.program(29, program29, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("popover"),
      'type': ("string"),
      'requires': ("title")
    },hashTypes:{'name': "STRING",'type': "STRING",'requires': "STRING"},hashContexts:{'name': depth0,'type': depth0,'requires': depth0},inverse:self.noop,fn:self.program(31, program31, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("size"),
      'type': ("string"),
      'default': ("\"medium\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(33, program33, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("theme"),
      'type': ("string"),
      'default': ("\"default\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(35, program35, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("title"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(37, program37, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-calendar', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n        Action to call when a day is clicked that contains one of the content dates. An array of content objects with dates occurring on the clicked date will be returned to this action.\n    ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        Bound array of objects with date values, looked up using the <code>dateValuePath</code> property.\n    ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n        The month number to display (1-12).\n    ");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("\n        The year to display.\n    ");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("\n        Path to the content objects' date value.\n    ");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("\n        When true, the view is locked in the initial mode, and forward and back buttons are disabled.\n    ");
    }

  function program13(depth0,data) {
    
    
    data.buffer.push("\n        The view to display the calendar in; \"days\", \"months\", or \"years\".\n    ");
    }

    data.buffer.push("<h2>sl-calendar</h2>\n<p class=\"lead\">A standalone calendar to display date values from an array of objects.</p>\n\n<hr>\n\n<h3>Example</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-calendar action=\"alertLabel\" content=content}}</pre>\n\n        <h6>Route/Controller</h6>\n        <pre>model: [\n    {\n        date: new Date(),\n        label: 'Today!'\n    }\n]</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-calendar'] || (depth0 && depth0['sl-calendar']),options={hash:{
      'action': ("alertLabel"),
      'class': ("col-sm-6"),
      'content': ("content")
    },hashTypes:{'action': "STRING",'class': "STRING",'content': "ID"},hashContexts:{'action': depth0,'class': depth0,'content': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-calendar", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("action"),
      'type': ("function")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("content"),
      'type': ("mixed")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("currentMonth"),
      'type': ("number"),
      'default': ("current month")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("currentYear"),
      'type': ("number"),
      'default': ("current year")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("dateValuePath"),
      'type': ("string"),
      'default': ("\"date\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("locked"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("viewMode"),
      'type': ("string"),
      'default': ("\"days\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-chart', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n        An object of options passed directly to Highcharts initialization.\n    ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        Array of series data to bind to the component.\n    ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n        CSS string for the height inline style value.\n    ");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("\n        When true, the chart is masked and a loading icon appears.\n    ");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("\n        The title of the chart's panel.\n    ");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("\n        CSS string for the width inline style value.\n    ");
    }

    data.buffer.push("<h2>sl-chart</h2>\n<p class=\"lead\">A wrapper component for <a href=\"http://www.highcharts.com\">Highcharts</a>.</p>\n<p class=\"lead\">Highcharts is only free for non-commercial use and requires a license for any other use. See\n<a href=\"http://shop.highsoft.com/faq/non-commercial#what-is-commercial-website\">this FAQ page</a> for more information.</p>\n\n<hr>\n\n<h3>Example</h3>\n\n<div class=\"row\">\n    <div class=\"col-sm-6\">\n        <h6>Template</h6>\n        <pre>{{sl-chart\n    options=chartOptions\n    series=content\n    title=\"Fruit Consumption\"\n}}</pre>\n\n        <h6>Controller</h6>\n        <pre>chartOptions: {\n    chart: {\n        type: 'bar'\n    },\n\n    xAxis: {\n        categories: [ 'Apples', 'Bananas', 'Oranges' ]\n    },\n\n    yAxis: {\n        title: {\n            text: 'Fruit Eaten'\n        }\n    }\n}</pre>\n\n        <h6>Route</h6>\n        <pre>content = [\n    {\n        name: 'Jane',\n        data: [ 1, 0, 4 ]\n    }, {\n        name: 'John',\n        data: [ 5, 7, 3 ]\n    }\n]</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-chart'] || (depth0 && depth0['sl-chart']),options={hash:{
      'options': ("chartOptions"),
      'series': ("content"),
      'title': ("Fruit Consumption")
    },hashTypes:{'options': "ID",'series': "ID",'title': "STRING"},hashContexts:{'options': depth0,'series': depth0,'title': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-chart", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("options"),
      'required': (true),
      'type': ("object")
    },hashTypes:{'name': "STRING",'required': "BOOLEAN",'type': "STRING"},hashContexts:{'name': depth0,'required': depth0,'type': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("series"),
      'required': (true),
      'type': ("array")
    },hashTypes:{'name': "STRING",'required': "BOOLEAN",'type': "STRING"},hashContexts:{'name': depth0,'required': depth0,'type': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("height"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("isLoading"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("title"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("width"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-checkbox', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n            <span class=\"label label-success\">Checked!</span>\n        ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        When true, the checkbox is disabled.\n    ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n        Label text to display beside the checkbox.\n    ");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("\n        <code>name</code> attribute value for the input.\n    ");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("\n        Bound value for the checkbox.\n    ");
    }

    data.buffer.push("<h2>sl-checkbox</h2>\n<p class=\"lead\">An improved substitute for the default &lt;input type=\"checkbox&gt; element. See <a href=\"http://getbootstrap.com/css/#forms-controls\">Bootstrap - Supported controls</a> for details.</p>\n\n<hr>\n\n<h3>Example</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-checkbox\n    label=\"Checkbox\"\n    name=\"checkbox\"\n    value=checkboxValue\n}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-checkbox'] || (depth0 && depth0['sl-checkbox']),options={hash:{
      'label': ("Checkbox"),
      'name': ("checkbox"),
      'value': ("checkboxValue")
    },hashTypes:{'label': "STRING",'name': "STRING",'value': "ID"},hashContexts:{'label': depth0,'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-checkbox", options))));
    data.buffer.push("\n\n        ");
    stack1 = helpers['if'].call(depth0, "checkboxValue", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-checkbox\n    disabled=true\n    label=\"Disabled checkbox\"\n}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-checkbox'] || (depth0 && depth0['sl-checkbox']),options={hash:{
      'disabled': (true),
      'label': ("Disabled checkbox")
    },hashTypes:{'disabled': "BOOLEAN",'label': "STRING"},hashContexts:{'disabled': depth0,'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-checkbox", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>Mixins used</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <p>sl-tooltip-enabled</p>\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("disabled"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("label"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("name"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("value"),
      'type': ("mixed")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-date-picker', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n        Action to call when a day is clicked that contains one of the content dates. An array of content objects with dates occurring on the clicked date will be returned to this action.\n    ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        Whether or not to close the datepicker immediately when a date is selected.\n    ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n        When true, show week numbers to the left of the week rows.\n    ");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("\n        When true, displays a \"Clear\" button at the bottom of the datepicker to clear the input value. If <code>autoclose</code> is also set te true, this button will also close the datepicker.\n    ");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("\n        Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday). Multiple values should be comma-separated.\n    ");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("\n        The latest date that may be selected. All later dates will be disabled.\n    ");
    }

  function program13(depth0,data) {
    
    
    data.buffer.push("\n        When true, forces parsing of the input value when the picker is close. That is, when an invalid date is left in the input field by the user, the picker will forcibly parse that value, and set the input's value to the new, valid date, conforming to the given <code>format</code>.\n    ");
    }

  function program15(depth0,data) {
    
    
    data.buffer.push("\n        The date format; combination of d, dd, D, DD, m, mm, M, MM, yy, yyyy\n        <ul>\n            <li>d, dd : Numeric date, no leading zero and leading zero, respectively</li>\n            <li>D, DD : Abbreviated and full weekday names, respectively</li>\n            <li>m, mm : Numeric month, no leading zero and leading zero, respectively</li>\n            <li>M, MM : Abbreviated and full month names, respectively</li>\n            <li>yy, yyyy : 2- and 4-digit years, respectively</li>\n        </ul>\n    ");
    }

  function program17(depth0,data) {
    
    
    data.buffer.push("\n        A list of inputs to be used in a range picker, which will be attached to the selected element. Allows for explicitly creating a range picker on a non-standard element.\n    ");
    }

  function program19(depth0,data) {
    
    
    data.buffer.push("\n        Whether or not to allow date navigation by arrow keys.\n    ");
    }

  function program21(depth0,data) {
    
    
    data.buffer.push("\n        The IETF code of the language to use for month and day names.\n    ");
    }

  function program23(depth0,data) {
    
    
    data.buffer.push("\n        Set a limit for the view mode. Accepts \"days\", \"months\", or \"years\".\n    ");
    }

  function program25(depth0,data) {
    
    
    data.buffer.push("\n        Enable multidate picking. Each date in month view acts as a toggle button, keeping track of which dates the user has selected in order. If a number is given, the picker will limit how many dates can be selected to that number, dropping the oldest dates from the list when the number is exceeded. true equates to no limit. The input’s value (if present) is set to a string generated by joining the dates, formatted, with multidateSeparator.\n    ");
    }

  function program27(depth0,data) {
    
    
    data.buffer.push("\n        A space-separated string consisting of one or two of \"left\" or \"right\", \"top\" or \"bottom\", and \"auto\" (may be omitted). Refers to the location of the picker popup's \"anchor\".\n    ");
    }

  function program29(depth0,data) {
    
    
    data.buffer.push("\n        The earliest date that may be selected. All earlier dates will be disabled.\n    ");
    }

  function program31(depth0,data) {
    
    
    data.buffer.push("\n        The view that the calendar's datepicker should show when created.\n    ");
    }

  function program33(depth0,data) {
    
    
    data.buffer.push("\n        Displays a \"Today\" button at the bottom of the datepicker to select the current date. If true, the \"Today\" button will only move the current date into view. If \"linked\", the current date will also be selected.\n    ");
    }

  function program35(depth0,data) {
    
    
    data.buffer.push("\n        When true, highlight the current date.\n    ");
    }

  function program37(depth0,data) {
    
    
    data.buffer.push("\n        Day of the week to start on. 0 (Sunday) to 6 (Saturday).\n    ");
    }

    data.buffer.push("<h2>sl-date-picker</h2>\n<p class=\"lead\">An input component to select date values. Based on <a href=\"http://bootstrap-datepicker.readthedocs.org/en/release/index.html\">bootstrap-datepicker</a>.</p>\n\n<hr>\n\n<h3>Example</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-date-picker label=\"Date picker\"}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-date-picker'] || (depth0 && depth0['sl-date-picker']),options={hash:{
      'label': ("Date picker")
    },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-date-picker", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>Mixins used</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <p>sl-tooltip-enabled</p>\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("action"),
      'type': ("function")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("autoclose"),
      'type': ("boolean"),
      'default': ("true")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("calendarWeeks"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("clearBtn"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("daysOfWeekDisabled"),
      'type': ("array")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("endDate"),
      'type': ("date")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("forceParse"),
      'type': ("boolean"),
      'default': ("true")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("format"),
      'type': ("string"),
      'default': ("\"mm/dd/yyyy\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("inputs"),
      'type': ("array")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(17, program17, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("keyboardNavigation"),
      'type': ("boolean"),
      'default': ("true")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(19, program19, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("language"),
      'type': ("string"),
      'default': ("\"en\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(21, program21, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("minViewMode"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(23, program23, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("multidate"),
      'type': ("boolean/number"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(25, program25, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("orientation"),
      'type': ("string"),
      'default': ("\"auto\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(27, program27, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("startDate"),
      'type': ("date")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(29, program29, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("startView"),
      'type': ("string"),
      'default': ("\"month\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(31, program31, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("todayBtn"),
      'type': ("boolean/\"linked\""),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(33, program33, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("todayHighlight"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(35, program35, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("weekStart"),
      'type': ("number/string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(37, program37, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-date-range-picker', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

  function program1(depth0,data) {
    
    
    data.buffer.push("sl-date-picker");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        The <code>placeholder</code> attribute text for the end date input.\n    ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n        The binding value for the endDate input.\n    ");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("\n        The latest possible date for the range.\n    ");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("\n        The earliest possible date for the range.\n    ");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("\n        The <code>placeholder</code> attribute text for the start date input.\n    ");
    }

  function program13(depth0,data) {
    
    
    data.buffer.push("\n        The binding value for the startDate input.\n    ");
    }

    data.buffer.push("<h2>sl-date-range-picker</h2>\n<p class=\"lead\">A component to use for date ranges, using two ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-date-picker", options) : helperMissing.call(depth0, "link-to", "demos.sl-date-picker", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push(" components.</p>\n\n<hr>\n\n<h3>Example</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-date-range-picker\n    label=\"Select date range\"\n    startDatePlaceholder=\"Select start date\"\n    endDatePlaceholder=\"Select end date\"\n}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-date-range-picker'] || (depth0 && depth0['sl-date-range-picker']),options={hash:{
      'label': ("Select date range"),
      'startDatePlaceholder': ("Select start date"),
      'endDatePlaceholder': ("Select end date")
    },hashTypes:{'label': "STRING",'startDatePlaceholder': "STRING",'endDatePlaceholder': "STRING"},hashContexts:{'label': depth0,'startDatePlaceholder': depth0,'endDatePlaceholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-date-range-picker", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("endDatePlaceholder"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("endDateValue"),
      'type': ("string"),
      'default': ("null")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("maxDate"),
      'type': ("date/string"),
      'default': ("null")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("minDate"),
      'type': ("date/string"),
      'default': ("null")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("startDatePlaceholder"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("startDateValue"),
      'type': ("string"),
      'default': ("null")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-date-time', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n        The string value for the current timezone name (i.e., \"America/Chicago\").\n    ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        The string format to show the datetime text in. Can be \"date\", \"datetime\", or \"relative\".\n    ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n        The bound date value, parseable by moment.js. If not supplied, the current date and time is used.\n    ");
    }

    data.buffer.push("<h2>sl-date-time</h2>\n<p class=\"lead\">A formattable date and time component with included tooltip.</p>\n\n<hr>\n\n<h3>Examples</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-date-time timezone=\"America/Chicago\"}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Template</h6>\n        <h4>");
    data.buffer.push(escapeExpression((helper = helpers['sl-date-time'] || (depth0 && depth0['sl-date-time']),options={hash:{
      'timezone': ("America/Chicago")
    },hashTypes:{'timezone': "STRING"},hashContexts:{'timezone': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-date-time", options))));
    data.buffer.push("</h4>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-date-time\n    format=\"relative\"\n    timezone=\"America/Chicago\"\n    value=firstDayDate\n}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        <h4>");
    data.buffer.push(escapeExpression((helper = helpers['sl-date-time'] || (depth0 && depth0['sl-date-time']),options={hash:{
      'format': ("relative"),
      'timezone': ("America/Chicago"),
      'value': ("firstDayDate")
    },hashTypes:{'format': "STRING",'timezone': "STRING",'value': "ID"},hashContexts:{'format': depth0,'timezone': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-date-time", options))));
    data.buffer.push("</h4>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-date-time\n    format=\"date\"\n    timezone=\"America/Chicago\"\n    value=threeMonthsAgoDate\n}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        <h4>");
    data.buffer.push(escapeExpression((helper = helpers['sl-date-time'] || (depth0 && depth0['sl-date-time']),options={hash:{
      'format': ("date"),
      'timezone': ("America/Chicago"),
      'value': ("threeMonthsAgoDate")
    },hashTypes:{'format': "STRING",'timezone': "STRING",'value': "ID"},hashContexts:{'format': depth0,'timezone': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-date-time", options))));
    data.buffer.push("</h4>\n    </div>\n</div>\n\n<hr>\n\n<h3>Mixins used</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <p>sl-tooltip-enabled</p>\n    </div>\n</div>\n\n<h3>Properties</h3>\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("timezone"),
      'type': ("string"),
      'required': (true)
    },hashTypes:{'name': "STRING",'type': "STRING",'required': "BOOLEAN"},hashContexts:{'name': depth0,'type': depth0,'required': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("format"),
      'type': ("string"),
      'default': ("\"datetime\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("value"),
      'type': ("mixed"),
      'default': ("now")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-dialog', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n    <p>Hello World!</p>\n");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        Text label for the button.\n    ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n        Bound property to open/show the dialog.\n    ");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("\n        Title text at the top of the dialog window.\n    ");
    }

    data.buffer.push("<h2>sl-dialog</h2>\n<p class=\"lead\">A dialog component used to wrap content in. Based on <a href=\"http://getbootstrap.com/javascript/#modals\">Bootstrap - Modals</a>.</p>\n\n<hr>\n\n<h3>Example</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-dialog\n    show=showModal\n    title=\"Test Dialog\"}}\n    &lt;p&gt;Hello world!&lt;/p&gt;\n{{/sl-dialog}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Click to Show Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-button'] || (depth0 && depth0['sl-button']),options={hash:{
      'action': ("openModal"),
      'label': ("Open Dialog")
    },hashTypes:{'action': "STRING",'label': "STRING"},hashContexts:{'action': depth0,'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-button", options))));
    data.buffer.push("\n    </div>\n</div>\n\n\n");
    stack1 = (helper = helpers['sl-dialog'] || (depth0 && depth0['sl-dialog']),options={hash:{
      'show': ("showModal"),
      'title': ("Test Dialog")
    },hashTypes:{'show': "ID",'title': "STRING"},hashContexts:{'show': depth0,'title': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-dialog", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n<hr>\n\n<h3>Mixins used</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        sl-modal\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("buttonText"),
      'type': ("string"),
      'default': ("\"Close\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("show"),
      'type': ("boolean")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("title"),
      'type': ("string"),
      'default': ("null")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n\n<hr>\n\n<h3>ARIA support</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <h6>role</h6>\n\n        <p>This attribute is automatically rendered as <code>role=\"dialog\"</code></p>\n    </div>\n\n    <div class=\"list-group-item\">\n        <h6>aria-hidden</h6>\n\n        <p>This attribute is automatically rendered and defaults to <code>aria-hidden=\"true\"</code></p>\n    </div>\n\n    <div class=\"list-group-item\">\n        <h6>aria-labelledby</h6>\n\n        <p>Partial automatic support</p>\n\n        <p>This attribute is automatically rendered as <code>aria-labelledby=\"X\"</code>, where <code>X</code> is a string composed of the value <code>modalTitle-</code> followed by a random number.</p>\n\n        <p>This is only part of what is necessary though to achieve support for this ARIA property.  The other part requires you to identify a section of text that serves as the label for this dialog and to give it the same id value assigned to the <code>aria-labelledby</code> attribute.</p>\n\n        <p>To facilitate this, the <code>aria-labelledby</code> property is exposed on this component for use in your template.  <strong>Note:</strong> <a href=\"https://github.com/emberjs/ember.js/issues/4985\">Issue 4985</a> (which was spawned from <a href=\"https://github.com/emberjs/ember.js/issues/2917\">Issue 2987</a>) currently prevents accessing this property as expected or desired.  In order to access it in your template you must use:</p>\n\n        <pre>{{bind-attr id=_view.parentView.aria-labelledby}}</pre>\n\n        <p>where you're having to use the private API property of <code>_view</code></p>\n    </div>\n\n    <div class=\"list-group-item\">\n        <h6>aria-describedby</h6>\n        <p>There is no automatic support for this attribute</p>\n    </div>\n</div>\n\n<h3>ARIA advanced implementation</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <p>If you do not like the idea of having to use a private API property to achieve <code>aria-labelledby</code> support, or are in need of <code>aria-describedby</code> support, then you should use the advanced implemention of the modal component, which is described in detail at <a href=\"https://github.com/softlayer/sl-ember-components/blob/master/addon/mixins/docs/modal.md\">https://github.com/softlayer/sl-ember-components/blob/master/addon/mixins/docs/modal.md</a>.</p>\n    </div>\n</div>");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-drop-button', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n            ");
    data.buffer.push(escapeExpression((helper = helpers['sl-drop-option'] || (depth0 && depth0['sl-drop-option']),options={hash:{
      'action': ("alertRed"),
      'label': ("Red")
    },hashTypes:{'action': "STRING",'label': "STRING"},hashContexts:{'action': depth0,'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-drop-option", options))));
    data.buffer.push("\n            ");
    data.buffer.push(escapeExpression((helper = helpers['sl-drop-option'] || (depth0 && depth0['sl-drop-option']),options={hash:{
      'action': ("alertGreen"),
      'label': ("Green")
    },hashTypes:{'action': "STRING",'label': "STRING"},hashContexts:{'action': depth0,'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-drop-option", options))));
    data.buffer.push("\n            ");
    data.buffer.push(escapeExpression((helper = helpers['sl-drop-option'] || (depth0 && depth0['sl-drop-option']),options={hash:{
      'action': ("alertBlue"),
      'label': ("Blue")
    },hashTypes:{'action': "STRING",'label': "STRING"},hashContexts:{'action': depth0,'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-drop-option", options))));
    data.buffer.push("\n            ");
    stack1 = helpers._triageMustache.call(depth0, "sl-drop-option", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n            ");
    data.buffer.push(escapeExpression((helper = helpers['sl-drop-option'] || (depth0 && depth0['sl-drop-option']),options={hash:{
      'action': ("alertWhite"),
      'label': ("White")
    },hashTypes:{'action': "STRING",'label': "STRING"},hashContexts:{'action': depth0,'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-drop-option", options))));
    data.buffer.push("\n        ");
    return buffer;
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        Aligns the dropdown menu \"left\" or \"right\".\n    ");
    }

  function program5(depth0,data) {
    
    var buffer = '';
    data.buffer.push("\n        An array of hash objects containing the same optional properties as the {{sl-drop-option}} below. Note that currently, the context is different between these two ways of defining drop-button options.\n    ");
    return buffer;
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("\n        Text label for button text.\n    ");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("\n        Suffix string for the Bootstrap button size; \"extra-small\", \"small\", \"medium\" (default), or \"large\".\n    ");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("\n        The theme style string to use for the button; \"default\" or \"hover\".\n    ");
    }

  function program13(depth0,data) {
    
    
    data.buffer.push("\n        Action to fire when the option is clicked.\n    ");
    }

  function program15(depth0,data) {
    
    
    data.buffer.push("\n        Text label for the option in the menu. If this property is omitted, the option becomes a divider.\n    ");
    }

    data.buffer.push("<h2>sl-drop-button</h2>\n<p class=\"lead\">A combination of a button with a drop-down menu, with triggered actions. Utilizes <a href=\"http://getbootstrap.com/javascript/#dropdowns\">Bootstrap - Dropdowns</a>.</p>\n\n<hr>\n\n<h3>Examples</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-drop-button label=\"Select a color\"}}\n    {{sl-drop-option action=\"alertRed\" label=\"Red\"}}\n    {{sl-drop-option action=\"alertGreen\" label=\"Green\"}}\n    {{sl-drop-option action=\"alertBlue\" label=\"Blue\"}}\n    {{sl-drop-option}}\n    {{sl-drop-option action=\"alertWhite\" label=\"White\"}}\n{{/sl-drop-button}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    stack1 = (helper = helpers['sl-drop-button'] || (depth0 && depth0['sl-drop-button']),options={hash:{
      'label': ("Select a color")
    },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-drop-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>Mixins used</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <p>sl-tooltip-enabled</p>\n    </div>\n</div>\n\n<hr>\n\n<h3>sl-drop-button Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("align"),
      'type': ("string"),
      'default': ("\"left\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("content"),
      'type': ("array")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("label"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("size"),
      'type': ("string"),
      'default': ("\"medium\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("theme"),
      'type': ("string"),
      'default': ("\"default\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n\n<hr>\n\n<h3>sl-drop-option Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("action"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("label"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-grid-demo', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n            <div class=\"text-right\">\n            ");
    stack1 = (helper = helpers['sl-button'] || (depth0 && depth0['sl-button']),options={hash:{
      'title': ("Refresh"),
      'action': ("reload")
    },hashTypes:{'title': "STRING",'action': "STRING"},hashContexts:{'title': depth0,'action': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n            ");
    stack1 = (helper = helpers['sl-tooltip'] || (depth0 && depth0['sl-tooltip']),options={hash:{
      'title': ("Configuration")
    },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-tooltip", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n            </div>\n        ");
    return buffer;
    }
  function program2(depth0,data) {
    
    
    data.buffer.push("<i class=\"fa fa-refresh\"></i>");
    }

  function program4(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n                ");
    data.buffer.push(escapeExpression((helper = helpers['sl-grid-header-settings'] || (depth0 && depth0['sl-grid-header-settings']),options={hash:{
      'class': ("btn-group dropdown"),
      'settings': ("options.settingsMenu"),
      'columns': ("columns")
    },hashTypes:{'class': "STRING",'settings': "ID",'columns': "ID"},hashContexts:{'class': depth0,'settings': depth0,'columns': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-grid-header-settings", options))));
    data.buffer.push("\n            ");
    return buffer;
    }

  function program6(depth0,data) {
    
    
    data.buffer.push("\n            <p>An array of column definitions.  This is required in your `gridDefinition`</p>\n        ");
    }

  function program8(depth0,data) {
    
    
    data.buffer.push("\n            <p>Option object holds all of the option settings for your grid</p>\n        ");
    }

  function program10(depth0,data) {
    
    
    data.buffer.push("\n            <p>Option to enable the `rowExpander` functionality.</p>\n            <p>If enabled, specify the `rowExpanderComponent'\n\n            <p>Here is the specification from this demo's `itemController`:\n                <pre>rowExpanderComponent: 'row-expander-content'</pre>\n            </p>\n        ");
    }

  function program12(depth0,data) {
    
    
    data.buffer.push("\n            <p>The grid system makes use of the `sl-translate` service and component.  This object is provided so that you can map the grid's translation keys to your own translation keys.  We have three keys on the `settingsMenu` that need to be translated:</p>\n            <ul>\n                <li>actions</li>\n                <li>columns</li>\n                <li>resetColumnsToDefaults</li>\n            </ul>\n            <p>These keys should be pointed to paths that the `sl-translate` service can translate.</p>\n        ");
    }

  function program14(depth0,data) {
    
    
    data.buffer.push("\n            <p>A path to an icon image to be used in this entry in the actions menu.</p>\n        ");
    }

  function program16(depth0,data) {
    
    
    data.buffer.push("\n            <p>A key that will be used by sl-translate to generate a translated string to display to the user, specifically for this entry in the actions menu.</p>\n        ");
    }

  function program18(depth0,data) {
    
    
    data.buffer.push("\n            <p>The action to invoke on your grid `arrayController`.</p>\n        ");
    }

  function program20(depth0,data) {
    
    
    data.buffer.push("\n            <p>Whether to show the `hideable` column checkboxes in the settings menu</p>\n        ");
    }

  function program22(depth0,data) {
    
    
    data.buffer.push("\n            <p>An optional css class to apply to each cell<p>\n        ");
    }

  function program24(depth0,data) {
    
    
    data.buffer.push("\n            <p>An optional css class to apply to each header cell<p>\n        ");
    }

  function program26(depth0,data) {
    
    
    data.buffer.push("\n            <p>The component to be rendered into each cell in this column.  The default is `sl-grid-table-cell`.</p>\n        ");
    }

  function program28(depth0,data) {
    
    
    data.buffer.push("\n            <p>A key that will be used by sl-translate to generate a translated string to display to the user in the column header</p>\n        ");
    }

  function program30(depth0,data) {
    
    
    data.buffer.push("\n            <p>An integer that specifies the width of this column in pixels.  Setting a column to a fixedWidth will cause it not to be used in the calculations for widthHints</p>\n        ");
    }

  function program32(depth0,data) {
    
    
    data.buffer.push("\n            <p>Whether this column is hideable, requires the settings menu to have `hideableColumns` set to `true`</p>\n        ");
    }

  function program34(depth0,data) {
    
    
    data.buffer.push("\n            <p>The key to the object on this array entry that will be used for this column</p>\n        ");
    }

  function program36(depth0,data) {
    
    
    data.buffer.push("\n            <p>The ember route to link to if you are using the `sl-grid-table-cell-link` component.</p>\n        ");
    }

  function program38(depth0,data) {
    
    
    data.buffer.push("\n            <p>Whether this column's position can be changed by dragging the header.  Defaults to true.  Movable columns can not be dragged past unmovable columns.</p>\n        ");
    }

  function program40(depth0,data) {
    
    
    data.buffer.push("\n            <p>Whether this column is resizable</p>\n        ");
    }

  function program42(depth0,data) {
    
    
    data.buffer.push("\n            <p>Whether this column is sortable</p>\n        ");
    }

  function program44(depth0,data) {
    
    
    data.buffer.push("\n            <p>An integer that will give 'hints' to the table layout for column sizing.  These sizes are relative.  If the first column gets a width hint of `2` and the rest of the columns have width hints of `1` then the first column will initially render with a width twice as large as the rest.  All columns are assumed to have a widthHint of `1` unless they have `fixedWidth` specified.\n        ");
    }

    data.buffer.push("<h2>sl-grid</h2>\n\n<p class=\"lead\">A grid system composed of a partial and multiple components.</p>\n\n<hr>\n\n<h3>Example</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <h6>Template</h6>\n        <pre>\n{{#sl-panel}}\n    &lt;div class=\"text-right\"&gt;\n    {{#sl-button title=\"Refresh\" action=\"reload\"}}&lt;i class=\"fa fa-refresh\"&gt;&lt;/i&gt;{{/sl-button}}\n    {{#sl-tooltip title=\"Configuration\"}}\n        {{sl-grid-header-settings class=\"btn-group dropdown\"\n            settings=options.settingsMenu columns=columns}}\n    {{/sl-tooltip}}\n    &lt;/div&gt;\n{{/sl-panel}}\n{{partial \"sl-grid\"}}\n        </pre>\n    </div>\n\n    <div class=\"col-lg-12\">\n        <h6>Rendered Grid</h6>\n\n        ");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
    if (helper = helpers['sl-panel']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['sl-panel']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['sl-panel']) { stack1 = blockHelperMissing.call(depth0, 'sl-panel', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n        ");
    data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sl-grid", options) : helperMissing.call(depth0, "partial", "sl-grid", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <h6>Features</h6>\n        <ul>\n            <li>Hideable Columns: accessed through the grid settings dropdown</li>\n            <li>Sortable Columns: click a column's header</li>\n            <li>Reorderable Columns: drag a column's header</li>\n            <li>Resizable Columns: drag the space between columns</li>\n            <li>Action Column: dropdown with actions directed to your itemController</li>\n            <li>Row Expander: render a component in a hideable row (per array entry)</li>\n        </ul>\n    </div>\n</div>\n\n<hr>\n\n<h3>Mixins used</h3>\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">sl-grid-controller</div>\n  <div class=\"panel-body\">\n    <p>The sl-grid-controller mixin should be applied to an array controller backed by a model that had `grid-like` data in it.  This mixin makes use of one object `gridDefinition` that will control the presentation of the grid.</p>\n    <p>The `gridDefinition` object has two top-level keys: `options` and `columns`. Options is an object that specifies settings for the grid as a whole.  Column is an array of column definitions for each column in the grid. </p>\n\n    <div class=\"list-group\">\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.columns"),
      'type': ("array"),
      'required': (true)
    },hashTypes:{'name': "STRING",'type': "STRING",'required': "BOOLEAN"},hashContexts:{'name': depth0,'type': depth0,'required': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.options"),
      'required': (true)
    },hashTypes:{'name': "STRING",'required': "BOOLEAN"},hashContexts:{'name': depth0,'required': depth0},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.options.rowExpander"),
      'type': ("boolean")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(10, program10, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.options.settingsMenu.translationKeys"),
      'type': ("object")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(12, program12, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.options.settingsMenu.actions[].icon"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(14, program14, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.options.settingsMenu.actions[].label"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(16, program16, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.options.settingsMenu.actions[].action"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(18, program18, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.options.settingsMenu.hideableColumns"),
      'type': ("boolean")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(20, program20, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.columns[].cssClass"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(22, program22, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.columns[].cssThClass"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(24, program24, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.columns[].component"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(26, program26, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.columns[].defaultText"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(28, program28, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.columns[].fixedWidth"),
      'type': ("number")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(30, program30, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.columns[].hideable"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(32, program32, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.columns[].key"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(34, program34, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.columns[].link"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(36, program36, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.columns[].movable"),
      'type': ("boolean")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(38, program38, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.columns[].resizable"),
      'type': ("boolean")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(40, program40, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.columns[].sortable"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(42, program42, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.columns[].title"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(28, program28, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("gridDefinition.columns[].widthHint"),
      'type': ("number")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(44, program44, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </div>\n\n    <p>Here is the `gridDefinition` from this demo:</p>\n    <pre>\n    gridDefinition: {\n        options: {\n            rowExpander      : true,\n            settingsMenu     : {\n                translationKeys: {\n                    actions: 'ACTIONS',\n                    columns: 'COLUMNS',\n                    resetColumnsToDefaults: 'RESETCOLUMNS'\n                },\n                actions: [\n                    {\n                        label: 'TESTACTION',\n                        action: 'testAction'\n                    }\n                ],\n                hideableColumns: true\n            }\n        },\n        columns: [\n            {\n                component: 'sl-grid-table-cell-row-expander',\n                cssClass: 'sl-grid-table-cell-row-expander',\n                cssThClass: 'sl-grid-table-cell-row-expander',\n                fixedWidth: 30\n            },\n            {\n                key: 'name',\n                title: 'HOSTNAME',\n                defaultText: 'translate.UNKNOWNDEVICE',\n                sortable: true,\n                resizable: true,\n                widthHint: 2\n            },\n            {\n                key: 'ip',\n                title: 'IPADDRESS',\n                sortable: true,\n                hideable: true,\n                resizable: true,\n                widthHint: 1\n            },\n            {\n                key: 'type',\n                title: 'DEVICETYPE',\n                sortable: true,\n                hideable: true,\n                resizable: true,\n                widthHint: 1\n            },\n            {\n                key: 'notes',\n                title: 'NOTES',\n                hideable: true,\n                resizable: true,\n                widthHint: 3\n            },\n            {\n                key: 'fmtProvisionDate',\n                title: 'PROVISIONDATE',\n                hideable: true,\n                resizable: true,\n                widthHint: 1\n            },\n            {\n                cssClass: 'sl-grid-table-cell-actions',\n                cssThClass: 'sl-grid-table-cell-actions',\n                component: 'sl-grid-table-cell-actions',\n                fixedWidth: 120\n            }\n        ]\n    }\n    </pre>\n  </div>\n</div>\n\n<hr>\n\n<h3>Optional Mixin</h3>\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">sl-grid-key-controller</div>\n  <div class=\"panel-body\">\n        <p>A controller using the <em>sl-grid-controller</em> mixin should also use this mixin when it is desired to bind keyboard events to any of the following supported actions on the grid:</p>\n\n        <ul>\n        <li>navigate to the first page of records</li>\n        <li>navigate to the last page of records</li>\n        <li>navigate to the next page of records</li>\n        <li>navigate to the previous page of records</li>\n        <li>refresh the grid</li>\n        </ul>\n  </div>\n</div>\n\n\n<h3>Partials used</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <h6>sl-grid/table</h6>\n        <p>View this partial to get an idea of how the grid layout works.  The grid is an integrated system and most of the components will not work in isolation.</p>\n    </div>\n</div>\n\n<h3>Components used</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <h6>sl-grid-header-settings</h6>\n        <p>One of the few stand-alone components.  Place this component anywhere on the page to give your users access to the options specific to this ArrayController's grid.</p>\n    </div>\n    <div class=\"list-group-item\">\n        <h6>sl-grid-table-cell</h6>\n        <p>The base class for a grid table cell.  Extend this class to implement your own custom components to fit inside a grid table cell.</p>\n    </div>\n    <div class=\"list-group-item\">\n        <h6>sl-grid-table-cell-link</h6>\n        <p>Extends sl-grid-table-cell, provides an ember link to a different route in your app.</p>\n    </div>\n    <div class=\"list-group-item\">\n        <h6>sl-grid-table-cell-row-expander</h6>\n        <p>Used by the grid to show/hide the sl-grid-table-row-expander component.  The <code>gridDefinition.options.rowExpander</code> setting must be set to true in able to use the row-expander.\n    </div>\n    <div class=\"list-group-item\">\n        <h6>sl-grid-table-column-resize</h6>\n        <p>This component enables the dragable resizing of columns</p>\n    </div>\n    <div class=\"list-group-item\">\n        <h6>sl-grid-table-header</h6>\n        <p>This component displays the <code>th</code> table header cell and implements the <code>widthHinting</code> and column reordering functionality.\n    </div>\n    <div class=\"list-group-item\">\n        <h6>sl-grid-table-row-expander</h6>\n        <p>The component that contains the table row that will get shown or hidden if you have the rowExpander functionality enabled.</p>\n    </div>\n</div>");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-input', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n        An action to trigger when the input loses focus.\n    ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        When true, the input field will be styled similarly to inline text, but\n        when clicked will allow editing.\n    ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n        When true, input is disabled.\n    ");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("\n        Text to display below the input element.\n    ");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("\n        String for label text above the input.\n    ");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("\n        When true, the component is styled to reflect optional status. This styling will only be in effect if the <code>label</code> property has also been set.\n    ");
    }

  function program13(depth0,data) {
    
    
    data.buffer.push("\n        <code>placeholder</code> attribute value for the input.\n    ");
    }

  function program15(depth0,data) {
    
    
    data.buffer.push("\n        Popover content text.\n    ");
    }

  function program17(depth0,data) {
    
    
    data.buffer.push("\n        <code>readonly</code> attribute value for the input.\n    ");
    }

  function program19(depth0,data) {
    
    
    data.buffer.push("\n        When true, the component is styled to reflect required status. This styling will only be in effect if the <code>label</code> property has also been set.\n    ");
    }

  function program21(depth0,data) {
    
    
    data.buffer.push("\n        The string lookup for each suggestion's \"name\" value.\n    ");
    }

  function program23(depth0,data) {
    
    
    data.buffer.push("\n        Values to use as typeahead suggestions.\n    ");
    }

  function program25(depth0,data) {
    
    
    data.buffer.push("\n        Tooltip text string, or becomes popover title with supplied popover property.\n    ");
    }

  function program27(depth0,data) {
    
    
    data.buffer.push("\n        <code>type</code> attribute for the input.\n    ");
    }

  function program29(depth0,data) {
    
    
    data.buffer.push("\n        Bound value of the input.\n    ");
    }

    data.buffer.push("<h2>sl-input</h2>\n<p class=\"lead\">A wrapper component for &lt;input&gt;. See <a href=\"http://getbootstrap.com/css/#forms\">Bootstrap - Forms</a> for details.</p>\n\n<hr>\n\n<h3>Examples</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-input\n    label=\"Input with label and helpText\"\n    helpText=\"Help text content goes here\"\n    placeholder=\"Enter some text\"\n}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-input'] || (depth0 && depth0['sl-input']),options={hash:{
      'label': ("Input with label and helpText"),
      'helpText': ("Help text content goes here"),
      'placeholder': ("Enter some text")
    },hashTypes:{'label': "STRING",'helpText': "STRING",'placeholder': "STRING"},hashContexts:{'label': depth0,'helpText': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-input", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-input\n    label=\"Input with typeahead suggestions\"\n    placeholder=\"Enter a color\"\n    suggestions=colors\n    value=colorValue\n}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-input'] || (depth0 && depth0['sl-input']),options={hash:{
      'label': ("Input with typeahead suggestions"),
      'placeholder': ("Enter a color"),
      'suggestions': ("colors"),
      'value': ("colorValue")
    },hashTypes:{'label': "STRING",'placeholder': "STRING",'suggestions': "ID",'value': "ID"},hashContexts:{'label': depth0,'placeholder': depth0,'suggestions': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-input", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-input\n    label=\"Disabled input\"\n    disabled=true\n    placeholder=\"You can't enter anything here\"\n}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-input'] || (depth0 && depth0['sl-input']),options={hash:{
      'label': ("Disabled input"),
      'disabled': (true),
      'placeholder': ("You can't enter anything here")
    },hashTypes:{'label': "STRING",'disabled': "BOOLEAN",'placeholder': "STRING"},hashContexts:{'label': depth0,'disabled': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-input", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-input\n    label=\"Readonly input\"\n    readonly=true\n    value=\"Look but don't touch!\"\n}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-input'] || (depth0 && depth0['sl-input']),options={hash:{
      'label': ("Readonly input"),
      'readonly': (true),
      'value': ("Look but don't touch!")
    },hashTypes:{'label': "STRING",'readonly': "BOOLEAN",'value': "STRING"},hashContexts:{'label': depth0,'readonly': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-input", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-input\n    label=\"Required input\"\n    required=true\n    placeholder=\"You'd better enter something here\"\n}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-input'] || (depth0 && depth0['sl-input']),options={hash:{
      'label': ("Required input"),
      'required': (true),
      'placeholder': ("You'd better enter something here")
    },hashTypes:{'label': "STRING",'required': "BOOLEAN",'placeholder': "STRING"},hashContexts:{'label': depth0,'required': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-input", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-input\n    label=\"Optional input\"\n    optional=true\n    placeholder=\"Meh, whatev\"\n}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-input'] || (depth0 && depth0['sl-input']),options={hash:{
      'label': ("Optional input"),
      'optional': (true),
      'placeholder': ("Meh, whatev")
    },hashTypes:{'label': "STRING",'optional': "BOOLEAN",'placeholder': "STRING"},hashContexts:{'label': depth0,'optional': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-input", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-input\n    clickToEdit=true\n    label=\"Click-to-edit input\"\n    placeholder=\"Enter value\"\n    value=\"Initial value\"\n}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-input'] || (depth0 && depth0['sl-input']),options={hash:{
      'clickToEdit': (true),
      'label': ("Click-to-edit input"),
      'placeholder': ("Enter value"),
      'value': ("Initial value")
    },hashTypes:{'clickToEdit': "BOOLEAN",'label': "STRING",'placeholder': "STRING",'value': "STRING"},hashContexts:{'clickToEdit': depth0,'label': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-input", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>Mixins used</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <p>sl-input-based</p>\n        <p>sl-tooltip-enabled</p>\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("blur"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("clickToEdit"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("disabled"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("helpText"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("label"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("optional"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("placeholder"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("popover"),
      'type': ("string"),
      'requires': ("title")
    },hashTypes:{'name': "STRING",'type': "STRING",'requires': "STRING"},hashContexts:{'name': depth0,'type': depth0,'requires': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("readonly"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(17, program17, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("required"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(19, program19, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("suggestionNamePath"),
      'type': ("string"),
      'default': ("\"name\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(21, program21, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("suggestions"),
      'type': ("array")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(23, program23, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("title"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(25, program25, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("type"),
      'type': ("string"),
      'default': ("\"text\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(27, program27, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("value"),
      'type': ("mixed")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(29, program29, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-loading-icon', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n        When true, a light version of the icon will be used (useful with masks).\n    ");
    }

    data.buffer.push("<h2>sl-loading-icon</h2>\n<p class=\"lead\">A simple loading icon span.</p>\n\n<hr>\n\n<h3>Example</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-loading-icon}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    stack1 = helpers._triageMustache.call(depth0, "sl-loading-icon", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("inverse"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-menu', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n        Used to provide the underlying structure of the entire menu. This expects an Ember.Object with a <code>pages</code> attribute that contains an Ember.Array of other nodes. Each node, including the top level, can have the following attributes:\n        <ul>\n            <li><strong>pages</strong> - An array of nodes that will be embedded under the <code>label</code> attribute as a sub-menu.</li>\n            <li><strong>label</strong> - The label of the menu itself. This should be <em>null</em> for top level menus and will provide the name of the sub-menu for sub-menu lists</li>\n            <li><strong>action</strong> - This can either be a string, which will be received by the <code>actionInitiated</code> binding on the template or can actually be a function that will be executed when the item is selected with either a mouse click or through a keyboard shortcut.</li>\n            <li><strong>route</strong> - This can be used to specify a route to which the application will transition if the menu item is selected.\n            <li><strong>link</strong> - This can be used to specify a link to another page.  This should be used to link to pages outside of the Ember app. </li>\n        </ul>\n        <br>\n        Of the last 3 properties in the list only one will be respected even if multiple are applied.  The order of precedence is <strong>action</strong>, <strong>route</strong>, and then <strong>link</strong>.\n    ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        Handler for string based actions that are associated with a menu item. If a given item has an associated action, the handler bound to the actionInitiated property will be called and the name of the action handed as the only parameter.\n    ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n        Handler for handling the selection of menu items that have a corresponding route property.  Typically, this will be a simple <code>transitionTo</code> or <code>transitionToRoute</code> call.\n    ");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("\n        Used for providing events to the menu. This can be used in conjunction with the <strong>utils/sl-menu-key-adapter</strong> to provide the proper events to support key presses.\n    ");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("\n        Whether the menu is being interacted with via the keyboard.  This value gets set by the inner workings of the component and is exposed for use by view logic.  One example of how to use this value is to be able to use the <code>TAB</code> key to navigate through the menu options, where its default event needs to suppressed while doing so.\n    ");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("\n        Handler for selection events. Handler will be given the full path to the selected node.\n    ");
    }

  function program13(depth0,data) {
    
    
    data.buffer.push("\n        Whether a \"Show All\" icon appears, displaying all of the menu options when interacted with.\n    ");
    }

    data.buffer.push("<h2>sl-menu</h2>\n<p class=\"lead\">A component that can be nested to build complex menu hierarchies.</p>\n\n<hr>\n\n<h3>Example</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-menu\n    actionInitiated=\"actionInitiatedHandler\"\n    changeRoute=\"changeRouteHandler\"\n    keyEventsBinding=\"controller.keyHandler\"\n    keyboardInUseBinding=\"controller.keyboardInUse\"\n    menuBinding=\"controller.content\"\n    selectionMade=\"selectionMadeHandler\"\n    showAll=\"true\"\n}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-menu'] || (depth0 && depth0['sl-menu']),options={hash:{
      'actionInitiated': ("actionInitiatedHandler"),
      'changeRoute': ("changeRouteHandler"),
      'keyEventsBinding': ("controller.keyHandler"),
      'keyboardInUseBinding': ("controller.keyboardInUse"),
      'menuBinding': ("controller.content"),
      'selectionMade': ("selectionMadeHandler"),
      'showAll': ("true")
    },hashTypes:{'actionInitiated': "STRING",'changeRoute': "STRING",'keyEventsBinding': "STRING",'keyboardInUseBinding': "STRING",'menuBinding': "STRING",'selectionMade': "STRING",'showAll': "STRING"},hashContexts:{'actionInitiated': depth0,'changeRoute': depth0,'keyEventsBinding': depth0,'keyboardInUseBinding': depth0,'menuBinding': depth0,'selectionMade': depth0,'showAll': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-menu", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<br>\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <p>In addition to being able to interact with the menu via a mouse, the following keyboard shortcuts can also be used:</p>\n\n        <ul>\n        <li>The numbers 1-4 can be selected to expand the menu option corresponding to its same location in the menu.</li>\n        <li>The numbers 0 can be selected to expand the \"Show All\" menu option.  How this option is visually rendered is a product of the applied CSS, which you can specify.</li>\n        <li>The ESC key can be used to close the expanded menu option.</li>\n        <li>To select an option from the expanded menu follow up your previous numerical selection with the selection of the dash/hyphen key followed by the numerical digit representing the location of the desired option desired in the display.</li>\n        <li>Once a top-level menu option has been selected you can use the TAB key or SHIFT+TAB key combination to cycle forwards and backwards through the menu options.</li>\n        </ul>\n\n        <p>Instructions on how to implement your own keyboard shortcuts can be found further below.</p>\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<ul class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("menu"),
      'required': (true),
      'type': ("object")
    },hashTypes:{'name': "STRING",'required': "BOOLEAN",'type': "STRING"},hashContexts:{'name': depth0,'required': depth0,'type': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("actionInitiated"),
      'type': ("function")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("changeRoute"),
      'type': ("function")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("keyEvents"),
      'type': ("object")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("keyboardInUse"),
      'type': ("boolean")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("selectionMade"),
      'type': ("function")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("showAll"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</ul>\n\n<hr>\n\n<h3>Keyboard Shortcuts</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <h6>Hooks</h6>\n        <p>The <strong>utils/sl-menu-key-adapter</strong> provides the following hooks into the menu component onto which to attach keyboard events:</p>\n\n        <ul>\n        <li>\n            childSelection\n            <ul>\n            <li>Select a menu option</li>\n            </ul>\n        </li>\n        <li>\n            drillDown\n            <ul>\n            <li>Select a sub-menu</li>\n            </ul>\n        </li>\n        <li>\n            cycleRootSelectionNext\n            <ul>\n            <li>Select the next top-level menu option</li>\n            </ul>\n        </li>\n        <li>\n            cycleRootSelectionPrevious\n            <ul>\n            <li>Select the previous top-level menu option</li>\n            </ul>\n        </li>\n        <li>\n            closeAll\n            <ul>\n            <li>Close all menu options</li>\n            </ul>\n        </li>\n        <li>\n            showAll\n            <ul>\n            <li>Show all menu options</li>\n            </ul>\n        </li>\n        </ul>\n    </div>\n\n    <div class=\"list-group-item\">\n        <h6>Code Example</h6>\n\n        <p>The keyboard shortcuts for this demo are configured in <a href=\"https://github.com/softlayer/sl-ember-components/blob/master/tests/dummy/app/views/sl-menu.js\">https://github.com/softlayer/sl-ember-components/blob/master/tests/dummy/app/views/sl-menu.js</a> and <a href=\"https://github.com/softlayer/sl-ember-components/blob/master/tests/dummy/app/controllers/sl-menu.js\">https://github.com/softlayer/sl-ember-components/blob/master/tests/dummy/app/controllers/sl-menu.js</a>, relevant excerpts of which are presented below:</p>\n\n        <p><strong>tests/dummy/app/controllers/sl-menu.js</strong></p>\n<pre>\nimport Ember from 'ember';\nimport KeyManager from 'sl-ember-components/utils/sl-menu-key-adapter';\n\nexport default Ember.ObjectController.extend({\n\n    keyHandler: KeyManager.create(),\n\n    /**\n     * Is the menu being interacted with via the keyboard?\n     *\n     * This value gets set by the inner workings of the component and is exposed for use by view logic\n     *\n     * @param {boolean}\n     */\n    keyboardInUse: null\n});\n</pre>\n\n        <p><strong>tests/dummy/app/views/sl-menu.js</strong></p>\n<pre>\nimport Ember from 'ember';\n\nexport default Ember.View.extend({\n\n    registerKeyListeners: function() {\n        Ember.$( document ).on( 'keypress.menu', function( e ) {\n            if ( e.charCode >= 49 && e.charCode <= 57 ) {\n                var keypressed = e.charCode - 48;\n                this.get( 'controller.keyHandler' ).childSelection( keypressed );\n            } else if ( e.charCode === 45 ) {\n                this.get( 'controller.keyHandler' ).drillDown( '-' );\n            } else if ( e.charCode === 48 ) {\n                this.get( 'controller.keyHandler' ).showAll();\n            }\n        }.bind( this ));\n\n        // keypress doesn't appear to catch ESC\n        Ember.$( document ).on( 'keyup.menu', function( e ) {\n            if ( e.keyCode === 27 ) {\n                this.get( 'controller.keyHandler' ).closeAll();\n            }\n        }.bind( this ));\n\n        // need to capture TAB key with keydown event\n        Ember.$( document ).on( 'keydown.menu', function( e ) {\n            if ( 9 === e.keyCode && this.get( 'controller.keyboardInUse' ) ) {\n                e.preventDefault();\n\n                if ( e.shiftKey ) {\n                    this.get( 'controller.keyHandler' ).cycleRootSelectionPrevious();\n                } else {\n                    this.get( 'controller.keyHandler' ).cycleRootSelectionNext();\n                }\n            }\n        }.bind( this ));\n    }.on( 'didInsertElement' ),\n\n    unregisterKeyListeners: function() {\n        Ember.$( document ).off( 'keypress.menu' ).off( 'keyup.menu' ).off( 'keydown.menu' );\n    }.on( 'willClearRender' )\n\n});\n</pre>\n\n\n    </div>\n</div>");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-pagination-controls', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n        The page number of the currentPage, ex: 1\n    ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        The total number of pages.\n    ");
    }

    data.buffer.push("<h2>sl-pagination-controls</h2>\n<p class=\"lead\">Supplies buttons for changing pages.</p>\n\n<hr>\n\n<h3>Example</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-pagination-controls currentPage=1 totalPages=5}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-pagination-controls'] || (depth0 && depth0['sl-pagination-controls']),options={hash:{
      'currentPage': (1),
      'totalPages': (5)
    },hashTypes:{'currentPage': "INTEGER",'totalPages': "INTEGER"},hashContexts:{'currentPage': depth0,'totalPages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-pagination-controls", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("currentPage"),
      'type': ("number")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("totalPages"),
      'type': ("number")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-pagination-info', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n        An object with the following properties:<br/>\n        <dl class=\"dl-horizontal\">\n            <dt>pageFirstRow</dt>\n            <dd>The index of the first row on this page within the entire list</dd>\n            <dt>pageLastRow</dt>\n            <dd>The index of the last row on this page within the entire list</dd>\n            <dt>totalRows</dt>\n            <dd>The total number of rows for all the pages</dd>\n        </dl>\n    ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        A string with tokens to be translated with the sl-ember-translate component.\n        Should be of the format: \"Viewing {0} to {1} of {2} Items\"\n    ");
    }

    data.buffer.push("<h2>sl-pagination-info</h2>\n<p class=\"lead\">Displays the current page information as a string.</p>\n\n<hr>\n\n<h3>Example</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-pagination-info\n    pagingData=pagingData\n    pagingInfo=translations.label\n}}</pre>\n\n        <h6>Controller</h6>\n        <pre>pagingData: {\n    perPageOptions: [ 25, 50, 100 ],\n    itemCountPerPage: 25,\n    pageFirstRow: 1,\n    pageLastRow: 2,\n    totalRows: 125,\n    modelNames: 'Items'\n}</pre>\n\n        <p>or</op>\n\n        <h6>Array Controller using sl-paginaton-controller Mixin</h6>\n        <pre>import Ember from 'ember';\nimport Paging from 'sl-ember-components/mixins/sl-pagination-controller';\n\nexport default Ember.ArrayController.extend( Paging, {});</pre>\n\n        <p>which also requires the use of <a href=\"https://github.com/softlayer/sl-ember-store\">https://github.com/softlayer/sl-ember-store</a>, or at least a property called <code>metaData</code> on your Array Controller's model data, for the mixin to work correctly.</p>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-pagination-info'] || (depth0 && depth0['sl-pagination-info']),options={hash:{
      'pagingData': ("controllers.pagination.pagingData"),
      'pagingInfo': ("controllers.pagination.translations.label")
    },hashTypes:{'pagingData': "ID",'pagingInfo': "ID"},hashContexts:{'pagingData': depth0,'pagingInfo': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-pagination-info", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>External Dependencies</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <p><a href=\"https://github.com/softlayer/sl-ember-translate\">https://github.com/softlayer/sl-ember-translate</a></p>\n        <p><a href=\"https://github.com/softlayer/sl-ember-store\">https://github.com/softlayer/sl-ember-store</a> (optional)</p>\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("pagingData"),
      'type': ("object")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("pagingInfo"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-pagination-per-page-select', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n        The value of the select box, this value will be observed and changes to it will trigger appropriate changes on the page.\n    ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        Text to be translated using an sl-translate component, ex: English: 'per page'.\n    ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n       Array of numbers for the different item counts per page that can be selected.\n    ");
    }

    data.buffer.push("<h2>sl-pagination-per-page-select</h2>\n<p class=\"lead\">Displays limit number per page, and lets user modify the number.</p>\n\n<hr>\n\n<h3>Example</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-pagination-per-page-select\n    itemCountPerPage=pagingData.itemCountPerPage\n    label=translations.perPage\n    perPageOptions=pagingData.perPageOptions\n}}</pre>\n\n        <h6>Controller</h6>\n        <pre>pagingData: {\n    perPageOptions: [ 25, 50, 100 ],\n    itemCountPerPage: 25,\n    pageFirstRow: 1,\n    pageLastRow: 2,\n    totalRows: 125,\n    modelNames: 'Items'\n}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-pagination-per-page-select'] || (depth0 && depth0['sl-pagination-per-page-select']),options={hash:{
      'itemCountPerPage': ("controllers.pagination.pagingData.itemCountPerPage"),
      'label': ("controllers.pagination.translations.perPage"),
      'perPageOptions': ("controllers.pagination.pagingData.perPageOptions")
    },hashTypes:{'itemCountPerPage': "ID",'label': "ID",'perPageOptions': "ID"},hashContexts:{'itemCountPerPage': depth0,'label': depth0,'perPageOptions': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-pagination-per-page-select", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>External Dependencies</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <p><a href=\"https://github.com/softlayer/sl-ember-translate\">https://github.com/softlayer/sl-ember-translate</a></p>\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("itemCountPerPage"),
      'type': ("number")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("label"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("perPageOptions"),
      'type': ("array")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-panel', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n            <p>Hello world!</p>\n        ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        Text for the panel heading.\n    ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n        When true, the panel body becomes masked and a loading icon appears.\n    ");
    }

    data.buffer.push("<h2>sl-panel</h2>\n<p class=\"lead\">A basic content wrapper for <a href=\"http://getbootstrap.com/components/#panels\">Bootstrap - Panels</a>.</p>\n\n<hr>\n\n<h3>Example</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-panel heading=\"Test Panel\"}}\n    &lt;p&gt;Hello world!&lt;/p&gt;\n{{/sl-panel}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Template</h6>\n        ");
    stack1 = (helper = helpers['sl-panel'] || (depth0 && depth0['sl-panel']),options={hash:{
      'heading': ("Test Panel")
    },hashTypes:{'heading': "STRING"},hashContexts:{'heading': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-panel", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("heading"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("isLoading"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-progress-bar', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n        When true, the striped progress bar will be animated.\n    ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        When true, label text is shown over the bar.\n    ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n        Popover content text.\n    ");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("\n        When true, the progress bar will be striped.\n    ");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("\n        The Bootstrap contextual theme string to style the progress bar with.\n    ");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("\n        Tooltip content text, or popover title text when <code>popover</code> property is set.\n    ");
    }

  function program13(depth0,data) {
    
    
    data.buffer.push("\n        The bound integer value for the progress (1-100).\n    ");
    }

    data.buffer.push("<h2>sl-progress-bar</h2>\n<p class=\"lead\">Component for integer-based progress bar.</p>\n\n<hr>\n\n<h3>Examples</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-progress-bar label=true value=60}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-progress-bar'] || (depth0 && depth0['sl-progress-bar']),options={hash:{
      'label': (true),
      'value': (60)
    },hashTypes:{'label': "BOOLEAN",'value': "INTEGER"},hashContexts:{'label': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-progress-bar", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-progress-bar label=true theme=\"success\" value=40}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-progress-bar'] || (depth0 && depth0['sl-progress-bar']),options={hash:{
      'label': (true),
      'theme': ("success"),
      'value': (40)
    },hashTypes:{'label': "BOOLEAN",'theme': "STRING",'value': "INTEGER"},hashContexts:{'label': depth0,'theme': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-progress-bar", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-progress-bar striped=true theme=\"warning\" value=70}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-progress-bar'] || (depth0 && depth0['sl-progress-bar']),options={hash:{
      'striped': (true),
      'theme': ("warning"),
      'value': (70)
    },hashTypes:{'striped': "BOOLEAN",'theme': "STRING",'value': "INTEGER"},hashContexts:{'striped': depth0,'theme': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-progress-bar", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-progress-bar\n    animated=true\n    label=true\n    striped=true\n    theme=\"danger\"\n    value=90\n}}</pre></div>\n\n<div class=\"col-lg-6\">\n    <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-progress-bar'] || (depth0 && depth0['sl-progress-bar']),options={hash:{
      'animated': (true),
      'label': (true),
      'striped': (true),
      'theme': ("danger"),
      'value': (90)
    },hashTypes:{'animated': "BOOLEAN",'label': "BOOLEAN",'striped': "BOOLEAN",'theme': "STRING",'value': "INTEGER"},hashContexts:{'animated': depth0,'label': depth0,'striped': depth0,'theme': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-progress-bar", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>Mixins used</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        sl-tooltip-enabled\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"group-list\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("animated"),
      'type': ("boolean"),
      'default': ("false"),
      'requires': ("striped=true")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING",'requires': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0,'requires': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("label"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("popover"),
      'type': ("String"),
      'requires': ("title")
    },hashTypes:{'name': "STRING",'type': "STRING",'requires': "STRING"},hashContexts:{'name': depth0,'type': depth0,'requires': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("striped"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("theme"),
      'type': ("string"),
      'default': ("\"default\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("title"),
      'type': ("String")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("value"),
      'type': ("number")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-radio-group', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("sl-radio");
    }

  function program3(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n            ");
    data.buffer.push(escapeExpression((helper = helpers['sl-radio'] || (depth0 && depth0['sl-radio']),options={hash:{
      'label': ("Red"),
      'value': ("red")
    },hashTypes:{'label': "STRING",'value': "STRING"},hashContexts:{'label': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-radio", options))));
    data.buffer.push("\n            ");
    data.buffer.push(escapeExpression((helper = helpers['sl-radio'] || (depth0 && depth0['sl-radio']),options={hash:{
      'label': ("Green"),
      'value': ("green")
    },hashTypes:{'label': "STRING",'value': "STRING"},hashContexts:{'label': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-radio", options))));
    data.buffer.push("\n            ");
    data.buffer.push(escapeExpression((helper = helpers['sl-radio'] || (depth0 && depth0['sl-radio']),options={hash:{
      'label': ("Blue"),
      'value': ("blue")
    },hashTypes:{'label': "STRING",'value': "STRING"},hashContexts:{'label': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-radio", options))));
    data.buffer.push("\n            ");
    data.buffer.push(escapeExpression((helper = helpers['sl-radio'] || (depth0 && depth0['sl-radio']),options={hash:{
      'label': ("Splorge"),
      'disabled': (true)
    },hashTypes:{'label': "STRING",'disabled': "BOOLEAN"},hashContexts:{'label': depth0,'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-radio", options))));
    data.buffer.push("\n        ");
    return buffer;
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n        <p>Shared <code>name</code> attribute for the radio inputs.</p>\n        <p>NOTE: This property will overwrite all child <em>sl-radio</em>s' <code>name</code> values.</p>\n    ");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("\n        <p>When true, all child radio inputs will be disabled.</p>\n        <p>NOTE: When true, this property overrides all child <em>sl-radio</em>s' <code>disabled</code> values.</p>\n    ");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("\n        <p>When true, all child radio inputs will be displayed inline.</p>\n        <p>When false, all child radio inputs will not be displayed inline.</p>\n\n        <p>NOTE: When true or false, this property will overwrite all child <em>sl-radio</em>s' <code>inline</code> values.</p>\n    ");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("\n        Text label for radio group as a whole.\n    ");
    }

  function program13(depth0,data) {
    
    
    data.buffer.push("\n        When true, the component is styled to reflect optional status.  This styling will only be in effect if the <code>label</code> property has also been set.\n    ");
    }

  function program15(depth0,data) {
    
    
    data.buffer.push("\n        <p>Shared <code>readonly</code> attribute value for the child radio inputs.</p>\n        <p>NOTE: When true, this property overrides all child <em>sl-radio</em>s' <code>readonly</code> values.</p>\n    ");
    }

  function program17(depth0,data) {
    
    
    data.buffer.push("\n        When true, the component is styled to reflect required status.  This styling will only be in effect if the <code>label</code> property has also been set.\n    ");
    }

  function program19(depth0,data) {
    
    
    data.buffer.push("\n        Bound value for the radiogroup component.\n    ");
    }

    data.buffer.push("<h2>sl-radio-group</h2>\n<p class=\"lead\">A component that contains a group of \"radio\" type inputs. See <a href=\"http://getbootstrap.com/css/#forms-controls\">Bootstrap - Supported controls</a>.</p>\n\n<p>The <em>sl-radio-group</em> component wraps a number of <em>sl-radio</em> components. See ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos.sl-radio", options) : helperMissing.call(depth0, "link-to", "demos.sl-radio", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push(" for radio-specific options.</p>\n\n<hr>\n\n<h3>Example</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-radio-group\n    label=\"Color selection\"\n    name=\"colorRadio\"\n    value=currentColor\n}}\n    {{sl-radio label=\"Red\" value=\"red\"}}\n    {{sl-radio label=\"Green\" value=\"green\"}}\n    {{sl-radio label=\"Blue\" value=\"blue\"}}\n    {{sl-radio label=\"Splorge\" disabled=true}}\n{{/sl-radio-group}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    stack1 = (helper = helpers['sl-radio-group'] || (depth0 && depth0['sl-radio-group']),options={hash:{
      'label': ("Color selection"),
      'name': ("colorRadio"),
      'value': ("currentColor")
    },hashTypes:{'label': "STRING",'name': "STRING",'value': "ID"},hashContexts:{'label': depth0,'name': depth0,'value': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-radio-group", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n        <h4>Current color: ");
    stack1 = helpers._triageMustache.call(depth0, "currentColor", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</h4>\n    </div>\n</div>\n\n<hr>\n\n<h3>Mixins used</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <p>sl-input-based</p>\n        <p>sl-tooltip-enabled</p>\n    </div>\n</div>\n\n<hr>\n\n<h3>sl-radio-group Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("name"),
      'type': ("string"),
      'required': (true)
    },hashTypes:{'name': "STRING",'type': "STRING",'required': "BOOLEAN"},hashContexts:{'name': depth0,'type': depth0,'required': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("disabled"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("inline"),
      'type': ("boolean"),
      'default': ("null")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("label"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("optional"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("readonly"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("required"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(17, program17, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("value"),
      'type': ("mixed")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(19, program19, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-radio', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n        When true, the radio button will be disabled.\n    ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        Display the radio inputs inline with each other.\n    ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n        Text label for the button.\n    ");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("\n        <code>name</code> attribute value for the button.\n    ");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("\n        When true, the radio button will be readonly.\n    ");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("\n        Bound value for the radio button.\n    ");
    }

    data.buffer.push("<h2>sl-radio</h2>\n<p class=\"lead\">Individual radio button component.</p>\n\n<hr>\n\n<h3>Examples</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-radio label=\"Test radio button\"}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-radio'] || (depth0 && depth0['sl-radio']),options={hash:{
      'label': ("Test radio button")
    },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-radio", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-radio disabled=true label=\"Disabled radio button\"}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-radio'] || (depth0 && depth0['sl-radio']),options={hash:{
      'disabled': (true),
      'label': ("Disabled radio button")
    },hashTypes:{'disabled': "BOOLEAN",'label': "STRING"},hashContexts:{'disabled': depth0,'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-radio", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("disabled"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("inline"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("label"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("name"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("readonly"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("value"),
      'type': ("mixed")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-select', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n        Bound content for the select's options. Each item can be one of the following:\n        <ul>\n            <li>A native value (number, string, etc.) which becomes the option's label and value</li>\n            <li>An object containing values for the option's label, value, and (optional) description. The lookup keys for these values are defined by <code>optionDescriptionPath</code>, <code>optionLabelPath</code>, and <code>optionValuePath</code>.</li>\n        </ul>\n    ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        Disables the search filter.\n    ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n        When true, input is disabled.\n    ");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("\n        Help text to display below the select input.\n    ");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("\n        Text label for the select input.\n    ");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("\n        The maximum number of selections allowed when <code>multiple=true</code>.  By default there is no maximum value enforced.\n    ");
    }

  function program13(depth0,data) {
    
    
    data.buffer.push("\n        Enables multiple selections.\n    ");
    }

  function program15(depth0,data) {
    
    
    data.buffer.push("\n        Option's description field path.\n    ");
    }

  function program17(depth0,data) {
    
    
    data.buffer.push("\n        Option's label field path.\n    ");
    }

  function program19(depth0,data) {
    
    
    data.buffer.push("\n        Option's value field path.\n    ");
    }

  function program21(depth0,data) {
    
    
    data.buffer.push("\n        When true, the component is styled to reflect optional status.  This styling will only be in effect if the <code>label</code> property has also been set.\n    ");
    }

  function program23(depth0,data) {
    
    
    data.buffer.push("\n        <code>placeholder</code> attribute value for the select.\n    ");
    }

  function program25(depth0,data) {
    
    
    data.buffer.push("\n        Popover content text.\n    ");
    }

  function program27(depth0,data) {
    
    
    data.buffer.push("\n        <code>readonly</code> attribute value for the input.\n    ");
    }

  function program29(depth0,data) {
    
    
    data.buffer.push("\n        When true, the component is styled to reflect required status.  This styling will only be in effect if the <code>label</code> property has also been set.\n    ");
    }

  function program31(depth0,data) {
    
    
    data.buffer.push("\n        Tooltip text string, or becomes popover title with supplied popover property.\n    ");
    }

  function program33(depth0,data) {
    
    
    data.buffer.push("\n        Bound value to the selected value.\n    ");
    }

    data.buffer.push("<h2>sl-select</h2>\n<p class=\"lead\">A full-featured select input component. Based on <a href=\"http://ivaynberg.github.io/select2/\">Select2</a>.</p>\n\n<hr>\n\n<h3>Examples</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-select\n    content=content\n    label=\"Single item select\"\n    placeholder=\"Select a color\"\n}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-select'] || (depth0 && depth0['sl-select']),options={hash:{
      'content': ("content"),
      'label': ("Single item select"),
      'placeholder': ("Select a color")
    },hashTypes:{'content': "ID",'label': "STRING",'placeholder': "STRING"},hashContexts:{'content': depth0,'label': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-select", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-select\n    content=numbers\n    disableSearch=true\n    label=\"Multiple number select, no search\"\n    multiple=true\n    placeholder=\"Select number(s)\"\n}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-select'] || (depth0 && depth0['sl-select']),options={hash:{
      'content': ("numbers"),
      'disableSearch': (true),
      'label': ("Multiple number select, no search"),
      'multiple': (true),
      'placeholder': ("Select number(s)")
    },hashTypes:{'content': "ID",'disableSearch': "BOOLEAN",'label': "STRING",'multiple': "BOOLEAN",'placeholder': "STRING"},hashContexts:{'content': depth0,'disableSearch': depth0,'label': depth0,'multiple': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-select", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>Mixins used</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <p>sl-input-based</p>\n        <p>sl-tooltip-enabled</p>\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("content"),
      'required': (true),
      'type': ("array")
    },hashTypes:{'name': "STRING",'required': "BOOLEAN",'type': "STRING"},hashContexts:{'name': depth0,'required': depth0,'type': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("disableSearch"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("disabled"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("helpText"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("label"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("maximumSelectionSize"),
      'type': ("number"),
      'default': ("null")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("multiple"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("optionDescriptionPath"),
      'type': ("string"),
      'default': ("\"description\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("optionLabelPath"),
      'type': ("string"),
      'default': ("\"label\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(17, program17, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("optionValuePath"),
      'type': ("string"),
      'default': ("\"value\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(19, program19, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("optional"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(21, program21, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("placeholder"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(23, program23, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("popover"),
      'type': ("string"),
      'requires': ("title")
    },hashTypes:{'name': "STRING",'type': "STRING",'requires': "STRING"},hashContexts:{'name': depth0,'type': depth0,'requires': depth0},inverse:self.noop,fn:self.program(25, program25, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("readonly"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(27, program27, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("required"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(29, program29, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("title"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(31, program31, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("value"),
      'type': ("mixed")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(33, program33, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-span', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n        The value to display once loaded/ready.\n    ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        The <code>class</code> attribute to apply to the span.\n    ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n        When true, a loading icon will be displayed in place of content.\n    ");
    }

    data.buffer.push("<h2>sl-span</h2>\n<p class=\"lead\">A wrapper to intelligently represent state for inline content.</p>\n\n<hr>\n\n<h3>Example</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>&lt;p&gt;\n    Loads in 5 seconds:&amp;emsp;{{sl-span\n        class=\"text-success\"\n        isLoading=isLoading\n        value=\"Done!\"\n    }}\n&lt;/p&gt;</pre>\n\n    <p>Note: This component does not provide a time-delay mechanism.  The 5 second time delay represented in the example is implemented in the demonstration controller and is employed to emulate the waiting for a promise to be resolved in order to demonstrate the loading state of this component and the final display of the resolved data value.</p>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        <p>Loads in 5 seconds:&emsp;");
    data.buffer.push(escapeExpression((helper = helpers['sl-span'] || (depth0 && depth0['sl-span']),options={hash:{
      'class': ("text-success"),
      'isLoading': ("isLoading"),
      'value': ("Done!")
    },hashTypes:{'class': "STRING",'isLoading': "ID",'value': "STRING"},hashContexts:{'class': depth0,'isLoading': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-span", options))));
    data.buffer.push("</p>\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("value"),
      'type': ("mixed")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("class"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("isLoading"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-tab-panel', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n            ");
    data.buffer.push(escapeExpression((helper = helpers['sl-tab-pane'] || (depth0 && depth0['sl-tab-pane']),options={hash:{
      'label': ("One"),
      'name': ("one"),
      'templateName': ("demos/tabs/one")
    },hashTypes:{'label': "STRING",'name': "STRING",'templateName': "STRING"},hashContexts:{'label': depth0,'name': depth0,'templateName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-tab-pane", options))));
    data.buffer.push("\n            ");
    data.buffer.push(escapeExpression((helper = helpers['sl-tab-pane'] || (depth0 && depth0['sl-tab-pane']),options={hash:{
      'label': ("Two"),
      'name': ("two"),
      'templateName': ("demos/tabs/two")
    },hashTypes:{'label': "STRING",'name': "STRING",'templateName': "STRING"},hashContexts:{'label': depth0,'name': depth0,'templateName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-tab-pane", options))));
    data.buffer.push("\n\n            ");
    stack1 = (helper = helpers['sl-tab-pane'] || (depth0 && depth0['sl-tab-pane']),options={hash:{
      'label': ("Three"),
      'name': ("three")
    },hashTypes:{'label': "STRING",'name': "STRING"},hashContexts:{'label': depth0,'name': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-tab-pane", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n        ");
    return buffer;
    }
  function program2(depth0,data) {
    
    
    data.buffer.push("\n                <p>Content for tab three!</p>\n            ");
    }

  function program4(depth0,data) {
    
    
    data.buffer.push("\n        How to align the tabs, \"left\" or \"right\".\n    ");
    }

  function program6(depth0,data) {
    
    
    data.buffer.push("\n        Name of the initial active tab. This value corresponds to the value set on the <code>name</code> property of the sl-tab-pane component. If omitted, the first tab pane will be open on initialization.\n    ");
    }

  function program8(depth0,data) {
    
    
    data.buffer.push("\n        The text label for the tab pane's tab.\n    ");
    }

  function program10(depth0,data) {
    
    
    data.buffer.push("\n        <p>This value is never displayed in the tabs.</p>\n        <p>Used to set the <code>data-tab-name</code> attribute on the tab and used internally by the component to manage tab selection.</p>\n        <p>The name provided can be specified in the <code>initialTabName</code> property of the sl-tab-panel component to indicate which tab should be active when initially displayed.</p>\n    ");
    }

  function program12(depth0,data) {
    
    
    data.buffer.push("\n        Name of the template to render in the tab pane. If omitted, the component will render content from its block.\n    ");
    }

    data.buffer.push("<h2>sl-tab-panel</h2>\n<p class=\"lead\">A component with selectable tabs and related tab panes. Based on <a href=\"http://getbootstrap.com/javascript/#tabs\">Bootstrap - Togglable tabs</a>.</p>\n\n<hr>\n\n<h3>Examples</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-tab-panel}}\n    {{sl-tab-pane label=\"One\" name=\"one\" templateName=\"demos/tabs/one\"}}\n    {{sl-tab-pane label=\"Two\" name=\"two\" templateName=\"demos/tabs/two\"}}\n\n    {{#sl-tab-pane label=\"Three\" name=\"three\"}}\n        &lt;p&gt;Content for tab three!&lt;/p&gt;\n    {{/sl-tab-pane}}\n{{/sl-tab-panel}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
    if (helper = helpers['sl-tab-panel']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['sl-tab-panel']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['sl-tab-panel']) { stack1 = blockHelperMissing.call(depth0, 'sl-tab-panel', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>sl-tab-panel Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("alignTabs"),
      'type': ("string"),
      'default': ("\"left\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("initialTabName"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n\n<hr>\n\n<h3>sl-tab-pane Properties</h3>\n\n<ul class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("label"),
      'type': ("string"),
      'required': (true)
    },hashTypes:{'name': "STRING",'type': "STRING",'required': "BOOLEAN"},hashContexts:{'name': depth0,'type': depth0,'required': depth0},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("name"),
      'type': ("string"),
      'required': (true)
    },hashTypes:{'name': "STRING",'type': "STRING",'required': "BOOLEAN"},hashContexts:{'name': depth0,'type': depth0,'required': depth0},inverse:self.noop,fn:self.program(10, program10, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("templateName"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(12, program12, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</ul>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-textarea', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n        The <code>autofocus</code> HTML attribute value, passed directly to the underlying &lt;textarea&gt;.\n    ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n        <code>cols</code> attribute value.\n    ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n        When true, the textarea is disabled.\n    ");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("\n        Text to display below the textarea.\n    ");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("\n        String for label text above the input.\n    ");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("\n        <code>maxlength</code> attribute value.\n    ");
    }

  function program13(depth0,data) {
    
    
    data.buffer.push("\n        When true, the component is styled to reflect optional status. This styling will only be in effect if the <code>label</code> property has also been set.\n    ");
    }

  function program15(depth0,data) {
    
    
    data.buffer.push("\n        <code>placeholder</code> attribute value for the textarea.\n    ");
    }

  function program17(depth0,data) {
    
    
    data.buffer.push("\n        Popover content text.\n    ");
    }

  function program19(depth0,data) {
    
    
    data.buffer.push("\n        <code>readonly</code> attribute value for the textarea.\n    ");
    }

  function program21(depth0,data) {
    
    
    data.buffer.push("\n        When true, the component is styled to reflect required status. This styling will only be in effect if the <code>label</code> property has also been set.\n    ");
    }

  function program23(depth0,data) {
    
    
    data.buffer.push("\n        <code>rows</code> attribute value.\n    ");
    }

  function program25(depth0,data) {
    
    
    data.buffer.push("\n        The <code>selectionDirection</code> HTML attribute value, passed directly to the underlying &lt;textarea&gt;. Can be \"forward\", \"backward\", or \"none\".\n    ");
    }

  function program27(depth0,data) {
    
    
    data.buffer.push("\n        The <code>selectionEnd</code> HTML attribute value, passed directly to the underlying &lt;textarea&gt;.\n    ");
    }

  function program29(depth0,data) {
    
    
    data.buffer.push("\n        The <code>selectionStart</code> HTML attribute value, passed directly to the underlying &lt;textarea&gt;.\n    ");
    }

  function program31(depth0,data) {
    
    
    data.buffer.push("\n        The <code>spellcheck</code> HTML attribute value, passed directly to the underlying &lt;textarea&gt;. Can be true, false, or \"default\".\n    ");
    }

  function program33(depth0,data) {
    
    
    data.buffer.push("\n        <code>tabindex</code> attribute value.\n    ");
    }

  function program35(depth0,data) {
    
    
    data.buffer.push("\n        Tooltip text string, or becomes popover title with supplied popover property.\n    ");
    }

  function program37(depth0,data) {
    
    
    data.buffer.push("\n        The <code>wrap</code> HTML attribute value, passed directly to the underlying &lt;textarea&gt;. Can be \"hard\" or \"soft\".\n    ");
    }

  function program39(depth0,data) {
    
    
    data.buffer.push("\n        The bound value of the textarea.\n    ");
    }

    data.buffer.push("<h2>sl-textarea</h2>\n<p class=\"lead\">A Bootstrap-wrapped component based on Ember's textarea helper.</p>\n\n<hr>\n\n<h3>Examples</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-textarea\n    label=\"First textarea\"\n    placeholder=\"Enter some text!\"\n    rows=6\n}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-textarea'] || (depth0 && depth0['sl-textarea']),options={hash:{
      'label': ("First textarea"),
      'placeholder': ("Enter some text!"),
      'rows': (6)
    },hashTypes:{'label': "STRING",'placeholder': "STRING",'rows': "INTEGER"},hashContexts:{'label': depth0,'placeholder': depth0,'rows': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-textarea", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{sl-textarea\n    disabled=true\n    label=\"Second textarea\"\n    placeholder=\"You can't enter anything...\"\n    rows=4\n}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['sl-textarea'] || (depth0 && depth0['sl-textarea']),options={hash:{
      'disabled': (true),
      'label': ("Second textarea"),
      'placeholder': ("You can't enter anything..."),
      'rows': (4)
    },hashTypes:{'disabled': "BOOLEAN",'label': "STRING",'placeholder': "STRING",'rows': "INTEGER"},hashContexts:{'disabled': depth0,'label': depth0,'placeholder': depth0,'rows': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-textarea", options))));
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>Mixins used</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        <p>sl-input-based</p>\n        <p>sl-tooltip-enabled</p>\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("autofocus"),
      'type': ("number"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("cols"),
      'type': ("number/string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("disabled"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("helpText"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("label"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("maxlength"),
      'type': ("number/string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("optional"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("placeholder"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("popover"),
      'type': ("string"),
      'requires': ("title")
    },hashTypes:{'name': "STRING",'type': "STRING",'requires': "STRING"},hashContexts:{'name': depth0,'type': depth0,'requires': depth0},inverse:self.noop,fn:self.program(17, program17, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("readonly"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(19, program19, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("required"),
      'type': ("boolean"),
      'default': ("false")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(21, program21, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("rows"),
      'type': ("number/string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(23, program23, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("selectionDirection"),
      'type': ("string"),
      'default': ("\"forward\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(25, program25, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("selectionEnd"),
      'type': ("number/string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(27, program27, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("selectionStart"),
      'type': ("number/string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(29, program29, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("spellcheck"),
      'type': ("boolean/string"),
      'default': ("\"default\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(31, program31, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("tabindex"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(33, program33, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("title"),
      'type': ("string")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(35, program35, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("wrap"),
      'type': ("string"),
      'default': ("\"soft\"")
    },hashTypes:{'name': "STRING",'type': "STRING",'default': "STRING"},hashContexts:{'name': depth0,'type': depth0,'default': depth0},inverse:self.noop,fn:self.program(37, program37, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("value"),
      'type': ("mixed")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(39, program39, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/sl-tooltip', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    
    data.buffer.push("Tooltip example");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n            Popover example\n        ");
    }

  function program5(depth0,data) {
    
    
    data.buffer.push("\n        Tooltip content text, or popover title text when <code>popover</code> property is set.\n    ");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("\n        Popover content text.\n    ");
    }

    data.buffer.push("<h2>sl-tooltip</h2>\n<p class=\"lead\">A simple component that surrounds content to enable Bootstrap's <a href=\"http://getbootstrap.com/javascript/#tooltips\">tooltip</a> and <a href=\"http://getbootstrap.com/javascript/#popovers\">popover</a> behavior.</p>\n\n<hr>\n\n<h3>Examples</h3>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-tooltip\n    tagName=\"u\"\n    title=\"Tooltip text!\"\n}}\n    Tooltip example\n{{/sl-tooltip}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        <p>");
    stack1 = (helper = helpers['sl-tooltip'] || (depth0 && depth0['sl-tooltip']),options={hash:{
      'tagName': ("u"),
      'title': ("Tooltip text!")
    },hashTypes:{'tagName': "STRING",'title': "STRING"},hashContexts:{'tagName': depth0,'title': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-tooltip", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <h6>Template</h6>\n        <pre>{{#sl-tooltip\n    popover=\"Popover content!\"\n    tagName=\"u\"\n    title=\"Popover title\"\n}}\n    Popover example\n{{/sl-tooltip}}</pre>\n    </div>\n\n    <div class=\"col-lg-6\">\n        <h6>Rendered Component</h6>\n        ");
    stack1 = (helper = helpers['sl-tooltip'] || (depth0 && depth0['sl-tooltip']),options={hash:{
      'popover': ("Popover content!"),
      'tagName': ("u"),
      'title': ("Popover title")
    },hashTypes:{'popover': "STRING",'tagName': "STRING",'title': "STRING"},hashContexts:{'popover': depth0,'tagName': depth0,'title': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-tooltip", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </div>\n</div>\n\n<hr>\n\n<h3>Mixins used</h3>\n\n<div class=\"list-group\">\n    <div class=\"list-group-item\">\n        sl-tooltip-enabled\n    </div>\n</div>\n\n<hr>\n\n<h3>Properties</h3>\n\n<div class=\"list-group\">\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("title"),
      'type': ("String"),
      'required': (true)
    },hashTypes:{'name': "STRING",'type': "STRING",'required': "BOOLEAN"},hashContexts:{'name': depth0,'type': depth0,'required': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    stack1 = (helper = helpers['property-text'] || (depth0 && depth0['property-text']),options={hash:{
      'name': ("popover"),
      'type': ("String")
    },hashTypes:{'name': "STRING",'type': "STRING"},hashContexts:{'name': depth0,'type': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "property-text", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</div>\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/tabs/one', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


    data.buffer.push("<h4>Tab Pane One</h4>\n\n<p>");
    stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</p>\n\n");
    data.buffer.push(escapeExpression((helper = helpers['sl-input'] || (depth0 && depth0['sl-input']),options={hash:{
      'placeholder': ("Enter some text"),
      'value': ("inputText")
    },hashTypes:{'placeholder': "STRING",'value': "ID"},hashContexts:{'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-input", options))));
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/demos/tabs/three', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    


    data.buffer.push("<h4>Tab Pane Three</h4>");
    
  });

});
define('dummy/templates/demos/tabs/two', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    


    data.buffer.push("<h4>Tab Pane Two</h4>");
    
  });

});
define('dummy/templates/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

  function program1(depth0,data) {
    
    
    data.buffer.push("\n            <h3><i class=\"fa fa-cubes fa-4x\"></i></h3>\n            <p><b>Documentation</b></p>\n        ");
    }

  function program3(depth0,data) {
    
    
    data.buffer.push("\n            <h3><i class=\"fa fa-gears fa-4x\"></i></h3>\n            <p><b>Supported Browsers</b></p>\n        ");
    }

    data.buffer.push("<div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n        <h1>sl-ember-components</h1>\n        <p class=\"lead\">An Ember CLI Addon that provides a variety of UI components.</p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <section class=\"col-md-3\">\n        <h4>Components</h4>\n        <ul>\n            <li>alert</li>\n            <li>button</li>\n            <li>calendar</li>\n            <li>chart</li>\n            <li>checkbox</li>\n            <li>date-picker</li>\n            <li>date-range-picker</li>\n            <li>date-time</li>\n            <li>dialog</li>\n            <li>drop-button</li>\n            <li>grid system</li>\n            <li>input</li>\n            <li>loading-icon</li>\n            <li>menu</li>\n            <li>pagination controls</li>\n            <li>panel</li>\n            <li>progress-bar</li>\n            <li>radio</li>\n            <li>radio-group</li>\n            <li>select</li>\n            <li>span</li>\n            <li>tab-panel</li>\n            <li>textarea</li>\n            <li>tooltip</li>\n        </ul>\n    </section>\n\n    <section class=\"col-md-3\">\n        <h4>Mixins</h4>\n        <ul>\n            <li>grid-controller</li>\n            <li>grid-key-controller</li>\n            <li>grid-table-cell-resize</li>\n            <li>input-based</li>\n            <li>modal-manager</li>\n            <li>modal</li>\n            <li>notify-view</li>\n            <li>pagination-controller</li>\n            <li>tooltip-enabled</li>\n        </ul>\n    </section>\n\n    <section class=\"col-md-3\">\n        <h4>Helpers</h4>\n        <ul>\n            <li>get-key</li>\n            <li>render-component</li>\n            <li>render-tab-pane</li>\n            <li>render-template</li>\n        </ul>\n    </section>\n\n    <section class=\"col-md-3\">\n        <h4>Utility Classes</h4>\n        <ul>\n            <li>sl-grid-key-adapter</li>\n            <li>sl-menu-key-adapter</li>\n        </ul>\n    </section>\n</div>\n\n<section>\n    <div class=\"row\">\n        ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("col-md-3 text-center")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demos", options) : helperMissing.call(depth0, "link-to", "demos", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n        ");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
      'class': ("col-md-3 text-center")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "browsers", options) : helperMissing.call(depth0, "link-to", "browsers", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n        <a class=\"col-md-3 text-center\" href=\"https://github.com/softlayer/sl-ember-components/blob/master/README.md\">\n            <h3><i class=\"fa fa-book fa-4x\"></i></h3>\n            <p><b>Additional Documentation</b></p>\n        </a>\n        <a class=\"col-md-3 text-center\" href=\"https://github.com/softlayer/sl-ember-components\">\n            <h3><i class=\"fa fa-github fa-4x\"></i></h3>\n            <p><b>Available on GitHub</b></p>\n        </a>\n    </div>\n</section>\n");
    return buffer;
    
  });

});
define('dummy/templates/sl-grid', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n                ");
    stack1 = helpers.unless.call(depth0, "column.hidden", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n            ");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n                    ");
    data.buffer.push(escapeExpression((helper = helpers['sl-grid-table-header'] || (depth0 && depth0['sl-grid-table-header']),options={hash:{
      'action': ("sortColumn"),
      'column': ("column"),
      'columns': ("columns"),
      'disabled': ("isLoading"),
      'totalWidthHints': ("totalWidthHints"),
      'totalFixedWidths': ("totalFixedWidths"),
      'cssThClass': ("column.cssThClass")
    },hashTypes:{'action': "STRING",'column': "ID",'columns': "ID",'disabled': "ID",'totalWidthHints': "ID",'totalFixedWidths': "ID",'cssThClass': "ID"},hashContexts:{'action': depth0,'column': depth0,'columns': depth0,'disabled': depth0,'totalWidthHints': depth0,'totalFixedWidths': depth0,'cssThClass': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-grid-table-header", options))));
    data.buffer.push(" \n                ");
    return buffer;
    }

  function program4(depth0,data) {
    
    var buffer = '';
    data.buffer.push("\n        <tr>\n            <td ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'colspan': ("visibleColumns"),
      'class': (":shadow-mask")
    },hashTypes:{'colspan': "ID",'class': "STRING"},hashContexts:{'colspan': depth0,'class': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(">&nbsp;\n            </td>\n        </tr>\n    ");
    return buffer;
    }

  function program6(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n        ");
    stack1 = helpers.each.call(depth0, "row", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    return buffer;
    }
  function program7(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n            <tr>\n                ");
    stack1 = helpers.each.call(depth0, "column", "in", "columns", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n            </tr>\n            ");
    stack1 = helpers['if'].call(depth0, "options.rowExpander", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n        ");
    return buffer;
    }
  function program8(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n                    ");
    stack1 = helpers.unless.call(depth0, "column.hidden", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                ");
    return buffer;
    }
  function program9(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n                       ");
    data.buffer.push(escapeExpression((helper = helpers['render-component'] || (depth0 && depth0['render-component']),options={hash:{
      'cssClass': ("column.cssClass"),
      'column': ("column"),
      'row': ("row")
    },hashTypes:{'cssClass': "ID",'column': "ID",'row': "ID"},hashContexts:{'cssClass': depth0,'column': depth0,'row': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "column.component", options) : helperMissing.call(depth0, "render-component", "column.component", options))));
    data.buffer.push("\n                    ");
    return buffer;
    }

  function program11(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n                ");
    stack1 = helpers['if'].call(depth0, "row.rowExpanderIsOpen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n            ");
    return buffer;
    }
  function program12(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n                    ");
    stack1 = (helper = helpers['sl-grid-table-row-expander'] || (depth0 && depth0['sl-grid-table-row-expander']),options={hash:{
      'row': ("row"),
      'visibleColumns': ("visibleColumns")
    },hashTypes:{'row': "ID",'visibleColumns': "ID"},hashContexts:{'row': depth0,'visibleColumns': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sl-grid-table-row-expander", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n                ");
    return buffer;
    }
  function program13(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n                        ");
    data.buffer.push(escapeExpression((helper = helpers['render-component'] || (depth0 && depth0['render-component']),options={hash:{
      'options': ("options"),
      'data': ("row")
    },hashTypes:{'options': "ID",'data': "ID"},hashContexts:{'options': depth0,'data': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "row.rowExpanderComponent", options) : helperMissing.call(depth0, "render-component", "row.rowExpanderComponent", options))));
    data.buffer.push("\n                    ");
    return buffer;
    }

  function program15(depth0,data) {
    
    
    data.buffer.push("\n            <tr>\n                <td colspan=\"3\">No data found</td>\n            </tr>\n        ");
    }

    data.buffer.push("<table class=\"sl-grid table table-striped\">\n    <thead>\n        <tr>\n            ");
    stack1 = helpers.each.call(depth0, "column", "in", "columns", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n        </tr>\n    </thead>\n    <tbody>\n    ");
    stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </tbody>\n</table>\n");
    return buffer;
    
  });

});
define('dummy/templates/sl-modal', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1;


    data.buffer.push("<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        ");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </div>\n</div>");
    return buffer;
    
  });

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/components/demos/row-expander-content.jshint', function () {

  'use strict';

  module('JSHint - components/demos');
  test('components/demos/row-expander-content.js should pass jshint', function() { 
    ok(true, 'components/demos/row-expander-content.js should pass jshint.'); 
  });

});
define('dummy/tests/components/property-text.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/property-text.js should pass jshint', function() { 
    ok(true, 'components/property-text.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/browsers.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/browsers.js should pass jshint', function() { 
    ok(true, 'controllers/browsers.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demos/sl-calendar.jshint', function () {

  'use strict';

  module('JSHint - controllers/demos');
  test('controllers/demos/sl-calendar.js should pass jshint', function() { 
    ok(true, 'controllers/demos/sl-calendar.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demos/sl-chart.jshint', function () {

  'use strict';

  module('JSHint - controllers/demos');
  test('controllers/demos/sl-chart.js should pass jshint', function() { 
    ok(true, 'controllers/demos/sl-chart.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demos/sl-date-time.jshint', function () {

  'use strict';

  module('JSHint - controllers/demos');
  test('controllers/demos/sl-date-time.js should pass jshint', function() { 
    ok(true, 'controllers/demos/sl-date-time.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demos/sl-dialog.jshint', function () {

  'use strict';

  module('JSHint - controllers/demos');
  test('controllers/demos/sl-dialog.js should pass jshint', function() { 
    ok(true, 'controllers/demos/sl-dialog.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demos/sl-drop-button.jshint', function () {

  'use strict';

  module('JSHint - controllers/demos');
  test('controllers/demos/sl-drop-button.js should pass jshint', function() { 
    ok(true, 'controllers/demos/sl-drop-button.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demos/sl-grid-item.jshint', function () {

  'use strict';

  module('JSHint - controllers/demos');
  test('controllers/demos/sl-grid-item.js should pass jshint', function() { 
    ok(true, 'controllers/demos/sl-grid-item.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demos/sl-grid.jshint', function () {

  'use strict';

  module('JSHint - controllers/demos');
  test('controllers/demos/sl-grid.js should pass jshint', function() { 
    ok(true, 'controllers/demos/sl-grid.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demos/sl-input.jshint', function () {

  'use strict';

  module('JSHint - controllers/demos');
  test('controllers/demos/sl-input.js should pass jshint', function() { 
    ok(true, 'controllers/demos/sl-input.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demos/sl-menu.jshint', function () {

  'use strict';

  module('JSHint - controllers/demos');
  test('controllers/demos/sl-menu.js should pass jshint', function() { 
    ok(true, 'controllers/demos/sl-menu.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demos/sl-pagination-info.jshint', function () {

  'use strict';

  module('JSHint - controllers/demos');
  test('controllers/demos/sl-pagination-info.js should pass jshint', function() { 
    ok(true, 'controllers/demos/sl-pagination-info.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demos/sl-pagination-per-page-select.jshint', function () {

  'use strict';

  module('JSHint - controllers/demos');
  test('controllers/demos/sl-pagination-per-page-select.js should pass jshint', function() { 
    ok(true, 'controllers/demos/sl-pagination-per-page-select.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demos/sl-radio-group.jshint', function () {

  'use strict';

  module('JSHint - controllers/demos');
  test('controllers/demos/sl-radio-group.js should pass jshint', function() { 
    ok(true, 'controllers/demos/sl-radio-group.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demos/sl-select.jshint', function () {

  'use strict';

  module('JSHint - controllers/demos');
  test('controllers/demos/sl-select.js should pass jshint', function() { 
    ok(true, 'controllers/demos/sl-select.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demos/sl-span.jshint', function () {

  'use strict';

  module('JSHint - controllers/demos');
  test('controllers/demos/sl-span.js should pass jshint', function() { 
    ok(true, 'controllers/demos/sl-span.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demos/sl-tab-panel.jshint', function () {

  'use strict';

  module('JSHint - controllers/demos');
  test('controllers/demos/sl-tab-panel.js should pass jshint', function() { 
    ok(true, 'controllers/demos/sl-tab-panel.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demos/tabs/home.jshint', function () {

  'use strict';

  module('JSHint - controllers/demos/tabs');
  test('controllers/demos/tabs/home.js should pass jshint', function() { 
    ok(true, 'controllers/demos/tabs/home.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/demos/tabs/one.jshint', function () {

  'use strict';

  module('JSHint - controllers/demos/tabs');
  test('controllers/demos/tabs/one.js should pass jshint', function() { 
    ok(true, 'controllers/demos/tabs/one.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/pagination.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/pagination.js should pass jshint', function() { 
    ok(true, 'controllers/pagination.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/sl/register-test-helpers', ['exports', 'ember', 'dummy/tests/helpers/sl/synchronous'], function (exports, Ember, synchronous) {

    'use strict';

    exports['default'] = function () {
        Ember['default'].Test.registerHelper("contains", synchronous.contains);
        Ember['default'].Test.registerHelper("ajax", synchronous.ajax);
        Ember['default'].Test.registerHelper("requires", synchronous.requires);
    };

});
define('dummy/tests/helpers/sl/synchronous', ['exports', 'dummy/tests/helpers/sl/synchronous/contains', 'dummy/tests/helpers/sl/synchronous/ajax', 'dummy/tests/helpers/sl/synchronous/requires'], function (exports, contains, ajax, requires) {

	'use strict';



	exports.contains = contains['default'];
	exports.ajax = ajax['default'];
	exports.requires = requires['default'];

});
define('dummy/tests/helpers/sl/synchronous/ajax', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var AjaxHelper = function AjaxHelper() {};

    /**
     * Emulate the beginning of an AJAX request
     *
     * @param   {Ember.String} endpoint
     * @returns {void}
     */
    AjaxHelper.prototype.begin = function (endpoint) {
        Ember['default'].run(function () {
            if (endpoint) {
                $(document).trigger("ajaxSend", [null, { url: endpoint }]);
            } else {
                $(document).trigger("ajaxStart");
            }
        });
    };

    /**
     * Emulate the conclusion of an AJAX request
     *
     * @param   {Ember.String} endpoint
     * @returns {void}
     */
    AjaxHelper.prototype.end = function (endpoint) {
        Ember['default'].run(function () {
            if (endpoint) {
                $(document).trigger("ajaxComplete", [null, { url: endpoint }]);
            } else {
                $(document).trigger("ajaxStop");
            }
        });
    };

    var helper = new AjaxHelper();

    exports['default'] = helper;

});
define('dummy/tests/helpers/sl/synchronous/contains', ['exports', 'ember', 'dummy/tests/helpers/sl/utils/utils'], function (exports, Ember, utils) {

    'use strict';

    exports['default'] = function () {
        var index = 3 === arguments.length ? 1 : 0,
            underTest = arguments[index],
            testFor = arguments[index + 1];

        Ember['default'].assert("First non-optional argument must be an array, string or object", "object" === typeof underTest || "string" === typeof underTest || Array.isArray(underTest));

        Ember['default'].assert("Second non-optional argument must be an array, string or object", "object" === typeof testFor || "string" === typeof testFor || Array.isArray(testFor));

        return utils.doArraysIntersect(utils.convertToArray(underTest), utils.convertToArray(testFor));
    };

});
define('dummy/tests/helpers/sl/synchronous/requires', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = function (methodUnderTest, requiredTypes) {
        var typesToTest = {
            number: {
                required: false,
                testValue: 123987465,
                message: "Parameter was a number"
            },
            string: {
                required: false,
                testValue: "testString",
                message: "Parameter was a string"
            },
            array: {
                required: false,
                testValue: [],
                message: "Parameter was an array"
            },
            object: {
                required: false,
                testValue: {},
                message: "Parameter was an object"
            },
            "function": {
                required: false,
                testValue: function testValue() {},
                message: "Parameter was a function"
            },
            undefined: {
                required: false,
                testValue: undefined,
                message: "Parameter was undefined"
            },
            boolean: {
                required: false,
                testValue: true,
                message: "Parameter was a boolean"
            }
        },
            testsThatHaveFailed = [],
            assertionThrown,
            assertionPassed,
            property,
            parameter;

        Ember['default'].assert("First argument must be a function", "function" === typeof methodUnderTest);
        Ember['default'].assert("Second argument must be an array", Array.isArray(requiredTypes));

        // Set required parameter types
        requiredTypes.forEach(function (item) {
            typesToTest[item].required = true;
        });

        // Test each parameter type
        for (property in typesToTest) {
            if (typesToTest.hasOwnProperty(property)) {

                // Reset flag
                assertionThrown = false;

                // Assign cleaner object reference
                parameter = typesToTest[property];

                // Test parameter
                try {
                    methodUnderTest(parameter.testValue);
                } catch (error) {
                    assertionThrown = true;
                }

                assertionPassed = parameter.required ? !assertionThrown : assertionThrown;

                if (!assertionPassed) {
                    testsThatHaveFailed.push(parameter.message);
                }
            }
        }

        return {
            requires: 0 === testsThatHaveFailed.length ? true : false,
            messages: testsThatHaveFailed.join("; ")
        };
    };

});
define('dummy/tests/helpers/sl/utils/utils', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var convertToArray = function convertToArray(underTest) {
        var returnArray;

        if (Array.isArray(underTest)) {
            returnArray = underTest;
        } else {
            switch (typeof underTest) {
                case "string":
                    returnArray = convertStringToArray(underTest);
                    break;

                case "object":
                    returnArray = convertObjectKeysToArray(underTest);
                    break;
            }
        }

        Ember['default'].assert("String, Object or Array must be supplied", "undefined" !== typeof returnArray);

        return returnArray;
    };

    /**
     * Splits a string into an array of individual "words" as delineated by spaces
     *
     * Primarily exists to convert format of call to .prop( 'class' )
     *
     * @function convertStringToArray
     * @param   {string} underTest
     * @throws  {Ember.assert} If argument is not provided or is not a string
     * @returns {array}
     */
    var convertStringToArray = function convertStringToArray(underTest) {

        Ember['default'].assert("String must be supplied", "string" === typeof underTest);

        return underTest.split(" ");
    };

    /**
     * Returns an array containing all of the property names of an object
     *
     * Property names are only extracted from the object provided.  No recursion into nested objects occurs.
     *
     * @function convertObjectKeysToArray
     * @param   {object} underTest
     * @throws  {Ember.assert} If argument is not provided or is not an object
     * @returns {array}
     */
    var convertObjectKeysToArray = function convertObjectKeysToArray(underTest) {

        Ember['default'].assert("Object must be supplied", "object" === typeof underTest && !Array.isArray(underTest));

        return Object.keys(underTest);
    };

    /**
     * [doArraysIntersect description]
     *
     * @function doArraysIntersect
     * @param  {array} underTest
     * @param  {array} testFor
     * @return {boolean}
     */
    var doArraysIntersect = function doArraysIntersect(underTest, testFor) {

        Ember['default'].assert("Parameters must be Arrays", Array.isArray(underTest) && Array.isArray(testFor));

        return testFor.some(function (v) {
            return underTest.indexOf(v) >= 0;
        });
    };

    exports.convertToArray = convertToArray;
    exports.convertStringToArray = convertStringToArray;
    exports.convertObjectKeysToArray = convertObjectKeysToArray;
    exports.doArraysIntersect = doArraysIntersect;

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/tests/helpers/sl/register-test-helpers', 'dummy/app', 'dummy/router', 'dummy/config/environment'], function (exports, Ember, slregisterTestHelpers, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      slregisterTestHelpers['default']();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/routes/application.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/application.js should pass jshint', function() { 
    ok(true, 'routes/application.js should pass jshint.'); 
  });

});
define('dummy/tests/routes/demos/sl-calendar.jshint', function () {

  'use strict';

  module('JSHint - routes/demos');
  test('routes/demos/sl-calendar.js should pass jshint', function() { 
    ok(true, 'routes/demos/sl-calendar.js should pass jshint.'); 
  });

});
define('dummy/tests/routes/demos/sl-chart.jshint', function () {

  'use strict';

  module('JSHint - routes/demos');
  test('routes/demos/sl-chart.js should pass jshint', function() { 
    ok(true, 'routes/demos/sl-chart.js should pass jshint.'); 
  });

});
define('dummy/tests/routes/demos/sl-grid.jshint', function () {

  'use strict';

  module('JSHint - routes/demos');
  test('routes/demos/sl-grid.js should pass jshint', function() { 
    ok(true, 'routes/demos/sl-grid.js should pass jshint.'); 
  });

});
define('dummy/tests/routes/demos/sl-menu.jshint', function () {

  'use strict';

  module('JSHint - routes/demos');
  test('routes/demos/sl-menu.js should pass jshint', function() { 
    ok(true, 'routes/demos/sl-menu.js should pass jshint.'); 
  });

});
define('dummy/tests/routes/demos/sl-select.jshint', function () {

  'use strict';

  module('JSHint - routes/demos');
  test('routes/demos/sl-select.js should pass jshint', function() { 
    ok(true, 'routes/demos/sl-select.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/sl-alert-test', ['ember', 'ember-qunit'], function (Ember, ember_qunit) {

    'use strict';

    ember_qunit.moduleForComponent("sl-alert", "Unit - component: sl-alert");

    ember_qunit.test("ARIA role is applied", function (assert) {
        var $component = this.render();

        assert.equal($component.attr("role"), "alert");
    });

    ember_qunit.test("Dismissable option allows dismissal", function (assert) {
        var component = this.subject({ dismissable: true }),
            $component = this.render();

        assert.ok(component.dismissable === true, "Component is dismissable");
        assert.ok($component.find("button.close"), "Close button is rendered");
        assert.ok($component.hasClass("alert-dismissable"), "Dismissable indicator class is applied");
    });

    ember_qunit.test("Dismiss action is handled", function (assert) {
        var component = this.subject({
            dismiss: "dismiss",
            dismissable: true,

            targetObject: {
                dismiss: function dismiss() {
                    assert.ok(true, "Bound dismiss action fired");
                }
            }
        }),
            $component = this.render();

        $component.find("button.close").trigger("click");
    });

    ember_qunit.test("Theme class is applied", function (assert) {
        var component = this.subject({ theme: "success" }),
            $component = this.render();

        assert.ok($component.hasClass("alert-success"), "Theme class is applied");
    });

});
define('dummy/tests/unit/components/sl-alert-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/sl-alert-test.js should pass jshint', function() { 
    ok(true, 'unit/components/sl-alert-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/sl-button-test', ['ember', 'ember-qunit', 'sl-ember-components/components/sl-button'], function (Ember, ember_qunit, SlButton) {

    'use strict';

    ember_qunit.moduleForComponent("sl-button", "Unit - component: sl-button");

    ember_qunit.test("Label changes for pending state", function (assert) {
        var pendingText = "Pending",
            staticText = "Static",
            component = this.subject({
            pendingLabel: pendingText,
            label: staticText
        }),
            $component = this.render();

        assert.equal(component.get("currentLabel"), staticText);

        Ember['default'].run(function () {
            component.set("pending", true);
        });

        assert.equal(component.get("currentLabel"), pendingText);
    });

    ember_qunit.test("The element fires event when clicked", function (assert) {
        var component = this.subject({
            action: "externalAction",
            targetObject: {
                externalAction: function externalAction() {
                    ok(true, "External action was called");
                }
            }
        }),
            $component = this.render();

        assert.expect(1);
        $component.click();
    });

    ember_qunit.test("Button supports disabled state", function (assert) {
        var component = this.subject(),
            $component = this.render();

        assert.equal($component.is(":disabled"), false);

        Ember['default'].run(function () {
            component.set("disabled", true);
        });

        assert.equal($component.is(":disabled"), true);
    });

    /**
     * While it appears that core Ember functionality is being tested this test is ensuring
     * that the implied contract about which DOM element is rendered is adhered to.
     */
    /*
    test( 'Renders as a button tag', function( assert ) {
    });

    test( 'Expected default classes are applied', function( assert ) {
    });

    test( 'Labels are correctly initialized', function( assert ) {
    });

    test( 'sizeClass() returns correct values', function( assert ) {
    });

    test( 'themeClass() returns correct value', function( assert ) {
    });
    */

});
define('dummy/tests/unit/components/sl-button-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/sl-button-test.js should pass jshint', function() { 
    ok(true, 'unit/components/sl-button-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/sl-dialog-test', ['ember', 'ember-qunit', 'sl-ember-components/mixins/sl-modal'], function (Ember, ember_qunit, ModalMixin) {

    'use strict';

    ember_qunit.moduleForComponent("sl-dialog", "Unit - component: sl-dialog");

    ember_qunit.test("Expected Mixins are present", function (assert) {
        assert.ok(ModalMixin['default'].detect(this.subject()), "Modal Mixin is present");
    });

    ember_qunit.test("\"buttonText\" property defaults to a non-empty string", function (assert) {
        var component = this.subject();

        assert.ok(typeof component.buttonText === "string", "\"buttonText\" must default to a non-empty string");
        assert.ok(component.buttonText.length > 0, "\"buttonText\" must default to a non-empty string");
    });

    ember_qunit.test("\"show\" property defaults to false", function (assert) {
        var component = this.subject();

        assert.ok(component.show === false, "\"show\" should default to false");
    });

    ember_qunit.test("Correct DOM structure is in place", function (assert) {
        var component = this.subject({
            title: "Test Title"
        }),
            $component = this.render();

        assert.equal($component.prop("firstChild").nodeName, "DIV");
        assert.equal($component.prop("firstChild").className, "modal-dialog");
        assert.equal($("div.modal-dialog > div.modal-content").length, 1);
        assert.equal($("div.modal-dialog > div.modal-content > div.modal-header").length, 1);
        assert.equal($("div.modal-dialog > div.modal-content > div.modal-header > button[data-dismiss=\"modal\"]").length, 1);
        //    assert.equal( $('div.modal-dialog > div.modal-content > div.modal-header > button[data-dismiss="modal"] > span[aria-hidden="true"]').text(), 'x' );
        assert.equal($("div.modal-dialog > div.modal-content > div.modal-header > span.modal-title").length, 1);
        assert.equal($("div.modal-dialog > div.modal-content > div.modal-body").length, 1);
        assert.equal($("div.modal-dialog > div.modal-content > div.modal-footer").length, 1);
        assert.equal($("div.modal-dialog > div.modal-content > div.modal-footer > button.btn-primary[data-dismiss=\"modal\"]").length, 1);
    });

    ember_qunit.test("If \"title\" property is not populated, span with \"modal-title\" class is not rendered", function (assert) {
        this.render();

        assert.equal($(".modal-title").length, 0);
    });

    ember_qunit.test("\"title\" is rendered as span with \"modal-title\" class if populated", function (assert) {
        var testTitle = "Test Title",
            component = this.subject({
            title: testTitle
        });

        this.render();

        assert.equal($("span.modal-title").length, 1);
        assert.equal($.trim($(".modal-title").text()), testTitle);
    });

    ember_qunit.test("There are more tests to write", function (assert) {
        assert.expect(0);

        // remaining tests to write:
        // toggle
        // hideHandler
        // close
        // show
        // aria support
    });

});
define('dummy/tests/unit/components/sl-dialog-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/sl-dialog-test.js should pass jshint', function() { 
    ok(true, 'unit/components/sl-dialog-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/sl-grid-table-header-test', ['ember', 'ember-qunit'], function (Ember, ember_qunit) {

    'use strict';

    ember_qunit.moduleForComponent("sl-grid-table-header", "Unit - component: sl-grid-table-header");

    ember_qunit.test("It renders", function (assert) {
        // Create the component instance
        var component = this.subject();
        assert.equal(component._state, "preRender");

        // Render the component to the page
        this.render();
        assert.equal(component._state, "inDOM");
    });

});
define('dummy/tests/unit/components/sl-grid-table-header-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/sl-grid-table-header-test.js should pass jshint', function() { 
    ok(true, 'unit/components/sl-grid-table-header-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/sl-menu-test', ['ember', 'ember-qunit', 'dummy/tests/helpers/start-app', 'sl-ember-components/components/sl-menu'], function (Ember, ember_qunit, startApp, SlMenu) {

    'use strict';

    var clickCounter = 0,
        modelStub = {
        label: null,
        pages: [{ label: "Top Level A", pages: [{ label: "Option A1", action: "MyAction" }, { label: "Option A2", action: function action() {
                    clickCounter = 0;clickCounter++;
                } }, { label: "Option A3", action: { actionName: "MyAction", data: { name: "Joe" } } }, { label: "Sub Menu A3", pages: [{ label: "Sub Sub Menu A3.1" }, { label: "Sub Sub Menu A3.2" }, { label: "Sub Sub Menu A3.3" }, { label: "Sub Sub Menu A3.4" }] }] }, { label: "Top Level B" }, { label: "Top Level C" }]
    },
        App;

    ember_qunit.moduleForComponent("sl-menu", "Unit - component: sl-menu", {
        beforeEach: function beforeEach() {
            App = startApp['default']();
        },

        afterEach: function afterEach() {
            Ember['default'].run(App, App.destroy);
        }
    });

    ember_qunit.test("\"children\" property is an empty array on initialization", function (assert) {
        var component = this.subject();

        this.render();

        assert.equal(Ember['default'].typeOf(component.get("children")), "array", "Is array");
        assert.equal(component.get("children").length, 0, "Array is empty");
    });

    ember_qunit.test("Menu creates correct DOM structure", function (assert) {
        var component = this.subject({ menu: modelStub }),
            $component = this.render();

        assert.equal($component.find("li").length, 11);
    });

    ember_qunit.test("Menu properly hides all but root list", function (assert) {
        var component = this.subject({ menu: modelStub }),
            $component = this.render();

        assert.equal($component.find("li:visible").length, 3);
    });

    ember_qunit.test("Menu shows child on hover", function (assert) {
        var component = this.subject({ menu: modelStub }),
            $component = this.render();

        assert.equal($component.find("li:visible").length, 3);

        $component.find("li:visible").first().mouseenter();
        assert.equal($component.find("li:visible").length, 7);
    });

    ember_qunit.test("Menu closes child on mouse exit", function (assert) {
        var component = this.subject({ menu: modelStub }),
            $component = this.render(),
            child = $component.find("li:visible").first();

        assert.equal($component.find("li:visible").length, 3);

        child.mouseenter();
        assert.equal($component.find("li:visible").length, 7);

        child.mouseleave();
        assert.equal($component.find("li:visible").length, 3);
    });

    ember_qunit.test("Menu click supports native function", function (assert) {
        var component = this.subject({ menu: modelStub }),
            $component = this.render(),
            child = $component.find("li:visible").first(),
            spy = sinon.spy();

        modelStub.pages[0].pages[1].action = spy;

        triggerEvent(child, "mouseenter");
        click(child.find("li:visible")[1]);

        andThen(function () {
            assert.equal(spy.calledOnce, true);
        });
    });

    ember_qunit.test("Menu click supports action names", function (assert) {
        var component = this.subject({ menu: modelStub }),
            $component = this.render(),
            child = $component.find("li:visible").first(),
            spy = sinon.spy(),
            targetObject = {
            actionHandler: spy
        };

        component.set("actionInitiated", "actionHandler");
        component.set("targetObject", targetObject);

        triggerEvent(child, "mouseenter");

        click(child.find("li:visible")[0]);

        andThen(function () {
            assert.equal(spy.args[0][0], "MyAction");
        });
    });

    ember_qunit.test("Menu click supports action names with supporting data", function (assert) {
        var component = this.subject({ menu: modelStub }),
            $component = this.render(),
            child = $component.find("li:visible").first(),
            spy = sinon.spy(),
            targetObject = {
            actionHandler: spy
        };

        component.set("actionInitiated", "actionHandler");
        component.set("targetObject", targetObject);

        triggerEvent(child, "mouseenter");

        click(child.find("li:visible")[2]);

        andThen(function () {
            assert.equal(spy.args[0][0], "MyAction");
            assert.equal(spy.args[0][1].name, "Joe");
        });
    });

    ember_qunit.test("Menu selection fires proper selection event", function (assert) {
        var component = this.subject({ menu: modelStub }),
            $component = this.render(),
            selectionCounter = 0,
            targetObject = {
            selectionHandler: function selectionHandler(path) {
                selectionCounter++;
            }
        },
            child1,
            child2,
            child3;

        component.set("selectionMade", "selectionHandler");
        component.set("targetObject", targetObject);

        child1 = $component.find("li:visible").first();
        child1.trigger("mouseenter");
        child1.trigger("click");

        child2 = child1.find("li:visible").last();
        child2.trigger("mouseenter");
        child2.trigger("click");

        child3 = child2.find("li:visible").first();
        child3.trigger("mouseenter");
        child3.trigger("click");

        assert.equal(selectionCounter, 3);
    });

});
define('dummy/tests/unit/components/sl-menu-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/sl-menu-test.js should pass jshint', function() { 
    ok(true, 'unit/components/sl-menu-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/sl-span-test', ['ember', 'ember-qunit'], function (Ember, ember_qunit) {

    'use strict';

    ember_qunit.moduleForComponent("sl-span", "Unit - component: sl-span");

    ember_qunit.test("\"value\" property is supported", function (assert) {
        var component = this.subject({
            value: "Test content"
        }),
            $component = this.render();

        assert.equal($.trim($component.text()), "Test content");
    });

    ember_qunit.test("If \"isLoading\" is true, sl-loading-icon component is displayed", function (assert) {
        var component = this.subject({
            isLoading: true
        });

        this.render();

        assert.equal(component._childViews[0]._childViews[0].path, "sl-loading-icon");
    });

});
define('dummy/tests/unit/components/sl-span-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/sl-span-test.js should pass jshint', function() { 
    ok(true, 'unit/components/sl-span-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/sl-tab-pane-test', ['ember', 'ember-qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/sl/synchronous'], function (Ember, ember_qunit, startApp, synchronous) {

    'use strict';

    var App;

    ember_qunit.moduleForComponent("sl-tab-pane", "Unit - component: sl-tab-pane", {
        needs: ["component:sl-tab-panel"],

        beforeEach: function beforeEach() {
            App = startApp['default']();
        },

        afterEach: function afterEach() {
            Ember['default'].run(App, App.destroy);
        }
    });

    ember_qunit.test("Expected default classes are applied", function (assert) {
        var $component = this.render();

        assert.ok(synchronous.contains($component.prop("class"), ["sl-tab-pane", "tab-pane"]), "Default classes are not correctly applied");
    });

    ember_qunit.test("\"data-tab-label\" attribute gets set as expected", function (assert) {
        var component = this.subject({
            label: "Test Label"
        });

        this.render();

        assert.equal($(".sl-tab-pane[data-tab-label=\"Test Label\"]").length, 1);
    });

    ember_qunit.test("\"data-tab-name\" attribute gets set as expected", function (assert) {
        var component = this.subject({
            name: "Test Name"
        });

        this.render();

        assert.equal($(".sl-tab-pane[data-tab-name=\"Test Name\"]").length, 1);
    });

    ember_qunit.test("Can provide content in block form", function (assert) {
        var component = this.subject({
            template: Ember['default'].Handlebars.compile("{{#sl-tab-panel}}" + "    {{#sl-tab-pane label=\"A\" name=\"a\"}}A content{{/sl-tab-pane}}" + "    {{#sl-tab-pane label=\"B\" name=\"b\"}}B content{{/sl-tab-pane}}" + "{{/sl-tab-panel}}")
        });

        this.render();

        equal($.trim($(".sl-tab-pane[data-tab-name=\"b\"]").text()), "B content");
    });

    ember_qunit.test("Can provide content via \"templateName\" property", function (assert) {
        var component = this.subject({
            template: Ember['default'].Handlebars.compile("{{#sl-tab-panel}}" + "    {{#sl-tab-pane label=\"A\" name=\"a\"}}A content{{/sl-tab-pane}}" + "    {{sl-tab-pane label=\"B\" name=\"b\" templateName=\"tabtest\"}}" + "{{/sl-tab-panel}}")
        });

        App.__container__.register("template:tabtest", Ember['default'].Handlebars.compile("B template content"));
        App.__container__.register("view:tabtest", Ember['default'].View.extend());
        component.container = App.__container__;

        this.render();

        assert.equal($.trim($(".sl-tab-pane[data-tab-name=\"b\"]").text()), "B template content");
    });

});
define('dummy/tests/unit/components/sl-tab-pane-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/sl-tab-pane-test.js should pass jshint', function() { 
    ok(true, 'unit/components/sl-tab-pane-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/sl-tab-panel-test', ['ember', 'ember-qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/sl/synchronous'], function (Ember, ember_qunit, startApp, synchronous) {

    'use strict';

    var App;

    ember_qunit.moduleForComponent("sl-tab-panel", "Unit - component: sl-tab-panel", {
        needs: ["component:sl-tab-pane"],

        beforeEach: function beforeEach() {
            App = startApp['default']();
        },

        afterEach: function afterEach() {
            Ember['default'].run(App, App.destroy);
        }
    });

    ember_qunit.test("Expected default classes are applied", function (assert) {
        var $component = this.render();

        assert.ok(synchronous.contains($component.prop("class"), ["sl-tab-panel", "sl-align-tabs-left"]), "Default classes are not correctly applied");
    });

    ember_qunit.test("setupTabs() does so correctly", function (assert) {
        var component = this.subject({
            template: Ember['default'].Handlebars.compile("{{#sl-tab-pane label=\"A\" name=\"a\"}}A content{{/sl-tab-pane}}" + "{{#sl-tab-pane label=\"B\" name=\"b\"}}B content{{/sl-tab-pane}}" + "{{#sl-tab-pane label=\"C\" name=\"c\"}}C content{{/sl-tab-pane}}")
        });

        assert.expect(5);
        this.render();
        stop();

        component.paneFor("a").queue(function () {
            // All tabs are rendered
            assert.equal($(".tab[data-tab-name]").length, 3);

            // Tab content is rendered
            assert.equal($(".sl-tab-pane[data-tab-name]").length, 3);
            assert.equal($.trim($(".sl-tab-pane[data-tab-name=\"b\"]").text()), "B content");

            // First tab is active
            assert.equal($(".tab.active[data-tab-name=\"a\"]").length, 1);
            assert.equal($(".sl-tab-pane.active[data-tab-name=\"a\"]").length, 1);

            start();
        });
    });

    ember_qunit.test("ARIA roles are implemented", function (assert) {
        var component = this.subject({
            template: Ember['default'].Handlebars.compile("{{#sl-tab-pane label=\"A\" name=\"a\"}}A content{{/sl-tab-pane}}" + "{{#sl-tab-pane label=\"B\" name=\"b\"}}B content{{/sl-tab-pane}}" + "{{#sl-tab-pane label=\"C\" name=\"c\"}}C content{{/sl-tab-pane}}")
        });

        this.render();

        assert.equal($(".nav-tabs[role=\"tablist\"]").length, 1);
        assert.equal($(".tab a[role=\"tab\"]").length, 3);
    });

    ember_qunit.test("\"initialTabName\" property is respected", function (assert) {
        var component = this.subject({
            initialTabName: "b",
            template: Ember['default'].Handlebars.compile("{{#sl-tab-pane label=\"A\" name=\"a\"}}A content{{/sl-tab-pane}}" + "{{#sl-tab-pane label=\"B\" name=\"b\"}}B content{{/sl-tab-pane}}" + "{{#sl-tab-pane label=\"C\" name=\"c\"}}C content{{/sl-tab-pane}}")
        });

        assert.expect(2);
        stop();

        this.render();

        component.paneFor("b").queue(function () {

            assert.equal($(".tab.active[data-tab-name=\"b\"]").length, 1);
            assert.equal($(".sl-tab-pane.active[data-tab-name=\"b\"]").length, 1);

            start();
        });
    });

    ember_qunit.test("\"alignTabs\" property is respected", function (assert) {
        var component = this.subject({
            alignTabs: "right"
        }),
            $component = this.render();

        assert.ok(synchronous.contains($component.prop("class"), "sl-align-tabs-right"), "Tab alignment class not applied");
    });

    ember_qunit.test("Tabs display in expected order when \"alignTabs\" property is not specified", function (assert) {
        var component = this.subject({
            template: Ember['default'].Handlebars.compile("{{#sl-tab-pane label=\"A\" name=\"a\"}}A content{{/sl-tab-pane}}" + "{{#sl-tab-pane label=\"B\" name=\"b\"}}B content{{/sl-tab-pane}}" + "{{#sl-tab-pane label=\"C\" name=\"c\"}}C content{{/sl-tab-pane}}")
        }),
            $component = this.render(),
            labels = [];

        $(".tab[data-tab-name]").each(function () {
            labels.push($(this).attr("data-tab-name"));
        });

        assert.deepEqual(labels, ["a", "b", "c"]);
    });

    ember_qunit.test("Clicking tab changes active tab", function (assert) {
        var component = this.subject({
            template: Ember['default'].Handlebars.compile("{{#sl-tab-pane label=\"A\" name=\"a\"}}A content{{/sl-tab-pane}}" + "{{#sl-tab-pane label=\"B\" name=\"b\"}}B content{{/sl-tab-pane}}" + "{{#sl-tab-pane label=\"C\" name=\"c\"}}C content{{/sl-tab-pane}}")
        });

        assert.expect(2);
        stop();

        this.render();

        click($(".tab[data-tab-name=\"b\"] a"));

        component.paneFor("a").queue(function () {
            component.paneFor("b").queue(function () {
                assert.equal($(".tab.active[data-tab-name=\"b\"]").length, 1);
                assert.equal($(".sl-tab-pane.active[data-tab-name=\"b\"]").length, 1);

                start();
            });
        });
    });

    ember_qunit.test("Tab content height is adjusted after new tab selection", function (assert) {
        var component = this.subject({
            template: Ember['default'].Handlebars.compile("{{#sl-tab-pane label=\"A\" name=\"a\"}}A content{{/sl-tab-pane}}" + "{{#sl-tab-pane label=\"B\" name=\"b\"}}B content<br><br>Taller content{{/sl-tab-pane}}" + "{{#sl-tab-pane label=\"C\" name=\"c\"}}C content{{/sl-tab-pane}}")
        }),
            initialHeight;

        assert.expect(1);
        stop();

        this.render();

        component.paneFor("a").queue(function () {
            initialHeight = $(".tab-content").height();
        });

        component.paneFor("b").queue(function () {
            assert.notEqual(initialHeight, $(".tab-content").height());

            start();
        });

        click($(".tab[data-tab-name=\"b\"] a"));
    });

    ember_qunit.test("\"activatePane\" animates as expected", function (assert) {
        var component = this.subject({
            template: Ember['default'].Handlebars.compile("{{#sl-tab-pane label=\"A\" name=\"a\"}}A content{{/sl-tab-pane}}" + "{{#sl-tab-pane label=\"B\" name=\"b\"}}B content{{/sl-tab-pane}}")
        }),
            spy = sinon.spy($.prototype, "fadeIn");

        assert.expect(1);
        stop();

        this.render();

        component.paneFor("a").queue(function () {
            assert.equal(spy.calledOnce, true);
            start();
        });
    });

    ember_qunit.test("\"deactivatePane\" animates as expected", function (assert) {
        var component = this.subject({
            template: Ember['default'].Handlebars.compile("{{#sl-tab-pane label=\"A\" name=\"a\"}}A content{{/sl-tab-pane}}" + "{{#sl-tab-pane label=\"B\" name=\"b\"}}B content{{/sl-tab-pane}}")
        }),
            spy = sinon.spy($.prototype, "fadeOut");

        assert.expect(1);
        stop();

        this.render();

        click($(".tab[data-tab-name=\"b\"] a"));

        component.paneFor("a").queue(function () {
            component.paneFor("b").queue(function () {
                assert.equal(spy.calledOnce, true);
                start();
            });
        });
    });

    ember_qunit.test("\"deactivatePane\" calls specified callback", function (assert) {
        var component = this.subject({
            template: Ember['default'].Handlebars.compile("{{#sl-tab-pane label=\"A\" name=\"a\"}}A content{{/sl-tab-pane}}" + "{{#sl-tab-pane label=\"B\" name=\"b\"}}B content{{/sl-tab-pane}}")
        }),
            callback = sinon.spy();

        assert.expect(1);
        stop();

        this.render();

        component.deactivatePane(callback);

        component.paneFor("a").queue(function () {
            assert.equal(callback.calledOnce, true);
            start();
        });
    });

});
define('dummy/tests/unit/components/sl-tab-panel-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/sl-tab-panel-test.js should pass jshint', function() { 
    ok(true, 'unit/components/sl-tab-panel-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/sl-textarea-test', ['ember', 'ember-qunit', 'sl-ember-components/mixins/sl-input-based', 'sl-ember-components/mixins/sl-tooltip-enabled'], function (Ember, ember_qunit, InputBasedMixin, TooltipEnabledMixin) {

    'use strict';

    ember_qunit.moduleForComponent("sl-textarea", "Unit - component: sl-textarea");

    ember_qunit.test("Expected Mixins are present", function (assert) {
        assert.ok(InputBasedMixin['default'].detect(this.subject()), "InputBased Mixin is present");
        assert.ok(TooltipEnabledMixin['default'].detect(this.subject()), "TooltipEnabled Mixin is present");
    });

    ember_qunit.test("Expected classes are only ones applied", function (assert) {
        var $component = this.render();

        assert.equal($component.prop("class"), ["ember-view form-group sl-textarea"]);
    });

    ember_qunit.test("If \"label\" property is not populated, label element is not rendered", function (assert) {
        var $component = this.render();

        assert.equal(typeof $component.find("label").prop("for"), "undefined");
    });

    ember_qunit.test("If \"label\" property is populated, label element is rendered", function (assert) {
        var labelText = "Test Label",
            component = this.subject({
            label: labelText
        }),
            label;

        this.render();

        label = $("label[for=\"" + $("textarea").prop("id") + "\"]");

        assert.equal(label.length, 1);
        assert.equal($.trim(label.text()), labelText);
    });

    ember_qunit.test("If \"label\" property is populated, \"for\" attribute is expected value", function (assert) {
        var labelText = "Test Label",
            component = this.subject({
            label: labelText
        }),
            $component = this.render();

        assert.equal($component.find("label").prop("for"), $component.find("textarea").prop("id"));
    });

    ember_qunit.test("If \"label\" property is not populated, \"optional\" and \"required\" properties are not rendered even if populated", function (assert) {
        var component = this.subject({
            optional: true,
            required: true
        }),
            $component = this.render();

        assert.equal($component.find("label > .text-info").prop("tagName"), undefined);
        assert.equal($component.find("label > .text-danger").prop("tagName"), undefined);
    });

    ember_qunit.test("\"optional\" and \"required\" properties are rendered if populated along with \"label\" property", function (assert) {
        var component = this.subject({
            label: "Test Label",
            optional: true,
            required: true
        }),
            $component = this.render();

        assert.equal($component.find("label > .text-info").prop("tagName"), "SMALL");
        assert.equal($component.find("label > .text-danger").prop("tagName"), "SMALL");
    });

    ember_qunit.test("\"helpText\" is rendered if populated", function (assert) {
        var helpText = "Help Text",
            component = this.subject({
            helpText: helpText
        }),
            $component = this.render();

        assert.equal($component.find(".help-block").prop("tagName"), "P");
        assert.equal($.trim($component.find(".help-block").text()), helpText);
    });

    ember_qunit.test("\"autofocus\" property is supported", function (assert) {
        var component = this.subject({
            autofocus: true
        }),
            $component = this.render();

        assert.equal($component.find("textarea").attr("autofocus"), "autofocus");
    });

    ember_qunit.test("\"cols\" property is supported", function (assert) {
        var cols = "8",
            component = this.subject({
            cols: cols
        }),
            $component = this.render();

        assert.equal($component.find("textarea").attr("cols"), cols);
    });

    ember_qunit.test("\"disabled\" property is supported", function (assert) {
        var component = this.subject({
            disabled: true
        }),
            $component = this.render();

        assert.equal($component.find("textarea").attr("disabled"), "disabled");
    });

    ember_qunit.test("\"maxlength\" property is supported", function (assert) {
        var maxlength = "12",
            component = this.subject({
            maxlength: maxlength
        }),
            $component = this.render();

        assert.equal($component.find("textarea").attr("maxlength"), maxlength);
    });

    ember_qunit.test("\"placeholder\" property is supported", function (assert) {
        var placeholder = "Placeholder text",
            component = this.subject({
            placeholder: placeholder
        }),
            $component = this.render();

        assert.equal($component.find("textarea").attr("placeholder"), placeholder);
    });

    ember_qunit.test("\"readonly\" property is supported", function (assert) {
        var component = this.subject({
            readonly: true
        }),
            $component = this.render();

        assert.equal($component.find("textarea").attr("readonly"), "readonly");
    });

    ember_qunit.test("\"rows\" property is supported", function (assert) {
        var rows = "4",
            component = this.subject({
            rows: rows
        }),
            $component = this.render();

        assert.equal($component.find("textarea").attr("rows"), rows);
    });

    ember_qunit.test("\"selectionDirection\" is supported", function (assert) {
        var component = this.subject({
            selectionDirection: "backward"
        }),
            $component = this.render();

        assert.equal($component.find("textarea").attr("selectionDirection"), "backward");
    });

    ember_qunit.test("\"selectionEnd\" is supported", function (assert) {
        var selectionEnd = "10",
            component = this.subject({
            selectionEnd: selectionEnd
        }),
            $component = this.render();

        assert.equal($component.find("textarea").attr("selectionEnd"), selectionEnd);
    });

    ember_qunit.test("\"selectionStart\" is supported", function (assert) {
        var selectionStart = "10",
            component = this.subject({
            selectionStart: selectionStart
        }),
            $component = this.render();

        assert.equal($component.find("textarea").attr("selectionStart"), selectionStart);
    });

    ember_qunit.test("\"spellcheck\" property is supported", function (assert) {
        var spellcheck = "true",
            component = this.subject({
            spellcheck: spellcheck
        }),
            $component = this.render();

        assert.equal($component.find("textarea").attr("spellcheck"), spellcheck);
    });

    ember_qunit.test("\"tabindex\" property is supported", function (assert) {
        var tabindex = "2",
            component = this.subject({
            tabindex: tabindex
        }),
            $component = this.render();

        assert.equal($component.find("textarea").attr("tabindex"), tabindex);
    });

    ember_qunit.test("\"wrap\" property is supported", function (assert) {
        var wrap = "hard",
            component = this.subject({
            wrap: wrap
        }),
            $component = this.render();

        assert.equal($component.find("textarea").attr("wrap"), wrap);
    });

    ember_qunit.test("\"value\" property is supported", function (assert) {
        var value = "Bound Value",
            component = this.subject({
            value: value
        }),
            $component = this.render();

        assert.equal($component.find("textarea").val(), value);
    });

});
define('dummy/tests/unit/components/sl-textarea-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/sl-textarea-test.js should pass jshint', function() { 
    ok(true, 'unit/components/sl-textarea-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/sl-tooltip-test', ['ember', 'ember-qunit', 'sl-ember-components/mixins/sl-tooltip-enabled'], function (Ember, ember_qunit, TooltipEnabledMixin) {

    'use strict';

    ember_qunit.moduleForComponent("sl-tooltip", "Unit - component: sl-tooltip");

    ember_qunit.test("Expected Mixin is present", function (assert) {
        assert.ok(TooltipEnabledMixin['default'].detect(this.subject()), "Expected Mixin is present");
    });

});
define('dummy/tests/unit/components/sl-tooltip-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/sl-tooltip-test.js should pass jshint', function() { 
    ok(true, 'unit/components/sl-tooltip-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/mixins/sl-grid-controller-test', ['ember', 'sl-ember-components/mixins/sl-grid-controller'], function (Ember, SlGridController) {

    'use strict';

    var gridController;

    module("Unit - mixin: sl-grid-controller", {
        beforeEach: function beforeEach() {
            gridController = Ember['default'].ArrayController.createWithMixins(SlGridController['default'], {
                gridDefinition: {
                    options: {},
                    columns: [{
                        key: "test1",
                        title: "test 1",
                        sortable: true

                    }, {
                        key: "test2",
                        title: "test 2",
                        sortable: true
                    }]
                }
            });
            sinon.spy(gridController, "reorderColumn");
            sinon.spy(gridController, "resetColumns");
            sinon.spy(gridController, "loadGridDefinition");
            sinon.spy(gridController, "onColumnWidthsChange");
        },

        afterEach: function afterEach() {
            gridController.reorderColumn.restore();
            gridController.resetColumns.restore();
        }
    });

    test("action: reorderColumn should call reorderColumn with correct arguments", function (assert) {
        gridController.send("reorderColumn", 0, 1);
        assert.ok(gridController.reorderColumn.calledOnce, "reorderColumn was called once");
        assert.ok(gridController.reorderColumn.calledWith(0, 1), "reorderColumn was called with correct args");
    });

    test("action: resetColumns should call resetColumns", function (assert) {
        gridController.send("resetColumns");
        assert.ok(gridController.resetColumns.calledOnce, "resetColumns was called once");
    });

    test("action: sortColumn should fail for unsortable column", function (assert) {
        gridController.set("columns.firstObject.sortable", false);
        try {
            gridController.send("sortColumn", gridController.get("columns.firstObject"));
            assert.ok(false, "assertion did not catch unsortable column");
        } catch (e) {
            assert.ok(true, "assertion did catch unsortable column");
        }
    });

    test("action: sortColumn should change sort direction for column that is already sorted", function (assert) {
        var column = gridController.get("columns.firstObject");

        column.setProperties({ isSorted: true, sortAscending: true });

        gridController.send("sortColumn", gridController.get("columns.firstObject"));

        assert.ok(!gridController.get("columns.firstObject.sortAscending"), "sortAscending was toggled");
    });

    test("action: sortColumn should sort a column, and unsort any other columns", function (assert) {
        var column = gridController.get("columns.firstObject"),
            gridStateChanged = false;

        column.setProperties({ isSorted: true, sortAscending: true });

        gridController.on("gridStateChanged", function () {
            gridStateChanged = true;
        });

        gridController.send("sortColumn", gridController.get("columns.1"));

        assert.ok(!column.get("isSorted"), "first column is not sorted anymore");
        assert.ok(gridController.get("columns.1.isSorted", "second column is sorted"));
        assert.ok(gridController.get("columns.1.sortAscending", "second column is sorted ascending"));
        assert.ok(true, "gridStateChanged was triggered");
    });

    test("action: toggleColumnVisibility should toggle hidden property on column", function (assert) {
        var column = gridController.get("columns.firstObject"),
            gridStateChanged = false;

        gridController.on("gridStateChanged", function () {
            gridStateChanged = true;
        });

        gridController.send("toggleColumnVisibility", column.get("key"));

        assert.ok(column.get("hidden"), "column is now hidden");
        assert.ok(gridStateChanged, "gridStateChanged was triggered");
    });

    test("observer: initialize, calls loadGridDefinition", function (assert) {
        assert.ok(gridController.loadGridDefinition, "loadGridDefinition was called after init");
    });

    test("observer: onColumnWidthsChange, gets fired after width change", function (assert) {
        gridController.set("columns.0.width", "100");

        assert.ok(gridController.onColumnWidthsChange.called, "onColumnWidthsChange was called after width change");
    });

    test("observer: onItemCountPerPageChange, triggers gridStateChanged", function (assert) {
        var gridStateChanged = false;
        gridController.on("gridStateChanged", function () {
            gridStateChanged = true;
        });
        gridController.set("itemCountPerPage", 100);

        assert.ok(gridStateChanged, "gridStateChanged was triggered");
    });

    test("property: columnCount", function (assert) {
        assert.equal(gridController.get("columnCount"), 2, "column count equals num of columns");
    });

    test("property: visibleColumns", function (assert) {
        assert.equal(gridController.get("visibleColumns"), 2, "column count equals num of visible columns");
    });

    test("property: visibleColumns, 1 hidden", function (assert) {
        gridController.set("columns.0.hidden", true);

        assert.equal(gridController.get("visibleColumns"), 1, "column count equals num of visible columns");
    });

    test("method: loadGridDefinition", function (assert) {
        assert.equal(Ember['default'].typeOf(gridController.get("grid")), "instance", "loadGridDefinition created the grid object");
    });

    test("method: reorderColumn", function (assert) {
        var secondColumn = gridController.get("columns.1");

        gridController.reorderColumn(1, 0);

        assert.equal(gridController.get("columns.0"), secondColumn, "columns was moved from pos 1 to pos 0");
    });

    test("method: resetColumns", function (assert) {
        gridController.set("columns.0.width", "100");
        gridController.resetColumns();

        assert.ok(!gridController.get("columns.0.width"), "column 0 was reset");
    });

    test("method: sortAscending", function (assert) {
        equal(Ember['default'].typeOf(gridController.get("sortAscending")), "undefined", "sortAscending is undefined");
        gridController.send("sortColumn", gridController.get("columns.0"));

        assert.ok(gridController.get("sortAscending"), "sortAscending was set");
    });

    test("method: sortProperties", function (assert) {
        assert.equal(gridController.get("sortProperties.length"), 0, "no initial sort properties");

        gridController.send("sortColumn", gridController.get("columns.0"));

        assert.equal(gridController.get("sortProperties"), gridController.get("columns.0.key"), "sort properties set to key of sorted column");
    });

    test("method: totalWidthHints", function (assert) {
        assert.equal(gridController.get("totalWidthHints"), 2, "totalWidthHints set to initial count");
    });

});
define('dummy/tests/unit/mixins/sl-grid-controller-test.jshint', function () {

  'use strict';

  module('JSHint - unit/mixins');
  test('unit/mixins/sl-grid-controller-test.js should pass jshint', function() { 
    ok(true, 'unit/mixins/sl-grid-controller-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/mixins/sl-grid-table-cell-resize-test', ['ember', 'sl-ember-components/mixins/sl-grid-table-cell-resize'], function (Ember, SlGridTableCellResizeMixin) {

    'use strict';

    module("Unit - mixin: sl-grid-table-cell-resize");

    // Replace this with your real tests.
    test("It works", function (assert) {
        var SlGridTableCellResizeObject = Ember['default'].Component.extend(SlGridTableCellResizeMixin['default']),
            subject = SlGridTableCellResizeObject.create();

        assert.ok(subject);
    });

});
define('dummy/tests/unit/mixins/sl-grid-table-cell-resize-test.jshint', function () {

  'use strict';

  module('JSHint - unit/mixins');
  test('unit/mixins/sl-grid-table-cell-resize-test.js should pass jshint', function() { 
    ok(true, 'unit/mixins/sl-grid-table-cell-resize-test.js should pass jshint.'); 
  });

});
define('dummy/tests/views/demos/sl-menu.jshint', function () {

  'use strict';

  module('JSHint - views/demos');
  test('views/demos/sl-menu.js should pass jshint', function() { 
    ok(true, 'views/demos/sl-menu.js should pass jshint.'); 
  });

});
define('dummy/views/demos/sl-menu', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].View.extend({

        registerKeyListeners: (function () {
            Ember['default'].$(document).on("keypress.menu", (function (e) {
                if (e.charCode >= 49 && e.charCode <= 57) {
                    var keypressed = e.charCode - 48;
                    this.get("controller.keyHandler").childSelection(keypressed);
                } else if (e.charCode === 45) {
                    this.get("controller.keyHandler").drillDown("-");
                } else if (e.charCode === 48) {
                    this.get("controller.keyHandler").showAll();
                }
            }).bind(this));

            // keypress doesn't appear to catch ESC
            Ember['default'].$(document).on("keyup.menu", (function (e) {
                if (e.keyCode === 27) {
                    this.get("controller.keyHandler").closeAll();
                }
            }).bind(this));

            // need to capture TAB key with keydown event
            Ember['default'].$(document).on("keydown.menu", (function (e) {
                if (9 === e.keyCode && this.get("controller.keyboardInUse")) {
                    e.preventDefault();

                    if (e.shiftKey) {
                        this.get("controller.keyHandler").cycleRootSelectionPrevious();
                    } else {
                        this.get("controller.keyHandler").cycleRootSelectionNext();
                    }
                }
            }).bind(this));
        }).on("didInsertElement"),

        unregisterKeyListeners: (function () {
            Ember['default'].$(document).off("keypress.menu").off("keyup.menu").off("keydown.menu");
        }).on("willClearRender")

    });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"name":"sl-ember-components","version":"0.8.0.52381ae6"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map