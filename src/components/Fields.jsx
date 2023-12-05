import React from 'react';


const Fields = () => {
  return (
    <div className="container-fluid" style={{ margin: '0 auto' }}> 
        

<div className="content-1">
<h1 style={{ fontWeight: '500', fontSize: '80px' }}>
How we create the unique
<br />
in-house feeling</h1>
    </div>
  
    <div className="row align-items-start " style={{ marginTop: '150px' }}>
        <div className="col ">
          <h1>1 Project — 1 Team</h1>
          <h3  style={{ marginTop: '30px', fontWeight: '350', color: '#333' }}>Our team focuses exclusively on your product’s success.</h3>
        </div>
        <div className="col">
        <h1>Extreme transparency</h1>
          <h3  style={{ marginTop: '30px', fontWeight: '350', color: '#333' }}>Communicate daily with the whole team not just the team lead.</h3>
        </div>
        <div className="col">
        <h1>Consistent quality</h1>
          <h3  style={{marginTop: '30px', fontWeight: '350', color: '#333' }}>We create polished software products you won’t need to test twice.</h3>
        </div>
      </div>

    


    <div className="content-2"  >
    <h1 style={{ fontWeight: '500', fontSize: '80px',marginTop: '200px' }}>Fields of expertise</h1>

     
    <h3 style={{ marginTop: '60px' }}>
          We regularly dive deep into a wide range of industries and challenges,
          <br />
          including…
        </h3>
    </div>
      <div className="row "  style={{ marginTop: '160px' }} >
        {/* First Column (Image) */}
        <div className="col">
          <img src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2021/10/580x580-copy.jpg.webp" alt="580x580 copy"
          style={{ height: '350px', width: '350px', marginRight: '5px' }}
          />
        </div>

        {/* Second Column (Text Content) */}
        <div className="col">
        <p className="lead " style={{ height: '200px', margin: '0',fontWeight: '450'}}> {/* Reduced height and removed margin */}
            <a href="#messaging-link" className="font-weight-bold" style={{ color: 'black', fontSize: '35px' }}>Messaging apps →</a> 
            Businesses thrive when communication is crystal clear. 
            <span className="">We can make staying in contact effortless.</span>
          </p>
        </div>

        {/* Third Column (Image) */}
        <div className="col">
          <img
            src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2021/10/Fintech-new-image.jpg.webp" alt="Fintech new image"
            className="img-fluid"
            style={{ marginLeft: '5px' }}  // Reduced left margin
          />
        </div>

        {/* Fourth Column (Text Content) */}
        <div className="col">
           <p className="lead" style={{ height: '200px', margin: '0',fontWeight: '450' }}> {/* Reduced height and removed margin */}
            <a href="#messaging-link" className="font-weight-bold " style={{ color: 'black', fontSize: '35px' }}>Fintech →</a> 
            In today’s financial services space, the big names must be as disruptive as the emerging startups. We’ll keep your company on the money.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        {/* First Column (Image) */}
        <div className="col">
          <img
            src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2021/10/IoT-new-image-1.jpg.webp"
            alt="Image in col1"
            className="img-fluid"
            style={{ marginRight: '5px' }}  // Reduced right margin
          />
        </div>

        {/* Second Column (Text Content) */}
        <div className="col">
        <p className="lead " style={{ height: '200px', margin: '0',fontWeight: '450' }}> {/* Reduced height and removed margin */}
            <a href="#messaging-link" className="font-weight-bold" style={{ color: 'black', fontSize: '35px'}}>Internet of Things →</a> 
            Intuitive software and apps can make connected devices do amazing things. We’ll get them talking to each other fluently.
          </p>
        </div>

        {/* Third Column (Image) */}
        <div className="col">
          <img
            src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2021/10/travel-app-image.jpg.webp" alt="travel app image"
            className="img-fluid"
            style={{ marginLeft: '5px' }}  // Reduced left margin
          />
        </div>

        {/* Fourth Column (Text Content) */}
        <div className="col">
          <p className="lead " style={{ height: '200px', margin: '0',fontWeight: '450' }}>
            <a href="#messaging-link" className="font-weight-bold" style={{ color: 'black',fontSize: '35px' }}>And much more →</a> 
            Hospitality, education, productivity and location-based tech are just some of the many other worlds we can help you navigate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fields;
