import { NextApiRequest, NextApiResponse } from 'next'

const cyrb53 = (str: string, seed = 0): number => {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i)
    h1 = Math.imul(h1 ^ ch, 2654435761)
    h2 = Math.imul(h2 ^ ch, 1597334677)
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909)
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909)
  return 4294967296 * (2097151 & h2) + (h1 >>> 0)
}

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const clientIP = req.socket.remoteAddress
  const validityInterval = Math.round(Date.now() / 1000 / 3600 / 24 / 4)
  const userAgent = req.headers['user-agent']
  const acceptLanguage = req.headers['accept-language']
  const host = req.headers.host
  const clientIDSource = `${clientIP};${host};${userAgent};${acceptLanguage};${validityInterval}`
  const clientIDHashed = cyrb53(clientIDSource).toString(16)

  res.status(200)
  res.setHeader('Content-Type', 'text/javascript')
  res.send(`u='${clientIDHashed}'`)
}
