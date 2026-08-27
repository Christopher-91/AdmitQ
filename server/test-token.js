import axios from 'axios';
async function test() {
  try {
    // register a dummy user
    const email = `test-${Date.now()}@example.com`;
    const res = await axios.post('http://localhost:3001/api/auth/register', {
      email,
      password: 'password123',
      firstName: 'Test',
      lastName: 'User'
    });
    const { accessToken } = res.data.data;
    
    const payload = JSON.parse(Buffer.from(accessToken.split('.')[1], 'base64').toString());
    const expiresIn = payload.exp - payload.iat;
    console.log(`Access Token expiresIn: ${expiresIn} seconds`);
    
    if (expiresIn === 900) {
      console.log('It is 15 minutes!');
    } else {
      console.log('It is NOT 15 minutes.');
    }
  } catch (e) {
    console.error(e.response ? e.response.data : e.message);
  }
}
test();
