import MainBlockHeadline from "components/Desktop/MainBlock/MainBlockHeadline";
import MainBlockChat from 'components/Desktop/MainBlock/MainBlockChat';

export default function MainBlock () {
  return (
    <section className='main-block'>
      <MainBlockHeadline />
      <MainBlockChat />
    </section>
  )
}