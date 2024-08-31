import Modal from 'react-modal';
import s from './ImageModal.module.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        display: 'flex',
        gap: '10px',
        height: '100%',
        zIndex: 1500,
    },
    overlay: {
        zIndex: 1000, 
    }
};

const ImageModal = ({ image, onClose }) => { 
    const { urls, alt_description, user, likes } = image;

    return (
        <Modal isOpen={!!image} onRequestClose={onClose} style={customStyles} ariaHideApp={false}>
            <div className={s.info}>
                <p>Photo by {user.name}</p>
                <p>{likes} likes</p>
            </div>
            <img src={urls.regular} alt={alt_description} className={s.image} />
            <button onClick={onClose} className={s.closeButton}>
                &times;
            </button>
        </Modal>);
};

export default ImageModal;