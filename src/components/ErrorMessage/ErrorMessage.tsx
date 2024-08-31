import React from 'react';
import s from './ErrorMessage.module.css';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => { 
    return (
        <div className={s.error}>{message}</div>
    );
};

export default ErrorMessage;