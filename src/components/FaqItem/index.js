// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {showAnswer: false}

  onClickDisplayAnswer = () => {
    this.setState(prevState => ({showAnswer: !prevState.showAnswer}))
  }

  renderPlusOrMinusIcon = () => {
    const {showAnswer} = this.state
    const plusOrMinusIcon = showAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    return plusOrMinusIcon
  }

  render() {
    const {faqItem} = this.props
    const {questionText, answerText} = faqItem
    const {showAnswer} = this.state
    const altText = showAnswer ? 'minus' : 'plus'

    return (
      <li className="faq-container">
        <div className="question-cont">
          <h1 className="question">{questionText}</h1>
          <button
            type="button"
            className="button"
            onClick={this.onClickDisplayAnswer}
          >
            <img src={this.renderPlusOrMinusIcon()} alt={altText} />
          </button>
        </div>
        {showAnswer && (
          <div>
            <hr className="horizontal-line" />{' '}
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
