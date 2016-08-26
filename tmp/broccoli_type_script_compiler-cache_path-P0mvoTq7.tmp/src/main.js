"use strict";
var core_1 = require('@angular/core');
var app_1 = require('./app');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
if (app_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_1.AppModule);
//# sourceMappingURL=main.js.map