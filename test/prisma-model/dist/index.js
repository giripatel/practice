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
const client_1 = require("@prisma/client");
const library_1 = require("@prisma/client/runtime/library");
const prisma = new client_1.PrismaClient();
const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.findFirst({
        where: {
            id: 1
        }, select: {
            account: { select: { balance: true } }
        }
    });
    if (user) {
        return user;
    }
});
// console.log(getUser())
function fun() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const balance = yield getUser();
        const bal = (_a = balance === null || balance === void 0 ? void 0 : balance.account) === null || _a === void 0 ? void 0 : _a.balance;
        console.log(bal);
    });
}
// fun()
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield prisma.user.create({
            data: {
                userName: "after@gmail.com",
                firstName: 'Test',
                lastName: 'lastName',
                password: 'password',
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
        console.log(allUsers);
    }
    catch (err) {
        if (err instanceof library_1.PrismaClientKnownRequestError) {
            console.error("Already user with this name exists");
        }
    }
});
const updateUser = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    const update = yield prisma.test.update({
        where: {
            id: 7
        },
        data: obj
    });
    console.log(update);
});
// updateUser({name : 'test2'})
const updataBalance = () => __awaiter(void 0, void 0, void 0, function* () {
    const updateBalance = yield prisma.account.update({
        where: {
            userName: 'after@gmail.com'
        },
        data: {
            balance: { increment: 2000 }
        }
    });
    console.log(updataBalance);
});
updataBalance();
