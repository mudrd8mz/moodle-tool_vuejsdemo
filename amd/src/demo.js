define(['tool_vuejsdemo/vue'], function(Vue) {
    "use strict";

    function init() {
        new Vue({
            delimiters: ["[[", "]]"],
            el: "#app",
            data: {
                message: "It works!"
            }
        });
    }

    return {
        init: init
    };
});
