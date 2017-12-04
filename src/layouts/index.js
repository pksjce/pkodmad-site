import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import NavigationApp from './navigation'
import './grid.css'

//import './index.css'

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

// const Header = ({title}) => (
//   <div
//     style={{
//       background: 'rebeccapurple',
//       marginBottom: '1.45rem',
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '1.45rem 1.0875rem',
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//           }}
//         >
//           {title}
//         </Link>
//       </h1>
//     </div>
//   </div>
// )

const Header = ({title}) => (
    <div className='header'>
      <h1>
        <Link to='/'>{title}</Link>
      </h1>
    </div>
)

const TemplateWrapper = ({ children, data }) => {
  const title = data.site.siteMetadata.title
  return <div className='wrapper' >
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className='sidebar'>
      <Header title={title} />
      <NavigationApp />
    </div>
    <div className='content'>
      {children()}
    </div>
  </div>
}
TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
