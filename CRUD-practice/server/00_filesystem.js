import { product,division } from "./A_modules.js";
import * as fs from "node:fs";

// 2. File System


// synchronous
// const txt = fs.readFileSync('demo.txt','utf-8')
// console.log(txt)



const t1 = performance.now();
// asynchronous always work with callbacks
fs.readFile('demo.txt','utf-8',(err,txt) => {
    console.log(txt)
})
const t2 = performance.now();

console.log(t2-t1)
console.log(product(2,3), division(4,2))    
