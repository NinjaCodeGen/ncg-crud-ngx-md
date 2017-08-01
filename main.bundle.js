webpackJsonp([2,6],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin_menu__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_translate_ng2_translate__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminLayoutComponent = (function () {
    function AdminLayoutComponent(router, menuItems, translate, iconRegistry, sanitizer, dialog) {
        this.router = router;
        this.menuItems = menuItems;
        this.translate = translate;
        this.dialog = dialog;
        this.isDarkTheme = false;
        this.url = 'https://ninjacodegen.com/';
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    return AdminLayoutComponent;
}());
AdminLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(283),
        styles: [":host {\n  display: flex;\n  flex: 1;\n}"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__admin_admin_menu__["a" /* MenuItems */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__admin_admin_menu__["a" /* MenuItems */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_translate_ng2_translate__["d" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_translate_ng2_translate__["d" /* TranslateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdIconRegistry */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdDialog */]) === "function" && _f || Object])
], AdminLayoutComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=admin-layout.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItems; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var APPMENUITEMS = [
    {
        state: 'admin',
        name: 'ADMIN',
        type: 'sub',
        icon: 'equalizer',
        badge: [
            { type: 'purple', value: '10' }
        ],
        children: [
            { state: 'defaultTypeAndFormat', name: 'Default Type And Format' },
            { state: 'defaultValidation', name: 'Default Validation' },
            { state: 'ncgOther', name: 'Ncg Other' },
            { state: 'ncgTypeAndFormat', name: 'Ncg Type And Format' },
            { state: 'ncgValidation', name: 'Ncg Validation' },
            { state: 'someItem', name: 'Some Item' },
            { state: 'tenant', name: 'Tenant' },
            { state: 'typeOfType', name: 'Type Of Type' },
            { state: 'user', name: 'User' },
            { state: 'validation', name: 'Validation' }
        ]
    }
];
var MenuItems = (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return APPMENUITEMS;
    };
    return MenuItems;
}());
MenuItems = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MenuItems);

//# sourceMappingURL=admin.menu.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccordionDirective = (function () {
    function AccordionDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    return AccordionDirective;
}());
AccordionDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appAccordion]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AccordionDirective);

var _a;
/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=accordion.directive.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_directive__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionLinkDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionLinkDirective = (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
        if (this.group) {
            var routeUrl = this.nav.getUrl();
            var currentUrl = routeUrl.split('/');
            if (currentUrl.indexOf(this.group) > 0) {
                this.toggle();
            }
        }
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    return AccordionLinkDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AccordionLinkDirective.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AccordionLinkDirective.prototype, "open", null);
AccordionLinkDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appAccordionLink]'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */]) === "function" && _a || Object])
], AccordionLinkDirective);

var _a;
/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=accordionlink.directive.js.map

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		313,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 141;


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(217);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EntityService = (function () {
    function EntityService() {
        this.merge = function (target) {
            var sources = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                sources[_i - 1] = arguments[_i];
            }
            return Object.assign.apply(Object, [target].concat(sources));
        };
        this.propertiesDiffer = function (entityA, entityB) { return Object.keys(entityA).find(function (key) { return entityA[key] !== entityB[key]; }); };
    }
    EntityService.prototype.clone = function (source) {
        return Object.assign({}, source);
    };
    return EntityService;
}());
EntityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], EntityService);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=entity.service.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifier_notifier_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExceptionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExceptionService = (function () {
    function ExceptionService(notifierService) {
        var _this = this;
        this.notifierService = notifierService;
        this.catchBadResponse = function (errorResponse) {
            var res = errorResponse;
            var err = res.json();
            var emsg = err ?
                (err.error ? err.error : JSON.stringify(err)) :
                (res.statusText || 'unknown error');
            _this.notifierService.notify("Error - Bad Response - " + emsg);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(false);
        };
    }
    return ExceptionService;
}());
ExceptionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__notifier_notifier_service__["a" /* NotifierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__notifier_notifier_service__["a" /* NotifierService */]) === "function" && _a || Object])
], ExceptionService);

