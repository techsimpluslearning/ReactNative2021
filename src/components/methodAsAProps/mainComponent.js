import React from "react";
import FollowButton from "./childComponent";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFollowing: false,
    };
  }

  followMe = () => {
    this.setState({
      isFollowing: !this.state.isFollowing,
    });
  };

  render() {
    return (
      <div>
        <p>You can register yourself by clicking this button....</p>
        <FollowButton onClickProps={this.followMe}>
          {this.state.isFollowing === false ? (
            <p style={{ color: "#0095f6" }}>Follow Me</p>
          ) : (
            <p style={{ color: "red" }}>Un - Follow Me</p>
          )}
        </FollowButton>
      </div>
    );
  }
}

export default MainComponent;
