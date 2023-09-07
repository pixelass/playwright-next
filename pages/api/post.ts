// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

export default function handler(
    request: NextApiRequest,
    response: NextApiResponse<Data>
) {
    switch (request.method) {
        case 'POST':
            response.status(200).json({message: 'OK'})
            break;
        default:
            response.status(403).json({message: 'Not OK'})
    }
}
