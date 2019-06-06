import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import RestaurantItem from "./RestaurantItem";

class RestaurantList extends Component {
  state = {
    allRests: null,
    clicked: null
  };

  componentDidMount() {
    this.populateRests();
  }

  setClicked = index => {
    this.setState({ clicked: index });
  };

  populateRests = async () => {
    let getAllRests = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/restaurants`
    );

    this.setState({
      allRests: await getAllRests.json()
    });
  };

  render() {
    let allResults = null;
    if (this.state.allRests) {
      allResults = this.state.allRests.map((rest, index) => {
        return (
          <div onClick={() => this.props.sendID(rest.id)}>
            <RestaurantItem
              img={rest.image_url}
              name={rest.name}
              cuisine={rest.cuisine}
              phone={rest.phone}
              address={rest.address}
              key={rest.id}
              index={index}
              clicked={this.state.clicked}
              setClicked={this.setClicked}
            />
          </div>
        );
      });
    }

    return (
      <div style={{ overflow: "auto", maxHeight: "90vh" }}>{allResults}</div>
    );
  }
}

export default RestaurantList;
