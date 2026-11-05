import { useState, useEffect } from 'react';

const TARGET = new Date('2027-02-08T08:00:00+05:30').getTime();

function pad(n) {
  return String(Math.floor(n)).padStart(2, '0');
}

export default function useCountdown() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, (TARGET - now) / 1000);

  return [
    { value: pad(diff / 86400), label: 'DAYS' },
    { value: pad((diff % 86400) / 3600), label: 'HRS' },
    { value: pad((diff % 3600) / 60), label: 'MIN' },
    { value: pad(diff % 60), label: 'SEC' },
  ];
}
