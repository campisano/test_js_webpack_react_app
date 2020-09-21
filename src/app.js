"use strict";

import React from "react";
import ReactDOM from "react-dom";

export default class App {
  constructor(elementId) {
    this.element = window.document.getElementById(elementId);
  }

  write(content) {
    ReactDOM.render(<div>{content}</div>, this.element);
  }
}
