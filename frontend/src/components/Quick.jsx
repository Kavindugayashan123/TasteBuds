import React from 'react'
import { useState } from 'react';
import "../styles/quick.css";

const Quick = ({item}) => {
    const [selectedImage, setSelectedImage] =useState('');
    const [style,setStyle] = useState("main-container");
    const changeStyle=()=>{
        setStyle("main-containerOne");
    };
  return (
    <div className={style}>
        <div className="card-quick" key={item._id}>
            <div className="card-row">
                <div className="card-images">
                    <div className="card-top">
                        <img src={selectedImage || item.image} alt={item.title}/>
                    </div>
                    //card images can added more
                </div>
            </div>
            <div className="card-row">
                <div className="first-div div">
                    <h2 className='title'>{item.title}</h2>
                    <p className='category'>{item.category}</p>
                </div>
                <div className="second-div div">
                    <span className='price'>Price: ${item.price}</span>
                    <div className="quantity">Quantity: 1</div>
                </div>
                <div className="third-div div">
                    <p className='desc'>{item.desc}</p>
                </div>
                <div className="fourth-div div">
                    <button className='cart'>Add to Cart</button>
                    <button className='wish'>Add to Wish</button>
                </div>
            </div>

        </div>
        <button className='back' onClick={changeStyle}>CloseAdd to Cart</button>
    </div>
  )
}

export default Quick