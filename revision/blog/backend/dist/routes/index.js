"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRoute = void 0;
const express_1 = require("express");
const blog_1 = __importDefault(require("./blog"));
exports.mainRoute = (0, express_1.Router)();
exports.mainRoute.use('/blog', blog_1.default);
