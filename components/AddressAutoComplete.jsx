import React, { Component, Fragment } from "react";
import { Grid, Input } from "@nextui-org/react";
import PropTypes from "prop-types";

class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ""
    };
  }

  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="nextui-c-clSMyX nextui-dropdown-menu">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "nextui-c-kpzpMf nextui-c-gulvcB nextui-c-kpzpMf-gTXnEY-color-default nextui-c-kpzpMf-frUyDL-variant-flat nextui-c-kpzpMf-dXDdo-dividerWeight-light nextui-c-kpzpMf-gCnkqK-cv nextui-c-kpzpMf-iPJLV-css nextui-dropdown-item";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <div className="nextui-c-ltVxD nextui-c-gulvcB nextui-c-ltVxD-crfSce-borderWeight-light nextui-c-ltVxD-ftAOXD-isPositioned-true nextui-c-ltVxD-idYOtdv-css nextui-popover-content-container nextui-popover-content-enter nextui-popover-content-enter-active">
      <div className="nextui-c-PJLV nextui-popover-content">
      {/* // <Grid.Container>
        // <Grid xs={12}> */}
          <Input
            // type="text"
            bordered
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
            placeholder="Type something..."
            color="primary"
          />
        {/* </Grid> */}
        {/* // <Grid xs={12}> */}
          {suggestionsListComponent}
        {/* // </Grid>
      // </Grid.Container> */}
      </div>
      </div>
    );
  }
}

export default Autocomplete;