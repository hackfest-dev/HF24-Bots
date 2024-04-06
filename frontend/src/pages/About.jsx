import React from 'react';
import { useSearchParams } from 'react-router-dom';

const About = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let animal=searchParams.get('animal')
  // const animal = urlParams.get('animal');

  return (
    <div>
      <iframe src={`/ar.html?animal=${animal}`} title="ar-content" width="100%" height="600px"></iframe>
    </div>  
  );
}

export default About;


{/* <iframe src="/ar.html" title="ar-content" width="100%" height="600px"></iframe> */}