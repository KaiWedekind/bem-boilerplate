import React        from 'react';
import { render }   from 'react-dom';
import './stylesheets/styles.scss';

render(
    <div>
        <header id="title">BEM Boilerplate</header>
        <label id="author">by Kai Wedekind</label>
    </div>,
    document.querySelector('#app')
)