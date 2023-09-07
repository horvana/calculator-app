import { connect } from "react-redux";

import React from "react";

function Screen(props) {
    const value = props.clickedButtonValue
    const result = props.result

    return (
        <div id="screen">
            <p className = "screen" id="display">{result}</p>
            <p className = "screen" id="input">{value}</p>
        </div>
    )
}

// Map the Redux state to props
const mapStateToProps = (state) => ({
  clickedButtonValue: state.clickedButtonValue,
  result: state.result
});

// Connect the component to Redux
export default connect(mapStateToProps)(Screen);

