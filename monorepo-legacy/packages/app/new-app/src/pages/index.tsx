import * as React from 'react'
import { NextPage } from 'next'
import { Button } from 'components/button'
import { capitalize } from 'packages/shared/functions'

const Index: NextPage = () => {
  const handleClick = (): void => {
    alert('World')
  }

  return (
    <div>
      <Button label={capitalize('hello new-app')} onClick={handleClick} />
    </div>
  )
}

export default Index
