

import React, { useState } from 'react';
import './Card.css';
import { AiOutlineShareAlt } from 'react-icons/ai';

const Card = (props) => {
    const [openStackExpandBar, setOpenStackExpandBar] = useState(false);

    const handleShare = async () => {
        const shareData = {
            title: props.title,
            text: `Check out this project: ${props.title}`,
            url: props.demoLink,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
                console.log('Link shared successfully');
            } else {
                navigator.clipboard.writeText(shareData.url);
                alert('Link copied to clipboard!');
            }
        } catch (err) {
            console.error('Error sharing the link:', err);
        }
    };


    return (
        <div className='card'>
            <div className="picture">
                <img src={props.image} alt={props.title} />
            </div>

            <div className="card__details">
                <div className="card__details__top">
                    <h2 className="title">{props.title}</h2>
                </div>
                <div className="card__details__middle">
                    <p className="description">
                        {props.data.description}
                    </p>
                </div>
                <div className="card__details__bottom">
                    <div className="stack__container">
                        <div className="stack__left">Built With</div>
                        <div className="stack__right">
                            <div className="stack__box__container">
                                {props.stack.map((list, index) => {
                                    return (
                                        <div
                                            className='stack__box'
                                            key={index}
                                            style={{ display: index < 4 || openStackExpandBar ? 'block' : 'none' }} // Show first 4 or all if expanded
                                        >
                                            <div className="stack__icon__container">
                                                <span className="stack__icon" style={{ color: list.iconColor }}>
                                                    {list.icon}
                                                </span>
                                                <span className="stack__name">{list.name}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {props.stack.length > 4 && (
                                <div className="stack__view__more">
                                    <div
                                        className="more__btn"
                                        onClick={() => setOpenStackExpandBar(!openStackExpandBar)}
                                    >
                                        {openStackExpandBar ? 'View Less' : 'View More'}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="button__container">
                        <a href={props.demoLink} target='_blank' rel="noreferrer" className='btn btn__primary'>
                            Demo
                        </a>
                        <div className="btn__share" onClick={handleShare}>
                            <AiOutlineShareAlt style={{ scale: '1.5' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;


