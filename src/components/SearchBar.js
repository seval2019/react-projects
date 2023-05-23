import React from "react";

class SearchBar extends React.Component {
    handleFormSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row my-3">
                    <input type="text"
                        onChange={this.props.searchMovieProp}
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Search a movie"/>

                </div>
            </form>
        )
    }
}

export default SearchBar;