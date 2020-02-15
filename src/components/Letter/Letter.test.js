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
    
    it('Should render just one letter', () => {
        act(() => {
            render(Letter("a") , container);
        });
        expect(container.textContent).toBe("a");

        act(() => {
            render(Letter("axfsdfdsf") , container);
        });
        expect(container.textContent).toBe("a");


        act(() => {
            render(Letter("K") , container);
        });
        expect(container.textContent).toBe("K");
    });

    it('Should render empty value if value is not a valid letter', () => {
        act(() => {
            render(Letter(15) , container);
        });
        expect(container.textContent).toBe('');

        act(() => {
            render(Letter('15') , container);
        });
        expect(container.textContent).toBe('');

        act(() => {
            render(Letter('$') , container);
        });
        expect(container.textContent).toBe('');

        act(() => {
            render(Letter([]) , container);
        });
        expect(container.textContent).toBe('');

        act(() => {
            render(Letter({}) , container);
        });
        expect(container.textContent).toBe('');

    });

});