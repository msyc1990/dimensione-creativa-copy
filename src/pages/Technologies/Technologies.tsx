import s from './Technologies.module.css';
import {  useState, ComponentProps } from 'react';


interface CategoryProps {
  name: string;
  technologies: Array<string>;
  className?: ComponentProps<'div'>['className'];
  active: boolean;
  index: number;
  onClick: () => void;
}

const Category = ({
  name,
  technologies,
  className,
  active,
  index,
  onClick,
}: CategoryProps) => {
  return (
    <div className={`${s.category} ${className}`}>
      <div className={s.categoryHeader} onClick={onClick}>
        <p className={`text-m ${active ? '' : 'opacity-[32%]'}`}>
          {String(index + 1).padStart(2, '0')}
        </p>
        <p className='text-xm'>
          {name}
        </p>
      </div>
      {active && (
        <div className={s.categoryContent}>
            <div>
              {technologies.map((technology, index) => (
                  <p key={index} className='text-1.5sm'>
                    {technology}
                  </p>
                ))}
            </div>
        </div>
      )};
    </div>
  )
}


const Technologies = () => {
  const categories = [
    {
      name: 'Strony internetowe',
      technologies: [
        'JavaScript',
        'React',
        'Next.js',
        'Angular',
        'Node.js',
        'PHP',
        'Strapi',
      ],
      bgColor: 'bg-technology-1',
    },
    {
      name: 'Aplikacje mobilne',
      technologies: ['Flutter', 'React Native', 'Xamarin'],
      bgColor: 'bg-technology-2',
    },
    {
      name: 'Dedykowane oprogramowanie',
      technologies: ['C#', 'Java', 'Python'],
      bgColor: 'bg-technology-3',
    },
  ];

  const [activeCategory, setActiveCategory] = useState<number>(0);
  const handleCategoryClick = (index: number) => {
    setActiveCategory(index);
  }

  return (
    <div className={s.container}>
      <div className={s.gradient}></div>

      <div className={s.heading}>
        <div className={s.header}>
          <p className='text-l font-semibold max-w-[650px]'>
            Dobieramy technologię do {' '}
            <span className='text-yellow-footer'>Twojego</span> problemu
          </p>

          <p className='text-2sm max-w-[380px]'>
            Kreujemy innowacyjne rozwiązania, łączące bezpieczeństwo,
            funkcjonalność i nowoczesność.
          </p>
        </div>
      </div>

      <div className={s.categories}>
        {categories.map((category, index) => (
          <Category
            key={index}
            index={index}
            name={category.name}
            technologies={category.technologies}
            className={category.bgColor}
            active={activeCategory === index}
            onClick={() => handleCategoryClick(index)}
            />
        ))}
      </div>
    </div>
  )
}

export default Technologies