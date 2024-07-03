import './features.css'
import Feature from '../../components/feature/Feature'
const featuresData =[
  {
    title:'Architecture',
    text:'GPT-3 is based on the Transformer architecture, which was introduced in the paper "Attention is All You Need" by Vaswani et al.'
  },
  {
    title:'Size',
    text:'GPT-3 has 175 billion parameters, making it one of the largest and most powerful language models available. Its size allows it to generate high-quality text across various contexts.'
  },
  {
    title:'Training',
    text:'GPT-3 was trained on a diverse range of internet text, but it does not know specific documents or have direct access to its training data.'
  },
  {
    title:'Applications',
    text:'Due to its versatility, GPT-3 has been used in numerous applications, such as chatbots, virtual assistants, content creation tools, educational platforms, and more'
  },


]
const Features = () => {
  return (
    <div className='gpt3__features section__padding ' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The future is Now and You just need to realize it.Step into Future today and make it happen. 
        </h1>
        <p>Request early access to get Started</p>
      </div>
      <div className='gpt3__features-container '>
       {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}

      </div>

    </div>
  )
}

export default Features
