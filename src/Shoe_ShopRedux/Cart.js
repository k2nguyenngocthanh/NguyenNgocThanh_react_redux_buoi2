import React, { Component } from 'react'
import { connect } from "react-redux";
import { deleteToCartAction } from './Reducer/Action/shoeAction';

class Cart extends Component {
    renderTbody=()=>{
        return this.props.cart.map((item) =>{
        
            return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <button className='btn btn-danger'>-</button>
                  <strong className='mx-3'>{item.soLuong || "1"}</strong>
                  <button className='btn btn-success'>+</button>
                </td>
                
                <td>{item.price * item.soLuong}</td>
                <td>
                    <img src={item.image} style={{width:80}} alt="" />
                </td>

                <td>
                  <button onClick={()=>{
                    this.props.handleDelete(item.id);
                  }} className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        })
    }

  render() {
    return (
      <div>
        <table className='table'>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Img</th>
            <th>Action</th>
            <tbody>
            {this.renderTbody()}
            </tbody>
        </table>
      </div>
    )
  }
}
        
let mapStateToProps=(state) => { 
    return{
      cart:state.shoeReducer.cart,
    };
   };
  
   let mapDispatchToProps=(dispatch)=>{
    return{
      handleDelete:(shoe)=>{
     
        dispatch(deleteToCartAction(shoe))
      
    },
   };
};
  
  export default connect (mapStateToProps,mapDispatchToProps)(Cart)