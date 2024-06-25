"use client"
import React from 'react';
import { FormEvent, useState } from "react";
import Cadastro from './components/Cadastro';



export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between m-0 p-0">
      <Cadastro />
    </main>
  );
};