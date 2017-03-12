import React from 'react';

class ResultOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ResultOption">
        <div className="RestaurantAvatar">
          <img src={this.props.value.image}></img>
        </div>
        <div className="RestaurantInfo">
          <div className="RestaurantName restaurant">
            {this.props.value.name}
          </div>
        </div>
        <div className="RestaurantInfo">
          <div className="RestaurantSeats restaurant">
            {this.props.value.seats} chairs available!
          </div>
        </div>
      </div>
    )
  }

}

module.exports = ResultOption;