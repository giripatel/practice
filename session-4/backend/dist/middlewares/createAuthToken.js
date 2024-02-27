"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secrets_1 = require("../secrets");
const createAuthToken = (mail) => {
    const token = jsonwebtoken_1.default.sign(mail, secrets_1.JWT_SCRET);
    return token;
};
exports.createAuthToken = createAuthToken;
