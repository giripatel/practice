const zod = require('zod')

const emailValidation = zod.string().email()
const passwordValidation = zod.string();

module.exports = {
    emailValidation,
    passwordValidation
}