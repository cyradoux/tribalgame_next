import ReservationBox from '@/components/ReservationBox/reservation';
import React from 'react';

import aisoft from '@/assets/img/logo/airsoftLogo.svg';

const Reservation = () => {
    return (
        <>
           < ReservationBox image={aisoft}/>
        </>
    );
};

export default Reservation;