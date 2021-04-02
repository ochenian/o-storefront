import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  height: 3em;
  width: 3em;
  position: relative;
  font-size: 12px;
  cursor: pointer;
  transition: .2s all;
  -webkit-tap-highlight-color: transparent;


  .burger-lines:after {
    left: 0;
    top: -1em;
  }
  .burger-lines:before {
    left: 1em;
    top: 1em;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 150%;
    width: 150%;
    top: -25%;
    left: -25%;
  }
  .burger-lines {
    top: 50%;
    margin-top: -0.125em;
    &,
    &:after,
    &:before {
      pointer-events: none;
      display: block;
      content: '';
      width: 100%;
      border-radius: 0.25em;
      background-color: white;
      height: 0.25em;
      position: absolute;
      transform: rotate(0);
    }
    &:after {
      left: 0;
      top: -1em;
      width: 2em;
    }
    &:before {
      left: 1em;
      top: 1em;
      width: 2em;
    }
  }
}`;

const Burger = ({ className }) => (
  <Icon className="">
    <div className="burger-lines" />
  </Icon>
);

export default Burger;
