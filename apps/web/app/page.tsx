'use client';

import React from "react";
import { Home } from './pages/Home';
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'

export default function Page() {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </CacheProvider>
  );
}
