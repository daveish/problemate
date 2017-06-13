import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
    font-size: 1rem;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html,
  body,
  #app {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.45;
    color: #333;
    background-color: #f7f7f7;
  }

  body.fontLoaded {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  p {
    margin-bottom: 1.3em;
  }

  h1, h2, h3, h4 {
    margin: 1.414em 0 0.5em;
    font-weight: inherit;
    line-height: 1.2;
  }

  h1 {
    margin-top: 0;
    font-size: 2.441em;
  }

  h2 {
    font-size: 1.953em;
  }

  h3 {
    font-size: 1.563em;
  }

  h4 {
    font-size: 1.25em;
  }

  small, .font_small {
    font-size: 0.8em;
  }

  .headroom {
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1100;
    width: 100%;
    transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }

  .headroom-wrapper {
    height: 0 !important;
  }

  .headroom--unfixed {
    position: fixed;
    transform: translateY(0%);
  }

  .headroom--unpinned {
    position: fixed;
    transform: translateY(100%);
  }

  .headroom--pinned {
    position: fixed;
    transform: translateY(0%);
  }
`;
