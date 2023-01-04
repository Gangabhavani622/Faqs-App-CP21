// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-cont">
        <div className="faq-cont">
          <h1 className="heading">FAQs</h1>
          <ul className="faq-item-list">
            {faqsList.map(eachItem => (
              <FaqItem key={eachItem.id} faqItem={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
