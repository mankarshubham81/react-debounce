import './App.css'

function App() {

  const myDebounce = (callback, delay) => {
    let timer;
    return function (...args) {
      if(timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args)
      }, delay);
    }
  }

  const handleChange = myDebounce((e) => {
    console.log(e.target.value)
  }, 1100)

  return (
    <>
      <input onChange={handleChange} type="text" />
    </>
  )
}

export default App
