import {Routes, Route} from 'react-router-dom'
import Store from './pages/Store'
import Navigation from './components/Navigation'
import Stock from './pages/Stock'

function App() {

  return (
    <div  >
      <Routes>
        <Route path='/' element={<Store/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/stock' element={<Stock/>}/>
      </Routes>
      <Navigation/>
    </div>
  )
}

export default App
