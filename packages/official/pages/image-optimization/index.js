import Image from 'next/image'

function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image src='/me.png' alt='Picture of the author' width={500} height={500} />
      <p>Welcome to my homepage!</p>
    </>
  )
}

export default Home
