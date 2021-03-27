(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+rn0":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "VGjC");
/* harmony import */ var src_app_core_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/core.service */ "mkVU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function LoginComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.requestError);
} }
class LoginComponent {
    constructor(router, user, loader) {
        this.router = router;
        this.user = user;
        this.loader = loader;
    }
    formHandler(formValue) {
        this.loader.showLoader();
        this.user.login(formValue).subscribe((data) => {
            this.loader.hideLoader();
            this.router.navigateByUrl('/home');
            localStorage.setItem('sessionToken', data.sessionToken);
        }),
            (error) => {
                console.log(error.error.error);
            };
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 28, vars: 8, consts: [[1, "page-wrapper"], [1, "form-wrapper"], [3, "ngSubmit"], ["f", "ngForm"], [1, "username-wrapper"], ["for", "username"], ["ngModel", "", "type", "text", "name", "username", "id", "username", "required", ""], ["username", "ngModel"], [4, "ngIf"], [1, "password-wrapper"], ["ngModel", "", "required", "", "type", "password", "name", "password", "id", "password"], ["password", "ngModel"], [3, "disabled"], ["class", "request-error", 4, "ngIf"], [1, "request-error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.formHandler(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_p_9_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_p_15_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_p_18_Template, 2, 1, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "To save you some time and limit multiple user registration.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Please use the following sample credentials for full site functionality:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Username: ShopIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Password: ShopITpassword");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_r1.touched && !!_r1.errors ? "input-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.touched && !!_r1.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_r3.touched && !!_r3.errors ? "input-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.touched && !!_r3.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !!_r3.errors || !!_r1.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requestError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".page-wrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 295px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.page-wrapper[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.page-wrapper[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 20px;\n  border: 3px ridge #2161ab;\n  border-radius: 20px;\n  height: -webkit-max-content;\n  height: max-content;\n}\n.page-wrapper[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.page-wrapper[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100px;\n  margin-right: 10px;\n  text-align: end;\n}\n.page-wrapper[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  text-align: center;\n  color: red;\n  font-style: italic;\n  font-size: 16px;\n}\n.page-wrapper[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  color: white;\n  padding: 5px;\n  border: none;\n  background: #5494de;\n  transition: all 0.5s ease-in-out;\n}\n.page-wrapper[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.75);\n  background: #1a4d88;\n  font-size: 20px;\n  border-radius: 5px;\n}\n.page-wrapper[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 22px;\n  border-radius: 5px;\n  padding: 5px;\n}\n@media (max-width: 420px) {\n  .page-wrapper[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 0px;\n    width: 100%;\n  }\n}\n.page-wrapper[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.input-error[_ngcontent-%COMP%] {\n  border: 3px solid red;\n}\n.page-wrapper[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .request-error[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  text-align: center;\n  color: red;\n  font-style: italic;\n  font-size: 16px;\n}\n.page-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin: 30px 0;\n  padding: 10px 0;\n  border-top: 1px solid #0d294a;\n  border-bottom: 1px solid #0d294a;\n  background: #c4daf3;\n  color: #0d294a;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQ1I7QUFDUTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQUEsbUJBQUE7QUFDWjtBQUNZO0VBQ0ksY0FBQTtBQUNoQjtBQUVZO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQWhCO0FBR1k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRGhCO0FBSVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUZoQjtBQUlnQjtFQUNJLGVBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRnBCO0FBTVk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSmhCO0FBTWdCO0VBTEo7SUFNUSxZQUFBO0lBQ0EsV0FBQTtFQUhsQjtBQUNGO0FBS2dCO0VBQ0kscUJBQUE7QUFIcEI7QUFPWTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFMaEI7QUFVSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUlIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS13cmFwcGVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI5NXB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLmZvcm0td3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAzcHggcmlkZ2UgIzIxNjFhYjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuXHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTQ5NGRlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWE0ZDg4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi5pbnB1dC1lcnJvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucmVxdWVzdC1lcnJvciB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcnRpY2xlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMGQyOTRhO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMGQyOTRhO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjNGRhZjM7XHJcbiAgICAgICAgY29sb3I6ICMwZDI5NGE7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Personal Projects\IT Shop\it-shop\src\main.ts */"zUnb");


/***/ }),

/***/ "0SNa":
/*!***************************************************!*\
  !*** ./src/app/core/guards/authenticate.guard.ts ***!
  \***************************************************/
/*! exports provided: AuthenticateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateGuard", function() { return AuthenticateGuard; });
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../+store/actions */ "P4YV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user/user.service */ "VGjC");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");





class AuthenticateGuard {
    constructor(router, user, store) {
        this.router = router;
        this.user = user;
        this.store = store;
    }
    canActivate(route, state) {
        const sessionToken = localStorage.getItem('sessionToken');
        if (sessionToken) {
            this.user.getCurrentUser().subscribe((data) => {
                this.store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_0__["authenticate"])(data));
            });
            this.user.checkSession();
            return true;
        }
        else {
            this.router.navigateByUrl('/home');
            return false;
        }
    }
}
AuthenticateGuard.ɵfac = function AuthenticateGuard_Factory(t) { return new (t || AuthenticateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
AuthenticateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticateGuard, factory: AuthenticateGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "3GR4":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../+store/actions */ "P4YV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user/user.service */ "VGjC");
/* harmony import */ var _offers_offers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../offers/offers.service */ "Oat2");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core.service */ "mkVU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








const _c0 = ["promoElement"];
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.displayedPromoOffer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", ctx_r0.displayedPromoOffer.promotionPercentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.displayedPromoOffer.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/offers/details/", ctx_r0.displayedPromoOffer.objectId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ONLY ", (ctx_r0.displayedPromoOffer.price - ctx_r0.displayedPromoOffer.price / 100 * ctx_r0.displayedPromoOffer.promotionPercentage).toFixed(2), "$ ");
} }
function HomeComponent_section_5_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", offer_r4.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/offers/details/", offer_r4.objectId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](offer_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](offer_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Bought ", offer_r4.bought, " times! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Liked by ", offer_r4.likes.length, " people! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", offer_r4.price, "$");
} }
function HomeComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Best Sellers!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeComponent_section_5_li_4_Template, 15, 7, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.bestSellers);
} }
class HomeComponent {
    constructor(user, offers, store, loader) {
        this.user = user;
        this.offers = offers;
        this.store = store;
        this.loader = loader;
    }
    ngOnInit() {
        this.loader.showLoader();
        this.user.checkSession();
        this.offers.getPromoOffers().subscribe((data) => {
            this.promoOffers = data.results;
            this.displayedPromoOffer = data.results[0];
        });
        if (localStorage.getItem('sessionToken')) {
            this.user.getCurrentUser().subscribe((data) => {
                this.store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_0__["authenticate"])(data));
            });
        }
        this.offers.getBestSellerOffers().subscribe((data) => {
            this.bestSellers = data.results;
            this.loader.hideLoader();
        });
        this.switchCounterId = setInterval(() => { this.nextOffer(); }, 7000);
    }
    ngOnDestroy() {
        clearInterval(this.switchCounterId);
    }
    nextOffer() {
        this.promoElementHTML.nativeElement.style.opacity = 0;
        setTimeout(() => {
            const firstOffer = this.promoOffers.shift();
            this.displayedPromoOffer = this.promoOffers[0];
            this.promoOffers.push(firstOffer);
            this.promoElementHTML.nativeElement.style.opacity = 1;
            clearInterval(this.switchCounterId);
            this.switchCounterId = setInterval(() => { this.nextOffer(); }, 7000);
        }, 1000);
    }
    previousOffer() {
        this.promoElementHTML.nativeElement.style.opacity = 0;
        setTimeout(() => {
            const lastOffer = this.promoOffers.pop();
            this.promoOffers.unshift(lastOffer);
            this.displayedPromoOffer = this.promoOffers[0];
            this.promoElementHTML.nativeElement.style.opacity = 1;
            clearInterval(this.switchCounterId);
            this.switchCounterId = setInterval(() => { this.nextOffer(); }, 7000);
        }, 1000);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_offers_offers_service__WEBPACK_IMPORTED_MODULE_3__["OffersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.promoElementHTML = _t.first);
    } }, decls: 6, vars: 2, consts: [[1, "main-content"], [1, "promo"], [1, "fas", "fa-arrow-left", 3, "click"], ["class", "focus", 4, "ngIf"], [1, "fas", "fa-arrow-right", 3, "click"], ["class", "hot-deals", 4, "ngIf"], [1, "focus"], ["promoElement", ""], [1, "discount"], ["alt", "focus.png", 3, "src", "routerLink"], [1, "hot-deals"], [4, "ngFor", "ngForOf"], [1, "image-wrapper"], ["alt", "offer-photo.png", 3, "src"], [1, "info-wrapper"], [3, "routerLink"], [1, "bought"], [1, "liked"], [1, "price"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_i_click_2_listener() { return ctx.previousOffer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 10, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_i_click_4_listener() { return ctx.nextOffer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeComponent_section_5_Template, 5, 1, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayedPromoOffer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bestSellers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".promo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #d1e2f5;\n  position: relative;\n  z-index: -1;\n}\n.promo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n.promo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.promo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  margin-left: 5px;\n}\n.promo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:last-child {\n  margin-right: 5px;\n}\n@media (max-width: 550px) {\n  .promo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n.promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%] {\n  width: 1024px;\n  height: 756px;\n  display: flex;\n  flex-direction: column;\n  margin: 0px 10px;\n  opacity: 1;\n  transition: all 1s ease-in-out;\n  margin-bottom: 20px;\n}\n@media (max-height: 950px) {\n  .promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%] {\n    width: 756px;\n    height: 512px;\n  }\n}\n@media (max-height: 550px) {\n  .promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n@media (max-width: 550px) {\n  .promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n.promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 24px;\n  position: relative;\n  top: 30px;\n}\n@media (max-height: 550px) {\n  .promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%], .promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  position: relative;\n  width: -webkit-max-content;\n  width: max-content;\n  font-size: 30px;\n  padding: 5px;\n  border-radius: 10px;\n  background: red;\n  color: white;\n}\n@media (max-width: 550px) {\n  .promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%], .promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 420px) {\n  .promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%], .promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%] {\n  top: 75px;\n  right: 25px;\n  align-self: flex-end;\n}\n@media (max-width: 420px) {\n  .promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%] {\n    top: 50px;\n  }\n}\n.promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 85%;\n}\n.promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 20px;\n}\n.promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n@media (max-width: 550px) {\n  .promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 310px;\n  }\n}\n.promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  left: 50%;\n  bottom: 75px;\n}\n@media (max-width: 420px) {\n  .promo[_ngcontent-%COMP%]   .focus[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n    bottom: 50px;\n  }\n}\n.hot-deals[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  text-transform: uppercase;\n  text-align: center;\n  padding-top: 20px;\n}\n.hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-top: 3px ridge black;\n  border-bottom: 3px ridge black;\n  margin: 10px 0;\n  padding: 20px;\n  height: 250px;\n}\n@media (max-height: 950px) {\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 10px;\n    height: 200px;\n  }\n}\n@media (max-width: 900px) {\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 5px;\n    height: 175px;\n  }\n}\n@media (max-width: 420px) {\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 5px;\n    height: 125px;\n  }\n}\n.hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 20px;\n}\n.hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 450px;\n  object-fit: contain;\n}\n@media (max-height: 950px) {\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n}\n@media (max-width: 1280px) {\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n@media (max-width: 900px) {\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n@media (max-width: 420px) {\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n.hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  align-content: space-around;\n  flex-basis: 75%;\n  margin-right: 20px;\n}\n.hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  max-height: 100%;\n}\n.hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 20px;\n  text-decoration: underline;\n}\n.hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  overflow: hidden;\n  max-height: 150px;\n}\n@media (max-height: 950px) {\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    max-height: 150px;\n    overflow: hidden;\n  }\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 15px;\n  }\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    max-height: 100px;\n  }\n}\n@media (max-width: 900px) {\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-bottom: 10px;\n  }\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media (max-width: 740px) {\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 500px) {\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .bought[_ngcontent-%COMP%], .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n  margin-right: 50px;\n  font-size: 20px;\n}\n@media (max-height: 950px) {\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .bought[_ngcontent-%COMP%], .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 740px) {\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .bought[_ngcontent-%COMP%], .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-right: 10px;\n  }\n}\n.hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .bought[_ngcontent-%COMP%] {\n  color: red;\n}\n.hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n  color: green;\n}\n.hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n@media (max-height: 950px) {\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    font-size-adjust: 40px;\n  }\n}\n@media (max-width: 1280px) {\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n@media (max-width: 900px) {\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media (max-width: 600px) {\n  .hot-deals[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0k7RUFDSSxlQUFBO0FBQ1I7QUFDUTtFQUNJLGVBQUE7QUFDWjtBQUVRO0VBQ0ksZ0JBQUE7QUFBWjtBQUdRO0VBQ0ksaUJBQUE7QUFEWjtBQUlRO0VBZko7SUFnQlEsZUFBQTtFQURWO0FBQ0Y7QUFJSTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUZSO0FBSVE7RUFWSjtJQVdRLFlBQUE7SUFDQSxhQUFBO0VBRFY7QUFDRjtBQUdRO0VBZko7SUFnQlEsYUFBQTtFQUFWO0FBQ0Y7QUFFUTtFQW5CSjtJQW9CUSxhQUFBO0VBQ1Y7QUFDRjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ1o7QUFDWTtFQU5KO0lBT1EsZUFBQTtFQUVkO0FBQ0Y7QUFDUTs7RUFFSSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDWjtBQUNZO0VBVko7O0lBV1EsZUFBQTtFQUdkO0FBQ0Y7QUFEWTtFQWRKOztJQWVRLGVBQUE7RUFLZDtBQUNGO0FBRlE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBSVo7QUFGWTtFQUxKO0lBTVEsU0FBQTtFQUtkO0FBQ0Y7QUFGUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBSVo7QUFGWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFJaEI7QUFGZ0I7RUFDSSxlQUFBO0FBSXBCO0FBRGdCO0VBVEo7SUFVUSxpQkFBQTtFQUlsQjtBQUNGO0FBRFk7RUFDSSxTQUFBO0VBQ0EsWUFBQTtBQUdoQjtBQURnQjtFQUpKO0lBS1EsWUFBQTtFQUlsQjtBQUNGO0FBR0k7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQVI7QUFHSTtFQUNJLGdCQUFBO0FBRFI7QUFHUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFEWjtBQUdZO0VBVEo7SUFVUSxhQUFBO0lBQ0EsYUFBQTtFQUFkO0FBQ0Y7QUFFWTtFQWRKO0lBZVEsWUFBQTtJQUNBLGFBQUE7RUFDZDtBQUNGO0FBQ1k7RUFuQko7SUFvQlEsWUFBQTtJQUNBLGFBQUE7RUFFZDtBQUNGO0FBQVk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFFaEI7QUFBZ0I7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRXBCO0FBQW9CO0VBTEo7SUFNUSxZQUFBO0VBR3RCO0FBQ0Y7QUFEb0I7RUFUSjtJQVVRLFlBQUE7RUFJdEI7QUFDRjtBQUZvQjtFQWJKO0lBY1EsWUFBQTtFQUt0QjtBQUNGO0FBSG9CO0VBakJKO0lBa0JRLFlBQUE7RUFNdEI7QUFDRjtBQURZO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHaEI7QUFEZ0I7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBR3BCO0FBRG9CO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFHeEI7QUFEd0I7RUFDSSxlQUFBO0FBRzVCO0FBQ29CO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDeEI7QUFFb0I7RUFwQko7SUFxQlEsaUJBQUE7SUFDQSxnQkFBQTtFQUN0QjtFQUNzQjtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFQUMxQjtFQUVzQjtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQUExQjtBQUNGO0FBR29CO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7RUFEMUI7RUFJc0I7SUFDSSxlQUFBO0VBRjFCO0FBQ0Y7QUFLb0I7RUFDSTtJQUNJLGVBQUE7RUFIMUI7QUFDRjtBQU1vQjtFQUNJO0lBQ0ksYUFBQTtFQUoxQjtBQUNGO0FBUWdCOztFQUVJLGtCQUFBO0VBQ0EsZUFBQTtBQU5wQjtBQVFvQjtFQUxKOztJQU1RLGVBQUE7RUFKdEI7QUFDRjtBQU1vQjtFQVRKOztJQVVRLGVBQUE7SUFDQSxrQkFBQTtFQUZ0QjtBQUNGO0FBS2dCO0VBQ0ksVUFBQTtBQUhwQjtBQU1nQjtFQUNJLFlBQUE7QUFKcEI7QUFRWTtFQUNJLGVBQUE7QUFOaEI7QUFRZ0I7RUFISjtJQUlRLHNCQUFBO0VBTGxCO0FBQ0Y7QUFPZ0I7RUFQSjtJQVFRLGVBQUE7RUFKbEI7QUFDRjtBQU1nQjtFQVhKO0lBWVEsZUFBQTtFQUhsQjtBQUNGO0FBS2dCO0VBZko7SUFnQlEsYUFBQTtFQUZsQjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvbW8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNkMWUyZjU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuXHJcbiAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9jdXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3NTZweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDk1MHB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MTJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogNTUwcHgpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDMwcHg7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDU1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kaXNjb3VudCxcclxuICAgICAgICBmaWdjYXB0aW9uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRpc2NvdW50IHtcclxuICAgICAgICAgICAgdG9wOiA3NXB4O1xyXG4gICAgICAgICAgICByaWdodDogMjVweDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmlndXJlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogODUlO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZpZ2NhcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA3NXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmhvdC1kZWFscyB7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCByaWRnZSBibGFjaztcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHJpZGdlIGJsYWNrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogOTUwcHgpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTc1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmltYWdlLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDk1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLmluZm8td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogNzUlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGFydGljbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA5NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc0MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYm91Z2h0LFxyXG4gICAgICAgICAgICAgICAgLmxpa2VkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDk1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJvdWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubGlrZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByaWNlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDk1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplLWFkanVzdDogNDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "5naM":
/*!*********************************************************!*\
  !*** ./src/app/core/user-panel/user-panel.component.ts ***!
  \*********************************************************/
/*! exports provided: UserPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return UserPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user/user.service */ "VGjC");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_offers_offers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/offers/offers.service */ "Oat2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core.service */ "mkVU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function UserPanelComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPanelComponent_ul_2_Template_i_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.logoutUserHandler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserPanelComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserPanelComponent {
    constructor(user, store, offers, router, loader) {
        this.user = user;
        this.store = store;
        this.offers = offers;
        this.router = router;
        this.loader = loader;
        this.offers$ = this.offers;
        this.currentUser = this.store.subscribe((data) => {
            this.isLogged = data.login.Session ? data.login.Session : data.login.CurrentUser;
        });
    }
    logoutUserHandler() {
        this.loader.showLoader();
        this.user.logoutUser().subscribe(() => {
            this.router.navigateByUrl('/user/login');
            window.location.reload();
        });
    }
}
UserPanelComponent.ɵfac = function UserPanelComponent_Factory(t) { return new (t || UserPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_offers_offers_service__WEBPACK_IMPORTED_MODULE_3__["OffersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"])); };
UserPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserPanelComponent, selectors: [["app-user-panel"]], decls: 4, vars: 2, consts: [[1, "user-panel"], [1, "options-wrapper"], [4, "ngIf"], ["class", "login", "routerLink", "/user/login", 4, "ngIf"], ["routerLink", "/boughtOffers", 1, "fas", "fa-shopping-cart"], ["routerLink", "/likedOffers", 1, "far", "fa-thumbs-up"], ["routerLink", "/myOffers", 1, "fas", "fa-user-tag"], [1, "fas", "fa-door-open", 3, "click"], ["routerLink", "/user/login", 1, "login"]], template: function UserPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserPanelComponent_ul_2_Template, 9, 0, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserPanelComponent_button_3_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogged);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  height: 100%;\n  align-items: flex-end;\n}\ndiv[_ngcontent-%COMP%]   .options-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: -webkit-max-content;\n  height: max-content;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\ndiv[_ngcontent-%COMP%]   .options-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  background: white;\n}\ndiv[_ngcontent-%COMP%]   .options-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  border: 1px solid black;\n  border-radius: 5px;\n  margin-top: 5px;\n  background: white;\n}\ndiv[_ngcontent-%COMP%]   .options-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 5px 20px;\n}\ndiv[_ngcontent-%COMP%]   .options-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\ndiv[_ngcontent-%COMP%]   button.login[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 150px;\n  color: white;\n  background: #2161ab;\n  font-size: 12px;\n  border: none;\n  height: -webkit-max-content;\n  height: max-content;\n  transition: all 0.5s ease-in-out;\n}\ndiv[_ngcontent-%COMP%]   button.login[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.75);\n  background: #1a4d88;\n  font-size: 20px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFDUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUNaO0FBRVE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQVo7QUFHZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFEcEI7QUFHb0I7RUFDSSxlQUFBO0FBRHhCO0FBUUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxtQkFBQTtFQUNBLGdDQUFBO0FBTlI7QUFRUTtFQUNJLGVBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTloiLCJmaWxlIjoidXNlci1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAub3B0aW9ucy13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5sb2dpbiB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIxNjFhYjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFhNGQ4ODtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "7UCR":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "+rn0");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "cEwO");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing-module */ "nC5Y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







class UserModule {
}
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function UserModule_Factory(t) { return new (t || UserModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();


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
    production: false,
    apiURL: 'https://parseapi.back4app.com/',
    applicationID: 'qi1E5qhzrLhxyQoAzTvqB076XypAS6mm5sXWsbIW',
    restAPIkey: 'POiam2abGNggytZTZKHboOtRRlYVWMul5SdeIBZb',
    endPoints: {
        login: 'login',
        logout: 'logout',
        authenticate: 'parse/sessions/me',
        createOffer: 'classes/offers',
        user: 'users',
    }
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

/***/ "Bl9z":
/*!*****************************************************************!*\
  !*** ./src/app/offers/shopping-cart/shopping-cart.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user/user.service */ "VGjC");
/* harmony import */ var _offers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../offers.service */ "Oat2");
/* harmony import */ var src_app_core_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/core.service */ "mkVU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







function ShoppingCartComponent_section_0_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", offer_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/offers/details/", offer_r3.objectId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](offer_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](offer_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Bought ", offer_r3.bought, " times! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Liked by ", offer_r3.likes.length, " people! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", offer_r3.price, "$");
} }
function ShoppingCartComponent_section_0_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Hmm ... It seems you havent bought anything, yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ShoppingCartComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Bought Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ShoppingCartComponent_section_0_li_4_Template, 15, 7, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ShoppingCartComponent_section_0_li_5_Template, 3, 0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.boughtOffers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.boughtOffers.length === 0);
} }
class ShoppingCartComponent {
    constructor(user, offers, loader) {
        this.user = user;
        this.offers = offers;
        this.loader = loader;
    }
    ngOnInit() {
        this.loader.showLoader();
        this.user.getCurrentUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1))
            .subscribe((data) => {
            if (data.boughtOffers) {
                this.offers.getOffersByIdArray(data.boughtOffers)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1))
                    .subscribe((data) => {
                    this.boughtOffers = data.results;
                    this.loader.hideLoader();
                });
            }
            else {
                this.boughtOffers = [];
                this.loader.hideLoader();
            }
        });
    }
}
ShoppingCartComponent.ɵfac = function ShoppingCartComponent_Factory(t) { return new (t || ShoppingCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_offers_service__WEBPACK_IMPORTED_MODULE_3__["OffersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"])); };
ShoppingCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShoppingCartComponent, selectors: [["app-shopping-cart"]], decls: 1, vars: 1, consts: [["class", "bought-offers", 4, "ngIf"], [1, "bought-offers"], [4, "ngFor", "ngForOf"], ["class", "no-offers-wrapper", 4, "ngIf"], [1, "image-wrapper"], ["alt", "offer-photo.png", 3, "src"], [1, "info-wrapper"], [3, "routerLink"], [1, "bought"], [1, "liked"], [1, "price"], [1, "no-offers-wrapper"]], template: function ShoppingCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ShoppingCartComponent_section_0_Template, 6, 2, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.boughtOffers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], styles: [".bought-offers[_ngcontent-%COMP%] {\n  height: calc(100vh - 305px);\n}\n@media (max-height: 1024px) {\n  .bought-offers[_ngcontent-%COMP%] {\n    height: calc(100vh - 215px);\n  }\n}\n.bought-offers[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 20px 0px 10px 0px;\n}\n.bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  overflow: auto;\n  height: calc(100vh - 380px);\n}\n.bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-top: 3px ridge black;\n  border-bottom: 3px ridge black;\n  margin: 10px 0;\n  padding: 20px;\n  height: 250px;\n}\n@media (max-height: 950px) {\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 10px;\n    height: 200px;\n  }\n}\n@media (max-width: 900px) {\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 5px;\n    height: 175px;\n  }\n}\n@media (max-width: 420px) {\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 5px;\n    height: 125px;\n  }\n}\n.bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 20px;\n}\n.bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 450px;\n  object-fit: contain;\n}\n@media (max-height: 950px) {\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n}\n@media (max-width: 1280px) {\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n@media (max-width: 900px) {\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n@media (max-width: 420px) {\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n.bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  align-content: space-around;\n  flex-basis: 75%;\n  margin-right: 20px;\n}\n.bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  max-height: 100%;\n}\n.bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 20px;\n  text-decoration: underline;\n}\n.bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  overflow: auto;\n  max-height: 150px;\n}\n@media (max-height: 950px), (max-width: 1000px) {\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    max-height: 150px;\n    overflow: hidden;\n  }\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 15px;\n  }\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    max-height: 100px;\n  }\n}\n@media (max-width: 900px) {\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-bottom: 10px;\n  }\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media (max-width: 740px) {\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 500px) {\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .bought[_ngcontent-%COMP%], .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n  margin-right: 50px;\n  font-size: 20px;\n}\n@media (max-height: 950px) {\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .bought[_ngcontent-%COMP%], .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 740px) {\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .bought[_ngcontent-%COMP%], .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-right: 10px;\n  }\n}\n.bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .bought[_ngcontent-%COMP%] {\n  color: red;\n}\n.bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n  color: green;\n}\n.bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n@media (max-height: 950px) {\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    font-size-adjust: 40px;\n  }\n}\n@media (max-width: 1280px) {\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n@media (max-width: 900px) {\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media (max-width: 600px) {\n  .bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.bought-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .no-offers-wrapper[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUFDSjtBQUNJO0VBSEo7SUFJUSwyQkFBQTtFQUVOO0FBQ0Y7QUFBSTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFFUjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFDUjtBQUNRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUNaO0FBQ1k7RUFUSjtJQVVRLGFBQUE7SUFDQSxhQUFBO0VBRWQ7QUFDRjtBQUFZO0VBZEo7SUFlUSxZQUFBO0lBQ0EsYUFBQTtFQUdkO0FBQ0Y7QUFEWTtFQW5CSjtJQW9CUSxZQUFBO0lBQ0EsYUFBQTtFQUlkO0FBQ0Y7QUFGWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUloQjtBQUZnQjtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFJcEI7QUFGb0I7RUFMSjtJQU1RLFlBQUE7RUFLdEI7QUFDRjtBQUhvQjtFQVRKO0lBVVEsWUFBQTtFQU10QjtBQUNGO0FBSm9CO0VBYko7SUFjUSxZQUFBO0VBT3RCO0FBQ0Y7QUFMb0I7RUFqQko7SUFrQlEsWUFBQTtFQVF0QjtBQUNGO0FBSlk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQU1oQjtBQUpnQjtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFNcEI7QUFKb0I7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQU14QjtBQUp3QjtFQUNJLGVBQUE7QUFNNUI7QUFGb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSXhCO0FBRG9CO0VBcEJKO0lBcUJRLGlCQUFBO0lBQ0EsZ0JBQUE7RUFJdEI7RUFGc0I7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7RUFJMUI7RUFEc0I7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUFHMUI7QUFDRjtBQUFvQjtFQUNJO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0VBRTFCO0VBQ3NCO0lBQ0ksZUFBQTtFQUMxQjtBQUNGO0FBRW9CO0VBQ0k7SUFDSSxlQUFBO0VBQTFCO0FBQ0Y7QUFHb0I7RUFDSTtJQUNJLGFBQUE7RUFEMUI7QUFDRjtBQUtnQjs7RUFFSSxrQkFBQTtFQUNBLGVBQUE7QUFIcEI7QUFLb0I7RUFMSjs7SUFNUSxlQUFBO0VBRHRCO0FBQ0Y7QUFHb0I7RUFUSjs7SUFVUSxlQUFBO0lBQ0Esa0JBQUE7RUFDdEI7QUFDRjtBQUVnQjtFQUNJLFVBQUE7QUFBcEI7QUFHZ0I7RUFDSSxZQUFBO0FBRHBCO0FBS1k7RUFDSSxlQUFBO0FBSGhCO0FBS2dCO0VBSEo7SUFJUSxzQkFBQTtFQUZsQjtBQUNGO0FBSWdCO0VBUEo7SUFRUSxlQUFBO0VBRGxCO0FBQ0Y7QUFHZ0I7RUFYSjtJQVlRLGVBQUE7RUFBbEI7QUFDRjtBQUVnQjtFQWZKO0lBZ0JRLGFBQUE7RUFDbEI7QUFDRjtBQUdRO0VBQ0ksdUJBQUE7QUFEWiIsImZpbGUiOiJzaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdWdodC1vZmZlcnMge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzA1cHgpO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LWhlaWdodDogMTAyNHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjE1cHgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM4MHB4KTtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAzcHggcmlkZ2UgYmxhY2s7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCByaWRnZSBibGFjaztcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDk1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbWFnZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA5NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmluZm8td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogNzUlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGFydGljbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogOTUwcHgpLCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJvdWdodCxcclxuICAgICAgICAgICAgICAgIC5saWtlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA5NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ib3VnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmxpa2VkIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA5NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZS1hZGp1c3Q6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5vLW9mZmVycy13cmFwcGVyIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ByE3":
/*!*********************************!*\
  !*** ./src/app/+store/index.ts ***!
  \*********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _reducer_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer-functions */ "hhzS");

