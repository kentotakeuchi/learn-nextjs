// Every API route can export a config object to change the default configs, which are the following:
export const config = {
  api: {
    bodyParser: {
      // `bodyParser.sizeLimit` is the maximum size allowed for the parsed body, in any format supported by bytes, like so:
      sizeLimit: '1mb'
    },
    // bodyParser Enables body parsing, you can disable it if you want to consume it as a Stream:
    // bodyParser: false,
    // externalResolver is an explicit flag that tells the server that this route is being handled by an external resolver like express or connect. Enabling this option disables warnings for unresolved requests.
    externalResolver: true
  }
}

import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD']
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors)

  // Rest of the API logic
  res.json({ message: 'Hello Everyone!' })
}

export default handler
