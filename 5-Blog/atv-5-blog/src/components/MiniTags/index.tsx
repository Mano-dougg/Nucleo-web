import React from 'react';

interface IProps {
  tag: 'noticias' | 'jogos' | 'filmes' | 'series',
};

export default function MiniTag(props: IProps) {
  switch (props.tag) {
    case 'noticias':
      return (
        <div className='inline-flex rounded-full w-max px-4 py-1 bg-red-500'>
          <p className='text-white text-3 font-bold '>Notícias</p>
        </div>
      );
    case 'jogos':
      return (
        <div className='inline-flex rounded-full w-max px-4 pb-0.5 bg-blue-500'>
          <p className='text-white text-3 font-bold '>Jogos</p>
        </div>
      );
    case 'filmes':
      return (
        <div className='inline-flex rounded-full w-max px-4 pb-0.5 bg-yellow-500'>
          <p className='text-white text-3 font-bold '>Filmes</p>
        </div>
      );
    case 'series':
      return (
        <div className='inline-flex rounded-full w-max px-4 pb-0.5 bg-purple-500'>
          <p className='text-white text-3 font-bold '>Séries</p>
        </div>
      );
  }
};
