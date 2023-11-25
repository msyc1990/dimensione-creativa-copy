import Slide1 from './assets/slide-1.webp';
import Slide2 from './assets/slide-2.webp';
import Slide3 from './assets/slide-3.webp';
import Slide4 from './assets/slide-4.webp';
import { useState } from 'react';
import s from './BuildingProcess.module.css';

const BuildingProcess = () => {
    const [currentSlide, setcurrentSlide] = useState(0)
    const slides = [
        {
          image: Slide1,
          title: 'Tworzenie i optymalizacja Twoich produktów',
          description:
            'Nie ważne, czy marzysz o nowym produkcie, czy chcesz unowocześnić istniejący - jesteśmy tutaj, by wspiąć się na wyżyny Twoich potrzeb i zapewnić Ci wsparcie.',
        },
        {
          image: Slide2,
          title: 'Analiza i kreatywność',
          description:
            'Przekształcamy idee w konkretne, dopasowane do potrzeb rozwiązania. Planujemy i oceniamy unikalne cechy produktu, co pozwala nam zrozumieć cele biznesowe, unikać początkowych błędów i dostosować idealne rozwiązania i zakres działań.',
        },
        {
          image: Slide3,
          title: 'Proces tworzenia',
          description:
            'Względem wyzwań i w pełni zrozumiałym użytkownikiem, z pomysłem na rozwiązanie, tworzymy unikatowe doświadczenia użytkownika dopasowane do konkretnej koncepcji. Nasza wszechstronność, rozpoczynając od strategii i kończąc na development, pozwala nam rozwiązywać rzeczywiste problemy, ulepszać kluczowe aspekty biznesu i marketingu oraz kreować piękno.',
        },
        {
          image: Slide4,
          title: 'Proces doskonalenia',
          description:
            'Wszystkie nasze projekty przechodzą przez rygorystyczny proces doskonalenia. Interfejsy i produkty cyfrowe są poddawane starannemu wdrożeniu, zapewniając szybkość, bezpieczeństwo i estetykę. Kreacje marketingowe, reklamowe, identyfikacyjne oraz technologiczne przechodzą ścisłe testy, aby precyzyjnie dopasować się do Twoich celów biznesowych.',
        },
      ];
      const length: number = slides.length;

      const handleSlide = () => {
        setcurrentSlide(currentSlide === length -1 ? 0 : currentSlide + 1);
      }
  return (
    <div className={s.container}>
        <div className={s.heading}>
            <div className={s.header}>
                <p className='text-l font-bold max-w-[500px]'>
                    Proces <span className='text-yellow-footer'>budowania</span>
                </p>

                <p className='text-1.5sm max-w-[450px] mr-auto ml-[5rem]'>
                    Każdy projekt jest niepowtarzalny i ma swoją własną skalę oraz
                    złożoność. Jednak bez względu na jego charakter, zawsze wkładamy
                    pełne zaangażowanie w osiągnięcie sukcesu.
                </p>
            </div>
        </div>

        <div className={s.slider}>
            <div className={s.image}>
                {slides.map((slide, index) =>(
                    <div
                        className={index === currentSlide ? `${s.slide} ${s.active}`: s.slide }
                        key={index}
                    >
                        {index === currentSlide && (
                            <img src={slide.image} alt={slide.title} onClick={handleSlide}/>
                        )}
                    </div>
                ))}
            </div>

            <div className={s.content}>
                <p className='text-l md:text-xxl font-bold opacity-[30%]'>
                    {String(currentSlide + 1).padStart(2, '0')}/
                    {String(slides.length).padStart(2, '0')}
                </p>
                <div className='flex flex-col gap-[1rem] max-w-[600px] self-center'>
                    <p className='text-xm font-bold'>{slides[currentSlide].title}</p>
                    <p className='text-m'>{slides[currentSlide].description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BuildingProcess