"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    console.log('site is working fine');
    res.json({
        message: "woring fine"
    });
});
app.post('/signin', (req, res) => {
    const body = req.body;
    console.log(body);
    const user = prisma.user.findUnique({
        where: {
            email: body.email,
            password: body.password
        }
    });
    res.json({
        message: true
    });
});
app.listen(3000, () => {
    console.log("started on port 30000");
});
