import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad' , type: 'salad'},
    {label: 'Bacon' , type: 'bacon'},
    {label: 'Cheese' , type: 'cheese'},
    {label: 'Meat' , type: 'meat'},
]

const buildControls = (props) => ( 
    <div className = {classes.BuildControls}> 
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map( ctrl => (
            <BuildControl 
                more={() => props.more(ctrl.type)} 
                less={() => props.less(ctrl.type)} 
                key={ctrl.label} 
                label={ctrl.label}
                disabled = {props.disabled[ctrl.type]}
            />
        ))}
        <button disabled = {props.price <= 4} className={classes.OrderButton} onClick = {props.clicked}>ORDER NOW</button>
    </div>
)

export default buildControls;