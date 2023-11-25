import { ReactComponent as Circles } from './assets/circles.svg';
import { ReactComponent as SignatureIcon } from './assets/signature.svg';
import { ReactComponent as SystemInformationIcon } from './assets/system-information.svg';
import { ReactComponent as TrustIcon } from './assets/trust.svg';
import { ReactComponent as LearningIcon } from './assets/learning.svg';
import s from './SolutionCreation.module.css';

const SolutionCreation = () => {
    const points = [
        {
          caption:
            'Nie ograniczamy się jedynie do realizacji Twoich zamówień. Wyróżniamy się jakość odwagą, ciekawością i odpowiedzialnością, tworząc propozycje, które przekraczają Twoje oczekiwania.',
          icon: <SignatureIcon />,
          iconClassName: '-bottom-[2rem] -left-[8rem]',
        },
        {
          caption:
            'Z dumą świętujemy nasze wspólne sukcesy, lecz nie opuszczamy wzroku z ambitnymi celami. Wciąż poszerzamy nasze horyzonty, dostarczając zawsze najnowocześniejsze rozwiązania.',
          icon: <SystemInformationIcon />,
          iconClassName: '-top-[6rem] -left-[6rem]',
        },
        {
          caption:
            'Ukoronowaniem naszej kultury jest głębokie zrozumienie klienta i jego potrzeb. Przekraczamy granice możliwości, nieustannie poszerzając horyzonty wiedzy i doświadczenia. To te wartości stanowią fundament naszej działalności.',
          icon: <TrustIcon />,
          iconClassName: 'top-[calc(50%-7rem)] -left-[8rem]',
        },
        {
          caption:
            'Przekonani jesteśmy, że kluczem do sukcesu są ludzie. Dlatego nie tylko rozwijamy naszą wiedzę w danej dziedzinie, ale także pogłębiamy nasze zrozumienie drugiego człowieka. To nasza tajemnica sukcesu.',
          icon: <LearningIcon />,
          iconClassName: '-top-[7rem] left-[5rem]',
        },
      ];    
  return (
    <div className={s.container}>
        <Circles className={s.circles} />
        <div className={`${s.gradient}`}></div>
        <div className={`${s.gradient}`}></div>

        <div className={s.heading}>
            <div className={s.header}>
                <p className='text-2xm  md:text-l font-bold max-w-[1000px]'>
                    Kształtowanie pomysłów i wartości{' '}
                    <span className='text-yellow-footer'>
                        do tworzenia skutecznego rozwiązania
                    </span>
                </p>
            </div>
        </div>

        <div className={s.points}>
            {points.map((point, index) => (
                <div className={s.point} key={index}>
                    <div className={`${s.pointIcon} ${point.iconClassName}`}>
                        {point.icon}
                    </div>
                    <p className='text-2sm max-w-[500px]'>
                        {point.caption}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SolutionCreation