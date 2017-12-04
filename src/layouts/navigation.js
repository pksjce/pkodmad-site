import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import getPageList from '../navigation/page-list'
import {Navigation, LocalNav} from '../navigation'

export default ({children}) => (
    <Navigation stack={getPageList()}>
    <LocalNav/>
  </Navigation>)