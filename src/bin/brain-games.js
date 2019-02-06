#!/usr/bin/env node

import askUserName from '..';

const brainStart = () => {
  console.log('Welcome to the Brain Games!');

  askUserName();
};

brainStart();
