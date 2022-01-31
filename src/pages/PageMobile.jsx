import 'scss/mobile/page-mobile.scss';
import MainBlockHeadline from 'components/Mobile/MainBlock/MainBlockHeadline';
import PricingBlockMobile from 'components/Mobile/PricingBlock/PricingBlockMobile';
import BenefitsBlockMobile from 'components/Mobile/BenefitsBlock/BenefitsBlockMobile';
export default function PageMobile () {
  return (
    <>
      <MainBlockHeadline />
      <PricingBlockMobile />
      <BenefitsBlockMobile />
    </>
  )
}