const reducers = {
    login: _reducer_functions__WEBPACK_IMPORTED_MODULE_0__["loginReducer"],
    offers: _reducer_functions__WEBPACK_IMPORTED_MODULE_0__["offersReducer"],
};


/***/ }),

/***/ "FxTl":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 Copyrights Reserved - 2021 ShopIT under H.M.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  height: 50px;\n  background: #5495df;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ1IiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICM1NDk1ZGY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Nm1G":
/*!***************************************************!*\
  !*** ./src/app/offers/create/create.component.ts ***!
  \***************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _offers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../offers.service */ "Oat2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/core.service */ "mkVU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function CreateComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please input the name of the product.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please input a valid price number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please type some description for the product.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_p_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please paste a valid product Image URL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_p_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose the category of the product.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CreateComponent {
    constructor(store, offer, router, activatedRoute, loader) {
        this.store = store;
        this.offer = offer;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loader = loader;
        this.id = this.activatedRoute.snapshot.params.id ? this.activatedRoute.snapshot.params.id : undefined;
        this.currentElement = this.offer.editOfferData
            ? this.offer.editOfferData
            : this.offer.getOfferById(this.id).subscribe((data) => {
                return data.results[0];
            });
    }
    ngOnInit() {
    }
    formHandler(formData) {
        this.loader.showLoader();
        if (this.id) { //Update existing Offer
            formData.price = Number(formData.price);
            this.offer.updateOffer(this.id, formData).subscribe(() => {
                this.loader.hideLoader();
                this.router.navigateByUrl('/offers/details/' + this.id);
            });
        }
        else { //Create new Offer
            const currentUser = this.store.subscribe((data) => {
                formData.owner = data.login.CurrentUser.objectId;
            });
            formData.likes = [];
            formData.bought = 0;
            formData.promotion = false;
            formData.promotionPercentage = 0;
            this.offer.createOffer(formData).subscribe((data) => {
                this.loader.hideLoader();
                this.router.navigateByUrl(`/offers/details/${data.objectId}`);
            });
        }
    }
    ngOnDestroy() {
        this.id = undefined;
        this.offer.editOfferData = undefined;
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_offers_service__WEBPACK_IMPORTED_MODULE_2__["OffersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], decls: 49, vars: 21, consts: [[1, "form-wrapper"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-information"], [1, "name-wrapper"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "required", "", 3, "ngModel"], ["name", "ngModel"], ["class", "check-error", 4, "ngIf"], [1, "price-wrapper"], ["for", "price"], ["type", "number", "name", "price", "id", "price", "required", "", 3, "ngModel"], ["price", "ngModel"], [1, "description-wrapper"], ["for", "description"], ["name", "description", "id", "description", "cols", "30", "rows", "10", "required", "", "required", "", 3, "ngModel"], ["description", "ngModel"], [1, "image-wrapper"], ["for", "imageUrl"], ["type", "url", "name", "imageUrl", "id", "imageUrl", "required", "", "required", "", 3, "ngModel"], ["imageUrl", "ngModel"], [1, "category-wrapper"], ["for", "category"], ["name", "category", "id", "category", "required", "", "required", "", 3, "ngModel"], ["category", "ngModel"], ["value", "cpu"], ["value", "gpu"], ["value", "ram"], ["value", "hdd"], ["value", "cooling"], ["value", "ps"], [1, "check-error"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.formHandler(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "To submit a new item offer, please fill all of the following fields.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreateComponent_p_10_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Price:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreateComponent_p_16_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CreateComponent_p_22_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Image URL:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CreateComponent_p_28_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Category:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "CPU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Graphics Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "RAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Hard Drive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cooling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Power Supply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CreateComponent_p_46_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_r1.touched && !!_r1.errors ? "input-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngModel", ctx.currentElement.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.touched && !!_r1.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_r3.touched && _r3.errors ? "input-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngModel", ctx.currentElement.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.touched && _r3.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_r5.touched && _r5.errors ? "input-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngModel", ctx.currentElement.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.touched && !!_r5.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_r7.touched && _r7.errors ? "input-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngModel", ctx.currentElement.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.touched && !!_r7.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_r9.touched && _r9.errors ? "input-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngModel", ctx.currentElement.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.touched && !!_r9.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.id ? "Update" : "Create");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: ["div.form-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 20px;\n  height: calc(100vh - 305px);\n}\n@media (max-height: 1024px) {\n  div.form-wrapper[_ngcontent-%COMP%] {\n    height: -webkit-max-content;\n    height: max-content;\n  }\n}\ndiv.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 20px;\n  border: 3px ridge #2161ab;\n  margin: auto;\n  width: 100%;\n  max-width: 1024px;\n  border-radius: 20px;\n  height: -webkit-max-content;\n  height: max-content;\n}\ndiv.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-information[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n}\ndiv.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  font-size: 20px;\n}\ndiv.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .check-error[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: 5px;\n  font-style: italic;\n  font-size: 16px;\n}\n@media (max-width: 420px) {\n  div.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .check-error[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\ndiv.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 110px;\n  text-align: left;\n  margin-right: 10px;\n}\ndiv.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\ndiv.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%]   .check-error[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n}\ndiv.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], div.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 99%;\n  font-size: 22px;\n  border-radius: 5px;\n}\ndiv.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.input-error[_ngcontent-%COMP%], div.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea.input-error[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\ndiv.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 35px;\n}\ndiv.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 50%;\n  color: white;\n  padding: 5px;\n  border: none;\n  background: #5494de;\n  position: relative;\n  left: 25%;\n  font-size: 18px;\n  border-radius: 10px;\n  transition: all 0.5s ease-in-out;\n}\ndiv.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);\n  background: #1a4d88;\n  font-size: 20px;\n}\ndiv.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 35px;\n  border-radius: 5px;\n  font-size: 20px;\n  width: 100%;\n}\ndiv.form-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select.input-error[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUFDSjtBQUNJO0VBTko7SUFPUSwyQkFBQTtJQUFBLG1CQUFBO0VBRU47QUFDRjtBQUFJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQUEsbUJBQUE7QUFFUjtBQUFRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBRVo7QUFDUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQ1o7QUFDWTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ2hCO0FBQ2dCO0VBTko7SUFPUSxlQUFBO0VBRWxCO0FBQ0Y7QUFFUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBWjtBQUdRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQURaO0FBR1k7RUFDSSxnQkFBQTtBQURoQjtBQUtROztFQUVJLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFIWjtBQUtZOztFQUNJLHFCQUFBO0FBRmhCO0FBTVE7RUFDSSxZQUFBO0FBSlo7QUFPUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBTFo7QUFPWTtFQUNJLGVBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUxoQjtBQVNRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFQWjtBQVNZO0VBQ0kscUJBQUE7QUFQaEIiLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmZvcm0td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDVweCk7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcclxuICAgICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHJpZGdlICMyMTYxYWI7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAyNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuXHJcbiAgICAgICAgLmZvcm0taW5mb3JtYXRpb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAuY2hlY2stZXJyb3Ige1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNjcmlwdGlvbi13cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLmNoZWNrLWVycm9yIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0LFxyXG4gICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgd2lkdGg6IDk5JTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAmLmlucHV0LWVycm9yIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTQ5NGRlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWE0ZDg4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICYuaW5wdXQtZXJyb3Ige1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Oat2":
/*!******************************************!*\
  !*** ./src/app/offers/offers.service.ts ***!
  \******************************************/
/*! exports provided: OffersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersService", function() { return OffersService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../+store/actions */ "P4YV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _core_core_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/core.service */ "mkVU");










class OffersService {
    constructor(http, router, store, loader) {
        this.http = http;
        this.router = router;
        this.store = store;
        this.loader = loader;
        this.offerHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'X-Parse-Application-Id': _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].applicationID,
            'X-Parse-REST-API-Key': _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].restAPIkey,
            'Content-Type': 'application/json'
        });
        this.sortCriteria = {
            date: "",
            price: "",
            name: ""
        };
    }
    createOffer(offerData) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endPoints.createOffer}`, offerData, { headers: this.offerHeaders });
    }
    filterOffersByCategory(category) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endPoints.createOffer}/`, {
            headers: this.offerHeaders,
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('where', `{"category":"${category}"}`)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
            this.store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__["offers"])(data));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => { throw new Error(err); }));
    }
    filterOffersByOwner(owner) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endPoints.createOffer}/`, {
            headers: this.offerHeaders,
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('where', `{"owner":"${owner}"}`)
        });
    }
    getOfferById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endPoints.createOffer}/`, {
            headers: this.offerHeaders,
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('where', `{"objectId":"${id}"}`)
        });
    }
    generateOffersUrlEncodedString(idArray) {
        if (idArray.length === 0 || !idArray) {
            return '{"objectId":"0000000000"}';
        }
        let urlString = '{"$or":[';
        idArray.forEach((id) => {
            urlString += `{"objectId":"${id}"},`;
        });
        urlString = urlString.substring(0, urlString.length - 1);
        urlString += ']}';
        return urlString;
    }
    getOffersByIdArray(idArray) {
        if (!idArray) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"];
        }
        const propertyString = this.generateOffersUrlEncodedString(idArray);
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endPoints.createOffer}/`, {
            headers: this.offerHeaders,
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('where', propertyString)
        });
    }
    getPromoOffers() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endPoints.createOffer}/`, {
            headers: this.offerHeaders,
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('where', '{"promotion":true}')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
            this.store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__["promotion"])(data.results));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => { throw new Error(err); }));
    }
    getBestSellerOffers() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endPoints.createOffer}/`, {
            headers: this.offerHeaders,
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('limit', '5')
                .set('order', '-bought')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
            this.store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__["bestSellers"])(data.results));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => { throw new Error(err); }));
    }
    updateOffer(offerId, offerData) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endPoints.createOffer}/${offerId}`, offerData, { headers: this.offerHeaders });
    }
    deleteOffer(offerId) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].endPoints.createOffer}/${offerId}`, { headers: this.offerHeaders });
    }
    showFilteredList(category) {
        this.loader.showLoader();
        this.sortCriteria.name = "";
        this.sortCriteria.date = "";
        this.sortCriteria.price = "";
        this.filterOffersByCategory(category).subscribe(() => {
            this.loader.hideLoader();
            this.router.navigateByUrl(`offers/${category}`);
        });
    }
}
OffersService.ɵfac = function OffersService_Factory(t) { return new (t || OffersService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_core_service__WEBPACK_IMPORTED_MODULE_8__["CoreService"])); };
OffersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: OffersService, factory: OffersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "P4YV":
/*!***********************************!*\
  !*** ./src/app/+store/actions.ts ***!
  \***********************************/
/*! exports provided: login, authenticate, offers, promotion, bestSellers, focusedOffer, myOffers, likedOffers, boughtOffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offers", function() { return offers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promotion", function() { return promotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bestSellers", function() { return bestSellers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusedOffer", function() { return focusedOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myOffers", function() { return myOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likedOffers", function() { return likedOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boughtOffers", function() { return boughtOffers; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const authNamespace = '[AUTH]';
const offersNamespace = '[OFF]';
const login = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${authNamespace} Login`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const authenticate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${authNamespace} Authenticate`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const offers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${offersNamespace} Offers`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const promotion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${offersNamespace} Promotions`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const bestSellers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${offersNamespace} BestSellers`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const focusedOffer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${offersNamespace} FocusedOffer`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const myOffers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${offersNamespace} MyOffers`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const likedOffers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${offersNamespace} LikedOffers`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const boughtOffers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${offersNamespace} BoughtOffers`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


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
        this.title = 'it-shop';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "VGjC":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../+store/actions */ "P4YV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









