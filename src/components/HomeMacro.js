import React, { Component } from 'react'
import './HomeMacro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro'

export default class HomeMacro extends Component {

  render() {
    return (
      <div class="wrapper">
        <div class="arrow-container">
          <div class="page-arrow" id="left-arrow">
            <FontAwesomeIcon icon={solid('arrow-left')} />
          </div>
          <div class="page-arrow" id="right-arrow">
            <FontAwesomeIcon icon={solid('arrow-right')} />
          </div>
        </div>
        <div class="system-bar">Navbar</div>
        <div class="dash-matrix">
          <button class="dash-macro"></button>
          <button class="dash-macro"></button>
          <button class="dash-macro"></button>
          <button class="dash-macro"></button>
          <button class="dash-macro"></button>
          <button class="dash-macro"></button>
          <button class="dash-macro"></button>
          <button class="dash-macro"></button>
        </div>
      </div>
    )
  }
}
