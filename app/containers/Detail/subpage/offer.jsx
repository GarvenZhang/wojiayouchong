import React, { Component } from 'react'

class Offer extends Component {
  constructor (props) {
    super(props)

  }

  render () {

    return (
      <ul className="offer-list">
        <li className="offer-item">
          <input id='offer-01' type="checkbox" checked readOnly/>
          <label htmlFor="offer-01">单品打折</label>
        </li>
        <li className="offer-item">
          <input id='offer-02' type="checkbox" checked readOnly/>
          <label htmlFor="offer-02">满额送单品</label>
        </li>
        <li className="offer-item">
          <input id='offer-03' type="checkbox" checked readOnly/>
          <label htmlFor="offer-03">满额送券</label>
        </li>
      </ul>
    )
  }
}

export default Offer
