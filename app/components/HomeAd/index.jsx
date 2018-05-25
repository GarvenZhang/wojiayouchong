import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

// 获取本地图片
// let img = require('../../static/img/2.png')

class HomeAd extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render () {
    return (
      <div id='home-ad'>
        <h2>最新宝宝</h2>
        <div className='ad-container clear-fix'>
          {this.props.data.map((item, index) => {
            return (
              <div key={index} className='ad-item float-left'>
                <a href={item.link} target='_blank'>
                  <img src={item.img} alt={item.title} />
                </a>
                <p className="item-title">{item.title}</p>
                <p className='item-price'>
                  <span className="price-num">{item.price}</span> 元/只
                </p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default HomeAd
