import React from "react";
import hogs from "../porkers_data";
import HogList from "./HogList";
import HogForm from "./HogForm";

class HogContainer extends React.Component {
  state = {
    hogs: hogs,
    sortBy: "default",
    filterGreased: false
  };

  updateHogSort = sorter => {
    this.setState({ sortBy: sorter });
  };

  updateGreasedFilter = e => {
    this.setState({ filterGreased: e.target.checked });
  };

  passDownHogs = () => {
    let hogs = this.state.hogs;
    if (this.state.filterGreased) {
      hogs = this.filterHogs(hogs);
    }
    if (this.state.sortBy === "name") {
      return this.sortHogsByName(hogs);
    } else if (this.state.sortBy === "weight") {
      return this.sortHogsByWeight(hogs);
    } else return hogs;
  };

  filterHogs = hogs => {
    return hogs.filter(hog => hog.greased);
  };

  sortHogsByName = hogs => {
    let newHogs = hogs.sort(function(a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

    return newHogs;
  };

  sortHogsByWeight = hogs => {
    let weight =
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";

    return hogs.sort(function(a, b) {
      var textA = a[weight];
      var textB = b[weight];
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  };

  render() {
    return (
      <div>
        <HogForm
          handleSort={this.updateHogSort}
          handleFilterPigs={this.updateGreasedFilter}
        />
        <HogList hogs={this.passDownHogs()} />
      </div>
    );
  }
}
export default HogContainer;
