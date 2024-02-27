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
const userRouter = (0, express_1.Router)();
userRouter.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, firstName, lastName, password } = req.body;
    // const userDetails : Request = req.body;
    const balance = Math.floor(Math.random() * 1000) + 1;
    console.log(req.body);
    const userInputValidation = validation_1.mySchema.safeParse(req.body);
    if (!userInputValidation.success) {
        res.status(401).json({
            message: "Please enter your inputs correctly"
        });
        return;
    }
    console.log('======================================== : ' + balance);
    const userCreate = yield (0, db_1.createUser)(userName, firstName, lastName, password, balance);
    // console.log(userCreate);
    console.log(userInputValidation);
    res.status(200).json({
        message: "worked",
    });
}));
userRouter.post('/signin', (req, res) => {
});
exports.default = userRouter;
