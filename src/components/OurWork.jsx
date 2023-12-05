import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

function OurWork() {
    return (
        <main className='ourWorkMain pt-5 px-5'>
            <h2 className='ourWorkHeader'>
                Our Work
            </h2>
            <div className='w-full'>
                <p className='trustedCompanyHeader w-50 customWidth'>
                    We’ve loved working with many fantastic companies, and are really proud of what we’ve achieved together.
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
                        <img src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2021/09/asseco-smaller-new.jpg.webp" alt="" className='w-full assecoImg'/>
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
        </main>
    )
}

export default OurWork;