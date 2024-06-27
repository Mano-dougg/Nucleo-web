"use client";

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const { data: session, status } = useSession();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    if (session?.user?.name) {
      const userName = session.user.name;
      const hour = new Date().getHours();
      let greetingMessage = '';

      if (hour < 12) {
        greetingMessage = 'Bom dia';
      } else if (hour < 18) {
        greetingMessage = 'Boa tarde';
      } else {
        greetingMessage = 'Boa noite';
      }

      setGreeting(`${greetingMessage}, ${userName}! `);
     
    }
  }, [session]);

  

  return (
    <div className='greeting'>
     
      {greeting && <p>{greeting}</p>}
      
    </div>
    
  );
};

export default HomePage;
