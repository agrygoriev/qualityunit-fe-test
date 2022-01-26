import 'scss/styles.scss';
import useWindowSize from 'utils/useWindowSize';
import MainBlockDesktop from 'components/Desktop/MainBlockDesktop';
import PricingBlockDesktop from 'components/Desktop/PricingBlockDesktop';
import BenefitsBlockDesktop from 'components/Desktop/BenefitsBlockDesktop';

function App() {
  const { width } = useWindowSize();
  return (
    <div className="App">
      { width > 1180 && (
        <>
          <MainBlockDesktop />
          <PricingBlockDesktop />
          <BenefitsBlockDesktop />
        </>
      )}
    </div>
  );
}

export default App;