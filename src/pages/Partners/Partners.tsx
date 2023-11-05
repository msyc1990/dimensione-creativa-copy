import AstecoLogo from './assets/asteco.webp';
import HAWCLogo from './assets/hawc.webp';
import IiyamaLogo from './assets/iiyama.webp';
import InfinitoLogo from './assets/infinito.webp';
import NovaIzolaceLogo from './assets/nova-izolace.webp';
import OLXLogo from './assets/olx.webp';
import PanTabletLogo from './assets/pan-tablet.webp';
import WomanCodeLogo from './assets/woman-code.webp';
import DROLogo from './assets/dro.webp';
import DSWLogo from './assets/dsw.webp';
import s from './Partners.module.css'

const Partners = () => {
    const logos = [
        { src: AstecoLogo, width: 178},
        { src: HAWCLogo, width: 143},
        { src: IiyamaLogo, width: 150},
        { src: InfinitoLogo, width: 175},
        { src: NovaIzolaceLogo, width: 152},
        { src: OLXLogo, width: 102},
        { src: PanTabletLogo, width: 93},
        { src: WomanCodeLogo, width: 134},
        { src: DROLogo, width: 155},
        { src: DSWLogo, width: 208},
    ]
  return (
    <section className={s.container}>
        <p className='font-bold'>
            Partnerzy, klienci, przyjaciele
        </p>

        <div className={s.logo}>
            {logos.map((logo, index) => (
                <img
                    key={index} 
                    src={logo.src} 
                    width={logo.width}
                />
            ))}
        </div>
    </section>
  )
}

export default Partners