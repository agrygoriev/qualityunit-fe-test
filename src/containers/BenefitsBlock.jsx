import BenefitsBlockHeadline from 'components/BenefitsBlock/BenefitsBlockHeadline'
import BenefitsBlockNumbers from 'components/BenefitsBlock/BenefitsBlockNumbers'
export default function BenefitsBlock () {
  return (
    <section className='benefits-block'>
      <BenefitsBlockHeadline />
      <BenefitsBlockNumbers />
    </section>
  )
}