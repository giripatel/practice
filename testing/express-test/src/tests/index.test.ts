import {describe,expect,it} from '@jest/globals'
import request from 'supertest'
import {app} from '../index'

describe("Testing sum api request",  () => {

    it("sum a+b", async () => {
        
        const req = await request(app).post('/sum').send({
            a:1,
            b:2
        });

        expect(req.statusCode).toBe(200);
        expect(req.body.answer).toBe(3)
    })
})