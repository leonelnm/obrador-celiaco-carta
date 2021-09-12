import React from 'react'

function Product ({id, imgUrl, name, price, content, categories}) {
    return (
        <article>
            <img src={imgUrl} alt={name} height={100} loading='lazy'/>
            <p>{name}</p>
            {price && <p>{price.replace('.', ',')}€</p>}
            <p>{content[0]}</p>
            <p>{categories.join(' - ')}</p>
        </article>
    )
}

export default React.memo(Product, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id
})