"use strict"; function _interopDefault(e) { return e && "object" == typeof e && "default" in e ? e.default : e } Object.defineProperty(exports, "__esModule", { value: !0 }); var React = require("react"), PropTypes = _interopDefault(require("prop-types")), reactDeviceDetect = require("react-device-detect"), __assign = function () { return (__assign = Object.assign || function (e) { for (var t, n = 1, o = arguments.length; n < o; n++)for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e }).apply(this, arguments) }; function __awaiter(e, t, n, o) { return new (n || (n = Promise))((function (r, a) { function i(e) { try { c(o.next(e)) } catch (e) { a(e) } } function l(e) { try { c(o.throw(e)) } catch (e) { a(e) } } function c(e) { e.done ? r(e.value) : new n((function (t) { t(e.value) })).then(i, l) } c((o = o.apply(e, t || [])).next()) })) } function __generator(e, t) { var n, o, r, a, i = { label: 0, sent: function () { if (1 & r[0]) throw r[1]; return r[1] }, trys: [], ops: [] }; return a = { next: l(0), throw: l(1), return: l(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function () { return this }), a; function l(a) { return function (l) { return function (a) { if (n) throw new TypeError("Generator is already executing."); for (; i;)try { if (n = 1, o && (r = 2 & a[0] ? o.return : a[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, a[1])).done) return r; switch (o = 0, r && (a = [2 & a[0], r.value]), a[0]) { case 0: case 1: r = a; break; case 4: return i.label++, { value: a[1], done: !1 }; case 5: i.label++, o = a[1], a = [0]; continue; case 7: a = i.ops.pop(), i.trys.pop(); continue; default: if (!(r = (r = i.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) { i = 0; continue } if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) { i.label = a[1]; break } if (6 === a[0] && i.label < r[1]) { i.label = r[1], r = a; break } if (r && i.label < r[2]) { i.label = r[2], i.ops.push(a); break } r[2] && i.ops.pop(), i.trys.pop(); continue }a = t.call(e, i) } catch (e) { a = [6, e], o = 0 } finally { n = r = 0 } if (5 & a[0]) throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 } }([a, l]) } } } function styleInject(e, t) { void 0 === t && (t = {}); var n = t.insertAt; if (e && "undefined" != typeof document) { var o = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style"); r.type = "text/css", "top" === n && o.firstChild ? o.insertBefore(r, o.firstChild) : o.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e)) } } var css = '@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap");\n#index_terminalContainer__3q4m3 {\n  --control-default-bg-color: #ccc;\n  --control-close-bg-color: #fc5b57;\n  --control-minimize-bg-color: #e5bf3c;\n  --control-maximize-bg-color: #57c038; }\n\n.index_controls__9z-dM {\n  text-align: left;\n  height: 13px;\n  position: relative;\n  top: -5px;\n  margin-left: 4px; }\n  .index_controls__9z-dM .index_consoleCtrl__PQnAL {\n    display: inline-block;\n    width: 7px;\n    height: 7px;\n    margin: 0 3px;\n    border-radius: 50%;\n    background: var(--control-default-bg-color); }\n  .index_controls__9z-dM .index_close__2o6CK {\n    background: var(--control-close-bg-color); }\n  .index_controls__9z-dM .index_minimize__E9mwB {\n    background: var(--control-minimize-bg-color); }\n  .index_controls__9z-dM .index_maximize__sbbYF {\n    background: var(--control-maximize-bg-color); }\n\n.index_editor__2tqRz {\n  text-align: left;\n  height: calc(100% - 46px);\n  padding: 10px 15px;\n  overflow-wrap: break-word;\n  outline: none;\n  font-family: "Source Code Pro", monospace;\n  font-size: 12px;\n  line-height: 22px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n  .index_editor__2tqRz .index_mobileInput__jGtyc {\n    position: absolute;\n    top: -2000px;\n    left: -2000px; }\n  .index_editor__2tqRz .index_lineText__2Poex {\n    display: inline;\n    position: relative;\n    top: -1px;\n    margin-left: 8px; }\n  .index_editor__2tqRz .index_preWhiteSpace__3nCT2 {\n    white-space: pre; }\n  .index_editor__2tqRz .index_caret__MYxcn {\n    position: relative;\n    -webkit-animation: index_blink__RQDX- 0.75s ease-in-out infinite;\n    -moz-animation: index_blink__RQDX- 0.75s ease-in-out infinite;\n    -o-animation: index_blink__RQDX- 0.75s ease-in-out infinite;\n    -ms-animation: index_blink__RQDX- 0.75s ease-in-out infinite;\n    animation: index_blink__RQDX- 0.75s ease-in-out infinite; }\n    .index_editor__2tqRz .index_caret__MYxcn .index_caretAfter__2B8sk {\n      content: "";\n      position: absolute;\n      top: 2px;\n      width: 5px;\n      height: 13px;\n      z-index: 10; }\n\n@-moz-keyframes index_blink__RQDX- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0); }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none; } }\n\n@-webkit-keyframes index_blink__RQDX- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0); }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none; } }\n\n@-o-keyframes index_blink__RQDX- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0); }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none; } }\n\n@keyframes index_blink__RQDX- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0); }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none; } }\n  .index_editor__2tqRz a {\n    color: #1a87b5; }\n\n#index_terminalContainer__3q4m3 {\n  height: 100%; }\n\n.index_terminal__1dSq1 {\n  height: 100%;\n  width: 100%;\n  margin: auto;\n  border-radius: 5px; }\n', index = { terminalContainer: "index_terminalContainer__3q4m3", controls: "index_controls__9z-dM", consoleCtrl: "index_consoleCtrl__PQnAL", close: "index_close__2o6CK", minimize: "index_minimize__E9mwB", maximize: "index_maximize__sbbYF", editor: "index_editor__2tqRz", mobileInput: "index_mobileInput__jGtyc", lineText: "index_lineText__2Poex", preWhiteSpace: "index_preWhiteSpace__3nCT2", caret: "index_caret__MYxcn", blink: "index_blink__RQDX-", caretAfter: "index_caretAfter__2B8sk", terminal: "index_terminal__1dSq1" }; styleInject(css); var styles = index, StyleContext = React.createContext(null), StyleContextProvider = function (e) { var t = e.children; return React.createElement(StyleContext.Provider, { value: styles }, t) }, darkTheme = { themeBGColor: "#022833", themeToolbarColor: "#131519", themeColor: "#839496", themePromptColor: "#a917a8" }, lightTheme = { themeBGColor: "#fdf6e4", themeToolbarColor: "#d8d8d8", themeColor: "#333333", themePromptColor: "#a917a8" }, draculaTheme = { themeBGColor: "#272B36", themeToolbarColor: "#DBDBDB", themeColor: "#FFFEFC", themePromptColor: "#a917a8" }, defaultThemes = { dark: darkTheme, light: lightTheme, dracula: draculaTheme }, ThemeContext = React.createContext(null), ThemeContextProvider = function (e) { var t = e.children, n = __assign(__assign({}, defaultThemes), t.props.themes || {}), o = n[t.props.theme] || n.light; return React.createElement(ThemeContext.Provider, { value: o }, t) }, useClickOutsideEvent = function (e, t, n) { var o = function (o) { e.current && !e.current.contains(o.target) ? n(!1) : reactDeviceDetect.isMobile ? n(!t) : n(!0) }; React.useEffect((function () { return document.addEventListener("mousedown", o), function () { document.removeEventListener("mousedown", o) } })) }; function Controls(e) { var t = React.useContext(StyleContext), n = e.controlButtonLabels, o = e.showControlButtons ? n.map((function (e) { return React.createElement("div", { key: e, className: t.consoleCtrl + " " + t[e] }) })) : null; return React.createElement("div", { className: t.controls }, o) } var TerminalContext = React.createContext(null), TerminalContextProvider = function (e) { var t = e.children, n = React.useState(""), o = n[0], r = n[1], a = React.useState([]), i = a[0], l = a[1], c = React.useState(null), s = c[0], u = c[1]; React.useEffect((function () { u(i.length) }), [i]); return React.createElement(TerminalContext.Provider, { value: { bufferedContent: o, setBufferedContent: r, appendCommandToHistory: function (e) { e && l(i.concat(e)) }, getPreviousCommand: function () { if (0 === s) return 0 === i.length ? "" : i[0]; var e = i[s - 1]; return s > 0 && u(s - 1), e }, getNextCommand: function () { if (s + 1 <= i.length) { if (s === i.length) return ""; var e = i[s + 1]; return u(s + 1), e } return "" } } }, t) }, useEditorInput = function (e, t, n, o, r) { var a = React.useContext(TerminalContext), i = a.getPreviousCommand, l = a.getNextCommand, c = function (a) { if (e && r) { a.preventDefault(); var c = a.key; if ("Enter" !== c) { var s = null; s = "Backspace" === c ? t.slice(0, -1) : "ArrowUp" === c ? i() : "ArrowDown" === c ? l() : c && 1 === c.length ? t + c : t, n(s), o(!1) } else o(!0) } }; React.useEffect((function () { return document.addEventListener("keydown", c), function () { document.removeEventListener("keydown", c) } })) }, useBufferedContent = function (e, t, n, o, r, a, i) { var l = React.useContext(TerminalContext), c = l.bufferedContent, s = l.setBufferedContent, u = React.useContext(StyleContext), m = React.useContext(ThemeContext); React.useEffect((function () { if (e) { var l; l = o, __awaiter(void 0, void 0, void 0, (function () { var e, d, p, f, _, x, h, C; return __generator(this, (function (y) { switch (y.label) { case 0: return e = l.trim().split(" "), d = e[0], p = e.slice(1), f = "", "clear" === d ? (s(""), r(""), t(!1), [2]) : (_ = React.createElement(React.Fragment, null, c, React.createElement("span", { style: { color: m.themePromptColor } }, n), React.createElement("span", { className: u.lineText + " " + u.preWhiteSpace }, o), React.createElement("br", null)), s(_), r(""), l ? (x = p.join(" "), d && a[d] ? "function" != typeof (h = a[d]) ? [3, 2] : [4, h(x)] : [3, 4]) : [3, 7]); case 1: return f = y.sent(), [3, 3]; case 2: f = h, y.label = 3; case 3: return [3, 7]; case 4: return "function" != typeof i ? [3, 6] : [4, i(x)]; case 5: return f = y.sent(), [3, 7]; case 6: f = i, y.label = 7; case 7: return C = React.createElement(React.Fragment, null, c, React.createElement("span", { style: { color: m.themePromptColor } }, n), React.createElement("span", { className: u.lineText + " " + u.preWhiteSpace }, o), f ? React.createElement("span", null, React.createElement("br", null), f) : null, React.createElement("br", null)), s(C), t(!1), [2] } })) })) } }), [e]) }, useCurrentLine = function (e, t, n, o, r, a) { var i = React.useContext(StyleContext), l = React.useContext(ThemeContext), c = React.useContext(TerminalContext).appendCommandToHistory, s = React.useRef(null), u = React.useState(""), m = u[0], d = u[1], p = React.useState(!1), f = p[0], _ = p[1]; React.useEffect((function () { reactDeviceDetect.isMobile && t && s.current.focus() }), [t]), React.useEffect((function () { f && c(m) }), [f]); var x = reactDeviceDetect.isMobile && a ? React.createElement("div", { className: i.mobileInput }, React.createElement("input", { type: "text", autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", spellCheck: "false", value: m, onChange: function (e) { return d(e.target.value) }, ref: s })) : null, h = f ? React.createElement(React.Fragment, null, x, React.createElement("div", { className: i.lineText }, t && e ? React.createElement("span", { className: i.caret }, React.createElement("span", { className: i.caretAfter, style: { background: l.themeColor } })) : null)) : React.createElement(React.Fragment, null, x, React.createElement("span", { style: { color: l.themePromptColor } }, n), React.createElement("div", { className: i.lineText }, React.createElement("span", { className: i.preWhiteSpace }, m), t && e ? React.createElement("span", { className: i.caret }, React.createElement("span", { className: i.caretAfter, style: { background: l.themeColor } })) : null)); return useEditorInput(t, m, d, _, a), useBufferedContent(f, _, n, m, d, o, r), h }, useScrollToBottom = function (e, t) { React.useEffect((function () { t.current.scrollTop = t.current.scrollHeight }), [e]) }; function Editor(e) { var t = React.useRef(null), n = React.useContext(StyleContext), o = React.useContext(ThemeContext), r = React.useContext(TerminalContext).bufferedContent; useScrollToBottom(r, t); var a = e.enableInput, i = e.caret, l = e.consoleFocused, c = e.prompt, s = e.commands, u = e.welcomeMessage, m = e.errorMessage, d = useCurrentLine(i, l, c, s, m, a); return React.createElement("div", { ref: t, className: n.editor, style: { background: o.themeBGColor } }, u, r, d) } function Terminal(e) { var t = React.useRef(null), n = React.useState(!reactDeviceDetect.isMobile), o = n[0], r = n[1], a = React.useContext(StyleContext), i = React.useContext(ThemeContext); useClickOutsideEvent(t, o, r); var l = e.caret, c = e.theme, s = e.showControlButtons, u = e.controlButtonLabels, m = e.prompt, d = e.commands, p = e.welcomeMessage, f = e.errorMessage, _ = e.enableInput; return React.createElement("div", { ref: t, id: a.terminalContainer, className: a["theme--" + c] }, React.createElement("div", { className: "" + a.terminal, style: { background: i.themeToolbarColor, color: i.themeColor } }, React.createElement(Controls, { consoleFocused: o, showControlButtons: s, controlButtonLabels: u }), React.createElement(Editor, { caret: l, consoleFocused: o, prompt: m, commands: d, welcomeMessage: p, errorMessage: f, enableInput: _ }))) } function ContextProvider(e) { var t = e.children; return React.createElement(StyleContextProvider, null, React.createElement(ThemeContextProvider, null, t)) } function ReactTerminal(e) { return React.createElement(ContextProvider, null, React.createElement(Terminal, __assign({}, e))) } Terminal.propTypes = { enableInput: PropTypes.bool, caret: PropTypes.bool, theme: PropTypes.string, showControlButtons: PropTypes.bool, controlButtonLabels: PropTypes.arrayOf(PropTypes.string), prompt: PropTypes.string, commands: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.node])), welcomeMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.node]), errorMessage: PropTypes.string }, Terminal.defaultProps = { enableInput: !0, caret: !0, theme: "light", showControlButtons: !0, controlButtonLabels: ["close", "minimize", "maximize"], prompt: ">>>", commands: {}, welcomeMessage: "", errorMessage: "not found!" }; var TerminalContextProvider$1 = TerminalContextProvider, index$1 = { ReactTerminal: ReactTerminal, TerminalContextProvider: TerminalContextProvider$1 }; exports.ReactTerminal = ReactTerminal, exports.TerminalContextProvider = TerminalContextProvider$1, exports.default = index$1;
