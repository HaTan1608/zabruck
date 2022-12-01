/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @paypal/react-paypal-js */ \"@paypal/react-paypal-js\");\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_Store__WEBPACK_IMPORTED_MODULE_3__]);\n_utils_Store__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_Store__WEBPACK_IMPORTED_MODULE_3__.StoreProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__.PayPalScriptProvider, {\n                deferLoading: true,\n                children: Component.auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Auth, {\n                    adminOnly: Component.auth.adminOnly,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/tandev94/Desktop/zabruck/pages/_app.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tandev94/Desktop/zabruck/pages/_app.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/tandev94/Desktop/zabruck/pages/_app.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tandev94/Desktop/zabruck/pages/_app.jsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/tandev94/Desktop/zabruck/pages/_app.jsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tandev94/Desktop/zabruck/pages/_app.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\nfunction Auth({ children , adminOnly  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { status , data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            router.push(\"/unauthorized?message=login required\");\n        }\n    });\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/tandev94/Desktop/zabruck/pages/_app.jsx\",\n            lineNumber: 34,\n            columnNumber: 12\n        }, this);\n    }\n    if (adminOnly && !session.user.isAdmin) {\n        router.push(\"/unauthorized?message=admin login required\");\n    }\n    return children;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUMrQjtBQUNmO0FBQ1A7QUFDdUI7QUFFL0QsU0FBU0ssTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFdBQVcsRUFBRUMsUUFBTyxFQUFFLEdBQUdELFdBQVcsR0FBRSxFQUFFO0lBQ2xFLHFCQUNFLDhEQUFDUCw0REFBZUE7UUFBQ1EsU0FBU0E7a0JBQ3hCLDRFQUFDTix1REFBYUE7c0JBQ1osNEVBQUNFLHlFQUFvQkE7Z0JBQUNLLGNBQWMsSUFBSTswQkFDckNILFVBQVVJLElBQUksaUJBQ2IsOERBQUNDO29CQUFLQyxXQUFXTixVQUFVSSxJQUFJLENBQUNFLFNBQVM7OEJBQ3ZDLDRFQUFDTjt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7O3lDQUcxQiw4REFBQ0Q7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7d0JBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7QUFFQSxTQUFTSSxLQUFLLEVBQUVFLFNBQVEsRUFBRUQsVUFBUyxFQUFFLEVBQUU7SUFDckMsTUFBTUUsU0FBU1gsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVksT0FBTSxFQUFFQyxNQUFNUixRQUFPLEVBQUUsR0FBR1AsMkRBQVVBLENBQUM7UUFDM0NnQixVQUFVLElBQUk7UUFDZEMscUJBQW9CO1lBQ2xCSixPQUFPSyxJQUFJLENBQUM7UUFDZDtJQUNGO0lBQ0EsSUFBSUosV0FBVyxXQUFXO1FBQ3hCLHFCQUFPLDhEQUFDSztzQkFBSTs7Ozs7O0lBQ2QsQ0FBQztJQUNELElBQUlSLGFBQWEsQ0FBQ0osUUFBUWEsSUFBSSxDQUFDQyxPQUFPLEVBQUU7UUFDdENSLE9BQU9LLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxPQUFPTjtBQUNUO0FBRUEsaUVBQWVSLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWJydWNrcy8uL3BhZ2VzL19hcHAuanN4PzRjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyBTdG9yZVByb3ZpZGVyIH0gZnJvbSBcIi4uL3V0aWxzL1N0b3JlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFBheVBhbFNjcmlwdFByb3ZpZGVyIH0gZnJvbSBcIkBwYXlwYWwvcmVhY3QtcGF5cGFsLWpzXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0gfSkge1xuICByZXR1cm4gKFxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4gICAgICA8U3RvcmVQcm92aWRlcj5cbiAgICAgICAgPFBheVBhbFNjcmlwdFByb3ZpZGVyIGRlZmVyTG9hZGluZz17dHJ1ZX0+XG4gICAgICAgICAge0NvbXBvbmVudC5hdXRoID8gKFxuICAgICAgICAgICAgPEF1dGggYWRtaW5Pbmx5PXtDb21wb25lbnQuYXV0aC5hZG1pbk9ubHl9PlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0F1dGg+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BheVBhbFNjcmlwdFByb3ZpZGVyPlxuICAgICAgPC9TdG9yZVByb3ZpZGVyPlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiBBdXRoKHsgY2hpbGRyZW4sIGFkbWluT25seSB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHN0YXR1cywgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbih7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgb25VbmF1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi91bmF1dGhvcml6ZWQ/bWVzc2FnZT1sb2dpbiByZXF1aXJlZFwiKTtcbiAgICB9LFxuICB9KTtcbiAgaWYgKHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG4gIGlmIChhZG1pbk9ubHkgJiYgIXNlc3Npb24udXNlci5pc0FkbWluKSB7XG4gICAgcm91dGVyLnB1c2goXCIvdW5hdXRob3JpemVkP21lc3NhZ2U9YWRtaW4gbG9naW4gcmVxdWlyZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlNlc3Npb25Qcm92aWRlciIsInVzZVNlc3Npb24iLCJTdG9yZVByb3ZpZGVyIiwidXNlUm91dGVyIiwiUGF5UGFsU2NyaXB0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJkZWZlckxvYWRpbmciLCJhdXRoIiwiQXV0aCIsImFkbWluT25seSIsImNoaWxkcmVuIiwicm91dGVyIiwic3RhdHVzIiwiZGF0YSIsInJlcXVpcmVkIiwib25VbmF1dGhlbnRpY2F0ZWQiLCJwdXNoIiwiZGl2IiwidXNlciIsImlzQWRtaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./utils/Store.js":
/*!************************!*\
  !*** ./utils/Store.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Store\": () => (/* binding */ Store),\n/* harmony export */   \"StoreProvider\": () => (/* binding */ StoreProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst initialState = {\n    cart: js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\")) : {\n        cartItems: [],\n        shippingAddress: {},\n        paymentMethod: \"\"\n    }\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"CART_ADD_ITEM\":\n            {\n                const newItem = action.payload;\n                const existItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug);\n                const cartItems = existItem ? state.cart.cartItems.map((item)=>item.name === existItem.name ? newItem : item) : [\n                    ...state.cart.cartItems,\n                    newItem\n                ];\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_REMOVE_ITEM\":\n            {\n                const cartItems1 = state.cart.cartItems.filter((item)=>item.slug !== action.payload.slug);\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems: cartItems1\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems: cartItems1\n                    }\n                };\n            }\n        case \"CART_RESET\":\n            return {\n                ...state,\n                cart: {\n                    cartItems: [],\n                    shippingAddress: {\n                        location: {}\n                    },\n                    paymentMethod: \"\"\n                }\n            };\n        case \"CART_CLEAR_ITEMS\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    cartItems: []\n                }\n            };\n        case \"SAVE_SHIPPING_ADDRESS\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    shippingAddress: {\n                        ...state.cart.shippingAddress,\n                        ...action.payload\n                    }\n                }\n            };\n        case \"SAVE_PAYMENT_METHOD\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    paymentMethod: action.payload\n                }\n            };\n        default:\n            return state;\n    }\n}\nfunction StoreProvider({ children  }) {\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/tandev94/Desktop/zabruck/utils/Store.js\",\n        lineNumber: 73,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBT0E7a0JBQVFGOzs7Ozs7QUFDeEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3plYnJ1Y2tzLy4vdXRpbHMvU3RvcmUuanM/OGI4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5cbmV4cG9ydCBjb25zdCBTdG9yZSA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBjYXJ0OiBDb29raWVzLmdldChcImNhcnRcIilcbiAgICA/IEpTT04ucGFyc2UoQ29va2llcy5nZXQoXCJjYXJ0XCIpKVxuICAgIDogeyBjYXJ0SXRlbXM6IFtdLCBzaGlwcGluZ0FkZHJlc3M6IHt9LCBwYXltZW50TWV0aG9kOiBcIlwiIH0sXG59O1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJDQVJUX0FERF9JVEVNXCI6IHtcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IGV4aXN0SXRlbSA9IHN0YXRlLmNhcnQuY2FydEl0ZW1zLmZpbmQoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnNsdWcgPT09IG5ld0l0ZW0uc2x1Z1xuICAgICAgKTtcbiAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IGV4aXN0SXRlbVxuICAgICAgICA/IHN0YXRlLmNhcnQuY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICAgIGl0ZW0ubmFtZSA9PT0gZXhpc3RJdGVtLm5hbWUgPyBuZXdJdGVtIDogaXRlbVxuICAgICAgICAgIClcbiAgICAgICAgOiBbLi4uc3RhdGUuY2FydC5jYXJ0SXRlbXMsIG5ld0l0ZW1dO1xuICAgICAgQ29va2llcy5zZXQoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0pKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0OiB7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9IH07XG4gICAgfVxuICAgIGNhc2UgXCJDQVJUX1JFTU9WRV9JVEVNXCI6IHtcbiAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IHN0YXRlLmNhcnQuY2FydEl0ZW1zLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uc2x1ZyAhPT0gYWN0aW9uLnBheWxvYWQuc2x1Z1xuICAgICAgKTtcbiAgICAgIENvb2tpZXMuc2V0KFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeSh7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9KSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSB9O1xuICAgIH1cbiAgICBjYXNlIFwiQ0FSVF9SRVNFVFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICBjYXJ0SXRlbXM6IFtdLFxuICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogeyBsb2NhdGlvbjoge30gfSxcbiAgICAgICAgICBwYXltZW50TWV0aG9kOiBcIlwiLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIFwiQ0FSVF9DTEVBUl9JVEVNU1wiOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zOiBbXSB9IH07XG5cbiAgICBjYXNlIFwiU0FWRV9TSElQUElOR19BRERSRVNTXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDoge1xuICAgICAgICAgIC4uLnN0YXRlLmNhcnQsXG4gICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5jYXJ0LnNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgXCJTQVZFX1BBWU1FTlRfTUVUSE9EXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDoge1xuICAgICAgICAgIC4uLnN0YXRlLmNhcnQsXG4gICAgICAgICAgcGF5bWVudE1ldGhvZDogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN0b3JlUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuICBjb25zdCB2YWx1ZSA9IHsgc3RhdGUsIGRpc3BhdGNoIH07XG4gIHJldHVybiA8U3RvcmUuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9TdG9yZS5Qcm92aWRlcj47XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJDb29raWVzIiwiU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjYXJ0IiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwiY2FydEl0ZW1zIiwic2hpcHBpbmdBZGRyZXNzIiwicGF5bWVudE1ldGhvZCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXdJdGVtIiwicGF5bG9hZCIsImV4aXN0SXRlbSIsImZpbmQiLCJpdGVtIiwic2x1ZyIsIm1hcCIsIm5hbWUiLCJzZXQiLCJzdHJpbmdpZnkiLCJmaWx0ZXIiLCJsb2NhdGlvbiIsIlN0b3JlUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidmFsdWUiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/Store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@paypal/react-paypal-js":
/*!******************************************!*\
  !*** external "@paypal/react-paypal-js" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@paypal/react-paypal-js");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();