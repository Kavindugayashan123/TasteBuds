import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "../styles/newsLetter.css";

const NewsLetter = () => {
  return (
    <div className='news-container'>
        <div className="news-row">
            <div className="news-col">
                <h2 className="news-title">NewsLetter</h2>
                    <p className="news-desc">Get timly updates from your fav foods.</p>
                    <div className="input-container">
                        <input type="text" placeholder='Your E-mail'/>
                        <button><FontAwesomeIcon icon={faPaperPlane}/></button>
                    </div>

                
            </div>
        </div>
    </div>
  )
}

export default NewsLetter