/*
 * External imports
 */
import React, { Component } from "react";
import {
  oneOfType,
  node,
  arrayOf,
  string,
  number,
  oneOf,
  bool
} from "prop-types";
import styled from "styled-components";

import { getRandomFromRange, getPositionIndex } from "./utils";

/*
 * Component definitions
 */
const Container = styled.div`
  transition: all
    ${({ duration, timingFunction }) => `${duration}s ${timingFunction}`};

  background: ${({ bg }) => bg};
`;

class AnimatedBg extends Component {
  constructor(props) {
    super(props);

    const { randomMode, colors } = props;

    this.state = {
      index: randomMode ? getRandomFromRange(colors.length) : 0
    };
  }

  componentDidMount() {
    const { duration, delay } = this.props;
    const ms = (delay + duration + 0.04) * 1000;
    this.intervalId = setInterval(() => {
      this.changeBackground();
    }, ms);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  changeBackground = () => {
    const { colors, randomMode } = this.props;
    this.setState(prevState => ({
      index: getPositionIndex(prevState.index, colors, randomMode)
    }));
  };

  render() {
    const {
      children,
      className,
      colors,
      delay = 0,
      duration = 0.2,
      timingFunction = "linear",
      ...otherProps
    } = this.props;
    const { index } = this.state;

    return (
      <Container
        bg={colors[index]}
        delay={delay}
        className={className}
        duration={duration}
        timingFunction={timingFunction}
        {...otherProps}
      >
        {children}
      </Container>
    );
  }
}

/*
 * Component's default prop-types
 */
AnimatedBg.defaultProps = {
  children: null,
  className: "",
  delay: 0,
  duration: 0.2,
  timingFunction: "linear",
  randomMode: false,
};

/*
 * Component's prop-types definition
 */
AnimatedBg.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  className: string,
  colors: arrayOf(string).isRequired,
  delay: number,
  duration: number,
  timingFunction: oneOf([
    "ease",
    "linear",
    "ease-in",
    "ease-out",
    "ease-in-out",
    "step-start",
    "step-end",
  ]),
  randomMode: bool,
};

/*
 * Export main component
 */
export default AnimatedBg;
