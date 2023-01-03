import React from 'react'
import Card from './component/Card';
import { useState } from 'react';
import Data from './component/Data';
import './App.css';

const Click = () => {
    const [active,setActive] = useState('FirstCard');
    return (
        <>
            <div className='App'>
                <nav>
                    <button onClick={() => setActive('FirstCard')}>One </button>
                    <button onClick={() => setActive('SecondCard')}>Two</button>
                    <button onClick={() => setActive('ThirdCard')}>Three</button>
                </nav>
                <div>
                    {active === 'FirstCard' && <Card data={Data} cardIndex={0} />}
                    {active === 'SecondCard' && <Card data={Data} cardIndex={1} />}
                    {active === 'ThirdCard' && <Card data={Data} cardIndex={2} />}


                </div>
            </div>
        </>
    )
}

export default Click
