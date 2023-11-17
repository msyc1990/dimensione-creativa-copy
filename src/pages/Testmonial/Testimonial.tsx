import s from './Testimonial.module.css';


const Testimonial = () => {
  return (
    <div className={s.container}>
      <p className='text-m font-medium max-w-[1000px]'>
        W imieniu firmy D-R-O Sp. z o.o. Sp. k. chcielibyśmy podziękować
        pracownikom firmy Dimensione Creativa Sp. z o.o. za zaangażowanie w
        przygotowanie oraz realizację aplikacji, która miała na celu
        zautomatyzowanie procesów księgowych w programie WF MAG. Dzięki
        funkcjonalnym rozwiązaniom aplikacja pozwoliła nam na znaczącą
        optymalizację kosztów oraz czasu pracy.
        <br />
        <br />
        Dimensione Creativa Sp. z o.o. wykazała się ogromnym doświadczeniem i
        profesjonalizmem, a świadczona usługa była wykonana należycie. Zespół
        Dimensione Creativa Sp. z o.o. wypełnia powierzone zadania rzetelnie i z
        zaangażowaniem. Pracownicy firmy nawet złożone problemy rozwiązują
        sprawnie i z najwyższą starannością. Istotnymi aspektami są również
        indywidualne podejście do klienta, znakomita komunikacja oraz
        elastyczność.
        <br />
        <br />
        Bez zawahania możemy polecić Dimensione Creativa Sp. z o.o. jako
        sprawdzoną i kompetentną firmę, łączącą profesjonalizm oraz pasję w
        swojej pracy.
      </p>

      <div className={s.footer}>
        <div className={s.author}>
          <p className='text-3sm font-bold'>Dariusz Stachura</p>
          <p className='text-2sm'>D-R-O Sp. z o.o. Sp. k.</p>
        </div>
      </div>     
    </div>
  )
}

export default Testimonial