var _a;
/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=exception.service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(iconRegistry, sanitizer, dialog) {
        this.dialog = dialog;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>',
        styles: ["\n  :host {\n  display: flex;\n  flex: 1;\n}\n\nmd-sidenav {\n  width: 320px;\n}\n\n.content {\n  padding: 12px;\n}\n\n/deep/ md-icon.avatar {\n  overflow: hidden;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  margin: 12px;\n}\n\n/deep/ .mat-list-item-content {\n  height: auto !important;\n}"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdIconRegistry */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialog */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_translate_ng2_translate__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__adminLayout_admin_layout_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_core_module__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_admin_menu__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_hammerjs__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_hammerjs__);
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6_ng2_translate_ng2_translate__["a" /* TranslateStaticLoader */](http, './assets/i18n', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__adminLayout_admin_layout_component__["a" /* AdminLayoutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_12__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6_ng2_translate_ng2_translate__["b" /* TranslateModule */].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_6_ng2_translate_ng2_translate__["c" /* TranslateLoader */],
                useFactory: (createTranslateLoader),
                deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]]
            }),
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__admin_admin_menu__["a" /* MenuItems */]],
        entryComponents: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adminLayout_admin_layout_component__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });

var AppRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__adminLayout_admin_layout_component__["a" /* AdminLayoutComponent */],
        children: [{
                path: 'admin',
                loadChildren: 'app/admin/admin.module#AdminModule'
            }]
    }];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__busyIndicator_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusyIndicatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BusyIndicatorComponent = (function () {
    function BusyIndicatorComponent(busyIndicatorService) {
        this.busyIndicatorService = busyIndicatorService;
        this.visible = false;
    }
    BusyIndicatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.busyIndicatorStateChanged = this.busyIndicatorService.busyIndicatorState
            .subscribe(function (state) { return _this.visible = state.show; });
    };
    BusyIndicatorComponent.prototype.ngOnDestroy = function () {
        this.busyIndicatorStateChanged.unsubscribe();
    };
    return BusyIndicatorComponent;
}());
BusyIndicatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ncg-busyIndicator',
        template: __webpack_require__(284),
        styles: [__webpack_require__(276)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__busyIndicator_service__["a" /* BusyIndicatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__busyIndicator_service__["a" /* BusyIndicatorService */]) === "function" && _a || Object])
], BusyIndicatorComponent);

var _a;
/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=busyIndicator.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_import_guard__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__busyIndicator_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__busyIndicator_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusyIndicatorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var BusyIndicatorModule = (function () {
    function BusyIndicatorModule(parentModule) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'BusyIndicatorModule');
    }
    return BusyIndicatorModule;
}());
BusyIndicatorModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__busyIndicator_component__["a" /* BusyIndicatorComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__busyIndicator_component__["a" /* BusyIndicatorComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__busyIndicator_service__["a" /* BusyIndicatorService */]]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [BusyIndicatorModule])
], BusyIndicatorModule);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=busyIndicator.module.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entity_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exception_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__module_import_guard__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modalDialog_modalDialog_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__busyIndicator_busyIndicator_module__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notifier_notifier_module__ = __webpack_require__(213);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










