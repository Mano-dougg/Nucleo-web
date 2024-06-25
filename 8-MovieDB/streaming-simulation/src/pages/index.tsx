"use client";

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const { data: session } = useSession();
  const [greeting, setGreeting] = useState('');
  const [query, setQuery] = useState('');
  const router = useRouter();

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

      setGreeting(`${greetingMessage}, ${userName}!`);
    }
  }, [session]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${query}`);
    }
  };

  return (
    <div>
      <h1>Homepage</h1>
      {greeting && <p>{greeting}</p>}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquise por um filme..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default HomePage;
