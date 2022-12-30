import React, { Component } from 'react'
import './YouTubePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'
import GetTime from './GetTime.js'

function YouTubePage() {
  return (
    <div class="wrapper">
      <div class="system-bar">
        <GetTime />
      </div>
      <div class="page-arrow" id="right-arrow">
        <Link to="/" class="page-arrow">
          <FontAwesomeIcon icon={solid('arrow-right')} />
        </Link>
      </div>
    </div>
  )
}

export default YouTubePage
