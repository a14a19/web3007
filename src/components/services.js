
import React from 'react';

const Services = () => {
  return (
    <div className='container-fluid p-5'>
      <div>
        <h1 className='heading ' style={{ fontSize: '120px'}}>
          <span> OUR <br></br>SERVICES </span>
        </h1>
      </div>
      <div > 
      <div className='d-flex justify-content-end align-items-end flex-column mt-5 '>
        <div className='border-top border-dark d-flex justify-content-between align-items-start w-75 mt-5' style={{ marginBottom:'40px'}}>
          <p> <span className='dd-heading' style={{ fontSize: '30px'}}>
            Product Discovery
          </span></p>
          <div w-50>
            <p style={{ fontSize: '20px',marginTop:'10px'}}>
              We’ve worked with many startups, armed only with an idea and endless enthusiasm. And we’ve helped big companies with equally big ambitions too.
            </p>
          </div>
        </div>
        <div className='border-top border-dark d-flex justify-content-between align-items-start w-75 wp-block-column' style={{ marginBottom:'40px'}}>
          <p> <span className='dd-heading' style={{ fontSize: '30px'}}>
            Product Design
          </span></p>
          <div>
            <p style={{ fontSize: '20px', marginTop:'10px'}}>
              Mapping out exactly what needs to be built, understanding the entire user journey so we can craft a seamless experience. Planning makes perfect.
            </p>
          </div>
        </div>
        <div className='border-top border-dark d-flex justify-content-between align-items-start w-75 wp-block-column' style={{ marginBottom:'40px'}}>
          <p> <span className='dd-heading' style={{ fontSize: '30px'}}>
            Software Engineering
          </span></p>
          <div>
            <p style={{ fontSize: '20px',marginTop:'10px'}}>
              This is what DECODE was founded on, and we love it. Messaging apps, social platforms, mobile banking – we’ve got the experience for any challenge.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>

  );
}

export default Services;


