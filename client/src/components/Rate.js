import Ratings from 'react-ratings-declarative';
import React from 'react'
 
class Rate extends React.Component {
    state = {
        rating: 0
    }
    changeRating =( newRating ) => {
      this.setState({
        rating: newRating
      });
    }
 
    render() {
        console.log(this.state.rating)
      return (
          <Ratings
            rating={this.state.rating}
            widgetRatedColors="orange"
            changeRating={this.changeRating}
          >
            <Ratings.Widget widgetHoverColor="orange"/>
            <Ratings.Widget widgetHoverColor="orange"/>
            <Ratings.Widget widgetHoverColor="orange"/>
            <Ratings.Widget widgetHoverColor="orange" />
            <Ratings.Widget widgetHoverColor="orange"/>
          </Ratings>
      );
    }
}



export default Rate