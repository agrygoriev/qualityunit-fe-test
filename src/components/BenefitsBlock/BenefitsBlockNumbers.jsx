import ButtonGradient from "components/Buttons/ButtonGradient";
export default function BenefitsBlockNumbers () {
  return (
    <div className="benefits-block-numbers">
      <div className="number">
        <div className="number-value"><strong>30%</strong></div>
        <div className="number-text">
          <h4>Generate more revenue</h4>
          <p>Create memorable customer experiences that boost revenue.</p>
        </div>
      </div>
      <div className="number">
        <div className="number-value"><strong>97%</strong></div>
        <div className="number-text">
          <h4>Improve satisfaction</h4>
          <p>Delight your customers with lightning-fast responses.</p>
        </div>
      </div>
      <div className="number">
        <div className="number-value"><strong>16×</strong></div>
        <div className="number-text">
          <h4>Boost customer value</h4>
          <p>Make more sales by keeping your customers loyal to your brand.</p>
        </div>
      </div>
      <ButtonGradient text="Make your business goals a reality" />
    </div>
  )
}
