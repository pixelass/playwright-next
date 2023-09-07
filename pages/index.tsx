import type { NextPage } from 'next'
import { useState } from "react";

const Home: NextPage = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<null | Error>(null)
  return (
    <div>
      <form onSubmit={async event => {
        event.preventDefault()
        setSuccess(false)
        setError(null)
        const response = await fetch('/api/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({foo: 'bar'})
        })
        if (!response.ok) {
          setError(new Error('Not ok'))
          return
        }
        const json = await response.json()
        setSuccess(true)
        console.log(json)
      }}>
        <label>Name: <input type='text' name='name'/></label>
        <br/>
        <label>Password: <input type='password' name='password'/></label>
        <br/>
        <button type='submit'>Login</button>
      </form>
      {success  && <div data-testid='success'>Done</div>}
      {error  && <div data-testid='error'>Error</div>}
    </div>
  )
}

export default Home
