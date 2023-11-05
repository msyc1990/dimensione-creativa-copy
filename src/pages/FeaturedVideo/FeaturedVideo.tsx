import s from './FeaturedVideo.module.css';

const FeaturedVideo = () => {
  return (
    <section className={s.container}>
        <div className={s.text}>
            <p className='text-[7.6rem] font-bold tracking-[0.6rem] leading-[calc(100%-40%)'>
                ELASTYCZNIE
            </p>

            <p className='text-[2.5rem] ml-[4rem] mr-auto'>
                Autentyczność to podstawa.
            </p>
        </div>

        <div className={s.video}>
            <p>TU BĘDZIE WIDEO EMBED</p>
        </div>

        <div className={s.text}>
            <p className='text-[2.5rem] ml-[4rem] mr-auto'>
                Przez wideo do potwierdzenia naszych mocy.
            </p>

            <p className='text-[7.6rem] font-bold tracking-[0.6rem] leading-[100%]'>
                JAKOŚCIOWI
            </p>
        </div>
    </section>
  )
}

export default FeaturedVideo