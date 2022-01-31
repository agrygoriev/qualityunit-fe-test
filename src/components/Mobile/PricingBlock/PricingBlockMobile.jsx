import PricingBlockHeadline from "components/Mobile/PricingBlock/PricingBlockHeadline";
import PricingBlockTickets from "components/Mobile/PricingBlock/PricingBlockTickets";
export default function PricingBlockMobile () {
  return (
    <section className="pricing-block">
      <PricingBlockHeadline />
      <PricingBlockTickets />
    </section>
  )
}