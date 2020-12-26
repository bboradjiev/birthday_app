import React from 'react'

function List({el}) {
    return (
        <article className='person'>
            <img src={el.image} alt={el.name}/>
            <h4>{el.name}</h4>
            <p>{el.age} years</p>
        </article>
    )
}

export default List
