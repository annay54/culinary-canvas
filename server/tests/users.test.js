const request = require('supertest');
const bcrypt = require('bcrypt');

describe('User API', () => {
  describe('POST /api/users/register and /signin', () => {
    // positive test case
    test('should create a user', async () => {
      const userData = {
        firstName: 'tester',
        lastName: '1',
        email: 'tester@email.com',
        password: 'password123'
      };

      const response = await request('http://localhost:8080')
        .post('/api/users/register')
        .send({userData})
        .set('Accept', 'application/json')
        .expect(200)
        .then((res) => {
          expect(res.body).toEqual({ message: "Successfully created user" })
      });
    });

  });
});