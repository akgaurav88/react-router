import React from 'react'
import "./CardStyle.css"

const Card = ({ data,cardIndex }) => {
    return (
        <div>
            {data[cardIndex].map(item => (
                <div className='card'>
                    <p>{item.title}</p>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Card
