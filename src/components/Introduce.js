import React from 'react';

const Introduce = () => {
  return (
    <div>
      <div className="container text-center" style={{ marginTop: '100px' }}>

      <h1 style={{ fontWeight: '500', fontSize: '120px',marginTop: '20px' }}>
      GET TO KNOW<span className="decode" > 3007</span>
      {/* style={{ position: 'relative', right: '350px' }} */}
</h1>
<p  style={{ marginTop: '60px', fontSize:'30px',fontWeight:"bold" }}>
Great working relationships are key to doing brilliant work together. Find out more about how well our team gets along.
        </p>
        <div className="row align-items-start">
          <div className="col">
            <img
              src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2021/08/Services03.jpg.webp"
              alt="Services03"
              className="img-fluid"
              style={{ width: '600px', height: '600px', marginRight: '30px' }}  // Increased width
            />
             <div style={{ textAlign: 'left' }}>
              <h1> Let’s introduce ourselves</h1>
              <h3>Find out more about who we are and why we love what we do.</h3>
              <a href="#about-us"  className="font-weight-bold" style={{ color: 'black', fontSize: '35px' }}>About us →</a>
            </div>
          </div>
          <div className="col">
            <img
              src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2021/08/Decoders01.jpg.webp"
              alt="Decoders01"
              className="img-fluid"
              style={{ width: '600px', height: '700px', marginLeft: '40px' }}  // Increased width
            />
             <div style={{ textAlign: 'center' }}>
              <h1>The 3007ers</h1>
              <h3>A team of more than 80 ambitious individuals fired up by shared values, vision, and mission.</h3>
              <a href="#meet-the-team"  className="font-weight-bold" style={{ color: 'black', fontSize: '35px' }}>Meet the team →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
