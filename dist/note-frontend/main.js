(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\Note-Pad-Application-master\src\main.ts */"zUnb");


/***/ }),

/***/ "Akln":
/*!************************************************************!*\
  !*** ./src/app/pages/main-layout/main-layout.component.ts ***!
  \************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MainLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 6, vars: 0, consts: [[1, "layout-box"], [1, "top-bar"], [1, "page-content"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Note Pad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  font-size: 18px !important;\n  overflow: hidden !important;\n}\n.layout-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.layout-box[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow-y: scroll;\n}\n.top-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 68px;\n  background: linear-gradient(to right, #fe76c2, #37c7f2);\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n}\n.top-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1haW4tc3R5bGUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxtYWluLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUSxxRUFBQTtBQXNCUixrQkFBQTtBQUNBOztFQUVFLFlBQUE7RUFHQSwwQkFBQTtFQUNBLDJCQUFBO0FDMUJGO0FBTkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7QUFRRjtBQU5FO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBUUo7QUFKQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdURBQUE7RUFDQSxnREFBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBR0EsdUJBQUE7RUFDQSxtQkFBQTtBQUlGO0FBRkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUlKIiwiZmlsZSI6Im1haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jaGFuZ2luZyBidWxtYSB2YXJpYWJsZXMgYW5kIGFkZGluZyBzdHlsZXMuLlxuQGNoYXJzZXQgXCJ1dGYtOFwiO1xuXG4vLyBJbXBvcnQgYSBHb29nbGUgRm9udFxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDBcIik7XG5cbi8vIFNldCB5b3VyIGJyYW5kIGNvbG9yc1xuJHB1cnBsZTogI2E1OWFkNztcbiRwaW5rOiAjZmU3NmMyO1xuJGJsdWU6ICMzN2M3ZjI7XG4kbGlnaHQtcmVkOiAjZmZmM2YzO1xuJGxpZ2h0OiAjZmFmY2ZmO1xuJGdyZWVuOiAjMGJmMzg3O1xuXG4vLyBVcGRhdGUgQnVsbWEncyBnbG9iYWwgdmFyaWFibGVzXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4kcHJpbWFyeTogJHB1cnBsZTtcbiRsaW5rOiAkYmx1ZTtcblxuLy8gVXBkYXRlIHNvbWUgb2YgQnVsbWEncyBjb21wb25lbnQgdmFyaWFibGVzXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICNmM2Y1ZmE7XG4kaW5wdXQtc2hhZG93OiBub25lO1xuXG4vKiBHbG9iYWwgU3R5bGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcblxuICAvL1NldCBkZWZhdWx0IGZvbnQtc2l6ZSB0byAyMHB4XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMFwiKTtcbi8qIEdsb2JhbCBTdHlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4ubGF5b3V0LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5sYXlvdXQtYm94IC5wYWdlLWNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRvcC1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2OHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZTc2YzIsICMzN2M3ZjIpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50b3AtYmFyIGgxIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI0cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-layout',
                templateUrl: './main-layout.component.html',
                styleUrls: ['./main-layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FdGA":
/*!**************************************!*\
  !*** ./src/app/shared/note.model.ts ***!
  \**************************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
class Note {
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'note-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "T1+9":
/*!**************************************************************!*\
  !*** ./src/app/pages/note-details/note-details.component.ts ***!
  \**************************************************************/
