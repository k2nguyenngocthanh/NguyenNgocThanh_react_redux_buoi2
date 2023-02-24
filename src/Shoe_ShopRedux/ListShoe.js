import React, { Component } from "react";
import ItemShoe from "./ItemShoe";
import { connect } from "react-redux";

class ListShoe extends Component {
  render() {
    return (
      <div className="row">
        {this.props.list.map((shoe) => {
          return <ItemShoe key={shoe.id} item={shoe}></ItemShoe>;
        })}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    list: state.shoeReducer.listShoe,
  };
};

export default connect(mapStateToProps)(ListShoe);
