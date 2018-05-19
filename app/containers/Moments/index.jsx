import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router-dom'

import FooterBar from '../../components/FooterBar'

import './index.css'

class Moments extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render () {
    return (
      <div className="moments-wrap">
        <iframe className='ifr' src="http://localhost:3000/moments/index.html"></iframe>
        <FooterBar/>
      </div>
    )
  }
}

export default Moments
