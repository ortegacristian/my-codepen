import React from 'react'

export const CodepenCard = ({data}) => {
    
    const { id, name, owner, previewImage } = data;

    return (
        <article className='grid-item'>
            <header className='grid-item-header'>
                <a href={`/${owner.username}`} className='avatar-link'>
                    <img alt={`Profile for ${owner.name} ${owner.lastName}`} src='' className='avatar-image'/>
                </a>
                <div className='titleAndAuthor'>
                    <h2 className='title'>
                        <a href={`/${owner.username}/pen/${id}`}>{name}</a>
                    </h2>
                    <address className='author'>
                        <a href={`/${owner.username}`} className='authorName'>{owner.name} {owner.lastName}</a>
                    </address>
                </div>
            </header>
            <div className='thumbnail'>
                <a className='cover-link' href={`/${owner.username}/pen/${id}`}>
                    <img className='preview-image' alt={`${name}`} src={`${previewImage}`} />
                </a>
            </div>
        </article>
    )
}
