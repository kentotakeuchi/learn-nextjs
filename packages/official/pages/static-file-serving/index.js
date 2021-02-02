import Image from 'next/image'

function Avatar() {
  // if you add an image to public/me.png, the following code will access the image:
  return <Image src='/me.png' alt='me' width='64' height='64' />
}

export default Avatar
