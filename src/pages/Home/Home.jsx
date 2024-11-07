import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
        <Navbar />
        <div className='hero'>
            <img className='banner-img' src={hero_banner} alt="hero section banner" />
            <div className="hero-caption">
                <img className='caption-img' src={hero_title} alt="caption banner" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, doloremque?
                </p>
                <div className='hero-buttons'>
                    <button className='btn'><img src={play_icon} alt="play icon" />Play</button>
                    <button className='btn dark-btn'><img src={info_icon} alt="info icon" />More info</button>
                </div>
                {/* title cards */}
                <TitleCards category='popular'  />
            </div>
        </div>
        <div className='more-cards'>
            <TitleCards title={'Blockbuster Movies'}  category='now_playing' />
            <TitleCards title={"Only on netflix "} category='popular' />
            <TitleCards title={'Upcoming '} category='top_rated' />
            <TitleCards title={'Top pics for you'} category='upcoming' />
        </div>  
        <Footer />
    </div>
  )
}

export default Home
