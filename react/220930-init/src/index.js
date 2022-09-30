import React from 'react';
import ReactDOM from 'react-dom/client';
import Hook from './1HooksEffect';
import Reducer from './2HooksUseReducer';
import Memo from './3HooksMemo';
import Origin from './4Origin';
import UseSass from './5UseSass';
import CSSModule from './6CSSModule';
import StyledComponent from './7StyledComponent';
import EX65 from './EX65';
import EX66 from './EX66';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Hook />
    <hr/>
    <Reducer />
    <hr/>
    <Memo /> */}
    <Origin />
    <hr/>
    <UseSass />
    <hr/>
    <CSSModule />
    <hr/>
    <StyledComponent />
    <hr/>
    <EX65 />
    <hr/>
    <EX66 />
  </React.StrictMode>
);
