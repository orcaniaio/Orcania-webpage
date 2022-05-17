import { useState, useEffect } from 'react';

const useEpochCountdown = epochUnixTime => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const targetDate = new Date(0);
    targetDate.setUTCSeconds(epochUnixTime);

    useEffect(() => {
        const interval = setInterval(() => {
            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = targetDate - now;

            // Time calculations for days, hours, minutes and seconds
            const d = Math.floor(distance / (1000 * 60 * 60 * 24));
            const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(String(d).padStart(2, '0'));
            setHours(String(h).padStart(2, '0'));
            setMinutes(String(m).padStart(2, '0'));
            setSeconds(String(s).padStart(2, '0'));

            // If the count down is finished, write some text

            if (distance <= 0) {
                clearInterval(interval);
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            }

            return () => clearInterval(interval);
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { days, hours, minutes, seconds };
};

export default useEpochCountdown;
