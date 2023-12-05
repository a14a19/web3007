import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

function OurWork() {
    return (
        <main className='ourWorkMain p-5 mb-5'>
            <h2 className='ourWorkHeader'>
                Our Work
            </h2>
            <div className='w-full'>
                <p className='trustedCompanyHeader w-50 customWidth'>
                    3007 is a strategic design and technology firm dedicated to accelerating digital transformation and crafting exceptional experiences.
                </p>
                <button className='text-nowrap border-0 ourWorkMain trustedCompanyHeader'>Explore our projects <BsArrowRight /></button>
            </div>
            <div className='d-flex justify-content-between align-items-center overflow-hidden positionDRelative marginTopOurWork'>
                <div>
                    <div className='dCircle positionDAbsolute'>
                    </div>
                    <div>
                        <img src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2021/09/jpgeb-bez-bijelog-1-700x519.jpg.webp" alt="" />
                    </div>
                    <div>
                        <p className='ourWorkSubHeading mt-3'>
                            Metaswitch – a Microsoft company
                        </p>
                        <p>
                            Unified communication apps
                        </p>
                        <button className='text-nowrap border-0 ourWorkMain trustedCompanyHeader p-0'>Explore our projects <BsArrowRight /></button>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='assecoImgContainer'>
                        <img src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2021/09/asseco-smaller-new.jpg.webp" alt="" className='w-full assecoImg' />
                    </div>
                    <div>
                        <p className='ourWorkSubHeading mt-3'>
                            Metaswitch – a Microsoft company
                        </p>
                        <p>
                            Unified communication apps
                        </p>
                        <button className='text-nowrap border-0 ourWorkMain trustedCompanyHeader p-0'>Explore our projects <BsArrowRight /></button>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center overflow-hidden marginTopOurWork'>
                <div className='w-full'>
                    <div className='assecoImgContainer'>
                        <img src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2021/10/royal-image-700x700.jpg.webp" alt="" className='w-full assecoImg' />
                    </div>
                    <div>
                        <p className='ourWorkSubHeading mt-3'>
                            Royal Caribbean
                        </p>
                        <p>
                            Communication and collaboration app
                        </p>
                        <button className='text-nowrap border-0 ourWorkMain trustedCompanyHeader p-0'>View case study <BsArrowRight /></button>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2023/10/cafu-thumbnail-700x564.jpg.webp" alt="" />
                    </div>
                    <div>
                        <p className='ourWorkSubHeading mt-3'>
                            CAFU
                        </p>
                        <p>
                            All-in-one car service
                        </p>
                        <button className='text-nowrap border-0 ourWorkMain trustedCompanyHeader p-0'>View case study <BsArrowRight /></button>
                    </div>
                </div>
            </div>
            <div className='marginTopOurWork marginBottomOurWork'>
                <div className='ourWorkLastHeading'>
                    <p>
                        Learn how we combined our expertise to launch our own spin-off software startup —
                    </p>
                    <button className='text-nowrap border-0 ourWorkMain trustedCompanyHeader p-0 ourWorkLastHeading mb-5'>View Shake <BsArrowRight /></button>
                </div>
                <div className='container-fluid p-0 m-0'>
                    <img src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2021/08/ShakeHero.jpg.webp" alt="" className='card-img-top' />
                </div>
            </div>
        </main>
    )
}

export default OurWork;