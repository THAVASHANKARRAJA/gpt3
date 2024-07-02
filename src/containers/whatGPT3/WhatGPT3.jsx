import Feature from '../../components/feature/Feature'
import './whatGPT3.css'

function WhatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section__margin ' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title={"What is GPT-3"} text={"We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."}/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
          Explore the Library
        </p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title={"Chatbots"} text={"Chatbots are AI-powered programs that simulate human conversations to assist users in real-time."}/>
        <Feature title={"Knowledge base"} text={"A knowledge base is a centralized repository of information that provides answers to common questions and problems."}/>
        <Feature title={"Education"}  text={"Chatbots in education provide personalized learning support."}/>
      </div>
      
    </div>
  )
}

export default WhatGPT3
