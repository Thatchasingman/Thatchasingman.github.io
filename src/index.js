/*
   auto-function-area
*/
const $ = (el, pos = document) =>{
    let temp = pos.querySelectorAll(el);
    return [...temp];
};

(() => {
    // alert($('body'));


})();