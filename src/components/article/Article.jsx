/* eslint-disable react/prop-types */

import './article.css';

function Article (props){
  const {imgUrl,date,text}=props
  return (
    <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
  )

}



export default Article;
