import './TitleCards.css';
import { useEffect, useRef, useState } from 'react';
import netflix_logo from '../../assets/netflix-brand-logo.png'
import { Link } from 'react-router-dom';


const TitleCards = ({title , category}) => {

  const [apiData , setApiData] = useState([]);
  const cardsRef = useRef();


  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTYyOGRkNDQ4ZDY2MGNiNDY1NDk4ZmY5YjE3ZDIxYyIsIm5iZiI6MTczMDQ5NDY1Ni4wMjk1NjE4LCJzdWIiOiI2NzI1M2VkZmU3YjM3YzczYzY5ZDM3NmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.sPYXUc_CfhWJDliiZFqo4FoCl2cm4mmiAkFTb-kk22k'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1` , options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
  } , [])

  const handleWheel = (e) => {
      e.preventDefault();
      cardsRef.current.scrollLeft += e.deltaY;
  }

  useEffect(() => {
      cardsRef.current.addEventListener('wheel' , handleWheel);
  }, [])



  return (
    <div className='title-cards'>
      <h2>{title ? title : 'popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef} >
        {
          apiData && apiData.length && apiData.map((data) => (
              <Link to={`/player/${data.id}`} key={data.id} className='card'>
                  <img className='card-banner' src={ `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt={data.original_title} />
                  {/* netflix icon */}
                  <img className='card-logo' src={netflix_logo} alt="netflix icon" />
                  <p>{data.original_title}</p>
              </Link>
          ))
        }
      </div>
    </div>
  )
}

export default TitleCards