// imports: imports the module's exports. which is usually declarables and providers
// in our case the spinner has no providers.
//
// exports: exports modules AND components/directives/pipes that other modules may want to use
var CoreModule = (function () {
    function CoreModule(parentModule) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__modalDialog_modalDialog_module__["a" /* ModalDialogModule */], __WEBPACK_IMPORTED_MODULE_8__busyIndicator_busyIndicator_module__["a" /* BusyIndicatorModule */], __WEBPACK_IMPORTED_MODULE_9__notifier_notifier_module__["a" /* NotifierModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__modalDialog_modalDialog_module__["a" /* ModalDialogModule */], __WEBPACK_IMPORTED_MODULE_8__busyIndicator_busyIndicator_module__["a" /* BusyIndicatorModule */], __WEBPACK_IMPORTED_MODULE_9__notifier_notifier_module__["a" /* NotifierModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__entity_service__["a" /* EntityService */],
            __WEBPACK_IMPORTED_MODULE_5__exception_service__["a" /* ExceptionService */]
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modalDialog_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KEY_ESC = 27;
var ModalDialogComponent = (function () {
    function ModalDialogComponent(modalDialogService) {
        this.defaults = {
            title: 'Confirmation',
            message: 'Do you want to cancel your changes?',
            cancelText: 'Cancel',
            okText: 'OK'
        };
        modalDialogService.activate = this.activate.bind(this);
    }
    ModalDialogComponent.prototype.activate = function (message, title) {
        var _this = this;
        if (message === void 0) { message = this.defaults.message; }
        if (title === void 0) { title = this.defaults.title; }
        this.title = title;
        this.message = message;
        this.okText = this.defaults.okText;
        this.cancelText = this.defaults.cancelText;
        var promise = new Promise(function (resolve, reject) {
            _this.negativeOnClick = function (e) { return resolve(false); };
            _this.positiveOnClick = function (e) { return resolve(true); };
            _this.show();
        });
        return promise;
    };
    ModalDialogComponent.prototype.ngOnInit = function () {
        this.modalElement = document.getElementById('confirmationModal');
        this.cancelButton = document.getElementById('cancelButton');
        this.okButton = document.getElementById('okButton');
    };
    ModalDialogComponent.prototype.show = function () {
        var _this = this;
        document.onkeyup = null;
        if (!this.modalElement || !this.cancelButton || !this.okButton) {
            return;
        }
        this.modalElement.style.opacity = 0;
        this.modalElement.style.zIndex = 9999;
        this.cancelButton.onclick = (function (e) {
            e.preventDefault();
            if (!_this.negativeOnClick(e)) {
                _this.hideDialog();
            }
        });
        this.okButton.onclick = (function (e) {
            e.preventDefault();
            if (!_this.positiveOnClick(e)) {
                _this.hideDialog();
            }
        });
        this.modalElement.onclick = function () {
            _this.hideDialog();
            return _this.negativeOnClick(null);
        };
        document.onkeyup = function (e) {
            if (e.which === KEY_ESC) {
                _this.hideDialog();
                return _this.negativeOnClick(null);
            }
        };
        this.modalElement.style.opacity = 1;
    };
    ModalDialogComponent.prototype.hideDialog = function () {
        var _this = this;
        document.onkeyup = null;
        this.modalElement.style.opacity = 0;
        window.setTimeout(function () { return _this.modalElement.style.zIndex = -1; }, 400);
    };
    return ModalDialogComponent;
}());
ModalDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ncg-modal-dialog',
        template: __webpack_require__(285),
        styles: [__webpack_require__(277)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__modalDialog_service__["a" /* ModalDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modalDialog_service__["a" /* ModalDialogService */]) === "function" && _a || Object])
], ModalDialogComponent);

