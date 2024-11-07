import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsFilm } from "react-icons/bs";
import { BsCalendar2Event } from "react-icons/bs";


const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData , setApiData] = useState({
    name:'',
    key:'',
    published_at:"",
    typeof:'',
  })

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTYyOGRkNDQ4ZDY2MGNiNDY1NDk4ZmY5YjE3ZDIxYyIsIm5iZiI6MTczMDQ5NDY1Ni4wMjk1NjE4LCJzdWIiOiI2NzI1M2VkZmU3YjM3YzczYzY5ZDM3NmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.sPYXUc_CfhWJDliiZFqo4FoCl2cm4mmiAkFTb-kk22k'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        setApiData(res.results[0])
        console.log(res)
      })
      .catch(err => console.error(err)); 
  } , [])
  
  return (
    <div className="player">
        <img onClick={() => navigate(-2)} src={back_arrow_icon} alt="" />
        <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' allowFullScreen frameBorder='0'></iframe>
        <div className='player-info'>
          <p className='flex-align'>
            <BsCalendar2Event />
            <span>Release Date: {apiData.published_at.slice(0 , 10)}</span>
          </p>
          <p className='flex-align'>
          <BsFilm />
          <span>Movie Name: {apiData.name}</span>
          </p>
        </div>
    </div>
    
  )
}

export default Player
