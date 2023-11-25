import s from './BuildingProcess.module.css';

const BuildingProcess = () => {
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
    </div>
  )
}

export default BuildingProcess