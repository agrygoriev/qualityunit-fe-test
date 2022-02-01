import 'scss/styles.scss';

import MainBlock from 'containers/MainBlock';
import PricingBlock from 'containers/PricingBlock';
import BenefitsBlock from 'containers/BenefitsBlock';

export default function App() {
  return (
    <div className="App">
      <MainBlock />
      <PricingBlock />
      <BenefitsBlock />
    </div>
  );
}