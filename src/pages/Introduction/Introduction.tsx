import image from './assets/image.webp';
import s from './Introduction.module.css';

const Introduction = () => {
  return (
    <section className={s.container}>
        <div className={s.contentContainer}>
            <p className={s.header}>
                Projektujemy i&nbsp;budujemy{' '}
                <span className='text-yellow-base'>cyfrowe</span> historie...
            </p>

            <img className={s.image} src={image} alt="Image" />

            <div className={s.content}>
                <p>
                    Łączymy wiedzę biznesową z ludzkim podejściem, tworząc unikalne doświadczenia dla naszych klientów.
                    <br />
                    <br />
                    Nasza pasja tkwi w rozwiązywaniu trudnych i skomplikowanych
                    problemów, ponieważ wiemy, że satysfakcja płynąca z ich rozwiązania jest nieoceniona. Nie boimy się wyzwań, a wręcz je uwielbiamy.
                    <br />
                    <br />
                    Naszym priorytetem jest zapewnienie pozytywnych wrażeń użytkownika związanych z produktme lub usługą naszych klientów. Jesteśmy przekonani, że każdy detal ma znaczenie, dlatego staranie projektujemy i tworzymy, aby dostarczyć wyjątkowe doświadczenia, które przyciągają uwagę i wciągają użytkowników
                </p>

                <button className={s.btn}>
                    Uruchom swój pomysł
                </button>
            </div>
        </div>
    </section>
  )
}

export default Introduction