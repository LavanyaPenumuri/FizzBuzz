const request = require('supertest');
const {expect} = require('expect');

var app = require('./../app');

describe('Testing Fizzbuzz endpoint', () => {
    it('it should return "Fizz" if input is divisible by 3 ', async () => { 
        const response = await request(app)
        .post('/fizzbuzz')
        .send({ input_data: '3' });
        expect(response.body.message).toStrictEqual(["Fizz"]);
    });
    it('it should return "Buzz" if input is divisible by 5 ', async () => { 
        const response = await request(app)
        .post('/fizzbuzz')
        .send({ input_data: '5' });
        expect(response.body.message).toStrictEqual(["Buzz"]);
    });
    it('it should return "FizzBuzz" if input is divisible by 3 and 5 ', async () => { 
        const response = await request(app)
        .post('/fizzbuzz')
        .send({ input_data: '15' });
        expect(response.body.message).toStrictEqual(["FizzBuzz"]);
    });
    it('it should return "FizzBuzz, Fizz, Buzz, InvalidItem" if array of values given', async () => { 
        const response = await request(app)
        .post('/fizzbuzz')
        .send({ input_data: '15, 3, 5, <empty>' });
        expect(response.body.message).toStrictEqual(["FizzBuzz", "Fizz", "Buzz", "Invalid Item"]);
    });
    it('it should return "Invalid Item" if input is not a number ', async () => { 
        const response = await request(app)
        .post('/fizzbuzz')
        .send({ input_data: 'A' });
        expect(response.body.message).toStrictEqual(["Invalid Item"]);
    });
    it('it should return "Divided input by 3 Divided inout by 5" ', async () => { 
        const response = await request(app)
        .post('/fizzbuzz')
        .send({ input_data: '1' });
        expect(response.body.message).toStrictEqual(["Divided 1 by 3 Divided 1 by 5"]);
    });
  });
