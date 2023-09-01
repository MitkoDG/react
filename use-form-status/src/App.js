import { useRef } from 'react'
import './App.css'

function App() {
  const nameRef = useRef(null)

  async function save(value) {
    console.log(value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await save(nameRef.current.value)
  }

  return (
    <form onClick={handleSubmit}>
      <input name="name" ref={nameRef} />
      <button>Submit</button>
    </form>
  )
}

export default App
