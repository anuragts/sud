import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  age: string
  likes: [string,string]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'Sudhanshu' ,age:'between 17 or 18', likes:['Machine Learning','Chicken'] })
}
