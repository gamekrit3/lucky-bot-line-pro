// LINE Webhook Handler
export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Webhook received:', req.body);
    res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}