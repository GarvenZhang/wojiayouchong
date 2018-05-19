import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router-dom'

import './index.css'

class FooterBar extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render () {
    return (
      <footer className='footerbar-wrap'>
        <ul className='footerbar-list'>
          <li className='footerbar-item'>
            <Link to='/moments'>动态</Link>
          </li>
          <li className='footerbar-item'>
            <Link to='/'>商城</Link>
          </li>
          <li className='footerbar-item'>
            <Link to='/play'>直播</Link>
          </li>
          <li className='footerbar-item'>
            <Link to='/me'>我的</Link>
          </li>
        </ul>
      </footer>
    )
  }
}

export default FooterBar
