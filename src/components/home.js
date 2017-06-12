import React from 'react';

import { IsSecured } from './securedRoute';
import { Test } from './test';

const Home = () =>
    <div>
        <h1>Home</h1>
        <IsSecured>
         <Test />
        </IsSecured>
    </div>

export  { Home };
