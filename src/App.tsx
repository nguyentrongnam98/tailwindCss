import './App.css'
import AuthButton from './components/AuthButton';
import Header from './components/Header';
import Navbar from './components/Nav';
import Trending from './components/Trending';
function App() {
  return (
    <div className='grid grid-cols-5'>
       <Navbar/>
       <main className='col-span-4 bg-cyan-50 px-12 py-6'>
        <AuthButton/>
        <Header/>
        <Trending/>
       </main>
    </div>
  )
}

export default App
