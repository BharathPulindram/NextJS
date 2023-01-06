
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(data)
}

const data = [
    {
        "id":1,
        "title":"sports USA",
        "category":"sports"
    },
    {
        "id":2,
        "title":"politics UK",
        "category":"politics"
    },
    {
        "id":3,
        "title":"sports AUS",
        "category":"sports"
    },
    {
        "id":4,
        "title":"cinema India",
        "category":"cinema"
    },
    {
        "id":5,
        "title":"cinema Japan",
        "category":"cinema"
    },
    {
        "id":6,
        "title":"politics India",
        "category":"politics"
    },
]