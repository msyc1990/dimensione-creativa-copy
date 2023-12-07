import LinkedInImage from './assets/linked-in.webp';
import YouTubeImage from './assets/youtube.webp';
import InstagramImage from './assets/instagram.webp';
import FacebookImage from './assets/facebook.webp';
import TikTokImage from './assets/tiktok.webp';
import SpotifyImage from './assets/spotify.webp';
import TwitterImage from './assets/twitter.webp';
import s from './Socials.module.css';

const Socials = () => {
  const socials = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/dimensionecreativa',
      image: LinkedInImage,
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@DimensioneCreativa',
      image: YouTubeImage,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dc_fullstackagency/',
      image: InstagramImage,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/Dimensione.CreativaSoftwareHouse/',
      image: FacebookImage,
    },
    {
      name: 'Tik       Tok',
      url: 'https://www.tiktok.com/@dimensione.creativa',
      image: TikTokImage,
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/show/5wzdxa1Z2jqYY2UclPCZqo',
      image: SpotifyImage,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/DimensioneCrtva',
      image: TwitterImage,
    },
  ];

  return (
    <section className={s.container}>
      <div className={s.gradient}></div>

      <header className={s.header}>
        <div className={s.heading}>
          <p className='text-l font-semibold max-w-[600px]'>
            Piszemy, opowiadamy, dzielimy się{' '}
            <span className='text-yellow-footer'>wiedzą</span>
          </p>

          <p className='text-2sm max-w-[350px]'>
            Kompleksowe opracowania technologiczne - projektowe.
            Brak nudy, same łakome kąski.  
          </p>         
        </div>
      </header>

      <div className={s.socials}>
        <div className={s.socialContainer}>
          {socials.map((social, index) => (
            <div
              className={s.social}
              onClick={() => window.open(social.url, '_blank')}
              key={index}
            >
              <img src={social.image} alt={social.name} />
              <p
                className={`text-xxl font-bold whitespace-pre ${index % 2 === 0 ? 'opacity-80' : 'opacity-90'}`}
              >
                {social.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Socials