var _a;
/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=modalDialog.component.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_import_guard__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modalDialog_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modalDialog_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDialogModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ModalDialogModule = (function () {
    function ModalDialogModule(parentModule) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'ModalDialogModule');
    }
    return ModalDialogModule;
}());
ModalDialogModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__modalDialog_component__["a" /* ModalDialogComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__modalDialog_component__["a" /* ModalDialogComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__modalDialog_service__["a" /* ModalDialogService */]],
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [ModalDialogModule])
], ModalDialogModule);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=modalDialog.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notifier_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifierComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotifierComponent = (function () {
    function NotifierComponent(notifierService) {
        var _this = this;
        this.notifierService = notifierService;
        this.defaults = {
            title: 'Hey fellow coders!',
            message: "Let's go play with some code!"
        };
        this.notifierSubscription = this.notifierService.notifierState.subscribe(function (notifierMessage) {
            _this.notify(notifierMessage.message);
        });
    }
    NotifierComponent.prototype.notify = function (message, title) {
        if (message === void 0) { message = this.defaults.message; }
        if (title === void 0) { title = this.defaults.title; }
        this.title = title;
        this.message = message;
        this.show();
    };
    NotifierComponent.prototype.ngOnInit = function () {
        this.notifierElement = document.getElementById('notifier');
    };
    NotifierComponent.prototype.ngOnDestroy = function () {
        this.notifierSubscription.unsubscribe();
    };
    NotifierComponent.prototype.show = function () {
        var _this = this;
        this.notifierElement.style.opacity = 1;
        this.notifierElement.style.zIndex = 9999;
        window.setTimeout(function () { return _this.hide(); }, 2500);
    };
    NotifierComponent.prototype.hide = function () {
        var _this = this;
        this.notifierElement.style.opacity = 0;
        window.setTimeout(function () { return _this.notifierElement.style.zIndex = 0; }, 400);
    };
    return NotifierComponent;
}());
NotifierComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ncg-notifier',
        template: __webpack_require__(286),
        styles: [__webpack_require__(278)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__notifier_service__["a" /* NotifierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__notifier_service__["a" /* NotifierService */]) === "function" && _a || Object])
], NotifierComponent);

var _a;
/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=notifier.component.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_import_guard__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifier_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifier_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifierModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var NotifierModule = (function () {
    function NotifierModule(parentModule) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'NotifierModule');
    }
    return NotifierModule;
}());
NotifierModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__notifier_component__["a" /* NotifierComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__notifier_component__["a" /* NotifierComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__notifier_service__["a" /* NotifierService */]]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [NotifierModule])
], NotifierModule);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=notifier.module.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionAnchorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionAnchorDirective = (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    return AccordionAnchorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AccordionAnchorDirective.prototype, "onClick", null);
AccordionAnchorDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appAccordionToggle]'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */]) === "function" && _a || Object])
], AccordionAnchorDirective);

var _a;
/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=accordionanchor.directive.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__ = __webpack_require__(214);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__(113);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_directive__ = __webpack_require__(112);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_directive__["a"]; });



