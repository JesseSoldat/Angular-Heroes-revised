"use strict";
var router_1 = require('@angular/router');
var dash_component_1 = require('./dash.component');
var routes = [
    {
        path: 'dash',
        component: dash_component_1.DashComponent
    },
    {
        path: '',
        redirectTo: '/dash',
        pathMatch: 'full'
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map