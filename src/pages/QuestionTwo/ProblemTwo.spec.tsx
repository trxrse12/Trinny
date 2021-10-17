import React from 'react';
import {render, screen} from '@testing-library/react';
import ProblemTwo from './ProblemTwo';

describe('ProblemTwo component', () => {
    it('displays the Card',async () =>{
        let container = document.createElement('div');
        document.body.appendChild(container);
        render(<ProblemTwo/>);
        expect(await screen.findByText(/FUN FACTS ABOUT DOGS/i)).toBeInTheDocument();
        // screen.debug();
    })
})
