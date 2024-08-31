import React from 'react';
import s from './LoadMoreBtn.module.css';

interface LoadMoreButtonProps {
    onClick: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => { 
    return (
        <button onClick={onClick} className={s.button}>Load More</button>
    );
};

export default LoadMoreButton;