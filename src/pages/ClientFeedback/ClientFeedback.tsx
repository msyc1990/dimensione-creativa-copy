import FeedbackImage from './assets/feedback.webp';
import s from './ClientFeedback.module.css';
import { useState } from 'react';

const ClientFeedback = () => {
    const feedbacks = [
        {
            id: 1,
            author: 'Dominik Krawczyk',
            company: 'Pan Tablet',
            feedback: [
                'Firma Pan Tablet Sp. z o.o. współpracuje z firmą Dimensione Creativa od 24.06.2022',
                <br />,
                <br />,
                'W tym czasie odpowiadała za wykonanie platformy edukacyjnej z pracami uczniów, palikacji do wykonywania zjęć oraz Landing Page.',
                'Dimensione Creativa sumienie wywiązało sie z obowiązków',
                <br />,
                <br />,
                'Jej działania charakteryzowały się elastycznością, profesjonalizmem i kompleksowym podejściem do piwierzonych działań. Doświadczenie i kwalifikacje pracowników przełożyły sie na efekty, które całkowicie przerosły nasze oczekiwania.',
                <br />,
                <br />,
                'Nasza wsółpraca przebiegła sprawnie i z dużym zaangażowaniem, dlatego z całym przekonaniem rekomendujemy Dimensione Creativa jako specjalistę w swojej branży oraz rzetelnego i godnego zaufania pratnera biznesowego.',
            ],
        },
        {
            id: 2,
            author: 'Dariusz Stachura',
            company: 'D-R-O',
            feedback: [
                'W imieniu firmy D-R-O SP. z o.o. Sp. k. chcielibyśmy podziękować pracownikowm firmy Dimensione Creativa Sp. z o.o. za zangażowanie w przygotowanie oraz realizacje aplikacji, która miała na celu zautomatyzowanie procesów księgowych w programie WF MAG. Dzięki funkcjonalnym rozwiązaniom aplikacji pozwoliła nam na znaczącą optymalizację kosztów oraz czasu paracy.',
                <br />,
                <br />,
                'Dimensiona Creativa Sp. z o.o. wykazała się ogromnym doświadczeniem i profesjonalizmem, a świadczona usługa była wykonana należycie. Zespól Dimensiona Creativa Sp. z o.o. wypełnia powierzone zadania rzetelnie i z zaangażowaniem. Pracownicy firmy nawet złożone problemy rozwiązują sprawnie i z najwyższą starannością. Istotnymi aspektami są również indywidualne podejście do klienta, znamkomita komunikacja oraz elastyczność.',
                <br />,
                <br />,
                'Bez zawahania możęmy polecić Dimensiona Creativa Sp. z o.o. jako sprawdzoną i kompetentną firmę, łaczącą profesjonalizm oraz pasję w swojej pracy.',
            ],
        },
        {
            id: 3,
            author: 'Wiktor Weremiuk',
            company: 'Przekludzki',
            feedback: [
              'Firma przeprowadzkowa PRZEKLUDZKI miała okazje współpracować z panem Arturem z Dimensione Creativa przy zaplanowaniu i wycenie, a w przyszłości wykonaniu aplikacji do zarządzania firmy transportowej.',
              <br />,
              <br />,
              'Przyszedłem do nich z polecenia które otrzymałem od przyjaciela i było bardzo trafne.',
              <br />,
              <br />,
              'Pan Artur świetnie prowadzi projekt, nie podchodzi do tego zadania systemowo - wykonać szybko, otrzymać pieniądze i kolejny klient.',
              <br />,
              <br />,
              'Do każdego klienta podchodzi na spokojnie i indywidualnie, bardzo spodobała mi się jego uwaga na detale i mogę stwierdzić, że ma dobry wyrobiony gust graficzny.',
              <br />,
              <br />,
              'Szczerzę mogę polecić tą firmę.',
            ],
        },
        {
            id: 4,
            author: 'Artur Górecki',
            company: 'Śląskie Centrum Stolarskie',
            feedback: [
              'Firma Dimensione Creativa Sp. z o.o. przygotowała na nasze zlecenie stronę internetową oraz sklep internetowy, które są w pełni zgodne z naszymi oczekiwaniami i spotkały się z bardzo dużym zainteresowaniem naszych klientów. Działania te pozwoliły nam na zwiększenie świadomości naszej marki oraz wyrobów na rynku lokalnym.',
              <br />,
              <br />,
              'Cały zespół Dimensione Creativa Sp. z o.o. wykazał się ogromnym doświadczeniem i profesjonalizmem, a usługa została wykonana należycie oraz kompleksowo. Dimensione Creativa Sp. z o.o. stanęła na wysokości zadania – sporządzona strona i sklep internetowy cechują się przejrzystym layoutem, a materiały reklamowe w formie banerów oraz ulotek prostotą i elegancją.',
              <br />,
              <br />,
              'Uważamy, że Dimensione Creativa Sp. z o.o. wyróżnia się na rynku i z przyjemnością rekomendujemy z nią współpracę.',
            ],           
        },
        {
            id: 5,
            author: 'Artur Książek',
            company: 'Woman Code',
            feedback: [
              'W imieniu spółki Woman Code Sp. z o.o. będącej właścicielem aplikacji Woman Code pragnę zarekomendować współpracę z firmą Dimensione Creativa Sp. z o.o., której powierzyliśmy stworzenie naszego autorskiego pomysłu.',
              <br />,
              <br />,
              'Dimensione Creativa Sp. z o.o. to doświadczony i profesjonalny zespół, który fachowo wykorzystuje swoją wiedzę i umiejętności, tudzież innowacyjne rozwiązania. Ważnymi aspektami współpracy, które należy podkreślić są: wzorcowa komunikacja z pracownikami firmy, szybkie i trafne decyzje w celu rozwiązywania problemów, a także rzetelność i dbałość w zakresie świadczonych usług.',
              <br />,
              <br />,
              'W okresie naszej kooperacji, trwającej od początku marca 2021 roku, firma Dimensione Creativa Sp. z o.o. z ogromnym zaangażowaniem wykonywała powierzone jej zadania. Dimensione Creativa Sp. z o.o. była odpowiedzialna za:',
              <br />,
              <br />,
              <li>identyfikację wizualną oraz logo,</li>,
              <li>design i UX strony www oraz aplikacji,</li>,
              <li>stworzenie i publikacja strony www,</li>,
              <li>
                stworzenie i publikacja aplikacji na platformach Android i iOS,
              </li>,
              <li>przygotowanie materiałów reklamowych na social media.</li>,
              <br />,
              'Podsumowując naszą współpracę, uważam firmę Dimensione Creativa Sp. z o.o. za godnego zaufania partnera, dającego gwarancję najwyższej jakości świadczonych usług w branży IT.',
            ],           
        },
    ];

    const [activeComment, setActiveComment] = useState(0);

    const handleCommentClick = (index:number) => {
        setActiveComment(index);
    }
  return (
    <section className={s.container}>
        <div className={s.heading}>
            <p className='font-semibold'>
                Co piszą o nas klienci?
            </p>
        </div>

        <div className={s.feedback}>
            <img
                className='max-w-[320px] w-[80%] -rotate-[30deg]' 
                src={FeedbackImage} 
                alt="FeedbackImage" 
            />

            <div className={s.feedbackClients}>
                <div className={s.feedbackSelection}>
                    {feedbacks.map((comment, index) => (
                        <p
                            key={comment.id}
                            className={activeComment === index ? `${s.active}` : ''}
                            onClick={() => handleCommentClick(index)}
                        >
                            {comment.id}
                        </p>
                    ))}
                </div>

                <div className={s.feedbackDetails}>
                    <p>
                        {feedbacks[activeComment].feedback}
                    </p>
                    <p>
                        <span className='font-bold text-black-author'>
                            {feedbacks[activeComment].author}
                        </span>
                        <span className='text-purple-author'>
                            {feedbacks[activeComment].company}
                        </span>
                        
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ClientFeedback