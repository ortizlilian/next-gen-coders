// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import NextGenCodersDB from '../../../../lib/database';

export default async function handler(req, res) {
  const {method} = req.query;
  const clientDB = new NextGenCodersDB();

  if(method === 'post') {
    console.log(req.body);

    await clientDB.start();
    await clientDB.create(req.body);
    await clientDB.close();

    res.status(200).json({ message: 'post submitted' })

  } else if(method === 'get') {
    const {category} = req.query;

    await clientDB.start();
    const result = await clientDB.query(category);
    await clientDB.close();

    res.status(200).json(result);
  } else {
    res.status(404).json({ message: 'error' });
  }
  
}
