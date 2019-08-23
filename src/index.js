/*
 * External imports
 */
import React, { useState } from "react";
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
import useInterval from "use-interval";

import { getRandomFromRange, getPositionIndex } from "./utils";

/*
 * Component definitions
 */
const Container = styled.div`
  transition: all
    ${({ duration, timingFunction }) =>
      `${duration}s ${timingFunction}`};

  background: ${({ bg }) => bg};
`;

const AnimatedBg = ({
  children,
  className,
  colors,
  delay = 0,
  duration = 0.2,
  timingFunction = "linear",
  randomMode = false,
  ...otherProps
}) => {
  const initialIndex = randomMode ? getRandomFromRange(colors.length) : 0;
  const [index, setIndex] = useState(initialIndex);

  useInterval(() => {
    const nextIndex = getPositionIndex(index, colors, randomMode);
    setIndex(nextIndex);
  }, (delay + duration) * 1000);

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
    "step-end"
  ]),
  randomMode: bool
};

/*
 * Export main component
 */
export default AnimatedBg;
