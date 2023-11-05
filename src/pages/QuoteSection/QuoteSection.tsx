import { ReactComponent as QuoteImage } from './assets/quote.svg';
import s from './QuoteSection.module.css';
import { useRef } from 'react';

const QuoteSection = () => {
    const refQuote = useRef(null);
  return (
    <section className={s.container} id='end'>
        <div className={s.quoteContainer}>
            <QuoteImage />

            <div className={s.quote}>
                <p className='text-[2.2rem] leading-[2.7rem] font-medium'>
                    Kod z komentarzami piszę w trosce o zdrowie swoje i innych.
                </p>
                <p>
                    <span className='text-[1.8rem] font-medium'>Paweł Trojanowski</span>
                    <br />
                    <span className='text-[1.6rem] font-medium'>Dimensiona Creativa</span>
                </p>
            </div>
        </div>
    </section>
  )
}

export default QuoteSection