import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Letter from './Letter';

let container = null;

describe('Letter Component', () => {
    beforeEach( () => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    
    afterEach( () => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });
    
    it('Render with or without letter', () => {
        act(() => {
            render(Letter("K","", ()=>{} ) , container);
        });
        expect(container.textContent).toBe("K");

        act(() => {
            render(Letter(15,"", ()=>{} ) , container);
        });
        expect(container.textContent).toBe('');

        return undefined;
    });

});