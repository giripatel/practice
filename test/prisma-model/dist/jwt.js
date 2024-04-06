"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createAuthToken = (mail) => {
    const token = jsonwebtoken_1.default.sign(mail, 'JWT_SCRET');
    return token;
};
exports.createAuthToken = createAuthToken;
// const token =  createAuthToken('hello@gmail.com');
// console.log(token);
const validate = (token) => {
    try {
        const hasAccount = jsonwebtoken_1.default.verify('eyJhbGciOiJIUzIJ9.aGVsbG9AZ21haWwuY29t.Gc4FamZPJ73uacUigp18XqpxDaX_w_CiA6XznxgoMxw', 'JWT_SCRET');
    }
    catch (error) {
        console.log("invalid token");
    }
    // console.log(hasAccount);
};
validate('y');
