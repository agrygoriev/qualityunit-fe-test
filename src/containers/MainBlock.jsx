import MainBlockHeadline from "components/MainBlock/MainBlockHeadline";
import MainBlockChat from 'components/MainBlock/MainBlockChat';

export default function MainBlock () {
  return (
    <section className='main-block'>
      <MainBlockHeadline />
      <MainBlockChat />
    </section>
  )
}