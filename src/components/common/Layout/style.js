import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  @font-face {
    #030303: "Filson Soft"; src: url("//db.onlinewebfonts.com/t/c5fc2b05949b051c07482453e8e0c1e6.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/c5fc2b05949b051c07482453e8e0c1e6.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/c5fc2b05949b051c07482453e8e0c1e6.woff") format("woff"), url("//db.onlinewebfonts.com/t/c5fc2b05949b051c07482453e8e0c1e6.svg#Filson Soft") format("svg"); 
  }
  @font-face {
    font-family: "Filson Pro"; src: url("//db.onlinewebfonts.com/t/7af422d3673e325273ef7450c569aa73.eot"); src: url("//db.onlinewebfonts.com/t/7af422d3673e325273ef7450c569aa73.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/7af422d3673e325273ef7450c569aa73.woff2") format("woff2"); 
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/pacifico/v21/FwZY7-Qmy14u9lezJ-6K6MmTpA.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/pacifico/v21/FwZY7-Qmy14u9lezJ-6D6MmTpA.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/pacifico/v21/FwZY7-Qmy14u9lezJ-6J6MmTpA.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/pacifico/v21/FwZY7-Qmy14u9lezJ-6H6Mk.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }


  html {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    font-family: 'Roboto', Helvetica, sans-serif;
    font-size: 16px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    main,
    menu,
    nav,
    section,
    summary {
      display: block;
    }
    audio,
    canvas,
    progress,
    video {
      display: inline-block;
    }
    audio:not([controls]) {
      display: none;
      height: 0;
    }
    progress {
      vertical-align: baseline;
    }
    [hidden],
    template {
      display: none;
    }
    a {
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
    }
    a:active,
    a:hover {
      outline-width: 0;
    }
    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      text-decoration: underline dotted;
    }
    b,
    strong {
      font-weight: inherit;
      font-weight: bolder;
    }
    dfn {
      font-style: italic;
    }
    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }
    mark {
      background-color: #ff0;
      color: #222;
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    img {
      border-style: none;
    }
    svg:not(:root) {
      overflow: hidden;
    }
    code,
    kbd,
    pre,
    samp {
      font-family: monospace, monospace;
      font-size: 1em;
    }
    figure {
      margin: 1em 40px;
    }
    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font: inherit;
      margin: 0;
    }
    optgroup {
      font-weight: 700;
    }
    button,
    input {
      overflow: visible;
    }
    button,
    select {
      text-transform: none;
    }
    [type='reset'],
    [type='submit'],
    button,
    html [type='button'] {
      -webkit-appearance: button;
    }
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner,
    button::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    [type='button']:-moz-focusring,
    [type='reset']:-moz-focusring,
    [type='submit']:-moz-focusring,
    button:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    fieldset {
      border: 1px solid silver;
      margin: 0 2px;
      padding: 0.35em 0.625em 0.75em;
    }
    legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal;
    }
    textarea {
      overflow: auto;
    }
    [type='checkbox'],
    [type='radio'] {
      box-sizing: border-box;
      padding: 0;
    }
    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
      height: auto;
    }
    [type='search'] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }
    [type='search']::-webkit-search-cancel-button,
    [type='search']::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    ::-webkit-input-placeholder {
      color: inherit;
      opacity: 0.54;
    }
    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }
    html {
      box-sizing: border-box;
      overflow-y: scroll;
    }
    * {
      box-sizing: inherit;
    }
    *:before {
      box-sizing: inherit;
    }
    *:after {
      box-sizing: inherit;
    }
    img {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    h1 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 2.25rem;
      line-height: 1.1;
    }
    h2 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 1.62671rem;
      line-height: 1.1;
    }
    h3 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 1.38316rem;
      line-height: 1.1;
    }
    h4 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 1rem;
      line-height: 1.1;
    }
    h5 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 0.85028rem;
      line-height: 1.1;
    }
    h6 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 0.78405rem;
      line-height: 1.1;
    }
    hgroup {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    ul {
      margin-left: 1.45rem;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      list-style-position: outside;
      list-style-image: none;
    }
    ol {
      margin-left: 1.45rem;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      list-style-position: outside;
      list-style-image: none;
    }
    dl {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    dd {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    p {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    figure {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    pre {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      font-size: 0.85rem;
      line-height: 1.42;
      background: hsla(0, 0%, 0%, 0.04);
      border-radius: 3px;
      overflow: auto;
      word-wrap: normal;
      padding: 1.45rem;
    }
    table {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      font-size: 1rem;
      line-height: 1.45rem;
      border-collapse: collapse;
      width: 100%;
    }
    fieldset {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    blockquote {
      margin-left: 1.45rem;
      margin-right: 1.45rem;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    form {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    noscript {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    iframe {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    hr {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: calc(1.45rem - 1px);
      background: hsla(0, 0%, 0%, 0.2);
      border: none;
      height: 1px;
    }
    address {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    b {
      font-weight: bold;
    }
    strong {
      font-weight: bold;
    }
    dt {
      font-weight: bold;
    }
    th {
      font-weight: bold;
    }
    li {
      margin-bottom: calc(1.45rem / 2);
    }
    ol li {
      padding-left: 0;
    }
    ul li {
      padding-left: 0;
    }
    li > ol {
      margin-left: 1.45rem;
      margin-bottom: calc(1.45rem / 2);
      margin-top: calc(1.45rem / 2);
    }
    li > ul {
      margin-left: 1.45rem;
      margin-bottom: calc(1.45rem / 2);
      margin-top: calc(1.45rem / 2);
    }
    blockquote *:last-child {
      margin-bottom: 0;
    }
    li *:last-child {
      margin-bottom: 0;
    }
    p *:last-child {
      margin-bottom: 0;
    }
    li > p {
      margin-bottom: calc(1.45rem / 2);
    }
    code {
      font-size: 0.85rem;
      line-height: 1.45rem;
    }
    kbd {
      font-size: 0.85rem;
      line-height: 1.45rem;
    }
    samp {
      font-size: 0.85rem;
      line-height: 1.45rem;
    }
    abbr {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
    }
    acronym {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
    }
    abbr[title] {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
      text-decoration: none;
    }
    thead {
      text-align: left;
    }
    td,
    th {
      text-align: left;
      border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
      font-feature-settings: 'tnum';
      -moz-font-feature-settings: 'tnum';
      -ms-font-feature-settings: 'tnum';
      -webkit-font-feature-settings: 'tnum';
      padding-left: 0.96667rem;
      padding-right: 0.96667rem;
      padding-top: 0.725rem;
      padding-bottom: calc(0.725rem - 1px);
    }
    th:first-child,
    td:first-child {
      padding-left: 0;
    }
    th:last-child,
    td:last-child {
      padding-right: 0;
    }
    tt,
    code {
      background-color: hsla(0, 0%, 0%, 0.04);
      border-radius: 3px;
      font-family: 'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono',
        'Liberation Mono', Menlo, Courier, monospace;
      padding: 0;
      padding-top: 0.2em;
      padding-bottom: 0.2em;
    }
    pre code {
      background: none;
      line-height: 1.42;
    }
    code:before,
    code:after,
    tt:before,
    tt:after {
      letter-spacing: -0.2em;
      content: ' ';
    }
    pre code:before,
    pre code:after,
    pre tt:before,
    pre tt:after {
      content: '';
    }
    @media only screen and (max-width: 480px) {
      html {
        font-size: 100%;
      }
    }
    
    body {
      width: 100%;
      max-width:100%;
      margin: 0;
      padding: 0;
      color: ${({ theme }) => (theme === 'light' ? 'hsla(0, 0%, 0%, 0.8)' : '#f8f8f8')};
      background-color: ${({ theme }) => (theme === 'light' ? '#f8f8f8' : '#18132a ')};
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      -moz-transition: all 0.3s;
      transition: all 0.3s;
      font-weight: normal;
      word-wrap: break-word;
      font-kerning: normal;
      -webkit-text-size-adjust: 100%; 
      -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -webkit-tap-highlight-color: transparent;
      overflow-x: hidden;
    }
    a {
      text-decoration: none;
    }
    input, select, textarea, button {
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
`;
