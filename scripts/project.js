import React, { Component } from 'react';
import {jsx as _jsx} from 'react/jsx-runtime';

import { useQuote } from '@marekdano/use-quote';

const Example = () => {
  const { quote, isLoading, isError } = useQuote()
  
  if (isLoading) return <p>Loading...</p>

  if (quote) {
    return (
      <>
        <p>{quote.text}</p>
        <p><i>{quote.author}</i></p>
      </>
    )
  }

  if (isError) return <p>Difficulty displaying a quote at the moment.</p>

  return null
}