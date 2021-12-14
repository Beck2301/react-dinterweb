import React, { useEffect } from 'react'
import DinterwebPage1 from '../DinterwebPage1';

function Dinterweb() {
    useEffect(() => {
        window.scrollTo({ top: 0 })
        return () => { window.scrollTo({ top: 0 }) };
    }, [])
    return (
        <>
            <DinterwebPage1 />
        </>
    )
}

export default Dinterweb

