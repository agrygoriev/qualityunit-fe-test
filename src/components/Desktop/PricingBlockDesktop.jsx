import PricingBlockHeadline from "components/Desktop/PricingBlock/PricingBlockHeadline";
import PricingBlockTickets from "components/Desktop/PricingBlock/PricingBlockTickets";
export default function PricingBlock () {
  return (
    <section className="pricing-block">
      <PricingBlockHeadline />
      <PricingBlockTickets />
    </section>
  )
}