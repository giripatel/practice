import {z} from 'zod'

// add an erro if schema false to know which parameter failed
export const mySchema =  z.object({
    userName : z.string().email(),
    firstName : z.string().min(3,'please enter at least 3 letters'),
    lastName : z.string().min(3),
    password : z.string().min(6)
})
