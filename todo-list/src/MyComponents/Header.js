import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
  return (
    <div>
      <h1 className='header-title'>{props.title}</h1>
    </div>

  )
}
Header.defaultProps = {
  title: "Your Title Here"
}
Header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool.isRequired
}
