import hollie from '../../assets/pictures/holliborder.jpg';
import Services from '../../components/Services/Services';
import './Home.scss';

function Home() {
  return (
    <div className='home'>
        <img className='home__img' src={hollie}/>
        <Services/>
    </div>
  )
}

export default Home;