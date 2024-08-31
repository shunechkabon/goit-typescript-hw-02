import { Oval } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => { 
    return (
        <div className={s.loader}>
            <Oval
                color="#00BFFF"
                height={50}
                width={50}
            />
        </div>);
};

export default Loader;