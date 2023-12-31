import React from 'react'
import ShoppingPageHero from '../components/GenericHero'
import CartContainer from '../components/CartContainer'

function CartPage() {
  return (
    <div>
      <ShoppingPageHero heading={"Cart Page"}/>
      <CartContainer />
    </div>
  )
}

export default CartPage
