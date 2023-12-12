import React from 'react'

function Cursor({ position, enter }) {
    return (
        <>
            <img src="https://media.licdn.com/dms/image/D560BAQGTXxs9f1CT1g/company-logo_200_200/0/1700979288796/threeonezeroseven_logo?e=1709769600&v=beta&t=3L_VV8oq3XLgRKEYFFO51JDBqhh9icJFA_R0GWb6Oyk" alt="Tracker" id="trackerImg" style={ enter ? { transform: `translate3D(${position.x}px, ${position.y}px, 0px)`, scale: '1'} : { transform: `translate3D(${position.x}px, ${position.y}px, 0px)`, scale: '0'}}/>
        </>
    )
}

export default Cursor;