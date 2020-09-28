"use strict";

function preload() {
  load();
}

function load() {
  var header = dQuerySelector(".header");
  header.style.display = "flex";
  var banner = dQuerySelector(".banner");
  banner.style.display = "flex";
}

var dQuerySelector = function dQuerySelector(selector) {
  return document.querySelector(selector);
};