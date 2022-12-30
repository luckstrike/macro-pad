import React, { Component } from 'react';
import './YouTubePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    solid,
    regular,
    brands,
    icon,
  } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom';

export default class YouTubePage extends Component {
    render() {
        return(
            <div class="wrapper">
                <div class="page-arrow" id="right-arrow">
                    <Link to="/" class="page-arrow">
                        <FontAwesomeIcon icon={solid('arrow-right')} />
                    </Link>
                </div>
            </div>
        )
    }
}