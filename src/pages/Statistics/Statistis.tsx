import { ComponentProps } from 'react';
import s from './Statistics.module.css';

interface StatProps {
    stat: string;
    caption: string;
    className?: ComponentProps<'div'>['className'];
}

const Stat = ({stat, caption, className}: StatProps) => {
    return (
        <div className={s.stat}>
            <div className={className}>
                <p className='text-[6.8rem]'>
                    {stat}
                </p>
                <p className='text-[2.4rem]'>
                    {caption}
                </p>
            </div>
        </div>
    )
}

const Statistis = () => {
  return (
    <section className={s.container}>
        <div className={s.gradient}></div>

        <div className={s.contentContainer}>
            <div className={s.heading}>
                <p>
                    DC w matematyce
                </p>
            </div>

            <div className={s.stats}>
                <div className={`${s.line} ${s.lineTop}`}></div>
                <div className={`${s.line} ${s.lineBottom}`}></div>

                <div className='flex justify-center items-center p-[3rem]'>
                    <div className='flex flex-col gap-[1rem]'>
                        <button
                            onClick={() => window.open(
                                'https://www.youtube.com/@DimensioneCreativa',
                                '_blank',
                            )}
                            className={`${s.btn} border border-red-border`}
                        >
                            <p>Zobacz nas na Youtube</p>
                        </button>

                        <button
                            onClick={() => window.open(
                                'https://linkedin.com/company/dimensionecreativa',
                                '_blank',
                            )}
                            className={`${s.btn} border border-blue-border`}
                        >
                            <p>Poczytaj o nas na Linkedin</p>
                        </button>
                    </div>
                </div>

                <Stat stat='100%' caption='zrealizowanych celów' />
                <Stat
                    stat='8/10'
                    caption='powracających klientów'
                    className='bg-green-background'
                />
                <Stat stat='10 000' caption='wypitych litrów kawy i yerby' />
                <Stat
                    stat='>50'
                    caption='wykrowanych projektów'
                    className='bg-orange-background'
                />
                <Stat stat='519' caption='skutecznych trafień w potrzeby klienta' />
                <Stat
                    stat='10 lat'
                    caption='doświadczenia uzyskanych w pocie czoła'
                    className='bg-purple-author'
                />
                <Stat stat='14' caption='osób na pokładzie' />
                <Stat
                    stat='>1mln'
                    caption='napisanych linii kodu'
                    className='bg-red-border'
                />
            </div>
        </div>
    </section>
  )
}

export default Statistis