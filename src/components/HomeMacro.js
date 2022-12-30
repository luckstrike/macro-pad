import React, { Component } from 'react'
import './HomeMacro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'

function HomeMacro() {
  return (
    <div class="wrapper">
      <div class="arrow-container">
        <div class="page-arrow" id="left-arrow">
          <Link to="/youtube" class="page-arrow">
            <FontAwesomeIcon icon={solid('arrow-left')} />
          </Link>
        </div>
        <div class="page-arrow" id="right-arrow">
          <Link to="/spotify" class="page-arrow">
            <FontAwesomeIcon icon={solid('arrow-right')} />
          </Link>
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

export default HomeMacro
