import BenefitsBlockHeadline from 'components/Mobile/BenefitsBlock/BenefitsBlockHeadline'
import BenefitsBlockNumbers from 'components/Mobile/BenefitsBlock/BenefitsBlockNumbers'
export default function BenefitsBlockMobile () {
  return (
    <section className='benefits-block'>
      <BenefitsBlockHeadline />
      <BenefitsBlockNumbers />
    </section>
  )
}