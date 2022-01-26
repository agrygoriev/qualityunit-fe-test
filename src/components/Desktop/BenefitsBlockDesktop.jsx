import BenefitsBlockHeadline from 'components/Desktop/BenefitsBlock/BenefitsBlockHeadline'
import BenefitsBlockNumbers from './BenefitsBlock/BenefitsBlockNumbers'
export default function BenefitsBlock () {
  return (
    <section className='benefits-block'>
      <BenefitsBlockHeadline />
      <BenefitsBlockNumbers />
    </section>
  )
}