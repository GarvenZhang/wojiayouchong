import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router-dom'

import './style.less'

class Category extends React.Component {
    /*
    轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
    即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
    */
  constructor (props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      index: 0
    }
  }
  render () {
    const opt = {
      auto: 2500,
      callback: function (index) {
                // 更新当前轮播图的index
        this.setState({index: index})
      }.bind(this)
    }

    return (
      <div id='home-category'>
        <ReactSwipe swipeOptions={opt}>
          <div className='carousel-item'>
            <ul className='clear-fix'>
              <Link to='/search/taidi'><li className='float-left taidi'>泰迪</li></Link>
              <Link to='/search/jinmao'><li className='float-left jinmao'>金毛</li></Link>
              <Link to='/search/labuladuo'><li className='float-left labuladuo'>拉布拉多</li></Link>
              <Link to='/search/hashiqi'><li className='float-left hashiqi'>哈士奇</li></Link>
              <Link to='/search/bianjingmuyangquan'><li className='float-left bianjingmuyangquan'>边境牧羊犬</li></Link>
              <Link to='/search/bixiong'><li className='float-left bixiong'>比熊</li></Link>
              <Link to='/search/alasijia'><li className='float-left alasijia'>阿拉斯加</li></Link>
              <Link to='/search/kejiquan'><li className='float-left kejiquan'>柯基</li></Link>
              <Link to='/search/duanmao'><li className='float-left duanmao'>美国短毛猫</li></Link>
              <Link to='/search/lanmao'><li className='float-left lanmao'>英国短毛猫</li></Link>
              <Link to='/search/jiafeimao'><li className='float-left jiafeimao'>加菲猫</li></Link>
              <Link to='/search/zheermao'><li className='float-left zheermao'>布偶猫</li></Link>

            </ul>
          </div>
          {/*<div className='carousel-item'>*/}
            {/*<ul className='clear-fix'>*/}

            {/*</ul>*/}
          {/*</div>*/}
        </ReactSwipe>
        <div className='index-container'>
          <ul>
            <li className={this.state.index === 0 ? 'selected' : ''} />
            {/*<li className={this.state.index === 1 ? 'selected' : ''} />*/}
            {/*<li className={this.state.index === 2 ? 'selected' : ''} />*/}
          </ul>
        </div>
      </div>
    )
  }
}

export default Category
