import './brand.css'
import {google,atlassian,shopify,dropbox,slack} from './index.js'
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="google" /> 
        </div>
        <div><img src={atlassian} alt="atlassian" />
        </div>
        <div><img src={shopify} alt="shopify" /></div>
       <div><img src={dropbox} alt="dropbox" /></div> 
        <div><img src={slack} alt="slack" /></div>

     
      
    </div>
  )
}

export default Brand
