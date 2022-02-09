import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.module.css'
const logo = () => (
    <div className ={classes.Logo}>
        <img src={burgerLogo} alt="BurgerBeast"/>
    </div>
);

export default logo;