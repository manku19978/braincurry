import React from "react";

const withWindowResize = (Component) => {
  class WrappedComponent extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        progressBarWidth: this.findSize(),
      };
    }

    componentDidMount() {
      window.addEventListener("resize", this.resizeUpdate.bind(this));
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.resizeUpdate.bind(this));
    }

    findSize() {
      const width = window.screen.width;
      const isDesktop = width > 419 ? true : false;
      return isDesktop ? 661 : (width * 89) / 100;
    }

    resizeUpdate() {
      const progressBarWidth = this.findSize();
      this.setState({
        progressBarWidth,
      });
    }

    render() {
      return <Component progressBarWidth={this.state.progressBarWidth} />;
    }
  }

  return WrappedComponent;
};

export default withWindowResize;
