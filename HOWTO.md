Prepare a skeleton of your plugin. In this example we use `tool_vuejsdemo`.

Obtaining Vue.js (v2.5.9. in this example)

* Download https://github.com/vuejs/vue/blob/v2.5.22/dist/vue.js as amd/src/vue.js
* Download https://github.com/vuejs/vue/blob/v2.5.22/dist/vue.min.js as amd/build/vue.min.js

Prepare the Mustache template, for example templates/app.mustache:

    <div id="app">
        <h1>[[ message ]]</h1>
    </div>

In your own AMD module, for example amd/src/demo.js:

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

Note custom delimiters - Vue.js uses '{{ }}' by default but that would
collide with the Mustache syntax.
