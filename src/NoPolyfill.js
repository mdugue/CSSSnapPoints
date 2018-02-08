/**
 * The intersting parts happen in the Current-, Deprecated- & Mixed-Container 
 * CSS Definitions.
 */

import React, { Component } from "react"
import styled from "styled-components"
import scrollSnapPolyfill from 'css-scroll-snap-polyfill'

const commonContainerStyle = `
  overflow: auto;
  white-space: nowrap;
`

const Item = styled.div`
  width: 100%;
  padding 3rem 0;
  display: inline-block;
  text-align: center;
  background: #ccc;
  &:nth-child(2) {
    background: #efefef;
  }
`

const CurrentContainer = styled.div`
  ${commonContainerStyle};
  scroll-snap-type: mandatory;

  & > ${Item} {
    scroll-snap-align: center;
  }
`

const DeprecatedContainer = styled.div`
  ${commonContainerStyle};
  scroll-snap-type: mandatory;
  scroll-snap-destination: 0% 100%;
  scroll-snap-points-x: repeat(100%);

  & > ${Item} {
    /* nothing needed on item level */
  }
`

const MixedContainer = styled.div`
  ${commonContainerStyle};
  scroll-snap-type: mandatory;
  scroll-snap-destination: 0% 100%;
  scroll-snap-points-x: repeat(100%);

  & > ${Item} {
    scroll-snap-align: center;
`

const CurrentSyntaxDemo = () => (
  <div>
    <h3>
      current syntax <small>(currently only Safari 11)</small>
    </h3>
    <CurrentContainer>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
    </CurrentContainer>
  </div>
)

const DeprecatedSyntaxDemo = () => (
  <div>
    <h3>
      deprecated syntax <small>(currently Firefox, Safari before 11)</small>
    </h3>
    <DeprecatedContainer>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
    </DeprecatedContainer>
  </div>
)

const MixedSyntaxDemo = () => (
  <div>
    <h3>
      mixing current with deprecated syntax <small>("all" Firefoxes, Safaris, IEs (in theory))</small>
    </h3>
    <MixedContainer>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
    </MixedContainer>
  </div>
)

const applyPolyFill = () => {
  if (document.createElement('div').style.scrollSnapType == null) {
    console.warn(
      'polyfilling latest scrollsnap behavior as this browser neither knwos the current nor the deprecated syntax',
    )
    scrollSnapPolyfill()
  } else {
    console.info(
      'no polyfil applied as some kind of scrollsnap behavior is supported (current or deprecated syntax)',
    )
  }}

export default () => (
  <section>
    <h2>Without Polyfill</h2>
    <CurrentSyntaxDemo />
    <DeprecatedSyntaxDemo />
    <MixedSyntaxDemo />
    <section>
    <h3>manually apply polyfill</h3>
    <button onClick={applyPolyFill}>apply Polyfill</button>
    <p>Using https://github.com/PureCars/css-scroll-snap-polyfill and not the
          more popular https://github.com/ckrack/scrollsnap-polyfill as this one
          supports the current syntax and both appear to have shortcomings 🤷‍♂️.</p>
    <p>Apparently applying this polyfill will break scrolling on deprecated syntax.
    Please write mixed (or current) syntax when using the polyfill.
    </p>
    
    <small>https://caniuse.com/#feat=css-snappoints</small>
    </section>
  </section>
)
