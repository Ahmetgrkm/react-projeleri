import './Background.css'
import video1 from '../../Assets/video1.mp4'
import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png'



export const Background = ({playStatus, HeroCount}) => {
  
    if(playStatus){
        return(
            <video className='background fade-in' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
            </video>
        )
    }
    else if(HeroCount === 0){
        return <img src={image1} className='background fade-in' />
    }
    else if(HeroCount === 1){
        return <img src={image2} className='background fade-in' />
    }
    else if(HeroCount === 2){
        return <img src={image3} className='background fade-in' />
    }
}
