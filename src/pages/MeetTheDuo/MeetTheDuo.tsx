import PawelImage from './assets/pawel.webp';
import ArturImage from './assets/artur.webp';
import { ReactComponent as DevIcon } from './assets/dev.svg';
import { ReactComponent as DesignIcon } from './assets/design.svg';
import { ReactComponent as LinkedInIcon } from './assets/linkedin.svg';
import { ReactComponent as ArrowIcon } from './assets/arrow.svg';
import { ReactNode } from 'react';
import s from './MeetTheDuo.module.css';

interface PersonProps {
    image: string;
    fullName: string;
    qualities: Array<string>;
    linkedInUrl: string;
    icon: ReactNode;
    reverse?: boolean;
}

const Person = ({
    image,
    fullName,
    qualities,
    linkedInUrl,
    icon,
    reverse = false,
}: PersonProps) => {
    return (
        <div className={s.person}>
            <img
                className={`${s.image} ${reverse ? s.reverse : ''}`} 
                src={image} 
                alt={fullName} 
            />

            <div className={`${s.personInfo} ${reverse ? s.reverseInfo : ''}`}>
                <div className='flex flex-col'>
                    <p className='text-m font-bold mb-[1.5rem]'>{fullName}</p>

                    <ul className='text-sm mb-[2rem]'>
                        {qualities.map((quality, index) =>(
                            <li key={index}>{quality}</li>
                        ))}
                    </ul>

                    <div className='flex items-start'>
                        <div
                            className={`${s.linkedIn} ${reverse ? s.reverseIn : ''}`}
                            onClick={() => window.open(linkedInUrl, '_blank')}
                        >
                            <LinkedInIcon />
                            <p className='text-xsm font-bold tracking-[3px]'>LINKEDIN</p>
                            <ArrowIcon />
                        </div>
                    </div>
                </div>
                <div className={`${s.icon} ${reverse ? s.reverseIcon : ''}`}>{icon}</div>
            </div>
        </div>
    )
}

const MeetTheDuo = () => {
  return (
    <section className={s.wrapper}>
        <div className={s.container}>
            <div className={s.heading}>
                <p className='text-l font-semibold max-w-[650px]'>
                    Poznaj naszych{' '}
                    <span className='text-yellow-footer'>pomysłodawców</span>
                </p>
                
                <p className='text-2sm max-w-[500px]'>
                    W Dimensione Creativa nie ograniczamy się jedynie do dostarczania
                    usług. Dążymy do tego, aby stworzyć solidne i długoterminowe
                    partnerstwo, które przynosi korzyści obu stronom. Wierzymy, że
                    prawdziwa wartość kryje się w budowaniu silnych więzi.
                </p>
            </div>

            <div className={s.people}>
                <Person
                    fullName='Paweł Trojanowski'
                    image={PawelImage}
                    qualities={[
                        'W branży od 2015 roku',
                        'Wymagający od siebie i od innych',
                        'Lubiący wyzwania',
                        'Ratuje z tarapatów',
                        'Nie lubi "lania wody"',
                    ]}
                    linkedInUrl='https://linkedin.com/in/pawe%C5%82-trojanowski-980312135'
                    icon={<DevIcon />}
                />
                <Person
                    fullName='Artur Jażwiec'
                    image={ArturImage}
                    qualities={[
                        '"Pan od Dizajnu"',
                        'UX stosuje w życiu zawodowym i codzienym',
                        'Geek i maniak nowości',
                        'Umysł stworzony do upraszczania',
                        'W branży od 2013 roku',
                        'Mindfullness szlifuje na macie i w ogrodzie',
                    ]}
                    linkedInUrl='https://linkedin.com/in/artur-ja%C5%BAwiec'
                    icon={<DesignIcon />}
                    reverse={true}
                />
            </div>
        </div>
    </section>
  )
}

export default MeetTheDuo