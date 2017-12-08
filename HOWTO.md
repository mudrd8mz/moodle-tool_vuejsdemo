Prepare a skeleton of your plugin. In this example we use `tool_vuejsdemo`.

Obtaining Vue.js (v2.5.9. in this example)

* Download https://github.com/vuejs/vue/blob/v2.5.9/dist/vue.js as amd/src/vue.js
* Download https://github.com/vuejs/vue/blob/v2.5.9/dist/vue.min.js as amd/build/vue.min.js

In your own AMD module, for example amd/src/demo.js, make use of it:

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

