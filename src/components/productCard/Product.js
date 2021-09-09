import React from 'react'

export default function Product ({imgUrl, name, price, content, categories}) {
    console.log(categories);
    return (
        <article>
            <img src={imgUrl} alt={name} height={100}/>
            <p>{name}</p>
            {price && <p>{price.replace('.', ',')}€</p>}
            <p>{content[0]}</p>
            <p>{categories.join(' - ')}</p>
        </article>
    )
}

