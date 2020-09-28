function preload() {
    load();
}

function load() {
    let header = dQuerySelector(".header");
    header.style.display = "flex";
    let banner = dQuerySelector(".banner");
    banner.style.display = "flex";
}
let dQuerySelector = selector => document.querySelector(selector);