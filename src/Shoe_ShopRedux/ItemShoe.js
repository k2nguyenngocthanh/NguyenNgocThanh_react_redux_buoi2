import React, { Component } from 'react'
import { connect } from "react-redux";
import { addToCartAction } from './Reducer/Action/shoeAction';

 class ItemShoe extends Component {
  render() {
    let { image, name, price } = this.props.item;
    return (
        <div className="col-3 p-4">
        <div>
          <div className="card">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                {price} $
              </p>
              <button onClick={()=>{this.props.handlePushToCart(this.props.item);}} href="#"  className="btn btn-primary">
                Add to card
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

let mapDispatchToProps=(dispath)=>{
    return{
      handlePushToCart:(shoe)=>{
        dispath(addToCartAction(shoe))
      },
    };
  };
  
  export default connect(null,mapDispatchToProps)(ItemShoe)
