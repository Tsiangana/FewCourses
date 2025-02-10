// CommonJS

const {soma} = require("./soma.js")

console.log(soma(2, 3));

// CommonJS



//ESM - ES Modules - EcmaScript Modules

import calc from "./sub.js"

import * as calc1 from "./sub.js"
import {soma, sub as sub1} from "./sub.js"

const sub = () => {}