/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__accordion__["a" /* AccordionAnchorDirective */],
            __WEBPACK_IMPORTED_MODULE_1__accordion__["b" /* AccordionLinkDirective */],
            __WEBPACK_IMPORTED_MODULE_1__accordion__["c" /* AccordionDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__accordion__["a" /* AccordionAnchorDirective */],
            __WEBPACK_IMPORTED_MODULE_1__accordion__["b" /* AccordionLinkDirective */],
            __WEBPACK_IMPORTED_MODULE_1__accordion__["c" /* AccordionDirective */]
        ]
    })
], SharedModule);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".busyIndicator {\r\n  position: absolute;\r\n  left: 46%; top: 12%\r\n}\r\n\r\n/* NinjaCodeGen.com by DNAfor.NET */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".dialog-container,\r\n.loading-container {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  overflow: hidden;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  z-index: -1;\r\n  opacity: 0;\r\n  transition: opacity 400ms ease-in;\r\n}\r\n\r\n.dialog-container > div.dialog-modal {\r\n  background-color: white;\r\n  position: relative;\r\n  width: 90%;\r\n  max-width: 500px;\r\n  min-height: 25px;\r\n  margin: 10% auto;\r\n  z-index: 99999;\r\n  padding: 16px;\r\n}\r\n\r\n.dialog-button-bar {\r\n  text-align: right;\r\n}\r\n\r\n.loading-container > div {\r\n  position: relative;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin: 10% auto;\r\n  z-index: 99999;\r\n}\r\n\r\n.loading-container > div > div {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.dialog-container .dialog-button-bar button {\r\n  background: none;\r\n  border: 1px solid #333;\r\n  cursor: pointer;\r\n  margin: 0 0 0 1em;\r\n  padding: 5px 10px;\r\n}\r\n\r\n/* NinjaCodeGen.com by DNAfor.NET */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".notifier-container {\r\n  /*-webkit-transition-property: opacity, bottom, left, right, width, margin, border-radius;\r\n  transition-property: opacity, bottom, left, right, width, margin, border-radius;\r\n  -webkit-transition-duration: 1.0s;\r\n          transition-duration: 1.0s;\r\n  -webkit-transition-timing-function: ease;\r\n          transition-timing-function: ease;*/\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  overflow: scroll;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  z-index: 9999;\r\n  opacity: 0;\r\n  transition: opacity 400ms ease-in;\r\n}\r\n\r\n.notifier-container > * {\r\n  text-align: center;\r\n}\r\n\r\n.notifier-card {\r\n  width: 100%;\r\n  z-index: 1;\r\n  padding: 2px;\r\n  position: relative;\r\n  /*background-color: #f06292;\r\n  background-color: rgb(103,58,183);\r\n  background-color: rgb(83,109,254);*/\r\n  background-color: rgb(255,64,129);\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.notifier-card .notifier-message {\r\n  margin: 0em 2em 1em 2em;\r\n}\r\n\r\n.notifier-card .notifier-title {\r\n  text-transform: uppercase;\r\n  margin: 16px;\r\n  font-size: 18px;\r\n}\r\n\r\n/* NinjaCodeGen.com by DNAfor.NET */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex [class.dark-theme]=\"isDarkTheme\">\r\n  <md-toolbar color=\"primary\">\r\n    <span>NCG NGX Material Design</span>\r\n    <button id=\"sideBarToggleButton\" md-icon-button (click)=\"sidenav.toggle()\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n    <!-- Filler that pushes the menu button to the end of the toolbar -->\r\n    <span fxFlex></span>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"themeMenu\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n  </md-toolbar>\r\n  <md-sidenav-container fxFlex class=\"app-inner\">\r\n    <md-sidenav #sidenav mode=\"side\" id=\"sidebar-panel\" class=\"sidebar-panel\" [opened]=\"true\">\r\n      <md-nav-list appAccordion class=\"navigation\">\r\n        <md-list-item appAccordionLink *ngFor=\"let menuitem of menuItems.getAll()\" group=\"{{ menuitem.state }}\">\r\n          <a appAccordionToggle class=\"relative\" md-ripple [routerLink]=\"['/', menuitem.state]\" *ngIf=\"menuitem.type === 'link'\">\r\n            <md-icon>{{ menuitem.icon }}</md-icon>\r\n            <span>{{ menuitem.name | translate }}</span>\r\n            <span fxFlex></span>\r\n            <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n          </a>\r\n          <a appAccordionToggle class=\"relative\" md-ripple href=\"{{ menuitem.state }}\" *ngIf=\"menuitem.type === 'extLink'\">\r\n            <md-icon>{{ menuitem.icon }}</md-icon>\r\n            <span>{{ menuitem.name | translate }}</span>\r\n            <span fxFlex></span>\r\n            <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n          </a>\r\n          <a appAccordionToggle class=\"relative\" md-ripple href=\"{{ menuitem.state }}\" target=\"_blank\" *ngIf=\"menuitem.type === 'extTabLink'\">\r\n            <md-icon>{{ menuitem.icon }}</md-icon>\r\n            <span>{{ menuitem.name | translate }}</span>\r\n            <span fxFlex></span>\r\n            <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n          </a>\r\n          <a appAccordionToggle class=\"relative\" md-ripple href=\"javascript:;\" *ngIf=\"menuitem.type === 'sub'\">\r\n            <md-icon>{{ menuitem.icon }}</md-icon>\r\n            <span>{{ menuitem.name | translate }}</span>\r\n            <span fxFlex></span>\r\n            <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n            <md-icon class=\"menu-caret\">arrow_drop_down</md-icon>\r\n          </a>\r\n          <md-nav-list class=\"sub-menu\" *ngIf=\"menuitem.type === 'sub'\">\r\n            <md-list-item *ngFor=\"let childitem of menuitem.children\" routerLinkActive=\"open\">\r\n              <a [routerLink]=\"['/', menuitem.state, childitem.state ]\" class=\"relative\" md-ripple>{{ childitem.name | translate }}</a>\r\n            </md-list-item>\r\n          </md-nav-list>\r\n        </md-list-item>\r\n      </md-nav-list>\r\n    </md-sidenav>\r\n    <router-outlet></router-outlet>\r\n    <footer>\r\n      <span>Generated with <a [href]=\"url\" target=\"_blank\">NinjaCodeGen</a> by DNA</span>\r\n    </footer>\r\n  </md-sidenav-container>\r\n  <md-menu #themeMenu x-position=\"before\">\r\n    <button md-menu-item (click)=\"isDarkTheme = !isDarkTheme\">Toggle Theme</button>\r\n  </md-menu>\r\n</div>\r\n<ncg-busyIndicator></ncg-busyIndicator>\r\n<ncg-notifier></ncg-notifier>\r\n<ncg-modal-dialog></ncg-modal-dialog>"

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

module.exports = "<div class=\"busyIndicator mdl-busyIndicator mdl-js-busyIndicator mdl-busyIndicator--single-color\" [class.is-active]=\"visible\"></div>\r\n\r\n<!-- NinjaCodeGen.com by DNAfor.NET  -->"

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

module.exports = "<div id=\"confirmationModal\" class=\"dialog-container\">\r\n  <div class=\"dialog-modal\">\r\n    <h5>{{title}}</h5>\r\n    <p>{{message}}</p>\r\n    <div class=\"dialog-button-bar\">\r\n      <button id=\"cancelButton\">{{cancelText}} \r\n      <span class=\"mdl-button__ripple-container\">\r\n        <span class=\"mdl-ripple\"></span>\r\n      </span></button>\r\n      <button id=\"okButton\">{{okText}} \r\n      <span class=\"mdl-button__ripple-container\">\r\n        <span class=\"mdl-ripple\"></span>\r\n      </span></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--  NinjaCodeGen.com by DNAfor.NET -->"

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

module.exports = "<div id=\"notifier\" class=\"notifier-container\">\r\n  <div class=\"notifier-card mdl-shadow--16dp\">\r\n    <h5 class=\"notifier-title\">{{title}}</h5>\r\n    <p class=\"notifier-message\">{{message}}</p>\r\n  </div>\r\n</div>\r\n\r\n<!-- NinjaCodeGen.com by DNAfor.NET -->"

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(142);


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}
/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=module-import-guard.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifierService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NotifierService = (function () {
    function NotifierService(prior) {
        this.notifierSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.notifierState = this.notifierSubject.asObservable();
        if (prior) {
            console.log('notifier service already exists');
            return prior;
        }
        else {
        }
    }
    NotifierService.prototype.notify = function (message) {
        this.notifierSubject.next({ message: message });
    };
    return NotifierService;
}());
NotifierService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [NotifierService])
], NotifierService);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=notifier.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusyIndicatorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BusyIndicatorService = (function () {
    function BusyIndicatorService(prior) {
        this.busyIndicatorSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.busyIndicatorState = this.busyIndicatorSubject.asObservable();
        if (prior) {
            return prior;
        }
    }
    BusyIndicatorService.prototype.show = function () {
        this.busyIndicatorSubject.next({ show: true });
    };
    BusyIndicatorService.prototype.hide = function () {
        this.busyIndicatorSubject.next({ show: false });
    };
    return BusyIndicatorService;
}());
BusyIndicatorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [BusyIndicatorService])
], BusyIndicatorService);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=busyIndicator.service.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDialogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalDialogService = (function () {
    function ModalDialogService() {
    }
    return ModalDialogService;
}());
ModalDialogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ModalDialogService);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=modalDialog.service.js.map

/***/ })

},[310]);
//# sourceMappingURL=main.bundle.js.map