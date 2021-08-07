import axios from 'axios';
export const policyReq = axios.create({
  baseURL: 'http://localhost:3000/data/',
  method: 'GET',

});

export default async function handler(req, res) {
  try {
    const response = await policyReq.get('policies.csv');
    res.status(200).json(response.data);
  } catch (error) {
    res.json({ error });
  }
}
