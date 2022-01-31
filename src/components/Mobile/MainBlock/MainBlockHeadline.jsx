import MainBlockHeadlineButtons from "components/Mobile/MainBlock/MainBlockHeadlineButtons";
import MainBlockHeadlineClients from "components/Mobile/MainBlock/MainBlockHeadlineClients";
export default function MainBlockHeadline () {
  return (
    <div className="main-block-headline">
      <h1>Provide excellent<br /><span className="highlight">customer</span> service.</h1>
      <h3>Answer more tickets with<br />all-in-one help desk software.</h3>
      <ul className="captions">
        <li>✓ No setup fee</li>
        <li>✓ Customer service 24/7</li>
        <li>✓ No credit card required</li>
        <li>✓ Cancel any time</li>
      </ul>
      <MainBlockHeadlineButtons />
      <MainBlockHeadlineClients />
    </div>
  )
}