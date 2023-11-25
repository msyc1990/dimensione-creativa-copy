import { Fragment, ReactNode, useState } from 'react';
import { ReactComponent as WriteIcon } from './assets/write.svg';
import { ReactComponent as NotSelectedIcon } from './assets/not-selected.svg';
import { ReactComponent as SelectedIcon } from './assets/selected.svg';
import s from './Services.module.css';


interface ServiceProps {
    index: string;
    description: Array<ReactNode>;
    title: string;
    scope: Array<string>;
}
const Service = ({index, description, title, scope}: ServiceProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${s.service} ${hovered ? s.hovered : 'text-black-disabled'}`}
    >
        <p className='text-sm font-medium self-center'>{index}</p>
        <p className='text-sm'>
            {description.map((x, index) => (
                <Fragment key={index}>{x}</Fragment>
            ))}
        </p>

        <div className={s.serviceSummary}>
            <p className='text-xm md:text-xxm'>
                {title}
            </p>
            <ul className='list-disc list-inside text-1.5sm'>
                {scope.map((x,index) => (
                    <li key={index}>{x}</li>
                ))}
            </ul>
        </div>

        {hovered ? <SelectedIcon /> : <NotSelectedIcon />}
    </div>
  )
}


const Services = () => {
    const services = [
        {
          title: 'Tworzenie Twoich wizji - od koncepcji do sukcesu',
          description: [
            'W Dimensione Creativa naszym celem jest wspieranie Cię w przekształcaniu Twoich pomysłów na produkty w rzeczywistość. Rozumiemy, że proces wprowadzania nowego produktu na rynek jest pełen wyzwań, ale także pełen ekscytacji.',
            <br />,
            <br />,
            'Nasza rola polega na tym, abyś nie czuł się sam w tym procesie. Pomagamy Ci w planowaniu i ocenie każdego aspektu Twojego pomysłu, począwszy od koncepcji aż do momentu wprowadzenia produktu na rynek. Naszym celem jest zapewnienie, że Twój produkt jest gotowy na sukces.',
            <br />,
            <br />,
            'Działamy z wizjonerskim podejściem i dążeniem do doskonałości. Możesz nam zaufać, że wspólnie z nami urzeczywistnisz swoje pomysły na produkty. Tworzymy przyszłość produktów razem z Tobą.',
          ],
          scope: [
            'Audyt produktu',
            'Określanie zakresu',
            'Recenzja doświadczeń użytkownika',
            'Walidacja pomysłu',
            'Dokumentacja',
          ],
        },
        {
          title: 'Tworzenie wyjątkowych doświadczeń',
          description: [
            'Wierzymy, że doskonały projekt produktu to więcej niż tylko estetyka - to tworzenie inspirujących doświadczeń użytkowników, które nie tylko rozwiązują realne problemy, ale również zwiększają efektywność biznesową.',
            <br />,
            <br />,
            'Nasze podejście opiera się na połączeniu głębokiej wiedzy technicznej i biznesowej, aby tworzyć interfejsy, które nie tylko przyciągają wzrok, ale także dostarczają naszym klientom realną wartość.',
            <br />,
            <br />,
            'Skupiamy się na badaniach i dbałości o najmniejsze detale. Możesz nam zaufać, że dostarczymy interfejsy użytkownika, które zachwycą Twoich użytkowników i pomogą osiągnąć Twoje cele biznesowe.',
          ],
          scope: [
            'Strategia biznesowo - marketingowa',
            'Projektowanie doświadczeń użytkownika (UX)',
            'Projektowane interfejsów użytkownika (UI)',
            'Branding',
            'Materiały reklamowe',
            'Landing Page, Serwisy i strony www',
          ],
        },
        {
          title: 'Strony i serwisy www',
          description: [
            'Strona internetowa to potężne narzędzie marketingowe i komunikacyjne, które może pomóc  uzyskaniu wiarygodności, zwiększeniu zaangażowania i generowaniu potencjalnych klientów. Dobrze zaprojektowana może przekazywać historię Twojej marki, prezentować Twoje produkty lub usługi oraz zapewniać bezproblemową obsługę użytkownika, która angażuje i przekształca odwiedzających w klientów.',
            <br />,
            <br />,
            'Niezależnie od tego, czy jesteś małą firmą, która chce zaistnieć w Internecie, czy dużym przedsiębiorstwem, dopasowujemy obszar do potrzeb. Nasze strony angażują i przekształcają odwiedzających w lojalnych klientów.',
          ],
          scope: [
            'E-commerce',
            'Aplikacje internetowe',
            'Dedykowane dodatki do strony i sklepu',
            'Responsywne narzędzia cyfrowe',
            'Interakcyjne animacje produktu',
            'Rozwój i wsparcie witryny',
            'Projektowanie pod kątem UX i CX',
            'Audyt stron i serwisów',
            'Naprawa błędów',
          ],
        },
        {
          title: 'Rewolucyjne audyty witryny',
          description: [
            'Audyt witryny internetowej to dogłębne badanie ogólnej wydajności witryny internetowej i doświadczenia użytkownika. Celem audytu witryny jest wykrycie wszelkich wad, które mogą ograniczać zdolność witryny do przyciągania i zatrzymywania odwiedzających, takich jak powolny czas ładowania, niedziałające linki, słaba optymalizacja mobilna i przestarzałe treści. Opieramy się na badaniach.',
            <br />,
            <br />,
            'Audyt witryny internetowej nie tylko wykrywa problemy, ale także służy jako drogowskaz do poprawy. Oferujemy wskazówki dotyczące przebudowy witryny, tworzenia treści i strategii marketingu cyfrowego, co przekłada się na zwiększony ruch i konwersje.',
          ],
          scope: [
            'Analiza Strony Internetowej',
            'Analiza Treści',
            'Badania SEO',
            'Analiza Danych Demograficznych',
            'Testy użytkownika',
            'Ocena Konwersji',
            'Raport i Rekomendacje',
          ],
        },
        {
          title: 'Niezapomniane tożsamości',
          description: [
            'Rozwój marki to proces tworzenia niezapomnianej tożsamości firmy, produktu lub usługi w umysłach konsumentów. Obejmuje on budowanie spójnej marki, komunikatów i stylu wizualnego, a także zapewnienie jednolitego doświadczenia klienta na wszystkich płaszczyznach.',
            <br />,
            <br />,
            'Naszym celem jest stworzenie silnej reputacji i lojalnej bazy klientów, co prowadzi do zwiększenia świadomości marki, wzrostu zaufania klientów i sukcesu firmy. Skuteczny rozwój marki pozwala firmom wyróżnić się spośród konkurencji, przekazać swoją wartość i budować głębokie relacje emocjonalne z konsumentami.',
          ],
          scope: [
            'Strategia biznesowo - marketingowa',
            'Identyfikacja wizualna',
            'Materiały reklamowe, które sprzedają',
            'Marketing wizerunkowy',
            'Wsparcie w Social Media',
            'Produkcja Video i Foto',
          ],
        },
        {
          title: 'Aplikacje mobilne i webowe',
          description: [
            'Skupiamy się na tworzeniu interfejsów użytkownika, które są nie tylko przyjazne, ale także intuicyjne. To wymaga pełnego zrozumienia koncepcji projektowych i pozostawania na bieżąco z najnowszymi technologiami w branży.',
            <br />,
            <br />,
            'Nasza pasja do dbałości o szczegóły i rozległych badań gwarantuje, że nasze aplikacje łączą w sobie estetykę i funkcjonalność. Końcowym efektem jest gotowe rozwiązanie, które jest przyjazne dla użytkownika i wspiera cele Twojej firmy.',
            <br />,
            <br />,
            'W dobie rosnącej popularności urządzeń mobilnych inwestycja w rozwój mobilny staje się kluczowa. Pomaga to poszerzyć zasięg Twojego biznesu online i poprawić ogólne postrzeganie marki. Nasze skupienie na nowoczesnym wzornictwie, użyteczności i łatwości obsługi wyróżnia Twoją firmę i odzwierciedla nasze dążenie do doskonałości.',
          ],
          scope: [
            'Analityka biznesowa',
            'Tworzenie dokumentacji przed i po projektowej',
            'Procesy MVP',
            'Faza Discovery i walidacja pomysłu',
            'Projektowanie doświadczeń użytkownika',
            'Projektowanie interfejsów użytkownika',
            'Dobór technologii do potrzeb',
            'Produkcja i wdrożenie rozwiązań',
            'Wsparcie i rozwój produktu',
            'Konsultacje i audyt produktu',
          ],
        },
        {
          title: 'Dedykowane oprogramowanie',
          description: [
            'Oprogramowanie dedykowane to kluczowa różnica w porównaniu do ogólnych rozwiązań. Nasza koncentracja na rozwiązywaniu konkretnych potrzeb i problemów jest efektywna i prosta. Tworzymy je z myślą o określonej firmie, dziale lub osobie, dostarczając spersonalizowane rozwiązania idealnie dopasowane do ich unikalnych potrzeb.',
            <br />,
            <br />,
            'Oprogramowanie dedykowane wyprzedza oprogramowanie ogólnego zastosowania pod względem wydajności i efektywności. Może również integrować się z innymi systemami, usprawniając ogólny przepływ pracy.',
            <br />,
            <br />,
            'Nasze rozwiązania pozwalają firmom pewnie kierować się ku swoim głównym celom, ponieważ każde unikalne zapotrzebowanie jest przez nas spełniane.',
          ],
          scope: [
            'SaaS',
            'Automatyzacje procesów',
            'Optymalizacje działań',
            'Optymalizacja zasobów ludzkich',
            'Analiza i przetwarzanie danych',
            'Dopasowywanie rozwiązań do potrzeb',
            'Wsparcie i rozwój',
            'Testy i szkolenia',
          ],
        },
        {
          title: 'Wsparcie i rozwój',
          description: [
            'Nasz zespół specjalistów koncentruje się na identyfikacji i rozwiązywaniu wszelkich problemów, które mogą wpłynąć na działanie Twoich produktów. Niezależnie od tego, czy są to błędy techniczne, czy wyzwania marketingowe, jesteśmy przygotowani, aby działać szybko i skutecznie.',
            <br />,
            <br />,
            'Dodatkowo, nasze umiejętności w zakresie dogłębnej analizy działań marketingowych pozwalają nam nie tylko napędzać sprzedaż, ale także budować Twoją markę. Bezpieczeństwo i wydajność Twoich stron internetowych i aplikacji są naszym priorytetem, a my gwarantujemy kompleksowe wsparcie w tych obszarach.',
            <br />,
            <br />,
            'Nasza pasja do doskonałości jest widoczna w starannie opracowywanej i aktualizowanej dokumentacji, która zapewnia niezawodność Twojego biznesu przez cały czas.',
          ],
          scope: [
            'Analiza i definiowanie błędów produktu',
            'Analiza i rozwój działań strategiczno - marketingowych',
            'Wsparcie bezpieczeństwa i działania stron internetowych oraz aplikacji',
            'Tworzenie i aktualizacja dokumentacji',
            'Wsparcie projektowe',
            'Aktualizacje i rozwój aplikacji',
          ],
        },
        {
          title: 'Nasza wizja video i foto - to więcej niż tylko obraz',
          description: [
            'W naszym podejściu do kompleksowej obsługi video, zapewniamy nie tylko wysokiej jakości treści wideo, ale także tworzymy angażujące strategie, które przekształcają video w potężne narzędzie marketingowe.',
            <br />,
            <br />,
            'Dzięki naszym usługom video możesz usprawnić procesy wewnętrzne, takie jak szkolenia pracowników, skutecznie edukować klientów przed zakupem produktów lub usług, co znacznie oszczędza czas pracowników handlowych. Ponadto, możesz wzmocnić pozycję swojego e-commerce w wynikach wyszukiwania Google oraz nawiązać nowe strategiczne partnerstwa biznesowe.',
            <br />,
            <br />,
            'Warto również podkreślić, że nasze rozwiązania video wspierają praktyki proekologiczne, redukując niepotrzebne dokumenty i instrukcje w firmie, co ma pozytywny wpływ na środowisko.',
          ],
          scope: [
            'Video reklamowe',
            'Transmisje video',
            'Instrukcje obsługi produktów',
            'Relacje z targów i eventów',
            'Video oferty',
            'Video podcasty',
            'Tworzenie kanałów YouTube',
            'Tworzenie rolek na socialmedia',
            'Obsługa fotograficzna',
          ],
        },
    ];   
  return (
    <section className={s.container}>
        <p className='text-xm font font-medium text-black-text'>
            Gdybyśmy mieli wszystko opisać...
        </p>

        <div className={s.services}>
            {services.map((service, index) => (
                <Service
                    key={index}
                    index={String(index + 1).padStart(2, '0')}
                    description={service.description}
                    title={service.title}
                    scope={service.scope}
                />
            ))}
        </div>

        <div className={s.writeStory}>
            <p className='text-black-text text-sm font-bold tracking-[0.8px] uppercase'>
                Napiszemy razem tę historię
            </p>
            <WriteIcon />
        </div>
    </section>
  )
}

export default Services