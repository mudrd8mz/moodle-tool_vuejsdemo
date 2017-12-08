define(['tool_vuejsdemo/vue'], function(Vue) {
    "use strict";

    function init() {
        new Vue({
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
