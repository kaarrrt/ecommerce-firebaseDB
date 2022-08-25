import React,{useState,useEffect} from 'react'
import BannerImages from './BannerImages';
import right from './images/icons/right.svg';
import left from './images/icons/left.svg';
import './ImageSlider.css'
export const ImageSlider = () => {

const [image,setImage]=useState(0);
  const length=BannerImages.length;
  const nextSlide=()=>{
    setImage(image===length-1?0:image+1);
  }
  useEffect(() => {
    setTimeout(()=>{
      nextSlide();
    },5500)
  }, [image])
  
  
  return (
    <div className='slider'>
    <img src={left} alt="left" className="left" onClick={()=>nextSlide()}/>
    <img src={right} alt="right" className="right" onClick={()=>nextSlide()} />
    {BannerImages.map((slide,index)=>{
      return(
        <div className={index===image?'slide-active':'slide' } key={index}>
          {index===image && (<img src={slide.image} alt="" className="images"/>) }
          
        </div>
      )
    })}
    
    </div>
  )
}
export default ImageSlider;
