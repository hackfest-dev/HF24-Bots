import { Link } from "react-router-dom";

const HomeInfo = ({ currentStage }) => {
  switch (currentStage) {
    case 1:
      return (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
          Hey there, welcome to
          <span className='font-semibold mx-2 text-white'>Bot's</span>
          Tourism and 🌿 Nature exploration site
        </h1>
      );

    case 2:
      return (
        <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>
          "Travel the world from home! Join our virtual field trips for exciting adventures without leaving your seat. Explore, learn, and have fun, all at your fingertips!" <br />
          </p>

          <Link to='/about' className='neo-brutalism-white neo-btn'>
            Discover more
          </Link>
        </div>
      );

    case 3:
      return (
        <div className='info-box'>
          <p className='font-medium text-center sm:text-xl'>
          🌿 Explore India's biodiversity with a click! Our virtual map reveals flora and fauna info, plus immersive 360-degree and VR experiences. 🌍 Dive in and discover the wonders of nature!
          </p>

          <Link to='/map' className='neo-brutalism-white neo-btn'>
            Explore
          </Link>
        </div>
      );

    case 4:
      return (
        <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>
            Seeking assistance <br/> Feel free to reach out!
          </p>

          <Link to='/contact' className='neo-brutalism-white neo-btn'>
            Contact me
          </Link>
        </div>
      );

    default:
      return null;
  }
};

export default HomeInfo;
