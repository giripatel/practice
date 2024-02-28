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
const validateAuth_1 = require("../middlewares/validateAuth");
const db_1 = require("../db/db");
const validation_1 = require("../zodvalidation/validation");
const accountRoute = (0, express_1.Router)();
accountRoute.get('/balance', validateAuth_1.validateAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = res.locals.email;
    const balance = yield (0, db_1.getBalance)(email);
    res.status(200).json({
        balance
    });
}));
accountRoute.patch('/transfer', validateAuth_1.validateAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const to = req.body.to;
    const amount = req.body.amount;
    const from = res.locals.email;
    try {
        const { balance } = yield (0, db_1.transferAmount)(from, to, amount);
        res.json({
            balance
        });
    }
    catch (err) {
        res.status(400).json({
            message: "Insufficient Balance"
        });
        return;
    }
}));
accountRoute.patch('/add', validateAuth_1.validateAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const amount = req.body.amount;
    const userName = res.locals.email;
    const { success } = validation_1.amountSchema.safeParse(amount);
    if (!success) {
        res.status(400).json({
            message: "Please enter a valid amount"
        });
        return;
    }
    const { balance } = yield (0, db_1.updateBalance)(userName, amount);
    res.status(200).json({
        balance,
        message: `Successfully added ${balance} in your account `
    });
}));
exports.default = accountRoute;
