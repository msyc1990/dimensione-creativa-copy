import AstecoImage from './assets/stories/asteco.webp';
import HAWCImage from './assets/stories/hawc.webp';
import HPImage from './assets/stories/hp.webp';
import DewelopartImage from './assets/stories/dewelopart.webp';
import NDSImage from './assets/stories/nds.webp';
import NovaIzolaceImage from './assets/stories/nova-izolace.webp';
import OLXImage from './assets/stories/olx.webp';
import PanTabletImage from './assets/stories/pan-tablet.webp';
import PanTabletLandingImage from './assets/stories/pan-tablet-landing.webp';
import PrestamoImage from './assets/stories/prestamo.webp';
import WomanCodeImage from './assets/stories/woman-code.webp';
import WomanCodeSiteImage from './assets/stories/woman-code-site.webp';
import IESGImage from './assets/stories/iiyama-values.webp';
import IStoriesImage from './assets/stories/iiyama-stories.webp';
import IEshareImage from './assets/stories/iiyama-eshare.webp';
import ISignage2Image from './assets/stories/iiyama-iisignage.webp';
import s from './OurStories.module.css';
import { ComponentProps, useState } from 'react';
import { ReactComponent as ArrowIcon } from './assets/arrow.svg';
import { ReactComponent as CarpetIcon } from './assets/carpet.svg';


interface StoryProps {
    image: string;
    type: string;
    title: string;
    client: string;
    scope: string;
    link?: string;
    className: ComponentProps<'div'>['className'];
}

