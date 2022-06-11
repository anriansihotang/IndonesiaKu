import React from 'react'
import { useParams } from 'react-router-dom'
import HeroDestinasi from '../components/HeroDestinasi'
import KontenDestinasi from '../components/KontenDestinasi';

const Destinasi = () => {
    const {id} = useParams();
    return (
        <div>
            <HeroDestinasi destinasiID= {id}/>
            <section>
                <KontenDestinasi destinasiID= {id}/>
            </section>
        </div>
    )
}

export default Destinasi
