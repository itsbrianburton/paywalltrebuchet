(function () {
    /**
     * Variables used at various points
     */
    var a, b, objs, htmlObj, bodyObj, re;

    /**
     * DOM elements that are almost never necessary and used with paywalls
     * @type {string[]}
     */
    var commonElems = ['iframe'];

    /**
     * Paywall overlays often have one of the following class names
     * @type {string[]}
     */
    var commonClassNames = [
        'fc-dialog-overlay',
        'fc-root',
        'fc-dialog-container',
        'tp-modal',
        'tp-backdrop',
        'wp_signin',
        'pico-content',
        'pico-overlay',
        'adblocker-root',
        'meter-paywall'
    ];

    /**
     * Body class names associated with paywalls
     * @type {string[]}
     */
    var commonBodyClassNames = [
        'tp-modal-open',
        'drawbridge-up'
    ];

    /**
     * Common IDs associated with paywalls
     * @type {string[]}
     */
    var commonIds = [
        '#adb-notification',
        '#gatewayCreative',
        '#drawbridge-root',
        '#Interstitial_optly',
        '#wp_Signin'
    ];

    /**
     * Remove bad elements from the DOM
     */
    for (a = 0; a < commonElems.length; a++) {
        objs = document.getElementsByTagName(commonElems[a]);

        if (objs.length > 0) {
            for (b = 0; b < objs.length; b++) {
                objs[b].remove();
            }
        }
    }

    /**
     * Remove bad elements from the DOM identified by their class names
     */
    for (a = 0; a < commonClassNames.length; a++) {
        objs = document.getElementsByClassName(commonClassNames[a]);

        if (objs.length > 0) {
            for (b = 0; b < objs.length; b++) {
                objs[b].remove();
            }
        }
    }

    /**
     * Remove bad elements from the DOM identified by their IDs
     */
    for (a = 0; a < commonIds.length; a++) {
        objs = document.getElementById(commonIds[a]);

        if (objs) {
            objs.remove();
        }
    }

    /**
     * Clean up html and body class names
     */
    htmlObj = document.getElementsByTagName("html")[0];
    bodyObj = document.body;

    /**
     * Remove naughty class names from body and html associated with paywalls
     */
    for (a = 0; a < commonBodyClassNames.length; a++) {
        re = new RegExp("/\b" + commonBodyClassNames[a] + "\b/", "g");
        htmlObj.className.replace(re, "");
        bodyObj.className.replace(re, "");
    }

    /**
     *  Reset inline styles that are usually used to prevent scrolling
     */
    htmlObj.style = null;
    bodyObj.style = null;

    htmlObj.style.overflow = "visible";
    bodyObj.style.overflow = "visible";
})();