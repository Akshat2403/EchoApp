import logo from "../assets/images/logo1.png";
import styles from "../assets/styles/logo.module.css";
const Logo = () => {
  return (
    <div className={styles.LogoTop}>
      <div>
        <img className={styles.LogoTopImg} src={logo} alt="" />
      </div>
      <div className={styles.HeadingTop}>Echo</div>
    </div>
  );
};
export default Logo;
