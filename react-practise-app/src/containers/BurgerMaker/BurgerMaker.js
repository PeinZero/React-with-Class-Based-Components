import React, { Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import axios from '../../axios-orders'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandling from '../../hoc/withErrorHandling/withErrorHandling'

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerMaker extends Component{
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasing: false,
        loading:false,
        error:true
    }

    componentDidMount(){
        axios.get('https://burger-beast-41841-default-rtdb.firebaseio.com/ingredients.json')
            .then( response =>{
                this.setState({ingredients:response.data})
            })
            .catch( error =>{
                this.setState({error: true})
            })
    }

    addIngredientHandler = (type) =>{
        const updatedCount = this.state.ingredients[type] + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice + INGREDIENTS_PRICES[type]; 
        this.setState({ingredients:updateIngredients, totalPrice:newPrice})
    }
    
    removeIngredientHandler = (type) =>{
        if (this.state.ingredients[type] <= 0){
            return;
        }
        const updatedCounted = this.state.ingredients[type] - 1;
        
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCounted;
        
        const newPrice = this.state.totalPrice - INGREDIENTS_PRICES[type];
        this.setState({ingredients:updateIngredients, totalPrice:newPrice})
    }

    purchaseHandler = () =>{
        this.setState({purchasing:true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false})
    }
    purchaseConfirmHandler = () => {
        // alert('You confirmed!!!')

        this.setState({loading:true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Mahad',
                email: "mahadzx@gmail.com"
            }
        }
        axios.post('/orders.json', order)
            .then( response =>{
                console.log(response)
                this.setState({loading:false, purchasing:false})
            })
            .catch( error =>{
                console.log(error)
                this.setState({loading:false, purchasing:false})
            })
        
    }

    render(){
        const disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let ordersummary = null
        let burger = this.state.error ? <p style = {{textAlign: 'center'}} > Ingredients is being loaded! </p> : <Spinner/>;

        if (this.state.ingredients){ 
            burger = (
                <Auxiliary>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls 
                        more={this.addIngredientHandler} 
                        less={this.removeIngredientHandler}
                        disabled= {disabledInfo}
                        price = {this.state.totalPrice}
                        clicked = {this.purchaseHandler}
                    />
                </Auxiliary>
            )

            ordersummary = (
                <OrderSummary 
                    ingredients= {this.state.ingredients}
                    price = {this.state.totalPrice}
                    cancel = {this.purchaseCancelHandler}
                    confirm = {this.purchaseConfirmHandler}
                />
            )
        }
        if (this.state.loading){
            ordersummary = <Spinner/>
        }

        return(
            <Auxiliary>
                <Modal show ={this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                   {ordersummary}
                </Modal>
                {burger}
            </Auxiliary>
        );
    }
}

export default withErrorHandling(BurgerMaker,axios);