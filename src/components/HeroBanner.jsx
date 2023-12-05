import React from 'react';
import { BsArrowRight } from "react-icons/bs";

function HeroBanner() {
    return (
        <aside className='mt-5 container-fluid p-5'>
            <h1 className="heroBannerHeader">
                We're <span className='decode'>3007</span>
            </h1>
            <div className='w-full d-flex justify-content-end align-items-end flex-column mb-5'>
                <h2 className='w-75 heroBannerSubHeader customWidth'>
                    Innovate<span className='decode'>.</span> Transform<span className='decode'>.</span> Thrive<span className='decode'>.</span>
                </h2>
                <div className='w-75 d-flex mt-4 customWidth flex-wrap'>
                    <button className='text-nowrap heroBannerSubHeader border-0 bg-white'>
                        Let's talk <BsArrowRight />
                    </button>
                    <div className='d-flex justify-content-center align-items-center ms-5'>
                        <img src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2021/08/Marin_100x100.jpg.webp" alt="" className='imgFigure mx-3' />
                        <img src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2021/08/Striza_100x100.jpg.webp" alt="" className='imgFigure mx-3' />
                    </div>
                    <p className='d-flex justify-content-center align-items-center ms-5'>
                        <span className='heroBannerSpan '>
                            You’ll be talking with our technology experts.
                        </span>
                    </p>
                </div>
                <div className='w-75 d-flex mt-5 customWidth'>
                    <p className='heroBannerSubHeader'>
                        Caring like we’re in-house.
                    </p>
                </div>
            </div>
            <div>
                <p className='trustedCompanyHeader pt-5 mb-5'>
                    Trusted by great companies
                </p>
                <ul className='d-flex justify-content-between align-items-center flex-wrap'>
                    <li className='trustedCompanyImg'>
                        <img src="https://decode.agency/wp-content/uploads/2021/09/ATT.svg" alt="" className='w-full' />
                    </li>
                    <li className='trustedCompanyImg'>
                        <img src="https://decode.agency/wp-content/uploads/2021/07/RoyalCaribbean_logo.svg" alt="" className='w-full' />
                    </li>
                    <li className='trustedCompanyImg'>
                        <img src="https://decode.agency/wp-content/uploads/2023/11/cafu-logo-1.svg" alt="" className='w-full' />
                    </li>
                    <li className='trustedCompanyImg'>
                        <img src="https://decode.agency/wp-content/uploads/2021/07/Microsoft_logo.svg" alt="" className='w-full' />
                    </li>
                    <li className='trustedCompanyImg'>
                        <img src="https://decode.agency/wp-content/uploads/2023/06/Asset-3Contentsquare-b.svg" alt="" className='w-full' />
                    </li>
                    <li className='trustedCompanyImg'>
                        <img src="https://decode.agency/wp-content/uploads/2023/03/sofascore.svg" alt="" className='w-full' />
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default HeroBanner;