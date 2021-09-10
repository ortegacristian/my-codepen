import React from 'react';
import { useLocation } from "react-router-dom";

export const CodepenCard = ({data}) => {
    
    let { pathname } = useLocation();
    let basepath = (pathname.includes("my-codepen")) ? "/my-codepen" : "";
    const { id, name, owner, previewImage } = data;

    return (
        <article className='grid-item'>
            <header className='grid-item-header'>
                <a href={`${basepath}/${owner.username}`} className='avatar-link'>
                    <img alt={`Profile for ${owner.name} ${owner.lastName}`} src='' className='avatar-image'/>
                </a>
                <div className='titleAndAuthor'>
                    <h2 className='title'>
                        <a href={`${basepath}/${owner.username}/pen/${id}`}>{name}</a>
                    </h2>
                    <address className='author'>
                        <a href={`${basepath}/${owner.username}`} className='authorName'>{owner.name} {owner.lastName}</a>
                    </address>
                </div>
            </header>
            <div className='thumbnail'>
                <a className='cover-link' href={`${basepath}/${owner.username}/pen/${id}`}>
                    <img className='preview-image' alt={`${name}`} src={`./assets/${previewImage}`} />
                </a>
            </div>
        </article>
    )
}
