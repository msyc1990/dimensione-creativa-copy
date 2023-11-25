import Image1 from './assets/image-1.webp';
import Image2 from './assets/image-2.webp';
import Image3 from './assets/image-3.webp';
import Image4 from './assets/image-4.webp';
import Image5 from './assets/image-5.webp';
import Image6 from './assets/image-6.webp';
import Image7 from './assets/image-7.webp';
import Image8 from './assets/image-8.webp';
import Image9 from './assets/image-9.webp';
import Image10 from './assets/image-10.webp';
import s from './Advantages.module.css';

interface Card {
    image: string;
    caption: string;
}

const Advantages = () => {
    const cards: Array<Card | null> = [
        {
            image: Image1,
            caption: 'Zawsze dostajesz więcej niż się spodziewałeś',
          },
        {
            image: Image2,
            caption: 'Doradztwo biznesowe',
          },
        {
            image: Image3,
            caption: 'Szybka reakcja',
          },
        {
            image: Image4,
            caption: 'Autentyczność',
          },
        {
            image: Image5,
            caption: 'Jasne warunki ceny',
          },
        {
            image: Image6,
            caption: 'Dedykowany zespół dopasowany pod obszar',
          },
        {
            image: Image7,
            caption: 'Pełna przejrzystość postępów',
          },
        {
            image: Image8,
            caption: 'Pasja, nie praca',
          },
          null,
        {
            image: Image9,
            caption: 'Lubimy trudne tematy',
          },
        {
            image: Image10,
            caption: 'Elastyczność',
          },
    ];

    const columns: number = window.innerWidth <= 768 ? 2 : 4;

    const columnCards: JSX.Element[][] = Array.from({length: columns}, () => []);

    cards.forEach((card, index) => {
        if(card) {
            columnCards[index % columns].push(
                <div key={index} className={s.card}>
                    <img src={card.image} alt="" />
                    <p className='text-2sm font-bold'>{card.caption}</p>
                </div>
            )
        }
    })
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <p className='text-l md:text-xxl font-bold tracking-[6px]'>
          <span>N</span>A<span>SZ</span>E <span>P</span>R<span>ZE</span>WAG
          <span>I</span>
        </p>

        <div className={s.cards}>
            {columnCards.map((cards, columIndex) => (
                <div key={columIndex} className={s.cardsColumn}>
                    {cards}
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Advantages