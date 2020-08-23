import React, { Component } from "react";
import "./searchForm.css";
import SearchField from "./SearchField";
import SearchSelect from "./SearchSelect";
import { SEARCH_LIMITS, SEARCH_TYPE } from "../../utils/const";
import SearchRadioButton from "./SearchRadioButton";
import SearchButton from "./SearchButton";

class SearchForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
          searchValue: ''
      };
      this.handleChangeSearchValue = this.handleChangeSearchValue.bind(this);
      this.search = this.search.bind(this);
  }
    handleChangeSearchValue(event){
      this.setState({
          searchValue:event.target.value
      })
    }
  search(){
    console.log(this.state.searchValue)
  }

  componentDidMount() {}
  render() {
    return (
      <div className="searchForm">
        <SearchField handleChangeSearchValue={this.handleChangeSearchValue} searchValue={this.state.searchValue}/>
        <SearchSelect optionsList={SEARCH_TYPE} name="type" />
        {SEARCH_LIMITS.map((option) => (
          <SearchRadioButton label={option} value={option} name="limit" />
        ))}
        <SearchButton onClick={this.search}/>
      </div>
    );
  }
}

export default SearchForm;
