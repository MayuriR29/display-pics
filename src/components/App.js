import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

export default class App extends React.Component {
  async onSearchsubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 27dcaaec595f2e63853490d502aa701a0ec2ebc6412cb026706de1a35e0c0a75"
      }
    });
    console.log(response.data.results);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchsubmit} />
      </div>
    );
  }
}