/*! exports provided: NoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDetailsComponent", function() { return NoteDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_note_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/note.model */ "FdGA");
/* harmony import */ var src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/notes.service */ "phcf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class NoteDetailsComponent {
    constructor(notesService, router, route) {
        this.notesService = notesService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.note = new src_app_shared_note_model__WEBPACK_IMPORTED_MODULE_1__["Note"]();
            if (params.id) {
                this.note = this.notesService.get(params.id);
                this.noteId = params.id;
                this.new = false;
            }
            else {
                this.new = true;
            }
        });
    }
    onSubmit(form) {
        if (this.new) {
            this.notesService.add(form.value);
        }
        else {
            this.notesService.update(this.noteId, form.value.title, form.value.body);
        }
        this.router.navigateByUrl('/');
    }
    cancel() {
        this.router.navigateByUrl('/');
    }
}
NoteDetailsComponent.ɵfac = function NoteDetailsComponent_Factory(t) { return new (t || NoteDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
NoteDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoteDetailsComponent, selectors: [["app-note-details"]], decls: 21, vars: 3, consts: [[1, "form-container"], [3, "ngSubmit"], ["noteform", "ngForm"], [1, "field"], [1, "label"], [1, "control"], ["type", "text", "name", "title", "required", "", 1, "input", 3, "ngModel"], ["name", "body", 1, "textarea", 3, "ngModel"], [1, "field", "is-grouped", "is-pulled-right"], ["type", "button", 1, "button", "is-text", 3, "click"], ["type", "submit", 1, "button", "is-success", 3, "disabled"]], template: function NoteDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NoteDetailsComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteDetailsComponent_Template_button_click_16_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.note.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.note.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".form-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: auto;\n  margin-top: 50px;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%]:focus, textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 0px 2px rgba(255, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3RlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUdFOztFQUNFLGlCQUFBO0FBQ0o7O0FBQ0k7O0VBQ0UsZ0RBQUE7QUFFTiIsImZpbGUiOiJub3RlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgJi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICAgIGJvcmRlci1jb2xvcjogcmVkO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYShyZWQsIDAuMSk7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-note-details',
                templateUrl: './note-details.component.html',
                styleUrls: ['./note-details.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/notes-list/notes-list.component */ "vbGj");
/* harmony import */ var _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/main-layout/main-layout.component */ "Akln");
/* harmony import */ var _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./note-card/note-card.component */ "rKqP");
/* harmony import */ var _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/note-details/note-details.component */ "T1+9");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_6__["NotesListComponent"],
        _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_7__["MainLayoutComponent"],
        _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_8__["NoteCardComponent"],
        _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_9__["NoteDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_6__["NotesListComponent"],
                    _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_7__["MainLayoutComponent"],
                    _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_8__["NoteCardComponent"],
                    _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_9__["NoteDetailsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "phcf":
/*!*****************************************!*\
  !*** ./src/app/shared/notes.service.ts ***!
  \*****************************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotesService {
    constructor() {
        this.notes = new Array();
    }
    getAll() {
        return this.notes;
    }
    get(id) {
        return this.notes[id];
    }
    getId(note) {
        return this.notes.indexOf(note);
    }
    add(note) {
        let newLength = this.notes.push(note);
        let index = newLength - 1;
        return index;
    }
    update(id, title, body) {
        let note = this.notes[id];
        note.title = title;
        note.body = body;
    }
    delete(id) {
        this.notes.splice(id, 1);
    }
}
NotesService.ɵfac = function NotesService_Factory(t) { return new (t || NotesService)(); };
NotesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotesService, factory: NotesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rKqP":
/*!**************************************************!*\
  !*** ./src/app/note-card/note-card.component.ts ***!
  \**************************************************/
/*! exports provided: NoteCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteCardComponent", function() { return NoteCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = ["truncator"];
const _c1 = ["bodyText"];
class NoteCardComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        let style = window.getComputedStyle(this.bodyText.nativeElement, null);
        let viewableHeight = parseInt(style.getPropertyValue("height"), 10);
        if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
            this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
        }
        else {
            this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
        }
    }
    onXButtonClick() {
        this.deleteEvent.emit();
    }
}
NoteCardComponent.ɵfac = function NoteCardComponent_Factory(t) { return new (t || NoteCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NoteCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoteCardComponent, selectors: [["app-note-card"]], viewQuery: function NoteCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.truncator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bodyText = _t.first);
    } }, inputs: { title: "title", body: "body", link: "link" }, outputs: { deleteEvent: "delete" }, decls: 13, vars: 3, consts: [[1, "note-card-container"], ["container", ""], [3, "routerLink"], [1, "note-card-content"], [1, "note-card-title"], [1, "note-card-body"], ["bodyText", ""], [1, "fade-out-truncation"], ["truncator", ""], [1, "x-button", 3, "click"]], template: function NoteCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteCardComponent_Template_div_click_12_listener() { return ctx.onXButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.body);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  font-size: 18px !important;\n  overflow: hidden !important;\n}\n.note-card-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  border-radius: 5px;\n  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.068);\n  transition: box-shadow 0.2s ease-out;\n}\n.note-card-container[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.068);\n}\n.note-card-container[_ngcontent-%COMP%]:hover   .x-button[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  transition-delay: 0.35s;\n}\n.note-card-container[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n.note-card-container[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%]   .note-card-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  color: #a59ad7;\n}\n.note-card-container[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%]   .note-card-body[_ngcontent-%COMP%] {\n  position: relative;\n  color: #555;\n  max-height: 80px;\n  overflow: hidden;\n}\n.note-card-container[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%]   .note-card-body[_ngcontent-%COMP%]   .fade-out-truncation[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  bottom: 0px;\n  height: 50%;\n  width: 100%;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, white 100%);\n}\n.x-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  height: 34px;\n  width: 34px;\n  background-color: #fff3f3;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url('delete_icon.svg');\n  border-radius: 4px;\n  transition: opacity 0.2s ease-out, transform 0.2s ease-out;\n  opacity: 0;\n  transform: scale(0.35);\n}\n.x-button[_ngcontent-%COMP%]:hover {\n  background-color: #ffe4e4;\n}\n.x-button[_ngcontent-%COMP%]:active {\n  background-color: #ffdada;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1zdHlsZS5zY3NzIiwiLi5cXC4uXFwuLlxcbm90ZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLHFFQUFBO0FBc0JSLGtCQUFBO0FBQ0E7O0VBRUUsWUFBQTtFQUdBLDBCQUFBO0VBQ0EsMkJBQUE7QUMxQkY7QUFOQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGlEQUFBO0VBQ0Esb0NBQUE7QUFRRjtBQU5FO0VBQ0UsZUFBQTtFQUNBLGdEQUFBO0FBUUo7QUFOSTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBUU47QUFKRTtFQUNFLGFBQUE7QUFNSjtBQUpJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0RuQkc7QUN5QlQ7QUFISTtFQUNFLGtCQUFBO0VBRUEsV0FBQTtFQUdBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFTjtBQUFNO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDJHQUFBO0FBRVI7QUFTQTtFQUNFLGtCQUFBO0VBRUEsU0FBQTtFQUVBLFdBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCRHREVTtFQ3VEViw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLDBEQUFBO0VBRUEsVUFBQTtFQUNBLHNCQUFBO0FBVkY7QUFZRTtFQUNFLHlCQUFBO0FBVko7QUFhRTtFQUNFLHlCQUFBO0FBWEoiLCJmaWxlIjoibm90ZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jaGFuZ2luZyBidWxtYSB2YXJpYWJsZXMgYW5kIGFkZGluZyBzdHlsZXMuLlxuQGNoYXJzZXQgXCJ1dGYtOFwiO1xuXG4vLyBJbXBvcnQgYSBHb29nbGUgRm9udFxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDBcIik7XG5cbi8vIFNldCB5b3VyIGJyYW5kIGNvbG9yc1xuJHB1cnBsZTogI2E1OWFkNztcbiRwaW5rOiAjZmU3NmMyO1xuJGJsdWU6ICMzN2M3ZjI7XG4kbGlnaHQtcmVkOiAjZmZmM2YzO1xuJGxpZ2h0OiAjZmFmY2ZmO1xuJGdyZWVuOiAjMGJmMzg3O1xuXG4vLyBVcGRhdGUgQnVsbWEncyBnbG9iYWwgdmFyaWFibGVzXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4kcHJpbWFyeTogJHB1cnBsZTtcbiRsaW5rOiAkYmx1ZTtcblxuLy8gVXBkYXRlIHNvbWUgb2YgQnVsbWEncyBjb21wb25lbnQgdmFyaWFibGVzXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICNmM2Y1ZmE7XG4kaW5wdXQtc2hhZG93OiBub25lO1xuXG4vKiBHbG9iYWwgU3R5bGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcblxuICAvL1NldCBkZWZhdWx0IGZvbnQtc2l6ZSB0byAyMHB4XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMFwiKTtcbi8qIEdsb2JhbCBTdHlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4ubm90ZS1jYXJkLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDY4KTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2Utb3V0O1xufVxuLm5vdGUtY2FyZC1jb250YWluZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDY4KTtcbn1cbi5ub3RlLWNhcmQtY29udGFpbmVyOmhvdmVyIC54LWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMzVzO1xufVxuLm5vdGUtY2FyZC1jb250YWluZXIgLm5vdGUtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMjVweDtcbn1cbi5ub3RlLWNhcmQtY29udGFpbmVyIC5ub3RlLWNhcmQtY29udGVudCAubm90ZS1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNhNTlhZDc7XG59XG4ubm90ZS1jYXJkLWNvbnRhaW5lciAubm90ZS1jYXJkLWNvbnRlbnQgLm5vdGUtY2FyZC1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzU1NTtcbiAgbWF4LWhlaWdodDogODBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ub3RlLWNhcmQtY29udGFpbmVyIC5ub3RlLWNhcmQtY29udGVudCAubm90ZS1jYXJkLWJvZHkgLmZhZGUtb3V0LXRydW5jYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBib3R0b206IDBweDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgNTAlLCB3aGl0ZSAxMDAlKTtcbn1cblxuLngtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxMnB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiAzNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2YzO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9kZWxldGVfaWNvbi5zdmdcIik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjM1KTtcbn1cbi54LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU0ZTQ7XG59XG4ueC1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGFkYTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-note-card',
                templateUrl: './note-card.component.html',
                styleUrls: ['./note-card.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], body: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['delete']
        }], truncator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['truncator', { static: true }]
        }], bodyText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['bodyText', { static: true }]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main-layout/main-layout.component */ "Akln");
/* harmony import */ var _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/note-details/note-details.component */ "T1+9");
/* harmony import */ var _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/notes-list/notes-list.component */ "vbGj");







