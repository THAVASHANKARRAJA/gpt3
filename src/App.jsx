
import {Brand, Cta,Navbar} from './components/index.js'
import {Blog,Features,Footer,Header,Possibility,WhatGPT3} from './containers/index.js'
import './App.css'
function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
