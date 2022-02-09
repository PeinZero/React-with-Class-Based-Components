import classes from './SideDrawerToggler.module.css'

const sideDrawerToggler = (props) => (
    <div className = {classes.DrawerToggle} onClick = {props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default sideDrawerToggler;