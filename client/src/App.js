import NavBar from './components/NavBar/NavBar'
import ReversedText from './components/ReversedText/ReversedText'
import Warning from './components/Warning/Warning'

function App() {
  return (
    <div className='bg-secondary bg-opacity-75 vh-100'>
      <NavBar />
      <Warning/>
      <ReversedText />
    </div>
  )
}

export default App
