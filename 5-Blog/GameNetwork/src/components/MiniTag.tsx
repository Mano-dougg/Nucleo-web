// -- GERAL
import React from 'react';
import clsx from 'clsx';
// -- TYPES
type MTProps = {
  tag: 'Novidades' | 'Jogos' | 'Filmes' | 'Séries',
};


// -- FUNCTION
export default function MiniTag(props: MTProps) {

  return (
    <div className={ clsx('inline-flex rounded-full w-max px-4 py-1 bg-tag1', 
      props.tag === 'Novidades' && 'bg-tag1',
      props.tag === 'Jogos' && 'bg-tag2',
      props.tag === 'Filmes' && 'bg-tag3',
      props.tag === 'Séries' && 'bg-tag4',
    )}>
      <p className='text-white text-xs font-bold '>{props.tag}</p>
    </div>
  );
};