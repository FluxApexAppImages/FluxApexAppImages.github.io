function preload() { setAllDisplayFlex(); }

function setAllDisplayFlex() {
    let index1, index2,
        selector_strings = [
            ".init_hidden"
        ],
        settings = {},
        selectors = [];
    let slen = selector_strings.length,
        sslen;
    for (index1 = 0; index1 < slen; index1++) {
        selectors[index1] = dQuerySelectorAll(selector_strings[index1]);
        sslen = selectors[index1].length;
        settings[selector_strings[index1]] = { "display": "flex" };
        for (index2 = 0; index2 < sslen; index2++) {
            selectors[index1][index2].style.display =
                settings[selector_strings[index1]].display;
        }
    }
}
let dQuerySelectorAll = selector => document.querySelectorAll(selector);