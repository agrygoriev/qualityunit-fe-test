import DidYouKnowImage from 'assets/Did-you-know.svg';
export default function BenefitsBlockHeadline () {
  return (
    <div className="benefits-block-headline">
      <p className="tag">Pioneering software</p>
      <h2>Did you know?</h2>
      <p>
      Established in 2006, LiveAgent was the first solution on the market to offer live chat and help desk capabilities. As of 2021, LiveAgent is the best rated and most reviewed help desk solution on the market, serving over 150 million users and 40,000 businesses worldwide.
      </p>
      <div className="picture">
        <img src={DidYouKnowImage} alt="Did you know?" />
      </div>
    </div>
  )
}