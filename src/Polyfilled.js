import React, { Component } from 'react'
import styled from 'styled-components'
import scrollSnapPolyfill from 'css-scroll-snap-polyfill'

scrollSnapPolyfill()

const Container = styled.div`
  width: 100%;
  overflow: auto;
  white-space: nowrap;
  scroll-snap-type: mandatory;
  font-size: 0;

  & > div {
    width: 100%;
    height: 100px;
    display: inline-block;
    line-height: 100px;
    text-align: center;
    font-size: 50px;
    scroll-snap-align: center;
    &:nth-child(2) {
      background: #efefef;
    }
  }
`

export default class Hello extends Component {
  componentDidMount() {
    if (document.createElement('div').style.scrollSnapType == null) {
      console.warn(
        'polyfilling latest scrollsnap behavior as this browser neither knwos the current nor the deprecated syntax',
      )
      scrollSnapPolyfill()
    } else {
      console.info(
        'no polyfil applied as some kind of scrollsnap behavior is supported (current or deprecated syntax)',
      )
    }
  }

  render() {
    return (
      <section>
        <h2>automatically Polyfilled</h2>
        <p>Automatically applying polyfill as part of component lifecycle.</p>
        <p>
          Using https://github.com/PureCars/css-scroll-snap-polyfill and not the
          more popular https://github.com/ckrack/scrollsnap-polyfill as this one
          supports the current syntax and both should have similar shortcomings.
        </p>
        <Container>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Container>
      </section>
    )
  }
}
