import { ReactComponent as ArrowIcon } from './assets/arrow.svg';
import PublicationImg1 from './assets/publication-1.webp';
import PublicationImg2 from './assets/publication-2.webp';
import PublicationImg3 from './assets/publication-3.webp';
import s from './Publications.module.css'

interface PublicationProps {
  image: string;
  description: string;
  link: string;
}

const Publication = ({ image, description, link}: PublicationProps) => {
  return (
    <div className={s.publication} onClick={() => window.open(link, '_blank')}>
      <div className={s.imgCard}>
        <img src={image} />
      </div>
      <div className={s.description}>
        <p>{description}</p>
        <ArrowIcon />
      </div>
    </div>
  );
};

const Publications = () => {
  return (
    <section className={s.container}>
      <p className='font-bold'>
        Zobacz <span className='text-yellow-footer'>najnowsze</span> publikacje
      </p>

      <div className={s.publications}>
        <Publication
          image={PublicationImg3}
          description='Wdrożenia WCAG - Klucz do Dostępności w Sieci.'
          link='https://www.linkedin.com/feed/update/urn:li:activity:7115984054268665856'
        />
        <Publication
          image={PublicationImg1}
          description='Szanujący Geniusz: Jak Wartość Intelektualna Popycha Biznes IT Ku Przyszłości.'
          link='https://www.linkedin.com/feed/update/urn:li:activity:7112714992377880577'
        />
        <Publication
          image={PublicationImg2}
          description='Dimensione Creativa nie zwalnia tempa, kontynuując naszą misję promowania edukacji jako jednej z najwżniejszych wartości.'
          link='https://www.linkedin.com/feed/update/urn:li:activity:7111967576817082368'
        />
      </div>
    </section>
  )
}

export default Publications