import React, { useState } from 'react';
import { BsArrowRight } from "react-icons/bs";
import Cursor from './Cursor';

function HeroBanner() {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [enter, setEnter] = useState(false)

    const mouseOver = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    }

    return (
        <aside className='mt-2 container-fluid p-5 position-relative' onMouseMove={(e) => mouseOver(e)} onMouseEnter={() => setEnter(true)} onMouseLeave={() => setEnter(false)} style={{ cursor: "none", overflow: "hidden" }}>
            <Cursor position={position} enter={enter} />
            <h1 className="heroBannerHeader">
                We're <span className='decode number3007 position-relative'>3007</span>
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
        </aside>
    )
}

export default HeroBanner;