const Story = ({
    image,
    type,
    title,
    client,
    scope,
    className,
    link,
}: StoryProps) => {
    const [hovered, setHovered] = useState(false);
  return (
    <div
        className={`${s.story} ${className}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
    >
        <div className={s.storyThumbnail}>
            <img src={image} alt={title} />
            <div className={s.icon}>
                <a
                    onClick={() => window.open(link)}
                >
                    {hovered ? <ArrowIcon /> : <CarpetIcon />}{' '}
                </a>
            </div>
        </div>

        <div className={s.storyInfo}>
            <p className='text-sm font-bold self-end text-black-author'>
                Typ: {type}
            </p>

            <div className={s.storyDetails}>
                <p className='text-m font-bold text-black-text'>{title}</p>
                <p className='text-2sm text-black-author'>Na zlecenie: {client}</p>
                <p className='text-2sm text-black-author'>{scope}</p>
            </div>
        </div>
    </div>
  )
}

const OurStories = () => {
    const colors: Array<ComponentProps<'div'>['className']> = [
        'bg-story-1',
        'bg-story-2',
        'bg-story-3',
        'bg-story-4',
        'bg-story-5',
        'bg-story-6',
        'bg-story-7',
        'bg-story-8',
        'bg-story-9',
        'bg-story-10',
        'bg-story-11',
        'bg-story-12',
    ];

    const stories = [
        {
          image: IESGImage,
          type: 'WWW',
          client: 'Infini.to',
          scope: 'Wdrożenie i koordynacja',
          title: 'iiyama values',
          link: 'https://iiyama.com/gl_en/esg',
        },
        {
          image: OLXImage,
          type: 'WWW',
          client: 'Infini.to',
          scope: 'Koncepcja, projekt, wdrożenie, wsparcie',
          title: 'Promocje sklepów w jednym miejscu',
          link: 'https://gazetkipromocyjne.olx.pl',
        },
    
        {
          image: HAWCImage,
          type: 'E-commerce',
          client: 'Hawc',
          scope: 'Koncepcja, analiza, projekt, wdrożenie, wsparcie',
          title: 'Serwery dla biznesu',
          link: 'https://hawc-servers.com',
        },
        {
          image: IStoriesImage,
          type: 'WWW',
          client: 'Infini.to',
          scope: 'Design',
          title: 'iiyama stories',
          link: 'https://iiyama.com/gl_en/video-landing',
        },
        {
          image: IEshareImage,
          type: 'WWW',
          client: 'Infini.to',
          scope: 'Wdrożenie i koordynacja',
          title: 'iiyama eShare',
          link: 'https://iiyama.com/gl_en/eshare',
        },
        {
          image: PanTabletImage,
          type: 'WWW',
          client: 'Pan Tablet',
          scope: 'Kompleksowe wsparcie',
          title: 'Platforma edukacyjna dla dzieci',
          link: 'https://pracedzieci.pan-tablet.pl',
        },
        {
          image: PanTabletLandingImage,
          type: 'WWW',
          client: 'Pan Tablet',
          scope: 'Koncepcja, analiza, projekt, wdrożenie, wsparcie',
          title: 'Landing Page do generowania leadów',
          link: 'https://ekstralekcja.pl',
        },
        {
          image: ISignage2Image,
          type: 'WWW',
          client: 'Infini.to',
          scope: 'Wdrożenie i koordynacja',
          title: 'iiyama iiSignage2',
          link: 'https://iiyama.com/gl_en/iisignage2',
        },
        {
          image: NovaIzolaceImage,
          type: 'WWW',
          client: 'Asteco S.R.O.',
          scope: 'Kompleksowe wsparcie projektowo-programistyczne',
          title: 'Wszystko o izolacji domu',
          link: 'https://novaizolace.cz',
        },
        {
          image: NDSImage,
          type: 'WWW',
          client: 'Infini.to',
          scope: 'Wspólny projekt, kompleksowa implementacja, rozwój',
          title: 'Natura Dobrego Sera  - Przepisy',
          link: 'https://naturadobregosera.pl',
        },
    
        {
          image: WomanCodeSiteImage,
          type: 'WWW',
          client: 'Woman Code',
          scope: 'Kompleksowe wsparcie projektowo-programistyczne',
          title: 'Strona produktowa aplikacji',
          link: 'https://woman-code-29171.web.app',
        },
        {
          image: AstecoImage,
          type: 'WWW',
          client: 'Asteco S.R.O.',
          scope: 'Kompleksowe wsparcie projektowo-programistyczne',
          title: 'Strona firmowa + sklep',
          link: 'https://www.canva.com/design/DAFrnuWg3EE/Z2ahqW4wl36sWkQOvTtukg/view?utm_content=DAFrnuWg3EE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#39',
        },
        {
          image: DewelopartImage,
          type: 'WWW',
          client: 'Infini.to',
          scope: 'Wspólny projekt graficzny, wraz z kontynuacją rozwoju portalu',
          title: 'Portal wizerunkowo - sprzedażowy',
          link: 'https://dewelopart.pl',
        },
        {
          image: WomanCodeImage,
          type: 'Aplikacja iOS i Android',
          client: 'Woman Code',
          scope: 'Kompleksowe rozwiązanie: Analityka, projekt, wdrożenie, wsparcie',
          title: 'Recepta na udany związek',
          link: 'https://play.google.com/store/apps/details?id=com.womancode.woman',
        },
        {
          image: HPImage,
          type: 'Druk',
          client: 'Hewlett - Packard Polska',
          scope: 'Koncepcja, projekt, przygotowanie do druku',
          title: 'Materiały reklamowe i key visual',
          link: 'https://www.canva.com/design/DAFrnuWg3EE/Z2ahqW4wl36sWkQOvTtukg/view?utm_content=DAFrnuWg3EE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#49',
        },
        {
          image: PrestamoImage,
          type: 'WWW',
          client: 'Infini.to',
          scope: 'Wspólny projekt graficzny, wraz z kontynuacją rozwoju portalu',
          title: 'Portal wizerunkowo - sprzedażowy',
          link: 'https://prestamosi.es',
        },
    ];

  return (
    <section className={s.container}>
      <div className={s.heading}>
        <div className={s.header}>
          <p className='text-2xm font-semibold md:text-l'>
            Kodem i kolorem piszemy{' '}
            <span className='text-yellow-footer'>wspaniałe</span> historie...
          </p>

          <ul className='text-m list-disc w-full max-w-[350px]'>
            <li>
              <span>Precyzja</span>
            </li>
            <li>
              <span>Nowoczesność</span>
            </li>
            <li>
              <span>Bezpieczeństwo</span>
            </li>
            <li>
              <span>Elastyczność</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={s.stories}>
        {stories.map((story, index) => (
          <Story
            key={index}
            image={story.image}
            title={story.title}
            scope={story.scope}
            type={story.type}
            client={story.client}
            className={colors[index % colors.length]}
            link={story.link}
          />
        ))}
      </div>

      <a
          
        onClick={() => window.open('https://dchouse.pl/prezentacja')}
        target='_blank'
        className={`${s.moreStories} text-sm`}
      >
        Zobacz więcej historii
      </a>
    </section>
  )
}

export default OurStories