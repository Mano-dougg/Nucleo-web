"use client"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserCard from '../../components/UserCard';
import axios from 'axios';
import { FaUserEdit, FaTrash } from 'react-icons/fa';



export default function page({ params }: { params: {id : number } }) {
 

  return (
    <main className='flex place-items-center w-full'>
      <UserCard parametro={params.id} />
    </main>
  );
};
