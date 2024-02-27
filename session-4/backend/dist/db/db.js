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
exports.getAllUsers = exports.delletUser = exports.updateUser = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// export const createUser = async ({userName, firstName, lastName , password , balance } : Inputs) => {
const createUser = (userName, firstName, lastName, password, balance) => __awaiter(void 0, void 0, void 0, function* () {
    // export const createUser = async () => {
    console.log("User Name ============= : " + userName);
    console.log("First Name ============ : " + firstName);
    console.log("Last Name ============= : " + lastName);
    console.log("Passowrd ============== : " + password);
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
        // data : {
        //     userName : 'test@123.com',
        //     firstName : 'firstName', 
        //     lastName : 'lastName',
        //     password : 'password',
        //     account : {
        //         create : {
        //             balance : 123343
        //         }
        //     }
        // },
        // include : {
        //     account : true
        // }
    });
    console.log(exports.createUser);
    return create;
});
exports.createUser = createUser;
const updateUser = (id, updateDetails) => __awaiter(void 0, void 0, void 0, function* () {
    const update = yield prisma.user.update({
        where: {
            id: id
        },
        data: updateDetails
    });
});
exports.updateUser = updateUser;
const delletUser = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.delletUser = delletUser;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield prisma.user.findMany({});
    console.log(allUsers);
});
exports.getAllUsers = getAllUsers;
// getAllUsers()
