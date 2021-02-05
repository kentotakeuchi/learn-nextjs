// the API route pages/api/post/[pid].js has the following code:
export default function handler(req, res) {
  const {
    query: { pid }
  } = req

  res.end(`Post: ${pid}`)
}

export default function handler(req, res) {
  const {
    query: { slug }
  } = req

  // response with `Post: a, b, c`
  res.end(`Post: ${slug.join(', ')}`)
}
