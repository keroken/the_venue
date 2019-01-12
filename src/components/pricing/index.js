import React, { Component } from 'react';
import MyButton from '../UI/MyButton';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

  state = {
    prices: [100, 150, 250],
    positions: ['Balcony', 'Medium', 'Star'],
    desc: [
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.'
    ],
    linkTo: ['http://ticket-balcony', 'http://ticket-medium', 'http://ticket-star'],
    delay: [500, 0, 500]
  }

  showBoxes = () => (
    this.state.prices.map((box,i)=>(
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">
              {this.state.desc[i]}
            </div>
            <div className="pricing_button">
              <MyButton 
              text="Purchase"
              bck="#ffa800"
              color="#ffffff"
              link={this.state.linkTo[i]}
              />
            </div>
          </div>
        </div>
      </Zoom> 
    ))
  )

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>  
      </div>
    );
  }
}

export default Pricing;