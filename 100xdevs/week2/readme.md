ECMA Script
- scripting language specification.
- If a javascript compiler/interpreter has to be built, it has to follow the ECMA script specification.

Javascript  
- implementation of ecma script. follows the specification of ECMA script.
- plus some additional features like DOM manipulation, web api, etc.

JS browser engines
- which compiles the JS code. (V8, SpiderMonkey, etc.)
- v8 is written in C.
- spidermonkey is written in c++, rust.

Js Runtime Environment
- Now, as we were already able to run javascript in the browser, using the v8 engine, so this was taken and some additional features were added to it so that we can run the javascript code outside the browser as well. This is how node.js was born. Hence the node.js is a RUNTIME environment for javascript.

Bun is a competitor of node.js - a runtime environment for javascript which is faster than node.js.
written in zig. 