import React from "react";

const Triangle = ({ vertices, color, delay }) => {

  const pathData = [
    'M', vertices[0][0], vertices[0][1],
    'L', vertices[1][0], vertices[1][1],
    'L', vertices[2][0], vertices[2][1],
    'Z',
  ].join(' ');

  const styles = {
    animation: 'bounce 1.2s ease both infinite',
    transformOrigin: '50% 100%',
    animationDelay: `delay${delay}ms`
  }

  return <path style={styles} d={pathData} fill={color} />
}

module.exports = Triangle;

