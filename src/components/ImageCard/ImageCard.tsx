import React from 'react';
import s from './ImageCard.module.css';

interface ImageCardProps {
    image: {
        urls: {
            small: string;
        };
        alt_description: string;
    };
    onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => { 
    const { urls, alt_description } = image;

    return (
        <div className={s.card}>
            <img src={urls.small} alt={alt_description} onClick={onClick}/>
        </div>
    );
};

export default ImageCard;