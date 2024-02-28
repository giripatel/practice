"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.amountSchema = exports.signInSchema = exports.mySchema = void 0;
const zod_1 = require("zod");
// add an erro if schema false to know which parameter failed
exports.mySchema = zod_1.z.object({
    userName: zod_1.z.string().email(),
    firstName: zod_1.z.string().min(3, 'please enter at least 3 letters'),
    lastName: zod_1.z.string().min(3),
    password: zod_1.z.string().min(6)
});
exports.signInSchema = zod_1.z.object({
    userName: zod_1.z.string().email(),
    password: zod_1.z.string().min(6)
});
exports.amountSchema = zod_1.z.number();
