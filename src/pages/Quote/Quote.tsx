import { ReactComponent as QuoteImage } from './assets/quote.svg';
import s from './Quote.module.css';


interface QuoteProps {
    quote: string;
    author: string;
    position: string;
    className?: string;
}

const Quote = ({ quote, author, position, className='' }: QuoteProps) => {
  return (
    <div className={`${s.container} ${className}`}>
        <QuoteImage className='shrink-0' />

        <div className={s.quote}>
            <p className='text-3sm font-medium'>{quote}</p>

            <p>
                <span className='text-1.5sm font-medium'>{author}</span>
                <br />
                <span className='text-sm'>{position}</span>
            </p>
        </div>
    </div>
  )
}

export default Quote