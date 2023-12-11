import React, { useEffect, useState } from 'react'

function Partners() {

    const [count, setCount] = useState(0)


    useEffect(() => {
        // const timer = setInterval(() => {
        //     setCount((prevSeconds) => prevSeconds - 1);
        // }, 10);
        // console.log(timer);
        // if (count > 1000) {
        //     return () => clearInterval(timer);
        // }
    }, [count])

    return (
        <aside className='m-5'>
            <div>
                <h2 className='ourWorkLastHeading pt-5 mb-5 text-center'>
                    Trusted by great companies
                </h2>
                <ul className='d-flex justify-content-between align-items-center flex-wrap overflow-hidden'>
                    <li className='trustedCompanyImg animate' style={{ transform: `translate(${count}%, 0%)` }}>
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

export default Partners;