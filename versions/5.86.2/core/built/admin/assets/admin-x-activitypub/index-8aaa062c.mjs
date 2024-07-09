function Bc(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function i() {
      return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(i) {
    var n = Object.getOwnPropertyDescriptor(e, i);
    Object.defineProperty(r, i, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[i];
      }
    });
  }), r;
}
var no = { exports: {} }, Nt = {};
const Jc = React.Children, oo = React.Component, ao = React.Fragment, Vc = React.Profiler, Fc = React.PureComponent, Xc = React.StrictMode, $c = React.Suspense, qc = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Kc = React.act, el = React.cloneElement, le = React.createContext, c = React.createElement, tl = React.createFactory, rl = React.createRef, U = React, so = React.forwardRef, co = React.isValidElement, il = React.lazy, lo = React.memo, nl = React.startTransition, ol = React.unstable_act, W = React.useCallback, B = React.useContext, al = React.useDebugValue, sl = React.useDeferredValue, G = React.useEffect, uo = React.useId, cl = React.useImperativeHandle, ll = React.useInsertionEffect, dl = React.useLayoutEffect, Xe = React.useMemo, go = React.useReducer, ul = React.useRef, Y = React.useState, gl = React.useSyncExternalStore, hl = React.useTransition, ho = React.version, pl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Jc,
  Component: oo,
  Fragment: ao,
  Profiler: Vc,
  PureComponent: Fc,
  StrictMode: Xc,
  Suspense: $c,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: qc,
  act: Kc,
  cloneElement: el,
  createContext: le,
  createElement: c,
  createFactory: tl,
  createRef: rl,
  default: U,
  forwardRef: so,
  isValidElement: co,
  lazy: il,
  memo: lo,
  startTransition: nl,
  unstable_act: ol,
  useCallback: W,
  useContext: B,
  useDebugValue: al,
  useDeferredValue: sl,
  useEffect: G,
  useId: uo,
  useImperativeHandle: cl,
  useInsertionEffect: ll,
  useLayoutEffect: dl,
  useMemo: Xe,
  useReducer: go,
  useRef: ul,
  useState: Y,
  useSyncExternalStore: gl,
  useTransition: hl,
  version: ho
}, Symbol.toStringTag, { value: "Module" })), po = /* @__PURE__ */ Bc(pl);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ml = po, fl = Symbol.for("react.element"), Ml = Symbol.for("react.fragment"), Il = Object.prototype.hasOwnProperty, bl = ml.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, yl = { key: !0, ref: !0, __self: !0, __source: !0 };
function mo(e, t, r) {
  var i, n = {}, o = null, a = null;
  r !== void 0 && (o = "" + r), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (i in t)
    Il.call(t, i) && !yl.hasOwnProperty(i) && (n[i] = t[i]);
  if (e && e.defaultProps)
    for (i in t = e.defaultProps, t)
      n[i] === void 0 && (n[i] = t[i]);
  return { $$typeof: fl, type: e, key: o, ref: a, props: n, _owner: bl.current };
}
Nt.Fragment = Ml;
Nt.jsx = mo;
Nt.jsxs = mo;
no.exports = Nt;
var h = no.exports;
const vl = (e) => `<style>
    /* Table of contents
/* ------------------------------------------------------------

This is a development CSS file which is built to a minified
production stylesheet in assets/built/screen.css

1. Variables
2. Fonts
3. Resets
4. Globals
5. Layout
6. Navigation
  6.1. Navigation styles
  6.2. Navigation layouts
  6.3. Dropdown menu
  6.4. Mobile menu
7. Card
8. Header
  8.1. Magazine layout
  8.2. Highlight layout
  8.3. Classic layout
9. CTA
10. Featured posts
11. Container
  11.1. With sidebar
  11.2. Without sidebar
12. Post list
  12.1. List style
  12.2. Grid style
  12.3. No image list
13. Sidebar
14. Post/page
  14.1. Article
  14.2. Page template
  14.3. Page without header
15. Content
16. Cards
17. Comments
18. Recent posts
19. Archive
20. Design settings
21. Footer
  21.1. Footer styles
  21.2. Footer bar
  21.3. Footer signup
22. Lightbox

*/

/* 1. Variables
/* ---------------------------------------------------------- */

:root {
    --color-white: #fff;
    --color-lighter-gray: rgb(0 0 0 / 0.05);
    --color-light-gray: #e6e6e6;
    --color-mid-gray: #ccc;
    --color-dark-gray: #444;
    --color-darker-gray: #15171a;
    --color-black: #000;
    --color-primary-text: var(--color-darker-gray);
    --color-secondary-text: rgb(0 0 0 / 0.55);
    --color-border: rgb(0 0 0 / 0.08);
    --color-dark-border: rgb(0 0 0 / 0.55);
    --font-sans: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --font-serif: "EB Garamond", Georgia, Times, serif;
    --font-serif-alt: Georgia, Times, serif;
    --font-mono: "JetBrains Mono", Menlo, Consolas, Monaco, "Liberation Mono", "Lucida Console", monospace;
    --container-width: 1320px;
    --container-gap: clamp(24px, 1.7032rem + 1.9355vw, 48px);
    --grid-gap: 42px;
}

:root.has-light-text,
:is(.gh-navigation, .gh-footer).has-accent-color {
    --color-lighter-gray: rgb(255 255 255 / 0.1);
    --color-darker-gray: #fff;
    --color-secondary-text: rgb(255 255 255 / 0.64);
    --color-border: rgb(255 255 255 / 0.15);
    --color-dark-border: rgb(255 255 255 / 0.5);
}

/* 2. Fonts
/* ---------------------------------------------------------- */

@font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url(../fonts/inter-roman.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
    font-family: "EB Garamond";
    font-style: normal;
    font-weight: 400 800;
    font-display: swap;
    src: url(../fonts/eb-garamond-roman.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
    font-family: "EB Garamond";
    font-style: italic;
    font-weight: 400 800;
    font-display: swap;
    src: url(../fonts/eb-garamond-italic.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
    font-family: "JetBrains Mono";
    font-style: normal;
    font-weight: 100 800;
    font-display: swap;
    src: url(../fonts/jetbrains-mono-roman.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
    font-family: "JetBrains Mono";
    font-style: italic;
    font-weight: 100 800;
    font-display: swap;
    src: url(../fonts/jetbrains-mono-italic.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* 3. Resets
/* ---------------------------------------------------------- */

*, *::before, *::after {
    box-sizing: border-box;
}

* {
    margin: 0;
}

html {
    font-size: 62.5%;
}

body {
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

img, picture, video, canvas, svg {
    display: block;
    height: auto;
    max-width: 100%;
}

iframe {
    display: block;
}

input, button, textarea, select {
    font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
}

h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
}

/* 4. Globals
/* ---------------------------------------------------------- */

body {
    font-family: var(--font-sans);
    font-size: 1.6rem;
    background-color: var(--background-color);
    color: var(--color-primary-text);
}

a {
    color: var(--color-darker-gray);
    text-decoration: none;
}

a:hover {
    opacity: 0.8;
}

.gh-button {
    display: inline-flex;
    gap: 0.4em;
    align-items: center;
    justify-content: center;
    padding: 0.8em 1.4em;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.004em;
    line-height: 1;
    color: var(--color-white);
    cursor: pointer;
    background-color: var(--ghost-accent-color);
    border: 0;
    border-radius: 100px;
}

.gh-button:hover {
    opacity: 0.95;
}

.gh-icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    color: var(--color-darker-gray);
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: none;
}

.gh-icon-button:hover :is(svg, span) {
    opacity: 0.8;
}

.gh-icon-button svg {
    width: 20px;
    height: 20px;
}

.gh-form {
    display: flex;
    align-items: center;
    position: relative;
    max-width: 560px;
    width: 100%;
    height: 56px;
    font-size: 1.7rem;
    font-weight: 450;
    letter-spacing: -0.008em;
    border-radius: 40px;
    background-color: var(--color-lighter-gray);
    transition: background-color 0.2s ease;
}

.gh-form.success {
    pointer-events: none;
}

.gh-form.error {
    box-shadow: 0 0 0 1px red;
}

.gh-form:hover {
    background-color: rgb(0 0 0 / 0.065);
}

.has-light-text .gh-form:hover,
.gh-footer.has-accent-color .gh-form:hover {
    background-color: rgb(255 255 255 / 0.15);
}

.gh-form-input {
    position: absolute;
    inset: 0;
    padding-inline: 26px;
    width: 100%;
    height: 100%;
    font-size: inherit;
    letter-spacing: inherit;
    line-height: 1.1;
    border: 0;
    background-color: transparent;
    outline: none;
    transition: 0.3s ease-in-out;
}

.gh-form-input::placeholder,
button.gh-form-input {
    color: rgb(0 0 0 / 0.3);
}

:is(.has-serif-title, .has-mono-title) .gh-form-input {
    padding-inline: 20px;
}

.gh-form.gh-form.success .gh-form-input {
    opacity: 0.5;
}

.has-light-text .gh-form-input,
.gh-footer.has-accent-color .gh-form-input {
    color: #fff;
}

.has-light-text .gh-form-input::placeholder,
.has-light-text button.gh-form-input,
.gh-footer.has-accent-color .gh-form-input::placeholder {
    color: rgb(255 255 255 / 0.55);
}

.gh-header.is-classic.has-image .gh-form-input {
    color: #15171a;
}

.gh-header.is-classic.has-image .gh-form-input::placeholder,
.gh-header.is-classic.has-image button.gh-form-input,
.gh-header.is-classic.has-image .gh-form > svg {
    color: rgb(0 0 0 / 0.5);
}

button.gh-form-input {
    padding-inline-start: 56px;
    text-align: left;
    color: var(--color-secondary-text);
    cursor: pointer;
}

:is(.has-serif-title,.has-mono-title) button.gh-form-input {
    padding-inline-start: 50px;
}

.gh-form .gh-button {
    position: absolute;
    right: 6px;
    padding-inline: 32px;
    height: 44px;
    font-size: inherit;
}

.gh-form > svg {
    position: relative;
    left: 22px;
    width: 20px;
    height: 20px;
    color: var(--color-secondary-text);
}

:is(.has-serif-title,.has-mono-title) .gh-form > svg {
    left: 16px;
}

.gh-form .gh-button svg {
    display: none;
    position: absolute;
    margin-top: 1px;
}

.gh-form:is(.loading, .success) .gh-button span {
    visibility: hidden;
}

.gh-form.loading .gh-button svg:first-of-type {
    display: block;
}

.gh-form.success .gh-button svg:last-of-type {
    display: block;
}

.gh-form [data-members-error] {
    position: absolute;
    top: 100%;
    margin-top: 10px;
    width: 100%;
    font-size: 1.4rem;
    line-height: 1.4;
}

@media (max-width: 576px) {
    .gh-form {
        font-size: 1.6rem;
    }

    .gh-form .gh-button {
        padding-inline: 12px;
    }

    .gh-form .gh-button span span {
        display: none;
    }

    .gh-form .gh-button span svg {
        display: inline;
        position: static;
        margin-top: 2px;
        width: 20px;
        height: 20px;
    }
}

/* 5. Layout
/* ---------------------------------------------------------- */

.gh-viewport {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.gh-outer {
    padding: 0 max(4vmin, 20px);
}

.gh-outer .gh-outer {
    padding: 0;
}

.gh-inner {
    margin: 0 auto;
    max-width: var(--container-width);
    width: 100%;
}

.gh-main {
    flex-grow: 1;
}

.gh-canvas,
.kg-width-full.kg-content-wide {
    --main: min(var(--content-width, 720px), 100% - var(--container-gap) * 2);
    --wide: minmax(0, calc((var(--container-width, 1200px) - var(--content-width, 720px)) / 2));
    --full: minmax(var(--container-gap), 1fr);

    display: grid;
    grid-template-columns:
        [full-start] var(--full)
        [wide-start] var(--wide)
        [main-start] var(--main) [main-end]
        var(--wide) [wide-end]
        var(--full) [full-end];
}

.gh-canvas > * {
    grid-column: main;
}

.kg-width-wide,
.kg-content-wide > div {
    grid-column: wide;
}

.kg-width-full {
    grid-column: full;
}

.kg-article-container {
    padding-bottom: 4.8rem;
}

/* 6. Navigation
/* ---------------------------------------------------------- */

.gh-navigation {
    height: 100px;
    font-size: 1.5rem;
    font-weight: 550;
    background-color: var(--background-color);
    color: var(--color-darker-gray);
}

.gh-navigation :is(.gh-navigation-logo, a:not(.gh-button), .gh-icon-button) {
    color: inherit;
}

.gh-navigation-inner {
    display: grid;
    grid-auto-flow: row dense;
    column-gap: 24px;
    align-items: center;
    height: 100%;
}

.gh-navigation-brand {
    line-height: 1;
}

.gh-navigation-logo {
    position: relative;
    font-size: calc(2.4rem * var(--factor, 1));
    font-weight: 725;
    letter-spacing: -0.015em;
    white-space: nowrap;
}

.gh-navigation-logo img {
    max-height: 40px;
}

.gh-navigation-menu {
    display: flex;
    gap: 24px;
    align-items: center;
}

.gh-navigation .nav {
    display: inline-flex;
    gap: 28px;
    align-items: center;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    list-style: none;
}

.gh-navigation .gh-more-toggle {
    position: relative;
    margin: 0 -6px;
    font-size: inherit;
    text-transform: inherit;
}

.gh-navigation .gh-more-toggle svg {
    width: 24px;
    height: 24px;
}

.gh-navigation-actions {
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: flex-end;
    background-color: var(--background-color);
}

.gh-navigation.has-accent-color .gh-navigation-actions {
    background-color: var(--ghost-accent-color);
}

.gh-navigation-members {
    display: flex;
    gap: 20px;
    align-items: center;
    white-space: nowrap;
}

.gh-navigation-members .gh-button {
    font-size: inherit;
    font-weight: 600;
}

.gh-search {
    margin-right: -2px;
    margin-left: -2px;
}

@media (max-width: 767px) {
    .gh-navigation-logo {
        white-space: normal;
    }

    .gh-navigation-members {
        flex-direction: column-reverse;
        gap: 16px;
        width: 100%;
    }

    .gh-navigation-actions .gh-search {
        display: none;
    }
}

@media (min-width: 768px) {
    .gh-navigation-brand .gh-search {
        display: none;
    }

    .gh-navigation:not(.is-dropdown-loaded) .gh-navigation-menu .nav > li {
        opacity: 0;
    }
}

/* 6.1. Navigation styles */

.gh-navigation.has-accent-color {
    background-color: var(--ghost-accent-color);
}

.gh-navigation.has-accent-color .gh-button {
    background-color: #fff;
    color: #15171a;
}

/* 6.2. Navigation layouts */

/*
======================================================================
LOGO   Home About Collection Author Portal             Login Subscribe
======================================================================
*/

.gh-navigation.is-left-logo .gh-navigation-inner {
    grid-template-columns: auto 1fr auto;
}

@media (min-width: 768px) {
    .gh-navigation.is-left-logo .gh-navigation-logo:not(:has(img)) {
        top: -2px;
    }
}

@media (min-width: 992px) {
    .gh-navigation.is-left-logo .gh-navigation-menu {
        margin-right: 100px;
        margin-left: 16px;
    }
}

/*
======================================================================
Home About Collection            LOGO                  Login Subscribe
======================================================================
*/

.gh-navigation.is-middle-logo .gh-navigation-inner {
    grid-template-columns: 1fr auto 1fr;
}

.gh-navigation.is-middle-logo .gh-navigation-brand {
    grid-column-start: 2;
}

.gh-navigation.is-middle-logo .gh-navigation-actions {
    gap: 28px;
}

@media (min-width: 992px) {
    .gh-navigation.is-middle-logo .gh-navigation-menu {
        margin-right: 64px;
    }
}

/*
======================================================================
Search                         LOGO                    Login Subscribe
                 Home About Collection Author Portal
======================================================================
*/

.gh-navigation.is-stacked {
    position: relative;
    height: auto;
}

.gh-navigation.is-stacked .gh-navigation-inner {
    grid-template-columns: 1fr auto 1fr;
}

.gh-navigation.is-stacked .gh-navigation-brand {
    display: flex;
    align-items: center;
    grid-row-start: 1;
    grid-column-start: 2;
    min-height: 80px;
}

@media (max-width: 767px) {
    .gh-navigation.is-stacked .gh-navigation-brand {
        min-height: unset;
    }
}

@media (min-width: 992px) {
    .gh-navigation.is-stacked .gh-navigation-inner {
        padding: 0;
    }

    .gh-navigation.is-stacked .gh-navigation-brand {
        display: flex;
        align-items: center;
        height: 80px;
    }

    .gh-navigation.is-stacked .gh-navigation-menu {
        grid-row-start: 2;
        grid-column: 1 / 4;
        justify-content: center;
        height: 60px;
        margin: 0 48px;
    }

    .gh-navigation.is-stacked .gh-navigation-menu::before,
    .gh-navigation.is-stacked .gh-navigation-menu::after {
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        height: 1px;
        content: "";
        background-color: var(--color-border);
    }

    .gh-navigation.is-stacked .gh-navigation-menu::after {
        top: 140px;
    }

    .gh-navigation.is-stacked .gh-navigation-actions {
        grid-row-start: 1;
        grid-column: 1 / 4;
        justify-content: space-between;
    }

    .gh-navigation.is-stacked .gh-navigation-actions .gh-search {
        display: flex;
        gap: 10px;
        width: auto;
    }
}

/* 6.3. Dropdown menu */

.gh-dropdown {
    position: absolute;
    top: 100%;
    right: -16px;
    z-index: 90;
    width: 200px;
    padding: 12px 0;
    margin-top: 24px;
    text-align: left;
    visibility: hidden;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 0.04), 0 7px 20px -5px rgb(0 0 0 / 0.15);
    opacity: 0;
    transition: opacity 0.3s, transform 0.2s;
    transform: translate3d(0, 6px, 0);
}

.gh-dropdown.is-left {
    right: auto;
    left: -16px;
}

.is-dropdown-mega .gh-dropdown {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: column;
    column-gap: 40px;
    width: auto;
    padding: 20px 32px;
}

.is-dropdown-open .gh-dropdown {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.gh-dropdown li a {
    display: block;
    padding: 7px 20px;
    line-height: 1.5;
    white-space: normal;
    color: #15171a !important;
}

.is-dropdown-mega .gh-dropdown li a {
    padding: 8px 0;
}

/* 6.4. Mobile menu */

.gh-burger {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    display: none;
    margin-right: -7px;
    margin-left: 4px;
}

.gh-burger svg {
    width: 24px;
    height: 24px;
}

.gh-burger svg:last-child {
    display: none;
}

.is-open .gh-burger svg:first-child {
    display: none;
}

.is-open .gh-burger svg:last-child {
    display: block;
}

@media (max-width: 767px) {
    .gh-burger {
        display: flex;
    }

    #gh-navigation {
        height: 64px;
    }

    #gh-navigation .gh-navigation-inner {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: 1fr;
        gap: 48px;
    }

    #gh-navigation .gh-navigation-brand {
        display: grid;
        grid-template-columns: 1fr auto auto;
        grid-column-start: 1;
        align-items: center;
        height: 64px;
    }

    #gh-navigation .gh-navigation-logo {
        font-size: 2.2rem;
    }

    #gh-navigation .gh-navigation-menu,
    #gh-navigation .gh-navigation-actions {
        position: fixed;
        justify-content: center;
        visibility: hidden;
        opacity: 0;
    }

    #gh-navigation .gh-navigation-menu {
        transition: none;
        transform: translateY(0);
    }

    #gh-navigation .nav {
        gap: 20px;
        align-items: center;
        line-height: 1.4;
    }

    #gh-navigation .nav a {
        font-size: 1.75rem;
        font-weight: 600;
        text-transform: none;
    }

    #gh-navigation .nav li {
        opacity: 0;
        transform: translateY(-4px);
    }

    #gh-navigation .gh-navigation-actions {
        text-align: center;
    }

    #gh-navigation :is(.gh-button, a[data-portal="signin"]) {
        opacity: 0;
        transform: translateY(8px);
    }

    #gh-navigation .gh-button {
        width: 100%;
        font-size: 1.75rem;
        text-transform: none;
    }

    #gh-navigation a[data-portal="signin"] {
        font-size: 1.75rem;
    }

    #gh-main {
        transition: opacity 0.4s;
    }

    .is-open#gh-navigation {
        position: fixed;
        inset: 0;
        z-index: 3999999;
        height: 100%;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }

    .is-open#gh-navigation .gh-navigation-menu,
    .is-open#gh-navigation .gh-navigation-actions {
        position: static;
        visibility: visible;
        opacity: 1;
    }

    .is-open#gh-navigation .nav {
        display: flex;
        flex-direction: column;
    }

    .is-open#gh-navigation .nav li {
        opacity: 1;
        transition: transform 0.2s, opacity 0.2s;
        transform: translateY(0);
    }

    .is-open#gh-navigation .gh-navigation-actions {
        position: sticky;
        right: 0;
        bottom: 0;
        left: 0;
        display: inline-flex;
        flex-direction: column;
        gap: 12px;
        align-items: center;
        padding: var(--container-gap) 0;
    }

    .is-open#gh-navigation :is(.gh-button, a[data-portal="signin"]) {
        opacity: 1;
        transition: transform 0.4s, opacity 0.4s;
        transition-delay: 0.2s;
        transform: translateY(0);
    }

    .is-open#gh-navigation a[data-portal="signin"] {
        transition-delay: 0.4s;
    }

    .is-open#gh-main {
        opacity: 0;
    }
}

/* 7. Card
/* ---------------------------------------------------------- */

.gh-card {
    position: relative;
}

.gh-card-link {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.gh-card-link:hover {
    opacity: 1;
}

.gh-card-image {
    position: relative;
    flex-shrink: 0;
    aspect-ratio: 16 / 9;
}

.gh-card-image img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.gh-card-wrapper {
    flex-grow: 1;
}

.gh-card-tag {
    display: none;
    margin-bottom: 4px;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.01em;
    text-transform: uppercase;
}

.gh-card-title {
    font-size: calc(1.9rem * var(--factor, 1));
    font-weight: 725;
    letter-spacing: -0.014em;
    line-height: 1.3;
}

.gh-card-link:hover .gh-card-title {
    opacity: 0.8;
}

.gh-card-excerpt {
    display: -webkit-box;
    overflow-y: hidden;
    margin-top: 8px;
    font-size: 1.45rem;
    line-height: 1.4;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.gh-card-meta {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    align-items: center;
    padding-bottom: 1px;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.05;
    letter-spacing: -0.004em;
    color: var(--color-secondary-text);
}

.gh-card-meta svg {
    width: 16px;
    height: 16px;
    margin-right: 2px;
    margin-top: -2px;
}

.gh-card-meta:not(:empty) {
    margin-top: 12px;
}

.gh-card-author + .gh-card-date::before {
    content: "—";
    margin-right: 4px;
}

/* 8. Header
/* ---------------------------------------------------------- */

.gh-header {
    position: relative;
    margin-top: 40px;
}

.gh-header-inner {
    position: relative;
    overflow: hidden;
}

/* 8.1. Magazine layout */

.gh-header.is-magazine .gh-header-inner {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: var(--grid-gap);
}

.gh-header.is-magazine .gh-header-inner > div {
    display: flex;
    flex-direction: column;
    gap: var(--grid-gap);
    grid-row: 1;
}

.gh-header.is-magazine .gh-header-left {
    grid-column: 1 / span 4;
}

.gh-header.is-magazine .gh-header-inner > .gh-card {
    position: relative;
    grid-column: 5 / span 8;
}

.gh-header.is-magazine .gh-header-right {
    grid-column: 13 / -1;
}

.gh-header.is-magazine .gh-header-inner > .gh-card .gh-card-link {
    gap: 28px;
}

.gh-header.is-magazine .gh-header-inner > .gh-card .gh-card-image {
    aspect-ratio: 1.618033;
}

.gh-header.is-magazine .gh-header-inner > .gh-card .gh-card-tag {
    display: block;
    margin-bottom: 12px;
}

.gh-header.is-magazine .gh-header-inner > .gh-card .gh-card-title {
    font-size: clamp(2.8rem, 1.36vw + 2.25rem, 4rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.022em;
}

.gh-header.is-magazine .gh-header-inner > .gh-card .gh-card-excerpt {
    margin-top: clamp(12px, 0.45vw + 10.18px, 16px);
    font-size: 1.8rem;
    letter-spacing: -0.02em;
    max-width: 90%;
}

.gh-header.is-magazine .gh-header-inner > .gh-card .gh-card-meta:not(:empty) {
    margin-top: 14px;
}

.gh-header.is-magazine :is(.gh-header-left, .gh-header-right) .gh-card:last-child .gh-card-image {
    display: none;
}

.gh-header.is-magazine .gh-header-inner > div .gh-card-excerpt {
    display: none;
}

.gh-header.is-magazine .gh-header-inner > .gh-card::before,
.gh-header.is-magazine .gh-header-inner > .gh-card::after {
    position: absolute;
    top: 0;
    left: calc(var(--grid-gap) / -2);
    content: "";
    width: 1px;
    height: 100%;
    background-color: var(--color-border);
}

.gh-header.is-magazine .gh-header-inner > .gh-card::after {
    right: calc(var(--grid-gap) / -2);
    left: auto;
}

.gh-header.is-magazine .gh-header-inner > div .gh-card + .gh-card::before {
    position: absolute;
    top: calc(var(--grid-gap) / -2);
    left: 0;
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--color-border);
}

@media (max-width: 1199px) {
    .gh-header.is-magazine .gh-header-inner {
        grid-template-columns: repeat(12, 1fr);
    }

    .gh-header.is-magazine .gh-header-inner > .gh-card {
        grid-column: 1 / span 8;
    }

    .gh-header.is-magazine .gh-header-left {
        grid-column: 9 / -1;
    }

    .gh-header.is-magazine .gh-header-inner > div.gh-header-right {
        grid-column: 1 / -1;
        grid-row: 2;
        flex-direction: row;
    }

    .gh-header.is-magazine .gh-header-right .gh-card {
        flex: 1;
    }

    .gh-header.is-magazine .gh-header-right .gh-card:last-child .gh-card-image {
        display: block;
    }

    .gh-header.is-magazine .gh-header-right {
        position: relative;
    }

    .gh-header.is-magazine .gh-header-right::before {
        position: absolute;
        top: calc(var(--grid-gap) / -2);
        left: 0;
        content: "";
        width: 100%;
        height: 1px;
        background-color: var(--color-border);
    }

    .gh-header.is-magazine .gh-header-right .gh-card::before {
        display: none;
    }

    .gh-header.is-magazine .gh-header-right .gh-card::after {
        position: absolute;
        top: 0;
        right: calc(var(--grid-gap) / -2);
        content: "";
        width: 1px;
        height: 100%;
        background-color: var(--color-border);
    }
}

@media (max-width: 991px) {
    .gh-header.is-magazine .gh-header-left .gh-card:nth-child(2) .gh-card-image {
        display: none;
    }
}

@media (max-width: 767px) {
    .gh-header.is-magazine .gh-header-inner {
        display: flex;
        flex-direction: column;
        gap: var(--grid-gap);
    }

    .gh-header.is-magazine .gh-header-inner > div.gh-header-right {
        flex-direction: column;
    }

    .gh-header.is-magazine .gh-card-image {
        display: block !important;
    }

    .gh-header.is-magazine .gh-card::before {
        display: block !important;
        position: absolute;
        top: calc(var(--grid-gap) / -2);
        left: 0;
        content: "";
        width: 100%;
        height: 1px;
        background-color: var(--color-border);
    }
}

/* 8.2. Highlight layout */

.gh-header.is-highlight .gh-header-inner {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: var(--grid-gap);
}

.gh-header.is-highlight .gh-header-left {
    position: relative;
    grid-column: span 8;
}

.gh-header.is-highlight .gh-header-left .gh-card {
    grid-column: span 8;
    grid-row: span 3;
}

.gh-header.is-highlight .gh-header-left .gh-card .gh-card-link {
    gap: 28px;
}

.gh-header.is-highlight .gh-header-left .gh-card .gh-card-image {
    aspect-ratio: 3 / 2;
}

.gh-header.is-highlight .gh-header-left .gh-card .gh-card-tag {
    display: block;
    margin-bottom: 12px;
}

.gh-header.is-highlight .gh-header-left .gh-card .gh-card-title {
    font-size: clamp(2.8rem, 1.36vw + 2.25rem, 4rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.022em;
}

.gh-header.is-highlight .gh-header-left .gh-card .gh-card-excerpt {
    margin-top: clamp(12px, 0.45vw + 10.18px, 16px);
    font-size: 1.8rem;
}

.gh-header.is-highlight .gh-header-left .gh-card .gh-card-meta:not(:empty) {
    margin-top: 14px;
}

.gh-header.is-highlight .gh-header-middle {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--grid-gap);
    grid-column: 9 / span 4;
}

.gh-header.is-highlight .gh-header-middle .gh-card:last-child .gh-card-image {
    display: none;
}

.gh-header.is-highlight .gh-header-middle .gh-card .gh-card-excerpt {
    display: none;
}

.gh-header.is-highlight .gh-header-right {
    grid-column: 13 / -1;
}

.gh-header.is-highlight .gh-featured {
    margin-top: 0;
    padding: 0;
}

.gh-header.is-highlight .gh-featured-feed {
    display: flex;
    flex-direction: column;
}

.gh-header.is-highlight .gh-featured-feed .gh-card-title {
    font-size: clamp(1.4rem, 0.23vw + 1.31rem, 1.6rem);
}

.gh-header.is-highlight .gh-header-left::after,
.gh-header.is-highlight .gh-header-middle::after {
    position: absolute;
    top: 0;
    right: calc(var(--grid-gap) / -2);
    content: "";
    width: 1px;
    height: 100%;
    background-color: var(--color-border);
}

.gh-header.is-highlight .gh-card::before {
    position: absolute;
    top: calc(var(--grid-gap) / -2);
    left: 0;
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--color-border);
}

.gh-header.is-highlight .gh-featured .gh-card:first-child::before {
    display: none;
}

@media (max-width: 1199px) {
    .gh-header.is-highlight .gh-header-inner {
        grid-template-columns: repeat(9, 1fr);
    }

    .gh-header.is-highlight .gh-header-left {
        grid-column: span 6;
    }

    .gh-header.is-highlight .gh-header-middle {
        grid-column: 7 / -1;
    }

    .gh-header.is-highlight .gh-header-right {
        grid-column: 1 / -1;
    }

    .gh-header.is-highlight .gh-featured-feed {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .gh-header.is-highlight .gh-featured-feed .gh-card:before {
        width: calc(100% + var(--grid-gap));
    }

    .gh-header.is-highlight .gh-featured-feed .gh-card::after {
        position: absolute;
        top: 0;
        left: calc(var(--grid-gap) / -2);
        content: "";
        width: 1px;
        height: 100%;
        background-color: var(--color-border);
    }
}

@media (max-width: 991px) {
    .gh-header.is-highlight .gh-header-middle .gh-card:nth-child(2) .gh-card-image {
        display: none;
    }
}

@media (max-width: 767px) {
    .gh-header.is-highlight .gh-header-inner {
        display: flex;
        flex-direction: column;
    }

    .gh-header.is-highlight .gh-featured-feed {
        display: flex;
        /* gap: var(--grid-gap); */
    }

    .gh-header.is-highlight .gh-card-image {
        display: block !important;
    }

    .gh-header.is-highlight .gh-header-middle .gh-card .gh-card-excerpt {
        display: -webkit-box;
    }
}

/* 8.3. Classic layout */

.gh-header.is-classic {
    display: flex;
    margin-top: 0;
    padding-block: 160px;
}

.gh-header.is-classic .gh-header-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    overflow: unset;
    margin: auto;
    max-width: 1020px;
    text-align: center;
}

.gh-header.is-classic .gh-header-title {
    font-size: calc(clamp(3rem, 1.82vw + 2.27rem, 4.6rem) * var(--factor, 1));
    line-height: 1.1;
    letter-spacing: -0.028em;
}

.gh-header.is-classic.has-image {
    margin-top: 0;
}

.gh-header.is-classic.has-image::before {
    position: absolute;
    inset: 0;
    content: "";
    opacity: 0.3;
    background-color: var(--color-black);
    transition: opacity 1.5s ease;
}

.gh-header.is-classic.has-image .gh-header-inner {
    color: #fff;
}

.gh-header.is-classic.has-image .gh-header-image {
    position: absolute;
    inset: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.gh-header.is-classic.has-image .gh-form {
    background-color: #fff;
}

/* 9. CTA
/* ---------------------------------------------------------- */

.gh-cta {
    display: none;
    margin-top: max(4vw, 40px);
}

.gh-header:is(.is-highlight, .is-magazine) + .gh-cta {
    display: block;
}

.gh-cta-inner {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    padding: clamp(48px, 3.64vw + 33.45px, 80px) clamp(40px, 2.73vw + 29.09px, 64px);
    text-align: center;
    background-color: var(--color-lighter-gray);
}

.gh-cta-content {
    max-width: 640px;
}

.gh-cta-title {
    font-size: clamp(2.8rem,1.36vw + 2.25rem,4rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.021em;
}

.gh-cta-description {
    margin-top: 12px;
    font-size: 1.8rem;
    line-height: 1.4;
    letter-spacing: -0.015em;
}

/* 10. Featured posts
/* ---------------------------------------------------------- */

.gh-featured {
    margin-top: 100px;
}

.gh-navigation + .gh-featured {
    margin-top: 64px;
}

.gh-header.is-classic:not(.has-image) + .gh-featured {
    margin-top: 0;
}

.gh-featured-inner {
    overflow: hidden;
}

.gh-featured-title {
    margin-bottom: 20px;
    padding-bottom: 12px;
    font-size: 1.2rem;
    font-weight: 550;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    border-bottom: 1px solid var(--color-border);
}

.gh-featured-feed {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--grid-gap);
}

.gh-featured-feed .gh-card {
    container-type: inline-size;
    container-name: featured-card;
}

.gh-featured-feed .gh-card-link {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
}

.gh-featured-feed .gh-card-image {
    width: 72px;
    aspect-ratio: 1;
}

@container featured-card (width < 240px) {
    .gh-featured-feed .gh-card-image {
        display: none;
    }
}

@container featured-card (240px <= width <= 270px) {
    .gh-featured-feed .gh-card-image {
        width: 64px;
    }
}

.gh-featured-feed .gh-card-wrapper {
    container-type: inline-size;
    container-name: featured-card-wrapper;
}

.gh-featured-feed .gh-card-title {
    font-size: 1.6rem;
    font-weight: 650;
    letter-spacing: -0.011em;
}

@container featured-card-wrapper (width < 170px) {
    .gh-featured-feed .gh-card-title {
        font-size: 1.6rem;
    }
}

.gh-featured-feed .gh-card-excerpt {
    display: none;
}

.gh-featured-feed .gh-card-meta:not(:empty) {
    margin-top: 10px;
}

.gh-featured-feed .gh-card::before {
    position: absolute;
    top: 0;
    left: calc(var(--grid-gap) / -2);
    content: "";
    width: 1px;
    height: 100%;
    background-color: var(--color-border);
}

@media (max-width: 1199px) {
    .gh-viewport > .gh-featured .gh-featured-feed {
        grid-template-columns: repeat(3, 1fr);
    }

    .gh-viewport > .gh-featured .gh-featured-feed .gh-card:nth-child(4) {
        display: none;
    }
}

@media (max-width: 767px) {
    .gh-viewport > .gh-featured .gh-featured-feed {
        display: flex;
        flex-direction: column;
    }
}

/* 11. Container
/* ---------------------------------------------------------- */

.gh-container {
    flex-grow: 1;
    margin-top: 64px;
}

.gh-container-inner {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    column-gap: var(--grid-gap);
}

:is(.gh-featured, .gh-cta) + .gh-container {
    margin-top: max(4vw, 40px);
}

.gh-header.is-classic:not(.has-image) + .gh-container {
    margin-top: 0;
}

.gh-navigation + .gh-container .gh-container-title,
:is(.paged, .tag-template, .author-template) .gh-container:not(.has-sidebar) .gh-container-title {
    display: none;
}

.gh-more {
    display: none;
    grid-column: 1 / -1;
    margin-top: 48px;
    font-size: calc(1.9rem * var(--factor, 1));
    font-weight: 725;
    letter-spacing: -0.014em;
}

.gh-container.has-sidebar .gh-more {
    grid-column: span 12;
}

.home-template .gh-more {
    display: block;
}

.gh-more a {
    display: flex;
    align-items: center;
    gap: 4px;
}

.gh-more svg {
    margin-top: -1px;
    width: 18px;
    height: 18px;
}

.has-serif-title .gh-more svg {
    margin-top: 0;
}

/* 11.1. With sidebar */

.gh-container.has-sidebar .gh-main {
    grid-column: 1 / span 12;
    position: relative;
}

.gh-container.has-sidebar .gh-sidebar {
    grid-column: 13 / -1;
}

.gh-container.has-sidebar .gh-main::after {
    position: absolute;
    top: 0;
    right: calc(var(--grid-gap) / -2);
    content: "";
    width: 1px;
    height: 100%;
    background-color: var(--color-border);
}

/* 11.2. Without sidebar */

.gh-container:not(.has-sidebar) :is(.gh-container-title, .gh-main, .gh-more) {
    grid-column: 3 / span 12;
}

.gh-container.is-list.no-image:not(.has-sidebar) :is(.gh-container-title, .gh-main, .gh-more) {
    grid-column: 4 / span 10;
}

.gh-header:is(.is-highlight, .is-magazine) ~ .gh-container.is-grid:not(.has-sidebar) :is(.gh-container-title, .gh-main, .gh-more) {
    grid-column: 1 / -1;
}

@media (max-width: 1199px) {
    .gh-container-inner {
        display: block;
        overflow: hidden;
    }

    .gh-container.has-sidebar .gh-sidebar {
        display: none;
    }
}

/* 12. Post list
/* ---------------------------------------------------------- */

.gh-container-title {
    grid-column: 1 / -1;
    margin-bottom: calc(var(--grid-gap) / 2);
    padding-bottom: 12px;
    font-size: 1.2rem;
    font-weight: 550;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    border-bottom: 1px solid var(--color-border);
}

.gh-container:not(:has(.gh-card)) .gh-container-title {
    display: none;
}

.gh-container .gh-feed {
    gap: var(--grid-gap);
}

.gh-container .gh-card-meta:not(:empty) {
    margin-top: 16px;
}

/* 12.1. List style */

.gh-container.is-list .gh-feed {
    display: flex;
    flex-direction: column;
    container-type: inline-size;
    container-name: list-feed;
}

.gh-container.is-list .gh-card-link {
    flex-direction: row;
    align-items: center;
    gap: 24px;
}

.gh-container.is-list .no-image .gh-card-link {
    padding-block: 20px;
}

.gh-container.is-list .gh-card-image {
    flex-shrink: 0;
    width: 220px;
    aspect-ratio: 1.618033;
}

@container list-feed (width < 600px) {
    .gh-container.is-list .gh-card-image {
        width: 160px;
    }
}

.gh-container.is-list .gh-card:not(.no-image) .gh-card-wrapper {
    max-width: 600px;
}

.gh-container.is-list .gh-card-title {
    --factor: 1.05;
}

.gh-container.is-list .no-image .gh-card-title {
    --factor: 1.2;
}

.gh-container.is-list .gh-card-excerpt {
    margin-top: 6px;
}

.gh-container.is-list .gh-card + .gh-card::before {
    position: absolute;
    top: calc(var(--grid-gap) / -2);
    left: 0;
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--color-border);
}

.home-template .gh-container.is-list .gh-card:first-child:before {
    display: none;
}

@media (max-width: 767px) {
    .gh-container.is-list .gh-card-link {
        flex-direction: column;
        align-items: flex-start;
    }

    .gh-container.is-list .gh-card-image {
        width: 100%;
    }
}

/* 12.2. Grid style */

.gh-container.is-grid .gh-feed {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(248px, 1fr));
    row-gap: calc(var(--grid-gap) * 1.5);
    overflow: hidden;
}

.gh-container.is-grid .gh-card::before {
    position: absolute;
    top: calc(var(--grid-gap) / -2);
    right: calc(var(--grid-gap) / -2);
    left: calc(var(--grid-gap) / -2);
    content: "";
    height: 1px;
    background-color: var(--color-border);
}

.gh-container.is-grid .gh-card::after {
    position: absolute;
    top: 0;
    left: calc(var(--grid-gap) / -2);
    content: "";
    width: 1px;
    height: 100%;
    background-color: var(--color-border);
}

@media (max-width: 767px) {
    .gh-container.is-grid .gh-feed {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 576px) {
    .gh-container.is-grid .gh-feed {
        display: flex;
        flex-direction: column;
    }
}

/* 12.3. No image list */

.gh-container.is-list.no-image .gh-card-image {
    display: none;
}

/* 13. Sidebar
/* ---------------------------------------------------------- */

.gh-sidebar-inner {
    position: sticky;
    top: calc(var(--grid-gap) / 2);
}

.gh-sidebar-title {
    grid-column: 1 / -1;
    margin-bottom: calc(var(--grid-gap) / 2);
    padding-bottom: 12px;
    font-size: 1.2rem;
    font-weight: 550;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    border-bottom: 1px solid var(--color-border);
}

.gh-about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px 24px;
    min-height: 380px;
    text-align: center;
    background-color: var(--color-lighter-gray);
}

.gh-about-icon {
    margin-bottom: 24px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.gh-about-title {
    font-size: calc(2.4rem * var(--factor, 1));
    font-weight: 700;
    letter-spacing: -0.019em;
}

.gh-about-description {
    margin-top: 12px;
    font-size: 1.45rem;
    line-height: 1.4;
}

.gh-about .gh-button {
    margin-top: 32px;
}

.gh-recommendations {
    margin-top: 48px;
}

.gh-recommendations .recommendations {
    display: flex;
    flex-direction: column;
    gap: 26px;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.gh-recommendations .recommendation:first-child {
    margin-top: 4px;
}

.gh-recommendations .recommendation a {
    display: grid;
    grid-template-columns: 24px auto;
    gap: 4px 12px;
}

.gh-recommendations .recommendation a:hover {
    opacity: 1;
}

.gh-recommendations .recommendation-favicon {
    grid-row: span 2;
    width: 100%;
    border-radius: 4px;
}

.gh-recommendations .recommendation-title {
    margin-top: -2px;
    font-size: 1.5rem;
    font-weight: 650;
    letter-spacing: -0.009em;
}

.gh-recommendations .recommendation a:hover .recommendation-title {
    opacity: 0.8;
}

.gh-recommendations .recommendation-url {
    order: 1;
    overflow: hidden;
    font-size: 1.4rem;
    line-height: 1.25;
    color: var(--color-secondary-text);
    text-overflow: ellipsis;
}

.gh-recommendations .recommendation-description {
    display: -webkit-box;
    display: none;
    overflow-y: hidden;
    grid-column: 2;
    font-size: 1.4rem;
    line-height: 1.4;
    color: var(--color-secondary-text);
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.gh-recommendations button {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    margin-top: 24px;
    padding: 0;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 550;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    background-color: transparent;
    border: 0;
}

.gh-recommendations button svg {
    margin-top: -1px;
    width: 12px;
}

.gh-recommendations button:hover {
    opacity: 0.8;
}

/* 14. Post/page
/* ---------------------------------------------------------- */

/* 14.1. Article */

.gh-article {
    --container-width: 1120px;

    word-break: break-word;
}

.gh-article-header {
    margin: clamp(40px, 3.64vw + 25.45px, 72px) 0 40px;
}

.gh-article-tag {
    margin-bottom: 12px;
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: var(--ghost-accent-color);
}

.gh-article-title {
    font-size: calc(clamp(3.4rem, 1.36vw + 2.85rem, 4.6rem) * var(--factor, 1));
    line-height: 1.1;
    letter-spacing: -0.022em;
}

.gh-article-excerpt {
    margin-top: clamp(12px, 0.45vw + 10.18px, 16px);
    max-width: 720px;
    font-size: clamp(1.5rem, 0.45vw + 1.32rem, 1.9rem);
    line-height: 1.4;
    letter-spacing: -0.018em;
}

.gh-article-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    margin-left: 6px;
}

.gh-article-author-image {
    display: flex;
    margin-right: 8px;
}

.gh-article-author-image a {
    position: relative;
    margin: 0 -8px;
    width: 56px;
    height: 56px;
    overflow: hidden;
    background-color: var(--color-light-gray);
    border-radius: 50%;
    border: 3px solid var(--background-color);
}

.gh-article-author-image a:first-child {
    z-index: 10;
}

.gh-article-author-image a:nth-child(2) {
    z-index: 9;
}

.gh-article-author-image a:nth-child(3) {
    z-index: 8;
}

.gh-article-author-image :is(img, svg) {
    position: absolute;
    inset: 0;
    object-fit: cover;
}

.gh-article-meta-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.gh-article-author-name {
    font-size: 1.6rem;
    font-weight: 650;
    letter-spacing: -0.013em;
}

.gh-article-meta-content {
    font-size: 1.35rem;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.006em;
    color: var(--color-secondary-text);
}

.gh-article-image {
    grid-column: main;
    margin-top: 40px;
}

.gh-article-image img {
    width: 100%;
}

/* 14.2. Page template */

.page-template .gh-article-header {
    margin-block: 72px 32px;
}

/* 14.3. Page without header */

.page-template .gh-content:only-child > *:first-child:not(.kg-width-full) {
    margin-top: 64px;
}

.page-template .gh-content > *:last-child:not(.kg-width-full) {
    margin-bottom: 6vw;
}

.page-template .gh-footer {
    margin-top: 0;
}

/* 15. Content
/* ---------------------------------------------------------- */

/* Content refers to styling all page and post content that is
created within the Ghost editor. The main content handles
headings, text, images and lists. We deal with cards lower down. */

.gh-content {
    font-size: var(--content-font-size, 1.7rem);
    letter-spacing: -0.01em;
    padding-bottom: 48px;
}

/* Default vertical spacing */
.gh-content > * + * {
    margin-top: calc(28px * var(--content-spacing-factor, 1));
    margin-bottom: 0;
}

/* Remove space between full-width cards */
.gh-content > .kg-width-full + .kg-width-full:not(.kg-width-full.kg-card-hascaption + .kg-width-full) {
    margin-top: 0;
}

/* Add back a top margin to all headings,
unless a heading is the very first element in the post content */
.gh-content > [id]:not(:first-child) {
    margin-top: calc(56px * var(--content-spacing-factor, 1));
}

/* Add drop cap setting */
.post-template .gh-content.drop-cap > p:first-of-type:first-letter {
    margin :0 0.2em 0em 0;
    font-size: 3.1em;
    float:left;
    line-height: 1;
    margin-left: -1px;
    font-weight: 700;
}

.has-serif-body.post-template .gh-content.drop-cap > p:first-of-type:first-letter {
    font-size: 3.2em;
}

/* Add a small margin between a heading and paragraph after it */
.gh-content > [id] + p {
    margin-top: calc(12px * var(--content-spacing-factor, 1));
}

/* A larger margin before/after dividers, blockquotes and embeds */
.gh-content > :is(hr, blockquote, iframe) {
    position: relative;
    margin-top: calc(48px * var(--content-spacing-factor, 1)) !important;
}

.gh-content > :is(hr, blockquote, iframe) + * {
    margin-top: calc(48px * var(--content-spacing-factor, 1)) !important;
}

/* Now the content typography styles */
.gh-content h1 {
    font-size: calc(2.2em * var(--factor, 1));
    letter-spacing: -0.02em;
}

.gh-content h2 {
    font-size: calc(1.6em * var(--factor, 1));
    letter-spacing: -0.02em;
}

.gh-content h3 {
    font-size: calc(1.3em * var(--factor, 1));
    letter-spacing: -0.017em;
}

.gh-content a {
    color: var(--ghost-accent-color);
    text-decoration: underline;
}

.gh-content .kg-callout-card .kg-callout-text,
.gh-content .kg-toggle-card .kg-toggle-content > :is(ul, ol, p) {
    font-size: 0.95em;
}

.has-serif-body .gh-content > blockquote,
.has-serif-body .gh-content > ol,
.has-serif-body .gh-content > ul,
.has-serif-body .gh-content > dl,
.has-serif-body .gh-content > p,
.has-serif-body .gh-content .kg-callout-text,
.has-serif-body .gh-content .kg-toggle-content > ol,
.has-serif-body .gh-content .kg-toggle-content > ul,
.has-serif-body .gh-content .kg-toggle-content > p {
    font-family: var(--font-serif-alt);
}

.gh-content :is(ul, ol) {
    padding-left: 28px;
}

.gh-content :is(li + li, li :is(ul, ol)) {
    margin-top: 8px;
}

.gh-content ol ol li {
    list-style-type: lower-alpha;
}

.gh-content ol ol ol li {
    list-style-type: lower-roman;
}

.gh-content hr {
    width: 100%;
    height: 1px;
    background-color: var(--color-border);
    border: 0;
}

.gh-content .gh-table {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
}

.gh-content .gh-table table {
    width: 100%;
    font-family: var(--font-sans);
    font-size: 1.5rem;
    white-space: nowrap;
    vertical-align: top;
    border-spacing: 0;
    border-collapse: collapse;
}

.gh-content .gh-table table th {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-darkgrey);
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.2px;
}

.gh-content .gh-table table :is(th, td),
.gh-content .gh-table table td {
    padding: 6px 12px;
    border-bottom: 1px solid var(--color-border);
}

.gh-content .gh-table table :is(th, td):first-child {
    padding-left: 0;
}

.gh-content .gh-table table :is(th, td):last-child {
    padding-right: 0;
}

.gh-content pre {
    overflow: auto;
    padding: 16px;
    font-size: 1.5rem;
    line-height: 1.5em;
    background: var(--color-lighter-gray);
    border-radius: 6px;
    font-family: var(--font-mono);
}

.gh-content :not(pre) > code {
    vertical-align: baseline;
    padding: 0.15em 0.4em;
    font-weight: 400;
    font-size: 0.95em;
    line-height: 1em;
    background: var(--color-lighter-gray);
    border-radius: 0.25em;
    font-family: var(--font-mono);
}

/* 16. Cards
/* ---------------------------------------------------------- */

/* Add extra margin before/after any cards, except for when immediately preceeded by a heading */

.gh-content :not(.kg-card):not(table):not([id]) + :is(.kg-card, table) {
    margin-top: calc(48px * var(--content-spacing-factor, 1));
}

.gh-content :is(.kg-card, table) + :not(.kg-card):not(table):not([id]) {
    margin-top: calc(48px * var(--content-spacing-factor, 1));
}

.gh-content :not(.kg-card):not([id]) + .kg-card.kg-width-full {
    margin-top: calc(68px * var(--content-spacing-factor, 1));
}

.gh-content .kg-card.kg-width-full + :not(.kg-card):not([id]) {
    margin-top: calc(68px * var(--content-spacing-factor, 1));
}

/* Image */

.kg-image {
    margin-right: auto;
    margin-left: auto;
}

/* Embed */

.kg-embed-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative; padding-top: 56.5%;
}

.kg-embed-card iframe {
    position: absolute;width: 100%;height: 100%;left: 0px;top: 0px;
}

/* Gallery */

.kg-image[width][height],
.kg-gallery-image {
    cursor: pointer;
}

.kg-image-card a:hover,
.kg-gallery-image a:hover {
    opacity: 1 !important;
}

/* Toggle */

.kg-card.kg-toggle-card .kg-toggle-heading-text {
    font-size: 2rem;
    font-weight: 700;
}

.has-serif-title .kg-toggle-card .kg-toggle-heading-text {
    font-family: var(--font-serif);
}

.has-mono-title .kg-toggle-card .kg-toggle-heading-text {
    font-family: var(--font-mono);
}

/* Callout */

.kg-callout-card.kg-card {
    border-radius: 0.25em;
}

.kg-callout-card-accent a {
    text-decoration: underline;
}

/* Blockquote */

blockquote:not([class]) {
    padding-left: 2rem;
    border-left: 4px solid var(--ghost-accent-color);
}

blockquote.kg-blockquote-alt {
    font-style: normal;
    font-weight: 400;
    color: var(--color-secondary-text);
}

/* Button */

.kg-card.kg-button-card .kg-btn {
    height: unset;
    padding: .6em 1.2em;
    text-align: center;
    font-size: 1em;
    line-height: 1.2em;
}

/* Header */

.has-serif-title .kg-card.kg-header-card h2.kg-header-card-header {
    font-family: var(--font-serif);
}

.has-mono-title .kg-card.kg-header-card h2.kg-header-card-header {
    font-family: var(--font-mono);
}

.has-serif-body .kg-header-card h3.kg-header-card-subheader {
    font-family: var(--font-serif);
}

/* Bookmark */

.kg-bookmark-card .kg-bookmark-container {
    border-radius: 0.25em !important;
}

.kg-bookmark-card .kg-bookmark-container:hover {
    opacity: 1;
}

.kg-bookmark-card .kg-bookmark-content {
    padding: 1.15em;
}

.kg-bookmark-card .kg-bookmark-title {
    font-size: 0.9em;
}

.kg-bookmark-card .kg-bookmark-description {
    max-height: none;
    margin-top: 0.3em;
    font-size: 0.8em;
}

.kg-bookmark-card .kg-bookmark-metadata {
    font-size: 0.8em;
}

.kg-bookmark-card .kg-bookmark-thumbnail img {
    border-radius: 0 0.2em 0.2em 0;
}

/* Product */

.kg-product-card.kg-card .kg-product-card-image {
    margin-bottom: 12px;
}

.kg-product-card.kg-card a.kg-product-card-button {
    height: 2.8em;
    margin-top: 12px;
}

.has-serif-title .kg-product-card.kg-card .kg-product-card-title {
    font-family: var(--font-serif);
}

.has-mono-title .kg-product-card.kg-card .kg-product-card-title {
    font-family: var(--font-mono);
}

.has-serif-body .kg-product-card-description :is(p, ul, ol) {
    font-family: var(--font-serif-alt);
}

/* File */

.kg-file-card.kg-card .kg-file-card-container {
    padding: 0.6em;
}

.kg-file-card.kg-card .kg-file-card-contents {
    margin: 4px 8px 6px;
}

.kg-file-card.kg-card .kg-file-card-metadata {
    font-size: 0.9em;
}

.kg-file-card.kg-card .kg-file-card-filesize::before {
    margin-right: 6px;
    margin-left: 6px;
}

/* Caption */

figcaption {
    margin-top: 12px;
    font-size: 1.4rem;
    text-align: center;
}

.kg-card.kg-width-full figcaption {
    padding: 0 16px;
}

figcaption a {
    color: var(--ghost-accent-color);
    text-decoration: underline;
}

/* 17. Comments
/* ---------------------------------------------------------- */

.gh-comments {
    margin-top: 48px;
}

/* 18. Recent posts
/* ---------------------------------------------------------- */

.post-template .gh-container {
    margin-top: 120px;
}

.post-template .gh-container-inner {
    display: block;
}

.post-template .gh-container.is-grid .gh-feed {
    grid-template-columns: repeat(4, 1fr);
}

.post-template .gh-container .gh-container-title {
    display: block;
}

/* 19. Archive
/* ---------------------------------------------------------- */

.gh-archive {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: var(--grid-gap);
    margin-block: 80px 24px;
}

.gh-archive.has-image {
    margin-top: 48px;
}

.gh-archive-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--grid-gap);
    grid-column: 1 / -1;
    padding-bottom: clamp(40px, 2.73vw + 29.09px, 64px);
    border-bottom: 1px solid var(--color-border);
}

.gh-archive.has-image .gh-archive-inner {
    align-items: center;
    grid-column: 1 / -1;
}

.gh-archive:not(.has-sidebar):not(.has-image) .gh-archive-inner {
    grid-column: 3 / span 12;
}

.gh-archive .gh-article-image {
    grid-column: auto;
    margin-top: 0;
}

:is(.tag-template, .author-template) .gh-container {
    margin-top: 0;
}

.author-template .gh-archive-inner {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 24px;
}

.author-template .gh-article-image {
    margin-top: 0;
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.author-template .gh-article-title {
    font-size: 3.6rem;
}

.gh-author-meta {
    display: flex;
    gap: 10px;
    margin-top: 14px;
    font-size: 1.5rem;
    font-weight: 550;
    color: var(--color-secondary-text);
}

.gh-author-meta a {
    color: inherit;
}

.gh-author-social {
    display: flex;
    gap: 10px;
    align-items: center;
    padding-left: 3px;
}

.gh-author-social svg {
    width: 20px;
    height: 20px;
}

@media (max-width: 1199px) {
    .gh-archive {
        display: block;
    }
}

@media (max-width: 767px) {
    .gh-archive-inner {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;
    }

    .author-template .gh-archive-inner {
        flex-direction: column-reverse;
    }
}

/* 20. Design settings
/* ---------------------------------------------------------- */

.has-serif-title {
    --factor: 1.15;
}

.has-mono-title {
    --factor: 1.1;
}

.has-sans-title :is(.is-title, .gh-content :is(h2, h3)) {
    font-family: var(--font-sans);
}

.has-serif-title :is(.is-title, .gh-content :is(h2, h3)) {
    font-family: var(--font-serif);
    font-weight: 550;
}

.has-mono-title :is(.is-title, .gh-content :is(h2, h3)) {
    font-family: var(--font-mono);
}

.has-sans-body .is-body {
    font-family: var(--font-sans);
}

.has-serif-body .is-body {
    font-family: var(--font-serif-alt);
}

.has-serif-title .gh-header.is-classic .gh-header-title {
    font-weight: 550;
    letter-spacing: -0.015em;
}

.has-mono-title .gh-header.is-classic .gh-header-title {
    letter-spacing: -0.01em;
}

.has-serif-title .gh-form {
    border-radius: 0;
}

.has-serif-title .gh-card-title {
    line-height: 1.15;
    letter-spacing: -0.006em;
    font-size: calc(2.0rem*var(--factor, 1))
}

.has-serif-title .gh-featured-feed .gh-card-title {
    font-size: calc(1.6rem*var(--factor, 1))
}

.has-mono-title .gh-featured-feed .gh-card-title {
    font-size: calc(1.5rem*var(--factor, 1));
    letter-spacing: 0;
}

.has-serif-title .gh-header.is-highlight .gh-featured-feed .gh-card-title {
    font-size: clamp(1.6rem, 0.23vw + 1.51rem, 1.8rem);
}

.has-mono-title .gh-card-title {
    font-size: calc(1.8rem*var(--factor, 1));
    line-height: 1.2;
}

.has-serif-title .gh-about-title {
    letter-spacing: -0.009em;
}

.has-serif-title .gh-footer-signup-header {
    letter-spacing: -0.019em;
}

.has-serif-title .gh-article-title {
    letter-spacing: -0.019em;
}

.has-serif-body {
    --content-font-size: 1.9rem;
}

.has-serif-body .gh-card-excerpt {
    font-size: 1.65rem;
    line-height: 1.4;
    letter-spacing: 0.0005em;
}

.has-serif-body .gh-header.is-magazine .gh-header-inner > .gh-card .gh-card-excerpt,
.has-serif-body .gh-header.is-highlight .gh-card:first-child .gh-card-excerpt {
    font-size: 1.8rem;
    letter-spacing: -0.001em;
}

.has-serif-title .gh-header.is-magazine .gh-header-inner>.gh-card .gh-card-title,
.has-serif-title .gh-header.is-highlight .gh-header-left .gh-card-title {
    font-weight: 550;
    font-size: clamp(3.2rem,1.82vw + 2.47rem,4.9rem)
}

.has-serif-body .gh-about-description {
    font-size: 1.6rem;
}

.has-serif-body .gh-article-excerpt {
    letter-spacing: 0;
}

.has-serif-body .gh-footer-signup-subhead {
    letter-spacing: 0;
}

.has-serif-title :is(.gh-button, .gh-form) {
    border-radius: 0;
}

.has-mono-title :is(.gh-button) {
    border-radius: 0;
}

.has-mono-title :is(.gh-form) {
    border-radius: 0;
}

.has-serif-title .gh-cta-title {
    font-size: 4.8rem;
}

/* 21. Footer
/* ---------------------------------------------------------- */

.gh-footer {
    margin-top: 12vw;
    font-size: 1.5rem;
    color: var(--color-darker-gray);
}

.gh-footer a:not(.gh-button) {
    color: inherit;
}

/* 21.1 Footer styles */

.gh-footer.has-accent-color {
    background-color: var(--ghost-accent-color);
}

.gh-footer.has-accent-color .gh-footer-bar {
    border-top: 0;
}

.gh-footer.has-accent-color .gh-button {
    background-color: #fff;
    color: #15171a;
}

/* 21.2. Footer bar */

.gh-footer-bar {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    column-gap: 32px;
    margin-bottom: 100px;
    padding-block: 28px;
    font-weight: 550;
    border-block: 1px solid var(--color-border);
}

.gh-footer-logo {
    position: relative;
    font-size: calc(2.4rem * var(--factor, 1));
    font-weight: 725;
    letter-spacing: -0.015em;
    white-space: nowrap;
}

.gh-footer-logo img {
    max-height: 40px;
}

.gh-footer-menu .nav {
    display: flex;
    justify-content: center;
    gap: 8px 28px;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.gh-footer-copyright {
    text-align: right;
    white-space: nowrap;
}

.gh-footer-copyright a {
    text-decoration: underline;
}

/* 21.3. Footer signup */

.gh-footer-signup {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 160px;
    text-align: center;
}

.gh-footer-signup-header {
    font-size: calc(clamp(2.8rem,1.36vw + 2.25rem,4rem) * var(--factor, 1));
    font-weight: 700;
    letter-spacing: -0.03em;
}

.gh-footer-signup-subhead {
    margin-top: 12px;
    max-width: 640px;
    font-size: 1.8rem;
    font-weight: 450;
    line-height: 1.4;
    letter-spacing: -0.014em;
    opacity: 0.75;
}

.gh-footer-signup .gh-form {
    margin-top: 40px;
}

@media (max-width: 991px) {
    .gh-footer-bar {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}

/* 22. Lightbox
/* ---------------------------------------------------------- */

.pswp {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3999999;
    display: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    -ms-touch-action: none;
    touch-action: none;
    outline: none;
    backface-visibility: hidden;
    -webkit-text-size-adjust: 100%;
}

.pswp img {
    max-width: none;
}

.pswp--animate_opacity {
    opacity: 0.001;
    transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
    will-change: opacity;
}

.pswp--open {
    display: block;
}

.pswp--zoom-allowed .pswp__img {
    cursor: zoom-in;
}

.pswp--zoomed-in .pswp__img {
    cursor: grab;
}

.pswp--dragging .pswp__img {
    cursor: grabbing;
}

.pswp__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    opacity: 0;
    transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
    transform: translateZ(0);
    backface-visibility: hidden;
    will-change: opacity;
}

.pswp__scroll-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.pswp__container,
.pswp__zoom-wrap {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    touch-action: none;
    backface-visibility: hidden;
}

.pswp__container,
.pswp__img {
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
}

.pswp__zoom-wrap {
    position: absolute;
    width: 100%;
    transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1);
    transform-origin: left top;
}

.pswp--animated-in .pswp__bg,
.pswp--animated-in .pswp__zoom-wrap {
    transition: none;
}

.pswp__item {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
}

.pswp__img {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: auto;
}

.pswp__img--placeholder {
    backface-visibility: hidden;
}

.pswp__img--placeholder--blank {
    background: var(--color-black);
}

.pswp--ie .pswp__img {
    top: 0;
    left: 0;
    width: 100% !important;
    height: auto !important;
}

.pswp__error-msg {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    margin-top: -8px;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-secondary-text);
    text-align: center;
}

.pswp__error-msg a {
    color: var(--color-secondary-text);
    text-decoration: underline;
}

.pswp__button {
    position: relative;
    display: block;
    float: right;
    width: 44px;
    height: 44px;
    padding: 0;
    margin: 0;
    overflow: visible;
    appearance: none;
    cursor: pointer;
    background: none;
    border: 0;
    box-shadow: none;
    transition: opacity 0.2s;
}

.pswp__button:focus,
.pswp__button:hover {
    opacity: 1;
}

.pswp__button:active {
    outline: none;
    opacity: 0.9;
}

.pswp__button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

.pswp__ui--over-close .pswp__button--close {
    opacity: 1;
}

.pswp__button,
.pswp__button--arrow--left::before,
.pswp__button--arrow--right::before {
    width: 44px;
    height: 44px;
    background: url("../images/default-skin.png") 0 0 no-repeat;
    background-size: 264px 88px;
}

@media (-webkit-min-device-pixel-ratio: 1.1), (-webkit-min-device-pixel-ratio: 1.09375), (min-resolution: 105dpi), (min-resolution: 1.1dppx) {
    .pswp--svg .pswp__button,
    .pswp--svg .pswp__button--arrow--left::before,
    .pswp--svg .pswp__button--arrow--right::before {
        background-image: url("../images/default-skin.svg");
    }

    .pswp--svg .pswp__button--arrow--left,
    .pswp--svg .pswp__button--arrow--right {
        background: none;
    }
}

.pswp__button--close {
    background-position: 0 -44px;
}

.pswp__button--share {
    background-position: -44px -44px;
}

.pswp__button--fs {
    display: none;
}

.pswp--supports-fs .pswp__button--fs {
    display: block;
}

.pswp--fs .pswp__button--fs {
    background-position: -44px 0;
}

.pswp__button--zoom {
    display: none;
    background-position: -88px 0;
}

.pswp--zoom-allowed .pswp__button--zoom {
    display: block;
}

.pswp--zoomed-in .pswp__button--zoom {
    background-position: -132px 0;
}

.pswp--touch .pswp__button--arrow--left,
.pswp--touch .pswp__button--arrow--right {
    visibility: hidden;
}

.pswp__button--arrow--left,
.pswp__button--arrow--right {
    position: absolute;
    top: 50%;
    width: 70px;
    height: 100px;
    margin-top: -50px;
    background: none;
}

.pswp__button--arrow--left {
    left: 0;
}

.pswp__button--arrow--right {
    right: 0;
}

.pswp__button--arrow--left::before,
.pswp__button--arrow--right::before {
    position: absolute;
    top: 35px;
    width: 32px;
    height: 30px;
    content: "";
}

.pswp__button--arrow--left::before {
    left: 6px;
    background-position: -138px -44px;
}

.pswp__button--arrow--right::before {
    right: 6px;
    background-position: -94px -44px;
}

.pswp__counter {
    position: absolute;
    top: 0;
    left: 0;
    height: 44px;
    padding: 0 15px;
    font-size: 11px;
    font-weight: 700;
    line-height: 44px;
    color: var(--color-white);
    user-select: none;
}

.pswp__caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 44px;
}

.pswp__caption__center {
    max-width: 420px;
    padding: 25px 15px 30px;
    margin: 0 auto;
    font-size: 11px;
    line-height: 1.6;
    color: var(--color-white);
    text-align: center;
}

.pswp__caption__center .post-caption-title {
    margin-bottom: 7px;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
}

.pswp__caption__center .post-caption-meta-item + .post-caption-meta-item::before {
    padding: 0 4px;
    content: "b";
}

.pswp__caption--empty {
    display: none;
}

.pswp__caption--fake {
    visibility: hidden;
}

.pswp__preloader {
    position: absolute;
    top: 0;
    left: 50%;
    width: 44px;
    height: 44px;
    margin-left: -22px;
    opacity: 0;
    transition: opacity 0.25s ease-out;
    direction: ltr;
    will-change: opacity;
}

.pswp__preloader__icn {
    width: 20px;
    height: 20px;
    margin: 12px;
}

.pswp__preloader--active {
    opacity: 1;
}

.pswp__preloader--active .pswp__preloader__icn {
    background: url("../images/preloader.gif") 0 0 no-repeat;
}

.pswp--css_animation .pswp__preloader--active {
    opacity: 1;
}

.pswp--css_animation .pswp__preloader--active .pswp__preloader__icn {
    animation: clockwise 500ms linear infinite;
}

.pswp--css_animation .pswp__preloader--active .pswp__preloader__donut {
    animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite;
}

.pswp--css_animation .pswp__preloader__icn {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 14px;
    height: 14px;
    margin: 0;
    background: none;
    opacity: 0.75;
}

.pswp--css_animation .pswp__preloader__cut {
    position: relative;
    width: 7px;
    height: 14px;
    overflow: hidden;
}

.pswp--css_animation .pswp__preloader__donut {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    margin: 0;
    background: none;
    border: 2px solid var(--color-white);
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-radius: 50%;
}

@media screen and (max-width: 1024px) {
    .pswp__preloader {
        position: relative;
        top: auto;
        left: auto;
        float: right;
        margin: 0;
    }
}

@keyframes clockwise {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes donut-rotate {
    0% {
        transform: rotate(0);
    }

    50% {
        transform: rotate(-140deg);
    }

    100% {
        transform: rotate(0);
    }
}

.pswp__ui {
    z-index: 1550;
    visibility: visible;
    opacity: 1;
    -webkit-font-smoothing: auto;
}

.pswp__top-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
}

.pswp__caption,
.pswp__top-bar,
.pswp--has_mouse .pswp__button--arrow--left,
.pswp--has_mouse .pswp__button--arrow--right {
    backface-visibility: hidden;
    transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
    will-change: opacity;
}

.pswp--has_mouse .pswp__button--arrow--left,
.pswp--has_mouse .pswp__button--arrow--right {
    visibility: visible;
}

.pswp__ui--idle .pswp__top-bar {
    opacity: 0;
}

.pswp__ui--idle .pswp__button--arrow--left,
.pswp__ui--idle .pswp__button--arrow--right {
    opacity: 0;
}

.pswp__ui--hidden .pswp__top-bar,
.pswp__ui--hidden .pswp__caption,
.pswp__ui--hidden .pswp__button--arrow--left,
.pswp__ui--hidden .pswp__button--arrow--right {
    opacity: 0.001;
}

.pswp__ui--one-slide .pswp__button--arrow--left,
.pswp__ui--one-slide .pswp__button--arrow--right,
.pswp__ui--one-slide .pswp__counter {
    display: none;
}

.pswp__element--disabled {
    display: none !important;
}

.pswp--minimal--dark .pswp__top-bar {
    background: none;
}

.kg-callout-card,
.kg-callout-card * {
    box-sizing: border-box;
}

.kg-callout-card {
    display: flex;
    padding: 1.2em 1.6em;
    border-radius: 3px;
}

.kg-callout-card-grey {
    background: rgba(124, 139, 154, 0.13);
}

.kg-callout-card-white {
    background: transparent;
    box-shadow: inset 0 0 0 1px rgba(124, 139, 154, 0.25);
}

.kg-callout-card-blue {
    background: rgba(33, 172, 232, 0.12);
}

.kg-callout-card-green {
    background: rgba(52, 183, 67, 0.12);
}

.kg-callout-card-yellow {
    background: rgba(240, 165, 15, 0.13);
}

.kg-callout-card-red {
    background: rgba(209, 46, 46, 0.11);
}

.kg-callout-card-pink {
    background: rgba(225, 71, 174, 0.11);
}

.kg-callout-card-purple {
    background: rgba(135, 85, 236, 0.12);
}

.kg-callout-card-accent {
    background: var(--ghost-accent-color);
    color: #fff;
}

.kg-callout-card.kg-callout-card-accent a {
    color: #fff;
    text-decoration: underline;
}

.kg-callout-card div.kg-callout-emoji {
    padding-right: .8em;
    line-height: 1.25em;
    font-size: 1.15em;
}

.kg-callout-card div.kg-callout-text {
    font-size: .95em;
    line-height: 1.5em;
}

.kg-callout-card + .kg-callout-card {
    margin-top: 1em;
}

.kg-audio-card,
.kg-audio-card * {
    box-sizing: border-box;
}

.kg-audio-card {
    display: flex;
    width: 100%;
    min-height: 96px;
    border-radius: 6px;
    padding: 4px;
    box-shadow: inset 0 0 0 1px rgba(124, 139, 154, 0.25);
}

.kg-audio-card+.kg-audio-card {
    margin-top: 1em;
}

.kg-audio-thumbnail {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    min-width: 80px;
    margin: 8px;
    background: transparent;
    object-fit: cover;
    aspect-ratio: 1/1;
    border-radius: 3px;
}

.kg-audio-thumbnail.placeholder {
    background: var(--ghost-accent-color);
}

.kg-audio-thumbnail.placeholder svg {
    width: 24px;
    height: 24px;
    fill: white;
}

.kg-audio-player-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    --seek-before-width: 0%;
    --volume-before-width: 100%;
    --buffered-width: 0%;
}

.kg-audio-title {
    width: 100%;
    margin: 8px 0 0 0;
    padding: 8px 12px;
    border: none;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.15em;
    background: transparent;
}

.kg-audio-player {
    display: flex;
    flex-grow: 1;
    align-items: center;
    padding: 8px 12px;
}

.kg-audio-current-time {
    min-width: 38px;
    padding: 0 4px;
    font-family: inherit;
    font-size: 12.5px;
    font-weight: 500;
    line-height: 1em;
    white-space: nowrap;
}

.kg-audio-time {
    width: 56px;
    color: #ababab;
    font-family: inherit;
    font-size: 12.5px;
    font-weight: 500;
    line-height: 1em;
    white-space: nowrap;
}

.kg-audio-duration {
    padding: 0 4px;
}

.kg-audio-play-icon,
.kg-audio-pause-icon {
    position: relative;
    bottom: 1px;
    padding: 0px 4px 0 0;
    font-size: 0;
    background: transparent;
}

.kg-audio-hide {
    display: none !important;
}

.kg-audio-play-icon svg,
.kg-audio-pause-icon svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
}

.kg-audio-seek-slider {
    flex-grow: 1;
    margin: 0 4px;
}

@media (max-width: 640px) {
    .kg-audio-seek-slider {
        display: none;
    }
}

.kg-audio-playback-rate {
    min-width: 37px;
    padding: 0 4px;
    font-family: inherit;
    font-size: 12.5px;
    font-weight: 600;
    line-height: 1em;
    text-align: left;
    background: transparent;
    white-space: nowrap;
}

@media (max-width: 640px) {
    .kg-audio-playback-rate {
        padding-left: 8px;
    }
}

.kg-audio-mute-icon,
.kg-audio-unmute-icon {
    position: relative;
    bottom: -1px;
    padding: 0 4px;
    font-size: 0;
    background: transparent;
}

@media (max-width: 640px) {
    .kg-audio-mute-icon,
    .kg-audio-unmute-icon  {
        margin-left: auto;
    }
}

.kg-audio-mute-icon svg,
.kg-audio-unmute-icon svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
}

.kg-audio-volume-slider {
    width: 80px;
}

@media (max-width: 400px) {
    .kg-audio-volume-slider {
        display: none;
    }
}

.kg-audio-seek-slider::before {
    content: "";
    position: absolute;
    left: 0;
    width: var(--seek-before-width) !important;
    height: 4px;
    cursor: pointer;
    background-color: currentColor;
    border-radius: 2px;
}

.kg-audio-volume-slider::before {
    content: "";
    position: absolute;
    left: 0;
    width: var(--volume-before-width) !important;
    height: 4px;
    cursor: pointer;
    background-color: currentColor;
    border-radius: 2px;
}

/* Resetting browser styles
/* --------------------------------------------------------------- */

.kg-audio-player-container input[type=range] {
    position: relative;
    -webkit-appearance: none;
    background: transparent;
}

.kg-audio-player-container input[type=range]:focus {
    outline: none;
}

.kg-audio-player-container input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
}

.kg-audio-player-container input[type=range]::-ms-track {
    cursor: pointer;
    border-color: transparent;
    color: transparent;
    background: transparent;
}

.kg-audio-player-container button {
    display: flex;
    align-items: center;
    border: 0;
    cursor: pointer;
}

.kg-audio-player-container input[type="range"] {
    height: auto;
    padding: 0;
    border: 0;
}

/* Chrome & Safari styles
/* --------------------------------------------------------------- */

.kg-audio-player-container input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: rgba(124, 139, 154, 0.25);
    border-radius: 2px;
}

.kg-audio-player-container input[type="range"]::-webkit-slider-thumb {
    position: relative;
    box-sizing: content-box;
    width: 13px;
    height: 13px;
    margin: -5px 0 0 0;
    border: 0;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0,0,0,.08), 0 1px 4px rgba(0,0,0,0.24);
}

.kg-audio-player-container input[type="range"]:active::-webkit-slider-thumb {
    transform: scale(1.2);
}

/* Firefox styles
/* --------------------------------------------------------------- */

.kg-audio-player-container input[type="range"]::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: rgba(124, 139, 154, 0.25);
    border-radius: 2px;
}

.kg-audio-player-container input[type="range"]::-moz-range-progress {
    background: currentColor;
    border-radius: 2px;
}

.kg-audio-player-container input[type="range"]::-moz-range-thumb {
    box-sizing: content-box;
    width: 13px;
    height: 13px;
    border: 0;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0,0,0,.08), 0 1px 4px rgba(0,0,0,0.24);
}

.kg-audio-player-container input[type="range"]:active::-moz-range-thumb {
    transform: scale(1.2);
}

/* Edge & IE styles
/* --------------------------------------------------------------- */

.kg-audio-player-container input[type="range"]::-ms-track {
    width: 100%;
    height: 3px;
    border: solid transparent;
    color: transparent;
    cursor: pointer;
    background: transparent;
}

.kg-audio-player-container input[type="range"]::-ms-fill-lower {
    background: #fff;
}

.kg-audio-player-container input[type="range"]::-ms-fill-upper {
    background: currentColor;
}

.kg-audio-player-container input[type="range"]::-ms-thumb {
    box-sizing: content-box;
    width: 13px;
    height: 13px;
    border: 0;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0,0,0,.08), 0 1px 4px rgba(0,0,0,0.24);
}

.kg-audio-player-container input[type="range"]:active::-ms-thumb {
    transform: scale(1.2);
}

.kg-blockquote-alt {
    font-size: 1.5em;
    font-style: italic;
    line-height: 1.7em;
    text-align: center;
    padding: 0 2.5em;
  }

  @media (max-width: 800px) {
    .kg-blockquote-alt {
      font-size: 1.4em;
      padding-left: 2em;
      padding-right: 2em;
    }
  }

  @media (max-width: 600px) {
    .kg-blockquote-alt {
      font-size: 1.2em;
      padding-left: 1.75em;
      padding-right: 1.75em;
    }
  }

  .kg-bookmark-card,
.kg-bookmark-card * {
    box-sizing: border-box;
}

.kg-bookmark-card,
.kg-bookmark-publisher {
    position: relative;
    /* width: 100%; */
}

.kg-bookmark-card a.kg-bookmark-container,
.kg-bookmark-card a.kg-bookmark-container:hover {
    display: flex;
    text-decoration: none;
    border-radius: 6px;
    border: 1px solid rgb(124 139 154 / 25%);
    overflow: hidden;
    color: inherit;
}

.kg-bookmark-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    overflow: hidden;
}

.kg-bookmark-title {
    font-size: 15px;
    line-height: 1.4em;
    font-weight: 600;
}

.kg-bookmark-description {
    display: -webkit-box;
    font-size: 14px;
    line-height: 1.5em;
    margin-top: 3px;
    font-weight: 400;
    max-height: 44px;
    overflow-y: hidden;
    opacity: 0.7;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.kg-bookmark-metadata {
    display: flex;
    align-items: center;
    margin-top: 22px;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
}

.kg-bookmark-metadata > *:not(img) {
    opacity: 0.7;
}

.kg-bookmark-icon {
    width: 20px;
    height: 20px;
    margin-right: 6px;
}

.kg-bookmark-author,
.kg-bookmark-publisher {
    display: inline;
}

.kg-bookmark-publisher {
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 240px;
    white-space: nowrap;
    display: block;
    line-height: 1.65em;
}

.kg-bookmark-metadata > span:nth-of-type(2) {
    font-weight: 400;
}

.kg-bookmark-metadata > span:nth-of-type(2):before {
    content: "•";
    margin: 0 6px;
}

.kg-bookmark-metadata > span:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
}

.kg-bookmark-thumbnail {
    position: relative;
    flex-grow: 1;
    min-width: 33%;
}

.kg-bookmark-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0 2px 2px 0;
}

.kg-button-card,
.kg-button-card * {
    box-sizing: border-box;
}

.kg-button-card {
    display: flex;
    position: static;
    align-items: center;
    width: 100%;
    justify-content: center;
}

.kg-button-card.kg-align-left {
    justify-content: flex-start;
}

.kg-button-card a.kg-btn {
    display: flex;
    position: static;
    align-items: center;
    padding: 0 1.2em;
    height: 2.4em;
    line-height: 1em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 0.95em;
    font-weight: 600;
    text-decoration: none;
    border-radius: 5px;
    transition: opacity 0.2s ease-in-out;
}

.kg-button-card a.kg-btn:hover {
    opacity: 0.85;
}

.kg-button-card a.kg-btn-accent {
    background-color: var(--ghost-accent-color);
    color: #fff;
}

.kg-collection-card {
    width: 100%;
    margin-top: 6vmin;
}

.kg-collection-card + * {
    margin-top: 6vmin;
}

.kg-collection-card-title {
    margin: .8rem 0 1.6rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
}

a.kg-collection-card-post-wrapper {
    text-decoration: none;
    color: var(--text-color);
}

a.kg-collection-card-post-wrapper:hover {
    opacity: 1;
}


.kg-collection-card-post {
    display: flex;
    gap: 3.2rem;
}

.kg-collection-card-img {
    position: relative;
    aspect-ratio: 3/2;
}

.kg-collection-card-img img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

a.kg-collection-card-post-wrapper:hover img {
    opacity: .92;
    transition: all .2s ease;
}

.kg-collection-card-content {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
}

h2.kg-collection-card-post-title {
    margin: 0;
    font-size: 2.4rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

p.kg-collection-card-post-excerpt {
    margin-top: 1.2rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.4;
}

.kg-collection-card-post-meta {
    display: flex;
    opacity: .5;
    margin-top: 1.2rem;
    font-size: 1.3rem;
    font-weight: 500;
}

/* List layout */

.kg-collection-card-list {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
}

@media (max-width: 767px) {
    .kg-collection-card-list .kg-collection-card-post {
        flex-direction: column;
    }
}

.kg-collection-card-list .kg-collection-card-img {
    flex: 0 0 30%;
}

/* Grid layout */

.kg-collection-card-grid {
    display: grid;
    grid-template-columns: repeat(1,minmax(0,1fr));
    gap: 2.4rem;
}

@media (min-width: 640px) {
    .kg-collection-card-grid:not(.columns-1) {
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
}

@media (min-width: 1024px) {
    .kg-collection-card-grid:not(.columns-1):not(.columns-2) {
        grid-template-columns: repeat(3,minmax(0,1fr));
        gap: 3.2rem
    }

    .kg-collection-card-grid.columns-1 {
        gap: 4.8rem
    }

    .kg-collection-card-grid.columns-2 {
        gap: 4rem
    }
}

@media (min-width: 1280px) {
    .kg-collection-card-grid:not(.columns-1):not(.columns-2):not(.columns-3) {
        grid-template-columns: repeat(4,minmax(0,1fr));
    }
}

.kg-collection-card-grid .kg-collection-card-post {
    flex-direction: column;
    gap: 1.2rem;
}

@media (min-width: 1024px) {
    .kg-collection-card-grid.columns-1 .kg-collection-card-post {
        gap: 2rem
    }

    .kg-collection-card-grid.columns-2 .kg-collection-card-post {
        gap: 1.6rem
    }
}

.kg-collection-card-grid.columns-1 .kg-collection-card-img,
.kg-collection-card-grid.columns-2 .kg-collection-card-img {
    aspect-ratio: 16/9;
}

.kg-collection-card-grid .kg-collection-card-content {
    font-size: 1.5rem;
}

@media (min-width: 640px) {
    .kg-collection-card-grid .kg-collection-card-content {
        font-size: 1.6rem;
    }
}

@media (min-width: 1024px) {
    .kg-collection-card-grid.columns-1 .kg-collection-card-content {
        font-size: 1.8rem;
    }

    .kg-collection-card-grid.columns-3 .kg-collection-card-content,
    .kg-collection-card-grid.columns-4 .kg-collection-card-content {
        font-size: 1.5rem;
    }
}

.kg-collection-card-grid h2.kg-collection-card-post-title {
    font-size: 1.7rem;
}

.kg-collection-card-grid .kg-collection-card-post-meta {
    font-size: 1.25rem;
}

@media (min-width: 640px) {
    .kg-collection-card-grid h2.kg-collection-card-post-title {
        font-size: 1.9rem;
    }

    .kg-collection-card-grid.columns-1 h2.kg-collection-card-post-title {
        font-size: 2.4rem;
    }

    .kg-collection-card-grid:not(.columns-3):not(.columns-4) .kg-collection-card-post-meta {
        font-size: 1.3rem;
    }
}

@media (min-width: 1024px) {
    .kg-collection-card-grid.columns-1 h2.kg-collection-card-post-title {
        font-size: 3.6rem;
    }

    .kg-collection-card-grid.columns-2 h2.kg-collection-card-post-title {
        font-size: 2.4rem;
    }

    .kg-collection-card-grid.columns-1 .kg-collection-card-post-meta {
        font-size: 1.4rem;
    }
}

@media (min-width: 1280px) {
    .kg-collection-card-grid.columns-4 h2.kg-collection-card-post-title {
        font-size: 1.7rem;
    }
}

.kg-file-card,
.kg-file-card * {
    box-sizing: border-box;
}

.kg-file-card {
    display: flex;
}

.kg-file-card a.kg-file-card-container {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    color: inherit;
    padding: 12px;
    min-height: 92px;
    border: 1px solid rgb(124 139 154 / 25%);
    border-radius: 5px;
    transition: all ease-in-out 0.35s;
    text-decoration: none;
    width: 100%;
}

.kg-file-card a.kg-file-card-container:hover {
    border: 1px solid rgb(124 139 154 / 35%);
}

.kg-file-card-contents {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 4px 8px;
    width: 100%
}

.kg-file-card-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.3em;
}

.kg-file-card-caption {
    font-size: 14px;
    line-height: 1.3em;
    opacity: 0.7;
}

.kg-file-card-title + .kg-file-card-caption {
    flex-grow: 1;
    margin-top: 3px;
}

.kg-file-card-metadata {
    display: inline;
    font-size: 14px;
    line-height: 1.3em;
    margin-top: 5px;
}

.kg-file-card-filename {
    display: inline;
    font-weight: 500;
}

.kg-file-card-filesize {
    display: inline-block;
    font-size: 14px;
    opacity: 0.6;
}

.kg-file-card-filesize:before {
    display: inline-block;
    content: "escape";
    margin-left: 6px;
    margin-right: 6px;
}

.kg-file-card-icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    min-width: 80px;
    height: 100%;
    min-height: 80px;
}

.kg-file-card-icon:before {
    position: absolute;
    display: block;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: currentColor;
    opacity: 0.06;
    transition: opacity ease-in-out 0.35s;
    border-radius: 3px;
}

.kg-file-card a.kg-file-card-container:hover .kg-file-card-icon:before {
    opacity: 0.08;
}

.kg-file-card-icon svg {
    width: 24px;
    height: 24px;
    color: var(--ghost-accent-color);
}

/* Size variations */
.kg-file-card-medium a.kg-file-card-container {
    min-height: 72px;
}

.kg-file-card-medium .kg-file-card-caption {
    opacity: 1.0;
    font-weight: 500;
}

.kg-file-card-small a.kg-file-card-container {
    align-items: center;
    min-height: 52px;
}

.kg-file-card-small .kg-file-card-metadata {
    font-size: 14px;
    margin-top: 0;
}

.kg-file-card-small .kg-file-card-icon svg {
    width: 20px;
    height: 20px;
}

.kg-file-card + .kg-file-card {
    margin-top: 1em;
}

.kg-gallery-card,
.kg-gallery-card * {
    box-sizing: border-box;
}

.kg-gallery-card,
.kg-image-card {
    --gap: 1.2rem;
}

.kg-image-card:not(.kg-card-hascaption) + .kg-image-card,
.kg-image-card:not(.kg-card-hascaption) + .kg-gallery-card,
.kg-gallery-card:not(.kg-card-hascaption) + .kg-image-card,
.kg-gallery-card:not(.kg-card-hascaption) + .kg-gallery-card {
    margin-top: var(--gap);
}

.kg-gallery-container {
    position: relative;
}

.kg-gallery-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.kg-gallery-image img {
    display: block;
    margin: 0;
    width: 100%;
    height: 100%;
}

.kg-gallery-row:not(:first-of-type) {
    margin: var(--gap) 0 0;
}

.kg-gallery-image:not(:first-of-type) {
    margin: 0 0 0 var(--gap);
}

@media (max-width: 600px) {
    .kg-gallery-card,
    .kg-image-card {
        --gap: 0.6rem;
    }
}

.kg-header-card,
.kg-header-card * {
    box-sizing: border-box;
}

.kg-header-card {
    padding: 12vmin 4em;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.kg-header-card.kg-size-small {
    padding-top: 14vmin;
    padding-bottom: 14vmin;
    min-height: 40vh;
}

.kg-header-card.kg-size-large {
    padding-top: 18vmin;
    padding-bottom: 18vmin;
    min-height: 80vh;
}

.kg-header-card.kg-align-left {
    text-align: left;
    align-items: flex-start;
}

.kg-header-card.kg-style-dark {
    background: #151515;
    color: #ffffff;
}

.kg-header-card.kg-style-light {
    background-color: #fafafa;
}

.kg-header-card.kg-style-accent {
    background-color: var(--ghost-accent-color);
}

.kg-header-card.kg-style-image {
    position: relative;
    background-color: #e7e7e7;
    background-size: cover;
    background-position: center;
}

.kg-header-card.kg-style-image::before {
    position: absolute;
    display: block;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
}

.kg-header-card h2.kg-header-card-header {
    font-size: 5em;
    font-weight: 700;
    line-height: 1.1em;
    letter-spacing: -0.01em;
    margin: 0;
}

.kg-header-card h2.kg-header-card-header strong {
    font-weight: 800;
}

.kg-header-card.kg-size-small h2.kg-header-card-header {
    font-size: 4em;
}

.kg-header-card.kg-size-large h2.kg-header-card-header {
    font-size: 6em;
}

.kg-header-card h3.kg-header-card-subheader {
    font-size: 1.5em;
    font-weight: 500;
    line-height: 1.4em;
    margin: 0;
    max-width: 40em;
}

.kg-header-card h2 + h3.kg-header-card-subheader {
    margin: 0.35em 0 0;
}

.kg-header-card h3.kg-header-card-subheader strong {
    font-weight: 600;
}

.kg-header-card.kg-size-small h3.kg-header-card-subheader {
    font-size: 1.25em;
}

.kg-header-card.kg-size-large h3.kg-header-card-subheader {
    font-size: 1.75em;
}

.kg-header-card:not(.kg-style-light) h2.kg-header-card-header,
.kg-header-card:not(.kg-style-light) h3.kg-header-card-subheader {
    color: #ffffff;
}

.kg-header-card.kg-style-accent h3.kg-header-card-subheader,
.kg-header-card.kg-style-image h3.kg-header-card-subheader {
    opacity: 1.0;
}

.kg-header-card.kg-style-image h2.kg-header-card-header,
.kg-header-card.kg-style-image h3.kg-header-card-subheader,
.kg-header-card.kg-style-image a.kg-header-card-button {
    z-index: 999;
}

.kg-header-card h2.kg-header-card-header a,
.kg-header-card h3.kg-header-card-subheader a {
    color: var(--ghost-accent-color);
}

.kg-header-card.kg-style-accent h2.kg-header-card-header a,
.kg-header-card.kg-style-accent h3.kg-header-card-subheader a,
.kg-header-card.kg-style-image h2.kg-header-card-header a,
.kg-header-card.kg-style-image h3.kg-header-card-subheader a {
    color: #fff;
}

.kg-header-card a.kg-header-card-button {
    display: flex;
    position: static;
    align-items: center;
    fill: #fff;
    background: #fff;
    border-radius: 3px;
    outline: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 1.05em;
    font-weight: 600;
    line-height: 1em;
    text-align: center;
    text-decoration: none;
    letter-spacing: .2px;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #151515;
    height: 2.7em;
    padding: 0 1.2em;
    transition: opacity .2s ease;
}

.kg-header-card h2 + a.kg-header-card-button,
.kg-header-card h3 + a.kg-header-card-button {
    margin: 1.75em 0 0;
}

.kg-header-card a.kg-header-card-button:hover {
    opacity: 0.85;
}

.kg-header-card.kg-size-large a.kg-header-card-button {
    font-size: 1.1em;
    height: 2.9em;
}

.kg-header-card.kg-size-large h2 + a.kg-header-card-button,
.kg-header-card.kg-size-large h3 + a.kg-header-card-button {
    margin-top: 2em;
}

.kg-header-card.kg-size-small a.kg-header-card-button {
    height: 2.4em;
    font-size: 1em;
}

.kg-header-card.kg-size-small h2 + a.kg-header-card-button,
.kg-header-card.kg-size-small h3 + a.kg-header-card-button {
    margin-top: 1.5em;
}

.kg-header-card.kg-style-image a.kg-header-card-button,
.kg-header-card.kg-style-dark a.kg-header-card-button {
    background: #fff;
    color: #151515;
}

.kg-header-card.kg-style-light a.kg-header-card-button {
    background: var(--ghost-accent-color);
    color: #fff;
}

.kg-header-card.kg-style-accent a.kg-header-card-button {
    background: #fff;
    color: #151515;
}

@media (max-width: 640px) {
    .kg-header-card {
        padding-left: 1em;
        padding-right: 1em;
    }

    .kg-header-card h2.kg-header-card-header {
        font-size: 3.5em;
    }

    .kg-header-card.kg-size-large h2.kg-header-card-header {
        font-size: 4em;
    }

    .kg-header-card.kg-size-small h2.kg-header-card-header {
        font-size: 3em;
    }

    .kg-header-card h3.kg-header-card-subheader {
        font-size: 1.25em;
    }

    .kg-header-card.kg-size-large h3.kg-header-card-subheader {
        font-size: 1.5em;
    }

    .kg-header-card.kg-size-small h3.kg-header-card-subheader {
        font-size: 1em;
    }
}

.kg-nft-card,
.kg-nft-card * {
    box-sizing: border-box;
}

.kg-nft-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.kg-nft-card a.kg-nft-card-container {
    position: static;
    display: flex;
    flex: auto;
    flex-direction: column;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont,
                'avenir next', avenir,
                'helvetica neue', helvetica,
                ubuntu,
                roboto, noto,
                'segoe ui', arial,
                sans-serif;
    font-size: 14px;
    font-weight: 400;
    box-shadow: 0 2px 6px -2px rgb(0 0 0 / 10%), 0 0 1px rgb(0 0 0 / 40%);
    width: 100%;
    max-width: 512px;
    color: #222;
    background: #fff;
    border-radius: 5px;
    transition: none;
}

.kg-nft-card * {
    position: static;
}

.kg-nft-metadata {
    padding: 20px;
    width: 100%;
}

.kg-nft-image {
    border-radius: 5px 5px 0 0;
    width: 100%;
}

.kg-nft-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
}

.kg-nft-header h4.kg-nft-title {
    font-family: inherit;
    font-size: 19px;
    font-weight: 700;
    line-height: 1.3em;
    min-width: unset;
    max-width: unset;
    margin: 0;
    color: #222;
}

.kg-nft-opensea-logo {
    margin-top: 2px;
    width: 100px;
    object-fit: scale-down;
}

.kg-nft-creator {
    font-family: inherit;
    line-height: 1.4em;
    margin: 4px 0 0;
    color: #ababab;
}

.kg-nft-creator span {
    font-weight: 500;
    color: #222;
}

.kg-nft-card p.kg-nft-description {
    font-family: inherit;
    font-size: 14px;
    line-height: 1.4em;
    margin: 20px 0 0;
    color: #222;
}

.kg-product-card,
.kg-product-card * {
    box-sizing: border-box;
}

.kg-product-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

.kg-product-card-container {
    display: grid;
    grid-template-columns: auto min-content;
    align-items: center;
    grid-row-gap: 16px;
    background: transparent;
    max-width: 550px;
    padding: 20px;
    width: 100%;
    border-radius: 5px;
    box-shadow: inset 0 0 0 1px rgb(124 139 154 / 25%);
}

.kg-product-card-image {
    grid-column: 1 / 3;
    justify-self: center;
    height: auto;
}

.kg-product-card-title-container {
    grid-column: 1 / 2;
}

.kg-product-card h4.kg-product-card-title {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    text-decoration: none;
    font-weight: 600;
    font-size: 21px;
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.15em;
}

.kg-product-card-description {
    grid-column: 1 / 3;
}

.kg-product-card .kg-product-card-description p,
.kg-product-card .kg-product-card-description ol,
.kg-product-card .kg-product-card-description ul {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 14px;
    line-height: 1.5em;
    opacity: .7;
    margin-bottom: 0;
}

.kg-product-card .kg-product-card-description p:first-of-type {
    margin-top: -4px;
}

.kg-product-card .kg-product-card-description p:not(:first-of-type),
.kg-product-card .kg-product-card-description ul,
.kg-product-card .kg-product-card-description ol {
    margin-top: 0.95em;
}

.kg-product-card .kg-product-card-description li+li {
    margin-top: 0.5em;
}

.kg-product-card-rating {
    display: flex;
    align-items: center;
    grid-column: 2 / 3;
    align-self: start;
    justify-self: end;
    padding-left: 16px;
}

@media (max-width: 400px) {
    .kg-product-card-title-container {
        grid-column: 1 / 3;
    }

    .kg-product-card-rating {
        grid-column: 1 / 3;
        justify-self: start;
        margin-top: -15px;
        padding-left: 0;
    }
}

.kg-product-card-rating-star {
    height: 20px;
    width: 20px;
}

.kg-product-card-rating-star svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
    opacity: 0.15;
}

.kg-product-card-rating-active.kg-product-card-rating-star svg {
    opacity: 1;
}

.kg-product-card a.kg-product-card-button {
    justify-content: center;
    grid-column: 1 / 3;
    display: flex;
    position: static;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 1em;
    text-decoration: none;
    width: 100%;
    height: 38px;
    border-radius: 6px;
    padding: 0 12px;
    transition: opacity 0.2s ease-in-out;
}

.kg-product-card a.kg-product-card-btn-accent {
    background-color: var(--ghost-accent-color);
    color: #fff;
}

.kg-signup-card {
    position: relative;
}

.kg-signup-card,
.kg-signup-card * {
    box-sizing: border-box;
}

.kg-signup-card a,
.kg-signup-card a span {
    color: currentColor;
}

.kg-signup-card.kg-style-accent {
    background-color: var(--ghost-accent-color);
}

.kg-layout-split .kg-signup-card-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.kg-signup-card-text {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    padding: min(4vmax, 80px);
    background-size: cover;
    background-position: center;
    text-align: left;
}

.kg-width-wide .kg-signup-card-text {
    padding: min(6.4vmax, 120px);
}

.kg-width-full .kg-signup-card-text {
    padding: min(12vmax, 260px) 0;
}

.kg-layout-split .kg-signup-card-text {
    padding: min(12vmax, 260px) min(4vmax, 80px);
}

.kg-layout-split.kg-content-wide .kg-signup-card-text {
    padding: min(10vmax, 220px) 0 min(10vmax, 220px) min(4vmax, 80px);
}

.kg-layout-split.kg-content-wide.kg-swapped .kg-signup-card-text {
    padding: min(10vmax, 220px) min(4vmax, 80px) min(10vmax, 220px) 0;
}

.kg-swapped .kg-signup-card-text {
    grid-row: 1;
}

.kg-signup-card-text.kg-align-center {
    align-items: center;
    text-align: center;
}

.kg-signup-card.kg-style-image h2.kg-signup-card-heading,
.kg-signup-card.kg-style-image .kg-signup-card-subheading,
.kg-signup-card.kg-style-image .kg-signup-card-button {
    z-index: 999;
}

/* Background image */

.kg-signup-card > picture > .kg-signup-card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    background-color: #FFFFFF;
    pointer-events: none;
}

/* Split layout image */

.kg-signup-card-content .kg-signup-card-image {
    width: 100%;
    /* this will force the image to follow the signup card height */
    height: 0;
    min-height: 100%;
    /**/
    object-fit: cover;
    object-position: center;
}

.kg-content-wide .kg-signup-card-content .kg-signup-card-image {
    height: 100%;
    padding: 5.6em 0;
    object-fit: contain;
}

/* Heading */

.kg-signup-card h2.kg-signup-card-heading {
    margin: 0;
    font-size: clamp(1.7em, 4vw, 2.5em);
    font-weight: 700;
    line-height: 1.05em;
    letter-spacing: -0.01em;
}

.kg-signup-card.kg-width-wide h2.kg-signup-card-heading {
    font-size: clamp(1.7em, 5vw, 3.3em);
}

.kg-signup-card.kg-width-full h2.kg-signup-card-heading {
    font-size: clamp(1.9em, 5.6vw, 4.2em);
}

.kg-signup-card.kg-width-full.kg-layout-split h2.kg-signup-card-heading {
    font-size: clamp(1.9em, 4vw, 3.3em);
}

/* Subheading */

.kg-signup-card-subheading {
    margin: 0 0 2em;
}

.kg-signup-card .kg-signup-card-subheading {
    max-width: 40em;
    margin: 0;
    font-size: clamp(1.05em, 2vw, 1.4em);
    font-weight: 500;
    line-height: 1.2em;
}

.kg-signup-card h2 + .kg-signup-card-subheading {
    margin: 0.6em 0 0;
}

.kg-signup-card .kg-signup-card-subheading strong {
    font-weight: 600;
}

.kg-signup-card.kg-width-wide .kg-signup-card-subheading {
    font-size: clamp(1.05em, 2vw, 1.55em);
}

.kg-signup-card.kg-width-full .kg-signup-card-subheading:not(.kg-layout-split .kg-signup-card-subheading) {
    max-width: min(65vmax, 1200px);
    font-size: clamp(1.05em, 2vw, 1.7em);
}

.kg-signup-card.kg-width-full.kg-layout-split .kg-signup-card-subheading {
    font-size: clamp(1.05em, 2vw, 1.55em);
}

/* Subscribe form */

.kg-signup-card-form {
    position: relative;
    display: flex;
    flex-shrink: 0;
    width: 100%;
}

.kg-align-center .kg-signup-card-form {
    justify-content: center;
}

.kg-signup-card-heading + .kg-signup-card-form,
.kg-signup-card-subheading + .kg-signup-card-form {
    margin: min(2.4vmax, 48px) 0 0;
}

.kg-width-wide .kg-signup-card-heading + .kg-signup-card-form,
.kg-width-wide .kg-signup-card-subheading + .kg-signup-card-form {
    margin: min(3.2vmax, 64px) 0 0;
}

.kg-width-full .kg-signup-card-heading + .kg-signup-card-form,
.kg-width-full .kg-signup-card-subheading + .kg-signup-card-form {
    margin: min(4vmax, 80px) 0 0;
}

.kg-signup-card-fields {
    display: flex;
    width: 100%;
    padding: 3px;
    background: #FFFFFF;
    border: 1px solid #E6E6E6;
    border-radius: 4px;
}

.kg-width-wide .kg-signup-card-fields,
.kg-width-full .kg-signup-card-fields {
    width: 100%;
    max-width: 500px;
}

.kg-signup-card-input {
    width: 100%;
    height: 2.9em;
    min-height: 46px;
    margin: 0 3px 0 0;
    padding: 12px 16px;
    border: none;
    background: #FFFFFF;
    font-size: 1.1em;
}

.kg-signup-card-input:focus,
.kg-signup-card-input:focus-visible {
    outline: none;
}

.kg-signup-card-button {
    display: flex;
    position: relative;
    align-items: center;
    height: 2.9em;
    min-height: 46px;
    padding: 0 1.2em;
    outline: none;
    border: none;
    font-size: 1em;
    font-weight: 600;
    line-height: 1em;
    text-align: center;
    text-decoration: none;
    letter-spacing: .2px;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-radius: 3px;
    transition: opacity .2s ease;
    cursor: pointer;
}

.kg-signup-card-button.kg-style-accent {
    background-color: var(--ghost-accent-color);
}

.kg-signup-card h2 + .kg-signup-card-button,
.kg-signup-card p + .kg-signup-card-button {
    margin: 1.5em 0 0;
}

.kg-signup-card .kg-signup-card-button:hover {
    opacity: 0.85;
}

.kg-signup-card.kg-width-wide .kg-signup-card-button {
    font-size: 1.05em;
}

.kg-signup-card.kg-width-wide h2 + .kg-signup-card-button,
.kg-signup-card.kg-width-wide p + .kg-signup-card-button {
    margin-top: 1.75em;
}

.kg-signup-card.kg-width-full .kg-signup-card-button {
    font-size: 1.1em;
}

.kg-signup-card.kg-width-full h2 + .kg-signup-card-button,
.kg-signup-card.kg-width-full p + .kg-signup-card-button {
    margin-top: 2em;
}

/* Subscribe form states */

.kg-signup-card-success,
.kg-signup-card-error {
    display: none;
}

.kg-signup-card-form.success .kg-signup-card-fields {
    display: none;
}

.kg-signup-card-form.success .kg-signup-card-success {
    display: flex;
    align-items: center;
    height: 3em;
    font-size: 1.25em;
    font-weight: 500;
    line-height: 1.4em;
}

.kg-signup-card-form.error .kg-signup-card-fields {
    border: 1px solid #FF0000;
    box-shadow: inset 0 0 0 1px rgba(255, 0, 0, 0.2);
}

.kg-signup-card-form.error .kg-signup-card-error {
    position: absolute;
    bottom: calc(-1rem - 1.6em);
    display: block;
    font-size: inherit;
}

.kg-signup-card-button-loading {
    position: absolute;
    inset: 0;
    align-items: center;
    justify-content: center;
    display: none;
}

.kg-signup-card-form.loading .kg-signup-card-button-default {
    color: transparent;
}

.kg-signup-card-form.loading .kg-signup-card-button-loading {
    display: flex;
}

/* Disclaimer */

.kg-signup-card-disclaimer {
    margin: 1rem 0 0;
}

.kg-signup-card-form.success + .kg-signup-card-disclaimer,
.kg-signup-card-form.error + .kg-signup-card-disclaimer {
    visibility: hidden;
}


/* Responsive styles */

@media (max-width: 640px) {
    .kg-layout-split .kg-signup-card-content {
        grid-template-columns: 1fr;
    }

    .kg-width-wide .kg-signup-card-text {
        padding: min(6.4vmax, 120px) min(4vmax, 80px);
    }

    .kg-layout-split.kg-content-wide .kg-signup-card-text,
    .kg-layout-split.kg-content-wide.kg-swapped .kg-signup-card-text {
        padding: min(9.6vmax, 180px) 0;
    }

    .kg-signup-card.kg-width-full .kg-signup-card-subheading:not(.kg-layout-split .kg-signup-card-subheading) {
        max-width: unset;
    }

    .kg-signup-card-content .kg-signup-card-image:not(.kg-content-wide .kg-signup-card-content .kg-signup-card-image) {
        height: auto;
        min-height: unset;
        aspect-ratio: 1 / 1;
    }

    .kg-content-wide .kg-signup-card-content .kg-signup-card-image {
        padding: 1.7em 0 0;
    }

    .kg-content-wide.kg-swapped .kg-signup-card-content .kg-signup-card-image {
        padding: 0 0 1.7em;
    }

    .kg-signup-card-input {
        height: 2.9em;
        padding: 6px 12px;
        font-size: 1em;
    }

    .kg-signup-card-button {
        height: 2.9em;
    }

    .kg-signup-card.kg-width-wide .kg-signup-card-button,
    .kg-signup-card.kg-width-full .kg-signup-card-button {
        font-size: 1em;
    }
}

.kg-toggle-card,
.kg-toggle-card * {
    box-sizing: border-box;
}

.kg-toggle-card {
    background: transparent;
    box-shadow: inset 0 0 0 1px rgba(124, 139, 154, 0.25);
    border-radius: 4px;
    padding: 1.2em;
}



.kg-toggle-content {
    height: auto;
    opacity: 1;
    transition: opacity 1s ease, top .35s ease;
    top: 0;
    position: relative;
}

.kg-toggle-card[data-kg-toggle-state="close"] svg {
    transform: unset;
}

.kg-toggle-heading {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.kg-toggle-card h4.kg-toggle-heading-text {
    font-size: 1.15em;
    font-weight: 700;
    line-height: 1.3em;
    margin-top: 0;
    margin-bottom: 0;
}

.kg-toggle-content p:first-of-type {
    margin-top: 0.5em;
}

.kg-toggle-card .kg-toggle-content p,
.kg-toggle-card .kg-toggle-content ol,
.kg-toggle-card .kg-toggle-content ul {
    font-size: 0.95em;
    line-height: 1.5em;
    margin-top: 0.95em;
    margin-bottom: 0;
}

.kg-toggle-card li + li {
    margin-top: 0.5em;
}

.kg-toggle-card-icon {
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1em;
    padding: 0;
    background: none;
    border: 0;
    cursor: pointer;
}

.kg-toggle-heading svg {
    width: 14px;
    color: rgba(124, 139, 154, 0.5);
    transition: all 0.3s;
    transform: rotate(-180deg);
}

.kg-toggle-heading path {
    fill: none;
    stroke: currentcolor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5;
    fill-rule: evenodd;
}

.kg-toggle-card + .kg-toggle-card {
    margin-top: 1em;
}

.kg-video-card,
.kg-video-card * {
    box-sizing: border-box;
}

.kg-video-card {
    position: relative;
    --seek-before-width: 0%;
    --volume-before-width: 100%;
    --buffered-width: 0%;
}

.kg-video-card video {
    display: block;
    max-width: 100%;
    height: auto;
}

.kg-video-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.kg-video-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(180deg,rgba(0,0,0,0.3) 0,transparent 70%,transparent 100%);
    z-index: 999;
    transition: opacity .2s ease-in-out;
}

.kg-video-large-play-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 72px;
    padding: 0;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    transition: opacity .2s ease-in-out;
}

.kg-video-large-play-icon svg {
    width: 20px;
    height: auto;
    margin-left: 2px;
    fill: #fff;
}

.kg-video-player-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5));
    z-index: 999;
    transition: opacity .2s ease-in-out;

}

.kg-video-player {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    width: 100%;
    z-index: 9999;
    padding: 12px 16px;
}

.kg-video-current-time {
    min-width: 38px;
    padding: 0 4px;
    color: #fff;
    font-family: inherit;
    font-size: 12.5px;
    font-weight: 500;
    line-height: 1.4em;
    white-space: nowrap;
}

.kg-video-time {
    color: rgba(255, 255, 255, 0.6);
    font-family: inherit;
    font-size: 12.5px;
    font-weight: 500;
    line-height: 1.4em;
    white-space: nowrap;
}

.kg-video-duration {
    padding: 0 4px;
}

.kg-video-play-icon,
.kg-video-pause-icon {
    position: relative;
    padding: 0px 4px 0 0;
    font-size: 0;
    background: transparent;
}

.kg-video-hide {
    display: none !important;
}

.kg-video-hide-animated {
    opacity: 0 !important;
    transition: opacity .2s ease-in-out;
    cursor: initial;
}

.kg-video-play-icon svg,
.kg-video-pause-icon svg {
    width: 14px;
    height: 14px;
    fill: #fff;
}

.kg-video-seek-slider {
    flex-grow: 1;
    margin: 0 4px;
}

@media (max-width: 520px) {
    .kg-video-seek-slider {
        display: none;
    }
}

.kg-video-playback-rate {
    min-width: 37px;
    padding: 0 4px;
    color: #fff;
    font-family: inherit;
    font-size: 12.5px;
    font-weight: 600;
    line-height: 1.4em;
    text-align: left;
    background: transparent;
    white-space: nowrap;
}

@media (max-width: 520px) {
    .kg-video-playback-rate {
        padding-left: 8px;
    }
}

.kg-video-mute-icon,
.kg-video-unmute-icon {
    position: relative;
    bottom: -1px;
    padding: 0 4px;
    font-size: 0;
    background: transparent;
}

@media (max-width: 520px) {
    .kg-video-mute-icon,
    .kg-video-unmute-icon  {
        margin-left: auto;
    }
}

.kg-video-mute-icon svg,
.kg-video-unmute-icon svg {
    width: 16px;
    height: 16px;
    fill: #fff;
}

.kg-video-volume-slider {
    width: 80px;
}

@media (max-width: 300px) {
    .kg-video-volume-slider {
        display: none;
    }
}

.kg-video-seek-slider::before {
    content: "";
    position: absolute;
    left: 0;
    width: var(--seek-before-width) !important;
    height: 4px;
    cursor: pointer;
    background-color: #EBEEF0;
    border-radius: 2px;
}

.kg-video-volume-slider::before {
    content: "";
    position: absolute;
    left: 0;
    width: var(--volume-before-width) !important;
    height: 4px;
    cursor: pointer;
    background-color: #EBEEF0;
    border-radius: 2px;
}

/* Resetting browser styles
/* --------------------------------------------------------------- */

.kg-video-card input[type=range] {
    position: relative;
    -webkit-appearance: none;
    background: transparent;
}

.kg-video-card input[type=range]:focus {
    outline: none;
}

.kg-video-card input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
}

.kg-video-card input[type=range]::-ms-track {
    cursor: pointer;
    border-color: transparent;
    color: transparent;
    background: transparent;
}

.kg-video-card button {
    display: flex;
    align-items: center;
    border: 0;
    cursor: pointer;
}

.kg-video-card input[type="range"] {
    height: auto;
    padding: 0;
    border: 0;
}

/* Chrome & Safari styles
/* --------------------------------------------------------------- */

.kg-video-card input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
}

.kg-video-card input[type="range"]::-webkit-slider-thumb {
    position: relative;
    box-sizing: content-box;
    width: 13px;
    height: 13px;
    margin: -5px 0 0 0;
    border: 0;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0,0,0,.08), 0 1px 4px rgba(0,0,0,0.24);
}

.kg-video-card input[type="range"]:active::-webkit-slider-thumb {
    transform: scale(1.2);
}

/* Firefox styles
/* --------------------------------------------------------------- */

.kg-video-card input[type="range"]::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
}

.kg-video-card input[type="range"]::-moz-range-progress {
    background: #EBEEF0;
    border-radius: 2px;
}

.kg-video-card input[type="range"]::-moz-range-thumb {
    box-sizing: content-box;
    width: 13px;
    height: 13px;
    border: 0;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0,0,0,.08), 0 1px 4px rgba(0,0,0,0.24);
}

.kg-video-card input[type="range"]:active::-moz-range-thumb {
    transform: scale(1.2);
}

/* Edge & IE styles
/* --------------------------------------------------------------- */

.kg-video-card input[type="range"]::-ms-track {
    width: 100%;
    height: 3px;
    border: solid transparent;
    color: transparent;
    cursor: pointer;
    background: transparent;
}

.kg-video-card input[type="range"]::-ms-fill-lower {
    background: #fff;
}

.kg-video-card input[type="range"]::-ms-fill-upper {
    background: #EBEEF0;
}

.kg-video-card input[type="range"]::-ms-thumb {
    box-sizing: content-box;
    width: 13px;
    height: 13px;
    border: 0;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0,0,0,.08), 0 1px 4px rgba(0,0,0,0.24);
}

.kg-video-card input[type="range"]:active::-ms-thumb {
    transform: scale(1.2);
}
.kg-header-card.kg-v2 {
    position: relative;
    padding: 0;
    min-height: initial;
    text-align: initial;
}

.kg-header-card.kg-v2,
.kg-header-card.kg-v2 * {
    box-sizing: border-box;
}

.kg-header-card.kg-v2 a,
.kg-header-card.kg-v2 a span {
    color: currentColor;
}

.kg-header-card.kg-style-accent.kg-v2 {
    background-color: var(--ghost-accent-color);
}

.kg-header-card-content {
    width: 100%;
}

.kg-layout-split .kg-header-card-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.kg-header-card-text {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    padding: min(6.4vmax, 120px) min(4vmax, 80px);
    background-size: cover;
    background-position: center;
    text-align: left;
}

.kg-width-wide .kg-header-card-text {
    padding: min(10vmax, 220px) min(6.4vmax, 140px);
}

.kg-width-full .kg-header-card-text {
    padding: min(12vmax, 260px) 0;
}

.kg-layout-split .kg-header-card-text {
    padding: min(12vmax, 260px) min(4vmax, 80px);
}

.kg-layout-split.kg-content-wide .kg-header-card-text {
    padding: min(10vmax, 220px) 0 min(10vmax, 220px) min(4vmax, 80px);
}

.kg-layout-split.kg-content-wide.kg-swapped .kg-header-card-text {
    padding: min(10vmax, 220px) min(4vmax, 80px) min(10vmax, 220px) 0;
}

.kg-swapped .kg-header-card-text {
    grid-row: 1;
}

.kg-header-card-text.kg-align-center {
    align-items: center;
    text-align: center;
}

.kg-header-card.kg-style-image h2.kg-header-card-heading,
.kg-header-card.kg-style-image .kg-header-card-subheading,
.kg-header-card.kg-style-image.kg-v2 .kg-header-card-button {
    z-index: 999;
}

/* Background image */

.kg-header-card > picture > .kg-header-card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    background-color: #FFFFFF;
    pointer-events: none;
}

/* Split layout image */

.kg-header-card-content .kg-header-card-image {
    width: 100%;
    /* this will force the image to follow the signup card height */
    height: 0;
    min-height: 100%;
    /**/
    object-fit: cover;
    object-position: center;
}

.kg-content-wide .kg-header-card-content .kg-header-card-image {
    height: 100%;
    padding: 5.6em 0;
    object-fit: contain;
}

/* Heading */

.kg-header-card h2.kg-header-card-heading {
    margin: 0;
    font-size: clamp(1.7em, 4vw, 2.5em);
    font-weight: 700;
    line-height: 1.05em;
    letter-spacing: -0.01em;
}

.kg-header-card.kg-width-wide h2.kg-header-card-heading {
    font-size: clamp(1.7em, 5vw, 3.3em);
}

.kg-header-card.kg-width-full h2.kg-header-card-heading {
    font-size: clamp(1.9em, 5.6vw, 4.2em);
}

.kg-header-card.kg-width-full.kg-layout-split h2.kg-header-card-heading {
    font-size: clamp(1.9em, 4vw, 3.3em);
}

/* Subheading */

.kg-header-card-subheading {
    margin: 0 0 2em;
}

.kg-header-card .kg-header-card-subheading {
    max-width: 40em;
    margin: 0;
    font-size: clamp(1.05em, 2vw, 1.4em);
    font-weight: 500;
    line-height: 1.2em;
}

.kg-header-card h2 + .kg-header-card-subheading {
    margin: 0.6em 0 0;
}

.kg-header-card .kg-header-card-subheading strong {
    font-weight: 600;
}

.kg-header-card.kg-width-wide .kg-header-card-subheading {
    font-size: clamp(1.05em, 2vw, 1.55em);
}

.kg-header-card.kg-width-full .kg-header-card-subheading:not(.kg-layout-split .kg-header-card-subheading) {
    max-width: min(65vmax, 1200px);
    font-size: clamp(1.05em, 2vw, 1.7em);
}

.kg-header-card.kg-width-full.kg-layout-split .kg-header-card-subheading {
    font-size: clamp(1.05em, 2vw, 1.55em);
}

.kg-header-card.kg-v2 .kg-header-card-button {
    display: flex;
    position: relative;
    align-items: center;
    height: 2.9em;
    min-height: 46px;
    padding: 0 1.2em;
    outline: none;
    border: none;
    font-size: 1em;
    font-weight: 600;
    line-height: 1em;
    text-align: center;
    text-decoration: none;
    letter-spacing: .2px;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-radius: 3px;
    transition: opacity .2s ease;
}

.kg-header-card.kg-v2 .kg-header-card-button.kg-style-accent {
    background-color: var(--ghost-accent-color);
}

.kg-header-card.kg-v2 h2 + .kg-header-card-button,
.kg-header-card.kg-v2 p + .kg-header-card-button {
    margin: 1.5em 0 0;
}

.kg-header-card.kg-v2 .kg-header-card-button:hover {
    opacity: 0.85;
}

.kg-header-card.kg-v2.kg-width-wide .kg-header-card-button {
    font-size: 1.05em;
}

.kg-header-card.kg-v2.kg-width-wide h2 + .kg-header-card-button,
.kg-header-card.kg-v2.kg-width-wide p + .kg-header-card-button {
    margin-top: 1.75em;
}

.kg-header-card.kg-v2.kg-width-full .kg-header-card-button {
    font-size: 1.1em;
}

.kg-header-card.kg-v2.kg-width-full h2 + .kg-header-card-button,
.kg-header-card.kg-v2.kg-width-full p + .kg-header-card-button {
    margin-top: 2em;
}

/* Responsive styles */

@media (max-width: 640px) {
    .kg-layout-split .kg-header-card-content {
        grid-template-columns: 1fr;
    }

    .kg-width-wide .kg-header-card-text {
        padding: min(6.4vmax, 120px) min(4vmax, 80px);
    }

    .kg-layout-split.kg-content-wide .kg-header-card-text,
    .kg-layout-split.kg-content-wide.kg-swapped .kg-header-card-text {
        padding: min(9.6vmax, 180px) 0;
    }

    .kg-header-card.kg-width-full .kg-header-card-subheading:not(.kg-layout-split .kg-header-card-subheading) {
        max-width: unset;
    }

    .kg-header-card-content .kg-header-card-image:not(.kg-content-wide .kg-header-card-content .kg-header-card-image) {
        height: auto;
        min-height: unset;
        aspect-ratio: 1 / 1;
    }

    .kg-content-wide .kg-header-card-content .kg-header-card-image {
        padding: 1.7em 0 0;
    }

    .kg-content-wide.kg-swapped .kg-header-card-content .kg-header-card-image {
        padding: 0 0 1.7em;
    }

    .kg-header-card.kg-v2 .kg-header-card-button {
        height: 2.9em;
    }

    .kg-header-card.kg-v2.kg-width-wide .kg-header-card-button,
    .kg-header-card.kg-v2.kg-width-full .kg-header-card-button {
        font-size: 1em;
    }
}

  </style><link rel="stylesheet" type="text/css" href="${e}/assets/styles/reader.css" />`;
function xl(e) {
  if (!e.preferredUsername || !e.id)
    return "@unknown@unknown";
  try {
    return `@${e.preferredUsername}@${new URL(e.id).hostname}`;
  } catch {
    return "@unknown@unknown";
  }
}
class We {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(t) {
    const r = {
      listener: t
    };
    return this.listeners.add(r), this.onSubscribe(), () => {
      this.listeners.delete(r), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}
const Ve = typeof window > "u" || "Deno" in window;
function F() {
}
function jl(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ar(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function fo(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Be(e, t, r) {
  return $e(e) ? typeof t == "function" ? {
    ...r,
    queryKey: e,
    queryFn: t
  } : {
    ...t,
    queryKey: e
  } : e;
}
function Nl(e, t, r) {
  return $e(e) ? typeof t == "function" ? {
    ...r,
    mutationKey: e,
    mutationFn: t
  } : {
    ...t,
    mutationKey: e
  } : typeof e == "function" ? {
    ...t,
    mutationFn: e
  } : {
    ...e
  };
}
function de(e, t, r) {
  return $e(e) ? [{
    ...t,
    queryKey: e
  }, r] : [e || {}, t];
}
function hn(e, t) {
  const {
    type: r = "all",
    exact: i,
    fetchStatus: n,
    predicate: o,
    queryKey: a,
    stale: s
  } = e;
  if ($e(a)) {
    if (i) {
      if (t.queryHash !== Zi(a, t.options))
        return !1;
    } else if (!mt(t.queryKey, a))
      return !1;
  }
  if (r !== "all") {
    const l = t.isActive();
    if (r === "active" && !l || r === "inactive" && l)
      return !1;
  }
  return !(typeof s == "boolean" && t.isStale() !== s || typeof n < "u" && n !== t.state.fetchStatus || o && !o(t));
}
function pn(e, t) {
  const {
    exact: r,
    fetching: i,
    predicate: n,
    mutationKey: o
  } = e;
  if ($e(o)) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (be(t.options.mutationKey) !== be(o))
        return !1;
    } else if (!mt(t.options.mutationKey, o))
      return !1;
  }
  return !(typeof i == "boolean" && t.state.status === "loading" !== i || n && !n(t));
}
function Zi(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || be)(e);
}
function be(e) {
  return JSON.stringify(e, (t, r) => sr(r) ? Object.keys(r).sort().reduce((i, n) => (i[n] = r[n], i), {}) : r);
}
function mt(e, t) {
  return Mo(e, t);
}
function Mo(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((r) => !Mo(e[r], t[r])) : !1;
}
function Io(e, t) {
  if (e === t)
    return e;
  const r = mn(e) && mn(t);
  if (r || sr(e) && sr(t)) {
    const i = r ? e.length : Object.keys(e).length, n = r ? t : Object.keys(t), o = n.length, a = r ? [] : {};
    let s = 0;
    for (let l = 0; l < o; l++) {
      const d = r ? l : n[l];
      a[d] = Io(e[d], t[d]), a[d] === e[d] && s++;
    }
    return i === o && s === i ? e : a;
  }
  return t;
}
function ft(e, t) {
  if (e && !t || t && !e)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function mn(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function sr(e) {
  if (!fn(e))
    return !1;
  const t = e.constructor;
  if (typeof t > "u")
    return !0;
  const r = t.prototype;
  return !(!fn(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function fn(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function $e(e) {
  return Array.isArray(e);
}
function bo(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Mn(e) {
  bo(0).then(e);
}
function wl() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function cr(e, t, r) {
  return r.isDataEqual != null && r.isDataEqual(e, t) ? e : typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? Io(e, t) : t;
}
class kl extends We {
  constructor() {
    super(), this.setup = (t) => {
      if (!Ve && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), window.addEventListener("focus", r, !1), () => {
          window.removeEventListener("visibilitychange", r), window.removeEventListener("focus", r);
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(t) {
    var r;
    this.setup = t, (r = this.cleanup) == null || r.call(this), this.cleanup = t((i) => {
      typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
    });
  }
  setFocused(t) {
    this.focused !== t && (this.focused = t, this.onFocus());
  }
  onFocus() {
    this.listeners.forEach(({
      listener: t
    }) => {
      t();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const Mt = new kl(), In = ["online", "offline"];
class Dl extends We {
  constructor() {
    super(), this.setup = (t) => {
      if (!Ve && window.addEventListener) {
        const r = () => t();
        return In.forEach((i) => {
          window.addEventListener(i, r, !1);
        }), () => {
          In.forEach((i) => {
            window.removeEventListener(i, r);
          });
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(t) {
    var r;
    this.setup = t, (r = this.cleanup) == null || r.call(this), this.cleanup = t((i) => {
      typeof i == "boolean" ? this.setOnline(i) : this.onOnline();
    });
  }
  setOnline(t) {
    this.online !== t && (this.online = t, this.onOnline());
  }
  onOnline() {
    this.listeners.forEach(({
      listener: t
    }) => {
      t();
    });
  }
  isOnline() {
    return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine;
  }
}
const It = new Dl();
function Sl(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function wt(e) {
  return (e ?? "online") === "online" ? It.isOnline() : !0;
}
class yo {
  constructor(t) {
    this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
}
function dt(e) {
  return e instanceof yo;
}
function vo(e) {
  let t = !1, r = 0, i = !1, n, o, a;
  const s = new Promise((M, f) => {
    o = M, a = f;
  }), l = (M) => {
    i || (p(new yo(M)), e.abort == null || e.abort());
  }, d = () => {
    t = !0;
  }, u = () => {
    t = !1;
  }, g = () => !Mt.isFocused() || e.networkMode !== "always" && !It.isOnline(), m = (M) => {
    i || (i = !0, e.onSuccess == null || e.onSuccess(M), n == null || n(), o(M));
  }, p = (M) => {
    i || (i = !0, e.onError == null || e.onError(M), n == null || n(), a(M));
  }, I = () => new Promise((M) => {
    n = (f) => {
      const b = i || !g();
      return b && M(f), b;
    }, e.onPause == null || e.onPause();
  }).then(() => {
    n = void 0, i || e.onContinue == null || e.onContinue();
  }), v = () => {
    if (i)
      return;
    let M;
    try {
      M = e.fn();
    } catch (f) {
      M = Promise.reject(f);
    }
    Promise.resolve(M).then(m).catch((f) => {
      var b, x;
      if (i)
        return;
      const S = (b = e.retry) != null ? b : 3, z = (x = e.retryDelay) != null ? x : Sl, D = typeof z == "function" ? z(r, f) : z, N = S === !0 || typeof S == "number" && r < S || typeof S == "function" && S(r, f);
      if (t || !N) {
        p(f);
        return;
      }
      r++, e.onFail == null || e.onFail(r, f), bo(D).then(() => {
        if (g())
          return I();
      }).then(() => {
        t ? p(f) : v();
      });
    });
  };
  return wt(e.networkMode) ? v() : I().then(v), {
    promise: s,
    cancel: l,
    continue: () => (n == null ? void 0 : n()) ? s : Promise.resolve(),
    cancelRetry: d,
    continueRetry: u
  };
}
const Wi = console;
function Al() {
  let e = [], t = 0, r = (u) => {
    u();
  }, i = (u) => {
    u();
  };
  const n = (u) => {
    let g;
    t++;
    try {
      g = u();
    } finally {
      t--, t || s();
    }
    return g;
  }, o = (u) => {
    t ? e.push(u) : Mn(() => {
      r(u);
    });
  }, a = (u) => (...g) => {
    o(() => {
      u(...g);
    });
  }, s = () => {
    const u = e;
    e = [], u.length && Mn(() => {
      i(() => {
        u.forEach((g) => {
          r(g);
        });
      });
    });
  };
  return {
    batch: n,
    batchCalls: a,
    schedule: o,
    setNotifyFunction: (u) => {
      r = u;
    },
    setBatchNotifyFunction: (u) => {
      i = u;
    }
  };
}
const E = Al();
class xo {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), ar(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
      this.optionalRemove();
    }, this.cacheTime));
  }
  updateCacheTime(t) {
    this.cacheTime = Math.max(this.cacheTime || 0, t ?? (Ve ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }
}
class Ll extends xo {
  constructor(t) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.cache = t.cache, this.logger = t.logger || Wi, this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.initialState = t.state || zl(this.options), this.state = this.initialState, this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(t) {
    this.options = {
      ...this.defaultOptions,
      ...t
    }, this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this);
  }
  setData(t, r) {
    const i = cr(this.state.data, t, this.options);
    return this.dispatch({
      data: i,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), i;
  }
  setState(t, r) {
    this.dispatch({
      type: "setState",
      state: t,
      setStateOptions: r
    });
  }
  cancel(t) {
    var r;
    const i = this.promise;
    return (r = this.retryer) == null || r.cancel(t), i ? i.then(F).catch(F) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({
      silent: !0
    });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((t) => t.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((t) => t.getCurrentResult().isStale);
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !fo(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var t;
    const r = this.observers.find((i) => i.shouldFetchOnWindowFocus());
    r && r.refetch({
      cancelRefetch: !1
    }), (t = this.retryer) == null || t.continue();
  }
  onOnline() {
    var t;
    const r = this.observers.find((i) => i.shouldFetchOnReconnect());
    r && r.refetch({
      cancelRefetch: !1
    }), (t = this.retryer) == null || t.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.cache.notify({
      type: "observerAdded",
      query: this,
      observer: t
    }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((r) => r !== t), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
      revert: !0
    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
      type: "observerRemoved",
      query: this,
      observer: t
    }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({
      type: "invalidate"
    });
  }
  fetch(t, r) {
    var i, n;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && r != null && r.cancelRefetch)
        this.cancel({
          silent: !0
        });
      else if (this.promise) {
        var o;
        return (o = this.retryer) == null || o.continueRetry(), this.promise;
      }
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const p = this.observers.find((I) => I.options.queryFn);
      p && this.setOptions(p.options);
    }
    const a = wl(), s = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }, l = (p) => {
      Object.defineProperty(p, "signal", {
        enumerable: !0,
        get: () => {
          if (a)
            return this.abortSignalConsumed = !0, a.signal;
        }
      });
    };
    l(s);
    const d = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(s)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"), u = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: d
    };
    if (l(u), (i = this.options.behavior) == null || i.onFetch(u), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((n = u.fetchOptions) == null ? void 0 : n.meta)) {
      var g;
      this.dispatch({
        type: "fetch",
        meta: (g = u.fetchOptions) == null ? void 0 : g.meta
      });
    }
    const m = (p) => {
      if (dt(p) && p.silent || this.dispatch({
        type: "error",
        error: p
      }), !dt(p)) {
        var I, v, M, f;
        (I = (v = this.cache.config).onError) == null || I.call(v, p, this), (M = (f = this.cache.config).onSettled) == null || M.call(f, this.state.data, p, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = vo({
      fn: u.fetchFn,
      abort: a == null ? void 0 : a.abort.bind(a),
      onSuccess: (p) => {
        var I, v, M, f;
        if (typeof p > "u") {
          m(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(p), (I = (v = this.cache.config).onSuccess) == null || I.call(v, p, this), (M = (f = this.cache.config).onSettled) == null || M.call(f, p, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: m,
      onFail: (p, I) => {
        this.dispatch({
          type: "failed",
          failureCount: p,
          error: I
        });
      },
      onPause: () => {
        this.dispatch({
          type: "pause"
        });
      },
      onContinue: () => {
        this.dispatch({
          type: "continue"
        });
      },
      retry: u.options.retry,
      retryDelay: u.options.retryDelay,
      networkMode: u.options.networkMode
    }), this.promise = this.retryer.promise, this.promise;
  }
  dispatch(t) {
    const r = (i) => {
      var n, o;
      switch (t.type) {
        case "failed":
          return {
            ...i,
            fetchFailureCount: t.failureCount,
            fetchFailureReason: t.error
          };
        case "pause":
          return {
            ...i,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...i,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...i,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (n = t.meta) != null ? n : null,
            fetchStatus: wt(this.options.networkMode) ? "fetching" : "paused",
            ...!i.dataUpdatedAt && {
              error: null,
              status: "loading"
            }
          };
        case "success":
          return {
            ...i,
            data: t.data,
            dataUpdateCount: i.dataUpdateCount + 1,
            dataUpdatedAt: (o = t.dataUpdatedAt) != null ? o : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...!t.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const a = t.error;
          return dt(a) && a.revert && this.revertState ? {
            ...this.revertState,
            fetchStatus: "idle"
          } : {
            ...i,
            error: a,
            errorUpdateCount: i.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: i.fetchFailureCount + 1,
            fetchFailureReason: a,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...i,
            isInvalidated: !0
          };
        case "setState":
          return {
            ...i,
            ...t.state
          };
      }
    };
    this.state = r(this.state), E.batch(() => {
      this.observers.forEach((i) => {
        i.onQueryUpdate(t);
      }), this.cache.notify({
        query: this,
        type: "updated",
        action: t
      });
    });
  }
}
function zl(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, r = typeof t < "u", i = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? i ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "loading",
    fetchStatus: "idle"
  };
}
class _l extends We {
  constructor(t) {
    super(), this.config = t || {}, this.queries = [], this.queriesMap = {};
  }
  build(t, r, i) {
    var n;
    const o = r.queryKey, a = (n = r.queryHash) != null ? n : Zi(o, r);
    let s = this.get(a);
    return s || (s = new Ll({
      cache: this,
      logger: t.getLogger(),
      queryKey: o,
      queryHash: a,
      options: t.defaultQueryOptions(r),
      state: i,
      defaultOptions: t.getQueryDefaults(o)
    }), this.add(s)), s;
  }
  add(t) {
    this.queriesMap[t.queryHash] || (this.queriesMap[t.queryHash] = t, this.queries.push(t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = this.queriesMap[t.queryHash];
    r && (t.destroy(), this.queries = this.queries.filter((i) => i !== t), r === t && delete this.queriesMap[t.queryHash], this.notify({
      type: "removed",
      query: t
    }));
  }
  clear() {
    E.batch(() => {
      this.queries.forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return this.queriesMap[t];
  }
  getAll() {
    return this.queries;
  }
  find(t, r) {
    const [i] = de(t, r);
    return typeof i.exact > "u" && (i.exact = !0), this.queries.find((n) => hn(i, n));
  }
  findAll(t, r) {
    const [i] = de(t, r);
    return Object.keys(i).length > 0 ? this.queries.filter((n) => hn(i, n)) : this.queries;
  }
  notify(t) {
    E.batch(() => {
      this.listeners.forEach(({
        listener: r
      }) => {
        r(t);
      });
    });
  }
  onFocus() {
    E.batch(() => {
      this.queries.forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    E.batch(() => {
      this.queries.forEach((t) => {
        t.onOnline();
      });
    });
  }
}
class Tl extends xo {
  constructor(t) {
    super(), this.defaultOptions = t.defaultOptions, this.mutationId = t.mutationId, this.mutationCache = t.mutationCache, this.logger = t.logger || Wi, this.observers = [], this.state = t.state || jo(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = {
      ...this.defaultOptions,
      ...t
    }, this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(t) {
    this.dispatch({
      type: "setState",
      state: t
    });
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.mutationCache.notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    this.observers = this.observers.filter((r) => r !== t), this.scheduleGc(), this.mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this));
  }
  continue() {
    var t, r;
    return (t = (r = this.retryer) == null ? void 0 : r.continue()) != null ? t : this.execute();
  }
  async execute() {
    const t = () => {
      var N;
      return this.retryer = vo({
        fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
        onFail: (y, L) => {
          this.dispatch({
            type: "failed",
            failureCount: y,
            error: L
          });
        },
        onPause: () => {
          this.dispatch({
            type: "pause"
          });
        },
        onContinue: () => {
          this.dispatch({
            type: "continue"
          });
        },
        retry: (N = this.options.retry) != null ? N : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      }), this.retryer.promise;
    }, r = this.state.status === "loading";
    try {
      var i, n, o, a, s, l, d, u;
      if (!r) {
        var g, m, p, I;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((g = (m = this.mutationCache.config).onMutate) == null ? void 0 : g.call(m, this.state.variables, this));
        const y = await ((p = (I = this.options).onMutate) == null ? void 0 : p.call(I, this.state.variables));
        y !== this.state.context && this.dispatch({
          type: "loading",
          context: y,
          variables: this.state.variables
        });
      }
      const N = await t();
      return await ((i = (n = this.mutationCache.config).onSuccess) == null ? void 0 : i.call(n, N, this.state.variables, this.state.context, this)), await ((o = (a = this.options).onSuccess) == null ? void 0 : o.call(a, N, this.state.variables, this.state.context)), await ((s = (l = this.mutationCache.config).onSettled) == null ? void 0 : s.call(l, N, null, this.state.variables, this.state.context, this)), await ((d = (u = this.options).onSettled) == null ? void 0 : d.call(u, N, null, this.state.variables, this.state.context)), this.dispatch({
        type: "success",
        data: N
      }), N;
    } catch (N) {
      try {
        var v, M, f, b, x, S, z, D;
        throw await ((v = (M = this.mutationCache.config).onError) == null ? void 0 : v.call(M, N, this.state.variables, this.state.context, this)), await ((f = (b = this.options).onError) == null ? void 0 : f.call(b, N, this.state.variables, this.state.context)), await ((x = (S = this.mutationCache.config).onSettled) == null ? void 0 : x.call(S, void 0, N, this.state.variables, this.state.context, this)), await ((z = (D = this.options).onSettled) == null ? void 0 : z.call(D, void 0, N, this.state.variables, this.state.context)), N;
      } finally {
        this.dispatch({
          type: "error",
          error: N
        });
      }
    }
  }
  dispatch(t) {
    const r = (i) => {
      switch (t.type) {
        case "failed":
          return {
            ...i,
            failureCount: t.failureCount,
            failureReason: t.error
          };
        case "pause":
          return {
            ...i,
            isPaused: !0
          };
        case "continue":
          return {
            ...i,
            isPaused: !1
          };
        case "loading":
          return {
            ...i,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !wt(this.options.networkMode),
            status: "loading",
            variables: t.variables
          };
        case "success":
          return {
            ...i,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1
          };
        case "error":
          return {
            ...i,
            data: void 0,
            error: t.error,
            failureCount: i.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: "error"
          };
        case "setState":
          return {
            ...i,
            ...t.state
          };
      }
    };
    this.state = r(this.state), E.batch(() => {
      this.observers.forEach((i) => {
        i.onMutationUpdate(t);
      }), this.mutationCache.notify({
        mutation: this,
        type: "updated",
        action: t
      });
    });
  }
}
function jo() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0
  };
}
class Cl extends We {
  constructor(t) {
    super(), this.config = t || {}, this.mutations = [], this.mutationId = 0;
  }
  build(t, r, i) {
    const n = new Tl({
      mutationCache: this,
      logger: t.getLogger(),
      mutationId: ++this.mutationId,
      options: t.defaultMutationOptions(r),
      state: i,
      defaultOptions: r.mutationKey ? t.getMutationDefaults(r.mutationKey) : void 0
    });
    return this.add(n), n;
  }
  add(t) {
    this.mutations.push(t), this.notify({
      type: "added",
      mutation: t
    });
  }
  remove(t) {
    this.mutations = this.mutations.filter((r) => r !== t), this.notify({
      type: "removed",
      mutation: t
    });
  }
  clear() {
    E.batch(() => {
      this.mutations.forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(t) {
    return typeof t.exact > "u" && (t.exact = !0), this.mutations.find((r) => pn(t, r));
  }
  findAll(t) {
    return this.mutations.filter((r) => pn(t, r));
  }
  notify(t) {
    E.batch(() => {
      this.listeners.forEach(({
        listener: r
      }) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    var t;
    return this.resuming = ((t = this.resuming) != null ? t : Promise.resolve()).then(() => {
      const r = this.mutations.filter((i) => i.state.isPaused);
      return E.batch(() => r.reduce((i, n) => i.then(() => n.continue().catch(F)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function El() {
  return {
    onFetch: (e) => {
      e.fetchFn = () => {
        var t, r, i, n, o, a;
        const s = (t = e.fetchOptions) == null || (r = t.meta) == null ? void 0 : r.refetchPage, l = (i = e.fetchOptions) == null || (n = i.meta) == null ? void 0 : n.fetchMore, d = l == null ? void 0 : l.pageParam, u = (l == null ? void 0 : l.direction) === "forward", g = (l == null ? void 0 : l.direction) === "backward", m = ((o = e.state.data) == null ? void 0 : o.pages) || [], p = ((a = e.state.data) == null ? void 0 : a.pageParams) || [];
        let I = p, v = !1;
        const M = (D) => {
          Object.defineProperty(D, "signal", {
            enumerable: !0,
            get: () => {
              var N;
              if ((N = e.signal) != null && N.aborted)
                v = !0;
              else {
                var y;
                (y = e.signal) == null || y.addEventListener("abort", () => {
                  v = !0;
                });
              }
              return e.signal;
            }
          });
        }, f = e.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + e.options.queryHash + "'")), b = (D, N, y, L) => (I = L ? [N, ...I] : [...I, N], L ? [y, ...D] : [...D, y]), x = (D, N, y, L) => {
          if (v)
            return Promise.reject("Cancelled");
          if (typeof y > "u" && !N && D.length)
            return Promise.resolve(D);
          const Z = {
            queryKey: e.queryKey,
            pageParam: y,
            meta: e.options.meta
          };
          M(Z);
          const A = f(Z);
          return Promise.resolve(A).then((Ae) => b(D, y, Ae, L));
        };
        let S;
        if (!m.length)
          S = x([]);
        else if (u) {
          const D = typeof d < "u", N = D ? d : bn(e.options, m);
          S = x(m, D, N);
        } else if (g) {
          const D = typeof d < "u", N = D ? d : Ul(e.options, m);
          S = x(m, D, N, !0);
        } else {
          I = [];
          const D = typeof e.options.getNextPageParam > "u";
          S = (s && m[0] ? s(m[0], 0, m) : !0) ? x([], D, p[0]) : Promise.resolve(b([], p[0], m[0]));
          for (let y = 1; y < m.length; y++)
            S = S.then((L) => {
              if (s && m[y] ? s(m[y], y, m) : !0) {
                const A = D ? p[y] : bn(e.options, L);
                return x(L, D, A);
              }
              return Promise.resolve(b(L, p[y], m[y]));
            });
        }
        return S.then((D) => ({
          pages: D,
          pageParams: I
        }));
      };
    }
  };
}
function bn(e, t) {
  return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t);
}
function Ul(e, t) {
  return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t);
}
class Zl {
  constructor(t = {}) {
    this.queryCache = t.queryCache || new _l(), this.mutationCache = t.mutationCache || new Cl(), this.logger = t.logger || Wi, this.defaultOptions = t.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0;
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = Mt.subscribe(() => {
      Mt.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = It.subscribe(() => {
      It.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
    }));
  }
  unmount() {
    var t, r;
    this.mountCount--, this.mountCount === 0 && ((t = this.unsubscribeFocus) == null || t.call(this), this.unsubscribeFocus = void 0, (r = this.unsubscribeOnline) == null || r.call(this), this.unsubscribeOnline = void 0);
  }
  isFetching(t, r) {
    const [i] = de(t, r);
    return i.fetchStatus = "fetching", this.queryCache.findAll(i).length;
  }
  isMutating(t) {
    return this.mutationCache.findAll({
      ...t,
      fetching: !0
    }).length;
  }
  getQueryData(t, r) {
    var i;
    return (i = this.queryCache.find(t, r)) == null ? void 0 : i.state.data;
  }
  ensureQueryData(t, r, i) {
    const n = Be(t, r, i), o = this.getQueryData(n.queryKey);
    return o ? Promise.resolve(o) : this.fetchQuery(n);
  }
  getQueriesData(t) {
    return this.getQueryCache().findAll(t).map(({
      queryKey: r,
      state: i
    }) => {
      const n = i.data;
      return [r, n];
    });
  }
  setQueryData(t, r, i) {
    const n = this.queryCache.find(t), o = n == null ? void 0 : n.state.data, a = jl(r, o);
    if (typeof a > "u")
      return;
    const s = Be(t), l = this.defaultQueryOptions(s);
    return this.queryCache.build(this, l).setData(a, {
      ...i,
      manual: !0
    });
  }
  setQueriesData(t, r, i) {
    return E.batch(() => this.getQueryCache().findAll(t).map(({
      queryKey: n
    }) => [n, this.setQueryData(n, r, i)]));
  }
  getQueryState(t, r) {
    var i;
    return (i = this.queryCache.find(t, r)) == null ? void 0 : i.state;
  }
  removeQueries(t, r) {
    const [i] = de(t, r), n = this.queryCache;
    E.batch(() => {
      n.findAll(i).forEach((o) => {
        n.remove(o);
      });
    });
  }
  resetQueries(t, r, i) {
    const [n, o] = de(t, r, i), a = this.queryCache, s = {
      type: "active",
      ...n
    };
    return E.batch(() => (a.findAll(n).forEach((l) => {
      l.reset();
    }), this.refetchQueries(s, o)));
  }
  cancelQueries(t, r, i) {
    const [n, o = {}] = de(t, r, i);
    typeof o.revert > "u" && (o.revert = !0);
    const a = E.batch(() => this.queryCache.findAll(n).map((s) => s.cancel(o)));
    return Promise.all(a).then(F).catch(F);
  }
  invalidateQueries(t, r, i) {
    const [n, o] = de(t, r, i);
    return E.batch(() => {
      var a, s;
      if (this.queryCache.findAll(n).forEach((d) => {
        d.invalidate();
      }), n.refetchType === "none")
        return Promise.resolve();
      const l = {
        ...n,
        type: (a = (s = n.refetchType) != null ? s : n.type) != null ? a : "active"
      };
      return this.refetchQueries(l, o);
    });
  }
  refetchQueries(t, r, i) {
    const [n, o] = de(t, r, i), a = E.batch(() => this.queryCache.findAll(n).filter((l) => !l.isDisabled()).map((l) => {
      var d;
      return l.fetch(void 0, {
        ...o,
        cancelRefetch: (d = o == null ? void 0 : o.cancelRefetch) != null ? d : !0,
        meta: {
          refetchPage: n.refetchPage
        }
      });
    }));
    let s = Promise.all(a).then(F);
    return o != null && o.throwOnError || (s = s.catch(F)), s;
  }
  fetchQuery(t, r, i) {
    const n = Be(t, r, i), o = this.defaultQueryOptions(n);
    typeof o.retry > "u" && (o.retry = !1);
    const a = this.queryCache.build(this, o);
    return a.isStaleByTime(o.staleTime) ? a.fetch(o) : Promise.resolve(a.state.data);
  }
  prefetchQuery(t, r, i) {
    return this.fetchQuery(t, r, i).then(F).catch(F);
  }
  fetchInfiniteQuery(t, r, i) {
    const n = Be(t, r, i);
    return n.behavior = El(), this.fetchQuery(n);
  }
  prefetchInfiniteQuery(t, r, i) {
    return this.fetchInfiniteQuery(t, r, i).then(F).catch(F);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(t) {
    this.defaultOptions = t;
  }
  setQueryDefaults(t, r) {
    const i = this.queryDefaults.find((n) => be(t) === be(n.queryKey));
    i ? i.defaultOptions = r : this.queryDefaults.push({
      queryKey: t,
      defaultOptions: r
    });
  }
  getQueryDefaults(t) {
    if (!t)
      return;
    const r = this.queryDefaults.find((i) => mt(t, i.queryKey));
    return r == null ? void 0 : r.defaultOptions;
  }
  setMutationDefaults(t, r) {
    const i = this.mutationDefaults.find((n) => be(t) === be(n.mutationKey));
    i ? i.defaultOptions = r : this.mutationDefaults.push({
      mutationKey: t,
      defaultOptions: r
    });
  }
  getMutationDefaults(t) {
    if (!t)
      return;
    const r = this.mutationDefaults.find((i) => mt(t, i.mutationKey));
    return r == null ? void 0 : r.defaultOptions;
  }
  defaultQueryOptions(t) {
    if (t != null && t._defaulted)
      return t;
    const r = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
      ...t,
      _defaulted: !0
    };
    return !r.queryHash && r.queryKey && (r.queryHash = Zi(r.queryKey, r)), typeof r.refetchOnReconnect > "u" && (r.refetchOnReconnect = r.networkMode !== "always"), typeof r.useErrorBoundary > "u" && (r.useErrorBoundary = !!r.suspense), r;
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted ? t : {
      ...this.defaultOptions.mutations,
      ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
      ...t,
      _defaulted: !0
    };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class Wl extends We {
  constructor(t, r) {
    super(), this.client = t, this.options = r, this.trackedProps = /* @__PURE__ */ new Set(), this.selectError = null, this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (this.currentQuery.addObserver(this), yn(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return lr(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return lr(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
  }
  setOptions(t, r) {
    const i = this.options, n = this.currentQuery;
    if (this.options = this.client.defaultQueryOptions(t), ft(i, this.options) || this.client.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.currentQuery,
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = i.queryKey), this.updateQuery();
    const o = this.hasListeners();
    o && vn(this.currentQuery, n, this.options, i) && this.executeFetch(), this.updateResult(r), o && (this.currentQuery !== n || this.options.enabled !== i.enabled || this.options.staleTime !== i.staleTime) && this.updateStaleTimeout();
    const a = this.computeRefetchInterval();
    o && (this.currentQuery !== n || this.options.enabled !== i.enabled || a !== this.currentRefetchInterval) && this.updateRefetchInterval(a);
  }
  getOptimisticResult(t) {
    const r = this.client.getQueryCache().build(this.client, t), i = this.createResult(r, t);
    return Pl(this, i, t) && (this.currentResult = i, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), i;
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(t) {
    const r = {};
    return Object.keys(t).forEach((i) => {
      Object.defineProperty(r, i, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackedProps.add(i), t[i])
      });
    }), r;
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({
    refetchPage: t,
    ...r
  } = {}) {
    return this.fetch({
      ...r,
      meta: {
        refetchPage: t
      }
    });
  }
  fetchOptimistic(t) {
    const r = this.client.defaultQueryOptions(t), i = this.client.getQueryCache().build(this.client, r);
    return i.isFetchingOptimistic = !0, i.fetch().then(() => this.createResult(i, r));
  }
  fetch(t) {
    var r;
    return this.executeFetch({
      ...t,
      cancelRefetch: (r = t.cancelRefetch) != null ? r : !0
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(t) {
    this.updateQuery();
    let r = this.currentQuery.fetch(this.options, t);
    return t != null && t.throwOnError || (r = r.catch(F)), r;
  }
  updateStaleTimeout() {
    if (this.clearStaleTimeout(), Ve || this.currentResult.isStale || !ar(this.options.staleTime))
      return;
    const r = fo(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, r);
  }
  computeRefetchInterval() {
    var t;
    return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (t = this.options.refetchInterval) != null ? t : !1;
  }
  updateRefetchInterval(t) {
    this.clearRefetchInterval(), this.currentRefetchInterval = t, !(Ve || this.options.enabled === !1 || !ar(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
      (this.options.refetchIntervalInBackground || Mt.isFocused()) && this.executeFetch();
    }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0);
  }
  clearRefetchInterval() {
    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0);
  }
  createResult(t, r) {
    const i = this.currentQuery, n = this.options, o = this.currentResult, a = this.currentResultState, s = this.currentResultOptions, l = t !== i, d = l ? t.state : this.currentQueryInitialState, u = l ? this.currentResult : this.previousQueryResult, {
      state: g
    } = t;
    let {
      dataUpdatedAt: m,
      error: p,
      errorUpdatedAt: I,
      fetchStatus: v,
      status: M
    } = g, f = !1, b = !1, x;
    if (r._optimisticResults) {
      const y = this.hasListeners(), L = !y && yn(t, r), Z = y && vn(t, i, r, n);
      (L || Z) && (v = wt(t.options.networkMode) ? "fetching" : "paused", m || (M = "loading")), r._optimisticResults === "isRestoring" && (v = "idle");
    }
    if (r.keepPreviousData && !g.dataUpdatedAt && u != null && u.isSuccess && M !== "error")
      x = u.data, m = u.dataUpdatedAt, M = u.status, f = !0;
    else if (r.select && typeof g.data < "u")
      if (o && g.data === (a == null ? void 0 : a.data) && r.select === this.selectFn)
        x = this.selectResult;
      else
        try {
          this.selectFn = r.select, x = r.select(g.data), x = cr(o == null ? void 0 : o.data, x, r), this.selectResult = x, this.selectError = null;
        } catch (y) {
          this.selectError = y;
        }
    else
      x = g.data;
    if (typeof r.placeholderData < "u" && typeof x > "u" && M === "loading") {
      let y;
      if (o != null && o.isPlaceholderData && r.placeholderData === (s == null ? void 0 : s.placeholderData))
        y = o.data;
      else if (y = typeof r.placeholderData == "function" ? r.placeholderData() : r.placeholderData, r.select && typeof y < "u")
        try {
          y = r.select(y), this.selectError = null;
        } catch (L) {
          this.selectError = L;
        }
      typeof y < "u" && (M = "success", x = cr(o == null ? void 0 : o.data, y, r), b = !0);
    }
    this.selectError && (p = this.selectError, x = this.selectResult, I = Date.now(), M = "error");
    const S = v === "fetching", z = M === "loading", D = M === "error";
    return {
      status: M,
      fetchStatus: v,
      isLoading: z,
      isSuccess: M === "success",
      isError: D,
      isInitialLoading: z && S,
      data: x,
      dataUpdatedAt: m,
      error: p,
      errorUpdatedAt: I,
      failureCount: g.fetchFailureCount,
      failureReason: g.fetchFailureReason,
      errorUpdateCount: g.errorUpdateCount,
      isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
      isFetchedAfterMount: g.dataUpdateCount > d.dataUpdateCount || g.errorUpdateCount > d.errorUpdateCount,
      isFetching: S,
      isRefetching: S && !z,
      isLoadingError: D && g.dataUpdatedAt === 0,
      isPaused: v === "paused",
      isPlaceholderData: b,
      isPreviousData: f,
      isRefetchError: D && g.dataUpdatedAt !== 0,
      isStale: Oi(t, r),
      refetch: this.refetch,
      remove: this.remove
    };
  }
  updateResult(t) {
    const r = this.currentResult, i = this.createResult(this.currentQuery, this.options);
    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, ft(i, r))
      return;
    this.currentResult = i;
    const n = {
      cache: !0
    }, o = () => {
      if (!r)
        return !0;
      const {
        notifyOnChangeProps: a
      } = this.options, s = typeof a == "function" ? a() : a;
      if (s === "all" || !s && !this.trackedProps.size)
        return !0;
      const l = new Set(s ?? this.trackedProps);
      return this.options.useErrorBoundary && l.add("error"), Object.keys(this.currentResult).some((d) => {
        const u = d;
        return this.currentResult[u] !== r[u] && l.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && o() && (n.listeners = !0), this.notify({
      ...n,
      ...t
    });
  }
  updateQuery() {
    const t = this.client.getQueryCache().build(this.client, this.options);
    if (t === this.currentQuery)
      return;
    const r = this.currentQuery;
    this.currentQuery = t, this.currentQueryInitialState = t.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
  }
  onQueryUpdate(t) {
    const r = {};
    t.type === "success" ? r.onSuccess = !t.manual : t.type === "error" && !dt(t.error) && (r.onError = !0), this.updateResult(r), this.hasListeners() && this.updateTimers();
  }
  notify(t) {
    E.batch(() => {
      if (t.onSuccess) {
        var r, i, n, o;
        (r = (i = this.options).onSuccess) == null || r.call(i, this.currentResult.data), (n = (o = this.options).onSettled) == null || n.call(o, this.currentResult.data, null);
      } else if (t.onError) {
        var a, s, l, d;
        (a = (s = this.options).onError) == null || a.call(s, this.currentResult.error), (l = (d = this.options).onSettled) == null || l.call(d, void 0, this.currentResult.error);
      }
      t.listeners && this.listeners.forEach(({
        listener: u
      }) => {
        u(this.currentResult);
      }), t.cache && this.client.getQueryCache().notify({
        query: this.currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
}
function Ol(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function yn(e, t) {
  return Ol(e, t) || e.state.dataUpdatedAt > 0 && lr(e, t, t.refetchOnMount);
}
function lr(e, t, r) {
  if (t.enabled !== !1) {
    const i = typeof r == "function" ? r(e) : r;
    return i === "always" || i !== !1 && Oi(e, t);
  }
  return !1;
}
function vn(e, t, r, i) {
  return r.enabled !== !1 && (e !== t || i.enabled === !1) && (!r.suspense || e.state.status !== "error") && Oi(e, r);
}
function Oi(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function Pl(e, t, r) {
  return r.keepPreviousData ? !1 : r.placeholderData !== void 0 ? t.isPlaceholderData : !ft(e.getCurrentResult(), t);
}
let Rl = class extends We {
  constructor(t, r) {
    super(), this.client = t, this.setOptions(r), this.bindMethods(), this.updateResult();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var r;
    const i = this.options;
    this.options = this.client.defaultMutationOptions(t), ft(i, this.options) || this.client.getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: this.currentMutation,
      observer: this
    }), (r = this.currentMutation) == null || r.setOptions(this.options);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.currentMutation) == null || t.removeObserver(this);
    }
  }
  onMutationUpdate(t) {
    this.updateResult();
    const r = {
      listeners: !0
    };
    t.type === "success" ? r.onSuccess = !0 : t.type === "error" && (r.onError = !0), this.notify(r);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  reset() {
    this.currentMutation = void 0, this.updateResult(), this.notify({
      listeners: !0
    });
  }
  mutate(t, r) {
    return this.mutateOptions = r, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, {
      ...this.options,
      variables: typeof t < "u" ? t : this.options.variables
    }), this.currentMutation.addObserver(this), this.currentMutation.execute();
  }
  updateResult() {
    const t = this.currentMutation ? this.currentMutation.state : jo(), r = {
      ...t,
      isLoading: t.status === "loading",
      isSuccess: t.status === "success",
      isError: t.status === "error",
      isIdle: t.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
    this.currentResult = r;
  }
  notify(t) {
    E.batch(() => {
      if (this.mutateOptions && this.hasListeners()) {
        if (t.onSuccess) {
          var r, i, n, o;
          (r = (i = this.mutateOptions).onSuccess) == null || r.call(i, this.currentResult.data, this.currentResult.variables, this.currentResult.context), (n = (o = this.mutateOptions).onSettled) == null || n.call(o, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context);
        } else if (t.onError) {
          var a, s, l, d;
          (a = (s = this.mutateOptions).onError) == null || a.call(s, this.currentResult.error, this.currentResult.variables, this.currentResult.context), (l = (d = this.mutateOptions).onSettled) == null || l.call(d, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
        }
      }
      t.listeners && this.listeners.forEach(({
        listener: u
      }) => {
        u(this.currentResult);
      });
    });
  }
};
ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
ReactDOM.createPortal;
ReactDOM.createRoot;
ReactDOM;
ReactDOM.findDOMNode;
ReactDOM.flushSync;
ReactDOM.hydrate;
ReactDOM.hydrateRoot;
ReactDOM.render;
ReactDOM.unmountComponentAtNode;
ReactDOM.unstable_batchedUpdates;
ReactDOM.unstable_renderSubtreeIntoContainer;
ReactDOM.version;
var No = { exports: {} }, wo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce = po;
function Hl(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Gl = typeof Object.is == "function" ? Object.is : Hl, Yl = Ce.useState, Ql = Ce.useEffect, Bl = Ce.useLayoutEffect, Jl = Ce.useDebugValue;
function Vl(e, t) {
  var r = t(), i = Yl({ inst: { value: r, getSnapshot: t } }), n = i[0].inst, o = i[1];
  return Bl(function() {
    n.value = r, n.getSnapshot = t, Vt(n) && o({ inst: n });
  }, [e, r, t]), Ql(function() {
    return Vt(n) && o({ inst: n }), e(function() {
      Vt(n) && o({ inst: n });
    });
  }, [e]), Jl(r), r;
}
function Vt(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Gl(e, r);
  } catch {
    return !0;
  }
}
function Fl(e, t) {
  return t();
}
var Xl = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Fl : Vl;
wo.useSyncExternalStore = Ce.useSyncExternalStore !== void 0 ? Ce.useSyncExternalStore : Xl;
No.exports = wo;
var $l = No.exports;
const ko = $l.useSyncExternalStore, xn = /* @__PURE__ */ le(void 0), Do = /* @__PURE__ */ le(!1);
function So(e, t) {
  return e || (t && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = xn), window.ReactQueryClientContext) : xn);
}
const Pi = ({
  context: e
} = {}) => {
  const t = B(So(e, B(Do)));
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, ql = ({
  client: e,
  children: t,
  context: r,
  contextSharing: i = !1
}) => {
  G(() => (e.mount(), () => {
    e.unmount();
  }), [e]);
  const n = So(r, i);
  return /* @__PURE__ */ c(Do.Provider, {
    value: !r && i
  }, /* @__PURE__ */ c(n.Provider, {
    value: e
  }, t));
}, Ao = /* @__PURE__ */ le(!1), Kl = () => B(Ao);
Ao.Provider;
function ed() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
const td = /* @__PURE__ */ le(ed()), rd = () => B(td);
function Lo(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
const id = (e, t) => {
  (e.suspense || e.useErrorBoundary) && (t.isReset() || (e.retryOnMount = !1));
}, nd = (e) => {
  G(() => {
    e.clearReset();
  }, [e]);
}, od = ({
  result: e,
  errorResetBoundary: t,
  useErrorBoundary: r,
  query: i
}) => e.isError && !t.isReset() && !e.isFetching && Lo(r, [e.error, i]), ad = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, sd = (e, t) => e.isLoading && e.isFetching && !t, cd = (e, t, r) => (e == null ? void 0 : e.suspense) && sd(t, r), ld = (e, t, r) => t.fetchOptimistic(e).then(({
  data: i
}) => {
  e.onSuccess == null || e.onSuccess(i), e.onSettled == null || e.onSettled(i, null);
}).catch((i) => {
  r.clearReset(), e.onError == null || e.onError(i), e.onSettled == null || e.onSettled(void 0, i);
});
function dd(e, t) {
  const r = Pi({
    context: e.context
  }), i = Kl(), n = rd(), o = r.defaultQueryOptions(e);
  o._optimisticResults = i ? "isRestoring" : "optimistic", o.onError && (o.onError = E.batchCalls(o.onError)), o.onSuccess && (o.onSuccess = E.batchCalls(o.onSuccess)), o.onSettled && (o.onSettled = E.batchCalls(o.onSettled)), ad(o), id(o, n), nd(n);
  const [a] = Y(() => new t(r, o)), s = a.getOptimisticResult(o);
  if (ko(W((l) => {
    const d = i ? () => {
    } : a.subscribe(E.batchCalls(l));
    return a.updateResult(), d;
  }, [a, i]), () => a.getCurrentResult(), () => a.getCurrentResult()), G(() => {
    a.setOptions(o, {
      listeners: !1
    });
  }, [o, a]), cd(o, s, i))
    throw ld(o, a, n);
  if (od({
    result: s,
    errorResetBoundary: n,
    useErrorBoundary: o.useErrorBoundary,
    query: a.getCurrentQuery()
  }))
    throw s.error;
  return o.notifyOnChangeProps ? s : a.trackResult(s);
}
function zo(e, t, r) {
  const i = Be(e, t, r);
  return dd(i, Wl);
}
function ud(e, t, r) {
  const i = Nl(e, t, r), n = Pi({
    context: i.context
  }), [o] = Y(() => new Rl(n, i));
  G(() => {
    o.setOptions(i);
  }, [o, i]);
  const a = ko(W((l) => o.subscribe(E.batchCalls(l)), [o]), () => o.getCurrentResult(), () => o.getCurrentResult()), s = W((l, d) => {
    o.mutate(l, d).catch(gd);
  }, [o]);
  if (a.error && Lo(o.options.useErrorBoundary, [a.error]))
    throw a.error;
  return {
    ...a,
    mutate: s,
    mutateAsync: a.mutate
  };
}
function gd() {
}
function _o(e) {
  var t, r, i = "";
  if (typeof e == "string" || typeof e == "number")
    i += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var n = e.length;
      for (t = 0; t < n; t++)
        e[t] && (r = _o(e[t])) && (i && (i += " "), i += r);
    } else
      for (r in e)
        e[r] && (i && (i += " "), i += r);
  return i;
}
function k() {
  for (var e, t, r = 0, i = "", n = arguments.length; r < n; r++)
    (e = arguments[r]) && (t = _o(e)) && (i && (i += " "), i += t);
  return i;
}
const Ri = ({ className: e }) => (e || (e = "border-grey-200 dark:border-grey-800"), /* @__PURE__ */ h.jsx("hr", { className: e })), To = k("text-xs font-semibold tracking-normal"), hd = k(
  To,
  "text-grey-900 dark:text-grey-500"
), xe = ({
  level: e = 1,
  children: t,
  styles: r = "",
  grey: i = !0,
  separator: n,
  useLabelTag: o,
  className: a = "",
  ...s
}) => {
  const l = `${o ? "label" : `h${e}`}`;
  if (r += e === 6 || o ? ` block ${i ? hd : To}` : " ", !o)
    switch (e) {
      case 1:
        r += " md:text-4xl leading-tighter";
        break;
      case 2:
        r += " md:text-3xl";
        break;
      case 3:
        r += " md:text-2xl";
        break;
      case 4:
        r += " md:text-xl";
        break;
      case 5:
        r += " md:text-lg";
        break;
    }
  a = k(
    r,
    !i && "dark:text-white",
    a
  );
  const d = U.createElement(l, { className: a, key: "heading-elem", ...s }, t);
  if (n) {
    const u = !e || e === 1 ? 2 : 1, g = e === 6 ? 2 : 3;
    return /* @__PURE__ */ h.jsxs("div", { className: `gap-${u} mb-${g} flex flex-col`, children: [
      d,
      /* @__PURE__ */ h.jsx(Ri, {})
    ] });
  } else
    return d;
}, pd = ({ children: e, color: t, className: r, ...i }) => {
  if (!e)
    return null;
  let n = "text-grey-700 dark:text-grey-600";
  switch (t) {
    case "red":
      n = "text-red dark:text-red-500";
      break;
    case "green":
      n = "text-green dark:text-green-500";
      break;
  }
  return r = k(
    "mt-1 inline-block text-xs",
    n,
    r
  ), /* @__PURE__ */ h.jsx("span", { className: r, ...i, children: e });
}, Co = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14", height: 16, width: 16, ...e }, /* @__PURE__ */ c("g", { id: "user-single-neutral--close-geometric-human-person-single-up-user" }, /* @__PURE__ */ c("path", { id: "Union", fill: "currentColor", fillRule: "evenodd", d: "M10.5 3.5C10.5 5.433 8.93295 7 6.99995 7C5.06695 7 3.49995 5.433 3.49995 3.5C3.49995 1.567 5.06695 0 6.99995 0C8.93295 0 10.5 1.567 10.5 3.5ZM0.320435 13.4C1.21244 10.56 3.86563 8.50003 6.99996 8.50003C10.1343 8.50003 12.7875 10.56 13.6795 13.4C13.7751 13.7044 13.537 14 13.2179 14H0.781996C0.462883 14 0.224811 13.7044 0.320435 13.4Z", clipRule: "evenodd" }))), md = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNCAxNCIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij48ZyBpZD0idXNlci1zaW5nbGUtbmV1dHJhbC0tY2xvc2UtZ2VvbWV0cmljLWh1bWFuLXBlcnNvbi1zaW5nbGUtdXAtdXNlciI+PHBhdGggaWQ9IlVuaW9uIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjUgMy41QzEwLjUgNS40MzMgOC45MzI5NSA3IDYuOTk5OTUgN0M1LjA2Njk1IDcgMy40OTk5NSA1LjQzMyAzLjQ5OTk1IDMuNUMzLjQ5OTk1IDEuNTY3IDUuMDY2OTUgMCA2Ljk5OTk1IDBDOC45MzI5NSAwIDEwLjUgMS41NjcgMTAuNSAzLjVaTTAuMzIwNDM1IDEzLjRDMS4yMTI0NCAxMC41NiAzLjg2NTYzIDguNTAwMDMgNi45OTk5NiA4LjUwMDAzQzEwLjEzNDMgOC41MDAwMyAxMi43ODc1IDEwLjU2IDEzLjY3OTUgMTMuNEMxMy43NzUxIDEzLjcwNDQgMTMuNTM3IDE0IDEzLjIxNzkgMTRIMC43ODE5OTZDMC40NjI4ODMgMTQgMC4yMjQ4MTEgMTMuNzA0NCAwLjMyMDQzNSAxMy40WiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9nPjwvc3ZnPg==", fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Co,
  default: md
}, Symbol.toStringTag, { value: "Module" })), Md = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "add"), /* @__PURE__ */ c("line", { x1: 0.75, y1: 12, x2: 23.25, y2: 12, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }), /* @__PURE__ */ c("line", { x1: 12, y1: 0.75, x2: 12, y2: 23.25, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" })), Id = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PC9kZWZzPjx0aXRsZT5hZGQ8L3RpdGxlPjxsaW5lIHgxPSIwLjc1IiB5MT0iMTIiIHgyPSIyMy4yNSIgeTI9IjEyIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNXB4Ij48L2xpbmU+PGxpbmUgeDE9IjEyIiB5MT0iMC43NSIgeDI9IjEyIiB5Mj0iMjMuMjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41cHgiPjwvbGluZT48L3N2Zz4=", bd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Md,
  default: Id
}, Symbol.toStringTag, { value: "Module" })), yd = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M13.341093749999999 17.55496875c2.03146875 -0.408375 3.667125 -2.0639062499999996 4.07615625 -4.14796875 0.40903125 2.0840625 2.0442187499999998 3.73959375 4.07578125 4.14796875m0 0.00234375c-2.0315624999999997 0.408375 -3.667125 2.0639062499999996 -4.07615625 4.14796875 -0.40903125 -2.0840625 -2.0443125 -3.73959375 -4.07578125 -4.14796875", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "m19.54621875 12.32025 0.56521875 -0.56521875c0.53071875 -0.53071875 0.8272499999999999 -1.25146875 0.8236875 -2.00203125l-0.0271875 -5.777896875000001c-0.00721875 -1.5429374999999999 -1.25625 -2.791940625 -2.7991875 -2.799225l-5.778 -0.027290625c-0.7505625 -0.003553125 -1.4713124999999998 0.293034375 -2.00203125 0.82374375L1.32765 10.97353125c-0.732223125 0.7321875 -0.7322203125000001 1.91934375 0.000009375 2.6516249999999997l7.13105625 7.131c0.732234375 0.73228125 1.9194093749999999 0.73228125 2.6516906249999996 0l0.94190625 -0.94190625", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M17.75428125 4.329000000000001c-0.1393125 -0.13935 -0.41803125 -0.139359375 -0.5574375 0 -0.1393125 0.13935 -0.1393125 0.418059375 0 0.557409375", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M17.7553125 4.328221875c0.13940625 0.13935 0.13940625 0.418059375 0 0.55741875 -0.1393125 0.13935 -0.41803125 0.13934062500000002 -0.55734375 -0.000009375", strokeWidth: 1.5 })), vd = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xMy4zNDEwOTM3NDk5OTk5OTkgMTcuNTU0OTY4NzVjMi4wMzE0Njg3NSAtMC40MDgzNzUgMy42NjcxMjUgLTIuMDYzOTA2MjQ5OTk5OTk5NiA0LjA3NjE1NjI1IC00LjE0Nzk2ODc1IDAuNDA5MDMxMjUgMi4wODQwNjI1IDIuMDQ0MjE4NzQ5OTk5OTk5OCAzLjczOTU5Mzc1IDQuMDc1NzgxMjUgNC4xNDc5Njg3NW0wIDAuMDAyMzQzNzVjLTIuMDMxNTYyNDk5OTk5OTk5NyAwLjQwODM3NSAtMy42NjcxMjUgMi4wNjM5MDYyNDk5OTk5OTk2IC00LjA3NjE1NjI1IDQuMTQ3OTY4NzUgLTAuNDA5MDMxMjUgLTIuMDg0MDYyNSAtMi4wNDQzMTI1IC0zLjczOTU5Mzc1IC00LjA3NTc4MTI1IC00LjE0Nzk2ODc1IiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0xOS41NDYyMTg3NSAxMi4zMjAyNSAwLjU2NTIxODc1IC0wLjU2NTIxODc1YzAuNTMwNzE4NzUgLTAuNTMwNzE4NzUgMC44MjcyNDk5OTk5OTk5OTk5IC0xLjI1MTQ2ODc1IDAuODIzNjg3NSAtMi4wMDIwMzEyNWwtMC4wMjcxODc1IC01Ljc3Nzg5Njg3NTAwMDAwMWMtMC4wMDcyMTg3NSAtMS41NDI5Mzc0OTk5OTk5OTk5IC0xLjI1NjI1IC0yLjc5MTk0MDYyNSAtMi43OTkxODc1IC0yLjc5OTIyNWwtNS43NzggLTAuMDI3MjkwNjI1Yy0wLjc1MDU2MjUgLTAuMDAzNTUzMTI1IC0xLjQ3MTMxMjQ5OTk5OTk5OTggMC4yOTMwMzQzNzUgLTIuMDAyMDMxMjUgMC44MjM3NDM3NUwxLjMyNzY1IDEwLjk3MzUzMTI1Yy0wLjczMjIyMzEyNSAwLjczMjE4NzUgLTAuNzMyMjIwMzEyNTAwMDAwMSAxLjkxOTM0Mzc1IDAuMDAwMDA5Mzc1IDIuNjUxNjI0OTk5OTk5OTk5N2w3LjEzMTA1NjI1IDcuMTMxYzAuNzMyMjM0Mzc1IDAuNzMyMjgxMjUgMS45MTk0MDkzNzQ5OTk5OTk5IDAuNzMyMjgxMjUgMi42NTE2OTA2MjQ5OTk5OTk2IDBsMC45NDE5MDYyNSAtMC45NDE5MDYyNSIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNy43NTQyODEyNSA0LjMyOTAwMDAwMDAwMDAwMWMtMC4xMzkzMTI1IC0wLjEzOTM1IC0wLjQxODAzMTI1IC0wLjEzOTM1OTM3NSAtMC41NTc0Mzc1IDAgLTAuMTM5MzEyNSAwLjEzOTM1IC0wLjEzOTMxMjUgMC40MTgwNTkzNzUgMCAwLjU1NzQwOTM3NSIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNy43NTUzMTI1IDQuMzI4MjIxODc1YzAuMTM5NDA2MjUgMC4xMzkzNSAwLjEzOTQwNjI1IDAuNDE4MDU5Mzc1IDAgMC41NTc0MTg3NSAtMC4xMzkzMTI1IDAuMTM5MzUgLTAuNDE4MDMxMjUgMC4xMzkzNDA2MjUwMDAwMDAwMiAtMC41NTczNDM3NSAtMC4wMDAwMDkzNzUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+", xd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: yd,
  default: vd
}, Symbol.toStringTag, { value: "Module" })), jd = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 10 10", ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 1.5H1" }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M7.5 5h-5" }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 8.5H1" })), Nd = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMCAxMCI+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTkgMS41SDEiPjwvcGF0aD48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNy41IDVoLTUiPjwvcGF0aD48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNOSA4LjVIMSI+PC9wYXRoPjwvc3ZnPg==", wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: jd,
  default: Nd
}, Symbol.toStringTag, { value: "Module" })), kd = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 10 10", ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M1 1.5h8" }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M1 5h5.5" }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M1 8.5h8" })), Dd = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMCAxMCI+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTEgMS41aDgiPjwvcGF0aD48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMSA1aDUuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xIDguNWg4Ij48L3BhdGg+PC9zdmc+", Sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: kd,
  default: Dd
}, Symbol.toStringTag, { value: "Module" })), Ad = (e) => /* @__PURE__ */ c("svg", { viewBox: "-0.75 -0.75 24 24", xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { d: "m7.152187499999999 4.21875 -6.0375000000000005 6.0365625000000005a1.40625 1.40625 0 0 0 0 1.9884375l6.0375000000000005 6.0375000000000005", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m15.347812499999998 4.21875 6.0375000000000005 6.0365625000000005a1.40625 1.40625 0 0 1 0 1.9884375l-6.0375000000000005 6.0375000000000005", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), Ld = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMC43NSAtMC43NSAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im03LjE1MjE4NzQ5OTk5OTk5OSA0LjIxODc1IC02LjAzNzUwMDAwMDAwMDAwMDUgNi4wMzY1NjI1MDAwMDAwMDA1YTEuNDA2MjUgMS40MDYyNSAwIDAgMCAwIDEuOTg4NDM3NWw2LjAzNzUwMDAwMDAwMDAwMDUgNi4wMzc1MDAwMDAwMDAwMDA1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Im0xNS4zNDc4MTI0OTk5OTk5OTggNC4yMTg3NSA2LjAzNzUwMDAwMDAwMDAwMDUgNi4wMzY1NjI1MDAwMDAwMDA1YTEuNDA2MjUgMS40MDYyNSAwIDAgMSAwIDEuOTg4NDM3NWwtNi4wMzc1MDAwMDAwMDAwMDA1IDYuMDM3NTAwMDAwMDAwMDAwNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", zd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Ad,
  default: Ld
}, Symbol.toStringTag, { value: "Module" })), _d = (e) => /* @__PURE__ */ c("svg", { id: "Regular", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", strokeWidth: 1.5, ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "arrow-corner-left"), /* @__PURE__ */ c("path", { d: "M20.16 3.75 4.25 19.66", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "m4.25 4.66 0 15 15 0", fillRule: "evenodd", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), Td = "data:image/svg+xml;base64,PHN2ZyBpZD0iUmVndWxhciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMS41Ij48ZGVmcz48L2RlZnM+PHRpdGxlPmFycm93LWNvcm5lci1sZWZ0PC90aXRsZT48cGF0aCBkPSJNMjAuMTYgMy43NSA0LjI1IDE5LjY2IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0ibTQuMjUgNC42NiAwIDE1IDE1IDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjwvc3ZnPg==", Cd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: _d,
  default: Td
}, Symbol.toStringTag, { value: "Module" })), Ed = (e) => /* @__PURE__ */ c("svg", { id: "Regular", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", strokeWidth: 1.5, ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "arrow-corner-right"), /* @__PURE__ */ c("path", { d: "m4 3.75 15.91 15.91", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "m4.91 19.66 15 0 0-15", fillRule: "evenodd", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), Ud = "data:image/svg+xml;base64,PHN2ZyBpZD0iUmVndWxhciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMS41Ij48ZGVmcz48L2RlZnM+PHRpdGxlPmFycm93LWNvcm5lci1yaWdodDwvdGl0bGU+PHBhdGggZD0ibTQgMy43NSAxNS45MSAxNS45MSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Im00LjkxIDE5LjY2IDE1IDAgMC0xNSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PC9zdmc+", Zd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Ed,
  default: Ud
}, Symbol.toStringTag, { value: "Module" })), Wd = (e) => /* @__PURE__ */ c("svg", { id: "Regular", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "arrow-down"), /* @__PURE__ */ c("line", { x1: 12, y1: 0.75, x2: 12, y2: 23.25, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }), /* @__PURE__ */ c("polyline", { points: "1.5 12.75 12 23.25 22.5 12.75", fillRule: "evenodd", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" })), Od = "data:image/svg+xml;base64,PHN2ZyBpZD0iUmVndWxhciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxkZWZzPjwvZGVmcz48dGl0bGU+YXJyb3ctZG93bjwvdGl0bGU+PGxpbmUgeDE9IjEyIiB5MT0iMC43NSIgeDI9IjEyIiB5Mj0iMjMuMjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41cHgiPjwvbGluZT48cG9seWxpbmUgcG9pbnRzPSIxLjUgMTIuNzUgMTIgMjMuMjUgMjIuNSAxMi43NSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNXB4Ij48L3BvbHlsaW5lPjwvc3ZnPg==", Pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Wd,
  default: Od
}, Symbol.toStringTag, { value: "Module" })), Rd = (e) => /* @__PURE__ */ c("svg", { id: "Regular", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "arrow-left"), /* @__PURE__ */ c("line", { x1: 23.25, y1: 12, x2: 0.75, y2: 12, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }), /* @__PURE__ */ c("polyline", { points: "11.25 1.5 0.75 12 11.25 22.5", fillRule: "evenodd", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" })), Hd = "data:image/svg+xml;base64,PHN2ZyBpZD0iUmVndWxhciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxkZWZzPjwvZGVmcz48dGl0bGU+YXJyb3ctbGVmdDwvdGl0bGU+PGxpbmUgeDE9IjIzLjI1IiB5MT0iMTIiIHgyPSIwLjc1IiB5Mj0iMTIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41cHgiPjwvbGluZT48cG9seWxpbmUgcG9pbnRzPSIxMS4yNSAxLjUgMC43NSAxMiAxMS4yNSAyMi41IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41cHgiPjwvcG9seWxpbmU+PC9zdmc+", Gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Rd,
  default: Hd
}, Symbol.toStringTag, { value: "Module" })), Yd = (e) => /* @__PURE__ */ c("svg", { id: "Regular", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "arrow-right"), /* @__PURE__ */ c("line", { x1: 0.75, y1: 12, x2: 23.25, y2: 12, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }), /* @__PURE__ */ c("polyline", { points: "12.75 22.5 23.25 12 12.75 1.5", fillRule: "evenodd", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" })), Qd = "data:image/svg+xml;base64,PHN2ZyBpZD0iUmVndWxhciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxkZWZzPjwvZGVmcz48dGl0bGU+YXJyb3ctcmlnaHQ8L3RpdGxlPjxsaW5lIHgxPSIwLjc1IiB5MT0iMTIiIHgyPSIyMy4yNSIgeTI9IjEyIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNXB4Ij48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz0iMTIuNzUgMjIuNSAyMy4yNSAxMiAxMi43NSAxLjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjVweCI+PC9wb2x5bGluZT48L3N2Zz4=", Bd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Yd,
  default: Qd
}, Symbol.toStringTag, { value: "Module" })), Jd = (e) => /* @__PURE__ */ c("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ c("path", { d: "M20.16 20.25L4.25 4.34", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M4.25 19.3398V4.33984H19.25", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), Vd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjE2IDIwLjI1TDQuMjUgNC4zNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQuMjUgMTkuMzM5OFY0LjMzOTg0SDE5LjI1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K", Fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Jd,
  default: Vd
}, Symbol.toStringTag, { value: "Module" })), Xd = (e) => /* @__PURE__ */ c("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ c("path", { d: "M3.84 20.25L19.75 4.34", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M19.75 19.3398V4.33984H4.75", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })), $d = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuODQgMjAuMjVMMTkuNzUgNC4zNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE5Ljc1IDE5LjMzOThWNC4zMzk4NEg0Ljc1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K", qd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Xd,
  default: $d
}, Symbol.toStringTag, { value: "Module" })), Kd = (e) => /* @__PURE__ */ c("svg", { id: "Regular", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "arrow-up"), /* @__PURE__ */ c("line", { x1: 12, y1: 23.25, x2: 12, y2: 0.75, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }), /* @__PURE__ */ c("polyline", { points: "22.5 11.25 12 0.75 1.5 11.25", fillRule: "evenodd", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" })), eu = "data:image/svg+xml;base64,PHN2ZyBpZD0iUmVndWxhciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxkZWZzPjwvZGVmcz48dGl0bGU+YXJyb3ctdXA8L3RpdGxlPjxsaW5lIHgxPSIxMiIgeTE9IjIzLjI1IiB4Mj0iMTIiIHkyPSIwLjc1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNXB4Ij48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz0iMjIuNSAxMS4yNSAxMiAwLjc1IDEuNSAxMS4yNSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNXB4Ij48L3BvbHlsaW5lPjwvc3ZnPg==", tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Kd,
  default: eu
}, Symbol.toStringTag, { value: "Module" })), ru = (e) => /* @__PURE__ */ c("svg", { viewBox: "-0.75 -0.75 24 24", xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { d: "M16.171875 11.25A4.921875 4.921875 0 1 1 11.25 6.328125 4.921875 4.921875 0 0 1 16.171875 11.25Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M16.171875 11.25v2.109375a2.8125 2.8125 0 0 0 5.625 0V11.25a10.5459375 10.5459375 0 1 0 -4.21875 8.4375", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), iu = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMC43NSAtMC43NSAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0xNi4xNzE4NzUgMTEuMjVBNC45MjE4NzUgNC45MjE4NzUgMCAxIDEgMTEuMjUgNi4zMjgxMjUgNC45MjE4NzUgNC45MjE4NzUgMCAwIDEgMTYuMTcxODc1IDExLjI1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNMTYuMTcxODc1IDExLjI1djIuMTA5Mzc1YTIuODEyNSAyLjgxMjUgMCAwIDAgNS42MjUgMFYxMS4yNWExMC41NDU5Mzc1IDEwLjU0NTkzNzUgMCAxIDAgLTQuMjE4NzUgOC40Mzc1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjwvc3ZnPg==", nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: ru,
  default: iu
}, Symbol.toStringTag, { value: "Module" })), ou = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M0.9375 20.0625h1.8403125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19.723125 20.0625H21.5625", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15.02625 20.0625h1.8403125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10.3303125 20.0625h1.839375", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5.6343749999999995 20.0625h1.839375", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "m0.9375 16.53 4.790625 -6.511875a3.1565625 3.1565625 0 0 1 3.1753125 -1.2225000000000001l4.685625 0.9590624999999999a3.1565625 3.1565625 0 0 0 3.17625 -1.2215624999999999l4.790625 -6.511875", strokeWidth: 1.5 })), au = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0wLjkzNzUgMjAuMDYyNWgxLjg0MDMxMjUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE5LjcyMzEyNSAyMC4wNjI1SDIxLjU2MjUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE1LjAyNjI1IDIwLjA2MjVoMS44NDAzMTI1IiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xMC4zMzAzMTI1IDIwLjA2MjVoMS44MzkzNzUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTUuNjM0Mzc0OTk5OTk5OTk5NSAyMC4wNjI1aDEuODM5Mzc1IiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0wLjkzNzUgMTYuNTMgNC43OTA2MjUgLTYuNTExODc1YTMuMTU2NTYyNSAzLjE1NjU2MjUgMCAwIDEgMy4xNzUzMTI1IC0xLjIyMjUwMDAwMDAwMDAwMDFsNC42ODU2MjUgMC45NTkwNjI0OTk5OTk5OTk5YTMuMTU2NTYyNSAzLjE1NjU2MjUgMCAwIDAgMy4xNzYyNSAtMS4yMjE1NjI0OTk5OTk5OTk5bDQuNzkwNjI1IC02LjUxMTg3NSIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", su = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: ou,
  default: au
}, Symbol.toStringTag, { value: "Module" })), cu = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M17.578125 4.21875H2.109375A1.40625 1.40625 0 0 0 0.703125 5.625v8.4375a1.40625 1.40625 0 0 0 1.40625 1.40625h15.46875a1.40625 1.40625 0 0 0 1.40625 -1.40625V5.625a1.40625 1.40625 0 0 0 -1.40625 -1.40625Z", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M3.8671875 7.734375a0.3515625 0.3515625 0 1 1 0 -0.703125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M3.8671875 7.734375a0.3515625 0.3515625 0 1 0 0 -0.703125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M15.8203125 12.65625a0.3515625 0.3515625 0 0 1 0 -0.703125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M15.8203125 12.65625a0.3515625 0.3515625 0 0 0 0 -0.703125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9.84375 12.65625a2.8125 2.8125 0 1 0 0 -5.625 2.8125 2.8125 0 0 0 0 5.625Z", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M21.796875 8.4375v8.4375a1.40625 1.40625 0 0 1 -1.40625 1.40625H4.921875", strokeWidth: 1.5 })), lu = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNy41NzgxMjUgNC4yMTg3NUgyLjEwOTM3NUExLjQwNjI1IDEuNDA2MjUgMCAwIDAgMC43MDMxMjUgNS42MjV2OC40Mzc1YTEuNDA2MjUgMS40MDYyNSAwIDAgMCAxLjQwNjI1IDEuNDA2MjVoMTUuNDY4NzVhMS40MDYyNSAxLjQwNjI1IDAgMCAwIDEuNDA2MjUgLTEuNDA2MjVWNS42MjVhMS40MDYyNSAxLjQwNjI1IDAgMCAwIC0xLjQwNjI1IC0xLjQwNjI1WiIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgZD0iTTMuODY3MTg3NSA3LjczNDM3NWEwLjM1MTU2MjUgMC4zNTE1NjI1IDAgMSAxIDAgLTAuNzAzMTI1IiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBkPSJNMy44NjcxODc1IDcuNzM0Mzc1YTAuMzUxNTYyNSAwLjM1MTU2MjUgMCAxIDAgMCAtMC43MDMxMjUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGQ9Ik0xNS44MjAzMTI1IDEyLjY1NjI1YTAuMzUxNTYyNSAwLjM1MTU2MjUgMCAwIDEgMCAtMC43MDMxMjUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGQ9Ik0xNS44MjAzMTI1IDEyLjY1NjI1YTAuMzUxNTYyNSAwLjM1MTU2MjUgMCAwIDAgMCAtMC43MDMxMjUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTkuODQzNzUgMTIuNjU2MjVhMi44MTI1IDIuODEyNSAwIDEgMCAwIC01LjYyNSAyLjgxMjUgMi44MTI1IDAgMCAwIDAgNS42MjVaIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0yMS43OTY4NzUgOC40Mzc1djguNDM3NWExLjQwNjI1IDEuNDA2MjUgMCAwIDEgLTEuNDA2MjUgMS40MDYyNUg0LjkyMTg3NSIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", du = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: cu,
  default: lu
}, Symbol.toStringTag, { value: "Module" })), uu = (e) => /* @__PURE__ */ c("svg", { viewBox: "-0.75 -0.75 24 24", xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { d: "M12.1875 21.474375a15.9271875 15.9271875 0 0 1 8.3025 -3.646875 1.5 1.5 0 0 0 1.3040625000000001 -1.4878125V2.2171875a1.5121875 1.5121875 0 0 0 -1.7203125 -1.5A16.009687500000002 16.009687500000002 0 0 0 12.1875 4.3125a1.53375 1.53375 0 0 1 -1.875 0A16.009687500000002 16.009687500000002 0 0 0 2.4234375 0.7190625 1.5121875 1.5121875 0 0 0 0.703125 2.2171875v14.1225a1.5 1.5 0 0 0 1.3040625000000001 1.4878125A15.9271875 15.9271875 0 0 1 10.3125 21.474375a1.5309375 1.5309375 0 0 0 1.875 0Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m11.25 4.629375 0 17.1665625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), gu = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMC43NSAtMC43NSAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0xMi4xODc1IDIxLjQ3NDM3NWExNS45MjcxODc1IDE1LjkyNzE4NzUgMCAwIDEgOC4zMDI1IC0zLjY0Njg3NSAxLjUgMS41IDAgMCAwIDEuMzA0MDYyNTAwMDAwMDAwMSAtMS40ODc4MTI1VjIuMjE3MTg3NWExLjUxMjE4NzUgMS41MTIxODc1IDAgMCAwIC0xLjcyMDMxMjUgLTEuNUExNi4wMDk2ODc1MDAwMDAwMDIgMTYuMDA5Njg3NTAwMDAwMDAyIDAgMCAwIDEyLjE4NzUgNC4zMTI1YTEuNTMzNzUgMS41MzM3NSAwIDAgMSAtMS44NzUgMEExNi4wMDk2ODc1MDAwMDAwMDIgMTYuMDA5Njg3NTAwMDAwMDAyIDAgMCAwIDIuNDIzNDM3NSAwLjcxOTA2MjUgMS41MTIxODc1IDEuNTEyMTg3NSAwIDAgMCAwLjcwMzEyNSAyLjIxNzE4NzV2MTQuMTIyNWExLjUgMS41IDAgMCAwIDEuMzA0MDYyNTAwMDAwMDAwMSAxLjQ4NzgxMjVBMTUuOTI3MTg3NSAxNS45MjcxODc1IDAgMCAxIDEwLjMxMjUgMjEuNDc0Mzc1YTEuNTMwOTM3NSAxLjUzMDkzNzUgMCAwIDAgMS44NzUgMFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0ibTExLjI1IDQuNjI5Mzc1IDAgMTcuMTY2NTYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", hu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: uu,
  default: gu
}, Symbol.toStringTag, { value: "Module" })), pu = (e) => /* @__PURE__ */ c("svg", { viewBox: "-0.75 -0.75 24 24", xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { d: "m7.152187499999999 4.21875 -6.0375000000000005 6.0365625000000005a1.40625 1.40625 0 0 0 0 1.9884375l6.0375000000000005 6.0375000000000005", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m15.347812499999998 4.21875 6.0375000000000005 6.0365625000000005a1.40625 1.40625 0 0 1 0 1.9884375l-6.0375000000000005 6.0375000000000005", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), mu = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMC43NSAtMC43NSAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im03LjE1MjE4NzQ5OTk5OTk5OSA0LjIxODc1IC02LjAzNzUwMDAwMDAwMDAwMDUgNi4wMzY1NjI1MDAwMDAwMDA1YTEuNDA2MjUgMS40MDYyNSAwIDAgMCAwIDEuOTg4NDM3NWw2LjAzNzUwMDAwMDAwMDAwMDUgNi4wMzc1MDAwMDAwMDAwMDA1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Im0xNS4zNDc4MTI0OTk5OTk5OTggNC4yMTg3NSA2LjAzNzUwMDAwMDAwMDAwMDUgNi4wMzY1NjI1MDAwMDAwMDA1YTEuNDA2MjUgMS40MDYyNSAwIDAgMSAwIDEuOTg4NDM3NWwtNi4wMzc1MDAwMDAwMDAwMDA1IDYuMDM3NTAwMDAwMDAwMDAwNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: pu,
  default: mu
}, Symbol.toStringTag, { value: "Module" })), Mu = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "layout-module-1"), /* @__PURE__ */ c("path", { d: "M2.109375 0.7003125h5.625s1.40625 0 1.40625 1.40625v5.625s0 1.40625 -1.40625 1.40625h-5.625s-1.40625 0 -1.40625 -1.40625v-5.625s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M2.109375 13.356562499999999h5.625s1.40625 0 1.40625 1.40625v5.625s0 1.40625 -1.40625 1.40625h-5.625s-1.40625 0 -1.40625 -1.40625v-5.625s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M14.765625 0.7003125h5.625s1.40625 0 1.40625 1.40625v5.625s0 1.40625 -1.40625 1.40625h-5.625s-1.40625 0 -1.40625 -1.40625v-5.625s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M14.765625 13.356562499999999h5.625s1.40625 0 1.40625 1.40625v5.625s0 1.40625 -1.40625 1.40625h-5.625s-1.40625 0 -1.40625 -1.40625v-5.625s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), Iu = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxkZWZzPjwvZGVmcz48dGl0bGU+bGF5b3V0LW1vZHVsZS0xPC90aXRsZT48cGF0aCBkPSJNMi4xMDkzNzUgMC43MDAzMTI1aDUuNjI1czEuNDA2MjUgMCAxLjQwNjI1IDEuNDA2MjV2NS42MjVzMCAxLjQwNjI1IC0xLjQwNjI1IDEuNDA2MjVoLTUuNjI1cy0xLjQwNjI1IDAgLTEuNDA2MjUgLTEuNDA2MjV2LTUuNjI1czAgLTEuNDA2MjUgMS40MDYyNSAtMS40MDYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNMi4xMDkzNzUgMTMuMzU2NTYyNDk5OTk5OTk5aDUuNjI1czEuNDA2MjUgMCAxLjQwNjI1IDEuNDA2MjV2NS42MjVzMCAxLjQwNjI1IC0xLjQwNjI1IDEuNDA2MjVoLTUuNjI1cy0xLjQwNjI1IDAgLTEuNDA2MjUgLTEuNDA2MjV2LTUuNjI1czAgLTEuNDA2MjUgMS40MDYyNSAtMS40MDYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNMTQuNzY1NjI1IDAuNzAwMzEyNWg1LjYyNXMxLjQwNjI1IDAgMS40MDYyNSAxLjQwNjI1djUuNjI1czAgMS40MDYyNSAtMS40MDYyNSAxLjQwNjI1aC01LjYyNXMtMS40MDYyNSAwIC0xLjQwNjI1IC0xLjQwNjI1di01LjYyNXMwIC0xLjQwNjI1IDEuNDA2MjUgLTEuNDA2MjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0iTTE0Ljc2NTYyNSAxMy4zNTY1NjI0OTk5OTk5OTloNS42MjVzMS40MDYyNSAwIDEuNDA2MjUgMS40MDYyNXY1LjYyNXMwIDEuNDA2MjUgLTEuNDA2MjUgMS40MDYyNWgtNS42MjVzLTEuNDA2MjUgMCAtMS40MDYyNSAtMS40MDYyNXYtNS42MjVzMCAtMS40MDYyNSAxLjQwNjI1IC0xLjQwNjI1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjwvc3ZnPg==", bu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Mu,
  default: Iu
}, Symbol.toStringTag, { value: "Module" })), yu = (e) => /* @__PURE__ */ c("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", strokeWidth: 1.5, ...e }, /* @__PURE__ */ c("path", { d: "M6,13.223,8.45,16.7a1.049,1.049,0,0,0,1.707.051L18,6.828", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M0.750 11.999 A11.250 11.250 0 1 0 23.250 11.999 A11.250 11.250 0 1 0 0.750 11.999 Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), vu = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxwYXRoIGQ9Ik02LDEzLjIyMyw4LjQ1LDE2LjdhMS4wNDksMS4wNDksMCwwLDAsMS43MDcuMDUxTDE4LDYuODI4IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTTAuNzUwIDExLjk5OSBBMTEuMjUwIDExLjI1MCAwIDEgMCAyMy4yNTAgMTEuOTk5IEExMS4yNTAgMTEuMjUwIDAgMSAwIDAuNzUwIDExLjk5OSBaIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PC9zdmc+", xu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: yu,
  default: vu
}, Symbol.toStringTag, { value: "Module" })), ju = (e) => /* @__PURE__ */ c("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", strokeWidth: 1.5, ...e }, /* @__PURE__ */ c("path", { style: {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, d: "m1.6 14.512 7.065 7.065 13.676-19", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" })), Nu = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLXdpZHRoPSIxLjUiPgogIDxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7IiBkPSJtMS42IDE0LjUxMiA3LjA2NSA3LjA2NSAxMy42NzYtMTkiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4=", wu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: ju,
  default: Nu
}, Symbol.toStringTag, { value: "Module" })), ku = (e) => /* @__PURE__ */ c("svg", { id: "Regular", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "arrow-down-1"), /* @__PURE__ */ c("path", { d: "M23.25,7.311,12.53,18.03a.749.749,0,0,1-1.06,0L.75,7.311", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px", fillRule: "evenodd" })), Du = "data:image/svg+xml;base64,PHN2ZyBpZD0iUmVndWxhciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxkZWZzPjwvZGVmcz48dGl0bGU+YXJyb3ctZG93bi0xPC90aXRsZT48cGF0aCBkPSJNMjMuMjUsNy4zMTEsMTIuNTMsMTguMDNhLjc0OS43NDksMCwwLDEtMS4wNiwwTC43NSw3LjMxMSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjVweCIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+", Su = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: ku,
  default: Du
}, Symbol.toStringTag, { value: "Module" })), Au = (e) => /* @__PURE__ */ c("svg", { id: "Regular", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "arrow-left-1"), /* @__PURE__ */ c("path", { d: "M16.25,23.25,5.53,12.53a.749.749,0,0,1,0-1.06L16.25.75", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px", fillRule: "evenodd" })), Lu = "data:image/svg+xml;base64,PHN2ZyBpZD0iUmVndWxhciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxkZWZzPjwvZGVmcz48dGl0bGU+YXJyb3ctbGVmdC0xPC90aXRsZT48cGF0aCBkPSJNMTYuMjUsMjMuMjUsNS41MywxMi41M2EuNzQ5Ljc0OSwwLDAsMSwwLTEuMDZMMTYuMjUuNzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41cHgiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjwvc3ZnPg==", zu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Au,
  default: Lu
}, Symbol.toStringTag, { value: "Module" })), _u = (e) => /* @__PURE__ */ c("svg", { id: "Regular", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "arrow-right-1"), /* @__PURE__ */ c("path", { d: "M5.5.75,16.22,11.47a.749.749,0,0,1,0,1.06L5.5,23.25", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px", fillRule: "evenodd" })), Tu = "data:image/svg+xml;base64,PHN2ZyBpZD0iUmVndWxhciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxkZWZzPjwvZGVmcz48dGl0bGU+YXJyb3ctcmlnaHQtMTwvdGl0bGU+PHBhdGggZD0iTTUuNS43NSwxNi4yMiwxMS40N2EuNzQ5Ljc0OSwwLDAsMSwwLDEuMDZMNS41LDIzLjI1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNXB4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L3N2Zz4=", Cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: _u,
  default: Tu
}, Symbol.toStringTag, { value: "Module" })), Eu = (e) => /* @__PURE__ */ c("svg", { id: "Regular", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "arrow-up-1"), /* @__PURE__ */ c("path", { d: "M.75,17.189,11.47,6.47a.749.749,0,0,1,1.06,0L23.25,17.189", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px", fillRule: "evenodd" })), Uu = "data:image/svg+xml;base64,PHN2ZyBpZD0iUmVndWxhciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxkZWZzPjwvZGVmcz48dGl0bGU+YXJyb3ctdXAtMTwvdGl0bGU+PHBhdGggZD0iTS43NSwxNy4xODksMTEuNDcsNi40N2EuNzQ5Ljc0OSwwLDAsMSwxLjA2LDBMMjMuMjUsMTcuMTg5IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNXB4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L3N2Zz4=", Zu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Eu,
  default: Uu
}, Symbol.toStringTag, { value: "Module" })), Wu = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "close"), /* @__PURE__ */ c("line", { x1: 0.75, y1: 23.249, x2: 23.25, y2: 0.749, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }), /* @__PURE__ */ c("line", { x1: 23.25, y1: 23.249, x2: 0.75, y2: 0.749, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" })), Ou = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PC9kZWZzPjx0aXRsZT5jbG9zZTwvdGl0bGU+PGxpbmUgeDE9IjAuNzUiIHkxPSIyMy4yNDkiIHgyPSIyMy4yNSIgeTI9IjAuNzQ5IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNXB4Ij48L2xpbmU+PGxpbmUgeDE9IjIzLjI1IiB5MT0iMjMuMjQ5IiB4Mj0iMC43NSIgeTI9IjAuNzQ5IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNXB4Ij48L2xpbmU+PC9zdmc+", Pu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Wu,
  default: Ou
}, Symbol.toStringTag, { value: "Module" })), Ru = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px", d: "M12.658 2a9.307 9.307 0 0 0-8.15 4.788 9.326 9.326 0 0 0 .23 9.456L2 22l5.75-2.74a9.32 9.32 0 0 0 13.894-5.372 9.341 9.341 0 0 0-1.532-8.185A9.328 9.328 0 0 0 12.658 2Z" })), Hu = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjVweCIgZD0iTTEyLjY1OCAyYTkuMzA3IDkuMzA3IDAgMCAwLTguMTUgNC43ODggOS4zMjYgOS4zMjYgMCAwIDAgLjIzIDkuNDU2TDIgMjJsNS43NS0yLjc0YTkuMzIgOS4zMiAwIDAgMCAxMy44OTQtNS4zNzIgOS4zNDEgOS4zNDEgMCAwIDAtMS41MzItOC4xODVBOS4zMjggOS4zMjggMCAwIDAgMTIuNjU4IDJaIi8+Cjwvc3ZnPg==", Gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Ru,
  default: Hu
}, Symbol.toStringTag, { value: "Module" })), Yu = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", strokeWidth: "1.5px", ...e }, /* @__PURE__ */ c("g", null, /* @__PURE__ */ c("path", { d: "M21.92,17l1.32-10a.75.75,0,0,0-1.08-.78L17.88,9.56a.74.74,0,0,1-1.09-.16L12.56,3.22a.74.74,0,0,0-1.12,0L7.21,9.4a.74.74,0,0,1-1.09.16L1.84,6.3a.75.75,0,0,0-1.08.78L2.08,17Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("line", { x1: 2.25, y1: 21.03, x2: 21.75, y2: 21.03, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }))), Qu = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjVweCI+PGc+PHBhdGggZD0iTTIxLjkyLDE3bDEuMzItMTBhLjc1Ljc1LDAsMCwwLTEuMDgtLjc4TDE3Ljg4LDkuNTZhLjc0Ljc0LDAsMCwxLTEuMDktLjE2TDEyLjU2LDMuMjJhLjc0Ljc0LDAsMCwwLTEuMTIsMEw3LjIxLDkuNGEuNzQuNzQsMCwwLDEtMS4wOS4xNkwxLjg0LDYuM2EuNzUuNzUsMCwwLDAtMS4wOC43OEwyLjA4LDE3WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxsaW5lIHgxPSIyLjI1IiB5MT0iMjEuMDMiIHgyPSIyMS43NSIgeTI9IjIxLjAzIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L2xpbmU+PC9nPjwvc3ZnPg==", Bu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Yu,
  default: Qu
}, Symbol.toStringTag, { value: "Module" })), Ju = (e) => /* @__PURE__ */ c("svg", { viewBox: "-0.75 -0.75 24 24", xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { d: "m2.109375 20.390625 18.28125 -18.28125Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M14.765625 17.578125a2.8125 2.8125 0 1 0 5.625 0 2.8125 2.8125 0 1 0 -5.625 0Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M2.109375 4.921875a2.8125 2.8125 0 1 0 5.625 0 2.8125 2.8125 0 1 0 -5.625 0Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), Vu = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMC43NSAtMC43NSAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im0yLjEwOTM3NSAyMC4zOTA2MjUgMTguMjgxMjUgLTE4LjI4MTI1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNMTQuNzY1NjI1IDE3LjU3ODEyNWEyLjgxMjUgMi44MTI1IDAgMSAwIDUuNjI1IDAgMi44MTI1IDIuODEyNSAwIDEgMCAtNS42MjUgMFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0iTTIuMTA5Mzc1IDQuOTIxODc1YTIuODEyNSAyLjgxMjUgMCAxIDAgNS42MjUgMCAyLjgxMjUgMi44MTI1IDAgMSAwIC01LjYyNSAwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4K", Fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Ju,
  default: Vu
}, Symbol.toStringTag, { value: "Module" })), Xu = (e) => /* @__PURE__ */ c("svg", { viewBox: "-0.75 -0.75 24 24", xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { d: "m11.2509375 3.515625 0 11.25", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m7.0321875 10.546875 4.21875 4.21875 4.21875 -4.21875", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M21.797812500000003 14.765625v1.40625a2.8125 2.8125 0 0 1 -2.8125 2.8125h-15.46875a2.8125 2.8125 0 0 1 -2.8125 -2.8125v-1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), $u = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMC43NSAtMC43NSAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im0xMS4yNTA5Mzc1IDMuNTE1NjI1IDAgMTEuMjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0ibTcuMDMyMTg3NSAxMC41NDY4NzUgNC4yMTg3NSA0LjIxODc1IDQuMjE4NzUgLTQuMjE4NzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0iTTIxLjc5NzgxMjUwMDAwMDAwMyAxNC43NjU2MjV2MS40MDYyNWEyLjgxMjUgMi44MTI1IDAgMCAxIC0yLjgxMjUgMi44MTI1aC0xNS40Njg3NWEyLjgxMjUgMi44MTI1IDAgMCAxIC0yLjgxMjUgLTIuODEyNXYtMS40MDYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", qu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Xu,
  default: $u
}, Symbol.toStringTag, { value: "Module" })), Ku = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15.703125 4.21875V1.640625a0.9375 0.9375 0 0 0 -0.9375 -0.9375h-13.125a0.9375 0.9375 0 0 0 -0.9375 0.9375v13.125a0.9375 0.9375 0 0 0 0.9375 0.9375H4.21875", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M6.796875 7.734375a0.9375 0.9375 0 0 1 0.9375 -0.9375h13.125a0.9375 0.9375 0 0 1 0.9375 0.9375v13.125a0.9375 0.9375 0 0 1 -0.9375 0.9375h-13.125a0.9375 0.9375 0 0 1 -0.9375 -0.9375v-13.125Z", strokeWidth: 1.5 })), e0 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNS43MDMxMjUgNC4yMTg3NVYxLjY0MDYyNWEwLjkzNzUgMC45Mzc1IDAgMCAwIC0wLjkzNzUgLTAuOTM3NWgtMTMuMTI1YTAuOTM3NSAwLjkzNzUgMCAwIDAgLTAuOTM3NSAwLjkzNzV2MTMuMTI1YTAuOTM3NSAwLjkzNzUgMCAwIDAgMC45Mzc1IDAuOTM3NUg0LjIxODc1IiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNi43OTY4NzUgNy43MzQzNzVhMC45Mzc1IDAuOTM3NSAwIDAgMSAwLjkzNzUgLTAuOTM3NWgxMy4xMjVhMC45Mzc1IDAuOTM3NSAwIDAgMSAwLjkzNzUgMC45Mzc1djEzLjEyNWEwLjkzNzUgMC45Mzc1IDAgMCAxIC0wLjkzNzUgMC45Mzc1aC0xMy4xMjVhMC45Mzc1IDAuOTM3NSAwIDAgMSAtMC45Mzc1IC0wLjkzNzV2LTEzLjEyNVoiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+", t0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Ku,
  default: e0
}, Symbol.toStringTag, { value: "Module" })), r0 = (e) => /* @__PURE__ */ c("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ c("circle", { cx: 6, cy: 12, r: 1.5, fill: "currentColor" }), /* @__PURE__ */ c("circle", { cx: 12, cy: 12, r: 1.5, fill: "currentColor" }), /* @__PURE__ */ c("path", { d: "M19.5 12C19.5 12.8284 18.8284 13.5 18 13.5C17.1716 13.5 16.5 12.8284 16.5 12C16.5 11.1716 17.1716 10.5 18 10.5C18.8284 10.5 19.5 11.1716 19.5 12Z", fill: "currentColor" })), i0 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNiIgY3k9IjEyIiByPSIxLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8cGF0aCBkPSJNMTkuNSAxMkMxOS41IDEyLjgyODQgMTguODI4NCAxMy41IDE4IDEzLjVDMTcuMTcxNiAxMy41IDE2LjUgMTIuODI4NCAxNi41IDEyQzE2LjUgMTEuMTcxNiAxNy4xNzE2IDEwLjUgMTggMTAuNUMxOC44Mjg0IDEwLjUgMTkuNSAxMS4xNzE2IDE5LjUgMTJaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==", n0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: r0,
  default: i0
}, Symbol.toStringTag, { value: "Module" })), o0 = (e) => /* @__PURE__ */ c("svg", { viewBox: "-0.75 -0.75 24 24", xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { d: "M10.546875 16.171875a5.625 5.625 0 1 0 11.25 0 5.625 5.625 0 1 0 -11.25 0Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m18.67875 14.536875 -2.7234374999999997 3.6309375000000004a0.705 0.705 0 0 1 -1.0603125 0.0759375l-1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M7.734375 14.765625h-5.625a1.40625 1.40625 0 0 1 -1.40625 -1.40625v-11.25a1.40625 1.40625 0 0 1 1.40625 -1.40625h16.875a1.40625 1.40625 0 0 1 1.40625 1.40625V8.4375", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m20.0728125 1.21875 -7.635 5.8725000000000005a3.10125 3.10125 0 0 1 -3.781875 0L1.0209375 1.21875", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), a0 = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMC43NSAtMC43NSAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0xMC41NDY4NzUgMTYuMTcxODc1YTUuNjI1IDUuNjI1IDAgMSAwIDExLjI1IDAgNS42MjUgNS42MjUgMCAxIDAgLTExLjI1IDBaIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Im0xOC42Nzg3NSAxNC41MzY4NzUgLTIuNzIzNDM3NDk5OTk5OTk5NyAzLjYzMDkzNzUwMDAwMDAwMDRhMC43MDUgMC43MDUgMCAwIDEgLTEuMDYwMzEyNSAwLjA3NTkzNzVsLTEuNDA2MjUgLTEuNDA2MjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0iTTcuNzM0Mzc1IDE0Ljc2NTYyNWgtNS42MjVhMS40MDYyNSAxLjQwNjI1IDAgMCAxIC0xLjQwNjI1IC0xLjQwNjI1di0xMS4yNWExLjQwNjI1IDEuNDA2MjUgMCAwIDEgMS40MDYyNSAtMS40MDYyNWgxNi44NzVhMS40MDYyNSAxLjQwNjI1IDAgMCAxIDEuNDA2MjUgMS40MDYyNVY4LjQzNzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0ibTIwLjA3MjgxMjUgMS4yMTg3NSAtNy42MzUgNS44NzI1MDAwMDAwMDAwMDA1YTMuMTAxMjUgMy4xMDEyNSAwIDAgMSAtMy43ODE4NzUgMEwxLjAyMDkzNzUgMS4yMTg3NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", s0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: o0,
  default: a0
}, Symbol.toStringTag, { value: "Module" })), c0 = (e) => /* @__PURE__ */ c("svg", { viewBox: "-0.75 -0.75 24 24", xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { d: "m1.40625 4.453125 19.6875 0 0 14.0625 -19.6875 0Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m20.7759375 4.96875 -7.635 5.8725000000000005a3.10125 3.10125 0 0 1 -3.781875 0L1.7240625 4.96875", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), l0 = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMC43NSAtMC43NSAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im0xLjQwNjI1IDQuNDUzMTI1IDE5LjY4NzUgMCAwIDE0LjA2MjUgLTE5LjY4NzUgMFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0ibTIwLjc3NTkzNzUgNC45Njg3NSAtNy42MzUgNS44NzI1MDAwMDAwMDAwMDA1YTMuMTAxMjUgMy4xMDEyNSAwIDAgMSAtMy43ODE4NzUgMEwxLjcyNDA2MjUgNC45Njg3NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", d0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: c0,
  default: l0
}, Symbol.toStringTag, { value: "Module" })), u0 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("path", { d: "M21.796875 12.421875v5.859375a0.9375 0.9375 0 0 1 -0.9375 0.9375H1.640625a0.9375 0.9375 0 0 1 -0.9375 -0.9375V8.671875a0.9375 0.9375 0 0 1 0.9375 -0.9375H8.4375", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M18.125625 13.300312499999999A5.15625 5.15625 0 1 1 21.5625 8.4375", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M14.6878125 8.4375a1.7184375 1.7184375 0 1 0 3.436875 0 1.7184375 1.7184375 0 1 0 -3.436875 0", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M18.1246875 8.4375A1.719375 1.719375 0 0 0 21.5625 8.4375", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m4.3706249999999995 10.9378125 0 5.077500000000001", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), g0 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxkZWZzPjwvZGVmcz48cGF0aCBkPSJNMjEuNzk2ODc1IDEyLjQyMTg3NXY1Ljg1OTM3NWEwLjkzNzUgMC45Mzc1IDAgMCAxIC0wLjkzNzUgMC45Mzc1SDEuNjQwNjI1YTAuOTM3NSAwLjkzNzUgMCAwIDEgLTAuOTM3NSAtMC45Mzc1VjguNjcxODc1YTAuOTM3NSAwLjkzNzUgMCAwIDEgMC45Mzc1IC0wLjkzNzVIOC40Mzc1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Ik0xOC4xMjU2MjUgMTMuMzAwMzEyNDk5OTk5OTk5QTUuMTU2MjUgNS4xNTYyNSAwIDEgMSAyMS41NjI1IDguNDM3NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNMTQuNjg3ODEyNSA4LjQzNzVhMS43MTg0Mzc1IDEuNzE4NDM3NSAwIDEgMCAzLjQzNjg3NSAwIDEuNzE4NDM3NSAxLjcxODQzNzUgMCAxIDAgLTMuNDM2ODc1IDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0iTTE4LjEyNDY4NzUgOC40Mzc1QTEuNzE5Mzc1IDEuNzE5Mzc1IDAgMCAwIDIxLjU2MjUgOC40Mzc1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Im00LjM3MDYyNDk5OTk5OTk5OTUgMTAuOTM3ODEyNSAwIDUuMDc3NTAwMDAwMDAwMDAxIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjwvc3ZnPg==", h0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: u0,
  default: g0
}, Symbol.toStringTag, { value: "Module" })), p0 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", height: 24, width: 24, id: "Alert-Triangle--Streamline-Ultimate", ...e }, /* @__PURE__ */ c("desc", null, "Alert Triangle Streamline Icon: https://streamlinehq.com"), /* @__PURE__ */ c("path", { d: "m23.77 20.57 -10 -19A2 2 0 0 0 12 0.5a2 2 0 0 0 -1.77 1.07l-10 19a2 2 0 0 0 0.06 2A2 2 0 0 0 2 23.5h20a2 2 0 0 0 1.77 -2.93ZM11 8.5a1 1 0 0 1 2 0v6a1 1 0 0 1 -2 0ZM12.05 20a1.53 1.53 0 0 1 -1.52 -1.47A1.48 1.48 0 0 1 12 17a1.53 1.53 0 0 1 1.52 1.47A1.48 1.48 0 0 1 12.05 20Z", fill: "currentColor", strokeWidth: 1 })), m0 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiBpZD0iQWxlcnQtVHJpYW5nbGUtLVN0cmVhbWxpbmUtVWx0aW1hdGUiPjxkZXNjPkFsZXJ0IFRyaWFuZ2xlIFN0cmVhbWxpbmUgSWNvbjogaHR0cHM6Ly9zdHJlYW1saW5laHEuY29tPC9kZXNjPjxwYXRoIGQ9Im0yMy43NyAyMC41NyAtMTAgLTE5QTIgMiAwIDAgMCAxMiAwLjVhMiAyIDAgMCAwIC0xLjc3IDEuMDdsLTEwIDE5YTIgMiAwIDAgMCAwLjA2IDJBMiAyIDAgMCAwIDIgMjMuNWgyMGEyIDIgMCAwIDAgMS43NyAtMi45M1pNMTEgOC41YTEgMSAwIDAgMSAyIDB2NmExIDEgMCAwIDEgLTIgMFpNMTIuMDUgMjBhMS41MyAxLjUzIDAgMCAxIC0xLjUyIC0xLjQ3QTEuNDggMS40OCAwIDAgMSAxMiAxN2ExLjUzIDEuNTMgMCAwIDEgMS41MiAxLjQ3QTEuNDggMS40OCAwIDAgMSAxMi4wNSAyMFoiIGZpbGw9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9zdmc+", f0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: p0,
  default: m0
}, Symbol.toStringTag, { value: "Module" })), M0 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18.09646875 20.3938125c0.674625 0 1.219125 -0.54459375 1.219125 -1.21921875V5.666521875c0 -0.325096875 -0.13003125 -0.6420750000000001 -0.36571875 -0.8696531249999999l-2.43825 -2.34075c-0.227625 -0.227578125 -0.5364375 -0.349490625 -0.85340625 -0.349490625H4.4042625c-0.674596875 0 -1.21914375 0.544546875 -1.21914375 1.21914375V19.17459375c0 0.674625 0.544546875 1.21921875 1.21914375 1.21921875H18.09646875Z", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "m8.476865625 12.861375 2.774446875 2.77453125 2.77453125 -2.77453125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "m11.2490625 15.63534375 0 -8.770715625", strokeWidth: 1.5 })), I0 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xOC4wOTY0Njg3NSAyMC4zOTM4MTI1YzAuNjc0NjI1IDAgMS4yMTkxMjUgLTAuNTQ0NTkzNzUgMS4yMTkxMjUgLTEuMjE5MjE4NzVWNS42NjY1MjE4NzVjMCAtMC4zMjUwOTY4NzUgLTAuMTMwMDMxMjUgLTAuNjQyMDc1MDAwMDAwMDAwMSAtMC4zNjU3MTg3NSAtMC44Njk2NTMxMjQ5OTk5OTk5bC0yLjQzODI1IC0yLjM0MDc1Yy0wLjIyNzYyNSAtMC4yMjc1NzgxMjUgLTAuNTM2NDM3NSAtMC4zNDk0OTA2MjUgLTAuODUzNDA2MjUgLTAuMzQ5NDkwNjI1SDQuNDA0MjYyNWMtMC42NzQ1OTY4NzUgMCAtMS4yMTkxNDM3NSAwLjU0NDU0Njg3NSAtMS4yMTkxNDM3NSAxLjIxOTE0Mzc1VjE5LjE3NDU5Mzc1YzAgMC42NzQ2MjUgMC41NDQ1NDY4NzUgMS4yMTkyMTg3NSAxLjIxOTE0Mzc1IDEuMjE5MjE4NzVIMTguMDk2NDY4NzVaIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im04LjQ3Njg2NTYyNSAxMi44NjEzNzUgMi43NzQ0NDY4NzUgMi43NzQ1MzEyNSAyLjc3NDUzMTI1IC0yLjc3NDUzMTI1IiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0xMS4yNDkwNjI1IDE1LjYzNTM0Mzc1IDAgLTguNzcwNzE1NjI1IiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjwvc3ZnPg==", b0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: M0,
  default: I0
}, Symbol.toStringTag, { value: "Module" })), y0 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinejoin: "round", strokeWidth: 2, d: "M17.041 12.025 6.91 22.156 1 23l.844-5.91L11.975 6.96m0-5.067 10.132 10.132" }), /* @__PURE__ */ c("path", { fill: "currentColor", d: "M17.885 1.05a3.581 3.581 0 1 1 5.066 5.065l-3.377 3.377-5.066-5.066 3.377-3.377Z" })), v0 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE3LjA0MSAxMi4wMjUgNi45MSAyMi4xNTYgMSAyM2wuODQ0LTUuOTFMMTEuOTc1IDYuOTZtMC01LjA2NyAxMC4xMzIgMTAuMTMyIi8+CiAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTcuODg1IDEuMDVhMy41ODEgMy41ODEgMCAxIDEgNS4wNjYgNS4wNjVsLTMuMzc3IDMuMzc3LTUuMDY2LTUuMDY2IDMuMzc3LTMuMzc3WiIvPgo8L3N2Zz4=", x0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: y0,
  default: v0
}, Symbol.toStringTag, { value: "Module" })), j0 = (e) => /* @__PURE__ */ c("svg", { viewBox: "-0.75 -0.75 24 24", xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { d: "M16.996875 7.265625h-3.99375V5.475a0.9375 0.9375 0 0 1 0.9375 -1.03125h2.8125v-3.75h-4.059375c-3.684375 0 -4.378125 2.8125 -4.378125 4.55625v2.015625h-2.8125v3.75h2.8125v10.78125h4.6875v-10.78125h3.609375Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), N0 = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMC43NSAtMC43NSAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0xNi45OTY4NzUgNy4yNjU2MjVoLTMuOTkzNzVWNS40NzVhMC45Mzc1IDAuOTM3NSAwIDAgMSAwLjkzNzUgLTEuMDMxMjVoMi44MTI1di0zLjc1aC00LjA1OTM3NWMtMy42ODQzNzUgMCAtNC4zNzgxMjUgMi44MTI1IC00LjM3ODEyNSA0LjU1NjI1djIuMDE1NjI1aC0yLjgxMjV2My43NWgyLjgxMjV2MTAuNzgxMjVoNC42ODc1di0xMC43ODEyNWgzLjYwOTM3NVoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+", w0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: j0,
  default: N0
}, Symbol.toStringTag, { value: "Module" })), k0 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10, d: "M6.140625 10.828125c-1.78125 0 -3.28125 1.5 -3.28125 3.28125 0 1.5 0.375 3 1.21875 4.3125l0.65625 1.125c0.84375 1.40625 2.4375 2.25 4.03125 2.25h6.1875c2.625 0 4.6875 -2.0625 4.6875 -4.6875v-6.84375c0 -0.9375 -0.75 -1.6875 -1.6875 -1.6875s-1.6875 0.75 -1.6875 1.6875v-0.9375c0 -0.9375 -0.75 -1.6875 -1.6875 -1.6875s-1.6875 0.75 -1.6875 1.6875v0.28125l0 -0.75c0 -0.9375 -0.75 -1.6875 -1.6875 -1.6875s-1.6875 0.75 -1.6875 1.6875l0 0.215625m0 0.5343749999999999 0 -0.5343749999999999m-3.375 4.753125000000001V2.390625c0 -0.9375 0.75 -1.6875 1.6875 -1.6875s1.6875 0.75 1.6875 1.6875l0 6.684375", strokeWidth: 1.5 })), D0 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTYuMTQwNjI1IDEwLjgyODEyNWMtMS43ODEyNSAwIC0zLjI4MTI1IDEuNSAtMy4yODEyNSAzLjI4MTI1IDAgMS41IDAuMzc1IDMgMS4yMTg3NSA0LjMxMjVsMC42NTYyNSAxLjEyNWMwLjg0Mzc1IDEuNDA2MjUgMi40Mzc1IDIuMjUgNC4wMzEyNSAyLjI1aDYuMTg3NWMyLjYyNSAwIDQuNjg3NSAtMi4wNjI1IDQuNjg3NSAtNC42ODc1di02Ljg0Mzc1YzAgLTAuOTM3NSAtMC43NSAtMS42ODc1IC0xLjY4NzUgLTEuNjg3NXMtMS42ODc1IDAuNzUgLTEuNjg3NSAxLjY4NzV2LTAuOTM3NWMwIC0wLjkzNzUgLTAuNzUgLTEuNjg3NSAtMS42ODc1IC0xLjY4NzVzLTEuNjg3NSAwLjc1IC0xLjY4NzUgMS42ODc1djAuMjgxMjVsMCAtMC43NWMwIC0wLjkzNzUgLTAuNzUgLTEuNjg3NSAtMS42ODc1IC0xLjY4NzVzLTEuNjg3NSAwLjc1IC0xLjY4NzUgMS42ODc1bDAgMC4yMTU2MjVtMCAwLjUzNDM3NDk5OTk5OTk5OTkgMCAtMC41MzQzNzQ5OTk5OTk5OTk5bS0zLjM3NSA0Ljc1MzEyNTAwMDAwMDAwMVYyLjM5MDYyNWMwIC0wLjkzNzUgMC43NSAtMS42ODc1IDEuNjg3NSAtMS42ODc1czEuNjg3NSAwLjc1IDEuNjg3NSAxLjY4NzVsMCA2LjY4NDM3NSIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", S0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: k0,
  default: D0
}, Symbol.toStringTag, { value: "Module" })), A0 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "navigation-menu"), /* @__PURE__ */ c("line", { x1: 2.25, y1: 18.003, x2: 21.75, y2: 18.003, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }), /* @__PURE__ */ c("line", { x1: 2.25, y1: 12.003, x2: 21.75, y2: 12.003, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }), /* @__PURE__ */ c("line", { x1: 2.25, y1: 6.003, x2: 21.75, y2: 6.003, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" })), L0 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PC9kZWZzPjx0aXRsZT5uYXZpZ2F0aW9uLW1lbnU8L3RpdGxlPjxsaW5lIHgxPSIyLjI1IiB5MT0iMTguMDAzIiB4Mj0iMjEuNzUiIHkyPSIxOC4wMDMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41cHgiPjwvbGluZT48bGluZSB4MT0iMi4yNSIgeTE9IjEyLjAwMyIgeDI9IjIxLjc1IiB5Mj0iMTIuMDAzIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNXB4Ij48L2xpbmU+PGxpbmUgeDE9IjIuMjUiIHkxPSI2LjAwMyIgeDI9IjIxLjc1IiB5Mj0iNi4wMDMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41cHgiPjwvbGluZT48L3N2Zz4=", z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: A0,
  default: L0
}, Symbol.toStringTag, { value: "Module" })), _0 = (e) => /* @__PURE__ */ c("svg", { width: 26, height: 24, viewBox: "0 0 26 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ c("path", { d: "M23.651 5.357c-.878-1.717-2.269-2.728-4.173-3.034-1.904-.305-3.541.22-4.912 1.577L13 5.329 11.434 3.9c-1.371-1.356-3.009-1.881-4.913-1.575-1.904.306-3.295 1.317-4.172 3.035-1.222 2.42-.867 4.582 1.063 6.486L13 21.75l9.588-9.907c1.93-1.904 2.285-4.066 1.063-6.486z", strokeLinecap: "round", strokeLinejoin: "round", fill: "none", stroke: "currentColor", strokeWidth: 1.5 })), T0 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNiAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjMuNjUxIDUuMzU3Yy0uODc4LTEuNzE3LTIuMjY5LTIuNzI4LTQuMTczLTMuMDM0LTEuOTA0LS4zMDUtMy41NDEuMjItNC45MTIgMS41NzdMMTMgNS4zMjkgMTEuNDM0IDMuOWMtMS4zNzEtMS4zNTYtMy4wMDktMS44ODEtNC45MTMtMS41NzUtMS45MDQuMzA2LTMuMjk1IDEuMzE3LTQuMTcyIDMuMDM1LTEuMjIyIDIuNDItLjg2NyA0LjU4MiAxLjA2MyA2LjQ4NkwxMyAyMS43NWw5LjU4OC05LjkwN2MxLjkzLTEuOTA0IDIuMjg1LTQuMDY2IDEuMDYzLTYuNDg2eiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+Cjwvc3ZnPg==", C0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: _0,
  default: T0
}, Symbol.toStringTag, { value: "Module" })), E0 = (e) => /* @__PURE__ */ c("svg", { viewBox: "-0.75 -0.75 24 24", xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { d: "M11.8640625 16.8684375a4.273125 4.273125 0 0 1 -5.6690625 2.041875h0a4.273125 4.273125 0 0 1 -2.041875 -5.6690625l1.2956249999999998 -2.7534375a4.2721875 4.2721875 0 0 1 5.668125 -2.041875h0a4.2590625 4.2590625 0 0 1 2.3540625 2.9915624999999997", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M11.105625 5.7253125a4.273125 4.273125 0 0 1 5.6690625 -2.041875h0a4.273125 4.273125 0 0 1 2.041875 5.668125l-1.2956249999999998 2.7534375a4.273125 4.273125 0 0 1 -5.6690625 2.041875h0a4.2496875 4.2496875 0 0 1 -2.205 -2.4553125000000002", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), U0 = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMC43NSAtMC43NSAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0xMS44NjQwNjI1IDE2Ljg2ODQzNzVhNC4yNzMxMjUgNC4yNzMxMjUgMCAwIDEgLTUuNjY5MDYyNSAyLjA0MTg3NWgwYTQuMjczMTI1IDQuMjczMTI1IDAgMCAxIC0yLjA0MTg3NSAtNS42NjkwNjI1bDEuMjk1NjI0OTk5OTk5OTk5OCAtMi43NTM0Mzc1YTQuMjcyMTg3NSA0LjI3MjE4NzUgMCAwIDEgNS42NjgxMjUgLTIuMDQxODc1aDBhNC4yNTkwNjI1IDQuMjU5MDYyNSAwIDAgMSAyLjM1NDA2MjUgMi45OTE1NjI0OTk5OTk5OTk3IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Ik0xMS4xMDU2MjUgNS43MjUzMTI1YTQuMjczMTI1IDQuMjczMTI1IDAgMCAxIDUuNjY5MDYyNSAtMi4wNDE4NzVoMGE0LjI3MzEyNSA0LjI3MzEyNSAwIDAgMSAyLjA0MTg3NSA1LjY2ODEyNWwtMS4yOTU2MjQ5OTk5OTk5OTk4IDIuNzUzNDM3NWE0LjI3MzEyNSA0LjI3MzEyNSAwIDAgMSAtNS42NjkwNjI1IDIuMDQxODc1aDBhNC4yNDk2ODc1IDQuMjQ5Njg3NSAwIDAgMSAtMi4yMDUgLTIuNDU1MzEyNTAwMDAwMDAwMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", Z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: E0,
  default: U0
}, Symbol.toStringTag, { value: "Module" })), W0 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18.09553125 20.3938125c0.674625 0 1.21921875 -0.54459375 1.21921875 -1.21921875V5.666521875c0 -0.325096875 -0.13012500000000002 -0.6420750000000001 -0.3658125 -0.8696531249999999l-2.43825 -2.34075c-0.227625 -0.227578125 -0.5364375 -0.349490625 -0.85340625 -0.349490625H4.40334375c-0.6745875 0 -1.21914375 0.544546875 -1.21914375 1.21914375V19.17459375c0 0.674625 0.5445562500000001 1.21921875 1.21914375 1.21921875h13.692187500000001Z", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "m8.47595625 9.638625 2.7744187499999997 -2.774559375L14.025 9.638625", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "m11.248125 6.864684375 0 8.770659375000001", strokeWidth: 1.5 })), O0 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xOC4wOTU1MzEyNSAyMC4zOTM4MTI1YzAuNjc0NjI1IDAgMS4yMTkyMTg3NSAtMC41NDQ1OTM3NSAxLjIxOTIxODc1IC0xLjIxOTIxODc1VjUuNjY2NTIxODc1YzAgLTAuMzI1MDk2ODc1IC0wLjEzMDEyNTAwMDAwMDAwMDAyIC0wLjY0MjA3NTAwMDAwMDAwMDEgLTAuMzY1ODEyNSAtMC44Njk2NTMxMjQ5OTk5OTk5bC0yLjQzODI1IC0yLjM0MDc1Yy0wLjIyNzYyNSAtMC4yMjc1NzgxMjUgLTAuNTM2NDM3NSAtMC4zNDk0OTA2MjUgLTAuODUzNDA2MjUgLTAuMzQ5NDkwNjI1SDQuNDAzMzQzNzVjLTAuNjc0NTg3NSAwIC0xLjIxOTE0Mzc1IDAuNTQ0NTQ2ODc1IC0xLjIxOTE0Mzc1IDEuMjE5MTQzNzVWMTkuMTc0NTkzNzVjMCAwLjY3NDYyNSAwLjU0NDU1NjI1MDAwMDAwMDEgMS4yMTkyMTg3NSAxLjIxOTE0Mzc1IDEuMjE5MjE4NzVoMTMuNjkyMTg3NTAwMDAwMDAxWiIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJtOC40NzU5NTYyNSA5LjYzODYyNSAyLjc3NDQxODc0OTk5OTk5OTcgLTIuNzc0NTU5Mzc1TDE0LjAyNSA5LjYzODYyNSIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJtMTEuMjQ4MTI1IDYuODY0Njg0Mzc1IDAgOC43NzA2NTkzNzUwMDAwMDEiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+", P0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: W0,
  default: O0
}, Symbol.toStringTag, { value: "Module" })), R0 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", height: 24, width: 24, id: "Information-Circle--Streamline-Ultimate", ...e }, /* @__PURE__ */ c("desc", null, "Information Circle Streamline Icon: https://streamlinehq.com"), /* @__PURE__ */ c("path", { d: "M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm0.25 5a1.5 1.5 0 1 1 -1.5 1.5 1.5 1.5 0 0 1 1.5 -1.5Zm2.25 13.5h-4a1 1 0 0 1 0 -2h0.75a0.25 0.25 0 0 0 0.25 -0.25v-4.5a0.25 0.25 0 0 0 -0.25 -0.25h-0.75a1 1 0 0 1 0 -2h1a2 2 0 0 1 2 2v4.75a0.25 0.25 0 0 0 0.25 0.25h0.75a1 1 0 0 1 0 2Z", fill: "currentcolor", strokeWidth: 1 })), H0 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiBpZD0iSW5mb3JtYXRpb24tQ2lyY2xlLS1TdHJlYW1saW5lLVVsdGltYXRlIj48ZGVzYz5JbmZvcm1hdGlvbiBDaXJjbGUgU3RyZWFtbGluZSBJY29uOiBodHRwczovL3N0cmVhbWxpbmVocS5jb208L2Rlc2M+PHBhdGggZD0iTTEyIDBhMTIgMTIgMCAxIDAgMTIgMTJBMTIgMTIgMCAwIDAgMTIgMFptMC4yNSA1YTEuNSAxLjUgMCAxIDEgLTEuNSAxLjUgMS41IDEuNSAwIDAgMSAxLjUgLTEuNVptMi4yNSAxMy41aC00YTEgMSAwIDAgMSAwIC0yaDAuNzVhMC4yNSAwLjI1IDAgMCAwIDAuMjUgLTAuMjV2LTQuNWEwLjI1IDAuMjUgMCAwIDAgLTAuMjUgLTAuMjVoLTAuNzVhMSAxIDAgMCAxIDAgLTJoMWEyIDIgMCAwIDEgMiAydjQuNzVhMC4yNSAwLjI1IDAgMCAwIDAuMjUgMC4yNWgwLjc1YTEgMSAwIDAgMSAwIDJaIiBmaWxsPSJjdXJyZW50Y29sb3IiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPjwvc3ZnPg==", G0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: R0,
  default: H0
}, Symbol.toStringTag, { value: "Module" })), Y0 = (e) => /* @__PURE__ */ c("svg", { viewBox: "0 0 46 43", ...e }, /* @__PURE__ */ c("title", null, "integration"), /* @__PURE__ */ c("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeWidth: "1.5px" }, /* @__PURE__ */ c("path", { d: "M-1-3h48v48H-1z", stroke: "none" }), /* @__PURE__ */ c("g", { strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ c("path", { d: "M32.932 6.574c.713.428 1.069 1.057 1.068 1.888v9.278l-11 7.076-11-7.076V8.462c0-.831.355-1.46 1.068-1.888l8.8-5.28c.755-.453 1.51-.453 2.264 0l8.8 5.28zM23 13.816v11" }), /* @__PURE__ */ c("path", { d: "M34 31.416l-11-6.6 11-7.076 10 6.426c.669.435 1.002 1.052 1 1.85v8.124c.002.798-.331 1.415-1 1.85l-8.8 5.66c-.793.51-1.587.51-2.38 0L23 35.34V24.816m11 6.6V42M23 24.816V35.34l-9.8 6.31c-.793.51-1.587.51-2.38 0l-8.8-5.66c-.678-.43-1.018-1.047-1.02-1.85v-8.124c-.002-.798.331-1.415 1-1.85l10-6.426 11 7.076-11 6.6m0 0L1.262 24.974M12 31.416V42m11-28.184L12.282 7.384m21.436 0L23 13.816m21.738 11.158L34 31.416" })))), Q0 = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDYgNDMiPjx0aXRsZT5pbnRlZ3JhdGlvbjwvdGl0bGU+PGcgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIxLjVweCI+PHBhdGggZD0iTS0xLTNoNDh2NDhILTF6IiBzdHJva2U9Im5vbmUiPjwvcGF0aD48ZyBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0zMi45MzIgNi41NzRjLjcxMy40MjggMS4wNjkgMS4wNTcgMS4wNjggMS44ODh2OS4yNzhsLTExIDcuMDc2LTExLTcuMDc2VjguNDYyYzAtLjgzMS4zNTUtMS40NiAxLjA2OC0xLjg4OGw4LjgtNS4yOGMuNzU1LS40NTMgMS41MS0uNDUzIDIuMjY0IDBsOC44IDUuMjh6TTIzIDEzLjgxNnYxMSI+PC9wYXRoPjxwYXRoIGQ9Ik0zNCAzMS40MTZsLTExLTYuNiAxMS03LjA3NiAxMCA2LjQyNmMuNjY5LjQzNSAxLjAwMiAxLjA1MiAxIDEuODV2OC4xMjRjLjAwMi43OTgtLjMzMSAxLjQxNS0xIDEuODVsLTguOCA1LjY2Yy0uNzkzLjUxLTEuNTg3LjUxLTIuMzggMEwyMyAzNS4zNFYyNC44MTZtMTEgNi42VjQyTTIzIDI0LjgxNlYzNS4zNGwtOS44IDYuMzFjLS43OTMuNTEtMS41ODcuNTEtMi4zOCAwbC04LjgtNS42NmMtLjY3OC0uNDMtMS4wMTgtMS4wNDctMS4wMi0xLjg1di04LjEyNGMtLjAwMi0uNzk4LjMzMS0xLjQxNSAxLTEuODVsMTAtNi40MjYgMTEgNy4wNzYtMTEgNi42bTAgMEwxLjI2MiAyNC45NzRNMTIgMzEuNDE2VjQybTExLTI4LjE4NEwxMi4yODIgNy4zODRtMjEuNDM2IDBMMjMgMTMuODE2bTIxLjczOCAxMS4xNThMMzQgMzEuNDE2Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=", B0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Y0,
  default: Q0
}, Symbol.toStringTag, { value: "Module" })), J0 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("g", null, /* @__PURE__ */ c("path", { d: "M12.01875 13.603125 14.399999999999999 11.25l1.65 0.440625a1.4625000000000001 1.4625000000000001 0 0 0 1.415625 -0.440625 1.4812500000000002 1.4812500000000002 0 0 0 0.346875 -1.396875l-0.440625 -1.640625 0.7687499999999999 -0.7125 1.65 0.440625A1.4625000000000001 1.4625000000000001 0 0 0 21.20625 7.5 1.4812500000000002 1.4812500000000002 0 0 0 21.5625 6.1125l-0.440625 -1.640625a2.203125 2.203125 0 0 0 -3.121875 -3.121875l-9.103125 9.13125a5.896875 5.896875 0 1 0 3.121875 3.121875Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M3.99375 16.725a1.78125 1.78125 0 1 0 3.5625 0 1.78125 1.78125 0 1 0 -3.5625 0", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }))), V0 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxnPjxwYXRoIGQ9Ik0xMi4wMTg3NSAxMy42MDMxMjUgMTQuMzk5OTk5OTk5OTk5OTk5IDExLjI1bDEuNjUgMC40NDA2MjVhMS40NjI1MDAwMDAwMDAwMDAxIDEuNDYyNTAwMDAwMDAwMDAwMSAwIDAgMCAxLjQxNTYyNSAtMC40NDA2MjUgMS40ODEyNTAwMDAwMDAwMDAyIDEuNDgxMjUwMDAwMDAwMDAwMiAwIDAgMCAwLjM0Njg3NSAtMS4zOTY4NzVsLTAuNDQwNjI1IC0xLjY0MDYyNSAwLjc2ODc0OTk5OTk5OTk5OTkgLTAuNzEyNSAxLjY1IDAuNDQwNjI1QTEuNDYyNTAwMDAwMDAwMDAwMSAxLjQ2MjUwMDAwMDAwMDAwMDEgMCAwIDAgMjEuMjA2MjUgNy41IDEuNDgxMjUwMDAwMDAwMDAwMiAxLjQ4MTI1MDAwMDAwMDAwMDIgMCAwIDAgMjEuNTYyNSA2LjExMjVsLTAuNDQwNjI1IC0xLjY0MDYyNWEyLjIwMzEyNSAyLjIwMzEyNSAwIDAgMCAtMy4xMjE4NzUgLTMuMTIxODc1bC05LjEwMzEyNSA5LjEzMTI1YTUuODk2ODc1IDUuODk2ODc1IDAgMSAwIDMuMTIxODc1IDMuMTIxODc1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNMy45OTM3NSAxNi43MjVhMS43ODEyNSAxLjc4MTI1IDAgMSAwIDMuNTYyNSAwIDEuNzgxMjUgMS43ODEyNSAwIDEgMCAtMy41NjI1IDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9nPjwvc3ZnPg==", F0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: J0,
  default: V0
}, Symbol.toStringTag, { value: "Module" })), X0 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6.305625 0.703125h9.84375", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M14.743125000000001 7.734375V0.703125h-7.03125v7.03125L1.3959375 17.451562499999998A2.8125 2.8125 0 0 0 3.75 21.796875h14.95125a2.8125 2.8125 0 0 0 2.3578125 -4.3453124999999995L14.743125000000001 7.734375Z", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4.9696875 11.953125h12.515625", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M13.336875000000001 16.171875h2.8125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M14.743125000000001 14.765625v2.8125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M14.743125000000001 3.515625h-2.8125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M14.743125000000001 6.328125h-2.8125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M6.305625 18.6328125a0.3515625 0.3515625 0 0 1 0 -0.703125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M6.305625 18.6328125a0.3515625 0.3515625 0 0 0 0 -0.703125", strokeWidth: 1.5 }), /* @__PURE__ */ c("g", null, /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M9.118125000000001 15.8203125a0.3515625 0.3515625 0 0 1 0 -0.703125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M9.118125000000001 15.8203125a0.3515625 0.3515625 0 0 0 0 -0.703125", strokeWidth: 1.5 }))), $0 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik02LjMwNTYyNSAwLjcwMzEyNWg5Ljg0Mzc1IiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNC43NDMxMjUwMDAwMDAwMDEgNy43MzQzNzVWMC43MDMxMjVoLTcuMDMxMjV2Ny4wMzEyNUwxLjM5NTkzNzUgMTcuNDUxNTYyNDk5OTk5OTk4QTIuODEyNSAyLjgxMjUgMCAwIDAgMy43NSAyMS43OTY4NzVoMTQuOTUxMjVhMi44MTI1IDIuODEyNSAwIDAgMCAyLjM1NzgxMjUgLTQuMzQ1MzEyNDk5OTk5OTk5NUwxNC43NDMxMjUwMDAwMDAwMDEgNy43MzQzNzVaIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik00Ljk2OTY4NzUgMTEuOTUzMTI1aDEyLjUxNTYyNSIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTMuMzM2ODc1MDAwMDAwMDAxIDE2LjE3MTg3NWgyLjgxMjUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE0Ljc0MzEyNTAwMDAwMDAwMSAxNC43NjU2MjV2Mi44MTI1IiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNC43NDMxMjUwMDAwMDAwMDEgMy41MTU2MjVoLTIuODEyNSIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTQuNzQzMTI1MDAwMDAwMDAxIDYuMzI4MTI1aC0yLjgxMjUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGQ9Ik02LjMwNTYyNSAxOC42MzI4MTI1YTAuMzUxNTYyNSAwLjM1MTU2MjUgMCAwIDEgMCAtMC43MDMxMjUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGQ9Ik02LjMwNTYyNSAxOC42MzI4MTI1YTAuMzUxNTYyNSAwLjM1MTU2MjUgMCAwIDAgMCAtMC43MDMxMjUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PGc+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGQ9Ik05LjExODEyNTAwMDAwMDAwMSAxNS44MjAzMTI1YTAuMzUxNTYyNSAwLjM1MTU2MjUgMCAwIDEgMCAtMC43MDMxMjUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGQ9Ik05LjExODEyNTAwMDAwMDAwMSAxNS44MjAzMTI1YTAuMzUxNTYyNSAwLjM1MTU2MjUgMCAwIDAgMCAtMC43MDMxMjUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9nPjwvc3ZnPg==", q0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: X0,
  default: $0
}, Symbol.toStringTag, { value: "Module" })), K0 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("g", null, /* @__PURE__ */ c("path", { d: "M2.109375 0.703125h8.4375s1.40625 0 1.40625 1.40625v8.4375s0 1.40625 -1.40625 1.40625h-8.4375s-1.40625 0 -1.40625 -1.40625v-8.4375s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M14.765625 10.546875h5.625a1.40625 1.40625 0 0 1 1.40625 1.40625v8.4375a1.40625 1.40625 0 0 1 -1.40625 1.40625h-8.4375a1.40625 1.40625 0 0 1 -1.40625 -1.40625v-5.625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m14.53125 16.875 3.28125 0", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("g", null, /* @__PURE__ */ c("path", { d: "m6.328125 3.515625 0 1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m3.515625 4.921875 5.625 0", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M7.734375 4.921875s-1.40625 4.21875 -4.21875 4.21875", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M6.328125 7.5a3.675 3.675 0 0 0 2.8125 1.621875", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), /* @__PURE__ */ c("path", { d: "M14.53125 18.984375v-3.75a1.640625 1.640625 0 0 1 3.28125 0v3.75", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }))), eg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxnPjxwYXRoIGQ9Ik0yLjEwOTM3NSAwLjcwMzEyNWg4LjQzNzVzMS40MDYyNSAwIDEuNDA2MjUgMS40MDYyNXY4LjQzNzVzMCAxLjQwNjI1IC0xLjQwNjI1IDEuNDA2MjVoLTguNDM3NXMtMS40MDYyNSAwIC0xLjQwNjI1IC0xLjQwNjI1di04LjQzNzVzMCAtMS40MDYyNSAxLjQwNjI1IC0xLjQwNjI1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Ik0xNC43NjU2MjUgMTAuNTQ2ODc1aDUuNjI1YTEuNDA2MjUgMS40MDYyNSAwIDAgMSAxLjQwNjI1IDEuNDA2MjV2OC40Mzc1YTEuNDA2MjUgMS40MDYyNSAwIDAgMSAtMS40MDYyNSAxLjQwNjI1aC04LjQzNzVhMS40MDYyNSAxLjQwNjI1IDAgMCAxIC0xLjQwNjI1IC0xLjQwNjI1di01LjYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJtMTQuNTMxMjUgMTYuODc1IDMuMjgxMjUgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48Zz48cGF0aCBkPSJtNi4zMjgxMjUgMy41MTU2MjUgMCAxLjQwNjI1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Im0zLjUxNTYyNSA0LjkyMTg3NSA1LjYyNSAwIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Ik03LjczNDM3NSA0LjkyMTg3NXMtMS40MDYyNSA0LjIxODc1IC00LjIxODc1IDQuMjE4NzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0iTTYuMzI4MTI1IDcuNWEzLjY3NSAzLjY3NSAwIDAgMCAyLjgxMjUgMS42MjE4NzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9nPjxwYXRoIGQ9Ik0xNC41MzEyNSAxOC45ODQzNzV2LTMuNzVhMS42NDA2MjUgMS42NDA2MjUgMCAwIDEgMy4yODEyNSAwdjMuNzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9nPjwvc3ZnPg==", tg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: K0,
  default: eg
}, Symbol.toStringTag, { value: "Module" })), rg = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "Desktop"), /* @__PURE__ */ c("path", { d: "M21,14.25V4.5A1.5,1.5,0,0,0,19.5,3H4.5A1.5,1.5,0,0,0,3,4.5v9.75Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }), /* @__PURE__ */ c("path", { d: "M23.121,18.891A1.5,1.5,0,0,1,21.75,21H2.25A1.5,1.5,0,0,1,.879,18.891L3,14.25H21Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }), /* @__PURE__ */ c("line", { x1: 10.5, y1: 18, x2: 13.5, y2: 18, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" })), ig = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PC9kZWZzPjx0aXRsZT5EZXNrdG9wPC90aXRsZT48cGF0aCBkPSJNMjEsMTQuMjVWNC41QTEuNSwxLjUsMCwwLDAsMTkuNSwzSDQuNUExLjUsMS41LDAsMCwwLDMsNC41djkuNzVaIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNXB4Ij48L3BhdGg+PHBhdGggZD0iTTIzLjEyMSwxOC44OTFBMS41LDEuNSwwLDAsMSwyMS43NSwyMUgyLjI1QTEuNSwxLjUsMCwwLDEsLjg3OSwxOC44OTFMMywxNC4yNUgyMVoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41cHgiPjwvcGF0aD48bGluZSB4MT0iMTAuNSIgeTE9IjE4IiB4Mj0iMTMuNSIgeTI9IjE4IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNXB4Ij48L2xpbmU+PC9zdmc+", ng = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: rg,
  default: ig
}, Symbol.toStringTag, { value: "Module" })), og = (e) => /* @__PURE__ */ c("svg", { viewBox: "-0.75 -0.75 24 24", xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { d: "M21.478125 6.5184375 11.90625 1.5675a1.4465625 1.4465625 0 0 0 -1.3275 0L1.00875 6.5184375a0.5765625 0.5765625 0 0 0 0 1.025625l9.5709375 4.950937499999999a1.4465625 1.4465625 0 0 0 1.3275 0L21.478125 7.544062500000001a0.5775 0.5775 0 0 0 0 -1.025625Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m0.7106250000000001 11.953125 9.8690625 4.760625a1.4465625 1.4465625 0 0 0 1.3275 0l9.897187500000001 -4.760625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m0.7106250000000001 16.171875 9.8690625 4.760625a1.4465625 1.4465625 0 0 0 1.3275 0l9.897187500000001 -4.760625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), ag = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMC43NSAtMC43NSAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0yMS40NzgxMjUgNi41MTg0Mzc1IDExLjkwNjI1IDEuNTY3NWExLjQ0NjU2MjUgMS40NDY1NjI1IDAgMCAwIC0xLjMyNzUgMEwxLjAwODc1IDYuNTE4NDM3NWEwLjU3NjU2MjUgMC41NzY1NjI1IDAgMCAwIDAgMS4wMjU2MjVsOS41NzA5Mzc1IDQuOTUwOTM3NDk5OTk5OTk5YTEuNDQ2NTYyNSAxLjQ0NjU2MjUgMCAwIDAgMS4zMjc1IDBMMjEuNDc4MTI1IDcuNTQ0MDYyNTAwMDAwMDAxYTAuNTc3NSAwLjU3NzUgMCAwIDAgMCAtMS4wMjU2MjVaIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Im0wLjcxMDYyNTAwMDAwMDAwMDEgMTEuOTUzMTI1IDkuODY5MDYyNSA0Ljc2MDYyNWExLjQ0NjU2MjUgMS40NDY1NjI1IDAgMCAwIDEuMzI3NSAwbDkuODk3MTg3NTAwMDAwMDAxIC00Ljc2MDYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJtMC43MTA2MjUwMDAwMDAwMDAxIDE2LjE3MTg3NSA5Ljg2OTA2MjUgNC43NjA2MjVhMS40NDY1NjI1IDEuNDQ2NTYyNSAwIDAgMCAxLjMyNzUgMGw5Ljg5NzE4NzUwMDAwMDAwMSAtNC43NjA2MjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+", sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: og,
  default: ag
}, Symbol.toStringTag, { value: "Module" })), cg = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "layout-headline"), /* @__PURE__ */ c("path", { d: "M2.109375 0.7003125h18.28125s1.40625 0 1.40625 1.40625v1.40625s0 1.40625 -1.40625 1.40625H2.109375s-1.40625 0 -1.40625 -1.40625v-1.40625s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M2.109375 9.137812499999999h18.28125s1.40625 0 1.40625 1.40625v1.40625s0 1.40625 -1.40625 1.40625H2.109375s-1.40625 0 -1.40625 -1.40625v-1.40625s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M2.109375 17.5753125h18.28125s1.40625 0 1.40625 1.40625v1.40625s0 1.40625 -1.40625 1.40625H2.109375s-1.40625 0 -1.40625 -1.40625v-1.40625s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), lg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxkZWZzPjwvZGVmcz48dGl0bGU+bGF5b3V0LWhlYWRsaW5lPC90aXRsZT48cGF0aCBkPSJNMi4xMDkzNzUgMC43MDAzMTI1aDE4LjI4MTI1czEuNDA2MjUgMCAxLjQwNjI1IDEuNDA2MjV2MS40MDYyNXMwIDEuNDA2MjUgLTEuNDA2MjUgMS40MDYyNUgyLjEwOTM3NXMtMS40MDYyNSAwIC0xLjQwNjI1IC0xLjQwNjI1di0xLjQwNjI1czAgLTEuNDA2MjUgMS40MDYyNSAtMS40MDYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNMi4xMDkzNzUgOS4xMzc4MTI0OTk5OTk5OTloMTguMjgxMjVzMS40MDYyNSAwIDEuNDA2MjUgMS40MDYyNXYxLjQwNjI1czAgMS40MDYyNSAtMS40MDYyNSAxLjQwNjI1SDIuMTA5Mzc1cy0xLjQwNjI1IDAgLTEuNDA2MjUgLTEuNDA2MjV2LTEuNDA2MjVzMCAtMS40MDYyNSAxLjQwNjI1IC0xLjQwNjI1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Ik0yLjEwOTM3NSAxNy41NzUzMTI1aDE4LjI4MTI1czEuNDA2MjUgMCAxLjQwNjI1IDEuNDA2MjV2MS40MDYyNXMwIDEuNDA2MjUgLTEuNDA2MjUgMS40MDYyNUgyLjEwOTM3NXMtMS40MDYyNSAwIC0xLjQwNjI1IC0xLjQwNjI1di0xLjQwNjI1czAgLTEuNDA2MjUgMS40MDYyNSAtMS40MDYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", dg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: cg,
  default: lg
}, Symbol.toStringTag, { value: "Module" })), ug = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "layout-module-1"), /* @__PURE__ */ c("path", { d: "M2.109375 0.7003125h5.625s1.40625 0 1.40625 1.40625v5.625s0 1.40625 -1.40625 1.40625h-5.625s-1.40625 0 -1.40625 -1.40625v-5.625s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M2.109375 13.356562499999999h5.625s1.40625 0 1.40625 1.40625v5.625s0 1.40625 -1.40625 1.40625h-5.625s-1.40625 0 -1.40625 -1.40625v-5.625s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M14.765625 0.7003125h5.625s1.40625 0 1.40625 1.40625v5.625s0 1.40625 -1.40625 1.40625h-5.625s-1.40625 0 -1.40625 -1.40625v-5.625s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M14.765625 13.356562499999999h5.625s1.40625 0 1.40625 1.40625v5.625s0 1.40625 -1.40625 1.40625h-5.625s-1.40625 0 -1.40625 -1.40625v-5.625s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), gg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxkZWZzPjwvZGVmcz48dGl0bGU+bGF5b3V0LW1vZHVsZS0xPC90aXRsZT48cGF0aCBkPSJNMi4xMDkzNzUgMC43MDAzMTI1aDUuNjI1czEuNDA2MjUgMCAxLjQwNjI1IDEuNDA2MjV2NS42MjVzMCAxLjQwNjI1IC0xLjQwNjI1IDEuNDA2MjVoLTUuNjI1cy0xLjQwNjI1IDAgLTEuNDA2MjUgLTEuNDA2MjV2LTUuNjI1czAgLTEuNDA2MjUgMS40MDYyNSAtMS40MDYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNMi4xMDkzNzUgMTMuMzU2NTYyNDk5OTk5OTk5aDUuNjI1czEuNDA2MjUgMCAxLjQwNjI1IDEuNDA2MjV2NS42MjVzMCAxLjQwNjI1IC0xLjQwNjI1IDEuNDA2MjVoLTUuNjI1cy0xLjQwNjI1IDAgLTEuNDA2MjUgLTEuNDA2MjV2LTUuNjI1czAgLTEuNDA2MjUgMS40MDYyNSAtMS40MDYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNMTQuNzY1NjI1IDAuNzAwMzEyNWg1LjYyNXMxLjQwNjI1IDAgMS40MDYyNSAxLjQwNjI1djUuNjI1czAgMS40MDYyNSAtMS40MDYyNSAxLjQwNjI1aC01LjYyNXMtMS40MDYyNSAwIC0xLjQwNjI1IC0xLjQwNjI1di01LjYyNXMwIC0xLjQwNjI1IDEuNDA2MjUgLTEuNDA2MjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0iTTE0Ljc2NTYyNSAxMy4zNTY1NjI0OTk5OTk5OTloNS42MjVzMS40MDYyNSAwIDEuNDA2MjUgMS40MDYyNXY1LjYyNXMwIDEuNDA2MjUgLTEuNDA2MjUgMS40MDYyNWgtNS42MjVzLTEuNDA2MjUgMCAtMS40MDYyNSAtMS40MDYyNXYtNS42MjVzMCAtMS40MDYyNSAxLjQwNjI1IC0xLjQwNjI1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjwvc3ZnPg==", hg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: ug,
  default: gg
}, Symbol.toStringTag, { value: "Module" })), pg = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M0.78375 9.6103125h1.3031249999999999c1.966875 0 3.855 -0.0684375 5.257499999999999 -1.4465625a7.5 7.5 0 0 0 2.2424999999999997 -5.2190625c0 -3.1734375 4.010624999999999 -1.6875 4.010624999999999 1.14375v3.646875a1.875 1.875 0 0 0 1.875 1.875h4.414687499999999c0.9806250000000001 0 1.8046875 0.7565625 1.8234375 1.7371874999999999 0.061875 3.1275 -0.459375 5.4028125 -1.7240625 7.824375 -0.729375 1.396875 -2.2434374999999998 2.175 -3.8184375000000004 2.1403125C5.2228125 21.065624999999997 6.6384375 19.21875 0.78375 19.21875", strokeWidth: 1.5 })), mg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0wLjc4Mzc1IDkuNjEwMzEyNWgxLjMwMzEyNDk5OTk5OTk5OTljMS45NjY4NzUgMCAzLjg1NSAtMC4wNjg0Mzc1IDUuMjU3NDk5OTk5OTk5OTk5IC0xLjQ0NjU2MjVhNy41IDcuNSAwIDAgMCAyLjI0MjQ5OTk5OTk5OTk5OTcgLTUuMjE5MDYyNWMwIC0zLjE3MzQzNzUgNC4wMTA2MjQ5OTk5OTk5OTkgLTEuNjg3NSA0LjAxMDYyNDk5OTk5OTk5OSAxLjE0Mzc1djMuNjQ2ODc1YTEuODc1IDEuODc1IDAgMCAwIDEuODc1IDEuODc1aDQuNDE0Njg3NDk5OTk5OTk5YzAuOTgwNjI1MDAwMDAwMDAwMSAwIDEuODA0Njg3NSAwLjc1NjU2MjUgMS44MjM0Mzc1IDEuNzM3MTg3NDk5OTk5OTk5OSAwLjA2MTg3NSAzLjEyNzUgLTAuNDU5Mzc1IDUuNDAyODEyNSAtMS43MjQwNjI1IDcuODI0Mzc1IC0wLjcyOTM3NSAxLjM5Njg3NSAtMi4yNDM0Mzc0OTk5OTk5OTk4IDIuMTc1IC0zLjgxODQzNzUwMDAwMDAwMDQgMi4xNDAzMTI1QzUuMjIyODEyNSAyMS4wNjU2MjQ5OTk5OTk5OTcgNi42Mzg0Mzc1IDE5LjIxODc1IDAuNzgzNzUgMTkuMjE4NzUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+", fg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: pg,
  default: mg
}, Symbol.toStringTag, { value: "Module" })), Mg = (e) => /* @__PURE__ */ c("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", strokeWidth: 1.5, ...e }, /* @__PURE__ */ c("path", { d: "M5.25 12.373h-3", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "m5.25 15.373-1.5 1.5", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "m5.25 9.373-1.5-1.5", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M18.75 12.373h3", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "m18.75 15.373 1.5 1.5", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "m18.75 9.373 1.5-1.5", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M8.25 9.373v-4.5A3.762 3.762 0 0 1 12 1.123h0a3.761 3.761 0 0 1 3.75 3.75v5.25a3.763 3.763 0 0 1-2.25 3.435 3.709 3.709 0 0 1-1.5.315", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M15.75 14.623v4.5a3.76 3.76 0 0 1-3.75 3.75h0a3.761 3.761 0 0 1-3.75-3.75v-4.5a3.762 3.762 0 0 1 3.75-3.75", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), Ig = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxwYXRoIGQ9Ik01LjI1IDEyLjM3M2gtMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Im01LjI1IDE1LjM3My0xLjUgMS41IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0ibTUuMjUgOS4zNzMtMS41LTEuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0xOC43NSAxMi4zNzNoMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Im0xOC43NSAxNS4zNzMgMS41IDEuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Im0xOC43NSA5LjM3MyAxLjUtMS41IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTTguMjUgOS4zNzN2LTQuNUEzLjc2MiAzLjc2MiAwIDAgMSAxMiAxLjEyM2gwYTMuNzYxIDMuNzYxIDAgMCAxIDMuNzUgMy43NXY1LjI1YTMuNzYzIDMuNzYzIDAgMCAxLTIuMjUgMy40MzUgMy43MDkgMy43MDkgMCAwIDEtMS41LjMxNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNS43NSAxNC42MjN2NC41YTMuNzYgMy43NiAwIDAgMS0zLjc1IDMuNzVoMGEzLjc2MSAzLjc2MSAwIDAgMS0zLjc1LTMuNzV2LTQuNWEzLjc2MiAzLjc2MiAwIDAgMSAzLjc1LTMuNzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48L3N2Zz4=", bg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Mg,
  default: Ig
}, Symbol.toStringTag, { value: "Module" })), yg = (e) => /* @__PURE__ */ c("svg", { viewBox: "-0.75 -0.75 24 24", xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { d: "M5.315625 21.215625H0.759375V8.15625h4.55625Zm9.459375 -8.803125000000001a2.00625 2.00625 0 0 0 -2.00625 2.00625v6.796875H7.9781249999999995V8.15625h4.790625v1.490625a6.3374999999999995 6.3374999999999995 0 0 1 4.0125 -1.5c2.971875 0 5.034375 2.203125 5.034375 6.3843749999999995v6.684375H16.78125v-6.796875a2.00625 2.00625 0 0 0 -2.00625 -2.015625Zm-9.375 -8.774999999999999a2.34375 2.34375 0 1 1 -2.34375 -2.34375 2.34375 2.34375 0 0 1 2.325 2.34375Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), vg = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMC43NSAtMC43NSAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik01LjMxNTYyNSAyMS4yMTU2MjVIMC43NTkzNzVWOC4xNTYyNWg0LjU1NjI1Wm05LjQ1OTM3NSAtOC44MDMxMjUwMDAwMDAwMDFhMi4wMDYyNSAyLjAwNjI1IDAgMCAwIC0yLjAwNjI1IDIuMDA2MjV2Ni43OTY4NzVINy45NzgxMjQ5OTk5OTk5OTk1VjguMTU2MjVoNC43OTA2MjV2MS40OTA2MjVhNi4zMzc0OTk5OTk5OTk5OTk1IDYuMzM3NDk5OTk5OTk5OTk5NSAwIDAgMSA0LjAxMjUgLTEuNWMyLjk3MTg3NSAwIDUuMDM0Mzc1IDIuMjAzMTI1IDUuMDM0Mzc1IDYuMzg0Mzc0OTk5OTk5OTk5NXY2LjY4NDM3NUgxNi43ODEyNXYtNi43OTY4NzVhMi4wMDYyNSAyLjAwNjI1IDAgMCAwIC0yLjAwNjI1IC0yLjAxNTYyNVptLTkuMzc1IC04Ljc3NDk5OTk5OTk5OTk5OWEyLjM0Mzc1IDIuMzQzNzUgMCAxIDEgLTIuMzQzNzUgLTIuMzQzNzUgMi4zNDM3NSAyLjM0Mzc1IDAgMCAxIDIuMzI1IDIuMzQzNzVaIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjwvc3ZnPg==", xg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: yg,
  default: vg
}, Symbol.toStringTag, { value: "Module" })), jg = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "layout-headline"), /* @__PURE__ */ c("path", { d: "M2.109375 0.7003125h18.28125s1.40625 0 1.40625 1.40625v1.40625s0 1.40625 -1.40625 1.40625H2.109375s-1.40625 0 -1.40625 -1.40625v-1.40625s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M2.109375 9.137812499999999h18.28125s1.40625 0 1.40625 1.40625v1.40625s0 1.40625 -1.40625 1.40625H2.109375s-1.40625 0 -1.40625 -1.40625v-1.40625s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M2.109375 17.5753125h18.28125s1.40625 0 1.40625 1.40625v1.40625s0 1.40625 -1.40625 1.40625H2.109375s-1.40625 0 -1.40625 -1.40625v-1.40625s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), Ng = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxkZWZzPjwvZGVmcz48dGl0bGU+bGF5b3V0LWhlYWRsaW5lPC90aXRsZT48cGF0aCBkPSJNMi4xMDkzNzUgMC43MDAzMTI1aDE4LjI4MTI1czEuNDA2MjUgMCAxLjQwNjI1IDEuNDA2MjV2MS40MDYyNXMwIDEuNDA2MjUgLTEuNDA2MjUgMS40MDYyNUgyLjEwOTM3NXMtMS40MDYyNSAwIC0xLjQwNjI1IC0xLjQwNjI1di0xLjQwNjI1czAgLTEuNDA2MjUgMS40MDYyNSAtMS40MDYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNMi4xMDkzNzUgOS4xMzc4MTI0OTk5OTk5OTloMTguMjgxMjVzMS40MDYyNSAwIDEuNDA2MjUgMS40MDYyNXYxLjQwNjI1czAgMS40MDYyNSAtMS40MDYyNSAxLjQwNjI1SDIuMTA5Mzc1cy0xLjQwNjI1IDAgLTEuNDA2MjUgLTEuNDA2MjV2LTEuNDA2MjVzMCAtMS40MDYyNSAxLjQwNjI1IC0xLjQwNjI1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Ik0yLjEwOTM3NSAxNy41NzUzMTI1aDE4LjI4MTI1czEuNDA2MjUgMCAxLjQwNjI1IDEuNDA2MjV2MS40MDYyNXMwIDEuNDA2MjUgLTEuNDA2MjUgMS40MDYyNUgyLjEwOTM3NXMtMS40MDYyNSAwIC0xLjQwNjI1IC0xLjQwNjI1di0xLjQwNjI1czAgLTEuNDA2MjUgMS40MDYyNSAtMS40MDYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", wg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: jg,
  default: Ng
}, Symbol.toStringTag, { value: "Module" })), kg = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", strokeWidth: "1.5px", ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "lock-1"), /* @__PURE__ */ c("rect", { x: 3.75, y: 9.75, width: 16.5, height: 13.5, rx: 1.5, ry: 1.5, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M6.75,9.75V6a5.25,5.25,0,0,1,10.5,0V9.75", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("line", { x1: 12, y1: 15, x2: 12, y2: 18, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), Dg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjVweCI+PGRlZnM+PC9kZWZzPjx0aXRsZT5sb2NrLTE8L3RpdGxlPjxyZWN0IHg9IjMuNzUiIHk9IjkuNzUiIHdpZHRoPSIxNi41IiBoZWlnaHQ9IjEzLjUiIHJ4PSIxLjUiIHJ5PSIxLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcmVjdD48cGF0aCBkPSJNNi43NSw5Ljc1VjZhNS4yNSw1LjI1LDAsMCwxLDEwLjUsMFY5Ljc1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PGxpbmUgeDE9IjEyIiB5MT0iMTUiIHgyPSIxMiIgeTI9IjE4IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L2xpbmU+PC9zdmc+", Sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: kg,
  default: Dg
}, Symbol.toStringTag, { value: "Module" })), Ag = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", strokeWidth: "1.5px", ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "lock-unlock"), /* @__PURE__ */ c("path", { d: "M.75,9.75V6a5.25,5.25,0,0,1,10.5,0V9.75", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("rect", { x: 6.75, y: 9.75, width: 16.5, height: 13.5, rx: 1.5, ry: 1.5, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("line", { x1: 15, y1: 15, x2: 15, y2: 18, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), Lg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjVweCI+PGRlZnM+PC9kZWZzPjx0aXRsZT5sb2NrLXVubG9jazwvdGl0bGU+PHBhdGggZD0iTS43NSw5Ljc1VjZhNS4yNSw1LjI1LDAsMCwxLDEwLjUsMFY5Ljc1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHJlY3QgeD0iNi43NSIgeT0iOS43NSIgd2lkdGg9IjE2LjUiIGhlaWdodD0iMTMuNSIgcng9IjEuNSIgcnk9IjEuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9yZWN0PjxsaW5lIHgxPSIxNSIgeTE9IjE1IiB4Mj0iMTUiIHkyPSIxOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9saW5lPjwvc3ZnPg==", zg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Ag,
  default: Lg
}, Symbol.toStringTag, { value: "Module" })), _g = (e) => /* @__PURE__ */ c("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", strokeWidth: 1.5, ...e }, /* @__PURE__ */ c("path", { d: "M0.750 9.812 A9.063 9.063 0 1 0 18.876 9.812 A9.063 9.063 0 1 0 0.750 9.812 Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", transform: "translate(-3.056 4.62) rotate(-23.025)" }), /* @__PURE__ */ c("path", { d: "M16.221 16.22L23.25 23.25", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), Tg = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxwYXRoIGQ9Ik0wLjc1MCA5LjgxMiBBOS4wNjMgOS4wNjMgMCAxIDAgMTguODc2IDkuODEyIEE5LjA2MyA5LjA2MyAwIDEgMCAwLjc1MCA5LjgxMiBaIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy4wNTYgNC42Mikgcm90YXRlKC0yMy4wMjUpIj48L3BhdGg+PHBhdGggZD0iTTE2LjIyMSAxNi4yMkwyMy4yNSAyMy4yNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjwvc3ZnPg==", Cg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: _g,
  default: Tg
}, Symbol.toStringTag, { value: "Module" })), Eg = (e) => /* @__PURE__ */ c("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", strokeWidth: 1.5, ...e }, /* @__PURE__ */ c("path", { d: "M11.25 17.25a6 6 0 1 0 12 0 6 6 0 1 0-12 0Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "m13.008 21.491 8.484-8.483", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M8.25 15.75h-6a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5h18a1.5 1.5 0 0 1 1.5 1.5V9", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "m21.411 1.3-8.144 6.264a3.308 3.308 0 0 1-4.034 0L1.089 1.3", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), Ug = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxwYXRoIGQ9Ik0xMS4yNSAxNy4yNWE2IDYgMCAxIDAgMTIgMCA2IDYgMCAxIDAtMTIgMFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJtMTMuMDA4IDIxLjQ5MSA4LjQ4NC04LjQ4MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik04LjI1IDE1Ljc1aC02YTEuNSAxLjUgMCAwIDEtMS41LTEuNXYtMTJhMS41IDEuNSAwIDAgMSAxLjUtMS41aDE4YTEuNSAxLjUgMCAwIDEgMS41IDEuNVY5IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0ibTIxLjQxMSAxLjMtOC4xNDQgNi4yNjRhMy4zMDggMy4zMDggMCAwIDEtNC4wMzQgMEwxLjA4OSAxLjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48L3N2Zz4=", Zg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Eg,
  default: Ug
}, Symbol.toStringTag, { value: "Module" })), Wg = (e) => /* @__PURE__ */ c("svg", { viewBox: "-0.75 -0.75 24 24", xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { d: "M6.328125 14.296875H4.21875a3.515625 3.515625 0 0 1 0 -7.03125h2.109375Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M6.328125 14.296875a20.90625 20.90625 0 0 1 11.593125 3.5100000000000002l1.0631249999999999 0.70875V3.046875l-1.0631249999999999 0.70875A20.90625 20.90625 0 0 1 6.328125 7.265625Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m21.796875 9.375 0 2.8125", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M6.328125 14.296875A6.7865625 6.7865625 0 0 0 8.4375 19.21875", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), Og = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMC43NSAtMC43NSAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik02LjMyODEyNSAxNC4yOTY4NzVINC4yMTg3NWEzLjUxNTYyNSAzLjUxNTYyNSAwIDAgMSAwIC03LjAzMTI1aDIuMTA5Mzc1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNNi4zMjgxMjUgMTQuMjk2ODc1YTIwLjkwNjI1IDIwLjkwNjI1IDAgMCAxIDExLjU5MzEyNSAzLjUxMDAwMDAwMDAwMDAwMDJsMS4wNjMxMjQ5OTk5OTk5OTk5IDAuNzA4NzVWMy4wNDY4NzVsLTEuMDYzMTI0OTk5OTk5OTk5OSAwLjcwODc1QTIwLjkwNjI1IDIwLjkwNjI1IDAgMCAxIDYuMzI4MTI1IDcuMjY1NjI1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJtMjEuNzk2ODc1IDkuMzc1IDAgMi44MTI1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Ik02LjMyODEyNSAxNC4yOTY4NzVBNi43ODY1NjI1IDYuNzg2NTYyNSAwIDAgMCA4LjQzNzUgMTkuMjE4NzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+", Pg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Wg,
  default: Og
}, Symbol.toStringTag, { value: "Module" })), Rg = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("title", null, "Mobile"), /* @__PURE__ */ c("g", null, /* @__PURE__ */ c("rect", { x: 5.25, y: 0.75, width: 13.5, height: 22.5, rx: 3, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }), /* @__PURE__ */ c("line", { x1: 5.25, y1: 17.75, x2: 18.75, y2: 17.75, fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5px" }))), Hg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHRpdGxlPk1vYmlsZTwvdGl0bGU+PGc+PHJlY3QgeD0iNS4yNSIgeT0iMC43NSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iMjIuNSIgcng9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41cHgiPjwvcmVjdD48bGluZSB4MT0iNS4yNSIgeTE9IjE3Ljc1IiB4Mj0iMTguNzUiIHkyPSIxNy43NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjVweCI+PC9saW5lPjwvZz48L3N2Zz4=", Gg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Rg,
  default: Hg
}, Symbol.toStringTag, { value: "Module" })), Yg = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "module-three"), /* @__PURE__ */ c("path", { d: "M2.109375 12.65625H8.4375s1.40625 0 1.40625 1.40625v6.328125s0 1.40625 -1.40625 1.40625H2.109375s-1.40625 0 -1.40625 -1.40625V14.0625s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M14.0625 12.65625h6.328125s1.40625 0 1.40625 1.40625v6.328125s0 1.40625 -1.40625 1.40625H14.0625s-1.40625 0 -1.40625 -1.40625V14.0625s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M8.0859375 0.703125h6.328125s1.40625 0 1.40625 1.40625V8.4375s0 1.40625 -1.40625 1.40625h-6.328125s-1.40625 0 -1.40625 -1.40625V2.109375s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), Qg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxkZWZzPjwvZGVmcz48dGl0bGU+bW9kdWxlLXRocmVlPC90aXRsZT48cGF0aCBkPSJNMi4xMDkzNzUgMTIuNjU2MjVIOC40Mzc1czEuNDA2MjUgMCAxLjQwNjI1IDEuNDA2MjV2Ni4zMjgxMjVzMCAxLjQwNjI1IC0xLjQwNjI1IDEuNDA2MjVIMi4xMDkzNzVzLTEuNDA2MjUgMCAtMS40MDYyNSAtMS40MDYyNVYxNC4wNjI1czAgLTEuNDA2MjUgMS40MDYyNSAtMS40MDYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNMTQuMDYyNSAxMi42NTYyNWg2LjMyODEyNXMxLjQwNjI1IDAgMS40MDYyNSAxLjQwNjI1djYuMzI4MTI1czAgMS40MDYyNSAtMS40MDYyNSAxLjQwNjI1SDE0LjA2MjVzLTEuNDA2MjUgMCAtMS40MDYyNSAtMS40MDYyNVYxNC4wNjI1czAgLTEuNDA2MjUgMS40MDYyNSAtMS40MDYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNOC4wODU5Mzc1IDAuNzAzMTI1aDYuMzI4MTI1czEuNDA2MjUgMCAxLjQwNjI1IDEuNDA2MjVWOC40Mzc1czAgMS40MDYyNSAtMS40MDYyNSAxLjQwNjI1aC02LjMyODEyNXMtMS40MDYyNSAwIC0xLjQwNjI1IC0xLjQwNjI1VjIuMTA5Mzc1czAgLTEuNDA2MjUgMS40MDYyNSAtMS40MDYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", Bg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Yg,
  default: Qg
}, Symbol.toStringTag, { value: "Module" })), Jg = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", strokeWidth: 1.5, ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "money-bags"), /* @__PURE__ */ c("path", { d: "M14.045 7.988C16.091 9.4 18.75 12.8 18.75 15.863c0 3.107-3.361 5.625-6.75 5.625s-6.75-2.518-6.75-5.625c0-3.063 2.659-6.463 4.705-7.875L8.4 4.281a.9.9 0 0 1 .416-1.27 10.2 10.2 0 0 1 6.363 0 .9.9 0 0 1 .421 1.27Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9.955 7.988h4.09" }), /* @__PURE__ */ c("path", { d: "M4.5 20.738c-3 0-3.75-3-3.75-5.114a7.512 7.512 0 0 1 3.58-6.136L3.066 7.665a.75.75 0 0 1 .616-1.177H6", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M10.329 17.332a2.225 2.225 0 0 0 1.858.876c1.139 0 2.063-.693 2.063-1.548s-.924-1.546-2.063-1.546-2.062-.693-2.062-1.548.924-1.547 2.062-1.547a2.221 2.221 0 0 1 1.858.875", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12.187 18.208v1.03" }), /* @__PURE__ */ c("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12.187 10.988v1.031" }), /* @__PURE__ */ c("path", { d: "M19.5 20.738c3 0 3.75-3 3.75-5.114a7.512 7.512 0 0 0-3.58-6.136l1.264-1.823a.75.75 0 0 0-.616-1.177H18", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), Vg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxkZWZzPjwvZGVmcz48dGl0bGU+bW9uZXktYmFnczwvdGl0bGU+PHBhdGggZD0iTTE0LjA0NSA3Ljk4OEMxNi4wOTEgOS40IDE4Ljc1IDEyLjggMTguNzUgMTUuODYzYzAgMy4xMDctMy4zNjEgNS42MjUtNi43NSA1LjYyNXMtNi43NS0yLjUxOC02Ljc1LTUuNjI1YzAtMy4wNjMgMi42NTktNi40NjMgNC43MDUtNy44NzVMOC40IDQuMjgxYS45LjkgMCAwIDEgLjQxNi0xLjI3IDEwLjIgMTAuMiAwIDAgMSA2LjM2MyAwIC45LjkgMCAwIDEgLjQyMSAxLjI3WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik05Ljk1NSA3Ljk4OGg0LjA5Ij48L3BhdGg+PHBhdGggZD0iTTQuNSAyMC43MzhjLTMgMC0zLjc1LTMtMy43NS01LjExNGE3LjUxMiA3LjUxMiAwIDAgMSAzLjU4LTYuMTM2TDMuMDY2IDcuNjY1YS43NS43NSAwIDAgMSAuNjE2LTEuMTc3SDYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNMTAuMzI5IDE3LjMzMmEyLjIyNSAyLjIyNSAwIDAgMCAxLjg1OC44NzZjMS4xMzkgMCAyLjA2My0uNjkzIDIuMDYzLTEuNTQ4cy0uOTI0LTEuNTQ2LTIuMDYzLTEuNTQ2LTIuMDYyLS42OTMtMi4wNjItMS41NDguOTI0LTEuNTQ3IDIuMDYyLTEuNTQ3YTIuMjIxIDIuMjIxIDAgMCAxIDEuODU4Ljg3NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xMi4xODcgMTguMjA4djEuMDMiPjwvcGF0aD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTIuMTg3IDEwLjk4OHYxLjAzMSI+PC9wYXRoPjxwYXRoIGQ9Ik0xOS41IDIwLjczOGMzIDAgMy43NS0zIDMuNzUtNS4xMTRhNy41MTIgNy41MTIgMCAwIDAtMy41OC02LjEzNmwxLjI2NC0xLjgyM2EuNzUuNzUgMCAwIDAtLjYxNi0xLjE3N0gxOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjwvc3ZnPg==", Fg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Jg,
  default: Vg
}, Symbol.toStringTag, { value: "Module" })), Xg = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "navigation-menu-4"), /* @__PURE__ */ c("path", { d: "M2.109375 0.7059375h18.28125s1.40625 0 1.40625 1.40625v18.28125s0 1.40625 -1.40625 1.40625H2.109375s-1.40625 0 -1.40625 -1.40625v-18.28125s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m6.328125 7.0340625 9.84375 0", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m6.328125 11.252812500000001 9.84375 0", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m6.328125 15.471562500000001 9.84375 0", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), $g = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxkZWZzPjwvZGVmcz48dGl0bGU+bmF2aWdhdGlvbi1tZW51LTQ8L3RpdGxlPjxwYXRoIGQ9Ik0yLjEwOTM3NSAwLjcwNTkzNzVoMTguMjgxMjVzMS40MDYyNSAwIDEuNDA2MjUgMS40MDYyNXYxOC4yODEyNXMwIDEuNDA2MjUgLTEuNDA2MjUgMS40MDYyNUgyLjEwOTM3NXMtMS40MDYyNSAwIC0xLjQwNjI1IC0xLjQwNjI1di0xOC4yODEyNXMwIC0xLjQwNjI1IDEuNDA2MjUgLTEuNDA2MjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0ibTYuMzI4MTI1IDcuMDM0MDYyNSA5Ljg0Mzc1IDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0ibTYuMzI4MTI1IDExLjI1MjgxMjUwMDAwMDAwMSA5Ljg0Mzc1IDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0ibTYuMzI4MTI1IDE1LjQ3MTU2MjUwMDAwMDAwMSA5Ljg0Mzc1IDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+", qg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Xg,
  default: $g
}, Symbol.toStringTag, { value: "Module" })), Kg = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M7.03125 0.703125H2.8125a1.40625 1.40625 0 0 0 -1.40625 1.40625v18.28125a1.40625 1.40625 0 0 0 1.40625 1.40625h4.21875a1.40625 1.40625 0 0 0 1.40625 -1.40625V2.109375A1.40625 1.40625 0 0 0 7.03125 0.703125Z", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "m11.025 0.80625 3.9000000000000004 1.6125a1.415625 1.415625 0 0 1 0.7687499999999999 1.875L8.4375 20.390625", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "m17.8875 5.428125 2.8125 3.121875a1.40625 1.40625 0 0 1 -0.09375 1.9875L8.26875 21.046875", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M1.40625 6.796875H8.4375", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M1.40625 12.890625H8.4375", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M4.86 18.9890625a0.3515625 0.3515625 0 0 1 0 -0.703125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M4.86 18.9890625a0.3515625 0.3515625 0 0 0 0 -0.703125", strokeWidth: 1.5 })), e1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik03LjAzMTI1IDAuNzAzMTI1SDIuODEyNWExLjQwNjI1IDEuNDA2MjUgMCAwIDAgLTEuNDA2MjUgMS40MDYyNXYxOC4yODEyNWExLjQwNjI1IDEuNDA2MjUgMCAwIDAgMS40MDYyNSAxLjQwNjI1aDQuMjE4NzVhMS40MDYyNSAxLjQwNjI1IDAgMCAwIDEuNDA2MjUgLTEuNDA2MjVWMi4xMDkzNzVBMS40MDYyNSAxLjQwNjI1IDAgMCAwIDcuMDMxMjUgMC43MDMxMjVaIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0xMS4wMjUgMC44MDYyNSAzLjkwMDAwMDAwMDAwMDAwMDQgMS42MTI1YTEuNDE1NjI1IDEuNDE1NjI1IDAgMCAxIDAuNzY4NzQ5OTk5OTk5OTk5OSAxLjg3NUw4LjQzNzUgMjAuMzkwNjI1IiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0xNy44ODc1IDUuNDI4MTI1IDIuODEyNSAzLjEyMTg3NWExLjQwNjI1IDEuNDA2MjUgMCAwIDEgLTAuMDkzNzUgMS45ODc1TDguMjY4NzUgMjEuMDQ2ODc1IiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xLjQwNjI1IDYuNzk2ODc1SDguNDM3NSIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMS40MDYyNSAxMi44OTA2MjVIOC40Mzc1IiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBkPSJNNC44NiAxOC45ODkwNjI1YTAuMzUxNTYyNSAwLjM1MTU2MjUgMCAwIDEgMCAtMC43MDMxMjUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGQ9Ik00Ljg2IDE4Ljk4OTA2MjVhMC4zNTE1NjI1IDAuMzUxNTYyNSAwIDAgMCAwIC0wLjcwMzEyNSIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", t1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Kg,
  default: e1
}, Symbol.toStringTag, { value: "Module" })), r1 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", strokeWidth: 1.5, ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "pencil"), /* @__PURE__ */ c("path", { d: "M22.19 1.81a3.639 3.639 0 0 0-5.17.035l-14.5 14.5L.75 23.25l6.905-1.771 14.5-14.5a3.637 3.637 0 0 0 .035-5.169Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "m16.606 2.26 5.134 5.134", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "m2.521 16.344 5.139 5.13", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), i1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxkZWZzPjwvZGVmcz48dGl0bGU+cGVuY2lsPC90aXRsZT48cGF0aCBkPSJNMjIuMTkgMS44MWEzLjYzOSAzLjYzOSAwIDAgMC01LjE3LjAzNWwtMTQuNSAxNC41TC43NSAyMy4yNWw2LjkwNS0xLjc3MSAxNC41LTE0LjVhMy42MzcgMy42MzcgMCAwIDAgLjAzNS01LjE2OVoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJtMTYuNjA2IDIuMjYgNS4xMzQgNS4xMzQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJtMi41MjEgMTYuMzQ0IDUuMTM5IDUuMTMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48L3N2Zz4=", n1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: r1,
  default: i1
}, Symbol.toStringTag, { value: "Module" })), o1 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", strokeWidth: 1.5, ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "picture-sun"), /* @__PURE__ */ c("path", { d: "M2.25.75h19.5s1.5 0 1.5 1.5v19.5s0 1.5-1.5 1.5H2.25s-1.5 0-1.5-1.5V2.25s0-1.5 1.5-1.5", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M13.5 7.5a3 3 0 1 0 6 0 3 3 0 1 0-6 0", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M3.961 14.959a8.194 8.194 0 0 1 11.694 4.149", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M14.382 16.918a4.449 4.449 0 0 1 5.851-.125", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), a1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxkZWZzPjwvZGVmcz48dGl0bGU+cGljdHVyZS1zdW48L3RpdGxlPjxwYXRoIGQ9Ik0yLjI1Ljc1aDE5LjVzMS41IDAgMS41IDEuNXYxOS41czAgMS41LTEuNSAxLjVIMi4yNXMtMS41IDAtMS41LTEuNVYyLjI1czAtMS41IDEuNS0xLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNMTMuNSA3LjVhMyAzIDAgMSAwIDYgMCAzIDMgMCAxIDAtNiAwIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTTMuOTYxIDE0Ljk1OWE4LjE5NCA4LjE5NCAwIDAgMSAxMS42OTQgNC4xNDkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNMTQuMzgyIDE2LjkxOGE0LjQ0OSA0LjQ0OSAwIDAgMSA1Ljg1MS0uMTI1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PC9zdmc+", s1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: o1,
  default: a1
}, Symbol.toStringTag, { value: "Module" })), c1 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M21.796875 8.4375a2.8125 2.8125 0 0 1 -2.8125 2.8125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9.375 7.03125h2.8125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M5.9193750000000005 10.542187499999999a0.3515625 0.3515625 0 0 1 0 -0.703125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M5.9193750000000005 10.542187499999999a0.3515625 0.3515625 0 0 0 0 -0.703125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M7.40625 4.10625C6.309375 2.11875 3.515625 2.109375 3.515625 2.109375l0.590625 4.10625A7.415625 7.415625 0 0 0 2.4375 9.140625H0.703125v5.625h2.334375a7.903124999999999 7.903124999999999 0 0 0 1.875 2.2218750000000003V19.6875a0.7125 0.7125 0 0 0 0.703125 0.703125H7.03125a0.7125 0.7125 0 0 0 0.703125 -0.703125v-1.1625a8.924999999999999 8.924999999999999 0 0 0 5.625 0V19.6875a0.7125 0.7125 0 0 0 0.703125 0.703125h1.40625a0.7125 0.7125 0 0 0 0.703125 -0.703125v-2.68125a7.445625 7.445625 0 0 0 2.8125 -5.75625c0 -6.0843750000000005 -6.609375 -8.803125000000001 -11.578125 -7.14375Z", strokeWidth: 1.5 })), l1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0yMS43OTY4NzUgOC40Mzc1YTIuODEyNSAyLjgxMjUgMCAwIDEgLTIuODEyNSAyLjgxMjUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTkuMzc1IDcuMDMxMjVoMi44MTI1IiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBkPSJNNS45MTkzNzUwMDAwMDAwMDA1IDEwLjU0MjE4NzQ5OTk5OTk5OWEwLjM1MTU2MjUgMC4zNTE1NjI1IDAgMCAxIDAgLTAuNzAzMTI1IiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBkPSJNNS45MTkzNzUwMDAwMDAwMDA1IDEwLjU0MjE4NzQ5OTk5OTk5OWEwLjM1MTU2MjUgMC4zNTE1NjI1IDAgMCAwIDAgLTAuNzAzMTI1IiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik03LjQwNjI1IDQuMTA2MjVDNi4zMDkzNzUgMi4xMTg3NSAzLjUxNTYyNSAyLjEwOTM3NSAzLjUxNTYyNSAyLjEwOTM3NWwwLjU5MDYyNSA0LjEwNjI1QTcuNDE1NjI1IDcuNDE1NjI1IDAgMCAwIDIuNDM3NSA5LjE0MDYyNUgwLjcwMzEyNXY1LjYyNWgyLjMzNDM3NWE3LjkwMzEyNDk5OTk5OTk5OSA3LjkwMzEyNDk5OTk5OTk5OSAwIDAgMCAxLjg3NSAyLjIyMTg3NTAwMDAwMDAwMDNWMTkuNjg3NWEwLjcxMjUgMC43MTI1IDAgMCAwIDAuNzAzMTI1IDAuNzAzMTI1SDcuMDMxMjVhMC43MTI1IDAuNzEyNSAwIDAgMCAwLjcwMzEyNSAtMC43MDMxMjV2LTEuMTYyNWE4LjkyNDk5OTk5OTk5OTk5OSA4LjkyNDk5OTk5OTk5OTk5OSAwIDAgMCA1LjYyNSAwVjE5LjY4NzVhMC43MTI1IDAuNzEyNSAwIDAgMCAwLjcwMzEyNSAwLjcwMzEyNWgxLjQwNjI1YTAuNzEyNSAwLjcxMjUgMCAwIDAgMC43MDMxMjUgLTAuNzAzMTI1di0yLjY4MTI1YTcuNDQ1NjI1IDcuNDQ1NjI1IDAgMCAwIDIuODEyNSAtNS43NTYyNWMwIC02LjA4NDM3NTAwMDAwMDAwMDUgLTYuNjA5Mzc1IC04LjgwMzEyNTAwMDAwMDAwMSAtMTEuNTc4MTI1IC03LjE0Mzc1WiIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", d1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: c1,
  default: l1
}, Symbol.toStringTag, { value: "Module" })), u1 = (e) => /* @__PURE__ */ c("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ c("g", { clipPath: "url(#clip0_718_1014)" }, /* @__PURE__ */ c("path", { d: "M16.5261 11.0917C16.3752 10.3419 16.0406 9.6412 15.5523 9.05252C15.064 8.46385 14.4372 8.00556 13.7282 7.71874M10.1882 7.75382C9.17274 8.18744 8.34628 8.97062 7.85872 9.96133C7.37116 10.952 7.25477 12.0847 7.53068 13.1538M9.63714 15.9655C10.3514 16.3922 11.1682 16.6168 12.0002 16.6154C12.749 16.6162 13.4866 16.4344 14.1493 16.0859C14.812 15.7373 15.3797 15.2325 15.8033 14.6151M14.0042 19.5877C15.072 19.3054 16.0682 18.801 16.9277 18.1074C17.7872 17.4139 18.4907 16.5467 18.9922 15.5627C19.4937 14.5786 19.7819 13.4998 19.8379 12.3968C19.8939 11.2938 19.7166 10.1913 19.3174 9.16151M17.1796 6.10613C15.7488 4.84585 13.9069 4.15158 12.0002 4.15382C10.0945 4.15064 8.25339 4.84434 6.8236 6.10428M4.71898 9.07013C4.29776 10.1172 4.10731 11.2428 4.16062 12.3702C4.21393 13.4976 4.50975 14.6002 5.02791 15.6029C5.54606 16.6056 6.27437 17.4847 7.16315 18.1803C8.05193 18.876 9.08027 19.3717 10.1781 19.6338", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ c("path", { d: "M8.23731 22.4216C9.41239 22.8462 10.6789 23.0769 11.9998 23.0769C17.0952 23.0769 21.3875 19.6366 22.6798 14.9511M6.19547 2.5634C4.58338 3.55458 3.25226 4.94244 2.3292 6.59448C1.40614 8.24652 0.921948 10.1076 0.922853 12C0.922853 15.2723 2.34162 18.2132 4.59855 20.2412M22.9373 10.236C22.0918 4.95602 17.517 0.923096 11.9998 0.923096C11.3629 0.923096 10.7379 0.976634 10.1305 1.08002", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" })), /* @__PURE__ */ c("defs", null, /* @__PURE__ */ c("clipPath", { id: "clip0_718_1014" }, /* @__PURE__ */ c("rect", { width: 24, height: 24 })))), g1 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzcxOF8xMDE0KSI+CjxwYXRoIGQ9Ik0xNi41MjYxIDExLjA5MTdDMTYuMzc1MiAxMC4zNDE5IDE2LjA0MDYgOS42NDEyIDE1LjU1MjMgOS4wNTI1MkMxNS4wNjQgOC40NjM4NSAxNC40MzcyIDguMDA1NTYgMTMuNzI4MiA3LjcxODc0TTEwLjE4ODIgNy43NTM4MkM5LjE3Mjc0IDguMTg3NDQgOC4zNDYyOCA4Ljk3MDYyIDcuODU4NzIgOS45NjEzM0M3LjM3MTE2IDEwLjk1MiA3LjI1NDc3IDEyLjA4NDcgNy41MzA2OCAxMy4xNTM4TTkuNjM3MTQgMTUuOTY1NUMxMC4zNTE0IDE2LjM5MjIgMTEuMTY4MiAxNi42MTY4IDEyLjAwMDIgMTYuNjE1NEMxMi43NDkgMTYuNjE2MiAxMy40ODY2IDE2LjQzNDQgMTQuMTQ5MyAxNi4wODU5QzE0LjgxMiAxNS43MzczIDE1LjM3OTcgMTUuMjMyNSAxNS44MDMzIDE0LjYxNTFNMTQuMDA0MiAxOS41ODc3QzE1LjA3MiAxOS4zMDU0IDE2LjA2ODIgMTguODAxIDE2LjkyNzcgMTguMTA3NEMxNy43ODcyIDE3LjQxMzkgMTguNDkwNyAxNi41NDY3IDE4Ljk5MjIgMTUuNTYyN0MxOS40OTM3IDE0LjU3ODYgMTkuNzgxOSAxMy40OTk4IDE5LjgzNzkgMTIuMzk2OEMxOS44OTM5IDExLjI5MzggMTkuNzE2NiAxMC4xOTEzIDE5LjMxNzQgOS4xNjE1MU0xNy4xNzk2IDYuMTA2MTNDMTUuNzQ4OCA0Ljg0NTg1IDEzLjkwNjkgNC4xNTE1OCAxMi4wMDAyIDQuMTUzODJDMTAuMDk0NSA0LjE1MDY0IDguMjUzMzkgNC44NDQzNCA2LjgyMzYgNi4xMDQyOE00LjcxODk4IDkuMDcwMTNDNC4yOTc3NiAxMC4xMTcyIDQuMTA3MzEgMTEuMjQyOCA0LjE2MDYyIDEyLjM3MDJDNC4yMTM5MyAxMy40OTc2IDQuNTA5NzUgMTQuNjAwMiA1LjAyNzkxIDE1LjYwMjlDNS41NDYwNiAxNi42MDU2IDYuMjc0MzcgMTcuNDg0NyA3LjE2MzE1IDE4LjE4MDNDOC4wNTE5MyAxOC44NzYgOS4wODAyNyAxOS4zNzE3IDEwLjE3ODEgMTkuNjMzOCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTguMjM3MzEgMjIuNDIxNkM5LjQxMjM5IDIyLjg0NjIgMTAuNjc4OSAyMy4wNzY5IDExLjk5OTggMjMuMDc2OUMxNy4wOTUyIDIzLjA3NjkgMjEuMzg3NSAxOS42MzY2IDIyLjY3OTggMTQuOTUxMU02LjE5NTQ3IDIuNTYzNEM0LjU4MzM4IDMuNTU0NTggMy4yNTIyNiA0Ljk0MjQ0IDIuMzI5MiA2LjU5NDQ4QzEuNDA2MTQgOC4yNDY1MiAwLjkyMTk0OCAxMC4xMDc2IDAuOTIyODUzIDEyQzAuOTIyODUzIDE1LjI3MjMgMi4zNDE2MiAxOC4yMTMyIDQuNTk4NTUgMjAuMjQxMk0yMi45MzczIDEwLjIzNkMyMi4wOTE4IDQuOTU2MDIgMTcuNTE3IDAuOTIzMDk2IDExLjk5OTggMC45MjMwOTZDMTEuMzYyOSAwLjkyMzA5NiAxMC43Mzc5IDAuOTc2NjM0IDEwLjEzMDUgMS4wODAwMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF83MThfMTAxNCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=", h1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: u1,
  default: g1
}, Symbol.toStringTag, { value: "Module" })), p1 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M8.4375 8.4375a2.8125 2.8125 0 1 1 3.75 2.6521875 1.40625 1.40625 0 0 0 -0.9375 1.3265625v0.943125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M11.25 16.875a0.3515625 0.3515625 0 0 1 0 -0.703125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M11.25 16.875a0.3515625 0.3515625 0 0 0 0 -0.703125", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeMiterlimit: 10, d: "M11.25 21.796875c5.8246875000000005 0 10.546875 -4.7221874999999995 10.546875 -10.546875S17.0746875 0.703125 11.25 0.703125 0.703125 5.4253124999999995 0.703125 11.25 5.4253124999999995 21.796875 11.25 21.796875Z", strokeWidth: 1.5 })), m1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik04LjQzNzUgOC40Mzc1YTIuODEyNSAyLjgxMjUgMCAxIDEgMy43NSAyLjY1MjE4NzUgMS40MDYyNSAxLjQwNjI1IDAgMCAwIC0wLjkzNzUgMS4zMjY1NjI1djAuOTQzMTI1IiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBkPSJNMTEuMjUgMTYuODc1YTAuMzUxNTYyNSAwLjM1MTU2MjUgMCAwIDEgMCAtMC43MDMxMjUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMS4yNSAxNi44NzVhMC4zNTE1NjI1IDAuMzUxNTYyNSAwIDAgMCAwIC0wLjcwMzEyNSIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTEuMjUgMjEuNzk2ODc1YzUuODI0Njg3NTAwMDAwMDAwNSAwIDEwLjU0Njg3NSAtNC43MjIxODc0OTk5OTk5OTk1IDEwLjU0Njg3NSAtMTAuNTQ2ODc1UzE3LjA3NDY4NzUgMC43MDMxMjUgMTEuMjUgMC43MDMxMjUgMC43MDMxMjUgNS40MjUzMTI0OTk5OTk5OTk1IDAuNzAzMTI1IDExLjI1IDUuNDI1MzEyNDk5OTk5OTk5NSAyMS43OTY4NzUgMTEuMjUgMjEuNzk2ODc1WiIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", f1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: p1,
  default: m1
}, Symbol.toStringTag, { value: "Module" })), M1 = (e) => /* @__PURE__ */ c("svg", { viewBox: "-0.75 -0.75 24 24", xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { d: "M21.796875 14.765625v5.625a1.40625 1.40625 0 0 1 -1.40625 1.40625h-8.4375a1.40625 1.40625 0 0 1 -1.40625 -1.40625v-5.625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M21.796875 14.765625a1.40625 1.40625 0 0 0 -1.40625 -1.40625h-8.4375a1.40625 1.40625 0 0 0 -1.40625 1.40625L15.4265625 17.8125a1.40625 1.40625 0 0 0 1.490625 0Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M3.1640625 3.8671875a3.1640625 3.1640625 0 1 0 6.328125 0 3.1640625 3.1640625 0 1 0 -6.328125 0Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M13.0078125 3.1640625a2.4609375 2.4609375 0 1 0 4.921875 0 2.4609375 2.4609375 0 1 0 -4.921875 0Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M10.73625 10.542187499999999A5.6728125 5.6728125 0 0 0 0.703125 13.359375", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M19.6875 10.546875a4.20375 4.20375 0 0 0 -7.5346875 -2.578125", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), I1 = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMC43NSAtMC43NSAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0yMS43OTY4NzUgMTQuNzY1NjI1djUuNjI1YTEuNDA2MjUgMS40MDYyNSAwIDAgMSAtMS40MDYyNSAxLjQwNjI1aC04LjQzNzVhMS40MDYyNSAxLjQwNjI1IDAgMCAxIC0xLjQwNjI1IC0xLjQwNjI1di01LjYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNMjEuNzk2ODc1IDE0Ljc2NTYyNWExLjQwNjI1IDEuNDA2MjUgMCAwIDAgLTEuNDA2MjUgLTEuNDA2MjVoLTguNDM3NWExLjQwNjI1IDEuNDA2MjUgMCAwIDAgLTEuNDA2MjUgMS40MDYyNUwxNS40MjY1NjI1IDE3LjgxMjVhMS40MDYyNSAxLjQwNjI1IDAgMCAwIDEuNDkwNjI1IDBaIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Ik0zLjE2NDA2MjUgMy44NjcxODc1YTMuMTY0MDYyNSAzLjE2NDA2MjUgMCAxIDAgNi4zMjgxMjUgMCAzLjE2NDA2MjUgMy4xNjQwNjI1IDAgMSAwIC02LjMyODEyNSAwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNMTMuMDA3ODEyNSAzLjE2NDA2MjVhMi40NjA5Mzc1IDIuNDYwOTM3NSAwIDEgMCA0LjkyMTg3NSAwIDIuNDYwOTM3NSAyLjQ2MDkzNzUgMCAxIDAgLTQuOTIxODc1IDBaIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Ik0xMC43MzYyNSAxMC41NDIxODc0OTk5OTk5OTlBNS42NzI4MTI1IDUuNjcyODEyNSAwIDAgMCAwLjcwMzEyNSAxMy4zNTkzNzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0iTTE5LjY4NzUgMTAuNTQ2ODc1YTQuMjAzNzUgNC4yMDM3NSAwIDAgMCAtNy41MzQ2ODc1IC0yLjU3ODEyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", b1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: M1,
  default: I1
}, Symbol.toStringTag, { value: "Module" })), y1 = (e) => /* @__PURE__ */ c("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", strokeWidth: 1.5, ...e }, /* @__PURE__ */ c("path", { d: "M.75,17.251a6.753,6.753,0,0,1,9.4-6.208", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M3.375 4.876 A4.125 4.125 0 1 0 11.625 4.876 A4.125 4.125 0 1 0 3.375 4.876 Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M11.250 17.249 A6.000 6.000 0 1 0 23.250 17.249 A6.000 6.000 0 1 0 11.250 17.249 Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M13.008 21.49L21.492 13.006", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), v1 = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxwYXRoIGQ9Ik0uNzUsMTcuMjUxYTYuNzUzLDYuNzUzLDAsMCwxLDkuNC02LjIwOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0zLjM3NSA0Ljg3NiBBNC4xMjUgNC4xMjUgMCAxIDAgMTEuNjI1IDQuODc2IEE0LjEyNSA0LjEyNSAwIDEgMCAzLjM3NSA0Ljg3NiBaIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTTExLjI1MCAxNy4yNDkgQTYuMDAwIDYuMDAwIDAgMSAwIDIzLjI1MCAxNy4yNDkgQTYuMDAwIDYuMDAwIDAgMSAwIDExLjI1MCAxNy4yNDkgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0xMy4wMDggMjEuNDlMMjEuNDkyIDEzLjAwNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjwvc3ZnPg==", x1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: y1,
  default: v1
}, Symbol.toStringTag, { value: "Module" })), j1 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", height: 24, width: 24, id: "Check-Circle-1--Streamline-Ultimate", ...e }, /* @__PURE__ */ c("desc", null, "Check Circle 1 Streamline Icon: https://streamlinehq.com"), /* @__PURE__ */ c("path", { d: "M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm6.93 8.2 -6.85 9.29a1 1 0 0 1 -1.43 0.19l-4.89 -3.91a1 1 0 0 1 -0.15 -1.41A1 1 0 0 1 7 12.21l4.08 3.26L17.32 7a1 1 0 0 1 1.39 -0.21 1 1 0 0 1 0.22 1.41Z", fill: "currentcolor", strokeWidth: 1 })), N1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiBpZD0iQ2hlY2stQ2lyY2xlLTEtLVN0cmVhbWxpbmUtVWx0aW1hdGUiPjxkZXNjPkNoZWNrIENpcmNsZSAxIFN0cmVhbWxpbmUgSWNvbjogaHR0cHM6Ly9zdHJlYW1saW5laHEuY29tPC9kZXNjPjxwYXRoIGQ9Ik0xMiAwYTEyIDEyIDAgMSAwIDEyIDEyQTEyIDEyIDAgMCAwIDEyIDBabTYuOTMgOC4yIC02Ljg1IDkuMjlhMSAxIDAgMCAxIC0xLjQzIDAuMTlsLTQuODkgLTMuOTFhMSAxIDAgMCAxIC0wLjE1IC0xLjQxQTEgMSAwIDAgMSA3IDEyLjIxbDQuMDggMy4yNkwxNy4zMiA3YTEgMSAwIDAgMSAxLjM5IC0wLjIxIDEgMSAwIDAgMSAwLjIyIDEuNDFaIiBmaWxsPSJjdXJyZW50Y29sb3IiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPjwvc3ZnPg==", w1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: j1,
  default: N1
}, Symbol.toStringTag, { value: "Module" })), k1 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M8.437481250000001 17.98875c-0.26370937499999997 0.263625 -0.621328125 0.41175 -0.99421875 0.41175 -0.37288125 0 -0.730509375 -0.148125 -0.99421875 -0.41175l-5.042812499999999 -5.041875c-0.13067812499999998 -0.13059375 -0.23433749999999998 -0.28565625 -0.3050625 -0.45628125 -0.070734375 -0.17071875 -0.10713750000000001 -0.35362499999999997 -0.10713750000000001 -0.53840625 0 -0.1846875 0.036403125 -0.3676875 0.10713750000000001 -0.5383125000000001 0.070725 -0.17071875 0.174384375 -0.32578124999999997 0.3050625 -0.45637500000000003L11.25 1.11376875c0.13059375 -0.13055624999999998 0.28575 -0.2341059375 0.45637500000000003 -0.304723125 0.17071875 -0.07061625 0.35362499999999997 -0.10692 0.5383125000000001 -0.106835625h5.041875c0.3729375 0 0.73059375 0.1481578125 0.9943124999999999 0.4118775 0.26371875 0.263728125 0.4119375 0.6214125 0.4119375 0.9943687499999999v5.042812499999999c-0.00009375 0.372703125 -0.148125 0.730125 -0.4115625 0.99375", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M15.1771875 4.56939375c-0.19415625 0 -0.3515625 -0.15739687500000002 -0.3515625 -0.3515625 0 -0.19415625 0.15740625 -0.3515625 0.3515625 -0.3515625", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M15.1771875 4.56939375c0.19415625 0 0.3515625 -0.15739687500000002 0.3515625 -0.3515625 0 -0.19415625 -0.15740625 -0.3515625 -0.3515625 -0.3515625", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15.8803125 21.795937499999997c3.10659375 0 5.625 -2.51840625 5.625 -5.625s-2.51840625 -5.625 -5.625 -5.625 -5.625 2.51840625 -5.625 5.625 2.51840625 5.625 5.625 5.625Z", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "m19.858124999999998 12.193125 -7.95375 7.9546874999999995", strokeWidth: 1.5 })), D1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik04LjQzNzQ4MTI1MDAwMDAwMSAxNy45ODg3NWMtMC4yNjM3MDkzNzQ5OTk5OTk5NyAwLjI2MzYyNSAtMC42MjEzMjgxMjUgMC40MTE3NSAtMC45OTQyMTg3NSAwLjQxMTc1IC0wLjM3Mjg4MTI1IDAgLTAuNzMwNTA5Mzc1IC0wLjE0ODEyNSAtMC45OTQyMTg3NSAtMC40MTE3NWwtNS4wNDI4MTI0OTk5OTk5OTkgLTUuMDQxODc1Yy0wLjEzMDY3ODEyNDk5OTk5OTk4IC0wLjEzMDU5Mzc1IC0wLjIzNDMzNzQ5OTk5OTk5OTk4IC0wLjI4NTY1NjI1IC0wLjMwNTA2MjUgLTAuNDU2MjgxMjUgLTAuMDcwNzM0Mzc1IC0wLjE3MDcxODc1IC0wLjEwNzEzNzUwMDAwMDAwMDAxIC0wLjM1MzYyNDk5OTk5OTk5OTk3IC0wLjEwNzEzNzUwMDAwMDAwMDAxIC0wLjUzODQwNjI1IDAgLTAuMTg0Njg3NSAwLjAzNjQwMzEyNSAtMC4zNjc2ODc1IDAuMTA3MTM3NTAwMDAwMDAwMDEgLTAuNTM4MzEyNTAwMDAwMDAwMSAwLjA3MDcyNSAtMC4xNzA3MTg3NSAwLjE3NDM4NDM3NSAtMC4zMjU3ODEyNDk5OTk5OTk5NyAwLjMwNTA2MjUgLTAuNDU2Mzc1MDAwMDAwMDAwMDNMMTEuMjUgMS4xMTM3Njg3NWMwLjEzMDU5Mzc1IC0wLjEzMDU1NjI0OTk5OTk5OTk4IDAuMjg1NzUgLTAuMjM0MTA1OTM3NSAwLjQ1NjM3NTAwMDAwMDAwMDAzIC0wLjMwNDcyMzEyNSAwLjE3MDcxODc1IC0wLjA3MDYxNjI1IDAuMzUzNjI0OTk5OTk5OTk5OTcgLTAuMTA2OTIgMC41MzgzMTI1MDAwMDAwMDAxIC0wLjEwNjgzNTYyNWg1LjA0MTg3NWMwLjM3MjkzNzUgMCAwLjczMDU5Mzc1IDAuMTQ4MTU3ODEyNSAwLjk5NDMxMjQ5OTk5OTk5OTkgMC40MTE4Nzc1IDAuMjYzNzE4NzUgMC4yNjM3MjgxMjUgMC40MTE5Mzc1IDAuNjIxNDEyNSAwLjQxMTkzNzUgMC45OTQzNjg3NDk5OTk5OTk5djUuMDQyODEyNDk5OTk5OTk5Yy0wLjAwMDA5Mzc1IDAuMzcyNzAzMTI1IC0wLjE0ODEyNSAwLjczMDEyNSAtMC40MTE1NjI1IDAuOTkzNzUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGQ9Ik0xNS4xNzcxODc1IDQuNTY5MzkzNzVjLTAuMTk0MTU2MjUgMCAtMC4zNTE1NjI1IC0wLjE1NzM5Njg3NTAwMDAwMDAyIC0wLjM1MTU2MjUgLTAuMzUxNTYyNSAwIC0wLjE5NDE1NjI1IDAuMTU3NDA2MjUgLTAuMzUxNTYyNSAwLjM1MTU2MjUgLTAuMzUxNTYyNSIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgZD0iTTE1LjE3NzE4NzUgNC41NjkzOTM3NWMwLjE5NDE1NjI1IDAgMC4zNTE1NjI1IC0wLjE1NzM5Njg3NTAwMDAwMDAyIDAuMzUxNTYyNSAtMC4zNTE1NjI1IDAgLTAuMTk0MTU2MjUgLTAuMTU3NDA2MjUgLTAuMzUxNTYyNSAtMC4zNTE1NjI1IC0wLjM1MTU2MjUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE1Ljg4MDMxMjUgMjEuNzk1OTM3NDk5OTk5OTk3YzMuMTA2NTkzNzUgMCA1LjYyNSAtMi41MTg0MDYyNSA1LjYyNSAtNS42MjVzLTIuNTE4NDA2MjUgLTUuNjI1IC01LjYyNSAtNS42MjUgLTUuNjI1IDIuNTE4NDA2MjUgLTUuNjI1IDUuNjI1IDIuNTE4NDA2MjUgNS42MjUgNS42MjUgNS42MjVaIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0xOS44NTgxMjQ5OTk5OTk5OTggMTIuMTkzMTI1IC03Ljk1Mzc1IDcuOTU0Njg3NDk5OTk5OTk5NSIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", S1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: k1,
  default: D1
}, Symbol.toStringTag, { value: "Module" })), A1 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M8.437481250000001 17.98875c-0.26370937499999997 0.263625 -0.621328125 0.41175 -0.99421875 0.41175 -0.37288125 0 -0.730509375 -0.148125 -0.99421875 -0.41175l-5.042812499999999 -5.041875c-0.13067812499999998 -0.13059375 -0.23433749999999998 -0.28565625 -0.3050625 -0.45628125 -0.070734375 -0.17071875 -0.10713750000000001 -0.35362499999999997 -0.10713750000000001 -0.53840625 0 -0.1846875 0.036403125 -0.3676875 0.10713750000000001 -0.5383125000000001 0.070725 -0.17071875 0.174384375 -0.32578124999999997 0.3050625 -0.45637500000000003L11.25 1.11376875c0.13059375 -0.13055624999999998 0.28575 -0.2341059375 0.45637500000000003 -0.304723125 0.17071875 -0.07061625 0.35362499999999997 -0.10692 0.5383125000000001 -0.106835625h5.041875c0.3729375 0 0.73059375 0.1481578125 0.9943124999999999 0.4118775 0.26371875 0.263728125 0.4119375 0.6214125 0.4119375 0.9943687499999999v5.042812499999999c-0.00009375 0.372703125 -0.148125 0.730125 -0.4115625 0.99375", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M15.1771875 4.56939375c-0.19415625 0 -0.3515625 -0.15739687500000002 -0.3515625 -0.3515625 0 -0.19415625 0.15740625 -0.3515625 0.3515625 -0.3515625", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", d: "M15.1771875 4.56939375c0.19415625 0 0.3515625 -0.15739687500000002 0.3515625 -0.3515625 0 -0.19415625 -0.15740625 -0.3515625 -0.3515625 -0.3515625", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "m18.38709375 14.53125 -2.7234374999999997 3.631875c-0.06046875 0.08053125 -0.13753125 0.14709375000000002 -0.22593749999999999 0.19528125000000002 -0.0885 0.0481875 -0.1861875 0.07678125 -0.28668750000000004 0.08390625 -0.10040625 0.007031249999999999 -0.20118750000000002 -0.0075 -0.29559375000000004 -0.04265625 -0.0943125 -0.035250000000000004 -0.18 -0.090375 -0.25115625 -0.16153125000000002l-1.40625 -1.40625", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15.8803125 21.795937499999997c3.10659375 0 5.625 -2.51840625 5.625 -5.625s-2.51840625 -5.625 -5.625 -5.625 -5.625 2.51840625 -5.625 5.625 2.51840625 5.625 5.625 5.625Z", strokeWidth: 1.5 })), L1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik04LjQzNzQ4MTI1MDAwMDAwMSAxNy45ODg3NWMtMC4yNjM3MDkzNzQ5OTk5OTk5NyAwLjI2MzYyNSAtMC42MjEzMjgxMjUgMC40MTE3NSAtMC45OTQyMTg3NSAwLjQxMTc1IC0wLjM3Mjg4MTI1IDAgLTAuNzMwNTA5Mzc1IC0wLjE0ODEyNSAtMC45OTQyMTg3NSAtMC40MTE3NWwtNS4wNDI4MTI0OTk5OTk5OTkgLTUuMDQxODc1Yy0wLjEzMDY3ODEyNDk5OTk5OTk4IC0wLjEzMDU5Mzc1IC0wLjIzNDMzNzQ5OTk5OTk5OTk4IC0wLjI4NTY1NjI1IC0wLjMwNTA2MjUgLTAuNDU2MjgxMjUgLTAuMDcwNzM0Mzc1IC0wLjE3MDcxODc1IC0wLjEwNzEzNzUwMDAwMDAwMDAxIC0wLjM1MzYyNDk5OTk5OTk5OTk3IC0wLjEwNzEzNzUwMDAwMDAwMDAxIC0wLjUzODQwNjI1IDAgLTAuMTg0Njg3NSAwLjAzNjQwMzEyNSAtMC4zNjc2ODc1IDAuMTA3MTM3NTAwMDAwMDAwMDEgLTAuNTM4MzEyNTAwMDAwMDAwMSAwLjA3MDcyNSAtMC4xNzA3MTg3NSAwLjE3NDM4NDM3NSAtMC4zMjU3ODEyNDk5OTk5OTk5NyAwLjMwNTA2MjUgLTAuNDU2Mzc1MDAwMDAwMDAwMDNMMTEuMjUgMS4xMTM3Njg3NWMwLjEzMDU5Mzc1IC0wLjEzMDU1NjI0OTk5OTk5OTk4IDAuMjg1NzUgLTAuMjM0MTA1OTM3NSAwLjQ1NjM3NTAwMDAwMDAwMDAzIC0wLjMwNDcyMzEyNSAwLjE3MDcxODc1IC0wLjA3MDYxNjI1IDAuMzUzNjI0OTk5OTk5OTk5OTcgLTAuMTA2OTIgMC41MzgzMTI1MDAwMDAwMDAxIC0wLjEwNjgzNTYyNWg1LjA0MTg3NWMwLjM3MjkzNzUgMCAwLjczMDU5Mzc1IDAuMTQ4MTU3ODEyNSAwLjk5NDMxMjQ5OTk5OTk5OTkgMC40MTE4Nzc1IDAuMjYzNzE4NzUgMC4yNjM3MjgxMjUgMC40MTE5Mzc1IDAuNjIxNDEyNSAwLjQxMTkzNzUgMC45OTQzNjg3NDk5OTk5OTk5djUuMDQyODEyNDk5OTk5OTk5Yy0wLjAwMDA5Mzc1IDAuMzcyNzAzMTI1IC0wLjE0ODEyNSAwLjczMDEyNSAtMC40MTE1NjI1IDAuOTkzNzUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGQ9Ik0xNS4xNzcxODc1IDQuNTY5MzkzNzVjLTAuMTk0MTU2MjUgMCAtMC4zNTE1NjI1IC0wLjE1NzM5Njg3NTAwMDAwMDAyIC0wLjM1MTU2MjUgLTAuMzUxNTYyNSAwIC0wLjE5NDE1NjI1IDAuMTU3NDA2MjUgLTAuMzUxNTYyNSAwLjM1MTU2MjUgLTAuMzUxNTYyNSIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgZD0iTTE1LjE3NzE4NzUgNC41NjkzOTM3NWMwLjE5NDE1NjI1IDAgMC4zNTE1NjI1IC0wLjE1NzM5Njg3NTAwMDAwMDAyIDAuMzUxNTYyNSAtMC4zNTE1NjI1IDAgLTAuMTk0MTU2MjUgLTAuMTU3NDA2MjUgLTAuMzUxNTYyNSAtMC4zNTE1NjI1IC0wLjM1MTU2MjUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTE4LjM4NzA5Mzc1IDE0LjUzMTI1IC0yLjcyMzQzNzQ5OTk5OTk5OTcgMy42MzE4NzVjLTAuMDYwNDY4NzUgMC4wODA1MzEyNSAtMC4xMzc1MzEyNSAwLjE0NzA5Mzc1MDAwMDAwMDAyIC0wLjIyNTkzNzQ5OTk5OTk5OTk5IDAuMTk1MjgxMjUwMDAwMDAwMDIgLTAuMDg4NSAwLjA0ODE4NzUgLTAuMTg2MTg3NSAwLjA3Njc4MTI1IC0wLjI4NjY4NzUwMDAwMDAwMDA0IDAuMDgzOTA2MjUgLTAuMTAwNDA2MjUgMC4wMDcwMzEyNDk5OTk5OTk5OTkgLTAuMjAxMTg3NTAwMDAwMDAwMDIgLTAuMDA3NSAtMC4yOTU1OTM3NTAwMDAwMDAwNCAtMC4wNDI2NTYyNSAtMC4wOTQzMTI1IC0wLjAzNTI1MDAwMDAwMDAwMDAwNCAtMC4xOCAtMC4wOTAzNzUgLTAuMjUxMTU2MjUgLTAuMTYxNTMxMjUwMDAwMDAwMDJsLTEuNDA2MjUgLTEuNDA2MjUiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE1Ljg4MDMxMjUgMjEuNzk1OTM3NDk5OTk5OTk3YzMuMTA2NTkzNzUgMCA1LjYyNSAtMi41MTg0MDYyNSA1LjYyNSAtNS42MjVzLTIuNTE4NDA2MjUgLTUuNjI1IC01LjYyNSAtNS42MjUgLTUuNjI1IDIuNTE4NDA2MjUgLTUuNjI1IDUuNjI1IDIuNTE4NDA2MjUgNS42MjUgNS42MjUgNS42MjVaIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjwvc3ZnPg==", z1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: A1,
  default: L1
}, Symbol.toStringTag, { value: "Module" })), _1 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "type-cursor"), /* @__PURE__ */ c("path", { d: "M2.109375 6.32625h18.28125s1.40625 0 1.40625 1.40625v7.03125s0 1.40625 -1.40625 1.40625H2.109375s-1.40625 0 -1.40625 -1.40625v-7.03125s0 -1.40625 1.40625 -1.40625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m16.171875 17.57625 0 -12.65625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M11.953125 21.795a4.21875 4.21875 0 0 0 4.21875 -4.21875 4.21875 4.21875 0 0 0 4.21875 4.21875", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M11.953125 0.70125a4.21875 4.21875 0 0 1 4.21875 4.21875 4.21875 4.21875 0 0 1 4.21875 -4.21875", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), T1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxkZWZzPjwvZGVmcz48dGl0bGU+dHlwZS1jdXJzb3I8L3RpdGxlPjxwYXRoIGQ9Ik0yLjEwOTM3NSA2LjMyNjI1aDE4LjI4MTI1czEuNDA2MjUgMCAxLjQwNjI1IDEuNDA2MjV2Ny4wMzEyNXMwIDEuNDA2MjUgLTEuNDA2MjUgMS40MDYyNUgyLjEwOTM3NXMtMS40MDYyNSAwIC0xLjQwNjI1IC0xLjQwNjI1di03LjAzMTI1czAgLTEuNDA2MjUgMS40MDYyNSAtMS40MDYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJtMTYuMTcxODc1IDE3LjU3NjI1IDAgLTEyLjY1NjI1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Ik0xMS45NTMxMjUgMjEuNzk1YTQuMjE4NzUgNC4yMTg3NSAwIDAgMCA0LjIxODc1IC00LjIxODc1IDQuMjE4NzUgNC4yMTg3NSAwIDAgMCA0LjIxODc1IDQuMjE4NzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0iTTExLjk1MzEyNSAwLjcwMTI1YTQuMjE4NzUgNC4yMTg3NSAwIDAgMSA0LjIxODc1IDQuMjE4NzUgNC4yMTg3NSA0LjIxODc1IDAgMCAxIDQuMjE4NzUgLTQuMjE4NzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+", C1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: _1,
  default: T1
}, Symbol.toStringTag, { value: "Module" })), E1 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M22 14.429h-3.445a1.905 1.905 0 0 0-1.543.794l-4.617 7.095a1.622 1.622 0 0 1-2.783-.233 1.597 1.597 0 0 1-.103-1.1l.833-3.142a1.867 1.867 0 0 0-.993-2.164 1.911 1.911 0 0 0-.833-.193h-4.63A1.881 1.881 0 0 1 2.08 13.06v-.011l1.8-6.008v-.016c.733-2.36 1.992-3.97 4.47-3.97 5.933 0 5.594-.684 12.523 2.818.377.188.752.379 1.126.572V16.5" })), U1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMiAxNC40MjloLTMuNDQ1YTEuOTA1IDEuOTA1IDAgMCAwLTEuNTQzLjc5NGwtNC42MTcgNy4wOTVhMS42MjIgMS42MjIgMCAwIDEtMi43ODMtLjIzMyAxLjU5NyAxLjU5NyAwIDAgMS0uMTAzLTEuMWwuODMzLTMuMTQyYTEuODY3IDEuODY3IDAgMCAwLS45OTMtMi4xNjQgMS45MTEgMS45MTEgMCAwIDAtLjgzMy0uMTkzaC00LjYzQTEuODgxIDEuODgxIDAgMCAxIDIuMDggMTMuMDZ2LS4wMTFsMS44LTYuMDA4di0uMDE2Yy43MzMtMi4zNiAxLjk5Mi0zLjk3IDQuNDctMy45NyA1LjkzMyAwIDUuNTk0LS42ODQgMTIuNTIzIDIuODE4LjM3Ny4xODguNzUyLjM3OSAxLjEyNi41NzJWMTYuNSIvPgo8L3N2Zz4=", Z1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: E1,
  default: U1
}, Symbol.toStringTag, { value: "Module" })), W1 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M2.001 10.571h3.443a1.907 1.907 0 0 0 1.543-.794l4.618-7.095a1.62 1.62 0 0 1 1.992-.537 1.598 1.598 0 0 1 .892 1.871l-.832 3.14a1.867 1.867 0 0 0 .993 2.165c.259.127.544.193.832.194h4.63a1.883 1.883 0 0 1 1.807 2.426v.011l-1.8 6.008v.015c-.733 2.36-1.993 3.97-4.47 3.97-5.933 0-5.593.684-12.524-2.818-.375-.188-.75-.38-1.125-.57v-9.89" })), O1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yLjAwMSAxMC41NzFoMy40NDNhMS45MDcgMS45MDcgMCAwIDAgMS41NDMtLjc5NGw0LjYxOC03LjA5NWExLjYyIDEuNjIgMCAwIDEgMS45OTItLjUzNyAxLjU5OCAxLjU5OCAwIDAgMSAuODkyIDEuODcxbC0uODMyIDMuMTRhMS44NjcgMS44NjcgMCAwIDAgLjk5MyAyLjE2NWMuMjU5LjEyNy41NDQuMTkzLjgzMi4xOTRoNC42M2ExLjg4MyAxLjg4MyAwIDAgMSAxLjgwNyAyLjQyNnYuMDExbC0xLjggNi4wMDh2LjAxNWMtLjczMyAyLjM2LTEuOTkzIDMuOTctNC40NyAzLjk3LTUuOTMzIDAtNS41OTMuNjg0LTEyLjUyNC0yLjgxOC0uMzc1LS4xODgtLjc1LS4zOC0xLjEyNS0uNTd2LTkuODkiLz4KPC9zdmc+", P1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: W1,
  default: O1
}, Symbol.toStringTag, { value: "Module" })), R1 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "time-reverse"), /* @__PURE__ */ c("path", { d: "m8.5903125 16.5028125 2.8115625 -2.8125 0.0009375 -4.6875", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m13.273125 6.4246875 -3.75 -3.046875 4.21875 -2.578125", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M3.4753125 17.4375a9.2221875 9.2221875 0 1 0 6.1068750000000005 -14.0296875", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M6.42375 4.6284375a9.346875 9.346875 0 0 0 -2.8528125 2.7525", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M2.19 10.78125a9.5728125 9.5728125 0 0 0 0.12187500000000001 3.9628125", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), H1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxkZWZzPjwvZGVmcz48dGl0bGU+dGltZS1yZXZlcnNlPC90aXRsZT48cGF0aCBkPSJtOC41OTAzMTI1IDE2LjUwMjgxMjUgMi44MTE1NjI1IC0yLjgxMjUgMC4wMDA5Mzc1IC00LjY4NzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0ibTEzLjI3MzEyNSA2LjQyNDY4NzUgLTMuNzUgLTMuMDQ2ODc1IDQuMjE4NzUgLTIuNTc4MTI1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Ik0zLjQ3NTMxMjUgMTcuNDM3NWE5LjIyMjE4NzUgOS4yMjIxODc1IDAgMSAwIDYuMTA2ODc1MDAwMDAwMDAwNSAtMTQuMDI5Njg3NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNNi40MjM3NSA0LjYyODQzNzVhOS4zNDY4NzUgOS4zNDY4NzUgMCAwIDAgLTIuODUyODEyNSAyLjc1MjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0iTTIuMTkgMTAuNzgxMjVhOS41NzI4MTI1IDkuNTcyODEyNSAwIDAgMCAwLjEyMTg3NTAwMDAwMDAwMDAxIDMuOTYyODEyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48L3N2Zz4=", G1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: R1,
  default: H1
}, Symbol.toStringTag, { value: "Module" })), Y1 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18.0576 22.3846H5.94219C5.48317 22.3846 5.04294 22.2023 4.71836 21.8777C4.39377 21.5531 4.21143 21.1129 4.21143 20.6538V5.07692H19.7883V20.6538C19.7883 21.1129 19.606 21.5531 19.2814 21.8777C18.9568 22.2023 18.5166 22.3846 18.0576 22.3846Z" }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9.40381 17.1923V10.2692" }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M14.5962 17.1923V10.2692" }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M0.75 5.07692H23.25" }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M14.5962 1.61539H9.40386C8.94484 1.61539 8.50461 1.79774 8.18003 2.12232C7.85544 2.4469 7.6731 2.88713 7.6731 3.34616V5.07693H16.3269V3.34616C16.3269 2.88713 16.1446 2.4469 15.82 2.12232C15.4954 1.79774 15.0552 1.61539 14.5962 1.61539Z" })), Q1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xOC4wNTc2IDIyLjM4NDZINS45NDIxOUM1LjQ4MzE3IDIyLjM4NDYgNS4wNDI5NCAyMi4yMDIzIDQuNzE4MzYgMjEuODc3N0M0LjM5Mzc3IDIxLjU1MzEgNC4yMTE0MyAyMS4xMTI5IDQuMjExNDMgMjAuNjUzOFY1LjA3NjkySDE5Ljc4ODNWMjAuNjUzOEMxOS43ODgzIDIxLjExMjkgMTkuNjA2IDIxLjU1MzEgMTkuMjgxNCAyMS44Nzc3QzE4Ljk1NjggMjIuMjAyMyAxOC41MTY2IDIyLjM4NDYgMTguMDU3NiAyMi4zODQ2WiI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik05LjQwMzgxIDE3LjE5MjNWMTAuMjY5MiI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNC41OTYyIDE3LjE5MjNWMTAuMjY5MiI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0wLjc1IDUuMDc2OTJIMjMuMjUiPjwvcGF0aD48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTQuNTk2MiAxLjYxNTM5SDkuNDAzODZDOC45NDQ4NCAxLjYxNTM5IDguNTA0NjEgMS43OTc3NCA4LjE4MDAzIDIuMTIyMzJDNy44NTU0NCAyLjQ0NjkgNy42NzMxIDIuODg3MTMgNy42NzMxIDMuMzQ2MTZWNS4wNzY5M0gxNi4zMjY5VjMuMzQ2MTZDMTYuMzI2OSAyLjg4NzEzIDE2LjE0NDYgMi40NDY5IDE1LjgyIDIuMTIyMzJDMTUuNDk1NCAxLjc5Nzc0IDE1LjA1NTIgMS42MTUzOSAxNC41OTYyIDEuNjE1MzlaIj48L3BhdGg+PC9zdmc+", B1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: Y1,
  default: Q1
}, Symbol.toStringTag, { value: "Module" })), J1 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "-0.75 -0.75 24 24", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M16.5440625 21.724687499999998 0.703125 0.703125l5.2528125 0L21.796875 21.724687499999998h-5.2528125Z", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "m21.0515625 0.703125 -8.3503125 8.954062500000001", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "m1.4484374999999998 21.724687499999998 8.34375 -8.9475", strokeWidth: 1.5 })), V1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9Ii0wLjc1IC0wLjc1IDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNi41NDQwNjI1IDIxLjcyNDY4NzQ5OTk5OTk5OCAwLjcwMzEyNSAwLjcwMzEyNWw1LjI1MjgxMjUgMEwyMS43OTY4NzUgMjEuNzI0Njg3NDk5OTk5OTk4aC01LjI1MjgxMjVaIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0yMS4wNTE1NjI1IDAuNzAzMTI1IC04LjM1MDMxMjUgOC45NTQwNjI1MDAwMDAwMDEiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTEuNDQ4NDM3NDk5OTk5OTk5OCAyMS43MjQ2ODc0OTk5OTk5OTggOC4zNDM3NSAtOC45NDc1IiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjwvc3ZnPg==", F1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: J1,
  default: V1
}, Symbol.toStringTag, { value: "Module" })), X1 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 122.43 122.41", ...e }, /* @__PURE__ */ c("path", { d: "M83.86 54.15v34.13H38.57V54.15H0v68.26h122.43V54.15H83.86zM38.57 0h45.3v34.13h-45.3z" })), $1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjIuNDMgMTIyLjQxIj4KICAgIDxwYXRoIGQ9Ik04My44NiA1NC4xNXYzNC4xM0gzOC41N1Y1NC4xNUgwdjY4LjI2aDEyMi40M1Y1NC4xNUg4My44NnpNMzguNTcgMGg0NS4zdjM0LjEzaC00NS4zeiIvPgo8L3N2Zz4=", q1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: X1,
  default: $1
}, Symbol.toStringTag, { value: "Module" })), K1 = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", strokeWidth: 1.5, ...e }, /* @__PURE__ */ c("defs", null), /* @__PURE__ */ c("title", null, "upload-bottom"), /* @__PURE__ */ c("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12.001 15.75v-12" }), /* @__PURE__ */ c("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "m16.501 8.25-4.5-4.5-4.5 4.5" }), /* @__PURE__ */ c("path", { d: "M23.251 15.75v1.5a3 3 0 0 1-3 3h-16.5a3 3 0 0 1-3-3v-1.5", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), eh = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxkZWZzPjwvZGVmcz48dGl0bGU+dXBsb2FkLWJvdHRvbTwvdGl0bGU+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTEyLjAwMSAxNS43NXYtMTIiPjwvcGF0aD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJtMTYuNTAxIDguMjUtNC41LTQuNS00LjUgNC41Ij48L3BhdGg+PHBhdGggZD0iTTIzLjI1MSAxNS43NXYxLjVhMyAzIDAgMCAxLTMgM2gtMTYuNWEzIDMgMCAwIDEtMy0zdi0xLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48L3N2Zz4=", th = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: K1,
  default: eh
}, Symbol.toStringTag, { value: "Module" })), rh = (e) => /* @__PURE__ */ c("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", strokeWidth: 1.5, ...e }, /* @__PURE__ */ c("path", { d: "M11.250 17.250 A6.000 6.000 0 1 0 23.250 17.250 A6.000 6.000 0 1 0 11.250 17.250 Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M17.25 14.25L17.25 20.25", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M14.25 17.25L20.25 17.25", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M.75,17.25a6.753,6.753,0,0,1,9.4-6.208", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ c("path", { d: "M3.375 4.875 A4.125 4.125 0 1 0 11.625 4.875 A4.125 4.125 0 1 0 3.375 4.875 Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), ih = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxwYXRoIGQ9Ik0xMS4yNTAgMTcuMjUwIEE2LjAwMCA2LjAwMCAwIDEgMCAyMy4yNTAgMTcuMjUwIEE2LjAwMCA2LjAwMCAwIDEgMCAxMS4yNTAgMTcuMjUwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNMTcuMjUgMTQuMjVMMTcuMjUgMjAuMjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNMTQuMjUgMTcuMjVMMjAuMjUgMTcuMjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNLjc1LDE3LjI1YTYuNzUzLDYuNzUzLDAsMCwxLDkuNC02LjIwOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0zLjM3NSA0Ljg3NSBBNC4xMjUgNC4xMjUgMCAxIDAgMTEuNjI1IDQuODc1IEE0LjEyNSA0LjEyNSAwIDEgMCAzLjM3NSA0Ljg3NSBaIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PC9zdmc+", nh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: rh,
  default: ih
}, Symbol.toStringTag, { value: "Module" })), oh = (e) => /* @__PURE__ */ c("svg", { viewBox: "-0.75 -0.75 24 24", xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { d: "M0.703125 14.765625a7.03125 7.03125 0 1 0 14.0625 0 7.03125 7.03125 0 1 0 -14.0625 0Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M4.921875 13.359375a2.8125 2.8125 0 1 0 5.625 0 2.8125 2.8125 0 1 0 -5.625 0Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M12.3159375 20.0990625a5.1206249999999995 5.1206249999999995 0 0 0 -9.163124999999999 0", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M3.515625 4.921875v-2.8125a1.40625 1.40625 0 0 1 1.40625 -1.40625h9.9646875a1.40625 1.40625 0 0 1 0.99375 0.4115625l5.505 5.505a1.40625 1.40625 0 0 1 0.4115625 0.99375V20.390625a1.40625 1.40625 0 0 1 -1.40625 1.40625h-4.21875", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M21.796875 7.734375h-5.625a1.40625 1.40625 0 0 1 -1.40625 -1.40625v-5.625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), ah = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMC43NSAtMC43NSAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0wLjcwMzEyNSAxNC43NjU2MjVhNy4wMzEyNSA3LjAzMTI1IDAgMSAwIDE0LjA2MjUgMCA3LjAzMTI1IDcuMDMxMjUgMCAxIDAgLTE0LjA2MjUgMFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0iTTQuOTIxODc1IDEzLjM1OTM3NWEyLjgxMjUgMi44MTI1IDAgMSAwIDUuNjI1IDAgMi44MTI1IDIuODEyNSAwIDEgMCAtNS42MjUgMFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0iTTEyLjMxNTkzNzUgMjAuMDk5MDYyNWE1LjEyMDYyNDk5OTk5OTk5OTUgNS4xMjA2MjQ5OTk5OTk5OTk1IDAgMCAwIC05LjE2MzEyNDk5OTk5OTk5OSAwIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Ik0zLjUxNTYyNSA0LjkyMTg3NXYtMi44MTI1YTEuNDA2MjUgMS40MDYyNSAwIDAgMSAxLjQwNjI1IC0xLjQwNjI1aDkuOTY0Njg3NWExLjQwNjI1IDEuNDA2MjUgMCAwIDEgMC45OTM3NSAwLjQxMTU2MjVsNS41MDUgNS41MDVhMS40MDYyNSAxLjQwNjI1IDAgMCAxIDAuNDExNTYyNSAwLjk5Mzc1VjIwLjM5MDYyNWExLjQwNjI1IDEuNDA2MjUgMCAwIDEgLTEuNDA2MjUgMS40MDYyNWgtNC4yMTg3NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNMjEuNzk2ODc1IDcuNzM0Mzc1aC01LjYyNWExLjQwNjI1IDEuNDA2MjUgMCAwIDEgLTEuNDA2MjUgLTEuNDA2MjV2LTUuNjI1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjwvc3ZnPg==", sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: oh,
  default: ah
}, Symbol.toStringTag, { value: "Module" })), ch = (e) => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M13.313 2.27521C13.1833 2.04051 12.9931 1.84486 12.7622 1.70861C12.5313 1.57235 12.2681 1.50049 12 1.50049C11.7318 1.50049 11.4686 1.57235 11.2377 1.70861C11.0068 1.84486 10.8166 2.04051 10.687 2.27521L0.936968 20.2752C0.810886 20.5036 0.746538 20.7609 0.750276 21.0217C0.754014 21.2825 0.825708 21.5379 0.958282 21.7625C1.09086 21.9872 1.27972 22.1734 1.50625 22.3028C1.73277 22.4321 1.98911 22.5002 2.24997 22.5002H21.75C22.0108 22.5002 22.2672 22.4321 22.4937 22.3028C22.7202 22.1734 22.9091 21.9872 23.0417 21.7625C23.1742 21.5379 23.2459 21.2825 23.2497 21.0217C23.2534 20.7609 23.189 20.5036 23.063 20.2752L13.313 2.27521Z" }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 15V8.25" }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeWidth: 1.5, d: "M12 18.75C11.7929 18.75 11.625 18.5821 11.625 18.375C11.625 18.1679 11.7929 18 12 18" }), /* @__PURE__ */ c("path", { stroke: "currentColor", strokeWidth: 1.5, d: "M12 18.75C12.2071 18.75 12.375 18.5821 12.375 18.375C12.375 18.1679 12.2071 18 12 18" })), lh = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMy4zMTMgMi4yNzUyMUMxMy4xODMzIDIuMDQwNTEgMTIuOTkzMSAxLjg0NDg2IDEyLjc2MjIgMS43MDg2MUMxMi41MzEzIDEuNTcyMzUgMTIuMjY4MSAxLjUwMDQ5IDEyIDEuNTAwNDlDMTEuNzMxOCAxLjUwMDQ5IDExLjQ2ODYgMS41NzIzNSAxMS4yMzc3IDEuNzA4NjFDMTEuMDA2OCAxLjg0NDg2IDEwLjgxNjYgMi4wNDA1MSAxMC42ODcgMi4yNzUyMUwwLjkzNjk2OCAyMC4yNzUyQzAuODEwODg2IDIwLjUwMzYgMC43NDY1MzggMjAuNzYwOSAwLjc1MDI3NiAyMS4wMjE3QzAuNzU0MDE0IDIxLjI4MjUgMC44MjU3MDggMjEuNTM3OSAwLjk1ODI4MiAyMS43NjI1QzEuMDkwODYgMjEuOTg3MiAxLjI3OTcyIDIyLjE3MzQgMS41MDYyNSAyMi4zMDI4QzEuNzMyNzcgMjIuNDMyMSAxLjk4OTExIDIyLjUwMDIgMi4yNDk5NyAyMi41MDAySDIxLjc1QzIyLjAxMDggMjIuNTAwMiAyMi4yNjcyIDIyLjQzMjEgMjIuNDkzNyAyMi4zMDI4QzIyLjcyMDIgMjIuMTczNCAyMi45MDkxIDIxLjk4NzIgMjMuMDQxNyAyMS43NjI1QzIzLjE3NDIgMjEuNTM3OSAyMy4yNDU5IDIxLjI4MjUgMjMuMjQ5NyAyMS4wMjE3QzIzLjI1MzQgMjAuNzYwOSAyMy4xODkgMjAuNTAzNiAyMy4wNjMgMjAuMjc1MkwxMy4zMTMgMi4yNzUyMVoiPjwvcGF0aD48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyIDE1VjguMjUiPjwvcGF0aD48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMiAxOC43NUMxMS43OTI5IDE4Ljc1IDExLjYyNSAxOC41ODIxIDExLjYyNSAxOC4zNzVDMTEuNjI1IDE4LjE2NzkgMTEuNzkyOSAxOCAxMiAxOCI+PC9wYXRoPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyIDE4Ljc1QzEyLjIwNzEgMTguNzUgMTIuMzc1IDE4LjU4MjEgMTIuMzc1IDE4LjM3NUMxMi4zNzUgMTguMTY3OSAxMi4yMDcxIDE4IDEyIDE4Ij48L3BhdGg+PC9zdmc+", dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: ch,
  default: lh
}, Symbol.toStringTag, { value: "Module" })), uh = (e) => /* @__PURE__ */ c("svg", { viewBox: "-0.75 -0.75 24 24", xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, ...e }, /* @__PURE__ */ c("path", { d: "M10.546875 16.171875a5.625 5.625 0 1 0 11.25 0 5.625 5.625 0 1 0 -11.25 0Z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m18.658125000000002 16.171875 -2.48625 0 0 -2.4853125", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M9.838125 21.703125a10.5478125 10.5478125 0 1 1 11.866875 -11.85375", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M8.7084375 21.4884375C7.2825 19.3959375 6.328125 15.593437499999999 6.328125 11.25S7.2825 3.105 8.7084375 1.0115625", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m0.7265625 10.546875 8.9278125 0", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M2.8115625 4.921875 19.6875 4.921875", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "m1.92 16.171875 5.814375 0", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }), /* @__PURE__ */ c("path", { d: "M13.7915625 1.0115625a15.9215625 15.9215625 0 0 1 2.15625 6.69", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 })), gh = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMC43NSAtMC43NSAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0xMC41NDY4NzUgMTYuMTcxODc1YTUuNjI1IDUuNjI1IDAgMSAwIDExLjI1IDAgNS42MjUgNS42MjUgMCAxIDAgLTExLjI1IDBaIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Im0xOC42NTgxMjUwMDAwMDAwMDIgMTYuMTcxODc1IC0yLjQ4NjI1IDAgMCAtMi40ODUzMTI1IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPjxwYXRoIGQ9Ik05LjgzODEyNSAyMS43MDMxMjVhMTAuNTQ3ODEyNSAxMC41NDc4MTI1IDAgMSAxIDExLjg2Njg3NSAtMTEuODUzNzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0iTTguNzA4NDM3NSAyMS40ODg0Mzc1QzcuMjgyNSAxOS4zOTU5Mzc1IDYuMzI4MTI1IDE1LjU5MzQzNzQ5OTk5OTk5OSA2LjMyODEyNSAxMS4yNVM3LjI4MjUgMy4xMDUgOC43MDg0Mzc1IDEuMDExNTYyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJtMC43MjY1NjI1IDEwLjU0Njg3NSA4LjkyNzgxMjUgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjwvcGF0aD48cGF0aCBkPSJNMi44MTE1NjI1IDQuOTIxODc1IDE5LjY4NzUgNC45MjE4NzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0ibTEuOTIgMTYuMTcxODc1IDUuODE0Mzc1IDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PHBhdGggZD0iTTEzLjc5MTU2MjUgMS4wMTE1NjI1YTE1LjkyMTU2MjUgMTUuOTIxNTYyNSAwIDAgMSAyLjE1NjI1IDYuNjkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+", hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ReactComponent: uh,
  default: gh
}, Symbol.toStringTag, { value: "Module" })), ph = /* @__PURE__ */ Object.assign({ "../assets/icons/add.svg": bd, "../assets/icons/ai-tagging-spark.svg": xd, "../assets/icons/align-center.svg": wd, "../assets/icons/align-left.svg": Sd, "../assets/icons/angle-brackets.svg": zd, "../assets/icons/arrow-bottom-left.svg": Cd, "../assets/icons/arrow-bottom-right.svg": Zd, "../assets/icons/arrow-down.svg": Pd, "../assets/icons/arrow-left.svg": Gd, "../assets/icons/arrow-right.svg": Bd, "../assets/icons/arrow-top-left.svg": Fd, "../assets/icons/arrow-top-right.svg": qd, "../assets/icons/arrow-up.svg": tu, "../assets/icons/at-sign.svg": nu, "../assets/icons/baseline-chart.svg": su, "../assets/icons/bills.svg": du, "../assets/icons/book-open.svg": hu, "../assets/icons/brackets.svg": fu, "../assets/icons/cardview.svg": bu, "../assets/icons/check-circle.svg": xu, "../assets/icons/check.svg": wu, "../assets/icons/chevron-down.svg": Su, "../assets/icons/chevron-left.svg": zu, "../assets/icons/chevron-right.svg": Cu, "../assets/icons/chevron-up.svg": Zu, "../assets/icons/close.svg": Pu, "../assets/icons/comment.svg": Gu, "../assets/icons/crown.svg": Bu, "../assets/icons/discount.svg": Fu, "../assets/icons/download.svg": qu, "../assets/icons/duplicate.svg": t0, "../assets/icons/ellipsis.svg": n0, "../assets/icons/email-check.svg": s0, "../assets/icons/email.svg": d0, "../assets/icons/emailfield.svg": h0, "../assets/icons/error-fill.svg": f0, "../assets/icons/export.svg": b0, "../assets/icons/eyedropper.svg": x0, "../assets/icons/facebook.svg": w0, "../assets/icons/finger-up.svg": S0, "../assets/icons/hamburger.svg": z0, "../assets/icons/heart.svg": C0, "../assets/icons/hyperlink-circle.svg": Z0, "../assets/icons/import.svg": P0, "../assets/icons/info-fill.svg": G0, "../assets/icons/integration.svg": B0, "../assets/icons/key.svg": F0, "../assets/icons/labs-flask.svg": q0, "../assets/icons/language.svg": tg, "../assets/icons/laptop.svg": ng, "../assets/icons/layer.svg": sg, "../assets/icons/layout-headline.svg": dg, "../assets/icons/layout-module-1.svg": hg, "../assets/icons/like.svg": fg, "../assets/icons/link-broken.svg": bg, "../assets/icons/linkedin.svg": xg, "../assets/icons/listview.svg": wg, "../assets/icons/lock-locked.svg": Sg, "../assets/icons/lock-unlocked.svg": zg, "../assets/icons/magnifying-glass.svg": Cg, "../assets/icons/mail-block.svg": Zg, "../assets/icons/megaphone.svg": Pg, "../assets/icons/mobile.svg": Gg, "../assets/icons/modules-3.svg": Bg, "../assets/icons/money-bags.svg": Fg, "../assets/icons/navigation.svg": qg, "../assets/icons/palette.svg": t1, "../assets/icons/pen.svg": n1, "../assets/icons/picture.svg": s1, "../assets/icons/piggybank.svg": d1, "../assets/icons/portal.svg": h1, "../assets/icons/question-circle.svg": f1, "../assets/icons/recepients.svg": b1, "../assets/icons/single-user-block.svg": x1, "../assets/icons/single-user-fill.svg": fd, "../assets/icons/success-fill.svg": w1, "../assets/icons/tags-block.svg": S1, "../assets/icons/tags-check.svg": z1, "../assets/icons/textfield.svg": C1, "../assets/icons/thumbs-down.svg": Z1, "../assets/icons/thumbs-up.svg": P1, "../assets/icons/time-back.svg": G1, "../assets/icons/trash.svg": B1, "../assets/icons/twitter-x.svg": F1, "../assets/icons/unsplash-logo.svg": q1, "../assets/icons/upload.svg": th, "../assets/icons/user-add.svg": nh, "../assets/icons/user-page.svg": sh, "../assets/icons/warning.svg": dh, "../assets/icons/world-clock.svg": hh }), dr = ({ name: e, size: t = "md", colorClass: r = "", className: i = "" }) => {
  const { ReactComponent: n } = ph[`../assets/icons/${e}.svg`];
  let o = "";
  if (!o)
    switch (t) {
      case "custom":
        break;
      case "2xs":
        o = "w-2 h-2";
        break;
      case "xs":
        o = "w-3 h-3";
        break;
      case "sm":
        o = "w-4 h-4";
        break;
      case "lg":
        o = "w-8 h-8";
        break;
      case "xl":
        o = "w-10 h-10";
        break;
      default:
        o = "w-5 h-5";
        break;
    }
  return o = k(
    o,
    r
  ), n ? /* @__PURE__ */ h.jsx(n, { className: `pointer-events-none ${o} ${i}` }) : null;
}, mh = ({ size: e, color: t, delay: r, style: i }) => {
  const [n, o] = U.useState(!r);
  U.useEffect(() => {
    if (r) {
      const s = setTimeout(() => {
        o(!0);
      }, r);
      return () => {
        clearTimeout(s);
      };
    }
  }, [r]);
  let a = "relative mx-0 my-[-0.5] box-border inline-block animate-spin rounded-full before:z-10 before:block before:rounded-full before:content-[''] ";
  switch (e) {
    case "sm":
      a += " h-[16px] w-[16px] border-2 before:mt-[10px] before:h-[3px] before:w-[3px] ";
      break;
    case "md":
      a += " h-[20px] w-[20px] border-2 before:mt-[13px] before:h-[3px] before:w-[3px] ";
      break;
    case "lg":
    default:
      a += " h-[50px] w-[50px] border before:mt-[7px] before:h-[7px] before:w-[7px] ";
      break;
  }
  switch (t) {
    case "light":
      a += " border-white/20 before:bg-white dark:border-black/10 dark:before:bg-black ";
      break;
    case "dark":
    default:
      a += " border-black/10 before:bg-black dark:border-white/20 dark:before:bg-white ";
      break;
  }
  return e === "lg" ? /* @__PURE__ */ h.jsx("div", { className: `flex h-64 items-center justify-center transition-opacity ${n ? "opacity-100" : "opacity-0"}`, style: i, children: /* @__PURE__ */ h.jsx("div", { className: a }) }) : /* @__PURE__ */ h.jsx("div", { className: a });
}, pe = ({
  testId: e,
  size: t = "md",
  label: r = "",
  hideLabel: i = !1,
  icon: n = "",
  iconSize: o,
  iconColorClass: a,
  color: s = "clear",
  fullWidth: l,
  link: d,
  linkWithPadding: u = !1,
  disabled: g,
  unstyled: m = !1,
  className: p = "",
  tag: I = "button",
  loading: v = !1,
  loadingIndicatorColor: M,
  outlineOnMobile: f = !1,
  onClick: b,
  ...x
}) => {
  if (s || (s = "clear"), !m) {
    switch (p = k(
      "inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition",
      d && s !== "clear" && s !== "black" || !d && s !== "clear" ? "font-bold" : "font-semibold",
      d ? "" : `${t === "sm" ? "h-7" : "h-[34px]"}`,
      d ? "" : `${t === "sm" || r && n ? "px-3" : "px-4"}`,
      d && u && "-m-1 p-1",
      p
    ), s) {
      case "black":
        p = k(
          d ? "text-black hover:text-grey-800 dark:text-white" : `bg-black text-white dark:bg-white dark:text-black ${!g && "hover:bg-grey-900"}`,
          p
        ), M = "light", a = a || "text-white";
        break;
      case "light-grey":
        p = k(
          d ? "text-grey-800 hover:text-green-400 dark:text-white" : `bg-grey-200 text-black dark:bg-grey-900 dark:text-white ${!g && "hover:!bg-grey-300 dark:hover:!bg-grey-800"}`,
          p
        ), M = "dark";
        break;
      case "grey":
        p = k(
          d ? "text-black hover:text-grey-800 dark:text-white" : `bg-grey-100 text-black dark:bg-grey-900 dark:text-white ${!g && "hover:!bg-grey-300 dark:hover:!bg-grey-800"}`,
          p
        ), M = "dark";
        break;
      case "green":
        p = k(
          d ? " text-green hover:text-green-400" : ` bg-green text-white ${!g && "hover:bg-green-400"}`,
          p
        ), M = "light", a = a || "text-white";
        break;
      case "red":
        p = k(
          d ? "text-red hover:text-red-400" : `bg-red text-white ${!g && "hover:bg-red-400"}`,
          p
        ), M = "light", a = a || "text-white";
        break;
      case "white":
        p = k(
          d ? "text-white hover:text-white dark:text-black dark:hover:text-grey-800" : "bg-white text-black dark:bg-black dark:text-white",
          p
        ), M = "dark";
        break;
      case "outline":
        p = k(
          d ? "text-black hover:text-grey-800 dark:text-white" : `border border-grey-300 bg-transparent text-black dark:border-grey-800 dark:text-white ${!g && "hover:!border-black dark:hover:!border-white"}`,
          p
        ), M = "dark";
        break;
      default:
        p = k(
          d ? " text-black hover:text-grey-800 dark:text-white" : `text-grey-900 dark:text-white dark:hover:bg-grey-900 ${!g && "hover:bg-grey-200 hover:text-black"}`,
          f && !d && "border border-grey-300 hover:border-transparent md:border-transparent",
          p
        ), M = "dark";
        break;
    }
    p = k(
      l && !d && " w-full",
      g ? "opacity-40" : "cursor-pointer",
      p
    );
  }
  const S = r && n && !i ? "mr-1.5" : "";
  let z = "";
  z += r && i ? "sr-only" : "", z += v ? "invisible" : "", o = o || (t === "sm" || r && n ? "sm" : "md");
  const D = /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    n && /* @__PURE__ */ h.jsx(dr, { className: S, colorClass: a, name: n, size: o }),
    /* @__PURE__ */ h.jsx("span", { className: z, children: r }),
    v && /* @__PURE__ */ h.jsxs("div", { className: "absolute flex", children: [
      /* @__PURE__ */ h.jsx(mh, { color: M, size: t }),
      /* @__PURE__ */ h.jsx("span", { className: "sr-only", children: "Loading..." })
    ] })
  ] });
  return U.createElement(I, {
    className: p,
    "data-testid": e,
    disabled: g,
    type: "button",
    onClick: b,
    ...x
  }, D);
};
var O = globalThis && globalThis.__assign || function() {
  return O = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, O.apply(this, arguments);
}, Eo = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++)
      t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
  return r;
}, Ft = Symbol("NiceModalId"), Hi = {}, Oe = U.createContext(Hi), Uo = U.createContext(null), q = {}, Fe = {}, fh = 0, Pe = function() {
  throw new Error("No dispatch method detected, did you embed your app with NiceModal.Provider?");
}, Zo = function() {
  return "_nice_modal_" + fh++;
}, Wo = function(e, t) {
  var r, i, n;
  switch (e === void 0 && (e = Hi), t.type) {
    case "nice-modal/show": {
      var o = t.payload, a = o.modalId, s = o.args;
      return O(O({}, e), (r = {}, r[a] = O(O({}, e[a]), {
        id: a,
        args: s,
        // If modal is not mounted, mount it first then make it visible.
        // There is logic inside HOC wrapper to make it visible after its first mount.
        // This mechanism ensures the entering transition.
        visible: !!Fe[a],
        delayVisible: !Fe[a]
      }), r));
    }
    case "nice-modal/hide": {
      var a = t.payload.modalId;
      return e[a] ? O(O({}, e), (i = {}, i[a] = O(O({}, e[a]), { visible: !1 }), i)) : e;
    }
    case "nice-modal/remove": {
      var a = t.payload.modalId, l = O({}, e);
      return delete l[a], l;
    }
    case "nice-modal/set-flags": {
      var d = t.payload, a = d.modalId, u = d.flags;
      return O(O({}, e), (n = {}, n[a] = O(O({}, e[a]), u), n));
    }
    default:
      return e;
  }
};
function Mh(e) {
  var t;
  return (t = q[e]) === null || t === void 0 ? void 0 : t.comp;
}
function Ih(e, t) {
  return {
    type: "nice-modal/show",
    payload: {
      modalId: e,
      args: t
    }
  };
}
function bh(e, t) {
  return {
    type: "nice-modal/set-flags",
    payload: {
      modalId: e,
      flags: t
    }
  };
}
function yh(e) {
  return {
    type: "nice-modal/hide",
    payload: {
      modalId: e
    }
  };
}
function vh(e) {
  return {
    type: "nice-modal/remove",
    payload: {
      modalId: e
    }
  };
}
var ae = {}, _e = {}, kt = function(e) {
  return typeof e == "string" ? e : (e[Ft] || (e[Ft] = Zo()), e[Ft]);
};
function Gi(e, t) {
  var r = kt(e);
  if (typeof e != "string" && !q[r] && Dt(r, e), Pe(Ih(r, t)), !ae[r]) {
    var i, n, o = new Promise(function(a, s) {
      i = a, n = s;
    });
    ae[r] = {
      resolve: i,
      reject: n,
      promise: o
    };
  }
  return ae[r].promise;
}
function Yi(e) {
  var t = kt(e);
  if (Pe(yh(t)), delete ae[t], !_e[t]) {
    var r, i, n = new Promise(function(o, a) {
      r = o, i = a;
    });
    _e[t] = {
      resolve: r,
      reject: i,
      promise: n
    };
  }
  return _e[t].promise;
}
var Oo = function(e) {
  var t = kt(e);
  Pe(vh(t)), delete ae[t], delete _e[t];
}, xh = function(e, t) {
  Pe(bh(e, t));
};
function Po(e, t) {
  var r = B(Oe), i = B(Uo), n = null, o = e && typeof e != "string";
  if (e ? n = kt(e) : n = i, !n)
    throw new Error("No modal id found in NiceModal.useModal.");
  var a = n;
  G(function() {
    o && !q[a] && Dt(a, e, t);
  }, [o, a, e, t]);
  var s = r[a], l = W(function(I) {
    return Gi(a, I);
  }, [a]), d = W(function() {
    return Yi(a);
  }, [a]), u = W(function() {
    return Oo(a);
  }, [a]), g = W(function(I) {
    var v;
    (v = ae[a]) === null || v === void 0 || v.resolve(I), delete ae[a];
  }, [a]), m = W(function(I) {
    var v;
    (v = ae[a]) === null || v === void 0 || v.reject(I), delete ae[a];
  }, [a]), p = W(function(I) {
    var v;
    (v = _e[a]) === null || v === void 0 || v.resolve(I), delete _e[a];
  }, [a]);
  return Xe(function() {
    return {
      id: a,
      args: s == null ? void 0 : s.args,
      visible: !!(s != null && s.visible),
      keepMounted: !!(s != null && s.keepMounted),
      show: l,
      hide: d,
      remove: u,
      resolve: g,
      reject: m,
      resolveHide: p
    };
  }, [
    a,
    s == null ? void 0 : s.args,
    s == null ? void 0 : s.visible,
    s == null ? void 0 : s.keepMounted,
    l,
    d,
    u,
    g,
    m,
    p
  ]);
}
var jh = function(e) {
  return function(t) {
    var r, i = t.defaultVisible, n = t.keepMounted, o = t.id, a = Eo(t, ["defaultVisible", "keepMounted", "id"]), s = Po(o), l = s.args, d = s.show, u = B(Oe), g = !!u[o];
    G(function() {
      return i && d(), Fe[o] = !0, function() {
        delete Fe[o];
      };
    }, [o, d, i]), G(function() {
      n && xh(o, { keepMounted: !0 });
    }, [o, n]);
    var m = (r = u[o]) === null || r === void 0 ? void 0 : r.delayVisible;
    return G(function() {
      m && d(l);
    }, [m, l, d]), g ? U.createElement(
      Uo.Provider,
      { value: o },
      U.createElement(e, O({}, a, l))
    ) : null;
  };
}, Dt = function(e, t, r) {
  q[e] ? q[e].props = r : q[e] = { comp: t, props: r };
}, Nh = function(e) {
  delete q[e];
}, Ro = function() {
  var e = B(Oe), t = Object.keys(e).filter(function(i) {
    return !!e[i];
  });
  t.forEach(function(i) {
    if (!q[i] && !Fe[i]) {
      console.warn("No modal found for id: " + i + ". Please check the id or if it is registered or declared via JSX.");
      return;
    }
  });
  var r = t.filter(function(i) {
    return q[i];
  }).map(function(i) {
    return O({ id: i }, q[i]);
  });
  return U.createElement(U.Fragment, null, r.map(function(i) {
    return U.createElement(i.comp, O({ key: i.id, id: i.id }, i.props));
  }));
}, wh = function(e) {
  var t = e.children, r = go(Wo, Hi), i = r[0];
  return Pe = r[1], U.createElement(
    Oe.Provider,
    { value: i },
    t,
    U.createElement(Ro, null)
  );
}, kh = function(e) {
  var t = e.children, r = e.dispatch, i = e.modals;
  return !r || !i ? U.createElement(wh, null, t) : (Pe = r, U.createElement(
    Oe.Provider,
    { value: i },
    t,
    U.createElement(Ro, null)
  ));
}, Dh = function(e) {
  var t = e.id, r = e.component;
  return G(function() {
    return Dt(t, r), function() {
      Nh(t);
    };
  }, [t, r]), null;
}, Sh = function(e) {
  var t, r = e.modal, i = e.handler, n = i === void 0 ? {} : i, o = Eo(e, ["modal", "handler"]), a = Xe(function() {
    return Zo();
  }, []), s = typeof r == "string" ? (t = q[r]) === null || t === void 0 ? void 0 : t.comp : r;
  if (!n)
    throw new Error("No handler found in NiceModal.ModalHolder.");
  if (!s)
    throw new Error("No modal found for id: " + r + " in NiceModal.ModalHolder.");
  return n.show = W(function(l) {
    return Gi(a, l);
  }, [a]), n.hide = W(function() {
    return Yi(a);
  }, [a]), U.createElement(s, O({ id: a }, o));
}, Ah = function(e) {
  return {
    visible: e.visible,
    onOk: function() {
      return e.hide();
    },
    onCancel: function() {
      return e.hide();
    },
    afterClose: function() {
      e.resolveHide(), e.keepMounted || e.remove();
    }
  };
}, Lh = function(e) {
  return {
    visible: e.visible,
    onClose: function() {
      return e.hide();
    },
    afterVisibleChange: function(t) {
      t || e.resolveHide(), !t && !e.keepMounted && e.remove();
    }
  };
}, zh = function(e) {
  return {
    open: e.visible,
    onClose: function() {
      return e.hide();
    },
    onExited: function() {
      e.resolveHide(), !e.keepMounted && e.remove();
    }
  };
}, _h = function(e) {
  return {
    show: e.visible,
    onHide: function() {
      return e.hide();
    },
    onExited: function() {
      e.resolveHide(), !e.keepMounted && e.remove();
    }
  };
}, Ho = {
  Provider: kh,
  ModalDef: Dh,
  ModalHolder: Sh,
  NiceModalContext: Oe,
  create: jh,
  register: Dt,
  getModal: Mh,
  show: Gi,
  hide: Yi,
  remove: Oo,
  useModal: Po,
  reducer: Wo,
  antdModal: Ah,
  antdDrawer: Lh,
  muiDialog: zh,
  bootstrapDialog: _h
};
let Th = { data: "" }, Ch = (e) => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || Th, Eh = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, Uh = /\/\*[^]*?\*\/|  +/g, jn = /\n+/g, ge = (e, t) => {
  let r = "", i = "", n = "";
  for (let o in e) {
    let a = e[o];
    o[0] == "@" ? o[1] == "i" ? r = o + " " + a + ";" : i += o[1] == "f" ? ge(a, o) : o + "{" + ge(a, o[1] == "k" ? "" : t) + "}" : typeof a == "object" ? i += ge(a, t ? t.replace(/([^,])+/g, (s) => o.replace(/(^:.*)|([^,])+/g, (l) => /&/.test(l) ? l.replace(/&/g, s) : s ? s + " " + l : l)) : o) : a != null && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), n += ge.p ? ge.p(o, a) : o + ":" + a + ";");
  }
  return r + (t && n ? t + "{" + n + "}" : n) + i;
}, ne = {}, Go = (e) => {
  if (typeof e == "object") {
    let t = "";
    for (let r in e)
      t += r + Go(e[r]);
    return t;
  }
  return e;
}, Zh = (e, t, r, i, n) => {
  let o = Go(e), a = ne[o] || (ne[o] = ((l) => {
    let d = 0, u = 11;
    for (; d < l.length; )
      u = 101 * u + l.charCodeAt(d++) >>> 0;
    return "go" + u;
  })(o));
  if (!ne[a]) {
    let l = o !== e ? e : ((d) => {
      let u, g, m = [{}];
      for (; u = Eh.exec(d.replace(Uh, "")); )
        u[4] ? m.shift() : u[3] ? (g = u[3].replace(jn, " ").trim(), m.unshift(m[0][g] = m[0][g] || {})) : m[0][u[1]] = u[2].replace(jn, " ").trim();
      return m[0];
    })(e);
    ne[a] = ge(n ? { ["@keyframes " + a]: l } : l, r ? "" : "." + a);
  }
  let s = r && ne.g ? ne.g : null;
  return r && (ne.g = ne[a]), ((l, d, u, g) => {
    g ? d.data = d.data.replace(g, l) : d.data.indexOf(l) === -1 && (d.data = u ? l + d.data : d.data + l);
  })(ne[a], t, i, s), a;
}, Wh = (e, t, r) => e.reduce((i, n, o) => {
  let a = t[o];
  if (a && a.call) {
    let s = a(r), l = s && s.props && s.props.className || /^go/.test(s) && s;
    a = l ? "." + l : s && typeof s == "object" ? s.props ? "" : ge(s, "") : s === !1 ? "" : s;
  }
  return i + n + (a ?? "");
}, "");
function St(e) {
  let t = this || {}, r = e.call ? e(t.p) : e;
  return Zh(r.unshift ? r.raw ? Wh(r, [].slice.call(arguments, 1), t.p) : r.reduce((i, n) => Object.assign(i, n && n.call ? n(t.p) : n), {}) : r, Ch(t.target), t.g, t.o, t.k);
}
let Yo, ur, gr;
St.bind({ g: 1 });
let ce = St.bind({ k: 1 });
function Oh(e, t, r, i) {
  ge.p = t, Yo = e, ur = r, gr = i;
}
function fe(e, t) {
  let r = this || {};
  return function() {
    let i = arguments;
    function n(o, a) {
      let s = Object.assign({}, o), l = s.className || n.className;
      r.p = Object.assign({ theme: ur && ur() }, s), r.o = / *go\d+/.test(l), s.className = St.apply(r, i) + (l ? " " + l : ""), t && (s.ref = a);
      let d = e;
      return e[0] && (d = s.as || e, delete s.as), gr && d[0] && gr(s), Yo(d, s);
    }
    return t ? t(n) : n;
  };
}
var Ph = (e) => typeof e == "function", bt = (e, t) => Ph(e) ? e(t) : e, Rh = (() => {
  let e = 0;
  return () => (++e).toString();
})(), Qo = (() => {
  let e;
  return () => {
    if (e === void 0 && typeof window < "u") {
      let t = matchMedia("(prefers-reduced-motion: reduce)");
      e = !t || t.matches;
    }
    return e;
  };
})(), Hh = 20, ut = /* @__PURE__ */ new Map(), Gh = 1e3, Nn = (e) => {
  if (ut.has(e))
    return;
  let t = setTimeout(() => {
    ut.delete(e), we({ type: 4, toastId: e });
  }, Gh);
  ut.set(e, t);
}, Yh = (e) => {
  let t = ut.get(e);
  t && clearTimeout(t);
}, hr = (e, t) => {
  switch (t.type) {
    case 0:
      return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Hh) };
    case 1:
      return t.toast.id && Yh(t.toast.id), { ...e, toasts: e.toasts.map((o) => o.id === t.toast.id ? { ...o, ...t.toast } : o) };
    case 2:
      let { toast: r } = t;
      return e.toasts.find((o) => o.id === r.id) ? hr(e, { type: 1, toast: r }) : hr(e, { type: 0, toast: r });
    case 3:
      let { toastId: i } = t;
      return i ? Nn(i) : e.toasts.forEach((o) => {
        Nn(o.id);
      }), { ...e, toasts: e.toasts.map((o) => o.id === i || i === void 0 ? { ...o, visible: !1 } : o) };
    case 4:
      return t.toastId === void 0 ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter((o) => o.id !== t.toastId) };
    case 5:
      return { ...e, pausedAt: t.time };
    case 6:
      let n = t.time - (e.pausedAt || 0);
      return { ...e, pausedAt: void 0, toasts: e.toasts.map((o) => ({ ...o, pauseDuration: o.pauseDuration + n })) };
  }
}, gt = [], ht = { toasts: [], pausedAt: void 0 }, we = (e) => {
  ht = hr(ht, e), gt.forEach((t) => {
    t(ht);
  });
}, Qh = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, Bh = (e = {}) => {
  let [t, r] = Y(ht);
  G(() => (gt.push(r), () => {
    let n = gt.indexOf(r);
    n > -1 && gt.splice(n, 1);
  }), [t]);
  let i = t.toasts.map((n) => {
    var o, a;
    return { ...e, ...e[n.type], ...n, duration: n.duration || ((o = e[n.type]) == null ? void 0 : o.duration) || (e == null ? void 0 : e.duration) || Qh[n.type], style: { ...e.style, ...(a = e[n.type]) == null ? void 0 : a.style, ...n.style } };
  });
  return { ...t, toasts: i };
}, Jh = (e, t = "blank", r) => ({ createdAt: Date.now(), visible: !0, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...r, id: (r == null ? void 0 : r.id) || Rh() }), qe = (e) => (t, r) => {
  let i = Jh(t, e, r);
  return we({ type: 2, toast: i }), i.id;
}, Q = (e, t) => qe("blank")(e, t);
Q.error = qe("error");
Q.success = qe("success");
Q.loading = qe("loading");
Q.custom = qe("custom");
Q.dismiss = (e) => {
  we({ type: 3, toastId: e });
};
Q.remove = (e) => we({ type: 4, toastId: e });
Q.promise = (e, t, r) => {
  let i = Q.loading(t.loading, { ...r, ...r == null ? void 0 : r.loading });
  return e.then((n) => (Q.success(bt(t.success, n), { id: i, ...r, ...r == null ? void 0 : r.success }), n)).catch((n) => {
    Q.error(bt(t.error, n), { id: i, ...r, ...r == null ? void 0 : r.error });
  }), e;
};
var Vh = (e, t) => {
  we({ type: 1, toast: { id: e, height: t } });
}, Fh = () => {
  we({ type: 5, time: Date.now() });
}, Xh = (e) => {
  let { toasts: t, pausedAt: r } = Bh(e);
  G(() => {
    if (r)
      return;
    let o = Date.now(), a = t.map((s) => {
      if (s.duration === 1 / 0)
        return;
      let l = (s.duration || 0) + s.pauseDuration - (o - s.createdAt);
      if (l < 0) {
        s.visible && Q.dismiss(s.id);
        return;
      }
      return setTimeout(() => Q.dismiss(s.id), l);
    });
    return () => {
      a.forEach((s) => s && clearTimeout(s));
    };
  }, [t, r]);
  let i = W(() => {
    r && we({ type: 6, time: Date.now() });
  }, [r]), n = W((o, a) => {
    let { reverseOrder: s = !1, gutter: l = 8, defaultPosition: d } = a || {}, u = t.filter((p) => (p.position || d) === (o.position || d) && p.height), g = u.findIndex((p) => p.id === o.id), m = u.filter((p, I) => I < g && p.visible).length;
    return u.filter((p) => p.visible).slice(...s ? [m + 1] : [0, m]).reduce((p, I) => p + (I.height || 0) + l, 0);
  }, [t]);
  return { toasts: t, handlers: { updateHeight: Vh, startPause: Fh, endPause: i, calculateOffset: n } };
}, $h = ce`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, qh = ce`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Kh = ce`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, ep = fe("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$h} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${qh} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Kh} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, tp = ce`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, rp = fe("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${tp} 1s linear infinite;
`, ip = ce`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, np = ce`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, op = fe("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ip} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${np} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, ap = fe("div")`
  position: absolute;
`, sp = fe("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, cp = ce`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, lp = fe("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${cp} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, dp = ({ toast: e }) => {
  let { icon: t, type: r, iconTheme: i } = e;
  return t !== void 0 ? typeof t == "string" ? c(lp, null, t) : t : r === "blank" ? null : c(sp, null, c(rp, { ...i }), r !== "loading" && c(ap, null, r === "error" ? c(ep, { ...i }) : c(op, { ...i })));
}, up = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, gp = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`, hp = "0%{opacity:0;} 100%{opacity:1;}", pp = "0%{opacity:1;} 100%{opacity:0;}", mp = fe("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, fp = fe("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Mp = (e, t) => {
  let r = e.includes("top") ? 1 : -1, [i, n] = Qo() ? [hp, pp] : [up(r), gp(r)];
  return { animation: t ? `${ce(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${ce(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
}, Ip = lo(({ toast: e, position: t, style: r, children: i }) => {
  let n = e.height ? Mp(e.position || t || "top-center", e.visible) : { opacity: 0 }, o = c(dp, { toast: e }), a = c(fp, { ...e.ariaProps }, bt(e.message, e));
  return c(mp, { className: e.className, style: { ...n, ...r, ...e.style } }, typeof i == "function" ? i({ icon: o, message: a }) : c(ao, null, o, a));
});
Oh(c);
var bp = ({ id: e, className: t, style: r, onHeightUpdate: i, children: n }) => {
  let o = W((a) => {
    if (a) {
      let s = () => {
        let l = a.getBoundingClientRect().height;
        i(e, l);
      };
      s(), new MutationObserver(s).observe(a, { subtree: !0, childList: !0, characterData: !0 });
    }
  }, [e, i]);
  return c("div", { ref: o, className: t, style: r }, n);
}, yp = (e, t) => {
  let r = e.includes("top"), i = r ? { top: 0 } : { bottom: 0 }, n = e.includes("center") ? { justifyContent: "center" } : e.includes("right") ? { justifyContent: "flex-end" } : {};
  return { left: 0, right: 0, display: "flex", position: "absolute", transition: Qo() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${t * (r ? 1 : -1)}px)`, ...i, ...n };
}, vp = St`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, it = 16, xp = ({ reverseOrder: e, position: t = "top-center", toastOptions: r, gutter: i, children: n, containerStyle: o, containerClassName: a }) => {
  let { toasts: s, handlers: l } = Xh(r);
  return c("div", { style: { position: "fixed", zIndex: 9999, top: it, left: it, right: it, bottom: it, pointerEvents: "none", ...o }, className: a, onMouseEnter: l.startPause, onMouseLeave: l.endPause }, s.map((d) => {
    let u = d.position || t, g = l.calculateOffset(d, { reverseOrder: e, gutter: i, defaultPosition: t }), m = yp(u, g);
    return c(bp, { id: d.id, key: d.id, onHeightUpdate: l.updateHeight, className: d.visible ? vp : "", style: m }, d.type === "custom" ? bt(d.message, d) : n ? n(d) : c(Ip, { toast: d, position: u }));
  }));
}, jp = Q;
const Bo = U.createContext({ isDirty: !1, setGlobalDirtyState: () => {
} }), Np = ({ children: e }) => {
  const [t, r] = Y([]), i = W((n, o) => {
    r((a) => o && !a.includes(n) ? [...a, n] : !o && a.includes(n) ? a.filter((s) => s !== n) : a);
  }, []);
  return /* @__PURE__ */ h.jsx(Bo.Provider, { value: { isDirty: t.length > 0, setGlobalDirtyState: i }, children: e });
}, u5 = () => {
  const e = uo(), { isDirty: t, setGlobalDirtyState: r } = B(Bo);
  G(() => () => r(e, !1), [e, r]);
  const i = W(
    (n) => r(e, n),
    [e, r]
  );
  return {
    isDirty: t,
    setGlobalDirtyState: i
  };
}, Jo = le({
  isAnyTextFieldFocused: !1,
  setFocusState: () => {
  },
  fetchKoenigLexical: async () => {
  }
}), wp = () => B(Jo), g5 = () => {
  const e = wp();
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}, kp = ({ fetchKoenigLexical: e, children: t }) => {
  const [r, i] = Y(!1), n = (o) => {
    i(o);
  };
  return /* @__PURE__ */ h.jsx(Jo.Provider, { value: { isAnyTextFieldFocused: r, setFocusState: n, fetchKoenigLexical: e }, children: /* @__PURE__ */ h.jsxs(Np, { children: [
    /* @__PURE__ */ h.jsx(xp, {}),
    /* @__PURE__ */ h.jsx(Ho.Provider, { children: t })
  ] }) });
}, Vo = Object.prototype.toString;
function Qi(e) {
  switch (Vo.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return !0;
    default:
      return je(e, Error);
  }
}
function Re(e, t) {
  return Vo.call(e) === `[object ${t}]`;
}
function Bi(e) {
  return Re(e, "ErrorEvent");
}
function wn(e) {
  return Re(e, "DOMError");
}
function Dp(e) {
  return Re(e, "DOMException");
}
function se(e) {
  return Re(e, "String");
}
function Fo(e) {
  return typeof e == "object" && e !== null && "__sentry_template_string__" in e && "__sentry_template_values__" in e;
}
function Xo(e) {
  return e === null || Fo(e) || typeof e != "object" && typeof e != "function";
}
function At(e) {
  return Re(e, "Object");
}
function Lt(e) {
  return typeof Event < "u" && je(e, Event);
}
function Sp(e) {
  return typeof Element < "u" && je(e, Element);
}
function Ap(e) {
  return Re(e, "RegExp");
}
function Ji(e) {
  return !!(e && e.then && typeof e.then == "function");
}
function Lp(e) {
  return At(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
}
function zp(e) {
  return typeof e == "number" && e !== e;
}
function je(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
function $o(e) {
  return !!(typeof e == "object" && e !== null && (e.__isVue || e._isVue));
}
function pr(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function kn(e, t) {
  if (!Array.isArray(e))
    return "";
  const r = [];
  for (let i = 0; i < e.length; i++) {
    const n = e[i];
    try {
      $o(n) ? r.push("[VueViewModel]") : r.push(String(n));
    } catch {
      r.push("[value cannot be serialized]");
    }
  }
  return r.join(t);
}
function _p(e, t, r = !1) {
  return se(e) ? Ap(t) ? t.test(e) : se(t) ? r ? e === t : e.includes(t) : !1 : !1;
}
function zt(e, t = [], r = !1) {
  return t.some((i) => _p(e, i, r));
}
function Tp(e, t, r = 250, i, n, o, a) {
  if (!o.exception || !o.exception.values || !a || !je(a.originalException, Error))
    return;
  const s = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
  s && (o.exception.values = Cp(
    mr(
      e,
      t,
      n,
      a.originalException,
      i,
      o.exception.values,
      s,
      0
    ),
    r
  ));
}
function mr(e, t, r, i, n, o, a, s) {
  if (o.length >= r + 1)
    return o;
  let l = [...o];
  if (je(i[n], Error)) {
    Dn(a, s);
    const d = e(t, i[n]), u = l.length;
    Sn(d, n, u, s), l = mr(
      e,
      t,
      r,
      i[n],
      n,
      [d, ...l],
      d,
      u
    );
  }
  return Array.isArray(i.errors) && i.errors.forEach((d, u) => {
    if (je(d, Error)) {
      Dn(a, s);
      const g = e(t, d), m = l.length;
      Sn(g, `errors[${u}]`, m, s), l = mr(
        e,
        t,
        r,
        d,
        n,
        [g, ...l],
        g,
        m
      );
    }
  }), l;
}
function Dn(e, t) {
  e.mechanism = e.mechanism || { type: "generic", handled: !0 }, e.mechanism = {
    ...e.mechanism,
    ...e.type === "AggregateError" && { is_exception_group: !0 },
    exception_id: t
  };
}
function Sn(e, t, r, i) {
  e.mechanism = e.mechanism || { type: "generic", handled: !0 }, e.mechanism = {
    ...e.mechanism,
    type: "chained",
    source: t,
    exception_id: r,
    parent_id: i
  };
}
function Cp(e, t) {
  return e.map((r) => (r.value && (r.value = pr(r.value, t)), r));
}
function nt(e) {
  return e && e.Math == Math ? e : void 0;
}
const C = typeof globalThis == "object" && nt(globalThis) || // eslint-disable-next-line no-restricted-globals
typeof window == "object" && nt(window) || typeof self == "object" && nt(self) || typeof global == "object" && nt(global) || function() {
  return this;
}() || {};
function Vi() {
  return C;
}
function qo(e, t, r) {
  const i = r || C, n = i.__SENTRY__ = i.__SENTRY__ || {};
  return n[e] || (n[e] = t());
}
const Fi = Vi(), Ep = 80;
function Ko(e, t = {}) {
  if (!e)
    return "<unknown>";
  try {
    let r = e;
    const i = 5, n = [];
    let o = 0, a = 0;
    const s = " > ", l = s.length;
    let d;
    const u = Array.isArray(t) ? t : t.keyAttrs, g = !Array.isArray(t) && t.maxStringLength || Ep;
    for (; r && o++ < i && (d = Up(r, u), !(d === "html" || o > 1 && a + n.length * l + d.length >= g)); )
      n.push(d), a += d.length, r = r.parentNode;
    return n.reverse().join(s);
  } catch {
    return "<unknown>";
  }
}
function Up(e, t) {
  const r = e, i = [];
  let n, o, a, s, l;
  if (!r || !r.tagName)
    return "";
  if (Fi.HTMLElement && r instanceof HTMLElement && r.dataset && r.dataset.sentryComponent)
    return r.dataset.sentryComponent;
  i.push(r.tagName.toLowerCase());
  const d = t && t.length ? t.filter((g) => r.getAttribute(g)).map((g) => [g, r.getAttribute(g)]) : null;
  if (d && d.length)
    d.forEach((g) => {
      i.push(`[${g[0]}="${g[1]}"]`);
    });
  else if (r.id && i.push(`#${r.id}`), n = r.className, n && se(n))
    for (o = n.split(/\s+/), l = 0; l < o.length; l++)
      i.push(`.${o[l]}`);
  const u = ["aria-label", "type", "name", "title", "alt"];
  for (l = 0; l < u.length; l++)
    a = u[l], s = r.getAttribute(a), s && i.push(`[${a}="${s}"]`);
  return i.join("");
}
function Zp() {
  try {
    return Fi.document.location.href;
  } catch {
    return "";
  }
}
function Wp(e) {
  if (!Fi.HTMLElement)
    return null;
  let t = e;
  const r = 5;
  for (let i = 0; i < r; i++) {
    if (!t)
      return null;
    if (t instanceof HTMLElement && t.dataset.sentryComponent)
      return t.dataset.sentryComponent;
    t = t.parentNode;
  }
  return null;
}
const Ke = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, Op = "Sentry Logger ", fr = [
  "debug",
  "info",
  "warn",
  "error",
  "log",
  "assert",
  "trace"
], yt = {};
function Xi(e) {
  if (!("console" in C))
    return e();
  const t = C.console, r = {}, i = Object.keys(yt);
  i.forEach((n) => {
    const o = yt[n];
    r[n] = t[n], t[n] = o;
  });
  try {
    return e();
  } finally {
    i.forEach((n) => {
      t[n] = r[n];
    });
  }
}
function Pp() {
  let e = !1;
  const t = {
    enable: () => {
      e = !0;
    },
    disable: () => {
      e = !1;
    },
    isEnabled: () => e
  };
  return Ke ? fr.forEach((r) => {
    t[r] = (...i) => {
      e && Xi(() => {
        C.console[r](`${Op}[${r}]:`, ...i);
      });
    };
  }) : fr.forEach((r) => {
    t[r] = () => {
    };
  }), t;
}
const _ = Pp(), Rp = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Hp(e) {
  return e === "http" || e === "https";
}
function Gp(e, t = !1) {
  const { host: r, path: i, pass: n, port: o, projectId: a, protocol: s, publicKey: l } = e;
  return `${s}://${l}${t && n ? `:${n}` : ""}@${r}${o ? `:${o}` : ""}/${i && `${i}/`}${a}`;
}
function Yp(e) {
  const t = Rp.exec(e);
  if (!t) {
    Xi(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  const [r, i, n = "", o, a = "", s] = t.slice(1);
  let l = "", d = s;
  const u = d.split("/");
  if (u.length > 1 && (l = u.slice(0, -1).join("/"), d = u.pop()), d) {
    const g = d.match(/^\d+/);
    g && (d = g[0]);
  }
  return ea({ host: o, pass: n, path: l, projectId: d, port: a, protocol: r, publicKey: i });
}
function ea(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || "",
    pass: e.pass || "",
    host: e.host,
    port: e.port || "",
    path: e.path || "",
    projectId: e.projectId
  };
}
function Qp(e) {
  if (!Ke)
    return !0;
  const { port: t, projectId: r, protocol: i } = e;
  return ["protocol", "publicKey", "host", "projectId"].find((a) => e[a] ? !1 : (_.error(`Invalid Sentry Dsn: ${a} missing`), !0)) ? !1 : r.match(/^\d+$/) ? Hp(i) ? t && isNaN(parseInt(t, 10)) ? (_.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1) : !0 : (_.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), !1) : (_.error(`Invalid Sentry Dsn: Invalid projectId ${r}`), !1);
}
function Bp(e) {
  const t = typeof e == "string" ? Yp(e) : ea(e);
  if (!(!t || !Qp(t)))
    return t;
}
function H(e, t, r) {
  if (!(t in e))
    return;
  const i = e[t], n = r(i);
  typeof n == "function" && ta(n, i), e[t] = n;
}
function vt(e, t, r) {
  try {
    Object.defineProperty(e, t, {
      // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
      value: r,
      writable: !0,
      configurable: !0
    });
  } catch {
    Ke && _.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
function ta(e, t) {
  try {
    const r = t.prototype || {};
    e.prototype = t.prototype = r, vt(e, "__sentry_original__", t);
  } catch {
  }
}
function $i(e) {
  return e.__sentry_original__;
}
function ra(e) {
  if (Qi(e))
    return {
      message: e.message,
      name: e.name,
      stack: e.stack,
      ...Ln(e)
    };
  if (Lt(e)) {
    const t = {
      type: e.type,
      target: An(e.target),
      currentTarget: An(e.currentTarget),
      ...Ln(e)
    };
    return typeof CustomEvent < "u" && je(e, CustomEvent) && (t.detail = e.detail), t;
  } else
    return e;
}
function An(e) {
  try {
    return Sp(e) ? Ko(e) : Object.prototype.toString.call(e);
  } catch {
    return "<unknown>";
  }
}
function Ln(e) {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t;
  } else
    return {};
}
function Jp(e, t = 40) {
  const r = Object.keys(ra(e));
  if (r.sort(), !r.length)
    return "[object has no keys]";
  if (r[0].length >= t)
    return pr(r[0], t);
  for (let i = r.length; i > 0; i--) {
    const n = r.slice(0, i).join(", ");
    if (!(n.length > t))
      return i === r.length ? n : pr(n, t);
  }
  return "";
}
function ye(e) {
  return Mr(e, /* @__PURE__ */ new Map());
}
function Mr(e, t) {
  if (Vp(e)) {
    const r = t.get(e);
    if (r !== void 0)
      return r;
    const i = {};
    t.set(e, i);
    for (const n of Object.keys(e))
      typeof e[n] < "u" && (i[n] = Mr(e[n], t));
    return i;
  }
  if (Array.isArray(e)) {
    const r = t.get(e);
    if (r !== void 0)
      return r;
    const i = [];
    return t.set(e, i), e.forEach((n) => {
      i.push(Mr(n, t));
    }), i;
  }
  return e;
}
function Vp(e) {
  if (!At(e))
    return !1;
  try {
    const t = Object.getPrototypeOf(e).constructor.name;
    return !t || t === "Object";
  } catch {
    return !0;
  }
}
const Xt = "<anonymous>";
function me(e) {
  try {
    return !e || typeof e != "function" ? Xt : e.name || Xt;
  } catch {
    return Xt;
  }
}
const pt = {}, zn = {};
function ke(e, t) {
  pt[e] = pt[e] || [], pt[e].push(t);
}
function De(e, t) {
  zn[e] || (t(), zn[e] = !0);
}
function K(e, t) {
  const r = e && pt[e];
  if (r)
    for (const i of r)
      try {
        i(t);
      } catch (n) {
        Ke && _.error(
          `Error while triggering instrumentation handler.
Type: ${e}
Name: ${me(i)}
Error:`,
          n
        );
      }
}
function Fp(e) {
  const t = "console";
  ke(t, e), De(t, Xp);
}
function Xp() {
  "console" in C && fr.forEach(function(e) {
    e in C.console && H(C.console, e, function(t) {
      return yt[e] = t, function(...r) {
        K("console", { args: r, level: e });
        const n = yt[e];
        n && n.apply(C.console, r);
      };
    });
  });
}
function ee() {
  const e = C, t = e.crypto || e.msCrypto;
  let r = () => Math.random() * 16;
  try {
    if (t && t.randomUUID)
      return t.randomUUID().replace(/-/g, "");
    t && t.getRandomValues && (r = () => {
      const i = new Uint8Array(1);
      return t.getRandomValues(i), i[0];
    });
  } catch {
  }
  return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(
    /[018]/g,
    (i) => (
      // eslint-disable-next-line no-bitwise
      (i ^ (r() & 15) >> i / 4).toString(16)
    )
  );
}
function ia(e) {
  return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function he(e) {
  const { message: t, event_id: r } = e;
  if (t)
    return t;
  const i = ia(e);
  return i ? i.type && i.value ? `${i.type}: ${i.value}` : i.type || i.value || r || "<unknown>" : r || "<unknown>";
}
function Ir(e, t, r) {
  const i = e.exception = e.exception || {}, n = i.values = i.values || [], o = n[0] = n[0] || {};
  o.value || (o.value = t || ""), o.type || (o.type = r || "Error");
}
function br(e, t) {
  const r = ia(e);
  if (!r)
    return;
  const i = { type: "generic", handled: !0 }, n = r.mechanism;
  if (r.mechanism = { ...i, ...n, ...t }, t && "data" in t) {
    const o = { ...n && n.data, ...t.data };
    r.mechanism.data = o;
  }
}
function $p(e) {
  return Array.isArray(e) ? e : [e];
}
const Le = C, qp = 1e3;
let _n, yr, vr;
function Kp(e) {
  const t = "dom";
  ke(t, e), De(t, e2);
}
function e2() {
  if (!Le.document)
    return;
  const e = K.bind(null, "dom"), t = Tn(e, !0);
  Le.document.addEventListener("click", t, !1), Le.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((r) => {
    const i = Le[r] && Le[r].prototype;
    !i || !i.hasOwnProperty || !i.hasOwnProperty("addEventListener") || (H(i, "addEventListener", function(n) {
      return function(o, a, s) {
        if (o === "click" || o == "keypress")
          try {
            const l = this, d = l.__sentry_instrumentation_handlers__ = l.__sentry_instrumentation_handlers__ || {}, u = d[o] = d[o] || { refCount: 0 };
            if (!u.handler) {
              const g = Tn(e);
              u.handler = g, n.call(this, o, g, s);
            }
            u.refCount++;
          } catch {
          }
        return n.call(this, o, a, s);
      };
    }), H(
      i,
      "removeEventListener",
      function(n) {
        return function(o, a, s) {
          if (o === "click" || o == "keypress")
            try {
              const l = this, d = l.__sentry_instrumentation_handlers__ || {}, u = d[o];
              u && (u.refCount--, u.refCount <= 0 && (n.call(this, o, u.handler, s), u.handler = void 0, delete d[o]), Object.keys(d).length === 0 && delete l.__sentry_instrumentation_handlers__);
            } catch {
            }
          return n.call(this, o, a, s);
        };
      }
    ));
  });
}
function t2(e) {
  if (e.type !== yr)
    return !1;
  try {
    if (!e.target || e.target._sentryId !== vr)
      return !1;
  } catch {
  }
  return !0;
}
function r2(e, t) {
  return e !== "keypress" ? !1 : !t || !t.tagName ? !0 : !(t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
}
function Tn(e, t = !1) {
  return (r) => {
    if (!r || r._sentryCaptured)
      return;
    const i = i2(r);
    if (r2(r.type, i))
      return;
    vt(r, "_sentryCaptured", !0), i && !i._sentryId && vt(i, "_sentryId", ee());
    const n = r.type === "keypress" ? "input" : r.type;
    t2(r) || (e({ event: r, name: n, global: t }), yr = r.type, vr = i ? i._sentryId : void 0), clearTimeout(_n), _n = Le.setTimeout(() => {
      vr = void 0, yr = void 0;
    }, qp);
  };
}
function i2(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
const xr = Vi();
function n2() {
  if (!("fetch" in xr))
    return !1;
  try {
    return new Headers(), new Request("http://www.example.com"), new Response(), !0;
  } catch {
    return !1;
  }
}
function Cn(e) {
  return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
}
function o2() {
  if (typeof EdgeRuntime == "string")
    return !0;
  if (!n2())
    return !1;
  if (Cn(xr.fetch))
    return !0;
  let e = !1;
  const t = xr.document;
  if (t && typeof t.createElement == "function")
    try {
      const r = t.createElement("iframe");
      r.hidden = !0, t.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (e = Cn(r.contentWindow.fetch)), t.head.removeChild(r);
    } catch (r) {
      Ke && _.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r);
    }
  return e;
}
function a2(e) {
  const t = "fetch";
  ke(t, e), De(t, s2);
}
function s2() {
  o2() && H(C, "fetch", function(e) {
    return function(...t) {
      const { method: r, url: i } = c2(t), n = {
        args: t,
        fetchData: {
          method: r,
          url: i
        },
        startTimestamp: Date.now()
      };
      return K("fetch", {
        ...n
      }), e.apply(C, t).then(
        (o) => {
          const a = {
            ...n,
            endTimestamp: Date.now(),
            response: o
          };
          return K("fetch", a), o;
        },
        (o) => {
          const a = {
            ...n,
            endTimestamp: Date.now(),
            error: o
          };
          throw K("fetch", a), o;
        }
      );
    };
  });
}
function jr(e, t) {
  return !!e && typeof e == "object" && !!e[t];
}
function En(e) {
  return typeof e == "string" ? e : e ? jr(e, "url") ? e.url : e.toString ? e.toString() : "" : "";
}
function c2(e) {
  if (e.length === 0)
    return { method: "GET", url: "" };
  if (e.length === 2) {
    const [r, i] = e;
    return {
      url: En(r),
      method: jr(i, "method") ? String(i.method).toUpperCase() : "GET"
    };
  }
  const t = e[0];
  return {
    url: En(t),
    method: jr(t, "method") ? String(t.method).toUpperCase() : "GET"
  };
}
let ot = null;
function l2(e) {
  const t = "error";
  ke(t, e), De(t, d2);
}
function d2() {
  ot = C.onerror, C.onerror = function(e, t, r, i, n) {
    return K("error", {
      column: i,
      error: n,
      line: r,
      msg: e,
      url: t
    }), ot && !ot.__SENTRY_LOADER__ ? ot.apply(this, arguments) : !1;
  }, C.onerror.__SENTRY_INSTRUMENTED__ = !0;
}
let at = null;
function u2(e) {
  const t = "unhandledrejection";
  ke(t, e), De(t, g2);
}
function g2() {
  at = C.onunhandledrejection, C.onunhandledrejection = function(e) {
    return K("unhandledrejection", e), at && !at.__SENTRY_LOADER__ ? at.apply(this, arguments) : !0;
  }, C.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
}
const st = Vi();
function h2() {
  const e = st.chrome, t = e && e.app && e.app.runtime, r = "history" in st && !!st.history.pushState && !!st.history.replaceState;
  return !t && r;
}
const Qe = C;
let ct;
function p2(e) {
  const t = "history";
  ke(t, e), De(t, m2);
}
function m2() {
  if (!h2())
    return;
  const e = Qe.onpopstate;
  Qe.onpopstate = function(...r) {
    const i = Qe.location.href, n = ct;
    if (ct = i, K("history", { from: n, to: i }), e)
      try {
        return e.apply(this, r);
      } catch {
      }
  };
  function t(r) {
    return function(...i) {
      const n = i.length > 2 ? i[2] : void 0;
      if (n) {
        const o = ct, a = String(n);
        ct = a, K("history", { from: o, to: a });
      }
      return r.apply(this, i);
    };
  }
  H(Qe.history, "pushState", t), H(Qe.history, "replaceState", t);
}
const f2 = C, Je = "__sentry_xhr_v3__";
function M2(e) {
  const t = "xhr";
  ke(t, e), De(t, I2);
}
function I2() {
  if (!f2.XMLHttpRequest)
    return;
  const e = XMLHttpRequest.prototype;
  H(e, "open", function(t) {
    return function(...r) {
      const i = Date.now(), n = se(r[0]) ? r[0].toUpperCase() : void 0, o = b2(r[1]);
      if (!n || !o)
        return t.apply(this, r);
      this[Je] = {
        method: n,
        url: o,
        request_headers: {}
      }, n === "POST" && o.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
      const a = () => {
        const s = this[Je];
        if (s && this.readyState === 4) {
          try {
            s.status_code = this.status;
          } catch {
          }
          const l = {
            args: [n, o],
            endTimestamp: Date.now(),
            startTimestamp: i,
            xhr: this
          };
          K("xhr", l);
        }
      };
      return "onreadystatechange" in this && typeof this.onreadystatechange == "function" ? H(this, "onreadystatechange", function(s) {
        return function(...l) {
          return a(), s.apply(this, l);
        };
      }) : this.addEventListener("readystatechange", a), H(this, "setRequestHeader", function(s) {
        return function(...l) {
          const [d, u] = l, g = this[Je];
          return g && se(d) && se(u) && (g.request_headers[d.toLowerCase()] = u), s.apply(this, l);
        };
      }), t.apply(this, r);
    };
  }), H(e, "send", function(t) {
    return function(...r) {
      const i = this[Je];
      if (!i)
        return t.apply(this, r);
      r[0] !== void 0 && (i.body = r[0]);
      const n = {
        args: [i.method, i.url],
        startTimestamp: Date.now(),
        xhr: this
      };
      return K("xhr", n), t.apply(this, r);
    };
  });
}
function b2(e) {
  if (se(e))
    return e;
  try {
    return e.toString();
  } catch {
  }
}
function y2() {
  const e = typeof WeakSet == "function", t = e ? /* @__PURE__ */ new WeakSet() : [];
  function r(n) {
    if (e)
      return t.has(n) ? !0 : (t.add(n), !1);
    for (let o = 0; o < t.length; o++)
      if (t[o] === n)
        return !0;
    return t.push(n), !1;
  }
  function i(n) {
    if (e)
      t.delete(n);
    else
      for (let o = 0; o < t.length; o++)
        if (t[o] === n) {
          t.splice(o, 1);
          break;
        }
  }
  return [r, i];
}
function v2(e, t = 100, r = 1 / 0) {
  try {
    return Nr("", e, t, r);
  } catch (i) {
    return { ERROR: `**non-serializable** (${i})` };
  }
}
function na(e, t = 3, r = 100 * 1024) {
  const i = v2(e, t);
  return w2(i) > r ? na(e, t - 1, r) : i;
}
function Nr(e, t, r = 1 / 0, i = 1 / 0, n = y2()) {
  const [o, a] = n;
  if (t == null || // this matches null and undefined -> eqeq not eqeqeq
  ["number", "boolean", "string"].includes(typeof t) && !zp(t))
    return t;
  const s = x2(e, t);
  if (!s.startsWith("[object "))
    return s;
  if (t.__sentry_skip_normalization__)
    return t;
  const l = typeof t.__sentry_override_normalization_depth__ == "number" ? t.__sentry_override_normalization_depth__ : r;
  if (l === 0)
    return s.replace("object ", "");
  if (o(t))
    return "[Circular ~]";
  const d = t;
  if (d && typeof d.toJSON == "function")
    try {
      const p = d.toJSON();
      return Nr("", p, l - 1, i, n);
    } catch {
    }
  const u = Array.isArray(t) ? [] : {};
  let g = 0;
  const m = ra(t);
  for (const p in m) {
    if (!Object.prototype.hasOwnProperty.call(m, p))
      continue;
    if (g >= i) {
      u[p] = "[MaxProperties ~]";
      break;
    }
    const I = m[p];
    u[p] = Nr(p, I, l - 1, i, n), g++;
  }
  return a(t), u;
}
function x2(e, t) {
  try {
    if (e === "domain" && t && typeof t == "object" && t._events)
      return "[Domain]";
    if (e === "domainEmitter")
      return "[DomainEmitter]";
    if (typeof global < "u" && t === global)
      return "[Global]";
    if (typeof window < "u" && t === window)
      return "[Window]";
    if (typeof document < "u" && t === document)
      return "[Document]";
    if ($o(t))
      return "[VueViewModel]";
    if (Lp(t))
      return "[SyntheticEvent]";
    if (typeof t == "number" && t !== t)
      return "[NaN]";
    if (typeof t == "function")
      return `[Function: ${me(t)}]`;
    if (typeof t == "symbol")
      return `[${String(t)}]`;
    if (typeof t == "bigint")
      return `[BigInt: ${String(t)}]`;
    const r = j2(t);
    return /^HTML(\w*)Element$/.test(r) ? `[HTMLElement: ${r}]` : `[object ${r}]`;
  } catch (r) {
    return `**non-serializable** (${r})`;
  }
}
function j2(e) {
  const t = Object.getPrototypeOf(e);
  return t ? t.constructor.name : "null prototype";
}
function N2(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function w2(e) {
  return N2(JSON.stringify(e));
}
var oe;
(function(e) {
  e[e.PENDING = 0] = "PENDING";
  const r = 1;
  e[e.RESOLVED = r] = "RESOLVED";
  const i = 2;
  e[e.REJECTED = i] = "REJECTED";
})(oe || (oe = {}));
class ue {
  constructor(t) {
    ue.prototype.__init.call(this), ue.prototype.__init2.call(this), ue.prototype.__init3.call(this), ue.prototype.__init4.call(this), this._state = oe.PENDING, this._handlers = [];
    try {
      t(this._resolve, this._reject);
    } catch (r) {
      this._reject(r);
    }
  }
  /** JSDoc */
  then(t, r) {
    return new ue((i, n) => {
      this._handlers.push([
        !1,
        (o) => {
          if (!t)
            i(o);
          else
            try {
              i(t(o));
            } catch (a) {
              n(a);
            }
        },
        (o) => {
          if (!r)
            n(o);
          else
            try {
              i(r(o));
            } catch (a) {
              n(a);
            }
        }
      ]), this._executeHandlers();
    });
  }
  /** JSDoc */
  catch(t) {
    return this.then((r) => r, t);
  }
  /** JSDoc */
  finally(t) {
    return new ue((r, i) => {
      let n, o;
      return this.then(
        (a) => {
          o = !1, n = a, t && t();
        },
        (a) => {
          o = !0, n = a, t && t();
        }
      ).then(() => {
        if (o) {
          i(n);
          return;
        }
        r(n);
      });
    });
  }
  /** JSDoc */
  __init() {
    this._resolve = (t) => {
      this._setResult(oe.RESOLVED, t);
    };
  }
  /** JSDoc */
  __init2() {
    this._reject = (t) => {
      this._setResult(oe.REJECTED, t);
    };
  }
  /** JSDoc */
  __init3() {
    this._setResult = (t, r) => {
      if (this._state === oe.PENDING) {
        if (Ji(r)) {
          r.then(this._resolve, this._reject);
          return;
        }
        this._state = t, this._value = r, this._executeHandlers();
      }
    };
  }
  /** JSDoc */
  __init4() {
    this._executeHandlers = () => {
      if (this._state === oe.PENDING)
        return;
      const t = this._handlers.slice();
      this._handlers = [], t.forEach((r) => {
        r[0] || (this._state === oe.RESOLVED && r[1](this._value), this._state === oe.REJECTED && r[2](this._value), r[0] = !0);
      });
    };
  }
}
function $t(e) {
  if (!e)
    return {};
  const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!t)
    return {};
  const r = t[6] || "", i = t[8] || "";
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: r,
    hash: i,
    relative: t[5] + r + i
    // everything minus origin
  };
}
const k2 = ["fatal", "error", "warning", "log", "info", "debug"];
function D2(e) {
  return e === "warn" ? "warning" : k2.includes(e) ? e : "log";
}
const oa = 1e3;
function qi() {
  return Date.now() / oa;
}
function S2() {
  const { performance: e } = C;
  if (!e || !e.now)
    return qi;
  const t = Date.now() - e.now(), r = e.timeOrigin == null ? t : e.timeOrigin;
  return () => (r + e.now()) / oa;
}
const aa = S2();
(() => {
  const { performance: e } = C;
  if (!e || !e.now)
    return;
  const t = 3600 * 1e3, r = e.now(), i = Date.now(), n = e.timeOrigin ? Math.abs(e.timeOrigin + r - i) : t, o = n < t, a = e.timing && e.timing.navigationStart, l = typeof a == "number" ? Math.abs(a + r - i) : t, d = l < t;
  return o || d ? n <= l ? e.timeOrigin : a : i;
})();
const X = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, sa = "production";
function A2() {
  return qo("globalEventProcessors", () => []);
}
function wr(e, t, r, i = 0) {
  return new ue((n, o) => {
    const a = e[i];
    if (t === null || typeof a != "function")
      n(t);
    else {
      const s = a({ ...t }, r);
      X && a.id && s === null && _.log(`Event processor "${a.id}" dropped event`), Ji(s) ? s.then((l) => wr(e, l, r, i + 1).then(n)).then(null, o) : wr(e, s, r, i + 1).then(n).then(null, o);
    }
  });
}
function L2(e) {
  const t = aa(), r = {
    sid: ee(),
    init: !0,
    timestamp: t,
    started: t,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: !1,
    toJSON: () => _2(r)
  };
  return e && _t(r, e), r;
}
function _t(e, t = {}) {
  if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || aa(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : ee()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration)
    e.duration = void 0;
  else if (typeof t.duration == "number")
    e.duration = t.duration;
  else {
    const r = e.timestamp - e.started;
    e.duration = r >= 0 ? r : 0;
  }
  t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status);
}
function z2(e, t) {
  let r = {};
  t ? r = { status: t } : e.status === "ok" && (r = { status: "exited" }), _t(e, r);
}
function _2(e) {
  return ye({
    sid: `${e.sid}`,
    init: e.init,
    // Make sure that sec is converted to ms for date constructor
    started: new Date(e.started * 1e3).toISOString(),
    timestamp: new Date(e.timestamp * 1e3).toISOString(),
    status: e.status,
    errors: e.errors,
    did: typeof e.did == "number" || typeof e.did == "string" ? `${e.did}` : void 0,
    duration: e.duration,
    abnormal_mechanism: e.abnormal_mechanism,
    attrs: {
      release: e.release,
      environment: e.environment,
      ip_address: e.ipAddress,
      user_agent: e.userAgent
    }
  });
}
const T2 = 1;
function C2(e) {
  const { spanId: t, traceId: r } = e.spanContext(), { data: i, op: n, parent_span_id: o, status: a, tags: s, origin: l } = xt(e);
  return ye({
    data: i,
    op: n,
    parent_span_id: o,
    span_id: t,
    status: a,
    tags: s,
    trace_id: r,
    origin: l
  });
}
function xt(e) {
  return E2(e) ? e.getSpanJSON() : typeof e.toJSON == "function" ? e.toJSON() : {};
}
function E2(e) {
  return typeof e.getSpanJSON == "function";
}
function U2(e) {
  const { traceFlags: t } = e.spanContext();
  return !!(t & T2);
}
function Z2(e) {
  if (e)
    return W2(e) ? { captureContext: e } : P2(e) ? {
      captureContext: e
    } : e;
}
function W2(e) {
  return e instanceof ve || typeof e == "function";
}
const O2 = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "requestSession",
  "propagationContext"
];
function P2(e) {
  return Object.keys(e).some((t) => O2.includes(t));
}
function Ki(e, t) {
  return Me().captureException(e, Z2(t));
}
function R2(e, t) {
  const r = typeof t == "string" ? t : void 0, i = typeof t != "string" ? { captureContext: t } : void 0;
  return Me().captureMessage(e, r, i);
}
function ca(e, t) {
  return Me().captureEvent(e, t);
}
function Ne(e, t) {
  Me().addBreadcrumb(e, t);
}
function en(...e) {
  const t = Me();
  if (e.length === 2) {
    const [r, i] = e;
    return r ? t.withScope(() => (t.getStackTop().scope = r, i(r))) : t.withScope(i);
  }
  return t.withScope(e[0]);
}
function J() {
  return Me().getClient();
}
function H2() {
  return Me().getScope();
}
function la(e) {
  return e.transaction;
}
function G2(e, t, r) {
  const i = t.getOptions(), { publicKey: n } = t.getDsn() || {}, { segment: o } = r && r.getUser() || {}, a = ye({
    environment: i.environment || sa,
    release: i.release,
    user_segment: o,
    public_key: n,
    trace_id: e
  });
  return t.emit && t.emit("createDsc", a), a;
}
function Y2(e) {
  const t = J();
  if (!t)
    return {};
  const r = G2(xt(e).trace_id || "", t, H2()), i = la(e);
  if (!i)
    return r;
  const n = i && i._frozenDynamicSamplingContext;
  if (n)
    return n;
  const { sampleRate: o, source: a } = i.metadata;
  o != null && (r.sample_rate = `${o}`);
  const s = xt(i);
  return a && a !== "url" && (r.transaction = s.description), r.sampled = String(U2(i)), t.emit && t.emit("createDsc", r), r;
}
function Q2(e, t) {
  const { fingerprint: r, span: i, breadcrumbs: n, sdkProcessingMetadata: o } = t;
  B2(e, t), i && F2(e, i), X2(e, r), J2(e, n), V2(e, o);
}
function B2(e, t) {
  const {
    extra: r,
    tags: i,
    user: n,
    contexts: o,
    level: a,
    // eslint-disable-next-line deprecation/deprecation
    transactionName: s
  } = t, l = ye(r);
  l && Object.keys(l).length && (e.extra = { ...l, ...e.extra });
  const d = ye(i);
  d && Object.keys(d).length && (e.tags = { ...d, ...e.tags });
  const u = ye(n);
  u && Object.keys(u).length && (e.user = { ...u, ...e.user });
  const g = ye(o);
  g && Object.keys(g).length && (e.contexts = { ...g, ...e.contexts }), a && (e.level = a), s && (e.transaction = s);
}
function J2(e, t) {
  const r = [...e.breadcrumbs || [], ...t];
  e.breadcrumbs = r.length ? r : void 0;
}
function V2(e, t) {
  e.sdkProcessingMetadata = {
    ...e.sdkProcessingMetadata,
    ...t
  };
}
function F2(e, t) {
  e.contexts = { trace: C2(t), ...e.contexts };
  const r = la(t);
  if (r) {
    e.sdkProcessingMetadata = {
      dynamicSamplingContext: Y2(t),
      ...e.sdkProcessingMetadata
    };
    const i = xt(r).description;
    i && (e.tags = { transaction: i, ...e.tags });
  }
}
function X2(e, t) {
  e.fingerprint = e.fingerprint ? $p(e.fingerprint) : [], t && (e.fingerprint = e.fingerprint.concat(t)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
}
const $2 = 100;
class ve {
  /** Flag if notifying is happening. */
  /** Callback for client to receive scope changes. */
  /** Callback list that will be called after {@link applyToEvent}. */
  /** Array of breadcrumbs. */
  /** User */
  /** Tags */
  /** Extra */
  /** Contexts */
  /** Attachments */
  /** Propagation Context for distributed tracing */
  /**
   * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
   * sent to Sentry
   */
  /** Fingerprint */
  /** Severity */
  // eslint-disable-next-line deprecation/deprecation
  /**
   * Transaction Name
   */
  /** Span */
  /** Session */
  /** Request Mode Session Status */
  /** The client on this scope */
  // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = Un();
  }
  /**
   * Inherit values from the parent scope.
   * @deprecated Use `scope.clone()` and `new Scope()` instead.
   */
  static clone(t) {
    return t ? t.clone() : new ve();
  }
  /**
   * Clone this scope instance.
   */
  clone() {
    const t = new ve();
    return t._breadcrumbs = [...this._breadcrumbs], t._tags = { ...this._tags }, t._extra = { ...this._extra }, t._contexts = { ...this._contexts }, t._user = this._user, t._level = this._level, t._span = this._span, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._requestSession = this._requestSession, t._attachments = [...this._attachments], t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }, t._propagationContext = { ...this._propagationContext }, t._client = this._client, t;
  }
  /** Update the client on the scope. */
  setClient(t) {
    this._client = t;
  }
  /**
   * Get the client assigned to this scope.
   *
   * It is generally recommended to use the global function `Sentry.getClient()` instead, unless you know what you are doing.
   */
  getClient() {
    return this._client;
  }
  /**
   * Add internal on change listener. Used for sub SDKs that need to store the scope.
   * @hidden
   */
  addScopeListener(t) {
    this._scopeListeners.push(t);
  }
  /**
   * @inheritDoc
   */
  addEventProcessor(t) {
    return this._eventProcessors.push(t), this;
  }
  /**
   * @inheritDoc
   */
  setUser(t) {
    return this._user = t || {
      email: void 0,
      id: void 0,
      ip_address: void 0,
      segment: void 0,
      username: void 0
    }, this._session && _t(this._session, { user: t }), this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  getUser() {
    return this._user;
  }
  /**
   * @inheritDoc
   */
  getRequestSession() {
    return this._requestSession;
  }
  /**
   * @inheritDoc
   */
  setRequestSession(t) {
    return this._requestSession = t, this;
  }
  /**
   * @inheritDoc
   */
  setTags(t) {
    return this._tags = {
      ...this._tags,
      ...t
    }, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setTag(t, r) {
    return this._tags = { ...this._tags, [t]: r }, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setExtras(t) {
    return this._extra = {
      ...this._extra,
      ...t
    }, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setExtra(t, r) {
    return this._extra = { ...this._extra, [t]: r }, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setFingerprint(t) {
    return this._fingerprint = t, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setLevel(t) {
    return this._level = t, this._notifyScopeListeners(), this;
  }
  /**
   * Sets the transaction name on the scope for future events.
   */
  setTransactionName(t) {
    return this._transactionName = t, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  setContext(t, r) {
    return r === null ? delete this._contexts[t] : this._contexts[t] = r, this._notifyScopeListeners(), this;
  }
  /**
   * Sets the Span on the scope.
   * @param span Span
   * @deprecated Instead of setting a span on a scope, use `startSpan()`/`startSpanManual()` instead.
   */
  setSpan(t) {
    return this._span = t, this._notifyScopeListeners(), this;
  }
  /**
   * Returns the `Span` if there is one.
   * @deprecated Use `getActiveSpan()` instead.
   */
  getSpan() {
    return this._span;
  }
  /**
   * Returns the `Transaction` attached to the scope (if there is one).
   * @deprecated You should not rely on the transaction, but just use `startSpan()` APIs instead.
   */
  getTransaction() {
    const t = this._span;
    return t && t.transaction;
  }
  /**
   * @inheritDoc
   */
  setSession(t) {
    return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  getSession() {
    return this._session;
  }
  /**
   * @inheritDoc
   */
  update(t) {
    if (!t)
      return this;
    const r = typeof t == "function" ? t(this) : t;
    if (r instanceof ve) {
      const i = r.getScopeData();
      this._tags = { ...this._tags, ...i.tags }, this._extra = { ...this._extra, ...i.extra }, this._contexts = { ...this._contexts, ...i.contexts }, i.user && Object.keys(i.user).length && (this._user = i.user), i.level && (this._level = i.level), i.fingerprint.length && (this._fingerprint = i.fingerprint), r.getRequestSession() && (this._requestSession = r.getRequestSession()), i.propagationContext && (this._propagationContext = i.propagationContext);
    } else if (At(r)) {
      const i = t;
      this._tags = { ...this._tags, ...i.tags }, this._extra = { ...this._extra, ...i.extra }, this._contexts = { ...this._contexts, ...i.contexts }, i.user && (this._user = i.user), i.level && (this._level = i.level), i.fingerprint && (this._fingerprint = i.fingerprint), i.requestSession && (this._requestSession = i.requestSession), i.propagationContext && (this._propagationContext = i.propagationContext);
    }
    return this;
  }
  /**
   * @inheritDoc
   */
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = Un(), this;
  }
  /**
   * @inheritDoc
   */
  addBreadcrumb(t, r) {
    const i = typeof r == "number" ? r : $2;
    if (i <= 0)
      return this;
    const n = {
      timestamp: qi(),
      ...t
    }, o = this._breadcrumbs;
    return o.push(n), this._breadcrumbs = o.length > i ? o.slice(-i) : o, this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  /**
   * @inheritDoc
   */
  clearBreadcrumbs() {
    return this._breadcrumbs = [], this._notifyScopeListeners(), this;
  }
  /**
   * @inheritDoc
   */
  addAttachment(t) {
    return this._attachments.push(t), this;
  }
  /**
   * @inheritDoc
   * @deprecated Use `getScopeData()` instead.
   */
  getAttachments() {
    return this.getScopeData().attachments;
  }
  /**
   * @inheritDoc
   */
  clearAttachments() {
    return this._attachments = [], this;
  }
  /** @inheritDoc */
  getScopeData() {
    const {
      _breadcrumbs: t,
      _attachments: r,
      _contexts: i,
      _tags: n,
      _extra: o,
      _user: a,
      _level: s,
      _fingerprint: l,
      _eventProcessors: d,
      _propagationContext: u,
      _sdkProcessingMetadata: g,
      _transactionName: m,
      _span: p
    } = this;
    return {
      breadcrumbs: t,
      attachments: r,
      contexts: i,
      tags: n,
      extra: o,
      user: a,
      level: s,
      fingerprint: l || [],
      eventProcessors: d,
      propagationContext: u,
      sdkProcessingMetadata: g,
      transactionName: m,
      span: p
    };
  }
  /**
   * Applies data from the scope to the event and runs all event processors on it.
   *
   * @param event Event
   * @param hint Object containing additional information about the original exception, for use by the event processors.
   * @hidden
   * @deprecated Use `applyScopeDataToEvent()` directly
   */
  applyToEvent(t, r = {}, i = []) {
    Q2(t, this.getScopeData());
    const n = [
      ...i,
      // eslint-disable-next-line deprecation/deprecation
      ...A2(),
      ...this._eventProcessors
    ];
    return wr(n, t, r);
  }
  /**
   * Add data which will be accessible during event processing but won't get sent to Sentry
   */
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...t }, this;
  }
  /**
   * @inheritDoc
   */
  setPropagationContext(t) {
    return this._propagationContext = t, this;
  }
  /**
   * @inheritDoc
   */
  getPropagationContext() {
    return this._propagationContext;
  }
  /**
   * Capture an exception for this scope.
   *
   * @param exception The exception to capture.
   * @param hint Optinal additional data to attach to the Sentry event.
   * @returns the id of the captured Sentry event.
   */
  captureException(t, r) {
    const i = r && r.event_id ? r.event_id : ee();
    if (!this._client)
      return _.warn("No client configured on scope - will not capture exception!"), i;
    const n = new Error("Sentry syntheticException");
    return this._client.captureException(
      t,
      {
        originalException: t,
        syntheticException: n,
        ...r,
        event_id: i
      },
      this
    ), i;
  }
  /**
   * Capture a message for this scope.
   *
   * @param message The message to capture.
   * @param level An optional severity level to report the message with.
   * @param hint Optional additional data to attach to the Sentry event.
   * @returns the id of the captured message.
   */
  captureMessage(t, r, i) {
    const n = i && i.event_id ? i.event_id : ee();
    if (!this._client)
      return _.warn("No client configured on scope - will not capture message!"), n;
    const o = new Error(t);
    return this._client.captureMessage(
      t,
      r,
      {
        originalException: t,
        syntheticException: o,
        ...i,
        event_id: n
      },
      this
    ), n;
  }
  /**
   * Captures a manually created event for this scope and sends it to Sentry.
   *
   * @param exception The event to capture.
   * @param hint Optional additional data to attach to the Sentry event.
   * @returns the id of the captured event.
   */
  captureEvent(t, r) {
    const i = r && r.event_id ? r.event_id : ee();
    return this._client ? (this._client.captureEvent(t, { ...r, event_id: i }, this), i) : (_.warn("No client configured on scope - will not capture event!"), i);
  }
  /**
   * This will be called on every set call.
   */
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((t) => {
      t(this);
    }), this._notifyingListeners = !1);
  }
}
function Un() {
  return {
    traceId: ee(),
    spanId: ee().substring(16)
  };
}
const q2 = "7.118.0", da = parseFloat(q2), K2 = 100;
class ua {
  /** Is a {@link Layer}[] containing the client and scope */
  /** Contains the last event id of a captured event.  */
  /**
   * Creates a new instance of the hub, will push one {@link Layer} into the
   * internal stack on creation.
   *
   * @param client bound to the hub.
   * @param scope bound to the hub.
   * @param version number, higher number means higher priority.
   *
   * @deprecated Instantiation of Hub objects is deprecated and the constructor will be removed in version 8 of the SDK.
   *
   * If you are currently using the Hub for multi-client use like so:
   *
   * ```
   * // OLD
   * const hub = new Hub();
   * hub.bindClient(client);
   * makeMain(hub)
   * ```
   *
   * instead initialize the client as follows:
   *
   * ```
   * // NEW
   * Sentry.withIsolationScope(() => {
   *    Sentry.setCurrentClient(client);
   *    client.init();
   * });
   * ```
   *
   * If you are using the Hub to capture events like so:
   *
   * ```
   * // OLD
   * const client = new Client();
   * const hub = new Hub(client);
   * hub.captureException()
   * ```
   *
   * instead capture isolated events as follows:
   *
   * ```
   * // NEW
   * const client = new Client();
   * const scope = new Scope();
   * scope.setClient(client);
   * scope.captureException();
   * ```
   */
  constructor(t, r, i, n = da) {
    this._version = n;
    let o;
    r ? o = r : (o = new ve(), o.setClient(t));
    let a;
    i ? a = i : (a = new ve(), a.setClient(t)), this._stack = [{ scope: o }], t && this.bindClient(t), this._isolationScope = a;
  }
  /**
   * Checks if this hub's version is older than the given version.
   *
   * @param version A version number to compare to.
   * @return True if the given version is newer; otherwise false.
   *
   * @deprecated This will be removed in v8.
   */
  isOlderThan(t) {
    return this._version < t;
  }
  /**
   * This binds the given client to the current scope.
   * @param client An SDK client (client) instance.
   *
   * @deprecated Use `initAndBind()` directly, or `setCurrentClient()` and/or `client.init()` instead.
   */
  bindClient(t) {
    const r = this.getStackTop();
    r.client = t, r.scope.setClient(t), t && t.setupIntegrations && t.setupIntegrations();
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `withScope` instead.
   */
  pushScope() {
    const t = this.getScope().clone();
    return this.getStack().push({
      // eslint-disable-next-line deprecation/deprecation
      client: this.getClient(),
      scope: t
    }), t;
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `withScope` instead.
   */
  popScope() {
    return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `Sentry.withScope()` instead.
   */
  withScope(t) {
    const r = this.pushScope();
    let i;
    try {
      i = t(r);
    } catch (n) {
      throw this.popScope(), n;
    }
    return Ji(i) ? i.then(
      (n) => (this.popScope(), n),
      (n) => {
        throw this.popScope(), n;
      }
    ) : (this.popScope(), i);
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `Sentry.getClient()` instead.
   */
  getClient() {
    return this.getStackTop().client;
  }
  /**
   * Returns the scope of the top stack.
   *
   * @deprecated Use `Sentry.getCurrentScope()` instead.
   */
  getScope() {
    return this.getStackTop().scope;
  }
  /**
   * @deprecated Use `Sentry.getIsolationScope()` instead.
   */
  getIsolationScope() {
    return this._isolationScope;
  }
  /**
   * Returns the scope stack for domains or the process.
   * @deprecated This will be removed in v8.
   */
  getStack() {
    return this._stack;
  }
  /**
   * Returns the topmost scope layer in the order domain > local > process.
   * @deprecated This will be removed in v8.
   */
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `Sentry.captureException()` instead.
   */
  captureException(t, r) {
    const i = this._lastEventId = r && r.event_id ? r.event_id : ee(), n = new Error("Sentry syntheticException");
    return this.getScope().captureException(t, {
      originalException: t,
      syntheticException: n,
      ...r,
      event_id: i
    }), i;
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use  `Sentry.captureMessage()` instead.
   */
  captureMessage(t, r, i) {
    const n = this._lastEventId = i && i.event_id ? i.event_id : ee(), o = new Error(t);
    return this.getScope().captureMessage(t, r, {
      originalException: t,
      syntheticException: o,
      ...i,
      event_id: n
    }), n;
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `Sentry.captureEvent()` instead.
   */
  captureEvent(t, r) {
    const i = r && r.event_id ? r.event_id : ee();
    return t.type || (this._lastEventId = i), this.getScope().captureEvent(t, { ...r, event_id: i }), i;
  }
  /**
   * @inheritDoc
   *
   * @deprecated This will be removed in v8.
   */
  lastEventId() {
    return this._lastEventId;
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `Sentry.addBreadcrumb()` instead.
   */
  addBreadcrumb(t, r) {
    const { scope: i, client: n } = this.getStackTop();
    if (!n)
      return;
    const { beforeBreadcrumb: o = null, maxBreadcrumbs: a = K2 } = n.getOptions && n.getOptions() || {};
    if (a <= 0)
      return;
    const l = { timestamp: qi(), ...t }, d = o ? Xi(() => o(l, r)) : l;
    d !== null && (n.emit && n.emit("beforeAddBreadcrumb", d, r), i.addBreadcrumb(d, a));
  }
  /**
   * @inheritDoc
   * @deprecated Use `Sentry.setUser()` instead.
   */
  setUser(t) {
    this.getScope().setUser(t), this.getIsolationScope().setUser(t);
  }
  /**
   * @inheritDoc
   * @deprecated Use `Sentry.setTags()` instead.
   */
  setTags(t) {
    this.getScope().setTags(t), this.getIsolationScope().setTags(t);
  }
  /**
   * @inheritDoc
   * @deprecated Use `Sentry.setExtras()` instead.
   */
  setExtras(t) {
    this.getScope().setExtras(t), this.getIsolationScope().setExtras(t);
  }
  /**
   * @inheritDoc
   * @deprecated Use `Sentry.setTag()` instead.
   */
  setTag(t, r) {
    this.getScope().setTag(t, r), this.getIsolationScope().setTag(t, r);
  }
  /**
   * @inheritDoc
   * @deprecated Use `Sentry.setExtra()` instead.
   */
  setExtra(t, r) {
    this.getScope().setExtra(t, r), this.getIsolationScope().setExtra(t, r);
  }
  /**
   * @inheritDoc
   * @deprecated Use `Sentry.setContext()` instead.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setContext(t, r) {
    this.getScope().setContext(t, r), this.getIsolationScope().setContext(t, r);
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use `getScope()` directly.
   */
  configureScope(t) {
    const { scope: r, client: i } = this.getStackTop();
    i && t(r);
  }
  /**
   * @inheritDoc
   */
  // eslint-disable-next-line deprecation/deprecation
  run(t) {
    const r = Zn(this);
    try {
      t(this);
    } finally {
      Zn(r);
    }
  }
  /**
   * @inheritDoc
   * @deprecated Use `Sentry.getClient().getIntegrationByName()` instead.
   */
  getIntegration(t) {
    const r = this.getClient();
    if (!r)
      return null;
    try {
      return r.getIntegration(t);
    } catch {
      return X && _.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null;
    }
  }
  /**
   * Starts a new `Transaction` and returns it. This is the entry point to manual tracing instrumentation.
   *
   * A tree structure can be built by adding child spans to the transaction, and child spans to other spans. To start a
   * new child span within the transaction or any span, call the respective `.startChild()` method.
   *
   * Every child span must be finished before the transaction is finished, otherwise the unfinished spans are discarded.
   *
   * The transaction must be finished with a call to its `.end()` method, at which point the transaction with all its
   * finished child spans will be sent to Sentry.
   *
   * @param context Properties of the new `Transaction`.
   * @param customSamplingContext Information given to the transaction sampling function (along with context-dependent
   * default values). See {@link Options.tracesSampler}.
   *
   * @returns The transaction which was just started
   *
   * @deprecated Use `startSpan()`, `startSpanManual()` or `startInactiveSpan()` instead.
   */
  startTransaction(t, r) {
    const i = this._callExtensionMethod("startTransaction", t, r);
    return X && !i && (this.getClient() ? _.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`) : _.warn(
      "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'"
    )), i;
  }
  /**
   * @inheritDoc
   * @deprecated Use `spanToTraceHeader()` instead.
   */
  traceHeaders() {
    return this._callExtensionMethod("traceHeaders");
  }
  /**
   * @inheritDoc
   *
   * @deprecated Use top level `captureSession` instead.
   */
  captureSession(t = !1) {
    if (t)
      return this.endSession();
    this._sendSessionUpdate();
  }
  /**
   * @inheritDoc
   * @deprecated Use top level `endSession` instead.
   */
  endSession() {
    const r = this.getStackTop().scope, i = r.getSession();
    i && z2(i), this._sendSessionUpdate(), r.setSession();
  }
  /**
   * @inheritDoc
   * @deprecated Use top level `startSession` instead.
   */
  startSession(t) {
    const { scope: r, client: i } = this.getStackTop(), { release: n, environment: o = sa } = i && i.getOptions() || {}, { userAgent: a } = C.navigator || {}, s = L2({
      release: n,
      environment: o,
      user: r.getUser(),
      ...a && { userAgent: a },
      ...t
    }), l = r.getSession && r.getSession();
    return l && l.status === "ok" && _t(l, { status: "exited" }), this.endSession(), r.setSession(s), s;
  }
  /**
   * Returns if default PII should be sent to Sentry and propagated in ourgoing requests
   * when Tracing is used.
   *
   * @deprecated Use top-level `getClient().getOptions().sendDefaultPii` instead. This function
   * only unnecessarily increased API surface but only wrapped accessing the option.
   */
  shouldSendDefaultPii() {
    const t = this.getClient(), r = t && t.getOptions();
    return !!(r && r.sendDefaultPii);
  }
  /**
   * Sends the current Session on the scope
   */
  _sendSessionUpdate() {
    const { scope: t, client: r } = this.getStackTop(), i = t.getSession();
    i && r && r.captureSession && r.captureSession(i);
  }
  /**
   * Calls global extension method and binding current instance to the function call
   */
  // @ts-expect-error Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _callExtensionMethod(t, ...r) {
    const n = Tt().__SENTRY__;
    if (n && n.extensions && typeof n.extensions[t] == "function")
      return n.extensions[t].apply(this, r);
    X && _.warn(`Extension method ${t} couldn't be found, doing nothing.`);
  }
}
function Tt() {
  return C.__SENTRY__ = C.__SENTRY__ || {
    extensions: {},
    hub: void 0
  }, C;
}
function Zn(e) {
  const t = Tt(), r = kr(t);
  return ga(t, e), r;
}
function Me() {
  const e = Tt();
  if (e.__SENTRY__ && e.__SENTRY__.acs) {
    const t = e.__SENTRY__.acs.getCurrentHub();
    if (t)
      return t;
  }
  return em(e);
}
function em(e = Tt()) {
  return (!tm(e) || // eslint-disable-next-line deprecation/deprecation
  kr(e).isOlderThan(da)) && ga(e, new ua()), kr(e);
}
function tm(e) {
  return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
}
function kr(e) {
  return qo("hub", () => new ua(), e);
}
function ga(e, t) {
  if (!e)
    return !1;
  const r = e.__SENTRY__ = e.__SENTRY__ || {};
  return r.hub = t, !0;
}
function rm(e) {
  const t = e.protocol ? `${e.protocol}:` : "", r = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${r}${e.path ? `/${e.path}` : ""}/api/`;
}
function im(e, t) {
  const r = Bp(e);
  if (!r)
    return "";
  const i = `${rm(r)}embed/error-page/`;
  let n = `dsn=${Gp(r)}`;
  for (const o in t)
    if (o !== "dsn" && o !== "onClose")
      if (o === "user") {
        const a = t.user;
        if (!a)
          continue;
        a.name && (n += `&name=${encodeURIComponent(a.name)}`), a.email && (n += `&email=${encodeURIComponent(a.email)}`);
      } else
        n += `&${encodeURIComponent(o)}=${encodeURIComponent(t[o])}`;
  return `${i}?${n}`;
}
function Ie(e, t) {
  return Object.assign(
    function(...i) {
      return t(...i);
    },
    { id: e }
  );
}
const nm = [
  /^Script error\.?$/,
  /^Javascript error: Script error\.? on line 0$/,
  /^ResizeObserver loop completed with undelivered notifications.$/,
  /^Cannot redefine property: googletag$/
], om = [
  /^.*\/healthcheck$/,
  /^.*\/healthy$/,
  /^.*\/live$/,
  /^.*\/ready$/,
  /^.*\/heartbeat$/,
  /^.*\/health$/,
  /^.*\/healthz$/
], ha = "InboundFilters", am = (e = {}) => ({
  name: ha,
  // TODO v8: Remove this
  setupOnce() {
  },
  // eslint-disable-line @typescript-eslint/no-empty-function
  processEvent(t, r, i) {
    const n = i.getOptions(), o = sm(e, n);
    return cm(t, o) ? null : t;
  }
}), pa = am;
Ie(
  ha,
  pa
);
function sm(e = {}, t = {}) {
  return {
    allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
    denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
    ignoreErrors: [
      ...e.ignoreErrors || [],
      ...t.ignoreErrors || [],
      ...e.disableErrorDefaults ? [] : nm
    ],
    ignoreTransactions: [
      ...e.ignoreTransactions || [],
      ...t.ignoreTransactions || [],
      ...e.disableTransactionDefaults ? [] : om
    ],
    ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
  };
}
function cm(e, t) {
  return t.ignoreInternal && pm(e) ? (X && _.warn(`Event dropped due to being internal Sentry Error.
Event: ${he(e)}`), !0) : lm(e, t.ignoreErrors) ? (X && _.warn(
    `Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${he(e)}`
  ), !0) : dm(e, t.ignoreTransactions) ? (X && _.warn(
    `Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${he(e)}`
  ), !0) : um(e, t.denyUrls) ? (X && _.warn(
    `Event dropped due to being matched by \`denyUrls\` option.
Event: ${he(
      e
    )}.
Url: ${jt(e)}`
  ), !0) : gm(e, t.allowUrls) ? !1 : (X && _.warn(
    `Event dropped due to not being matched by \`allowUrls\` option.
Event: ${he(
      e
    )}.
Url: ${jt(e)}`
  ), !0);
}
function lm(e, t) {
  return e.type || !t || !t.length ? !1 : hm(e).some((r) => zt(r, t));
}
function dm(e, t) {
  if (e.type !== "transaction" || !t || !t.length)
    return !1;
  const r = e.transaction;
  return r ? zt(r, t) : !1;
}
function um(e, t) {
  if (!t || !t.length)
    return !1;
  const r = jt(e);
  return r ? zt(r, t) : !1;
}
function gm(e, t) {
  if (!t || !t.length)
    return !0;
  const r = jt(e);
  return r ? zt(r, t) : !0;
}
function hm(e) {
  const t = [];
  e.message && t.push(e.message);
  let r;
  try {
    r = e.exception.values[e.exception.values.length - 1];
  } catch {
  }
  return r && r.value && (t.push(r.value), r.type && t.push(`${r.type}: ${r.value}`)), X && t.length === 0 && _.error(`Could not extract message for event ${he(e)}`), t;
}
function pm(e) {
  try {
    return e.exception.values[0].type === "SentryError";
  } catch {
  }
  return !1;
}
function mm(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const r = e[t];
    if (r && r.filename !== "<anonymous>" && r.filename !== "[native code]")
      return r.filename || null;
  }
  return null;
}
function jt(e) {
  try {
    let t;
    try {
      t = e.exception.values[0].stacktrace.frames;
    } catch {
    }
    return t ? mm(t) : null;
  } catch {
    return X && _.error(`Cannot extract url for event ${he(e)}`), null;
  }
}
let Wn;
const ma = "FunctionToString", On = /* @__PURE__ */ new WeakMap(), fm = () => ({
  name: ma,
  setupOnce() {
    Wn = Function.prototype.toString;
    try {
      Function.prototype.toString = function(...e) {
        const t = $i(this), r = On.has(J()) && t !== void 0 ? t : this;
        return Wn.apply(r, e);
      };
    } catch {
    }
  },
  setup(e) {
    On.set(e, !0);
  }
}), fa = fm;
Ie(
  ma,
  fa
);
const P = C;
let Dr = 0;
function Ma() {
  return Dr > 0;
}
function Mm() {
  Dr++, setTimeout(() => {
    Dr--;
  });
}
function Ee(e, t = {}, r) {
  if (typeof e != "function")
    return e;
  try {
    const n = e.__sentry_wrapped__;
    if (n)
      return n;
    if ($i(e))
      return e;
  } catch {
    return e;
  }
  const i = function() {
    const n = Array.prototype.slice.call(arguments);
    try {
      r && typeof r == "function" && r.apply(this, arguments);
      const o = n.map((a) => Ee(a, t));
      return e.apply(this, o);
    } catch (o) {
      throw Mm(), en((a) => {
        a.addEventProcessor((s) => (t.mechanism && (Ir(s, void 0, void 0), br(s, t.mechanism)), s.extra = {
          ...s.extra,
          arguments: n
        }, s)), Ki(o);
      }), o;
    }
  };
  try {
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
  } catch {
  }
  ta(i, e), vt(e, "__sentry_wrapped__", i);
  try {
    Object.getOwnPropertyDescriptor(i, "name").configurable && Object.defineProperty(i, "name", {
      get() {
        return e.name;
      }
    });
  } catch {
  }
  return i;
}
const Te = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function Ia(e, t) {
  const r = tn(e, t), i = {
    type: t && t.name,
    value: vm(t)
  };
  return r.length && (i.stacktrace = { frames: r }), i.type === void 0 && i.value === "" && (i.value = "Unrecoverable error caught"), i;
}
function Im(e, t, r, i) {
  const n = J(), o = n && n.getOptions().normalizeDepth, a = {
    exception: {
      values: [
        {
          type: Lt(t) ? t.constructor.name : i ? "UnhandledRejection" : "Error",
          value: xm(t, { isUnhandledRejection: i })
        }
      ]
    },
    extra: {
      __serialized__: na(t, o)
    }
  };
  if (r) {
    const s = tn(e, r);
    s.length && (a.exception.values[0].stacktrace = { frames: s });
  }
  return a;
}
function qt(e, t) {
  return {
    exception: {
      values: [Ia(e, t)]
    }
  };
}
function tn(e, t) {
  const r = t.stacktrace || t.stack || "", i = ym(t);
  try {
    return e(r, i);
  } catch {
  }
  return [];
}
const bm = /Minified React error #\d+;/i;
function ym(e) {
  if (e) {
    if (typeof e.framesToPop == "number")
      return e.framesToPop;
    if (bm.test(e.message))
      return 1;
  }
  return 0;
}
function vm(e) {
  const t = e && e.message;
  return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message";
}
function ba(e, t, r, i, n) {
  let o;
  if (Bi(t) && t.error)
    return qt(e, t.error);
  if (wn(t) || Dp(t)) {
    const a = t;
    if ("stack" in t)
      o = qt(e, t);
    else {
      const s = a.name || (wn(a) ? "DOMError" : "DOMException"), l = a.message ? `${s}: ${a.message}` : s;
      o = Pn(e, l, r, i), Ir(o, l);
    }
    return "code" in a && (o.tags = { ...o.tags, "DOMException.code": `${a.code}` }), o;
  }
  return Qi(t) ? qt(e, t) : At(t) || Lt(t) ? (o = Im(e, t, r, n), br(o, {
    synthetic: !0
  }), o) : (o = Pn(e, t, r, i), Ir(o, `${t}`, void 0), br(o, {
    synthetic: !0
  }), o);
}
function Pn(e, t, r, i) {
  const n = {};
  if (i && r) {
    const o = tn(e, r);
    o.length && (n.exception = {
      values: [{ value: t, stacktrace: { frames: o } }]
    });
  }
  if (Fo(t)) {
    const { __sentry_template_string__: o, __sentry_template_values__: a } = t;
    return n.logentry = {
      message: o,
      params: a
    }, n;
  }
  return n.message = t, n;
}
function xm(e, { isUnhandledRejection: t }) {
  const r = Jp(e), i = t ? "promise rejection" : "exception";
  return Bi(e) ? `Event \`ErrorEvent\` captured as ${i} with message \`${e.message}\`` : Lt(e) ? `Event \`${jm(e)}\` (type=${e.type}) captured as ${i}` : `Object captured as ${i} with keys: ${r}`;
}
function jm(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : void 0;
  } catch {
  }
}
const lt = 1024, ya = "Breadcrumbs", Nm = (e = {}) => {
  const t = {
    console: !0,
    dom: !0,
    fetch: !0,
    history: !0,
    sentry: !0,
    xhr: !0,
    ...e
  };
  return {
    name: ya,
    // TODO v8: Remove this
    setupOnce() {
    },
    // eslint-disable-line @typescript-eslint/no-empty-function
    setup(r) {
      t.console && Fp(Dm(r)), t.dom && Kp(km(r, t.dom)), t.xhr && M2(Sm(r)), t.fetch && a2(Am(r)), t.history && p2(Lm(r)), t.sentry && r.on && r.on("beforeSendEvent", wm(r));
    }
  };
}, va = Nm;
Ie(ya, va);
function wm(e) {
  return function(r) {
    J() === e && Ne(
      {
        category: `sentry.${r.type === "transaction" ? "transaction" : "event"}`,
        event_id: r.event_id,
        level: r.level,
        message: he(r)
      },
      {
        event: r
      }
    );
  };
}
function km(e, t) {
  return function(i) {
    if (J() !== e)
      return;
    let n, o, a = typeof t == "object" ? t.serializeAttribute : void 0, s = typeof t == "object" && typeof t.maxStringLength == "number" ? t.maxStringLength : void 0;
    s && s > lt && (Te && _.warn(
      `\`dom.maxStringLength\` cannot exceed ${lt}, but a value of ${s} was configured. Sentry will use ${lt} instead.`
    ), s = lt), typeof a == "string" && (a = [a]);
    try {
      const d = i.event, u = zm(d) ? d.target : d;
      n = Ko(u, { keyAttrs: a, maxStringLength: s }), o = Wp(u);
    } catch {
      n = "<unknown>";
    }
    if (n.length === 0)
      return;
    const l = {
      category: `ui.${i.name}`,
      message: n
    };
    o && (l.data = { "ui.component_name": o }), Ne(l, {
      event: i.event,
      name: i.name,
      global: i.global
    });
  };
}
function Dm(e) {
  return function(r) {
    if (J() !== e)
      return;
    const i = {
      category: "console",
      data: {
        arguments: r.args,
        logger: "console"
      },
      level: D2(r.level),
      message: kn(r.args, " ")
    };
    if (r.level === "assert")
      if (r.args[0] === !1)
        i.message = `Assertion failed: ${kn(r.args.slice(1), " ") || "console.assert"}`, i.data.arguments = r.args.slice(1);
      else
        return;
    Ne(i, {
      input: r.args,
      level: r.level
    });
  };
}
function Sm(e) {
  return function(r) {
    if (J() !== e)
      return;
    const { startTimestamp: i, endTimestamp: n } = r, o = r.xhr[Je];
    if (!i || !n || !o)
      return;
    const { method: a, url: s, status_code: l, body: d } = o, u = {
      method: a,
      url: s,
      status_code: l
    }, g = {
      xhr: r.xhr,
      input: d,
      startTimestamp: i,
      endTimestamp: n
    };
    Ne(
      {
        category: "xhr",
        data: u,
        type: "http"
      },
      g
    );
  };
}
function Am(e) {
  return function(r) {
    if (J() !== e)
      return;
    const { startTimestamp: i, endTimestamp: n } = r;
    if (n && !(r.fetchData.url.match(/sentry_key/) && r.fetchData.method === "POST"))
      if (r.error) {
        const o = r.fetchData, a = {
          data: r.error,
          input: r.args,
          startTimestamp: i,
          endTimestamp: n
        };
        Ne(
          {
            category: "fetch",
            data: o,
            level: "error",
            type: "http"
          },
          a
        );
      } else {
        const o = r.response, a = {
          ...r.fetchData,
          status_code: o && o.status
        }, s = {
          input: r.args,
          response: o,
          startTimestamp: i,
          endTimestamp: n
        };
        Ne(
          {
            category: "fetch",
            data: a,
            type: "http"
          },
          s
        );
      }
  };
}
function Lm(e) {
  return function(r) {
    if (J() !== e)
      return;
    let i = r.from, n = r.to;
    const o = $t(P.location.href);
    let a = i ? $t(i) : void 0;
    const s = $t(n);
    (!a || !a.path) && (a = o), o.protocol === s.protocol && o.host === s.host && (n = s.relative), o.protocol === a.protocol && o.host === a.host && (i = a.relative), Ne({
      category: "navigation",
      data: {
        from: i,
        to: n
      }
    });
  };
}
function zm(e) {
  return !!e && !!e.target;
}
const xa = "Dedupe", _m = () => {
  let e;
  return {
    name: xa,
    // TODO v8: Remove this
    setupOnce() {
    },
    // eslint-disable-line @typescript-eslint/no-empty-function
    processEvent(t) {
      if (t.type)
        return t;
      try {
        if (Tm(t, e))
          return Te && _.warn("Event dropped due to being a duplicate of previously captured event."), null;
      } catch {
      }
      return e = t;
    }
  };
}, ja = _m;
Ie(xa, ja);
function Tm(e, t) {
  return t ? !!(Cm(e, t) || Em(e, t)) : !1;
}
function Cm(e, t) {
  const r = e.message, i = t.message;
  return !(!r && !i || r && !i || !r && i || r !== i || !wa(e, t) || !Na(e, t));
}
function Em(e, t) {
  const r = Rn(t), i = Rn(e);
  return !(!r || !i || r.type !== i.type || r.value !== i.value || !wa(e, t) || !Na(e, t));
}
function Na(e, t) {
  let r = Hn(e), i = Hn(t);
  if (!r && !i)
    return !0;
  if (r && !i || !r && i || (r = r, i = i, i.length !== r.length))
    return !1;
  for (let n = 0; n < i.length; n++) {
    const o = i[n], a = r[n];
    if (o.filename !== a.filename || o.lineno !== a.lineno || o.colno !== a.colno || o.function !== a.function)
      return !1;
  }
  return !0;
}
function wa(e, t) {
  let r = e.fingerprint, i = t.fingerprint;
  if (!r && !i)
    return !0;
  if (r && !i || !r && i)
    return !1;
  r = r, i = i;
  try {
    return r.join("") === i.join("");
  } catch {
    return !1;
  }
}
function Rn(e) {
  return e.exception && e.exception.values && e.exception.values[0];
}
function Hn(e) {
  const t = e.exception;
  if (t)
    try {
      return t.values[0].stacktrace.frames;
    } catch {
      return;
    }
}
const ka = "GlobalHandlers", Um = (e = {}) => {
  const t = {
    onerror: !0,
    onunhandledrejection: !0,
    ...e
  };
  return {
    name: ka,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(r) {
      t.onerror && (Zm(r), Gn("onerror")), t.onunhandledrejection && (Wm(r), Gn("onunhandledrejection"));
    }
  };
}, Da = Um;
Ie(
  ka,
  Da
);
function Zm(e) {
  l2((t) => {
    const { stackParser: r, attachStacktrace: i } = Aa();
    if (J() !== e || Ma())
      return;
    const { msg: n, url: o, line: a, column: s, error: l } = t, d = l === void 0 && se(n) ? Rm(n, o, a, s) : Sa(
      ba(r, l || n, void 0, i, !1),
      o,
      a,
      s
    );
    d.level = "error", ca(d, {
      originalException: l,
      mechanism: {
        handled: !1,
        type: "onerror"
      }
    });
  });
}
function Wm(e) {
  u2((t) => {
    const { stackParser: r, attachStacktrace: i } = Aa();
    if (J() !== e || Ma())
      return;
    const n = Om(t), o = Xo(n) ? Pm(n) : ba(r, n, void 0, i, !0);
    o.level = "error", ca(o, {
      originalException: n,
      mechanism: {
        handled: !1,
        type: "onunhandledrejection"
      }
    });
  });
}
function Om(e) {
  if (Xo(e))
    return e;
  const t = e;
  try {
    if ("reason" in t)
      return t.reason;
    if ("detail" in t && "reason" in t.detail)
      return t.detail.reason;
  } catch {
  }
  return e;
}
function Pm(e) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
          value: `Non-Error promise rejection captured with value: ${String(e)}`
        }
      ]
    }
  };
}
function Rm(e, t, r, i) {
  const n = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
  let o = Bi(e) ? e.message : e, a = "Error";
  const s = o.match(n);
  return s && (a = s[1], o = s[2]), Sa({
    exception: {
      values: [
        {
          type: a,
          value: o
        }
      ]
    }
  }, t, r, i);
}
function Sa(e, t, r, i) {
  const n = e.exception = e.exception || {}, o = n.values = n.values || [], a = o[0] = o[0] || {}, s = a.stacktrace = a.stacktrace || {}, l = s.frames = s.frames || [], d = isNaN(parseInt(i, 10)) ? void 0 : i, u = isNaN(parseInt(r, 10)) ? void 0 : r, g = se(t) && t.length > 0 ? t : Zp();
  return l.length === 0 && l.push({
    colno: d,
    filename: g,
    function: "?",
    in_app: !0,
    lineno: u
  }), e;
}
function Gn(e) {
  Te && _.log(`Global Handler attached: ${e}`);
}
function Aa() {
  const e = J();
  return e && e.getOptions() || {
    stackParser: () => [],
    attachStacktrace: !1
  };
}
const La = "HttpContext", Hm = () => ({
  name: La,
  // TODO v8: Remove this
  setupOnce() {
  },
  // eslint-disable-line @typescript-eslint/no-empty-function
  preprocessEvent(e) {
    if (!P.navigator && !P.location && !P.document)
      return;
    const t = e.request && e.request.url || P.location && P.location.href, { referrer: r } = P.document || {}, { userAgent: i } = P.navigator || {}, n = {
      ...e.request && e.request.headers,
      ...r && { Referer: r },
      ...i && { "User-Agent": i }
    }, o = { ...e.request, ...t && { url: t }, headers: n };
    e.request = o;
  }
}), za = Hm;
Ie(La, za);
const Gm = "cause", Ym = 5, _a = "LinkedErrors", Qm = (e = {}) => {
  const t = e.limit || Ym, r = e.key || Gm;
  return {
    name: _a,
    // TODO v8: Remove this
    setupOnce() {
    },
    // eslint-disable-line @typescript-eslint/no-empty-function
    preprocessEvent(i, n, o) {
      const a = o.getOptions();
      Tp(
        // This differs from the LinkedErrors integration in core by using a different exceptionFromError function
        Ia,
        a.stackParser,
        a.maxValueLength,
        r,
        t,
        i,
        n
      );
    }
  };
}, Ta = Qm;
Ie(_a, Ta);
const Bm = [
  "EventTarget",
  "Window",
  "Node",
  "ApplicationCache",
  "AudioTrackList",
  "BroadcastChannel",
  "ChannelMergerNode",
  "CryptoOperation",
  "EventSource",
  "FileReader",
  "HTMLUnknownElement",
  "IDBDatabase",
  "IDBRequest",
  "IDBTransaction",
  "KeyOperation",
  "MediaController",
  "MessagePort",
  "ModalWindow",
  "Notification",
  "SVGElementInstance",
  "Screen",
  "SharedWorker",
  "TextTrack",
  "TextTrackCue",
  "TextTrackList",
  "WebSocket",
  "WebSocketWorker",
  "Worker",
  "XMLHttpRequest",
  "XMLHttpRequestEventTarget",
  "XMLHttpRequestUpload"
], Ca = "TryCatch", Jm = (e = {}) => {
  const t = {
    XMLHttpRequest: !0,
    eventTarget: !0,
    requestAnimationFrame: !0,
    setInterval: !0,
    setTimeout: !0,
    ...e
  };
  return {
    name: Ca,
    // TODO: This currently only works for the first client this is setup
    // We may want to adjust this to check for client etc.
    setupOnce() {
      t.setTimeout && H(P, "setTimeout", Yn), t.setInterval && H(P, "setInterval", Yn), t.requestAnimationFrame && H(P, "requestAnimationFrame", Vm), t.XMLHttpRequest && "XMLHttpRequest" in P && H(XMLHttpRequest.prototype, "send", Fm);
      const r = t.eventTarget;
      r && (Array.isArray(r) ? r : Bm).forEach(Xm);
    }
  };
}, Ea = Jm;
Ie(
  Ca,
  Ea
);
function Yn(e) {
  return function(...t) {
    const r = t[0];
    return t[0] = Ee(r, {
      mechanism: {
        data: { function: me(e) },
        handled: !1,
        type: "instrument"
      }
    }), e.apply(this, t);
  };
}
function Vm(e) {
  return function(t) {
    return e.apply(this, [
      Ee(t, {
        mechanism: {
          data: {
            function: "requestAnimationFrame",
            handler: me(e)
          },
          handled: !1,
          type: "instrument"
        }
      })
    ]);
  };
}
function Fm(e) {
  return function(...t) {
    const r = this;
    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((n) => {
      n in r && typeof r[n] == "function" && H(r, n, function(o) {
        const a = {
          mechanism: {
            data: {
              function: n,
              handler: me(o)
            },
            handled: !1,
            type: "instrument"
          }
        }, s = $i(o);
        return s && (a.mechanism.data.handler = me(s)), Ee(o, a);
      });
    }), e.apply(this, t);
  };
}
function Xm(e) {
  const t = P, r = t[e] && t[e].prototype;
  !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (H(r, "addEventListener", function(i) {
    return function(n, o, a) {
      try {
        typeof o.handleEvent == "function" && (o.handleEvent = Ee(o.handleEvent, {
          mechanism: {
            data: {
              function: "handleEvent",
              handler: me(o),
              target: e
            },
            handled: !1,
            type: "instrument"
          }
        }));
      } catch {
      }
      return i.apply(this, [
        n,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Ee(o, {
          mechanism: {
            data: {
              function: "addEventListener",
              handler: me(o),
              target: e
            },
            handled: !1,
            type: "instrument"
          }
        }),
        a
      ]);
    };
  }), H(
    r,
    "removeEventListener",
    function(i) {
      return function(n, o, a) {
        const s = o;
        try {
          const l = s && s.__sentry_wrapped__;
          l && i.call(this, n, l, a);
        } catch {
        }
        return i.call(this, n, s, a);
      };
    }
  ));
}
pa(), fa(), Ea(), va(), Da(), Ta(), ja(), za();
const Qn = (e = {}, t = Me()) => {
  if (!P.document) {
    Te && _.error("Global document not defined in showReportDialog call");
    return;
  }
  const { client: r, scope: i } = t.getStackTop(), n = e.dsn || r && r.getDsn();
  if (!n) {
    Te && _.error("DSN not configured for showReportDialog call");
    return;
  }
  i && (e.user = {
    ...i.getUser(),
    ...e.user
  }), e.eventId || (e.eventId = t.lastEventId());
  const o = P.document.createElement("script");
  o.async = !0, o.crossOrigin = "anonymous", o.src = im(n, e), e.onLoad && (o.onload = e.onLoad);
  const { onClose: a } = e;
  if (a) {
    const l = (d) => {
      if (d.data === "__sentry_reportdialog_closed__")
        try {
          a();
        } finally {
          P.removeEventListener("message", l);
        }
    };
    P.addEventListener("message", l);
  }
  const s = P.document.head || P.document.body;
  s ? s.appendChild(o) : Te && _.error("Not injecting report dialog. No injection point found in HTML");
};
var Ua = { exports: {} }, T = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var R = typeof Symbol == "function" && Symbol.for, rn = R ? Symbol.for("react.element") : 60103, nn = R ? Symbol.for("react.portal") : 60106, Ct = R ? Symbol.for("react.fragment") : 60107, Et = R ? Symbol.for("react.strict_mode") : 60108, Ut = R ? Symbol.for("react.profiler") : 60114, Zt = R ? Symbol.for("react.provider") : 60109, Wt = R ? Symbol.for("react.context") : 60110, on = R ? Symbol.for("react.async_mode") : 60111, Ot = R ? Symbol.for("react.concurrent_mode") : 60111, Pt = R ? Symbol.for("react.forward_ref") : 60112, Rt = R ? Symbol.for("react.suspense") : 60113, $m = R ? Symbol.for("react.suspense_list") : 60120, Ht = R ? Symbol.for("react.memo") : 60115, Gt = R ? Symbol.for("react.lazy") : 60116, qm = R ? Symbol.for("react.block") : 60121, Km = R ? Symbol.for("react.fundamental") : 60117, ef = R ? Symbol.for("react.responder") : 60118, tf = R ? Symbol.for("react.scope") : 60119;
function V(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case rn:
        switch (e = e.type, e) {
          case on:
          case Ot:
          case Ct:
          case Ut:
          case Et:
          case Rt:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Wt:
              case Pt:
              case Gt:
              case Ht:
              case Zt:
                return e;
              default:
                return t;
            }
        }
      case nn:
        return t;
    }
  }
}
function Za(e) {
  return V(e) === Ot;
}
T.AsyncMode = on;
T.ConcurrentMode = Ot;
T.ContextConsumer = Wt;
T.ContextProvider = Zt;
T.Element = rn;
T.ForwardRef = Pt;
T.Fragment = Ct;
T.Lazy = Gt;
T.Memo = Ht;
T.Portal = nn;
T.Profiler = Ut;
T.StrictMode = Et;
T.Suspense = Rt;
T.isAsyncMode = function(e) {
  return Za(e) || V(e) === on;
};
T.isConcurrentMode = Za;
T.isContextConsumer = function(e) {
  return V(e) === Wt;
};
T.isContextProvider = function(e) {
  return V(e) === Zt;
};
T.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === rn;
};
T.isForwardRef = function(e) {
  return V(e) === Pt;
};
T.isFragment = function(e) {
  return V(e) === Ct;
};
T.isLazy = function(e) {
  return V(e) === Gt;
};
T.isMemo = function(e) {
  return V(e) === Ht;
};
T.isPortal = function(e) {
  return V(e) === nn;
};
T.isProfiler = function(e) {
  return V(e) === Ut;
};
T.isStrictMode = function(e) {
  return V(e) === Et;
};
T.isSuspense = function(e) {
  return V(e) === Rt;
};
T.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ct || e === Ot || e === Ut || e === Et || e === Rt || e === $m || typeof e == "object" && e !== null && (e.$$typeof === Gt || e.$$typeof === Ht || e.$$typeof === Zt || e.$$typeof === Wt || e.$$typeof === Pt || e.$$typeof === Km || e.$$typeof === ef || e.$$typeof === tf || e.$$typeof === qm);
};
T.typeOf = V;
Ua.exports = T;
var rf = Ua.exports, Wa = rf, nf = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, of = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Oa = {};
Oa[Wa.ForwardRef] = nf;
Oa[Wa.Memo] = of;
const af = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function sf(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
const Bn = {
  componentStack: null,
  error: null,
  eventId: null
};
function cf(e, t) {
  const r = /* @__PURE__ */ new WeakMap();
  function i(n, o) {
    if (!r.has(n)) {
      if (n.cause)
        return r.set(n, !0), i(n.cause, o);
      n.cause = o;
    }
  }
  i(e, t);
}
class an extends oo {
  constructor(t) {
    super(t), an.prototype.__init.call(this), this.state = Bn, this._openFallbackReportDialog = !0;
    const r = J();
    r && r.on && t.showDialog && (this._openFallbackReportDialog = !1, r.on("afterSendEvent", (i) => {
      !i.type && i.event_id === this._lastEventId && Qn({ ...t.dialogOptions, eventId: this._lastEventId });
    }));
  }
  componentDidCatch(t, { componentStack: r }) {
    const { beforeCapture: i, onError: n, showDialog: o, dialogOptions: a } = this.props;
    en((s) => {
      if (sf(ho) && Qi(t)) {
        const d = new Error(t.message);
        d.name = `React ErrorBoundary ${t.name}`, d.stack = r, cf(t, d);
      }
      i && i(s, t, r);
      const l = Ki(t, {
        captureContext: {
          contexts: { react: { componentStack: r } }
        },
        // If users provide a fallback component we can assume they are handling the error.
        // Therefore, we set the mechanism depending on the presence of the fallback prop.
        mechanism: { handled: !!this.props.fallback }
      });
      n && n(t, r, l), o && (this._lastEventId = l, this._openFallbackReportDialog && Qn({ ...a, eventId: l })), this.setState({ error: t, componentStack: r, eventId: l });
    });
  }
  componentDidMount() {
    const { onMount: t } = this.props;
    t && t();
  }
  componentWillUnmount() {
    const { error: t, componentStack: r, eventId: i } = this.state, { onUnmount: n } = this.props;
    n && n(t, r, i);
  }
  __init() {
    this.resetErrorBoundary = () => {
      const { onReset: t } = this.props, { error: r, componentStack: i, eventId: n } = this.state;
      t && t(r, i, n), this.setState(Bn);
    };
  }
  render() {
    const { fallback: t, children: r } = this.props, i = this.state;
    if (i.error) {
      let n;
      return typeof t == "function" ? n = t({
        error: i.error,
        componentStack: i.componentStack,
        resetError: this.resetErrorBoundary,
        eventId: i.eventId
      }) : n = t, co(n) ? n : (t && af && _.warn("fallback did not produce a valid ReactElement"), null);
    }
    return typeof r == "function" ? r() : r;
  }
}
var Jn = { exports: {} }, Sr = { exports: {} }, Ar = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  function r(i) {
    var n = typeof i == "string" || i instanceof String;
    if (!n)
      throw new TypeError("This library (validator.js) validates strings only");
  }
  e.exports = t.default;
})(Ar, Ar.exports);
var w = Ar.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = w, i = n(r);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o(a) {
    return (0, i.default)(a), a = Date.parse(a), isNaN(a) ? null : new Date(a);
  }
  e.exports = t.default;
})(Sr, Sr.exports);
var sn = Sr.exports, Lr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = w, i = n(r);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o(a) {
    return (0, i.default)(a), parseFloat(a);
  }
  e.exports = t.default;
})(Lr, Lr.exports);
var Pa = Lr.exports, zr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = w, i = n(r);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o(a, s) {
    return (0, i.default)(a), parseInt(a, s || 10);
  }
  e.exports = t.default;
})(zr, zr.exports);
var lf = zr.exports, _r = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = w, i = n(r);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o(a, s) {
    return (0, i.default)(a), s ? a === "1" || a === "true" : a !== "0" && a !== "false" && a !== "";
  }
  e.exports = t.default;
})(_r, _r.exports);
var df = _r.exports, Tr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = w, i = n(r);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o(a, s) {
    return (0, i.default)(a), a === s;
  }
  e.exports = t.default;
})(Tr, Tr.exports);
var uf = Tr.exports, Cr = { exports: {} }, Er = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  };
  t.default = i;
  function i(n) {
    return (typeof n > "u" ? "undefined" : r(n)) === "object" && n !== null ? typeof n.toString == "function" ? n = n.toString() : n = "[object Object]" : (n === null || typeof n > "u" || isNaN(n) && !n.length) && (n = ""), String(n);
  }
  e.exports = t.default;
})(Er, Er.exports);
var cn = Er.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = w, i = a(r), n = cn, o = a(n);
  function a(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function s(l, d) {
    return (0, i.default)(l), l.indexOf((0, o.default)(d)) >= 0;
  }
  e.exports = t.default;
})(Cr, Cr.exports);
var gf = Cr.exports, Ur = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = w, i = n(r);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o(a, s, l) {
    return (0, i.default)(a), Object.prototype.toString.call(s) !== "[object RegExp]" && (s = new RegExp(s, l)), s.test(a);
  }
  e.exports = t.default;
})(Ur, Ur.exports);
var hf = Ur.exports, Zr = { exports: {} }, Wr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  function r() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments[1];
    for (var o in n)
      typeof i[o] > "u" && (i[o] = n[o]);
    return i;
  }
  e.exports = t.default;
})(Wr, Wr.exports);
var et = Wr.exports, Or = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
    return typeof s;
  } : function(s) {
    return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
  };
  t.default = a;
  var i = w, n = o(i);
  function o(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function a(s, l) {
    (0, n.default)(s);
    var d = void 0, u = void 0;
    (typeof l > "u" ? "undefined" : r(l)) === "object" ? (d = l.min || 0, u = l.max) : (d = arguments[1], u = arguments[2]);
    var g = encodeURI(s).split(/%..|./).length - 1;
    return g >= d && (typeof u > "u" || g <= u);
  }
  e.exports = t.default;
})(Or, Or.exports);
var Ra = Or.exports, Pr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var r = w, i = a(r), n = et, o = a(n);
  function a(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var s = {
    require_tld: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1
  };
  function l(d, u) {
    (0, i.default)(d), u = (0, o.default)(u, s), u.allow_trailing_dot && d[d.length - 1] === "." && (d = d.substring(0, d.length - 1));
    var g = d.split(".");
    if (u.require_tld) {
      var m = g.pop();
      if (!g.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(m) || /[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(m))
        return !1;
    }
    for (var p, I = 0; I < g.length; I++)
      if (p = g[I], u.allow_underscores && (p = p.replace(/_/g, "")), !/^[a-z\u00a1-\uffff0-9-]+$/i.test(p) || /[\uff01-\uff5e]/.test(p) || p[0] === "-" || p[p.length - 1] === "-")
        return !1;
    return !0;
  }
  e.exports = t.default;
})(Pr, Pr.exports);
var ln = Pr.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = f;
  var r = w, i = u(r), n = et, o = u(n), a = Ra, s = u(a), l = ln, d = u(l);
  function u(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var g = {
    allow_display_name: !1,
    require_display_name: !1,
    allow_utf8_local_part: !0,
    require_tld: !0
  }, m = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i, p = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i, I = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i, v = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i, M = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
  function f(b, x) {
    if ((0, i.default)(b), x = (0, o.default)(x, g), x.require_display_name || x.allow_display_name) {
      var S = b.match(m);
      if (S)
        b = S[1];
      else if (x.require_display_name)
        return !1;
    }
    var z = b.split("@"), D = z.pop(), N = z.join("@"), y = D.toLowerCase();
    if ((y === "gmail.com" || y === "googlemail.com") && (N = N.replace(/\./g, "").toLowerCase()), !(0, s.default)(N, { max: 64 }) || !(0, s.default)(D, { max: 254 }) || !(0, d.default)(D, { require_tld: x.require_tld }))
      return !1;
    if (N[0] === '"')
      return N = N.slice(1, N.length - 1), x.allow_utf8_local_part ? M.test(N) : I.test(N);
    for (var L = x.allow_utf8_local_part ? v : p, Z = N.split("."), A = 0; A < Z.length; A++)
      if (!L.test(Z[A]))
        return !1;
    return !0;
  }
  e.exports = t.default;
})(Zr, Zr.exports);
var Ha = Zr.exports, Rr = { exports: {} }, Hr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = w, i = n(r);
  function n(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var o = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/, a = /^[0-9A-F]{1,4}$/i;
  function s(l) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    if ((0, i.default)(l), d = String(d), d) {
      if (d === "4") {
        if (!o.test(l))
          return !1;
        var u = l.split(".").sort(function(M, f) {
          return M - f;
        });
        return u[3] <= 255;
      } else if (d === "6") {
        var g = l.split(":"), m = !1, p = s(g[g.length - 1], 4), I = p ? 7 : 8;
        if (g.length > I)
          return !1;
        if (l === "::")
          return !0;
        l.substr(0, 2) === "::" ? (g.shift(), g.shift(), m = !0) : l.substr(l.length - 2) === "::" && (g.pop(), g.pop(), m = !0);
        for (var v = 0; v < g.length; ++v)
          if (g[v] === "" && v > 0 && v < g.length - 1) {
            if (m)
              return !1;
            m = !0;
          } else if (!(p && v === g.length - 1)) {
            if (!a.test(g[v]))
              return !1;
          }
        return m ? g.length >= 1 : g.length === I;
      }
    } else
      return s(l, 4) || s(l, 6);
    return !1;
  }
  e.exports = t.default;
})(Hr, Hr.exports);
var Ga = Hr.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = v;
  var r = w, i = u(r), n = ln, o = u(n), a = Ga, s = u(a), l = et, d = u(l);
  function u(M) {
    return M && M.__esModule ? M : { default: M };
  }
  var g = {
    protocols: ["http", "https", "ftp"],
    require_tld: !0,
    require_protocol: !1,
    require_host: !0,
    require_valid_protocol: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1,
    allow_protocol_relative_urls: !1
  }, m = /^\[([^\]]+)\](?::([0-9]+))?$/;
  function p(M) {
    return Object.prototype.toString.call(M) === "[object RegExp]";
  }
  function I(M, f) {
    for (var b = 0; b < f.length; b++) {
      var x = f[b];
      if (M === x || p(x) && x.test(M))
        return !0;
    }
    return !1;
  }
  function v(M, f) {
    if ((0, i.default)(M), !M || M.length >= 2083 || /[\s<>]/.test(M) || M.indexOf("mailto:") === 0)
      return !1;
    f = (0, d.default)(f, g);
    var b = void 0, x = void 0, S = void 0, z = void 0, D = void 0, N = void 0, y = void 0, L = void 0;
    if (y = M.split("#"), M = y.shift(), y = M.split("?"), M = y.shift(), y = M.split("://"), y.length > 1) {
      if (b = y.shift(), f.require_valid_protocol && f.protocols.indexOf(b) === -1)
        return !1;
    } else {
      if (f.require_protocol)
        return !1;
      f.allow_protocol_relative_urls && M.substr(0, 2) === "//" && (y[0] = M.substr(2));
    }
    if (M = y.join("://"), y = M.split("/"), M = y.shift(), M === "" && !f.require_host)
      return !0;
    if (y = M.split("@"), y.length > 1 && (x = y.shift(), x.indexOf(":") >= 0 && x.split(":").length > 2))
      return !1;
    z = y.join("@"), N = null, L = null;
    var Z = z.match(m);
    return Z ? (S = "", L = Z[1], N = Z[2] || null) : (y = z.split(":"), S = y.shift(), y.length && (N = y.join(":"))), !(N !== null && (D = parseInt(N, 10), !/^[0-9]+$/.test(N) || D <= 0 || D > 65535) || !(0, s.default)(S) && !(0, o.default)(S, f) && (!L || !(0, s.default)(L, 6)) && S !== "localhost" || (S = S || L, f.host_whitelist && !I(S, f.host_whitelist)) || f.host_blacklist && I(S, f.host_blacklist));
  }
  e.exports = t.default;
})(Rr, Rr.exports);
var pf = Rr.exports, Gr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
  function a(s) {
    return (0, i.default)(s), o.test(s);
  }
  e.exports = t.default;
})(Gr, Gr.exports);
var mf = Gr.exports, Yr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = w, i = n(r);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o(a) {
    return (0, i.default)(a), ["true", "false", "1", "0"].indexOf(a) >= 0;
  }
  e.exports = t.default;
})(Yr, Yr.exports);
var ff = Yr.exports, Qr = { exports: {} }, Se = {};
Object.defineProperty(Se, "__esModule", {
  value: !0
});
var Ue = Se.alpha = {
  "en-US": /^[A-Z]+$/i,
  "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  "da-DK": /^[A-ZÆØÅ]+$/i,
  "de-DE": /^[A-ZÄÖÜß]+$/i,
  "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  "nl-NL": /^[A-ZÉËÏÓÖÜ]+$/i,
  "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  "pt-PT": /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  "ru-RU": /^[А-ЯЁ]+$/i,
  "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
  "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
  "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
  "uk-UA": /^[А-ЩЬЮЯЄIЇҐ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
}, Ze = Se.alphanumeric = {
  "en-US": /^[0-9A-Z]+$/i,
  "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  "da-DK": /^[0-9A-ZÆØÅ]$/i,
  "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
  "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  "nl-NL": /^[0-9A-ZÉËÏÓÖÜ]+$/i,
  "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  "pt-PT": /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  "ru-RU": /^[0-9А-ЯЁ]+$/i,
  "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
  "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
}, Vn = Se.englishLocales = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
for (var Kt, er = 0; er < Vn.length; er++)
  Kt = "en-" + Vn[er], Ue[Kt] = Ue["en-US"], Ze[Kt] = Ze["en-US"];
Ue["pt-BR"] = Ue["pt-PT"];
Ze["pt-BR"] = Ze["pt-PT"];
var Fn = Se.arabicLocales = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"];
for (var tr, rr = 0; rr < Fn.length; rr++)
  tr = "ar-" + Fn[rr], Ue[tr] = Ue.ar, Ze[tr] = Ze.ar;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = o(r), n = Se;
  function o(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function a(s) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
    if ((0, i.default)(s), l in n.alpha)
      return n.alpha[l].test(s);
    throw new Error("Invalid locale '" + l + "'");
  }
  e.exports = t.default;
})(Qr, Qr.exports);
var Mf = Qr.exports, Br = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = o(r), n = Se;
  function o(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function a(s) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
    if ((0, i.default)(s), l in n.alphanumeric)
      return n.alphanumeric[l].test(s);
    throw new Error("Invalid locale '" + l + "'");
  }
  e.exports = t.default;
})(Br, Br.exports);
var If = Br.exports, Jr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = /^[-+]?[0-9]+$/;
  function a(s) {
    return (0, i.default)(s), o.test(s);
  }
  e.exports = t.default;
})(Jr, Jr.exports);
var bf = Jr.exports, Vr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = w, i = n(r);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o(a) {
    return (0, i.default)(a), a === a.toLowerCase();
  }
  e.exports = t.default;
})(Vr, Vr.exports);
var yf = Vr.exports, Fr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = w, i = n(r);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o(a) {
    return (0, i.default)(a), a === a.toUpperCase();
  }
  e.exports = t.default;
})(Fr, Fr.exports);
var vf = Fr.exports, Xr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = /^[\x00-\x7F]+$/;
  function a(s) {
    return (0, i.default)(s), o.test(s);
  }
  e.exports = t.default;
})(Xr, Xr.exports);
var xf = Xr.exports, He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.fullWidth = void 0;
He.default = Df;
var jf = w, Nf = wf(jf);
function wf(e) {
  return e && e.__esModule ? e : { default: e };
}
var kf = He.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
function Df(e) {
  return (0, Nf.default)(e), kf.test(e);
}
var Ge = {};
Object.defineProperty(Ge, "__esModule", {
  value: !0
});
Ge.halfWidth = void 0;
Ge.default = _f;
var Sf = w, Af = Lf(Sf);
function Lf(e) {
  return e && e.__esModule ? e : { default: e };
}
var zf = Ge.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
function _f(e) {
  return (0, Af.default)(e), zf.test(e);
}
var $r = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = w, i = a(r), n = He, o = Ge;
  function a(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function s(l) {
    return (0, i.default)(l), n.fullWidth.test(l) && o.halfWidth.test(l);
  }
  e.exports = t.default;
})($r, $r.exports);
var Tf = $r.exports, qr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = /[^\x00-\x7F]/;
  function a(s) {
    return (0, i.default)(s), o.test(s);
  }
  e.exports = t.default;
})(qr, qr.exports);
var Cf = qr.exports, Kr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
  function a(s) {
    return (0, i.default)(s), o.test(s);
  }
  e.exports = t.default;
})(Kr, Kr.exports);
var Ef = Kr.exports, ei = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = w, i = n(r);
  function n(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var o = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, a = /^[-+]?[0-9]+$/;
  function s(l, d) {
    (0, i.default)(l), d = d || {};
    var u = d.hasOwnProperty("allow_leading_zeroes") && !d.allow_leading_zeroes ? o : a, g = !d.hasOwnProperty("min") || l >= d.min, m = !d.hasOwnProperty("max") || l <= d.max, p = !d.hasOwnProperty("lt") || l < d.lt, I = !d.hasOwnProperty("gt") || l > d.gt;
    return u.test(l) && g && m && p && I;
  }
  e.exports = t.default;
})(ei, ei.exports);
var Uf = ei.exports, ti = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = /^(?:[-+])?(?:[0-9]+)?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/;
  function a(s, l) {
    return (0, i.default)(s), l = l || {}, s === "" || s === "." ? !1 : o.test(s) && (!l.hasOwnProperty("min") || s >= l.min) && (!l.hasOwnProperty("max") || s <= l.max) && (!l.hasOwnProperty("lt") || s < l.lt) && (!l.hasOwnProperty("gt") || s > l.gt);
  }
  e.exports = t.default;
})(ti, ti.exports);
var Zf = ti.exports, ri = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/;
  function a(s) {
    return (0, i.default)(s), s !== "" && o.test(s);
  }
  e.exports = t.default;
})(ri, ri.exports);
var Wf = ri.exports, ii = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = /^[0-9A-F]+$/i;
  function a(s) {
    return (0, i.default)(s), o.test(s);
  }
  e.exports = t.default;
})(ii, ii.exports);
var Ya = ii.exports, ni = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = w, i = a(r), n = Pa, o = a(n);
  function a(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function s(l, d) {
    return (0, i.default)(l), (0, o.default)(l) % parseInt(d, 10) === 0;
  }
  e.exports = t.default;
})(ni, ni.exports);
var Of = ni.exports, oi = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;
  function a(s) {
    return (0, i.default)(s), o.test(s);
  }
  e.exports = t.default;
})(oi, oi.exports);
var Pf = oi.exports, ai = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
  function a(s) {
    return (0, i.default)(s), o.test(s);
  }
  e.exports = t.default;
})(ai, ai.exports);
var Rf = ai.exports, si = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = /^[a-f0-9]{32}$/;
  function a(s) {
    return (0, i.default)(s), o.test(s);
  }
  e.exports = t.default;
})(si, si.exports);
var Hf = si.exports, ci = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
    return typeof s;
  } : function(s) {
    return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
  };
  t.default = a;
  var i = w, n = o(i);
  function o(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function a(s) {
    (0, n.default)(s);
    try {
      var l = JSON.parse(s);
      return !!l && (typeof l > "u" ? "undefined" : r(l)) === "object";
    } catch {
    }
    return !1;
  }
  e.exports = t.default;
})(ci, ci.exports);
var Gf = ci.exports, li = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = w, i = n(r);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o(a) {
    return (0, i.default)(a), a.length === 0;
  }
  e.exports = t.default;
})(li, li.exports);
var Yf = li.exports, di = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
    return typeof s;
  } : function(s) {
    return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
  };
  t.default = a;
  var i = w, n = o(i);
  function o(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function a(s, l) {
    (0, n.default)(s);
    var d = void 0, u = void 0;
    (typeof l > "u" ? "undefined" : r(l)) === "object" ? (d = l.min || 0, u = l.max) : (d = arguments[1], u = arguments[2]);
    var g = s.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [], m = s.length - g.length;
    return m >= d && (typeof u > "u" || m <= u);
  }
  e.exports = t.default;
})(di, di.exports);
var Qf = di.exports, ui = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = {
    3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
  };
  function a(s) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
    (0, i.default)(s);
    var d = o[l];
    return d && d.test(s);
  }
  e.exports = t.default;
})(ui, ui.exports);
var Bf = ui.exports, gi = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = w, i = a(r), n = Ya, o = a(n);
  function a(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function s(l) {
    return (0, i.default)(l), (0, o.default)(l) && l.length === 24;
  }
  e.exports = t.default;
})(gi, gi.exports);
var Jf = gi.exports, hi = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = w, i = a(r), n = sn, o = a(n);
  function a(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function s(l) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : String(/* @__PURE__ */ new Date());
    (0, i.default)(l);
    var u = (0, o.default)(d), g = (0, o.default)(l);
    return !!(g && u && g > u);
  }
  e.exports = t.default;
})(hi, hi.exports);
var Vf = hi.exports, pi = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = w, i = a(r), n = sn, o = a(n);
  function a(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function s(l) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : String(/* @__PURE__ */ new Date());
    (0, i.default)(l);
    var u = (0, o.default)(d), g = (0, o.default)(l);
    return !!(g && u && g < u);
  }
  e.exports = t.default;
})(pi, pi.exports);
var Ff = pi.exports, mi = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
    return typeof d;
  } : function(d) {
    return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
  };
  t.default = l;
  var i = w, n = s(i), o = cn, a = s(o);
  function s(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function l(d, u) {
    (0, n.default)(d);
    var g = void 0;
    if (Object.prototype.toString.call(u) === "[object Array]") {
      var m = [];
      for (g in u)
        ({}).hasOwnProperty.call(u, g) && (m[g] = (0, a.default)(u[g]));
      return m.indexOf(d) >= 0;
    } else {
      if ((typeof u > "u" ? "undefined" : r(u)) === "object")
        return u.hasOwnProperty(d);
      if (u && typeof u.indexOf == "function")
        return u.indexOf(d) >= 0;
    }
    return !1;
  }
  e.exports = t.default;
})(mi, mi.exports);
var Xf = mi.exports, fi = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
  function a(s) {
    (0, i.default)(s);
    var l = s.replace(/[- ]+/g, "");
    if (!o.test(l))
      return !1;
    for (var d = 0, u = void 0, g = void 0, m = void 0, p = l.length - 1; p >= 0; p--)
      u = l.substring(p, p + 1), g = parseInt(u, 10), m ? (g *= 2, g >= 10 ? d += g % 10 + 1 : d += g) : d += g, m = !m;
    return !!(d % 10 === 0 && l);
  }
  e.exports = t.default;
})(fi, fi.exports);
var $f = fi.exports, Mi = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;
  function a(s) {
    if ((0, i.default)(s), !o.test(s))
      return !1;
    for (var l = s.replace(/[A-Z]/g, function(I) {
      return parseInt(I, 36);
    }), d = 0, u = void 0, g = void 0, m = !0, p = l.length - 2; p >= 0; p--)
      u = l.substring(p, p + 1), g = parseInt(u, 10), m ? (g *= 2, g >= 10 ? d += g + 1 : d += g) : d += g, m = !m;
    return parseInt(s.substr(s.length - 1), 10) === (1e4 - d) % 10;
  }
  e.exports = t.default;
})(Mi, Mi.exports);
var qf = Mi.exports, Ii = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var r = w, i = n(r);
  function n(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var o = /^(?:[0-9]{9}X|[0-9]{10})$/, a = /^(?:[0-9]{13})$/, s = [1, 3];
  function l(d) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    if ((0, i.default)(d), u = String(u), !u)
      return l(d, 10) || l(d, 13);
    var g = d.replace(/[\s-]+/g, ""), m = 0, p = void 0;
    if (u === "10") {
      if (!o.test(g))
        return !1;
      for (p = 0; p < 9; p++)
        m += (p + 1) * g.charAt(p);
      if (g.charAt(9) === "X" ? m += 10 * 10 : m += 10 * g.charAt(9), m % 11 === 0)
        return !!g;
    } else if (u === "13") {
      if (!a.test(g))
        return !1;
      for (p = 0; p < 12; p++)
        m += s[p % 2] * g.charAt(p);
      if (g.charAt(12) - (10 - m % 10) % 10 === 0)
        return !!g;
    }
    return !1;
  }
  e.exports = t.default;
})(Ii, Ii.exports);
var Kf = Ii.exports, bi = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = "^\\d{4}-?\\d{3}[\\dX]$";
  function a(s) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, i.default)(s);
    var d = o;
    if (d = l.require_hyphen ? d.replace("?", "") : d, d = l.case_sensitive ? new RegExp(d) : new RegExp(d, "i"), !d.test(s))
      return !1;
    var u = s.replace("-", ""), g = 8, m = 0, p = !0, I = !1, v = void 0;
    try {
      for (var M = u[Symbol.iterator](), f; !(p = (f = M.next()).done); p = !0) {
        var b = f.value, x = b.toUpperCase() === "X" ? 10 : +b;
        m += x * g, --g;
      }
    } catch (S) {
      I = !0, v = S;
    } finally {
      try {
        !p && M.return && M.return();
      } finally {
        if (I)
          throw v;
      }
    }
    return m % 11 === 0;
  }
  e.exports = t.default;
})(bi, bi.exports);
var eM = bi.exports, yi = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = {
    "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
    "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
    "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
    "en-US": /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
    "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    "de-DE": /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
    "da-DK": /^(\+?45)?(\d{8})$/,
    "el-GR": /^(\+?30)?(69\d{8})$/,
    "en-AU": /^(\+?61|0)4\d{8}$/,
    "en-GB": /^(\+?44|0)7\d{9}$/,
    "en-HK": /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
    "en-IN": /^(\+?91|0)?[789]\d{9}$/,
    "en-KE": /^(\+?254|0)?[7]\d{8}$/,
    "en-NG": /^(\+?234|0)?[789]\d{9}$/,
    "en-NZ": /^(\+?64|0)2\d{7,9}$/,
    "en-UG": /^(\+?256|0)?[7]\d{8}$/,
    "en-RW": /^(\+?250|0)?[7]\d{8}$/,
    "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
    "en-ZA": /^(\+?27|0)\d{9}$/,
    "en-ZM": /^(\+?26)?09[567]\d{7}$/,
    "es-ES": /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
    "fi-FI": /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
    "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
    "fr-FR": /^(\+?33|0)[67]\d{8}$/,
    "he-IL": /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}/,
    "hu-HU": /^(\+?36)(20|30|70)\d{7}$/,
    "lt-LT": /^(\+370|8)\d{8}$/,
    "id-ID": /^(\+?62|0[1-9])[\s|\d]+$/,
    "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
    "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
    "ja-JP": /^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,
    "ms-MY": /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
    "nb-NO": /^(\+?47)?[49]\d{7}$/,
    "nl-BE": /^(\+?32|0)4?\d{8}$/,
    "nn-NO": /^(\+?47)?[49]\d{7}$/,
    "pl-PL": /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
    "pt-BR": /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
    "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
    "ro-RO": /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
    "en-PK": /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
    "ru-RU": /^(\+?7|8)?9\d{9}$/,
    "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
    "tr-TR": /^(\+?90|0)?5\d{9}$/,
    "vi-VN": /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
    "zh-CN": /^(\+?0?86\-?)?1[345789]\d{9}$/,
    "zh-TW": /^(\+?886\-?|0)?9\d{8}$/
  };
  o["en-CA"] = o["en-US"], o["fr-BE"] = o["nl-BE"], o["zh-HK"] = o["en-HK"];
  function a(s, l) {
    return (0, i.default)(s), l in o ? o[l].test(s) : l === "any" ? !!Object.values(o).find(function(d) {
      return d.test(s);
    }) : !1;
  }
  e.exports = t.default;
})(yi, yi.exports);
var tM = yi.exports, vi = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = d;
  var r = et, i = a(r), n = w, o = a(n);
  function a(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function s(u) {
    var g = "(\\" + u.symbol.replace(/\./g, "\\.") + ")" + (u.require_symbol ? "" : "?"), m = "-?", p = "[1-9]\\d*", I = "[1-9]\\d{0,2}(\\" + u.thousands_separator + "\\d{3})*", v = ["0", p, I], M = "(" + v.join("|") + ")?", f = "(\\" + u.decimal_separator + "\\d{2})?", b = M + f;
    return u.allow_negatives && !u.parens_for_negatives && (u.negative_sign_after_digits ? b += m : u.negative_sign_before_digits && (b = m + b)), u.allow_negative_sign_placeholder ? b = "( (?!\\-))?" + b : u.allow_space_after_symbol ? b = " ?" + b : u.allow_space_after_digits && (b += "( (?!$))?"), u.symbol_after_digits ? b += g : b = g + b, u.allow_negatives && (u.parens_for_negatives ? b = "(\\(" + b + "\\)|" + b + ")" : u.negative_sign_before_digits || u.negative_sign_after_digits || (b = m + b)), new RegExp("^(?!-? )(?=.*\\d)" + b + "$");
  }
  var l = {
    symbol: "$",
    require_symbol: !1,
    allow_space_after_symbol: !1,
    symbol_after_digits: !1,
    allow_negatives: !0,
    parens_for_negatives: !1,
    negative_sign_before_digits: !1,
    negative_sign_after_digits: !1,
    allow_negative_sign_placeholder: !1,
    thousands_separator: ",",
    decimal_separator: ".",
    allow_space_after_digits: !1
  };
  function d(u, g) {
    return (0, o.default)(u), g = (0, i.default)(g, l), s(g).test(u);
  }
  e.exports = t.default;
})(vi, vi.exports);
var rM = vi.exports, tt = {};
Object.defineProperty(tt, "__esModule", {
  value: !0
});
tt.iso8601 = void 0;
tt.default = function(e) {
  return (0, nM.default)(e), aM.test(e);
};
var iM = w, nM = oM(iM);
function oM(e) {
  return e && e.__esModule ? e : { default: e };
}
var aM = tt.iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/, xi = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = /[^A-Z0-9+\/=]/i;
  function a(s) {
    (0, i.default)(s);
    var l = s.length;
    if (!l || l % 4 !== 0 || o.test(s))
      return !1;
    var d = s.indexOf("=");
    return d === -1 || d === l - 1 || d === l - 2 && s[l - 1] === "=";
  }
  e.exports = t.default;
})(xi, xi.exports);
var sM = xi.exports, ji = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var r = w, i = n(r);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var o = /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9!\$&',\(\)\*\+,;=\-\._~:@\/\?%\s]*\s*$/i;
  function a(s) {
    return (0, i.default)(s), o.test(s);
  }
  e.exports = t.default;
})(ji, ji.exports);
var cM = ji.exports, Ni = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = w, i = n(r);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o(a, s) {
    (0, i.default)(a);
    var l = s ? new RegExp("^[" + s + "]+", "g") : /^\s+/g;
    return a.replace(l, "");
  }
  e.exports = t.default;
})(Ni, Ni.exports);
var Qa = Ni.exports, wi = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = w, i = n(r);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o(a, s) {
    (0, i.default)(a);
    for (var l = s ? new RegExp("[" + s + "]") : /\s/, d = a.length - 1; d >= 0 && l.test(a[d]); )
      d--;
    return d < a.length ? a.substr(0, d + 1) : a;
  }
  e.exports = t.default;
})(wi, wi.exports);
var Ba = wi.exports, ki = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = Ba, i = a(r), n = Qa, o = a(n);
  function a(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function s(l, d) {
    return (0, i.default)((0, o.default)(l, d), d);
  }
  e.exports = t.default;
})(ki, ki.exports);
var lM = ki.exports, Di = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = w, i = n(r);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o(a) {
    return (0, i.default)(a), a.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;");
  }
  e.exports = t.default;
})(Di, Di.exports);
var dM = Di.exports, Si = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = w, i = n(r);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o(a) {
    return (0, i.default)(a), a.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#96;/g, "`");
  }
  e.exports = t.default;
})(Si, Si.exports);
var uM = Si.exports, Ai = { exports: {} }, Li = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = w, i = n(r);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o(a, s) {
    return (0, i.default)(a), a.replace(new RegExp("[" + s + "]+", "g"), "");
  }
  e.exports = t.default;
})(Li, Li.exports);
var Ja = Li.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var r = w, i = a(r), n = Ja, o = a(n);
  function a(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function s(l, d) {
    (0, i.default)(l);
    var u = d ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
    return (0, o.default)(l, u);
  }
  e.exports = t.default;
})(Ai, Ai.exports);
var gM = Ai.exports, zi = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = w, i = n(r);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o(a, s) {
    return (0, i.default)(a), a.replace(new RegExp("[^" + s + "]+", "g"), "");
  }
  e.exports = t.default;
})(zi, zi.exports);
var hM = zi.exports, _i = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = o;
  var r = w, i = n(r);
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function o(a, s) {
    (0, i.default)(a);
    for (var l = a.length - 1; l >= 0; l--)
      if (s.indexOf(a[l]) === -1)
        return !1;
    return !0;
  }
  e.exports = t.default;
})(_i, _i.exports);
var pM = _i.exports, Ti = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = g;
  var r = Ha, i = a(r), n = et, o = a(n);
  function a(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var s = {
    // The following options apply to all email addresses
    // Lowercases the local part of the email address.
    // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
    // The domain is always lowercased, as per RFC 1035
    all_lowercase: !0,
    // The following conversions are specific to GMail
    // Lowercases the local part of the GMail address (known to be case-insensitive)
    gmail_lowercase: !0,
    // Removes dots from the local part of the email address, as that's ignored by GMail
    gmail_remove_dots: !0,
    // Removes the subaddress (e.g. "+foo") from the email address
    gmail_remove_subaddress: !0,
    // Conversts the googlemail.com domain to gmail.com
    gmail_convert_googlemaildotcom: !0,
    // The following conversions are specific to Outlook.com / Windows Live / Hotmail
    // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
    outlookdotcom_lowercase: !0,
    // Removes the subaddress (e.g. "+foo") from the email address
    outlookdotcom_remove_subaddress: !0,
    // The following conversions are specific to Yahoo
    // Lowercases the local part of the Yahoo address (known to be case-insensitive)
    yahoo_lowercase: !0,
    // Removes the subaddress (e.g. "-foo") from the email address
    yahoo_remove_subaddress: !0,
    // The following conversions are specific to iCloud
    // Lowercases the local part of the iCloud address (known to be case-insensitive)
    icloud_lowercase: !0,
    // Removes the subaddress (e.g. "+foo") from the email address
    icloud_remove_subaddress: !0
  }, l = ["icloud.com", "me.com"], d = ["hotmail.at", "hotmail.be", "hotmail.ca", "hotmail.cl", "hotmail.co.il", "hotmail.co.nz", "hotmail.co.th", "hotmail.co.uk", "hotmail.com", "hotmail.com.ar", "hotmail.com.au", "hotmail.com.br", "hotmail.com.gr", "hotmail.com.mx", "hotmail.com.pe", "hotmail.com.tr", "hotmail.com.vn", "hotmail.cz", "hotmail.de", "hotmail.dk", "hotmail.es", "hotmail.fr", "hotmail.hu", "hotmail.id", "hotmail.ie", "hotmail.in", "hotmail.it", "hotmail.jp", "hotmail.kr", "hotmail.lv", "hotmail.my", "hotmail.ph", "hotmail.pt", "hotmail.sa", "hotmail.sg", "hotmail.sk", "live.be", "live.co.uk", "live.com", "live.com.ar", "live.com.mx", "live.de", "live.es", "live.eu", "live.fr", "live.it", "live.nl", "msn.com", "outlook.at", "outlook.be", "outlook.cl", "outlook.co.il", "outlook.co.nz", "outlook.co.th", "outlook.com", "outlook.com.ar", "outlook.com.au", "outlook.com.br", "outlook.com.gr", "outlook.com.pe", "outlook.com.tr", "outlook.com.vn", "outlook.cz", "outlook.de", "outlook.dk", "outlook.es", "outlook.fr", "outlook.hu", "outlook.id", "outlook.ie", "outlook.in", "outlook.it", "outlook.jp", "outlook.kr", "outlook.lv", "outlook.my", "outlook.ph", "outlook.pt", "outlook.sa", "outlook.sg", "outlook.sk", "passport.com"], u = ["rocketmail.com", "yahoo.ca", "yahoo.co.uk", "yahoo.com", "yahoo.de", "yahoo.fr", "yahoo.in", "yahoo.it", "ymail.com"];
  function g(m, p) {
    if (p = (0, o.default)(p, s), !(0, i.default)(m))
      return !1;
    var I = m.split("@"), v = I.pop(), M = I.join("@"), f = [M, v];
    if (f[1] = f[1].toLowerCase(), f[1] === "gmail.com" || f[1] === "googlemail.com") {
      if (p.gmail_remove_subaddress && (f[0] = f[0].split("+")[0]), p.gmail_remove_dots && (f[0] = f[0].replace(/\./g, "")), !f[0].length)
        return !1;
      (p.all_lowercase || p.gmail_lowercase) && (f[0] = f[0].toLowerCase()), f[1] = p.gmail_convert_googlemaildotcom ? "gmail.com" : f[1];
    } else if (~l.indexOf(f[1])) {
      if (p.icloud_remove_subaddress && (f[0] = f[0].split("+")[0]), !f[0].length)
        return !1;
      (p.all_lowercase || p.icloud_lowercase) && (f[0] = f[0].toLowerCase());
    } else if (~d.indexOf(f[1])) {
      if (p.outlookdotcom_remove_subaddress && (f[0] = f[0].split("+")[0]), !f[0].length)
        return !1;
      (p.all_lowercase || p.outlookdotcom_lowercase) && (f[0] = f[0].toLowerCase());
    } else if (~u.indexOf(f[1])) {
      if (p.yahoo_remove_subaddress) {
        var b = f[0].split("-");
        f[0] = b.length > 1 ? b.slice(0, -1).join("-") : b[0];
      }
      if (!f[0].length)
        return !1;
      (p.all_lowercase || p.yahoo_lowercase) && (f[0] = f[0].toLowerCase());
    } else
      p.all_lowercase && (f[0] = f[0].toLowerCase());
    return f.join("@");
  }
  e.exports = t.default;
})(Ti, Ti.exports);
var mM = Ti.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = sn, i = j(r), n = Pa, o = j(n), a = lf, s = j(a), l = df, d = j(l), u = uf, g = j(u), m = gf, p = j(m), I = hf, v = j(I), M = Ha, f = j(M), b = pf, x = j(b), S = mf, z = j(S), D = Ga, N = j(D), y = ln, L = j(y), Z = ff, A = j(Z), re = Mf, Ae = j(re), Qt = If, Bt = j(Qt), ie = bf, Jt = j(ie), cs = yf, ls = j(cs), ds = vf, us = j(ds), gs = xf, hs = j(gs), ps = He, ms = j(ps), fs = Ge, Ms = j(fs), Is = Tf, bs = j(Is), ys = Cf, vs = j(ys), xs = Ef, js = j(xs), Ns = Uf, ws = j(Ns), ks = Zf, Ds = j(ks), Ss = Wf, As = j(Ss), Ls = Ya, zs = j(Ls), _s = Of, Ts = j(_s), Cs = Pf, Es = j(Cs), Us = Rf, Zs = j(Us), Ws = Hf, Os = j(Ws), Ps = Gf, Rs = j(Ps), Hs = Yf, Gs = j(Hs), Ys = Qf, Qs = j(Ys), Bs = Ra, Js = j(Bs), Vs = Bf, Fs = j(Vs), Xs = Jf, $s = j(Xs), qs = Vf, Ks = j(qs), ec = Ff, tc = j(ec), rc = Xf, ic = j(rc), nc = $f, oc = j(nc), ac = qf, sc = j(ac), cc = Kf, lc = j(cc), dc = eM, uc = j(dc), gc = tM, hc = j(gc), pc = rM, mc = j(pc), fc = tt, Mc = j(fc), Ic = sM, bc = j(Ic), yc = cM, vc = j(yc), xc = Qa, jc = j(xc), Nc = Ba, wc = j(Nc), kc = lM, Dc = j(kc), Sc = dM, Ac = j(Sc), Lc = uM, zc = j(Lc), _c = gM, Tc = j(_c), Cc = hM, Ec = j(Cc), Uc = Ja, Zc = j(Uc), Wc = pM, Oc = j(Wc), Pc = mM, Rc = j(Pc), Hc = cn, Gc = j(Hc);
  function j(rt) {
    return rt && rt.__esModule ? rt : { default: rt };
  }
  var Yc = "7.2.0", Qc = {
    version: Yc,
    toDate: i.default,
    toFloat: o.default,
    toInt: s.default,
    toBoolean: d.default,
    equals: g.default,
    contains: p.default,
    matches: v.default,
    isEmail: f.default,
    isURL: x.default,
    isMACAddress: z.default,
    isIP: N.default,
    isFQDN: L.default,
    isBoolean: A.default,
    isAlpha: Ae.default,
    isAlphanumeric: Bt.default,
    isNumeric: Jt.default,
    isLowercase: ls.default,
    isUppercase: us.default,
    isAscii: hs.default,
    isFullWidth: ms.default,
    isHalfWidth: Ms.default,
    isVariableWidth: bs.default,
    isMultibyte: vs.default,
    isSurrogatePair: js.default,
    isInt: ws.default,
    isFloat: Ds.default,
    isDecimal: As.default,
    isHexadecimal: zs.default,
    isDivisibleBy: Ts.default,
    isHexColor: Es.default,
    isISRC: Zs.default,
    isMD5: Os.default,
    isJSON: Rs.default,
    isEmpty: Gs.default,
    isLength: Qs.default,
    isByteLength: Js.default,
    isUUID: Fs.default,
    isMongoId: $s.default,
    isAfter: Ks.default,
    isBefore: tc.default,
    isIn: ic.default,
    isCreditCard: oc.default,
    isISIN: sc.default,
    isISBN: lc.default,
    isISSN: uc.default,
    isMobilePhone: hc.default,
    isCurrency: mc.default,
    isISO8601: Mc.default,
    isBase64: bc.default,
    isDataURI: vc.default,
    ltrim: jc.default,
    rtrim: wc.default,
    trim: Dc.default,
    escape: Ac.default,
    unescape: zc.default,
    stripLow: Tc.default,
    whitelist: Ec.default,
    blacklist: Zc.default,
    isWhitelisted: Oc.default,
    normalizeEmail: Rc.default,
    toString: Gc.default
  };
  t.default = Qc, e.exports = t.default;
})(Jn, Jn.exports);
const fM = ({
  id: e,
  title: t,
  onClick: r,
  selected: i,
  border: n,
  counter: o
}) => /* @__PURE__ */ h.jsxs(
  "button",
  {
    "aria-selected": i,
    className: k(
      "-m-b-px cursor-pointer appearance-none whitespace-nowrap py-1 text-sm transition-all after:invisible after:block after:h-px after:overflow-hidden after:font-bold after:text-transparent after:content-[attr(title)] dark:text-white",
      n && "border-b-[3px]",
      i && n ? "border-black dark:border-white" : "border-transparent hover:border-grey-500",
      i && "font-bold"
    ),
    id: e,
    role: "tab",
    title: t,
    type: "button",
    onClick: r,
    children: [
      t,
      typeof o == "number" && /* @__PURE__ */ h.jsx("span", { className: "ml-1.5 rounded-full bg-grey-200 px-1.5 py-[2px] text-xs font-normal text-grey-800 dark:bg-grey-900 dark:text-grey-300", children: o })
    ]
  },
  e
), Va = ({
  tabs: e,
  width: t = "normal",
  handleTabChange: r,
  border: i,
  buttonBorder: n,
  selectedTab: o,
  topRightContent: a
}) => {
  const s = k(
    "no-scrollbar flex w-full overflow-x-auto",
    t === "narrow" && "gap-3",
    t === "normal" && "gap-5",
    t === "wide" && "gap-7",
    i && "border-b border-grey-300 dark:border-grey-900"
  );
  return /* @__PURE__ */ h.jsxs("div", { className: s, role: "tablist", children: [
    e.map((l) => /* @__PURE__ */ h.jsx("div", { children: /* @__PURE__ */ h.jsx(
      fM,
      {
        border: n,
        counter: l.counter,
        id: l.id,
        selected: o === l.id,
        title: l.title,
        onClick: r
      }
    ) })),
    a !== null ? /* @__PURE__ */ h.jsx("div", { className: "ml-auto", children: a }) : null
  ] });
}, MM = ({ image: e, label: t, labelColor: r, bgColor: i, size: n, className: o }) => {
  let a = "", s = " -mb-2 ";
  switch (n) {
    case "sm":
      a = " w-7 h-7 text-sm ";
      break;
    case "lg":
      a = " w-12 h-12 text-xl ";
      break;
    case "xl":
      a = " w-16 h-16 text-2xl ", s = " -mb-3 ";
      break;
    case "2xl":
      a = " w-20 h-20 text-2xl ", s = " -mb-3 ";
      break;
    default:
      a = " w-10 h-10 text-md ";
      break;
  }
  return e ? /* @__PURE__ */ h.jsx("img", { alt: "", className: `inline-flex shrink-0 items-center justify-center rounded-full object-cover font-semibold ${a} ${o && o}`, src: e }) : t ? /* @__PURE__ */ h.jsx("div", { className: `${r && `text-${r}`} inline-flex items-center justify-center rounded-full p-2 font-semibold ${a} ${o && o}`, style: i ? { backgroundColor: i } : {}, children: t }) : /* @__PURE__ */ h.jsx("div", { className: `inline-flex items-center justify-center overflow-hidden rounded-full bg-grey-100 p-1 font-semibold ${a} ${o && o}`, children: /* @__PURE__ */ h.jsx(Co, { className: `${s} h-full w-full  text-grey-300` }) });
}, IM = ({
  title: e,
  titleSize: t = "sm",
  actions: r,
  titleSeparator: i
}) => {
  let n;
  if (e) {
    const o = t === "sm" ? /* @__PURE__ */ h.jsx(xe, { grey: !0, level: 6, children: e }) : /* @__PURE__ */ h.jsx(xe, { level: 5, children: e });
    n = r ? /* @__PURE__ */ h.jsxs("div", { className: "flex items-end justify-between gap-2", children: [
      o,
      r
    ] }) : o;
  }
  return n || i ? /* @__PURE__ */ h.jsxs("div", { className: "flex flex-col items-stretch gap-1", children: [
    n,
    i && /* @__PURE__ */ h.jsx(Ri, {})
  ] }) : /* @__PURE__ */ h.jsx(h.Fragment, {});
}, bM = ({
  title: e,
  titleSeparator: t = !0,
  titleSize: r = "sm",
  children: i,
  actions: n,
  hint: o,
  hintSeparator: a = !0,
  borderTop: s,
  pageTitle: l,
  className: d
}) => {
  const u = k(
    (s || l) && "border-t border-grey-300",
    l && "mt-5",
    d
  );
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    l && /* @__PURE__ */ h.jsx(xe, { children: l }),
    /* @__PURE__ */ h.jsxs("section", { className: u, children: [
      e && /* @__PURE__ */ h.jsx(IM, { actions: n, title: e, titleSeparator: !l && t && !s, titleSize: r }),
      /* @__PURE__ */ h.jsx("div", { className: "flex flex-col", children: i }),
      o && /* @__PURE__ */ h.jsxs("div", { className: "-mt-px", children: [
        a && /* @__PURE__ */ h.jsx(Ri, {}),
        /* @__PURE__ */ h.jsx(pd, { children: o })
      ] })
    ] })
  ] });
}, yM = ({
  id: e,
  title: t,
  detail: r,
  action: i,
  hideActions: n,
  avatar: o,
  className: a,
  testId: s,
  separator: l = !0,
  bgOnHover: d = !0,
  paddingRight: u = !0,
  onClick: g,
  children: m
}) => {
  const p = (v) => {
    g == null || g(v);
  }, I = k(
    "group/list-item flex items-center justify-between",
    d && "hover:bg-gradient-to-r hover:from-white hover:to-grey-50 dark:hover:from-black dark:hover:to-grey-950",
    l ? "border-b border-grey-100 last-of-type:border-b-transparent hover:border-grey-200 dark:border-grey-900 dark:hover:border-grey-800" : "border-y border-transparent hover:border-grey-200 first-of-type:hover:border-t-transparent dark:hover:border-grey-800",
    a
  );
  return /* @__PURE__ */ h.jsxs("div", { className: I, "data-testid": s, children: [
    m || /* @__PURE__ */ h.jsxs("div", { className: `flex grow items-center gap-3 ${g && "cursor-pointer"}`, onClick: p, children: [
      o && o,
      /* @__PURE__ */ h.jsxs("div", { className: "flex grow flex-col py-3 pr-6", id: e, children: [
        /* @__PURE__ */ h.jsx("span", { children: t }),
        r && /* @__PURE__ */ h.jsx("span", { className: "text-xs text-grey-700", children: r })
      ] })
    ] }),
    i && /* @__PURE__ */ h.jsx("div", { className: `visible py-3 md:pl-6 ${u && "md:pr-6"} ${n ? "group-hover/list-item:visible md:invisible" : ""}`, children: i })
  ] });
};
function vM(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function xM(e) {
  return "nodeType" in e;
}
function jM(e) {
  var t, r;
  return e ? vM(e) ? e : xM(e) && (t = (r = e.ownerDocument) == null ? void 0 : r.defaultView) != null ? t : window : window;
}
var Xn;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Xn || (Xn = {}));
const NM = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function wM(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
function kM(e, t, r) {
  const i = wM(t);
  if (!i)
    return e;
  const {
    scaleX: n,
    scaleY: o,
    x: a,
    y: s
  } = i, l = e.left - a - (1 - n) * parseFloat(r), d = e.top - s - (1 - o) * parseFloat(r.slice(r.indexOf(" ") + 1)), u = n ? e.width / n : e.width, g = o ? e.height / o : e.height;
  return {
    width: u,
    height: g,
    top: d,
    right: l + u,
    bottom: d + g,
    left: l
  };
}
const DM = {
  ignoreTransform: !1
};
function Fa(e, t) {
  t === void 0 && (t = DM);
  let r = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: d,
      transformOrigin: u
    } = jM(e).getComputedStyle(e);
    d && (r = kM(r, d, u));
  }
  const {
    top: i,
    left: n,
    width: o,
    height: a,
    bottom: s,
    right: l
  } = r;
  return {
    top: i,
    left: n,
    width: o,
    height: a,
    bottom: s,
    right: l
  };
}
function $n(e) {
  return Fa(e, {
    ignoreTransform: !0
  });
}
var ze;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(ze || (ze = {}));
var qn;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(qn || (qn = {}));
var $;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})($ || ($ = {}));
$.Space, $.Enter, $.Esc, $.Space, $.Enter;
var Kn;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Kn || (Kn = {}));
var eo;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(eo || (eo = {}));
var to;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(to || (to = {}));
ze.Backward + "", ze.Forward + "", ze.Backward + "", ze.Forward + "";
var Ci;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(Ci || (Ci = {}));
var Ei;
(function(e) {
  e.Optimized = "optimized";
})(Ei || (Ei = {}));
Ci.WhileDragging, Ei.Optimized;
({
  ...NM
});
var ro;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(ro || (ro = {}));
$.Down, $.Right, $.Up, $.Left;
const Xa = "hover:bg-gradient-to-r hover:from-white hover:to-grey-50 dark:hover:from-black dark:hover:to-grey-950";
so(function({ id: t, action: r, hideActions: i, className: n, style: o, testId: a, separator: s, bgOnHover: l = !0, onClick: d, children: u }, g) {
  const m = (I) => {
    d == null || d(I);
  };
  s = s === void 0 ? !0 : s;
  const p = k(
    "group/table-row",
    l && Xa,
    d && "cursor-pointer",
    s ? "border-b border-grey-100 last-of-type:border-b-transparent hover:border-grey-200 dark:border-grey-950 dark:hover:border-grey-900" : "border-y border-none first-of-type:hover:border-t-transparent",
    n
  );
  return /* @__PURE__ */ h.jsxs("tr", { ref: g, className: p, "data-testid": a, id: t, style: o, onClick: m, children: [
    u,
    r && /* @__PURE__ */ h.jsx("td", { className: "w-[1%] whitespace-nowrap p-0 hover:cursor-pointer", children: /* @__PURE__ */ h.jsx("div", { className: `visible flex items-center justify-end py-3 pr-6 ${i ? "group-hover/table-row:visible md:invisible" : ""}`, children: r }) })
  ] });
});
const SM = ({
  t: e,
  children: t,
  props: r
}) => {
  var i, n;
  let o = "text-grey-500";
  switch (r == null ? void 0 : r.type) {
    case "info":
      r.icon = r.icon || "info-fill", o = "text-grey-500";
      break;
    case "success":
      r.icon = r.icon || "success-fill", o = "text-green";
      break;
    case "error":
      r.icon = r.icon || "error-fill", o = "text-red";
      break;
  }
  const a = k(
    "relative z-[90] mb-[14px] ml-[6px] flex min-w-[272px] items-start justify-between gap-3 rounded-lg bg-white p-4 text-sm text-black shadow-md-heavy dark:bg-grey-925 dark:text-white",
    ((i = r == null ? void 0 : r.options) == null ? void 0 : i.position) === "top-center" ? "max-w-[520px]" : "max-w-[320px]",
    e.visible ? ((n = r == null ? void 0 : r.options) == null ? void 0 : n.position) === "top-center" ? "animate-toaster-top-in" : "animate-toaster-in" : "animate-toaster-out"
  );
  return /* @__PURE__ */ h.jsxs("div", { className: a, "data-testid": `toast-${r == null ? void 0 : r.type}`, children: [
    /* @__PURE__ */ h.jsxs("div", { className: "mr-7 flex items-start gap-[10px]", children: [
      (r == null ? void 0 : r.icon) && (typeof r.icon == "string" ? /* @__PURE__ */ h.jsx("div", { className: "mt-px", children: /* @__PURE__ */ h.jsx(dr, { className: "grow", colorClass: o, name: r.icon, size: "sm" }) }) : r.icon),
      t
    ] }),
    /* @__PURE__ */ h.jsx("button", { className: "absolute right-5 top-5 -mr-1.5 -mt-1.5 cursor-pointer rounded-full p-2 text-grey-700 hover:text-black dark:hover:text-white", type: "button", onClick: () => {
      Q.dismiss(e.id);
    }, children: /* @__PURE__ */ h.jsx("div", { children: /* @__PURE__ */ h.jsx(dr, { colorClass: "stroke-2", name: "close", size: "2xs" }) }) })
  ] });
}, ir = ({
  title: e,
  message: t,
  type: r = "neutral",
  icon: i = "",
  options: n = {
    position: "bottom-left",
    duration: 5e3
  }
}) => {
  n.position || (n.position = "bottom-left"), r === "pageError" && (r = "error", n.position = "top-center", n.duration = 1 / 0), Q.custom(
    (o) => /* @__PURE__ */ h.jsx(SM, { props: {
      type: r,
      icon: i,
      options: n
    }, t: o, children: /* @__PURE__ */ h.jsxs("div", { children: [
      e && /* @__PURE__ */ h.jsx("span", { className: "mt-px block text-md font-semibold leading-tighter tracking-[0.1px]", children: e }),
      t && /* @__PURE__ */ h.jsx("div", { className: `text-grey-900 dark:text-grey-300 ${e ? "mt-1" : ""}`, children: t })
    ] }) }),
    {
      ...n
    }
  );
}, AM = ({
  left: e,
  center: t,
  right: r,
  sticky: i = !0,
  containerClassName: n,
  children: o
}) => {
  const a = k(
    "z-50 h-22 min-h-[92px] p-8 px-6 tablet:px-12",
    !o && "flex items-center justify-between gap-3",
    i && "sticky top-0",
    n
  );
  if (!o) {
    if (e) {
      const s = k(
        "flex flex-auto items-center",
        r && t && "basis-1/3",
        !r && t && "basis-1/2"
      );
      e = /* @__PURE__ */ h.jsx("div", { className: s, children: e });
    }
    if (t) {
      const s = k(
        "flex flex-auto items-center justify-center",
        e && r && "basis-1/3",
        (e && !r || !e && r) && "basis-1/2"
      );
      t = /* @__PURE__ */ h.jsx("div", { className: s, children: t });
    }
    if (r) {
      const s = k(
        "flex flex-auto items-center justify-end",
        e && t && "basis-1/3",
        !e && t && "basis-1/2"
      );
      r = /* @__PURE__ */ h.jsx("div", { className: s, children: r });
    }
  }
  return /* @__PURE__ */ h.jsx("div", { className: a, children: o || /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    e,
    t,
    r
  ] }) });
}, LM = () => /* @__PURE__ */ h.jsx(pe, { icon: "hamburger", iconColorClass: "text-black dark:text-white", size: "sm", link: !0, onClick: () => {
  alert("Clicked on hamburger");
} }), zM = () => /* @__PURE__ */ h.jsx(pe, { icon: "magnifying-glass", iconColorClass: "dark:text-white text-black", size: "sm", link: !0, onClick: () => {
} }), $a = ({
  fullBleedPage: e = !0,
  mainContainerClassName: t,
  mainClassName: r,
  pageToolbarClassName: i,
  fullBleedToolbar: n = !0,
  showAppMenu: o = !1,
  showGlobalActions: a = !1,
  customGlobalActions: s,
  breadCrumbs: l,
  pageTabs: d,
  selectedTab: u,
  onTabChange: g,
  children: m
}) => {
  const p = (M) => {
    const f = M.currentTarget.id;
    g(f);
  };
  d != null && d.length && !u && (u = d[0].id);
  const I = (o || l || (d == null ? void 0 : d.length)) && /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-10", children: [
    o && /* @__PURE__ */ h.jsx(LM, {}),
    l,
    (d == null ? void 0 : d.length) && /* @__PURE__ */ h.jsx(
      Va,
      {
        border: !1,
        buttonBorder: !1,
        handleTabChange: p,
        selectedTab: u,
        tabs: d,
        width: "normal"
      }
    )
  ] });
  r = k(
    "flex w-full flex-auto flex-col",
    r
  );
  const v = ((s == null ? void 0 : s.length) || a) && /* @__PURE__ */ h.jsxs("div", { className: "sticky flex items-center gap-7", children: [
    s == null ? void 0 : s.map((M) => /* @__PURE__ */ h.jsx(pe, { icon: M.iconName, iconColorClass: "text-black dark:text-white", size: "sm", link: !0, onClick: M.onClick })),
    a && /* @__PURE__ */ h.jsx(zM, {})
  ] });
  return t = k(
    "flex h-[100vh] w-full flex-col overflow-y-auto overflow-x-hidden",
    !e && "mx-auto max-w-7xl",
    t
  ), i = k(
    "sticky top-0 z-50 flex h-22 min-h-[92px] w-full items-center justify-between gap-5 bg-white p-8 dark:bg-black",
    !n && "mx-auto max-w-7xl",
    i
  ), /* @__PURE__ */ h.jsxs("div", { className: t, children: [
    (I || v) && /* @__PURE__ */ h.jsx(
      AM,
      {
        containerClassName: i,
        left: I,
        right: v
      }
    ),
    /* @__PURE__ */ h.jsx("main", { className: r, children: m })
  ] });
}, _M = ({
  columns: e,
  rows: t,
  horizontalScrolling: r = !1,
  absolute: i = !1,
  stickyHeader: n = !1,
  hideHeader: o = !1,
  headerBorder: a = !0,
  border: s = !0,
  footer: l,
  footerBorder: d = !0,
  stickyFooter: u = !1,
  singlePageTable: g = !1,
  pageHasSidebar: m = !0,
  containerClassName: p,
  tableContainerClassName: I,
  tableClassName: v,
  thClassName: M,
  tdClassName: f,
  cellClassName: b,
  trClassName: x,
  footerClassName: S
}) => {
  let z = 0, D = 0;
  p = k(
    "flex max-h-full w-full flex-col",
    n || u || i ? "absolute inset-0" : "relative",
    p
  ), I = k(
    "flex-auto overflow-x-auto",
    !r && "w-full max-w-full",
    g && (n || u || i) && `px-[4vw] tablet:px-12 ${m ? "min-[1640px]:px-[calc((100%-1320px)/2+48px)]" : "xl:px-[calc((100%-1320px)/2+48px)]"}`,
    I
  ), v = k(
    "h-full max-h-full min-w-full flex-auto table-fixed",
    v
  ), M = k(
    "last-child:pr-5 bg-white py-3 text-left dark:bg-black [&:not(:first-child)]:pl-5",
    M
  ), f = k(
    "w-full border-b group-hover:border-grey-200 dark:group-hover:border-grey-900",
    s ? "border-grey-200 dark:border-grey-900" : "border-transparent",
    f
  ), b = k(
    "flex h-full py-4",
    b
  ), x = k(
    "group",
    Xa,
    x
  ), S = k(
    "bg-white dark:bg-black",
    g && u && `mx-[4vw] tablet:mx-12 ${m ? "min-[1640px]:mx-[calc((100%-1320px)/2+48px)]" : "xl:mx-[calc((100%-1320px)/2+48px)]"}`,
    l && "py-4",
    u && "sticky inset-x-0 bottom-0",
    d && "border-t border-grey-200 dark:border-grey-900",
    S
  );
  const N = /* @__PURE__ */ h.jsx("footer", { className: S, children: l });
  return (
    // Outer container for testing. Should not be part of the table component
    // <div className='h-[40vh]'>
    /* @__PURE__ */ h.jsxs("div", { className: p, children: [
      /* @__PURE__ */ h.jsxs("div", { className: I, children: [
        /* @__PURE__ */ h.jsxs("table", { className: v, children: [
          !o && /* @__PURE__ */ h.jsxs("thead", { className: n ? "sticky top-0" : "", children: [
            /* @__PURE__ */ h.jsx("tr", { children: e.map((y) => {
              z = z + 1;
              const L = y.maxWidth || "auto", Z = y.minWidth || "auto", A = {
                maxWidth: L,
                minWidth: Z,
                width: L
              };
              return /* @__PURE__ */ h.jsx("th", { className: M, style: A, children: /* @__PURE__ */ h.jsx(xe, { className: "truncate", level: 6, children: y.title }) }, "head-" + z);
            }) }),
            a && /* @__PURE__ */ h.jsx("tr", { children: /* @__PURE__ */ h.jsx("th", { className: "h-px bg-grey-200 p-0 dark:bg-grey-900", colSpan: e.length }) })
          ] }),
          /* @__PURE__ */ h.jsx("tbody", { children: t.map((y) => {
            let L = 0;
            return D = D + 1, /* @__PURE__ */ h.jsx("tr", { className: x, children: y.cells.map((Z) => {
              const A = e[L] || { title: "" };
              let re = f;
              re = k(
                re,
                // currentColumn.noWrap ? 'truncate' : '',
                A.align === "center" && "text-center",
                A.align === "right" && "text-right"
              ), D === t.length && d && (re = k(
                re,
                "border-none"
              ));
              const Ae = A !== void 0 && A.maxWidth || "auto", Qt = A !== void 0 && A.minWidth || "auto", Bt = {
                maxWidth: Ae,
                minWidth: Qt,
                width: Ae
              };
              let ie = b;
              ie = k(
                ie,
                L !== 0 && "pl-5",
                L === e.length - 1 && "pr-5",
                A.noWrap ? "truncate" : "",
                A.valign === "middle" || !A.valign && "items-center",
                A.valign === "top" && "items-start",
                A.valign === "bottom" && "items-end"
              ), y.onClick && !A.disableRowClick && (ie = k(
                ie,
                "cursor-pointer"
              )), A.hidden && (ie = k(
                ie,
                "opacity-0 group-hover:opacity-100"
              ));
              const Jt = /* @__PURE__ */ h.jsx("td", { className: re, style: Bt, children: /* @__PURE__ */ h.jsx("div", { className: ie, onClick: y.onClick && !A.disableRowClick ? y.onClick : () => {
              }, children: Z }) }, L);
              return L = L + 1, Jt;
            }) }, "row-" + D);
          }) })
        ] }),
        !u && N
      ] }),
      u && N
    ] })
  );
}, qa = ({
  type: e,
  title: t,
  firstOnPage: r = !0,
  headerContent: i,
  stickyHeader: n = !0,
  tabs: o,
  selectedTab: a,
  onTabChange: s,
  mainContainerClassName: l,
  toolbarWrapperClassName: d,
  toolbarContainerClassName: u,
  toolbarLeftClassName: g,
  primaryAction: m,
  actions: p,
  actionsClassName: I,
  actionsHidden: v,
  toolbarBorder: M = !0,
  contentWrapperClassName: f,
  contentFullBleed: b = !1,
  children: x
}) => {
  let S = /* @__PURE__ */ h.jsx(h.Fragment, {}), z = /* @__PURE__ */ h.jsx(h.Fragment, {});
  const D = (A) => {
    const re = A.currentTarget.id;
    s(re);
  };
  let N, y = !1;
  if (o != null && o.length && !x)
    a || (a = o[0].id), z = /* @__PURE__ */ h.jsx(h.Fragment, { children: o.map((A) => /* @__PURE__ */ h.jsx(h.Fragment, { children: A.contents && /* @__PURE__ */ h.jsx("div", { className: `${a === A.id ? "block" : "hidden"}`, role: "tabpanel", children: /* @__PURE__ */ h.jsx("div", { children: A.contents }) }, A.id) })) });
  else if (U.isValidElement(x) && x.type === _M) {
    N = !0;
    const A = x;
    (A.props.stickyHeader || A.props.stickyFooter) && (y = !0, x = N ? U.cloneElement(A, {
      ...A.props,
      singlePageTable: !0
    }) : x), z = x;
  } else
    z = x;
  d = k(
    "z-50",
    e === "page" && "mx-auto w-full max-w-7xl bg-white px-[4vw] dark:bg-black tablet:px-12",
    e === "page" && n && (r ? "sticky top-0 pt-8" : "sticky top-22 pt-[3vmin]"),
    u
  ), u = k(
    "flex justify-between gap-5",
    e === "page" && (p != null && p.length) ? "flex-col md:flex-row md:items-end" : "items-end",
    r && e === "page" ? "pb-3 tablet:pb-8" : o != null && o.length ? "" : "pb-2",
    M && "border-b border-grey-200 dark:border-grey-900",
    u
  ), g = k(
    "flex flex-col",
    g
  ), I = k(
    "flex items-center justify-between gap-3 transition-all tablet:justify-start tablet:gap-5",
    v && "opacity-0 group-hover/view-container:opacity-100",
    o != null && o.length || e === "page" ? "pb-1" : "",
    I
  );
  const L = /* @__PURE__ */ h.jsx(h.Fragment, { children: ((m == null ? void 0 : m.title) || (m == null ? void 0 : m.icon)) && /* @__PURE__ */ h.jsx(pe, { className: m.className, color: m.color || "black", icon: m.icon, label: m.title, size: e === "page" ? "md" : "sm", onClick: m.onClick }) }), Z = k(
    (o == null ? void 0 : o.length) && "pb-3",
    e === "page" && "-mt-2"
  );
  return S = /* @__PURE__ */ h.jsx("div", { className: d, children: /* @__PURE__ */ h.jsxs("div", { className: u, children: [
    /* @__PURE__ */ h.jsxs("div", { className: g, children: [
      i,
      t && /* @__PURE__ */ h.jsx(xe, { className: Z, level: e === "page" ? 1 : 4, children: t }),
      (o == null ? void 0 : o.length) && /* @__PURE__ */ h.jsx(
        Va,
        {
          border: !1,
          buttonBorder: !0,
          handleTabChange: D,
          selectedTab: a,
          tabs: o,
          width: "normal"
        }
      )
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: I, children: [
      p,
      L
    ] })
  ] }) }), l = k(
    "group/view-container flex flex-auto flex-col",
    l
  ), y && (b = !0), f = k(
    "relative mx-auto w-full flex-auto",
    !b && e === "page" && "max-w-7xl px-[4vw] tablet:px-12",
    f,
    !t && !p && "pt-[3vmin]"
  ), /* @__PURE__ */ h.jsxs("section", { className: l, children: [
    (t || p || i || o) && S,
    /* @__PURE__ */ h.jsx("div", { className: f, children: z })
  ] });
}, TM = ({ heading: e, value: t, hint: r, hideEmptyValue: i, ...n }) => !t && i ? /* @__PURE__ */ h.jsx(h.Fragment, {}) : /* @__PURE__ */ h.jsxs("div", { className: "flex flex-col", ...n, children: [
  e && /* @__PURE__ */ h.jsx(xe, { grey: !1, level: 6, children: e }),
  /* @__PURE__ */ h.jsx("div", { className: `flex items-center ${e && "mt-1"}`, children: t }),
  r && /* @__PURE__ */ h.jsx("p", { className: "mt-1 text-xs", children: r })
] }), CM = ({ darkMode: e, fetchKoenigLexical: t, className: r, children: i, ...n }) => {
  const o = k(
    "admin-x-base",
    e && "dark",
    r
  );
  return /* @__PURE__ */ h.jsx("div", { className: o, ...n, children: /* @__PURE__ */ h.jsx(kp, { fetchKoenigLexical: t, children: i }) });
}, Ka = window.adminXQueryClient || new Zl({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: !1,
      staleTime: 5 * (60 * 1e3),
      // 5 mins
      cacheTime: 10 * (60 * 1e3),
      // 10 mins
      // We have custom retry logic for specific errors in fetchApi()
      retry: !1,
      networkMode: "always"
    }
  }
});
window.adminXQueryClient || (window.adminXQueryClient = Ka);
const es = le({
  ghostVersion: "",
  externalNavigate: () => {
  },
  unsplashConfig: {
    Authorization: "",
    "Accept-Version": "",
    "Content-Type": "",
    "App-Pragma": "",
    "X-Unsplash-Cache": !0
  },
  sentryDSN: null,
  onUpdate: () => {
  },
  onInvalidate: () => {
  },
  onDelete: () => {
  }
});
function EM({ children: e, ...t }) {
  return /* @__PURE__ */ h.jsx(an, { children: /* @__PURE__ */ h.jsx(ql, { client: Ka, children: /* @__PURE__ */ h.jsx(es.Provider, { value: t, children: e }) }) });
}
const Yt = () => B(es);
class te extends Error {
  constructor(t, r, i, n) {
    !i && t && t.url.includes("/ghost/api/admin/") && (i = `Something went wrong while loading ${t.url.replace(/.+\/ghost\/api\/admin\//, "").replace(/\W.*/, "").replace("_", " ")}, please try again.`), super(i || "Something went wrong, please try again.", n), this.response = t, this.data = r;
  }
}
class Ye extends te {
  constructor(t, r, i, n) {
    super(t, r, i, n), this.data = r;
  }
}
class UM extends Ye {
  constructor(t, r, i) {
    super(t, r, "API server is running a newer version of Ghost, please upgrade.", i);
  }
}
class Ui extends te {
  constructor(t) {
    super(void 0, void 0, "Something went wrong, please try again.", t);
  }
}
class ZM extends te {
  constructor(t) {
    super(void 0, void 0, "Request timed out, please try again.", t);
  }
}
class WM extends te {
  constructor(t, r, i) {
    super(t, r, "Request is larger than the maximum file size the server allows", i);
  }
}
class OM extends te {
  constructor(t, r, i) {
    super(t, r, "Request contains an unknown or unsupported file type.", i);
  }
}
class ts extends te {
  constructor(t, r, i) {
    super(t, r, "Ghost is currently undergoing maintenance, please wait a moment then retry.", i);
  }
}
class PM extends Ye {
  constructor(t, r, i) {
    super(t, r, "Theme is not compatible or contains errors.", i);
  }
}
class RM extends Ye {
  constructor(t, r, i) {
    super(t, r, "A hosting plan limit was reached or exceeded.", i);
  }
}
class HM extends Ye {
  constructor(t, r, i) {
    super(t, r, "Please verify your email settings", i);
  }
}
class rs extends Ye {
  constructor(t, r, i) {
    super(t, r, r.errors[0].message, i);
  }
}
const is = () => {
  const { sentryDSN: e } = Yt();
  return W((r, { withToast: i = !0 } = {}) => {
    var n, o;
    console.error(r), e && en((a) => {
      r instanceof te && r.response && (a.setTag("api_url", r.response.url), a.setTag("api_response_status", r.response.status)), Ki(r);
    }), i && (jp.remove(), r instanceof te && ((n = r.response) == null ? void 0 : n.status) === 418 || (r instanceof rs && ((o = r.data) != null && o.errors[0]) ? ir({
      message: r.data.errors[0].context || r.data.errors[0].message,
      type: "error"
    }) : r instanceof te ? ir({
      message: r.message,
      type: "error"
    }) : ir({
      message: "Something went wrong, please try again.",
      type: "error"
    })));
  }, [e]);
};
function GM() {
  const e = window.location.pathname, t = e.substr(0, e.search("/ghost/")), r = `${t}/ghost/`, i = `${t}/ghost/assets/`, n = `${t}/ghost/api/admin`, o = `${t}/activitypub`;
  return { subdir: t, adminRoot: r, assetRoot: i, apiRoot: n, activityPubRoot: o };
}
const YM = async (e) => {
  var t, r, i, n, o, a, s, l, d, u, g, m;
  if (e.status === 0)
    throw new Ui();
  if (e.status === 503)
    throw new ts(e, await e.text());
  if (e.status === 415)
    throw new OM(e, await e.text());
  if (e.status === 413)
    throw new WM(e, await e.text());
  if (e.ok)
    return e.status === 204 ? void 0 : (m = e.headers.get("content-type")) != null && m.includes("text/csv") ? await e.text() : await e.json();
  {
    if (!((t = e.headers.get("content-type")) != null && t.includes("json")))
      throw new te(e, await e.text());
    const p = await e.json();
    throw ((i = (r = p.errors) == null ? void 0 : r[0]) == null ? void 0 : i.type) === "VersionMismatchError" ? new UM(e, p) : ((o = (n = p.errors) == null ? void 0 : n[0]) == null ? void 0 : o.type) === "ValidationError" ? new rs(e, p) : ((s = (a = p.errors) == null ? void 0 : a[0]) == null ? void 0 : s.type) === "ThemeValidationError" ? new PM(e, p) : ((d = (l = p.errors) == null ? void 0 : l[0]) == null ? void 0 : d.type) === "HostLimitError" ? new RM(e, p) : ((g = (u = p.errors) == null ? void 0 : u[0]) == null ? void 0 : g.type) === "EmailError" ? new HM(e, p) : new Ye(e, p);
  }
}, dn = () => {
  const { ghostVersion: e, sentryDSN: t } = Yt();
  return async (r, { headers: i = {}, retry: n, ...o } = {}) => {
    const a = {
      "app-pragma": "no-cache",
      "x-ghost-version": e
    };
    typeof o.body == "string" && (a["content-type"] = "application/json");
    const s = new AbortController(), { timeout: l } = o;
    l && setTimeout(() => s.abort(), l);
    let d = 0;
    const u = n !== !1;
    let g = 0;
    const m = Date.now(), p = 15e3, I = [500, 1e3], v = [Ui, ts, TypeError], M = (f, b) => {
      const x = {
        errorName: f == null ? void 0 : f.name,
        attempts: d,
        totalSeconds: g / 1e3,
        endpoint: r.toString()
      };
      return r.toString().includes("/ghost/api/") && (x.server = b == null ? void 0 : b.headers.get("server")), x;
    };
    for (; d === 0 || u; )
      try {
        const f = await fetch(r, {
          headers: {
            ...a,
            ...i
          },
          method: "GET",
          mode: "cors",
          credentials: "include",
          signal: s.signal,
          ...o
        });
        return YM(f);
      } catch (f) {
        if (g = Date.now() - m, u && v.some((x) => f instanceof x) && g <= p) {
          await new Promise((x) => {
            setTimeout(x, I[d] || I[I.length - 1]);
          }), d += 1;
          continue;
        }
        if (d !== 0 && t && R2("Request failed after multiple attempts", { extra: M() }), f && typeof f == "object" && "name" in f && f.name === "AbortError")
          throw new ZM();
        let b = f;
        throw f instanceof te || (b = new Ui({ cause: f })), b;
      }
  };
}, { apiRoot: QM, activityPubRoot: BM } = GM(), un = (e, t = {}, r = !1) => {
  const i = r ? BM : QM, n = new URL(`${i}${e}`, window.location.origin);
  return n.search = new URLSearchParams(t).toString(), n.toString();
}, JM = "UsersResponseType", VM = () => {
  const e = un("/users/me/", { include: "roles" }), t = dn(), r = is(), i = zo({
    queryKey: [JM, e],
    queryFn: () => t(e)
  }), n = Xe(() => {
    var o, a;
    return (a = (o = i.data) == null ? void 0 : o.users) == null ? void 0 : a[0];
  }, [i.data]);
  return G(() => {
    i.error && r(i.error);
  }, [r, i.error]), {
    ...i,
    data: n
  };
}, FM = (e) => {
  const { data: t } = VM(), r = t == null ? void 0 : t.roles.map((i) => i.name);
  return r ? e.some((i) => r.includes(i)) : !1;
}, ns = (e) => ({ searchParams: t, ...r } = {}) => {
  const i = un(e.path, t || e.defaultSearchParams, e == null ? void 0 : e.useActivityPub), n = dn(), o = is(), a = zo({
    enabled: e.permissions ? FM(e.permissions) : !0,
    queryKey: [e.dataType, i],
    queryFn: () => n(i, { ...e }),
    ...r
  }), s = Xe(
    () => a.data && e.returnData ? e.returnData(a.data) : a.data,
    [a.data]
  );
  return G(() => {
    a.error && r.defaultErrorHandler !== !1 && o(a.error);
  }, [o, a.error, r.defaultErrorHandler]), {
    ...a,
    data: s
  };
}, gn = (e) => (t, { searchParams: r, ...i } = {}) => ns({ ...e, path: e.path(t) })({ searchParams: r || e.defaultSearchParams, ...i }), XM = ({ fetchApi: e, path: t, payload: r, searchParams: i, options: n }) => {
  const { defaultSearchParams: o, body: a, ...s } = n, l = un(t, i || o, n == null ? void 0 : n.useActivityPub), d = r && (a == null ? void 0 : a(r));
  let u;
  return d instanceof FormData ? u = d : d && (u = JSON.stringify(d)), e(l, {
    body: u,
    ...s
  });
}, os = ({ path: e, searchParams: t, defaultSearchParams: r, updateQueries: i, invalidateQueries: n, ...o }) => () => {
  const a = dn(), s = Pi(), { onUpdate: l, onInvalidate: d, onDelete: u } = Yt(), g = W((m, p) => {
    if (n && (s.invalidateQueries([n.dataType]), d(n.dataType)), i) {
      if (s.setQueriesData([i.dataType], (I) => i.update(m, I, p)), i.emberUpdateType === "createOrUpdate")
        l(i.dataType, m);
      else if (i.emberUpdateType === "delete") {
        if (typeof p != "string")
          throw new Error("Expected delete mutation to have a string (ID) payload. Either change the payload or update the createMutation hook");
        u(i.dataType, p);
      }
    }
  }, [d, l, u, s]);
  return ud({
    mutationFn: (m) => XM({ fetchApi: a, path: e(m), payload: m, searchParams: (t == null ? void 0 : t(m)) || r, options: o }),
    onSuccess: g
  });
}, h5 = os({
  method: "POST",
  useActivityPub: !0,
  path: (e) => `/follow/${e.username}`
}), p5 = os({
  method: "POST",
  useActivityPub: !0,
  path: (e) => `/unfollow/${e.username}`
}), $M = gn({
  dataType: "InboxResponseData",
  useActivityPub: !0,
  path: (e) => `/inbox/${e}`
}), qM = gn({
  dataType: "FollowingResponseData",
  useActivityPub: !0,
  path: (e) => `/following/${e}`
}), KM = gn({
  dataType: "FollowingResponseData",
  useActivityPub: !0,
  path: (e) => `/followers/${e}`
}), e5 = "SiteResponseType", t5 = ns({
  dataType: e5,
  path: "/site/"
}), as = le({
  route: "",
  updateRoute: () => {
  },
  loadingModal: !1,
  eventTarget: new EventTarget()
});
function r5(e, t) {
  if (!t)
    return null;
  const r = new RegExp(`/${e}/(.*)`), i = t == null ? void 0 : t.match(r);
  return i ? i[1] : null;
}
const i5 = (e, t, r, i) => {
  let n = window.location.hash;
  n = n.substring(1);
  const o = `${window.location.protocol}//${window.location.hostname}`, a = new URL(n, o), s = r5(e, a.pathname), l = a.searchParams;
  if (s && i && r) {
    const [, d] = Object.entries(i).find(([m]) => nr(t || "", m)) || [], [u, g] = Object.entries(i).find(([m]) => nr(s, m)) || [];
    return {
      pathName: s,
      changingModal: g && g !== d,
      modal: u && g ? (
        // we should consider adding '&& modalName !== currentModalName' here, but this breaks tests
        r().then(({ default: m }) => {
          Ho.show(m[g], { pathName: s, params: nr(s, u), searchParams: l });
        })
      ) : void 0
    };
  }
  return { pathName: "" };
}, nr = (e, t) => {
  const r = new RegExp("^" + t.replace(/:(\w+)/g, "(?<$1>[^/]+)") + "/?$"), i = e.match(r);
  if (i)
    return i.groups || {};
}, n5 = ({ basePath: e, modals: t, children: r }) => {
  const { externalNavigate: i } = Yt(), [n, o] = Y(void 0), [a, s] = Y(!1), [l] = Y(new EventTarget()), d = W((u) => {
    const g = typeof u == "string" ? { route: u } : u;
    if (g.isExternal) {
      i(g);
      return;
    }
    const m = g.route.replace(/^\//, "");
    m === n || (m ? window.location.hash = `/${e}/${m}` : window.location.hash = `/${e}`), l.dispatchEvent(new CustomEvent("routeChange", { detail: { newPath: m, oldPath: n } }));
  }, [e, l, i, n]);
  return G(() => {
    setTimeout(() => {
      t == null || t.load();
    }, 1e3);
  }, []), G(() => {
    const u = () => {
      o((g) => {
        const { pathName: m, modal: p, changingModal: I } = i5(e, g, t == null ? void 0 : t.load, t == null ? void 0 : t.paths);
        return p && I && (s(!0), p.then(() => s(!1))), m;
      });
    };
    return u(), window.addEventListener("hashchange", u), () => {
      window.removeEventListener("hashchange", u);
    };
  }, []), n === void 0 ? null : /* @__PURE__ */ h.jsx(
    as.Provider,
    {
      value: {
        route: n,
        updateRoute: d,
        loadingModal: a,
        eventTarget: l
      },
      children: r
    }
  );
};
function ss() {
  return B(as);
}
const o5 = () => {
  const { updateRoute: e } = ss(), { data: { orderedItems: t = [] } = {} } = $M("index"), { data: { totalItems: r = 0 } = {} } = qM("index"), { data: { totalItems: i = 0 } = {} } = KM("index"), [n, o] = Y(null), [, a] = Y(null), s = (m, p) => {
    o(m), a(p);
  }, l = () => {
    o(null);
  }, [d, u] = Y("inbox"), g = [
    {
      id: "inbox",
      title: "Inbox",
      contents: /* @__PURE__ */ h.jsxs("div", { className: "grid grid-cols-6 items-start gap-8", children: [
        /* @__PURE__ */ h.jsx("ul", { className: "order-2 col-span-6 flex flex-col lg:order-1 lg:col-span-4", children: t && t.slice().reverse().map((m) => m.type === "Create" && m.object.type === "Article" && /* @__PURE__ */ h.jsx("li", { "data-test-view-article": !0, onClick: () => s(m.object, m.actor), children: /* @__PURE__ */ h.jsx(io, { actor: m.actor, object: m.object }) }, m.id)) }),
        /* @__PURE__ */ h.jsx(or, { followersCount: i, followingCount: r, updateRoute: e })
      ] })
    },
    {
      id: "activity",
      title: "Activity",
      contents: /* @__PURE__ */ h.jsxs("div", { className: "grid grid-cols-6 items-start gap-8", children: [
        /* @__PURE__ */ h.jsx(bM, { className: "col-span-4", children: t && t.slice().reverse().map((m) => m.type === "Like" && /* @__PURE__ */ h.jsx(yM, { avatar: /* @__PURE__ */ h.jsx(MM, { image: m.actor.icon, size: "sm" }), id: "list-item", title: /* @__PURE__ */ h.jsxs("div", { children: [
          /* @__PURE__ */ h.jsx("span", { className: "font-medium", children: m.actor.name }),
          /* @__PURE__ */ h.jsx("span", { className: "text-grey-800", children: " liked your post " }),
          /* @__PURE__ */ h.jsx("span", { className: "font-medium", children: m.object.name })
        ] }) })) }),
        /* @__PURE__ */ h.jsx(or, { followersCount: i, followingCount: r, updateRoute: e })
      ] })
    },
    {
      id: "likes",
      title: "Likes",
      contents: /* @__PURE__ */ h.jsxs("div", { className: "grid grid-cols-6 items-start gap-8", children: [
        /* @__PURE__ */ h.jsx("ul", { className: "order-2 col-span-6 flex flex-col lg:order-1 lg:col-span-4", children: t && t.slice().reverse().map((m) => m.type === "Create" && m.object.type === "Article" && /* @__PURE__ */ h.jsx("li", { "data-test-view-article": !0, onClick: () => s(m.object, m.actor), children: /* @__PURE__ */ h.jsx(io, { actor: m.actor, object: m.object }) }, m.id)) }),
        /* @__PURE__ */ h.jsx(or, { followersCount: i, followingCount: r, updateRoute: e })
      ] })
    }
  ];
  return /* @__PURE__ */ h.jsx($a, { children: n ? /* @__PURE__ */ h.jsx(s5, { object: n, onBackToList: l }) : /* @__PURE__ */ h.jsx(
    qa,
    {
      firstOnPage: !0,
      primaryAction: {
        title: "Follow",
        onClick: () => {
          e("follow-site");
        },
        icon: "add"
      },
      selectedTab: d,
      stickyHeader: !0,
      tabs: g,
      toolbarBorder: !1,
      type: "page",
      onTabChange: u
    }
  ) });
}, or = ({ followingCount: e, followersCount: t, updateRoute: r }) => /* @__PURE__ */ h.jsxs("div", { className: "order-1 col-span-6 rounded-xl bg-grey-50 p-6 lg:order-2 lg:col-span-2", id: "ap-sidebar", children: [
  /* @__PURE__ */ h.jsx("div", { className: "mb-4 border-b border-b-grey-200 pb-4", children: /* @__PURE__ */ h.jsx(TM, { heading: "Your username", value: "@index@localplaceholder.com" }, "your-username") }),
  /* @__PURE__ */ h.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "group/stat flex cursor-pointer flex-col gap-1", onClick: () => r("/view-following"), children: [
      /* @__PURE__ */ h.jsx("span", { className: "text-3xl font-bold leading-none", "data-test-following-count": !0, children: e }),
      /* @__PURE__ */ h.jsxs("span", { className: "text-base leading-none text-grey-800 group-hover/stat:text-grey-900", "data-test-following-modal": !0, children: [
        "Following",
        /* @__PURE__ */ h.jsx("span", { className: "ml-1 opacity-0 transition-opacity group-hover/stat:opacity-100", children: "→" })
      ] })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "group/stat flex cursor-pointer flex-col gap-1", onClick: () => r("/view-followers"), children: [
      /* @__PURE__ */ h.jsx("span", { className: "text-3xl font-bold leading-none", "data-test-following-count": !0, children: t }),
      /* @__PURE__ */ h.jsxs("span", { className: "text-base leading-none text-grey-800 group-hover/stat:text-grey-900", "data-test-followers-modal": !0, children: [
        "Followers",
        /* @__PURE__ */ h.jsx("span", { className: "ml-1 opacity-0 transition-opacity group-hover/stat:opacity-100", children: "→" })
      ] })
    ] })
  ] })
] }), a5 = ({ heading: e, image: t, html: r }) => {
  var s;
  const n = (s = t5().data) == null ? void 0 : s.site, a = `
  <html>
  <head>
      ${vl(n == null ? void 0 : n.url.replace(/\/$/, ""))}
  </head>
  <body>
    <header class="gh-article-header gh-canvas">
        <h1 class="gh-article-title is-title" data-test-article-heading>${e}</h1>
${t && `<figure class="gh-article-image">
            <img src="${t}" alt="${e}" />
        </figure>`}
    </header>
    <div class="gh-content gh-canvas is-body">
      ${r}
    </div>
  </body>
  </html>
`;
  return /* @__PURE__ */ h.jsx(
    "iframe",
    {
      className: "h-[calc(100vh_-_3vmin_-_4.8rem_-_2px)]",
      height: "100%",
      id: "gh-ap-article-iframe",
      srcDoc: a,
      title: "Embedded Content",
      width: "100%"
    }
  );
}, io = ({ actor: e, object: t }) => {
  const n = new DOMParser().parseFromString(t.content || "", "text/html").body.textContent, o = new Date((t == null ? void 0 : t.published) ?? /* @__PURE__ */ new Date()).toLocaleDateString("default", { year: "numeric", month: "short", day: "2-digit" }) + ", " + new Date((t == null ? void 0 : t.published) ?? /* @__PURE__ */ new Date()).toLocaleTimeString("default", { hour: "2-digit", minute: "2-digit" }), [a, s] = Y(!1), [l, d] = Y(!1), u = (g) => {
    g == null || g.stopPropagation(), s(!0), d(!l), setTimeout(() => s(!1), 300);
  };
  return /* @__PURE__ */ h.jsx(h.Fragment, { children: t && /* @__PURE__ */ h.jsxs("div", { className: "border-1 group/article relative z-10 flex cursor-pointer flex-col items-start justify-between border-b border-b-grey-200 py-5", "data-test-activity": !0, children: [
    /* @__PURE__ */ h.jsxs("div", { className: "relative z-10 mb-3 grid w-full grid-cols-[20px_auto_1fr_auto] items-center gap-2 text-base", children: [
      /* @__PURE__ */ h.jsx("img", { className: "w-5", src: e.icon }),
      /* @__PURE__ */ h.jsx("span", { className: "truncate font-semibold", children: e.name }),
      /* @__PURE__ */ h.jsx("span", { className: "truncate text-grey-800", children: xl(e) }),
      /* @__PURE__ */ h.jsx("span", { className: "ml-auto text-right text-grey-800", children: o })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "relative z-10 grid w-full grid-cols-[auto_170px] gap-4", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ h.jsx("div", { className: "flex w-full justify-between gap-4", children: /* @__PURE__ */ h.jsx(xe, { className: "mb-2 line-clamp-2 leading-tight", level: 5, "data-test-activity-heading": !0, children: t.name }) }),
        /* @__PURE__ */ h.jsx("p", { className: "mb-6 line-clamp-2 max-w-prose text-md text-grey-800", children: n }),
        /* @__PURE__ */ h.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ h.jsx(pe, { className: `self-start text-grey-500 transition-all hover:text-grey-800 ${a ? "bump" : ""} ${l ? "ap-red-heart text-red *:!fill-red hover:text-red" : ""}`, hideLabel: !0, icon: "heart", id: "like", size: "md", unstyled: !0, onClick: u }),
          /* @__PURE__ */ h.jsx("span", { className: `text-grey-800 ${l ? "opacity-100" : "opacity-0"}`, children: "1" })
        ] })
      ] }),
      t.image && /* @__PURE__ */ h.jsx("div", { className: "relative min-w-[33%] grow", children: /* @__PURE__ */ h.jsx("img", { className: "absolute h-full w-full rounded object-cover", src: t.image }) })
    ] }),
    /* @__PURE__ */ h.jsx("div", { className: "absolute -inset-x-3 inset-y-0 z-0 rounded transition-colors group-hover/article:bg-grey-50" })
  ] }) });
}, s5 = ({ object: e, onBackToList: t }) => {
  const { updateRoute: r } = ss(), [i, n] = Y(!1), [o, a] = Y(!1), s = (l) => {
    l == null || l.stopPropagation(), n(!0), a(!o), setTimeout(() => n(!1), 300);
  };
  return /* @__PURE__ */ h.jsx($a, { children: /* @__PURE__ */ h.jsxs(
    qa,
    {
      toolbarBorder: !1,
      type: "page",
      children: [
        /* @__PURE__ */ h.jsxs("div", { className: "grid grid-cols-[1fr_minmax(320px,_700px)_1fr] gap-x-6 pb-4", children: [
          /* @__PURE__ */ h.jsx("div", { children: /* @__PURE__ */ h.jsx(pe, { icon: "chevron-left", iconSize: "xs", label: "Inbox", "data-test-back-button": !0, onClick: t }) }),
          /* @__PURE__ */ h.jsx("div", { className: "flex items-center justify-between" }),
          /* @__PURE__ */ h.jsxs("div", { className: "flex justify-end", children: [
            /* @__PURE__ */ h.jsxs("div", { className: "flex flex-row-reverse items-center gap-3", children: [
              /* @__PURE__ */ h.jsx(pe, { className: `self-start text-grey-500 transition-all hover:text-grey-800 ${i ? "bump" : ""} ${o ? "ap-red-heart text-red *:!fill-red hover:text-red" : ""}`, hideLabel: !0, icon: "heart", id: "like", size: "md", unstyled: !0, onClick: s }),
              /* @__PURE__ */ h.jsx("span", { className: `text-grey-800 ${o ? "opacity-100" : "opacity-0"}`, children: "1" })
            ] }),
            /* @__PURE__ */ h.jsx(pe, { hideLabel: !0, icon: "arrow-top-right", iconSize: "xs", label: "Visit site", onClick: () => r("/") })
          ] })
        ] }),
        /* @__PURE__ */ h.jsx("div", { className: "mx-[-4.8rem] mb-[-4.8rem] w-auto", children: /* @__PURE__ */ h.jsx(a5, { heading: e.name, html: e.content, image: e == null ? void 0 : e.image }) })
      ]
    }
  ) });
}, c5 = () => /* @__PURE__ */ h.jsx(o5, {}), l5 = {
  paths: {
    "follow-site": "FollowSite",
    "view-following": "ViewFollowing",
    "view-followers": "ViewFollowers"
  },
  load: async () => import("./modals-124e649f.mjs")
}, m5 = ({ framework: e, designSystem: t }) => /* @__PURE__ */ h.jsx(EM, { ...e, children: /* @__PURE__ */ h.jsx(n5, { basePath: "activitypub", modals: l5, children: /* @__PURE__ */ h.jsx(CM, { className: "admin-x-activitypub", ...t, children: /* @__PURE__ */ h.jsx(c5, {}) }) }) });
export {
  MM as A,
  pe as B,
  xe as H,
  bM as L,
  Ho as N,
  g5 as a,
  pd as b,
  k as c,
  Po as d,
  u5 as e,
  Y as f,
  G as g,
  ss as h,
  h5 as i,
  h as j,
  Pi as k,
  p5 as l,
  KM as m,
  yM as n,
  qM as o,
  m5 as p,
  ir as s,
  uo as u
};
//# sourceMappingURL=index-8aaa062c.mjs.map
