/**
 * This is the uncompressed version of the bookmark link
 */
javascript:(function() {
    var b = document.createElement("script");
    b.setAttribute("src", "https://rawgit.com/itsbrianburton/paywalltrebuchet/master/payload.js?c="+Math.floor((Math.random() * 10000) + 1));
    document.body.appendChild(b);
})();