import { useState } from "react"

interface IParams {
  params: {
    title: string
  }
}

export default function VReact() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>React</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>
      <p>{count}</p>
    </div>
  )
}