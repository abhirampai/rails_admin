import {
  Application,
  Controller,
} from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";
window.Stimulus = Application.start();

const baseUrl = window.location.href.split("/").pop();

$.ajaxSetup({
  beforeSend: (_, options) => {
    options.url = baseUrl + options.url;
    options.header = {
      "X-CSRF-Token": document.head.querySelector('meta[name="csrf-token')
        .content,
    };
  },
});
