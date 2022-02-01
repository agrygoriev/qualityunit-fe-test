import PricingBlockHeadline from "components/PricingBlock/PricingBlockHeadline";
import PricingBlockTickets from "components/PricingBlock/PricingBlockTickets";
export default function PricingBlock () {
  return (
    <section className="pricing-block">
      <PricingBlockHeadline />
      <PricingBlockTickets />
    </section>
  )
}