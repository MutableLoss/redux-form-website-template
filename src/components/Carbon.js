import React from 'react'
import styled from 'styled-components'

const Sponsor = ({ dark, width, height }) => <StyledDiv className="bsa-cpc" />

const StyledDiv = styled.div`
  #_default_ {
    position: relative;
    background-color: #efefef;
    font-family: Verdana, sans-serif;
    line-height: 1.5;
    border-radius: 5px;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.4);
  }

  .default-ad {
    position: absolute;
    top: 6px;
    right: 6px;
    padding: 1px 4px;
    color: hsla(0, 0%, 20%, 0.3);
    text-transform: uppercase;
    font-size: 10px;
  }

  ._default_ {
    display: block;
    overflow: hidden;
    padding: 1em;
    line-height: 1.5;
  }

  a {
    text-align: left;
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: #900;
  }

  .default-image img {
    display: block;
    float: left;
    width: 40px;
    border-radius: 7.5%;
  }

  .default-title,
  .default-description {
    display: block;
    margin-left: calc(40px + 10px);
    max-width: calc(100% - 220px);
  }

  .default-title {
    font-weight: 600;
    font-size: 1em;
  }

  .default-description {
    font-size: 0.8em;
  }

  .default-image:after {
    position: absolute;
    top: calc(50% - 20px);
    right: 3em;
    padding: 0.5em 1em;
    border-radius: 3px;
    background-color: #cc0000;
    color: #fff;
    content: 'Learn More';
  }

  .default-image:hover:after {
    background-color: #900;
  }
`

export default Sponsor
