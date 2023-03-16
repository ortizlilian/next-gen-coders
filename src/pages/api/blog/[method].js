// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const {method} = req.query
  if(method === 'post') {
    console.log(req.body);
    res.status(200).json({ message: 'post submitted' })
    
  }
  else {
    res.status(200).json({ message: 'coming soon' })
  }
  
}