class UserService {
    constructor(http, store, route) {
        this.http = http;
        this.store = store;
        this.route = route;
        this.loginHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'X-Parse-Application-Id': _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationID,
            'X-Parse-REST-API-Key': _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].restAPIkey,
            'X-Parse-Revocable-Session': '1',
            'Content-Type': 'application/json'
        });
    }
    login(loginData) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL}${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endPoints.login}`, {
            headers: this.loginHeaders,
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('username', loginData.username)
                .set('password', loginData.password)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((data) => {
            this.store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__["login"])({
                userId: data.objectId,
                sessionToken: data.sessionToken
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err)));
    }
    checkCurrentSession(currentSessionId = localStorage.getItem('sessionToken')) {
        let currentUser;
        this.store.subscribe((data) => {
            currentUser = data.login.Session;
        });
        if (currentUser) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"];
        }
        ;
        if (currentSessionId) {
            return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL}${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endPoints.authenticate}`, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    'X-Parse-Application-Id': _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationID,
                    'X-Parse-REST-API-Key': _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].restAPIkey,
                    'X-Parse-Session-Token': currentSessionId,
                    'Content-Type': 'application/json'
                })
            });
        }
    }
    checkSession(currentSessionId = localStorage.getItem('sessionToken')) {
        if (currentSessionId) {
            this.checkCurrentSession().subscribe((data) => {
                const currentDate = new Date().getTime();
                const expirationDate = new Date(data.expiresAt.iso).getTime();
                if (expirationDate - currentDate > 0) {
                    this.store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__["login"])({
                        userId: data.user.objectId,
                        sessionToken: data.sessionToken,
                    }));
                }
                else {
                    localStorage.removeItem('sessionToken');
                    this.route.navigateByUrl('/home');
                }
            });
        }
    }
    getCurrentUser(currentSessionId = localStorage.getItem('sessionToken')) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL}${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endPoints.user}/me`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'X-Parse-Application-Id': _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationID,
                'X-Parse-REST-API-Key': _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].restAPIkey,
                'X-Parse-Session-Token': currentSessionId,
                'Content-Type': 'application/json'
            })
        });
    }
    updateUser(userData, userId, currentSessionId = localStorage.getItem('sessionToken')) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL}${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endPoints.user}/${userId}`, userData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'X-Parse-Application-Id': _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationID,
                'X-Parse-REST-API-Key': _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].restAPIkey,
                'X-Parse-Session-Token': currentSessionId,
                'Content-Type': 'application/json'
            })
        });
    }
    logoutUser() {
        const currentSessionId = localStorage.getItem('sessionToken');
        localStorage.removeItem('sessionToken');
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL}${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endPoints.logout}`, {}, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'X-Parse-Application-Id': _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationID,
                'X-Parse-REST-API-Key': _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].restAPIkey,
                'X-Parse-Session-Token': currentSessionId,
                'Content-Type': 'application/json'
            })
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "VUE2":
/*!***********************************************!*\
  !*** ./src/app/offers/list/list.component.ts ***!
  \***********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/+store/actions */ "P4YV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _offers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../offers.service */ "Oat2");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/user.service */ "VGjC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/core.service */ "mkVU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ListComponent_div_19_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", offer_r1.price, "$");
} }
function ListComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ListComponent_div_19_span_7_Template, 3, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", offer_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](offer_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", offer_r1.promotion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](offer_r1.promotion ? "new-value" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", offer_r1.promotion ? (offer_r1.price - offer_r1.price / 100 * offer_r1.promotionPercentage).toFixed(2) : offer_r1.price.toFixed(2), "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/offers/details/", offer_r1.objectId, "");
} }
class ListComponent {
    constructor(offers, store, user, activatedRoute, loader) {
        this.offers = offers;
        this.store = store;
        this.user = user;
        this.activatedRoute = activatedRoute;
        this.loader = loader;
        this.sortCriteria = this.offers.sortCriteria;
        this.showDetails = this.offers;
    }
    filterOffersByName() {
        const offers = Array.from(this.currentOffers);
        const sortedOffers = offers.sort((first, second) => {
            if (this.sortCriteria.name === "fas fa-sort-down" || this.sortCriteria.name === "") {
                return first.name.localeCompare(second.name);
            }
            else {
                return second.name.localeCompare(first.name);
            }
        });
        if (this.offers.sortCriteria.name === "fas fa-sort-down" || this.offers.sortCriteria.name === "") {
            this.offers.sortCriteria.name = 'fas fa-sort-up';
        }
        else {
            this.offers.sortCriteria.name = 'fas fa-sort-down';
        }
        this.offers.sortCriteria.date = "";
        this.offers.sortCriteria.price = "";
        this.currentOffers = sortedOffers;
    }
    filterOffersByPrice() {
        const offers = Array.from(this.currentOffers);
        const sortedOffers = offers.sort((first, second) => {
            if (this.offers.sortCriteria.price === "fas fa-sort-down" || this.offers.sortCriteria.price === "") {
                return first.price - second.price;
            }
            else {
                return second.price - first.price;
            }
        });
        if (this.offers.sortCriteria.price === "fas fa-sort-down" || this.offers.sortCriteria.price === "") {
            this.offers.sortCriteria.price = 'fas fa-sort-up';
        }
        else {
            this.offers.sortCriteria.price = 'fas fa-sort-down';
        }
        this.offers.sortCriteria.name = "";
        this.offers.sortCriteria.date = "";
        this.currentOffers = sortedOffers;
    }
    filterOffersByDate() {
        const offers = Array.from(this.currentOffers);
        const sortedOffers = offers.sort((first, second) => {
            const firstDate = new Date(first.createdAt).getTime();
            const secondDate = new Date(second.createdAt).getTime();
            if (this.offers.sortCriteria.date === "fas fa-sort-down" || this.offers.sortCriteria.date === "") {
                return firstDate - secondDate;
            }
            else {
                return secondDate - firstDate;
            }
        });
        if (this.offers.sortCriteria.date === "fas fa-sort-down" || this.offers.sortCriteria.date === "") {
            this.offers.sortCriteria.date = 'fas fa-sort-up';
        }
        else {
            this.offers.sortCriteria.date = 'fas fa-sort-down';
        }
        this.offers.sortCriteria.name = "";
        this.offers.sortCriteria.price = "";
        this.currentOffers = sortedOffers;
    }
    ngOnInit() {
        this.loader.showLoader();
        this.user.checkSession();
        if (localStorage.getItem('sessionToken')) {
            this.user.getCurrentUser().subscribe((data) => {
                const userData = {
                    username: data.username,
                    objectId: data.objectId,
                    likedOffers: data.likedOffers ? data.likedOffers : [],
                    boughtOffers: data.boughtOffers ? data.boughtOffers : []
                };
                this.store.dispatch(Object(src_app_store_actions__WEBPACK_IMPORTED_MODULE_0__["authenticate"])(userData));
            });
        }
        this.store
            .subscribe((data) => {
            if (!data.offers.currentOffers) {
                this.offers.filterOffersByCategory(this.activatedRoute.snapshot.params.category).subscribe((data) => {
                    this.currentOffers = data.results;
                    this.loader.hideLoader();
                });
            }
            else {
                this.currentOffers = data.offers.currentOffers.results;
                this.loader.hideLoader();
            }
        });
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_offers_service__WEBPACK_IMPORTED_MODULE_2__["OffersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_core_service__WEBPACK_IMPORTED_MODULE_6__["CoreService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 20, vars: 10, consts: [[1, "main-container"], [3, "click"], [1, "products"], [1, "product-list"], ["class", "product-wrapper", 4, "ngFor", "ngForOf"], [1, "product-wrapper"], [1, "image-wrapper"], ["alt", "image.png", 3, "src"], [1, "price-button-wrapper"], ["class", "old-value", 4, "ngIf"], ["type", "button", 3, "routerLink"], [1, "old-value"], [1, "fas", "fa-angle-double-right"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sort by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_Template_li_click_5_listener() { return ctx.filterOffersByPrice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_Template_li_click_9_listener() { return ctx.filterOffersByName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_Template_li_click_13_listener() { return ctx.filterOffersByDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ListComponent_div_19_Template, 12, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.sortCriteria.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.sortCriteria.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.sortCriteria.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currentOffers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".main-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n@media (max-width: 950px) {\n  .main-container[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 200px;\n  background: #c4daf3;\n}\n@media (max-width: 950px) {\n  .main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding: 5px 10px;\n    width: auto;\n    flex-basis: 100%;\n    position: sticky;\n    top: 0px;\n  }\n}\n@media (max-width: 750px) {\n  .main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n    top: 50px;\n    z-index: -1;\n  }\n}\n@media (max-width: 400px) {\n  .main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n}\n.main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 24px;\n  text-align: center;\n}\n@media (max-width: 950px) {\n  .main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: sticky;\n  top: 10px;\n}\n@media (max-width: 950px) {\n  .main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    position: static;\n    display: flex;\n  }\n}\n.main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px 0;\n  border-radius: 10px;\n  margin: 10px;\n  background: #2161ab;\n  color: white;\n  transition: all 0.5s ease-in-out;\n}\n@media (max-width: 950px) {\n  .main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 5px 15px;\n    margin: 0px 2px;\n  }\n}\n.main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.75);\n  background: #1a4d88;\n}\n.main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.main-container[_ngcontent-%COMP%]   section.products[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main-container[_ngcontent-%COMP%]   section.products[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n.main-container[_ngcontent-%COMP%]   section.products[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n}\n.main-container[_ngcontent-%COMP%]   div.product-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n@media (max-width: 950px) {\n  .main-container[_ngcontent-%COMP%]   div.product-list[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.main-container[_ngcontent-%COMP%]   div.product-list[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px;\n  padding: 5px;\n  width: 220px;\n  height: 350px;\n  border: 3px ridge black;\n  border-radius: 5px;\n}\n.main-container[_ngcontent-%COMP%]   div.product-list[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  box-sizing: border-box;\n}\n.main-container[_ngcontent-%COMP%]   div.product-list[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.main-container[_ngcontent-%COMP%]   div.product-list[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 10px;\n  max-height: 60px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.main-container[_ngcontent-%COMP%]   div.product-list[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .price-button-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.main-container[_ngcontent-%COMP%]   div.product-list[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .price-button-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  font-size: 20px;\n  color: red;\n}\n.main-container[_ngcontent-%COMP%]   div.product-list[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .price-button-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .old-value[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #891515;\n  font-size: 16px;\n}\n.main-container[_ngcontent-%COMP%]   div.product-list[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .price-button-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .old-value[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n.main-container[_ngcontent-%COMP%]   div.product-list[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .price-button-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .new-value[_ngcontent-%COMP%] {\n  color: green;\n  font-weight: 700;\n}\n.main-container[_ngcontent-%COMP%]   div.product-list[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .price-button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-radius: 10px;\n  background: #2161ab;\n  color: white;\n  margin-bottom: 5px;\n  width: 90%;\n  border: none;\n  transition: all 0.5s ease-in-out;\n}\n.main-container[_ngcontent-%COMP%]   div.product-list[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .price-button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);\n  background: #1a4d88;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBSko7SUFLUSxlQUFBO0VBRU47QUFDRjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQVE7RUFQSjtJQVFRLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFFBQUE7RUFHVjtBQUNGO0FBRFE7RUFoQko7SUFpQlEsU0FBQTtJQUNBLFdBQUE7RUFJVjtBQUNGO0FBRlE7RUFyQko7SUFzQlEsWUFBQTtFQUtWO0FBQ0Y7QUFIUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUtaO0FBSFk7RUFKSjtJQUtRLGVBQUE7RUFNZDtBQUNGO0FBSFE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUtaO0FBSFk7RUFMSjtJQU1RLGdCQUFBO0lBQ0EsYUFBQTtFQU1kO0FBQ0Y7QUFKWTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBTWhCO0FBSmdCO0VBVEo7SUFVUSxpQkFBQTtJQUNBLGVBQUE7RUFPbEI7QUFDRjtBQUxnQjtFQUNJLGVBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0FBT3BCO0FBSmdCO0VBQ0ksZ0JBQUE7QUFNcEI7QUFBSTtFQUNJLFdBQUE7QUFFUjtBQUFRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUVaO0FBQVk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFFaEI7QUFHSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBRFI7QUFHUTtFQUpKO0lBS1EsdUJBQUE7RUFBVjtBQUNGO0FBRVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFBWjtBQUVZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUFoQjtBQUVnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBcEI7QUFJWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRmhCO0FBS1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFIaEI7QUFLZ0I7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBSHBCO0FBS29CO0VBQ0ksNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUh4QjtBQUt3QjtFQUNJLGNBQUE7QUFINUI7QUFPb0I7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFMeEI7QUFTZ0I7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFQcEI7QUFTb0I7RUFDSSxlQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtBQVB4QiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgYXNpZGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYzRkYWYzO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMTYxYWI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWE0ZDg4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VjdGlvbi5wcm9kdWN0cyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LnByb2R1Y3QtbGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9kdWN0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHJpZGdlIGJsYWNrO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAuaW1hZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJpY2UtYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAub2xkLXZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODkxNTE1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubmV3LXZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMTYxYWI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxYTRkODg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+store */ "ByE3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/footer/footer.component */ "FxTl");
/* harmony import */ var _core_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/loader/loader.component */ "aPAT");
/* harmony import */ var _core_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/navigation/navigation.component */ "bh3X");
/* harmony import */ var _core_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/user-panel/user-panel.component */ "5naM");
/* harmony import */ var _offers_offers_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./offers/offers.module */ "x4ys");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user.module */ "7UCR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _core_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
        _core_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_11__["UserPanelComponent"],
        _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _core_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _offers_offers_module__WEBPACK_IMPORTED_MODULE_12__["OffersModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_13__["UserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_4__["reducers"]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"].instrument({
                maxAge: 10
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _offers_offers_module__WEBPACK_IMPORTED_MODULE_12__["OffersModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
        _user_user_module__WEBPACK_IMPORTED_MODULE_13__["UserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"]] }); })();


/***/ }),

/***/ "aPAT":
/*!*************************************************!*\
  !*** ./src/app/core/loader/loader.component.ts ***!
  \*************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core.service */ "mkVU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoaderComponent {
    constructor(loader) {
        this.loader = loader;
        this.loaderDisplay = this.loader.loaderDisplay;
    }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service__WEBPACK_IMPORTED_MODULE_1__["CoreService"])); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 1, consts: [["class", "loader-wrapper", 4, "ngIf"], [1, "loader-wrapper"], [1, "loader"], [1, "bar1"], [1, "bar2"], [1, "bar3"], [1, "bar4"], [1, "bar5"], [1, "bar6"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 8, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaderDisplay.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["div.loader-wrapper[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100vh !important;\n  background: rgba(1, 1, 1, 0.8);\n  position: fixed !important;\n  z-index: 10000 !important;\n}\ndiv.loader-wrapper[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 120px;\n  height: 100px;\n  text-align: center;\n  font-size: 10px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n}\ndiv.loader-wrapper[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 16px;\n  float: left;\n  margin-left: 2px;\n  border-radius: 10px;\n  animation: delay 0.8s infinite ease-in-out;\n}\ndiv.loader-wrapper[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\n  background-color: #002B5C;\n}\ndiv.loader-wrapper[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {\n  background-color: #1D5596;\n  animation-delay: -0.7s;\n}\ndiv.loader-wrapper[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  background-color: #236AB9;\n  animation-delay: -0.6s;\n}\ndiv.loader-wrapper[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .bar4[_ngcontent-%COMP%] {\n  background-color: #609CE1;\n  animation-delay: -0.5s;\n}\ndiv.loader-wrapper[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .bar5[_ngcontent-%COMP%] {\n  background-color: #94C6FF;\n  animation-delay: -0.4s;\n}\ndiv.loader-wrapper[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .bar6[_ngcontent-%COMP%] {\n  background-color: #C7E1FF;\n  animation-delay: -0.3s;\n}\n@keyframes delay {\n  0%, 40%, 100% {\n    transform: scaleY(0.05);\n    -webkit-transform: scaleY(0.05);\n  }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvREFBQTtBQUNSO0FBQ1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsMENBQUE7QUFDWjtBQUVRO0VBQ0kseUJBQUE7QUFBWjtBQUVRO0VBQ0kseUJBQUE7RUFFQSxzQkFBQTtBQUFaO0FBRVE7RUFDSSx5QkFBQTtFQUVBLHNCQUFBO0FBQVo7QUFFUTtFQUNJLHlCQUFBO0VBRUEsc0JBQUE7QUFBWjtBQUVRO0VBQ0kseUJBQUE7RUFFQSxzQkFBQTtBQUFaO0FBRVE7RUFDSSx5QkFBQTtFQUVBLHNCQUFBO0FBQVo7QUFlSTtFQUNJO0lBR0ksdUJBQUE7SUFDQSwrQkFBQTtFQVBWO0VBU007SUFDSSxvQkFBQTtJQUNBLDRCQUFBO0VBUFY7QUFDRiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYubG9hZGVyLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMSwgMSwgMSwgMC44KTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTAwMDAgIWltcG9ydGFudDtcclxuXHJcbiAgICAubG9hZGVyIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcclxuXHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGRlbGF5IDAuOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZGVsYXkgMC44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYXIxIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMkI1QztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJhcjIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQ1NTk2O1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuN3M7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYXIzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIzNkFCOTtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjZzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjZzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFyNCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDlDRTE7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJhcjUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRDNkZGO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNHM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYXI2IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M3RTFGRjtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgZGVsYXkge1xyXG4gICAgICAgIDAlLFxyXG4gICAgICAgIDQwJSxcclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjA1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgMjAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyBkZWxheSB7XHJcbiAgICAgICAgMCUsXHJcbiAgICAgICAgNDAlLFxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjA1KTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjA1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgMjAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "bh3X":
/*!*********************************************************!*\
  !*** ./src/app/core/navigation/navigation.component.ts ***!
  \*********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_offers_offers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/offers/offers.service */ "Oat2");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NavigationComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add YOUR Offer!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
const _c1 = function (a0) { return { "shown": a0 }; };
class NavigationComponent {
    constructor(offer, store, router) {
        this.offer = offer;
        this.store = store;
        this.router = router;
        this.menuButtonIsToggled = false;
        this.menuIsHidden = false;
        this.currentUser = this.store.subscribe((data) => {
            this.isLogged = data.login.Session;
        });
        this.offerService = this.offer;
        router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
                this.menuButtonIsToggled = false;
                this.menuIsHidden = false;
            }
        });
    }
    toggleMenu() {
        if (this.menuButtonIsToggled) {
            this.menuButtonIsToggled = false;
            this.menuIsHidden = false;
        }
        else {
            this.menuButtonIsToggled = true;
            this.menuIsHidden = true;
        }
    }
    ngOnChanges() {
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_offers_offers_service__WEBPACK_IMPORTED_MODULE_2__["OffersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 32, vars: 7, consts: [[1, "container", 3, "ngClass", "click"], ["width", "150", "height", "150", "viewBox", "0 0 200 200"], ["stroke-width", "6.5", "stroke-linecap", "round"], ["d", "M72 82.286h28.75", "fill", "#009100", "fill-rule", "evenodd", "stroke", "#fff"], ["d", "M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554", "fill", "none", "stroke", "#fff"], ["d", "M72 125.143h28.75", "fill", "#009100", "fill-rule", "evenodd", "stroke", "#fff"], ["d", "M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554", "fill", "none", "stroke", "#fff"], ["d", "M100.75 82.286h28.75", "fill", "#009100", "fill-rule", "evenodd", "stroke", "#fff"], ["d", "M100.75 125.143h28.75", "fill", "#009100", "fill-rule", "evenodd", "stroke", "#fff"], [3, "ngClass"], ["routerLink", "home"], [3, "click"], ["routerLink", "add", "class", "user-offer", 4, "ngIf"], ["routerLink", "add", 1, "user-offer"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_div_click_0_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_li_click_13_listener() { return ctx.offerService.showFilteredList("cpu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "CPUs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_li_click_16_listener() { return ctx.offerService.showFilteredList("gpu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Graphic Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_li_click_19_listener() { return ctx.offerService.showFilteredList("ram"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "RAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_li_click_22_listener() { return ctx.offerService.showFilteredList("hdd"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Hard Drives");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_li_click_25_listener() { return ctx.offerService.showFilteredList("cooling"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Cooling");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationComponent_Template_li_click_28_listener() { return ctx.offerService.showFilteredList("ps"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Power Supply");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, NavigationComponent_li_31_Template, 2, 0, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.menuButtonIsToggled));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, ctx.menuIsHidden));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogged);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: none;\n  width: 50px;\n  height: 50px;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 750px) {\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    position: absolute;\n    top: 0px;\n    left: 55px;\n  }\n}\n.container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\npath[_ngcontent-%COMP%] {\n  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);\n}\npath[_ngcontent-%COMP%]:nth-child(1) {\n  transform-origin: 36% 40%;\n}\npath[_ngcontent-%COMP%]:nth-child(2) {\n  stroke-dasharray: 29 299;\n}\npath[_ngcontent-%COMP%]:nth-child(3) {\n  transform-origin: 35% 63%;\n}\npath[_ngcontent-%COMP%]:nth-child(4) {\n  stroke-dasharray: 29 299;\n}\npath[_ngcontent-%COMP%]:nth-child(5) {\n  transform-origin: 61% 52%;\n}\npath[_ngcontent-%COMP%]:nth-child(6) {\n  transform-origin: 62% 52%;\n}\n.active[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateX(9px) translateY(1px) rotate(45deg);\n}\n.active[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(2) {\n  stroke-dasharray: 225 299;\n  stroke-dashoffset: -72px;\n}\n.active[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateX(9px) translateY(1px) rotate(-45deg);\n}\n.active[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(4) {\n  stroke-dasharray: 225 299;\n  stroke-dashoffset: -72px;\n}\n.active[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(5) {\n  transform: translateX(9px) translateY(1px) rotate(-45deg);\n}\n.active[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(6) {\n  transform: translateX(9px) translateY(1px) rotate(45deg);\n}\nul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 10px 0;\n  gap: 2%;\n  list-style: none;\n  background: #5495df;\n  transition: all 0.5s ease-in-out;\n}\nul.shown[_ngcontent-%COMP%] {\n  left: 0;\n  z-index: 99999;\n}\n@media (max-width: 750px) {\n  ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n    position: absolute;\n    left: -100vw;\n  }\n}\n@media (max-height: 1024px) {\n  ul[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  text-align: center;\n  color: #ffffff;\n  transition: all 0.5s ease-in-out;\n  margin: 0 5px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: black;\n  text-shadow: 5px 5px 3px rgba(0, 0, 0, 0.5);\n}\nul[_ngcontent-%COMP%]   .user-offer[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 10px;\n  background: #2161ab;\n  margin: 5px;\n}\nul[_ngcontent-%COMP%]   .user-offer[_ngcontent-%COMP%]:hover {\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.75);\n  background: #1a4d88;\n  color: white;\n  text-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBUko7SUFTUSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsVUFBQTtFQUVOO0FBQ0Y7QUFBSTtFQUNJLHdEQUFBO0FBRVI7QUFFQTtFQUNJLHdCQUFBO0FBQ0o7QUFDQTtFQUNJLG1LQUFBO0FBRUo7QUFDQTtFQUNJLHlCQUFBO0FBRUo7QUFBQTtFQUNJLHdCQUFBO0FBR0o7QUFEQTtFQUNJLHlCQUFBO0FBSUo7QUFGQTtFQUNJLHdCQUFBO0FBS0o7QUFIQTtFQUNJLHlCQUFBO0FBTUo7QUFKQTtFQUNJLHlCQUFBO0FBT0o7QUFMQTtFQUNJLHdEQUFBO0FBUUo7QUFOQTtFQUNJLHlCQUFBO0VBQ0Esd0JBQUE7QUFTSjtBQVBBO0VBQ0kseURBQUE7QUFVSjtBQVJBO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtBQVdKO0FBVEE7RUFDSSx5REFBQTtBQVlKO0FBVkE7RUFDSSx3REFBQTtBQWFKO0FBVkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFhSjtBQVhJO0VBQ0ksT0FBQTtFQUNBLGNBQUE7QUFhUjtBQVZJO0VBZko7SUFnQlEsc0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUFhTjtBQUNGO0FBWEk7RUFyQko7SUFzQlEsWUFBQTtFQWNOO0FBQ0Y7QUFaSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQWNSO0FBWlE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0FBY1o7QUFWSTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFZUjtBQVZRO0VBQ0ksZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVlaIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBsZWZ0OiA1NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUgc3ZnIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5wYXRoIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBzdHJva2UtZGFzaGFycmF5IDUwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQgNTAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxufVxyXG5wYXRoOm50aC1jaGlsZCgxKSB7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAzNiUgNDAlO1xyXG59XHJcbnBhdGg6bnRoLWNoaWxkKDIpIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDI5IDI5OTtcclxufVxyXG5wYXRoOm50aC1jaGlsZCgzKSB7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAzNSUgNjMlO1xyXG59XHJcbnBhdGg6bnRoLWNoaWxkKDQpIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDI5IDI5OTtcclxufVxyXG5wYXRoOm50aC1jaGlsZCg1KSB7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA2MSUgNTIlO1xyXG59XHJcbnBhdGg6bnRoLWNoaWxkKDYpIHtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDYyJSA1MiU7XHJcbn1cclxuLmFjdGl2ZSBwYXRoOm50aC1jaGlsZCgxKSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOXB4KSB0cmFuc2xhdGVZKDFweCkgcm90YXRlKDQ1ZGVnKTtcclxufVxyXG4uYWN0aXZlIHBhdGg6bnRoLWNoaWxkKDIpIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDIyNSAyOTk7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTcycHg7XHJcbn1cclxuLmFjdGl2ZSBwYXRoOm50aC1jaGlsZCgzKSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOXB4KSB0cmFuc2xhdGVZKDFweCkgcm90YXRlKC00NWRlZyk7XHJcbn1cclxuLmFjdGl2ZSBwYXRoOm50aC1jaGlsZCg0KSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAyMjUgMjk5O1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC03MnB4O1xyXG59XHJcbi5hY3RpdmUgcGF0aDpudGgtY2hpbGQoNSkge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgdHJhbnNsYXRlWSgxcHgpIHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcbi5hY3RpdmUgcGF0aDpudGgtY2hpbGQoNikge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDlweCkgdHJhbnNsYXRlWSgxcHgpIHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZ2FwOiAyJTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTQ5NWRmO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJi5zaG93biB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB6LWluZGV4OiA5OTk5OTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtMTAwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItb2ZmZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIxNjFhYjtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFhNGQ4ODtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "cEwO":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 2, vars: 0, template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "register works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "di8C":
/*!*************************************************!*\
  !*** ./src/app/offers/liked/liked.component.ts ***!
  \*************************************************/
/*! exports provided: LikedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikedComponent", function() { return LikedComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _offers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../offers.service */ "Oat2");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user/user.service */ "VGjC");
/* harmony import */ var src_app_core_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/core.service */ "mkVU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







function LikedComponent_section_0_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", offer_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/offers/details/", offer_r3.objectId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](offer_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](offer_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Bought ", offer_r3.bought, " times! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Liked by ", offer_r3.likes.length, " people! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", offer_r3.price, "$");
} }
function LikedComponent_section_0_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "It seems you havent liked any of our products. :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LikedComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Items you Liked");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LikedComponent_section_0_li_4_Template, 15, 7, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LikedComponent_section_0_li_5_Template, 3, 0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.likedOffers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.likedOffers.length === 0);
} }
class LikedComponent {
    constructor(offers, user, loader) {
        this.offers = offers;
        this.user = user;
        this.loader = loader;
    }
    ngOnInit() {
        this.loader.showLoader();
        this.user.getCurrentUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1))
            .subscribe((data) => {
            if (data.likedOffers) {
                this.offers.getOffersByIdArray(data.likedOffers)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1))
                    .subscribe((data) => {
                    this.likedOffers = data.results;
                });
            }
            else {
                this.likedOffers = [];
            }
            this.loader.hideLoader();
        });
    }
}
LikedComponent.ɵfac = function LikedComponent_Factory(t) { return new (t || LikedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_offers_service__WEBPACK_IMPORTED_MODULE_2__["OffersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"])); };
LikedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LikedComponent, selectors: [["app-liked"]], decls: 1, vars: 1, consts: [["class", "liked-offers", 4, "ngIf"], [1, "liked-offers"], [4, "ngFor", "ngForOf"], ["class", "no-offers-wrapper", 4, "ngIf"], [1, "image-wrapper"], ["alt", "offer-photo.png", 3, "src"], [1, "info-wrapper"], [3, "routerLink"], [1, "bought"], [1, "liked"], [1, "price"], [1, "no-offers-wrapper"]], template: function LikedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LikedComponent_section_0_Template, 6, 2, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.likedOffers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], styles: [".liked-offers[_ngcontent-%COMP%] {\n  height: calc(100vh - 305px);\n}\n@media (max-height: 1024px) {\n  .liked-offers[_ngcontent-%COMP%] {\n    height: calc(100vh - 215px);\n  }\n}\n.liked-offers[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 20px 0px 10px 0px;\n}\n.liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  overflow: auto;\n  height: calc(100vh - 380px);\n}\n.liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-top: 3px ridge black;\n  border-bottom: 3px ridge black;\n  margin: 10px 0;\n  padding: 20px;\n  height: 250px;\n}\n@media (max-height: 950px) {\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 10px;\n    height: 200px;\n  }\n}\n@media (max-width: 900px) {\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 5px;\n    height: 175px;\n  }\n}\n@media (max-width: 420px) {\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 5px;\n    height: 125px;\n  }\n}\n.liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 20px;\n}\n.liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 450px;\n  object-fit: contain;\n}\n@media (max-height: 950px) {\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n}\n@media (max-width: 1280px) {\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n@media (max-width: 900px) {\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n@media (max-width: 420px) {\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n.liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  align-content: space-around;\n  flex-basis: 75%;\n  margin-right: 20px;\n}\n.liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  max-height: 100%;\n}\n.liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 20px;\n  text-decoration: underline;\n}\n.liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  overflow: auto;\n  max-height: 150px;\n}\n@media (max-height: 950px), (max-width: 1000px) {\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    max-height: 150px;\n    overflow: hidden;\n  }\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 15px;\n  }\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    max-height: 100px;\n  }\n}\n@media (max-width: 900px) {\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-bottom: 10px;\n  }\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media (max-width: 740px) {\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 500px) {\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .bought[_ngcontent-%COMP%], .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n  margin-right: 50px;\n  font-size: 20px;\n}\n@media (max-height: 950px) {\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .bought[_ngcontent-%COMP%], .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 740px) {\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .bought[_ngcontent-%COMP%], .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-right: 10px;\n  }\n}\n.liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .bought[_ngcontent-%COMP%] {\n  color: red;\n}\n.liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n  color: green;\n}\n.liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n@media (max-height: 950px) {\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    font-size-adjust: 40px;\n  }\n}\n@media (max-width: 1280px) {\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n@media (max-width: 900px) {\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media (max-width: 600px) {\n  .liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.liked-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .no-offers-wrapper[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsaWtlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FBQ0o7QUFDSTtFQUhKO0lBSVEsMkJBQUE7RUFFTjtBQUNGO0FBQUk7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBRVI7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBQ1I7QUFDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDWjtBQUNZO0VBVEo7SUFVUSxhQUFBO0lBQ0EsYUFBQTtFQUVkO0FBQ0Y7QUFBWTtFQWRKO0lBZVEsWUFBQTtJQUNBLGFBQUE7RUFHZDtBQUNGO0FBRFk7RUFuQko7SUFvQlEsWUFBQTtJQUNBLGFBQUE7RUFJZDtBQUNGO0FBRlk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFJaEI7QUFGZ0I7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSXBCO0FBRm9CO0VBTEo7SUFNUSxZQUFBO0VBS3RCO0FBQ0Y7QUFIb0I7RUFUSjtJQVVRLFlBQUE7RUFNdEI7QUFDRjtBQUpvQjtFQWJKO0lBY1EsWUFBQTtFQU90QjtBQUNGO0FBTG9CO0VBakJKO0lBa0JRLFlBQUE7RUFRdEI7QUFDRjtBQUpZO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFNaEI7QUFKZ0I7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBTXBCO0FBSm9CO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFNeEI7QUFKd0I7RUFDSSxlQUFBO0FBTTVCO0FBRm9CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUl4QjtBQURvQjtFQXBCSjtJQXFCUSxpQkFBQTtJQUNBLGdCQUFBO0VBSXRCO0VBRnNCO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0VBSTFCO0VBRHNCO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VBRzFCO0FBQ0Y7QUFBb0I7RUFDSTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFQUUxQjtFQUNzQjtJQUNJLGVBQUE7RUFDMUI7QUFDRjtBQUVvQjtFQUNJO0lBQ0ksZUFBQTtFQUExQjtBQUNGO0FBR29CO0VBQ0k7SUFDSSxhQUFBO0VBRDFCO0FBQ0Y7QUFLZ0I7O0VBRUksa0JBQUE7RUFDQSxlQUFBO0FBSHBCO0FBS29CO0VBTEo7O0lBTVEsZUFBQTtFQUR0QjtBQUNGO0FBR29CO0VBVEo7O0lBVVEsZUFBQTtJQUNBLGtCQUFBO0VBQ3RCO0FBQ0Y7QUFFZ0I7RUFDSSxVQUFBO0FBQXBCO0FBR2dCO0VBQ0ksWUFBQTtBQURwQjtBQUtZO0VBQ0ksZUFBQTtBQUhoQjtBQUtnQjtFQUhKO0lBSVEsc0JBQUE7RUFGbEI7QUFDRjtBQUlnQjtFQVBKO0lBUVEsZUFBQTtFQURsQjtBQUNGO0FBR2dCO0VBWEo7SUFZUSxlQUFBO0VBQWxCO0FBQ0Y7QUFFZ0I7RUFmSjtJQWdCUSxhQUFBO0VBQ2xCO0FBQ0Y7QUFHUTtFQUNJLHVCQUFBO0FBRFoiLCJmaWxlIjoibGlrZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlrZWQtb2ZmZXJzIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDMwNXB4KTtcclxuXHJcbiAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIxNXB4KTtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM4MHB4KTtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAzcHggcmlkZ2UgYmxhY2s7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCByaWRnZSBibGFjaztcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDk1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbWFnZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA5NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmluZm8td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogNzUlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGFydGljbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogOTUwcHgpLCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJvdWdodCxcclxuICAgICAgICAgICAgICAgIC5saWtlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA5NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ib3VnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmxpa2VkIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA5NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZS1hZGp1c3Q6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5vLW9mZmVycy13cmFwcGVyIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "hhzS":
/*!*********************************************!*\
  !*** ./src/app/+store/reducer-functions.ts ***!
  \*********************************************/
/*! exports provided: initialState, loginReducer, offersReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginReducer", function() { return loginReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offersReducer", function() { return offersReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "P4YV");


const initialState = {
    currentUser: undefined,
};
const loginReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["login"], (state, data) => {
    return Object.assign(Object.assign({}, state), { Session: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["authenticate"], (state, data) => {
    return Object.assign(Object.assign({}, state), { CurrentUser: data });
}));
const offersReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["offers"], (state, data) => {
    return Object.assign(Object.assign({}, state), { currentOffers: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["focusedOffer"], (state, data) => {
    return Object.assign(Object.assign({}, state), { focusedOffer: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["myOffers"], (state, data) => {
    return Object.assign(Object.assign({}, state), { myOffers: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["likedOffers"], (state, data) => {
    return Object.assign(Object.assign({}, state), { likedOffers: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["boughtOffers"], (state, data) => {
    return Object.assign(Object.assign({}, state), { boughtOffers: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["promotion"], (state, data) => {
    return Object.assign(Object.assign({}, state), { promotions: data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["bestSellers"], (state, data) => {
    return Object.assign(Object.assign({}, state), { bestSellers: data });
}));


/***/ }),

/***/ "mkVU":
/*!**************************************!*\
  !*** ./src/app/core/core.service.ts ***!
  \**************************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CoreService {
    constructor() {
        this.loaderDisplay = { visible: false };
    }
    showLoader() {
        this.loaderDisplay.visible = true;
    }
    hideLoader() {
        this.loaderDisplay.visible = false;
    }
}
CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(); };
CoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nC5Y":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing-module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "+rn0");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "cEwO");



const routes = [
    {
        path: 'user/login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    },
    {
        path: 'user/register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    }
];
const UserRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "FxTl");
/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-panel/user-panel.component */ "5naM");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navigation.component */ "bh3X");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "3GR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader/loader.component */ "aPAT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"],
        _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_2__["UserPanelComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();


/***/ }),

/***/ "t2/U":
/*!*************************************************!*\
  !*** ./src/app/offers/offers-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OffersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersRoutingModule", function() { return OffersRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/guards/authenticate.guard */ "0SNa");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create/create.component */ "Nm1G");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/details.component */ "zBwS");
/* harmony import */ var _liked_liked_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./liked/liked.component */ "di8C");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "VUE2");
/* harmony import */ var _myoffers_myoffers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myoffers/myoffers.component */ "xZfi");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "Bl9z");








const routes = [
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]
    },
    {
        path: 'add',
        component: _create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"],
        canActivate: [_core_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthenticateGuard"]]
    },
    {
        path: 'offers/:category',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
    },
    {
        path: 'offers/details/:id',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"]
    },
    {
        path: 'offers/edit/:id',
        component: _create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"]
    },
    {
        path: 'myOffers',
        component: _myoffers_myoffers_component__WEBPACK_IMPORTED_MODULE_6__["MyoffersComponent"],
        canActivate: [_core_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthenticateGuard"]]
    },
    {
        path: 'likedOffers',
        component: _liked_liked_component__WEBPACK_IMPORTED_MODULE_4__["LikedComponent"],
        canActivate: [_core_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthenticateGuard"]]
    },
    {
        path: 'boughtOffers',
        component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartComponent"],
        canActivate: [_core_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_1__["AuthenticateGuard"]]
    }
];
const OffersRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/home/home.component */ "3GR4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: "",
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "x4ys":
/*!*****************************************!*\
  !*** ./src/app/offers/offers.module.ts ***!
  \*****************************************/
/*! exports provided: OffersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersModule", function() { return OffersModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/create.component */ "Nm1G");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update/update.component */ "yOtD");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "VUE2");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "zBwS");
/* harmony import */ var _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offers-routing.module */ "t2/U");
/* harmony import */ var _liked_liked_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./liked/liked.component */ "di8C");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "Bl9z");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _myoffers_myoffers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./myoffers/myoffers.component */ "xZfi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");












class OffersModule {
}
OffersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: OffersModule });
OffersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function OffersModule_Factory(t) { return new (t || OffersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__["OffersRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](OffersModule, { declarations: [_create_create_component__WEBPACK_IMPORTED_MODULE_1__["CreateComponent"],
        _update_update_component__WEBPACK_IMPORTED_MODULE_2__["UpdateComponent"],
        _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
        _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"],
        _liked_liked_component__WEBPACK_IMPORTED_MODULE_6__["LikedComponent"],
        _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartComponent"],
        _myoffers_myoffers_component__WEBPACK_IMPORTED_MODULE_9__["MyoffersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();


/***/ }),

/***/ "xZfi":
/*!*******************************************************!*\
  !*** ./src/app/offers/myoffers/myoffers.component.ts ***!
  \*******************************************************/
/*! exports provided: MyoffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyoffersComponent", function() { return MyoffersComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _offers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../offers.service */ "Oat2");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user/user.service */ "VGjC");
/* harmony import */ var src_app_core_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/core.service */ "mkVU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







function MyoffersComponent_section_0_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", offer_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/offers/details/", offer_r3.objectId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](offer_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](offer_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Bought ", offer_r3.bought, " times! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Liked by ", offer_r3.likes.length, " people! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", offer_r3.price, "$");
} }
function MyoffersComponent_section_0_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Hmm ... It seems you don't have any posted offers yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MyoffersComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "My Offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MyoffersComponent_section_0_li_4_Template, 15, 7, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MyoffersComponent_section_0_li_5_Template, 3, 0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.myOffers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.myOffers.length === 0);
} }
class MyoffersComponent {
    constructor(offers, user, loader) {
        this.offers = offers;
        this.user = user;
        this.loader = loader;
    }
    ngOnInit() {
        this.loader.showLoader();
        this.user.getCurrentUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1))
            .subscribe((data) => {
            this.offers.filterOffersByOwner(data.objectId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1))
                .subscribe((data) => {
                this.myOffers = data.results;
            });
            this.loader.hideLoader();
        });
    }
}
MyoffersComponent.ɵfac = function MyoffersComponent_Factory(t) { return new (t || MyoffersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_offers_service__WEBPACK_IMPORTED_MODULE_2__["OffersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"])); };
MyoffersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyoffersComponent, selectors: [["app-myoffers"]], decls: 1, vars: 1, consts: [["class", "my-offers", 4, "ngIf"], [1, "my-offers"], [4, "ngFor", "ngForOf"], ["class", "no-offers-wrapper", 4, "ngIf"], [1, "image-wrapper"], ["alt", "offer-photo.png", 3, "src"], [1, "info-wrapper"], [3, "routerLink"], [1, "bought"], [1, "liked"], [1, "price"], [1, "no-offers-wrapper"]], template: function MyoffersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MyoffersComponent_section_0_Template, 6, 2, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myOffers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], styles: [".my-offers[_ngcontent-%COMP%] {\n  height: calc(100vh - 305px);\n}\n@media (max-height: 1024px) {\n  .my-offers[_ngcontent-%COMP%] {\n    height: calc(100vh - 215px);\n  }\n}\n.my-offers[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  text-transform: uppercase;\n  text-align: center;\n  padding: 20px 0px 10px 0px;\n}\n.my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  overflow: auto;\n  height: calc(100vh - 380px);\n}\n.my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-top: 3px ridge black;\n  border-bottom: 3px ridge black;\n  margin: 10px 0;\n  padding: 20px;\n  height: 250px;\n}\n@media (max-height: 950px) {\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 10px;\n    height: 200px;\n  }\n}\n@media (max-width: 900px) {\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 5px;\n    height: 175px;\n  }\n}\n@media (max-width: 420px) {\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 5px;\n    height: 125px;\n  }\n}\n.my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 20px;\n}\n.my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 450px;\n  object-fit: contain;\n}\n@media (max-height: 950px) {\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n}\n@media (max-width: 1280px) {\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n@media (max-width: 900px) {\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n@media (max-width: 420px) {\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n.my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  align-content: space-around;\n  flex-basis: 75%;\n  margin-right: 20px;\n}\n.my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  max-height: 100%;\n}\n.my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 20px;\n  text-decoration: underline;\n}\n.my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  overflow: auto;\n  max-height: 150px;\n}\n@media (max-height: 950px), (max-width: 1000px) {\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    max-height: 150px;\n    overflow: hidden;\n  }\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 15px;\n  }\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    max-height: 100px;\n  }\n}\n@media (max-width: 900px) {\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-bottom: 10px;\n  }\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media (max-width: 740px) {\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 500px) {\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .bought[_ngcontent-%COMP%], .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n  margin-right: 50px;\n  font-size: 20px;\n}\n@media (max-height: 950px) {\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .bought[_ngcontent-%COMP%], .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 740px) {\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .bought[_ngcontent-%COMP%], .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-right: 10px;\n  }\n}\n.my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .bought[_ngcontent-%COMP%] {\n  color: red;\n}\n.my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .liked[_ngcontent-%COMP%] {\n  color: green;\n}\n.my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n@media (max-height: 950px) {\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    font-size-adjust: 40px;\n  }\n}\n@media (max-width: 1280px) {\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n@media (max-width: 900px) {\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media (max-width: 600px) {\n  .my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.my-offers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .no-offers-wrapper[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxteW9mZmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FBQ0o7QUFDSTtFQUhKO0lBSVEsMkJBQUE7RUFFTjtBQUNGO0FBQUk7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBRVI7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBQ1I7QUFDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDWjtBQUNZO0VBVEo7SUFVUSxhQUFBO0lBQ0EsYUFBQTtFQUVkO0FBQ0Y7QUFBWTtFQWRKO0lBZVEsWUFBQTtJQUNBLGFBQUE7RUFHZDtBQUNGO0FBRFk7RUFuQko7SUFvQlEsWUFBQTtJQUNBLGFBQUE7RUFJZDtBQUNGO0FBRlk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFJaEI7QUFGZ0I7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSXBCO0FBRm9CO0VBTEo7SUFNUSxZQUFBO0VBS3RCO0FBQ0Y7QUFIb0I7RUFUSjtJQVVRLFlBQUE7RUFNdEI7QUFDRjtBQUpvQjtFQWJKO0lBY1EsWUFBQTtFQU90QjtBQUNGO0FBTG9CO0VBakJKO0lBa0JRLFlBQUE7RUFRdEI7QUFDRjtBQUpZO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFNaEI7QUFKZ0I7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBTXBCO0FBSm9CO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFNeEI7QUFKd0I7RUFDSSxlQUFBO0FBTTVCO0FBRm9CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUl4QjtBQURvQjtFQXBCSjtJQXFCUSxpQkFBQTtJQUNBLGdCQUFBO0VBSXRCO0VBRnNCO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0VBSTFCO0VBRHNCO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VBRzFCO0FBQ0Y7QUFBb0I7RUFDSTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFQUUxQjtFQUNzQjtJQUNJLGVBQUE7RUFDMUI7QUFDRjtBQUVvQjtFQUNJO0lBQ0ksZUFBQTtFQUExQjtBQUNGO0FBR29CO0VBQ0k7SUFDSSxhQUFBO0VBRDFCO0FBQ0Y7QUFLZ0I7O0VBRUksa0JBQUE7RUFDQSxlQUFBO0FBSHBCO0FBS29CO0VBTEo7O0lBTVEsZUFBQTtFQUR0QjtBQUNGO0FBR29CO0VBVEo7O0lBVVEsZUFBQTtJQUNBLGtCQUFBO0VBQ3RCO0FBQ0Y7QUFFZ0I7RUFDSSxVQUFBO0FBQXBCO0FBR2dCO0VBQ0ksWUFBQTtBQURwQjtBQUtZO0VBQ0ksZUFBQTtBQUhoQjtBQUtnQjtFQUhKO0lBSVEsc0JBQUE7RUFGbEI7QUFDRjtBQUlnQjtFQVBKO0lBUVEsZUFBQTtFQURsQjtBQUNGO0FBR2dCO0VBWEo7SUFZUSxlQUFBO0VBQWxCO0FBQ0Y7QUFFZ0I7RUFmSjtJQWdCUSxhQUFBO0VBQ2xCO0FBQ0Y7QUFHUTtFQUNJLHVCQUFBO0FBRFoiLCJmaWxlIjoibXlvZmZlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktb2ZmZXJzIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDMwNXB4KTtcclxuXHJcbiAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIxNXB4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDBweCAxMHB4IDBweDtcclxuICAgIH1cclxuXHJcbiAgICB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzODBweCk7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHJpZGdlIGJsYWNrO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggcmlkZ2UgYmxhY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA5NTBweCkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW1hZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogOTUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbmZvLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDc1JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDk1MHB4KSwgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ib3VnaHQsXHJcbiAgICAgICAgICAgICAgICAubGlrZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogOTUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc0MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYm91Z2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5saWtlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogOTUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemUtYWRqdXN0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uby1vZmZlcnMtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "yOtD":
/*!***************************************************!*\
  !*** ./src/app/offers/update/update.component.ts ***!
  \***************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UpdateComponent {
    constructor() { }
    ngOnInit() {
    }
}
UpdateComponent.ɵfac = function UpdateComponent_Factory(t) { return new (t || UpdateComponent)(); };
UpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateComponent, selectors: [["app-update"]], decls: 2, vars: 0, template: function UpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "update works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "zBwS":
/*!*****************************************************!*\
  !*** ./src/app/offers/details/details.component.ts ***!
  \*****************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+store/actions */ "P4YV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _offers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../offers.service */ "Oat2");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user/user.service */ "VGjC");
/* harmony import */ var src_app_core_core_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/core.service */ "mkVU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









function DetailsComponent_div_0_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsComponent_div_0_div_3_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r8.likeOffer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Like!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_0_div_3_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "You liked the item!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailsComponent_div_0_div_3_button_1_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DetailsComponent_div_0_div_3_p_2_Template, 2, 0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.isLiked && ctx_r1.currentUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isLiked);
} }
function DetailsComponent_div_0_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.currentElement.price, "$");
} }
function DetailsComponent_div_0_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsComponent_div_0_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.buyOffer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Buy!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_0_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsComponent_div_0_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.editOffer("/offers/edit/" + ctx_r12.currentElement.objectId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Edit Offer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_0_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsComponent_div_0_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r14.deleteOffer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Delete Offer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DetailsComponent_div_0_div_3_Template, 3, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DetailsComponent_div_0_span_15_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, DetailsComponent_div_0_button_18_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, DetailsComponent_div_0_button_19_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, DetailsComponent_div_0_button_20_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r0.currentElement.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.currentElement.owner !== ctx_r0.currentUser && !ctx_r0.isLiked);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Bought ", ctx_r0.buyCounter, " times!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Liked by ", ctx_r0.likesCounter, " people!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.currentElement.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.currentElement.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.currentElement.promotion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r0.currentElement.promotion ? "new-price" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.currentElement.promotion ? (ctx_r0.currentElement.price - ctx_r0.currentElement.price / 100 * ctx_r0.currentElement.promotionPercentage).toFixed(2) : ctx_r0.currentElement.price, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.currentElement.owner !== ctx_r0.currentUser && ctx_r0.currentUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.currentElement.owner === ctx_r0.currentUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.currentElement.owner === ctx_r0.currentUser);
} }
class DetailsComponent {
    constructor(activatdRoute, store, offerService, router, user, loader) {
        this.activatdRoute = activatdRoute;
        this.store = store;
        this.offerService = offerService;
        this.router = router;
        this.user = user;
        this.loader = loader;
        this.id = this.activatdRoute.snapshot.params.id;
        this.isLiked = false;
    }
    ngOnInit() {
        this.loader.showLoader();
        this.user.checkSession();
        const findElement = this.offerService.getOfferById(this.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1))
            .subscribe((data) => {
            this.currentElement = data.results[0];
            this.store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_1__["focusedOffer"])(this.currentElement));
            this.likesCounter = this.currentElement.likes.length;
            this.buyCounter = this.currentElement.bought;
        });
        if (localStorage.getItem('sessionToken')) {
            const getOwner = this.user.getCurrentUser().subscribe((data) => {
                this.currentUserObj = data;
                this.currentUser = data.objectId;
                this.loader.hideLoader();
                if (this.currentUser !== this.currentElement.owner) {
                    if (this.currentElement.likes.includes(this.currentUser)) {
                        this.isLiked = true;
                    }
                }
            });
        }
        this.loader.hideLoader();
    }
    likeOffer() {
        this.loader.showLoader();
        const likesArr = Array.from(this.currentElement.likes);
        likesArr.push(this.currentUser);
        this.isLiked = true;
        this.likesCounter++;
        this.offerService.updateOffer(this.id, { likes: likesArr }).subscribe();
        if (this.currentUserObj) {
            const likedOffers = Array.from(this.currentUserObj.likedOffers);
            likedOffers.push(this.currentElement.objectId);
            this.user.updateUser({ likedOffers: likedOffers }, this.currentUserObj.objectId).subscribe();
        }
        this.loader.hideLoader();
    }
    buyOffer() {
        this.loader.showLoader();
        const itteratedValue = this.currentElement.bought + 1;
        this.buyCounter++;
        this.offerService.updateOffer(this.id, { bought: itteratedValue }).subscribe(() => {
            this.loader.hideLoader();
        });
        if (this.currentUserObj) {
            const boughtOffers = Array.from(this.currentUserObj.boughtOffers);
            boughtOffers.push(this.currentElement.objectId);
            this.user.updateUser({ boughtOffers: boughtOffers }, this.currentUserObj.objectId).subscribe(() => {
                this.loader.hideLoader();
            });
        }
    }
    deleteOffer() {
        this.loader.showLoader();
        this.offerService.deleteOffer(this.id).subscribe(() => {
            this.loader.hideLoader();
            this.router.navigateByUrl('/home');
        });
    }
    editOffer(url) {
        this.offerService.editOfferData = this.currentElement;
        this.router.navigateByUrl(url);
    }
    ngOnDestroy() {
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_offers_service__WEBPACK_IMPORTED_MODULE_5__["OffersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_core_service__WEBPACK_IMPORTED_MODULE_7__["CoreService"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 1, vars: 1, consts: [["class", "details-wrapper", 4, "ngIf"], [1, "details-wrapper"], [1, "left-side"], ["alt", "image.png", 3, "src"], ["class", "likeBtn-wrapper", 4, "ngIf"], [1, "information-wrapper"], [1, "right-side"], [1, "price-wrapper"], ["class", "old-price", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "likeBtn-wrapper"], [4, "ngIf"], [3, "click"], [1, "old-price"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DetailsComponent_div_0_Template, 21, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentElement);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: [".details-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: calc(100vh - 305px);\n  box-sizing: border-box;\n  align-items: center;\n}\n@media (max-height: 1024px) {\n  .details-wrapper[_ngcontent-%COMP%] {\n    height: calc(100vh - 215px);\n  }\n}\n@media (max-width: 960px) {\n  .details-wrapper[_ngcontent-%COMP%] {\n    height: calc(100vh - 240px);\n  }\n}\n@media (max-width: 710px) {\n  .details-wrapper[_ngcontent-%COMP%] {\n    height: -webkit-max-content;\n    height: max-content;\n    flex-wrap: wrap;\n  }\n}\n.details-wrapper[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n  width: 40%;\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 5px;\n  align-items: center;\n  flex-direction: column;\n  max-height: 100%;\n}\n@media (max-width: 710px) {\n  .details-wrapper[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.details-wrapper[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  border-radius: 20px;\n  object-fit: contain;\n  max-height: calc(100vh - 500px);\n}\n.details-wrapper[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .likeBtn-wrapper[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.details-wrapper[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .information-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  margin-top: 20px;\n}\n.details-wrapper[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .information-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: red;\n}\n.details-wrapper[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .information-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: green;\n}\n.details-wrapper[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 20px;\n}\n.details-wrapper[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 20px;\n}\n@media (max-width: 710px) {\n  .details-wrapper[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\n.details-wrapper[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-size: 30px;\n}\n.details-wrapper[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 30px;\n}\n.details-wrapper[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .price-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.details-wrapper[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .price-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 50px;\n  margin-bottom: 10px;\n}\n.details-wrapper[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .price-wrapper[_ngcontent-%COMP%]   span.old-price[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #891515;\n  font-size: 40px;\n}\n.details-wrapper[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .price-wrapper[_ngcontent-%COMP%]   span.new-price[_ngcontent-%COMP%] {\n  color: green;\n  font-weight: 700;\n}\n.details-wrapper[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .price-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media (max-width: 950px) {\n  .details-wrapper[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-bottom: 15px;\n  }\n  .details-wrapper[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-bottom: 15px;\n  }\n  .details-wrapper[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .price-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n.details-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 20px;\n  font-size: 20px;\n  background: #2161ab;\n  border: none;\n  color: white;\n  margin-top: 5px;\n  transition: all 0.5s ease-in-out;\n}\n.details-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);\n  background: #1a4d88;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBUEo7SUFRUSwyQkFBQTtFQUVOO0FBQ0Y7QUFBSTtFQVhKO0lBWVEsMkJBQUE7RUFHTjtBQUNGO0FBREk7RUFmSjtJQWdCUSwyQkFBQTtJQUFBLG1CQUFBO0lBQ0EsZUFBQTtFQUlOO0FBQ0Y7QUFGSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBSVI7QUFGUTtFQVZKO0lBV1EsV0FBQTtFQUtWO0FBQ0Y7QUFIUTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFLWjtBQUZRO0VBQ0ksVUFBQTtBQUlaO0FBRFE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQUFnQjtFQUNJLFVBQUE7QUFFcEI7QUFDZ0I7RUFDSSxZQUFBO0FBQ3BCO0FBSVE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFGWjtBQU1JO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUFKUjtBQU1RO0VBSko7SUFLUSxXQUFBO0lBQ0Esa0JBQUE7RUFIVjtBQUNGO0FBS1E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFIWjtBQU1RO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBSlo7QUFPUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBTFo7QUFPWTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUxoQjtBQU9nQjtFQUNJLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFMcEI7QUFRZ0I7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFOcEI7QUFVWTtFQUNJLGtCQUFBO0FBUmhCO0FBWVE7RUFDSTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFQVZkO0VBYVU7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7RUFYZDtFQWVjO0lBQ0ksZUFBQTtFQWJsQjtBQUNGO0FBa0JJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQWhCUjtBQW1CSTtFQUNJLGVBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFqQlIiLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzA1cHgpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMTVweCk7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MTBweCkge1xyXG4gICAgICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sZWZ0LXNpZGUge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcxMHB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDUwMHB4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saWtlQnRuLXdyYXBwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZm9ybWF0aW9uLXdyYXBwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQtc2lkZSB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzEwcHgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcmljZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmLm9sZC1wcmljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4OTE1MTU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYubmV3LXByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByaWNlLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMTYxYWI7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzFhNGQ4ODtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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