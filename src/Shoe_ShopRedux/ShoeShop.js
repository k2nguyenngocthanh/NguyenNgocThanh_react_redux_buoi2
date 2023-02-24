import React, { Component } from 'react'
import Cart from './Cart'
import ListShoe from './ListShoe'
import { connect } from "react-redux";


 class ShoeShop extends Component {
  render() {
    return (
      <div>
        <Cart></Cart>
        <ListShoe></ListShoe>
        
      </div>
    )
  }
}
let mapStateToProps=(state) =>{
    return{
      list:state.shoeReducer.listShoe,
    }
  }
  
  export default connect (mapStateToProps)(ShoeShop);