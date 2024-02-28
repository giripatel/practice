"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validation_1 = require("../zodvalidation/validation");
const db_1 = require("../db/db");
const createAuthToken_1 = require("../middlewares/createAuthToken");
const validateAuth_1 = require("../middlewares/validateAuth");
const userRouter = (0, express_1.Router)();
userRouter.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, firstName, lastName, password } = req.body;
    const balance = Math.floor(Math.random() * 1000) + 1;
    console.log(req.body);
    const userInputValidation = validation_1.mySchema.safeParse(req.body);
    console.log(userInputValidation);
    if (!userInputValidation.success) {
        res.status(401).json({
            message: "Please enter your inputs correctly"
        });
        return;
    }
    const userCreate = yield (0, db_1.createUser)(userName, firstName, lastName, password, balance);
    if (userCreate == null) {
        res.status(400).json({
            message: "User with the username already exists"
        });
        return;
    }
    const authToken = (0, createAuthToken_1.createAuthToken)(userName);
    console.log(userInputValidation);
    res.status(200).json({
        message: "User created successfully",
        authToken: authToken
    });
}));
userRouter.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userName = req.body.userName;
    const password = req.body.password;
    const { success } = validation_1.signInSchema.safeParse({
        userName: userName,
        password: password
    });
    if (!success) {
        res.status(401).json({
            message: "Please enter valid email and password"
        });
        return;
    }
    const user = yield (0, db_1.getUser)(userName);
    if (!user) {
        res.status(403).json({
            message: "Please create an account"
        });
        return;
    }
    const authToken = (0, createAuthToken_1.createAuthToken)(userName);
    res.status(200).json({
        message: "your sign is successfull",
        authToken: authToken
    });
}));
userRouter.get('/details', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userName = res.locals.email;
    const userDetails = yield (0, db_1.getUser)(userName);
    res.status(200).json({
        details: userDetails
    });
}));
userRouter.get('/bulk', validateAuth_1.validateAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield (0, db_1.getAllUsers)();
    res.status(200).json({
        users: allUsers
    });
}));
exports.default = userRouter;
