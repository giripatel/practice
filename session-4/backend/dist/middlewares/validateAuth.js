"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secrets_1 = require("../secrets");
const validateAuth = (req, res, next) => {
    const token = req.headers.authorization;
    try {
        if (token) {
            const hasAccount = jsonwebtoken_1.default.verify(token, secrets_1.JWT_SCRET);
            if (hasAccount) {
                res.locals.email = hasAccount;
                next();
            }
        }
        else {
            res.status(401).json({
                message: "Please login"
            });
        }
    }
    catch (error) {
        res.status(401).json({
            message: "Please login"
        });
    }
};
exports.validateAuth = validateAuth;