const routes = [
    { path: '', component: _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], children: [
            { path: '', component: _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_4__["NotesListComponent"] },
            { path: 'new', component: _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_3__["NoteDetailsComponent"] },
            { path: ':id', component: _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_3__["NoteDetailsComponent"] }
        ] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vbGj":
/*!**********************************************************!*\
  !*** ./src/app/pages/notes-list/notes-list.component.ts ***!
  \**********************************************************/
/*! exports provided: NotesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesListComponent", function() { return NotesListComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/notes.service */ "phcf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../note-card/note-card.component */ "rKqP");







const _c0 = ["filterInput"];
function NotesListComponent_app_note_card_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-note-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("delete", function NotesListComponent_app_note_card_9_Template_app_note_card_delete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const note_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.deleteNote(note_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("link", ctx_r1.generateNoteURL(note_r2))("@itemAnim", undefined)("title", note_r2.title)("body", note_r2.body);
} }
class NotesListComponent {
    constructor(notesService) {
        this.notesService = notesService;
        this.notes = new Array();
        this.filteredNotes = new Array();
    }
    ngOnInit() {
        this.notes = this.notesService.getAll();
        //this.filteredNotes=this.notesService.getAll();
        this.filter('');
    }
    deleteNote(note) {
        let noteId = this.notesService.getId(note);
        this.notesService.delete(noteId);
        this.filter(this.filterInputElRef.nativeElement.value);
    }
    generateNoteURL(note) {
        let noteId = this.notesService.getId(note);
        return noteId;
    }
    filter(query) {
        query = query.toLowerCase().trim();
        let allResults = new Array();
        let terms = query.split(' ');
        terms = this.removeDuplicates(terms);
        terms.forEach(term => {
            let results = this.releventNotes(term);
            allResults = [...allResults, ...results];
        });
        let uniqueResults = this.removeDuplicates(allResults);
        this.filteredNotes = uniqueResults;
        this.sortByRelevancy(allResults);
    }
    removeDuplicates(arr) {
        let uniqueResults = new Set();
        arr.forEach(e => uniqueResults.add(e));
        return Array.from(uniqueResults);
    }
    releventNotes(query) {
        query = query.toLowerCase().trim();
        let releventNotes = this.notes.filter(note => {
            if (note.title && note.title.toLowerCase().includes(query)) {
                return true;
            }
            if (note.body && note.body.toLowerCase().includes(query)) {
                return true;
            }
            return false;
        });
        return releventNotes;
    }
    sortByRelevancy(searchResults) {
        let noteCountObj = {};
        searchResults.forEach(note => {
            let noteId = this.notesService.getId(note);
            if (noteCountObj[noteId]) {
                noteCountObj[noteId] += 1;
            }
            else {
                noteCountObj[noteId] = 1;
            }
        });
        this.filteredNotes = this.filteredNotes.sort((a, b) => {
            let aId = this.notesService.getId(a);
            let bId = this.notesService.getId(b);
            let aCount = noteCountObj[aId];
            let bCount = noteCountObj[bId];
            return bCount - aCount;
        });
    }
}
NotesListComponent.ɵfac = function NotesListComponent_Factory(t) { return new (t || NotesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"])); };
NotesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotesListComponent, selectors: [["app-notes-list"]], viewQuery: function NotesListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filterInputElRef = _t.first);
    } }, decls: 12, vars: 2, consts: [[1, "main-container"], [1, "search-bar-container"], [1, "field"], [1, "control", "has-icons-left"], ["type", "text", "placeholder", "Filter", 1, "input", 3, "keyup"], ["filterInput", ""], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-search"], [1, "notes-list"], [3, "link", "title", "body", "delete", 4, "ngFor", "ngForOf"], ["routerLink", "new", 1, "button", "floating-add-button", "is-primary"], [3, "link", "title", "body", "delete"]], template: function NotesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function NotesListComponent_Template_input_keyup_4_listener($event) { return ctx.filter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NotesListComponent_app_note_card_9_Template, 1, 4, "app-note-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "+ Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@listAnim", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredNotes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_5__["NoteCardComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  font-size: 18px !important;\n  overflow: hidden !important;\n}\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 500px;\n  margin: auto;\n  padding-top: 50px;\n}\n.notes-list[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  margin-bottom: 70px;\n}\napp-note-card[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 30px;\n}\n.floating-add-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 500px;\n  border-radius: 0;\n  box-shadow: 0px 0px 15px 5px rgba(165, 154, 215, 0.2);\n  height: 68px;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1haW4tc3R5bGUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub3Rlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLHFFQUFBO0FBc0JSLGtCQUFBO0FBQ0E7O0VBRUUsWUFBQTtFQUdBLDBCQUFBO0VBQ0EsMkJBQUE7QUMxQkY7QUFMQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBT0Y7QUFMQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFRRjtBQUxBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBUUY7QUFMQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEscURBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQU9GIiwiZmlsZSI6Im5vdGVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NoYW5naW5nIGJ1bG1hIHZhcmlhYmxlcyBhbmQgYWRkaW5nIHN0eWxlcy4uXG5AY2hhcnNldCBcInV0Zi04XCI7XG5cbi8vIEltcG9ydCBhIEdvb2dsZSBGb250XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMFwiKTtcblxuLy8gU2V0IHlvdXIgYnJhbmQgY29sb3JzXG4kcHVycGxlOiAjYTU5YWQ3O1xuJHBpbms6ICNmZTc2YzI7XG4kYmx1ZTogIzM3YzdmMjtcbiRsaWdodC1yZWQ6ICNmZmYzZjM7XG4kbGlnaHQ6ICNmYWZjZmY7XG4kZ3JlZW46ICMwYmYzODc7XG5cbi8vIFVwZGF0ZSBCdWxtYSdzIGdsb2JhbCB2YXJpYWJsZXNcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiRwcmltYXJ5OiAkcHVycGxlO1xuJGxpbms6ICRibHVlO1xuXG4vLyBVcGRhdGUgc29tZSBvZiBCdWxtYSdzIGNvbXBvbmVudCB2YXJpYWJsZXNcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICRsaWdodDtcbiRjb250cm9sLWJvcmRlci13aWR0aDogMnB4O1xuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogI2YzZjVmYTtcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XG5cbi8qIEdsb2JhbCBTdHlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC8vU2V0IGRlZmF1bHQgZm9udC1zaXplIHRvIDIwcHhcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwXCIpO1xuLyogR2xvYmFsIFN0eWxlcyAqL1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5ub3Rlcy1saXN0IHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cblxuYXBwLW5vdGUtY2FyZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZmxvYXRpbmctYWRkLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCA1cHggcmdiYSgxNjUsIDE1NCwgMjE1LCAwLjIpO1xuICBoZWlnaHQ6IDY4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('itemAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        height: 0,
                        opacity: 0,
                        transform: 'scale(0.85)',
                        'margin-bottom': 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingRight: 0,
                        paddingLeft: 0,
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        height: '*',
                        'margin-bottom': '*',
                        paddingTop: '*',
                        paddingBottom: '*',
                        paddingLeft: '*',
                        paddingRight: '*',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200)
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(50, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'scale(1.05)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(50, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'scale(1)',
                        opacity: 0.75
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'scale(0.68)',
                        opacity: 0,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        height: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingRight: 0,
                        paddingLeft: 0,
                        'margin-bottom': '0',
                    }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            opacity: 0,
                            height: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease')
                        ])
                    ], {
                        optional: true
                    })
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-notes-list',
                templateUrl: './notes-list.component.html',
                styleUrls: ['./notes-list.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('itemAnim', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                height: 0,
                                opacity: 0,
                                transform: 'scale(0.85)',
                                'margin-bottom': 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                paddingRight: 0,
                                paddingLeft: 0,
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                height: '*',
                                'margin-bottom': '*',
                                paddingTop: '*',
                                paddingBottom: '*',
                                paddingLeft: '*',
                                paddingRight: '*',
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200)
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(50, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                transform: 'scale(1.05)'
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(50, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                transform: 'scale(1)',
                                opacity: 0.75
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                transform: 'scale(0.68)',
                                opacity: 0,
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                height: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                paddingRight: 0,
                                paddingLeft: 0,
                                'margin-bottom': '0',
                            }))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listAnim', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                    opacity: 0,
                                    height: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease')
                                ])
                            ], {
                                optional: true
                            })
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"] }]; }, { filterInputElRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['filterInput']
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map