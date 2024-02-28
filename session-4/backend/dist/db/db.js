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
exports.updateBalance = exports.getBalance = exports.getAllUsers = exports.getUser = exports.delletUser = exports.updateUser = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const binary_1 = require("@prisma/client/runtime/binary");
const prisma = new client_1.PrismaClient();
//******* Create user *******/
const createUser = (userName, firstName, lastName, password, balance) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const create = yield prisma.user.create({
            data: {
                userName: userName,
                password: password,
                firstName: firstName,
                lastName: lastName,
                account: {
                    create: {
                        balance: 8000
                    }
                }
            },
            include: {
                account: true
            }
        });
        return create;
    }
    catch (err) {
        if (err instanceof binary_1.PrismaClientKnownRequestError) {
            return null;
        }
    }
});
exports.createUser = createUser;
const updateUser = (userName, updateDetails) => __awaiter(void 0, void 0, void 0, function* () {
    const update = yield prisma.user.update({
        where: {
            userName: userName
        },
        data: updateDetails
    });
    return update;
});
exports.updateUser = updateUser;
//********* Delete User *********/
const delletUser = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.delletUser = delletUser;
//********** Get user *********/
const getUser = (userName) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.findFirst({
        where: {
            userName: userName
        },
        select: {
            userName: true,
            firstName: true,
            lastName: true
        }
    });
    return user;
});
exports.getUser = getUser;
//****** Get all users ******/
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield prisma.user.findMany({});
    return allUsers;
});
exports.getAllUsers = getAllUsers;
const getBalance = (userName) => __awaiter(void 0, void 0, void 0, function* () {
    const getBalance = yield prisma.user.findFirst({
        where: {
            userName: userName,
        }, select: {
            account: { select: { balance: true } }
        }
    });
    if (getBalance) {
        return getBalance;
    }
});
exports.getBalance = getBalance;
const updateBalance = (userName, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const updataBalance = yield prisma.account.update({
        where: {
            userName: userName
        },
        data: {
            balance: { increment: amount }
        }, select: {
            balance: true
        }
    });
    return updataBalance;
});
exports.updateBalance = updateBalance;
