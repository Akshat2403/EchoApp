import styles from '../../assets/styles/404.module.css';
import NotFound from '../../assets/images/not found.png';
import Logo from '../../components/Logo';
import { useSelector } from 'react-redux';

const Error = () => {
    const { user } = useSelector((state) => state.auth);
    setTimeout(console.log(user), 5000);
    return (
        <>
            <Logo />
            <div className={styles.main}>
                <div className="Error-404">
                    <img src={NotFound} alt=""></img>
                </div>
            </div>
        </>
    );
};

export default Error;
