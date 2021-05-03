import React from "react";

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ cursor: "pointer" }} onClick={this.props.onClickProps}>
        {this.props.children}
      </div>
    );
  }
}

export default FollowButton;
