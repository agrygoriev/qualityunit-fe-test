import 'scss/desktop/page-desktop.scss';
import MainBlockDesktop from 'components/Desktop/MainBlockDesktop';
import PricingBlockDesktop from 'components/Desktop/PricingBlockDesktop';
import BenefitsBlockDesktop from 'components/Desktop/BenefitsBlockDesktop';

export default function PageDesktop() {
  return (
    <>
      <MainBlockDesktop />
      <PricingBlockDesktop />
      <BenefitsBlockDesktop />
    </>
  )
}