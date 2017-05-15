import {BSON, Long} from "bson"

let bson:BSON = new BSON();

let doc:object = { "test": Long.fromNumber(100) };
let data:Buffer = bson.serialize(doc);

console.log(data);

let buf:Buffer = Buffer.from("abc");