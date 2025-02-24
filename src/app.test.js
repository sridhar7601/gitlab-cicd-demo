// File: src/app.test.js

const request = require('supertest');
const app = require('./app');

describe('API Tests', () => {
    test('GET / should return hello message', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBeTruthy();
    });

    test('GET /health should return health status', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('healthy');
    });
});