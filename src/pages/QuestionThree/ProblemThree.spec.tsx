import React from 'react';
import {render, screen} from '@testing-library/react';
import ProblemThree from './ProblemThree';

describe('ProblemThree component', () => {
    it('displays a list of records', async () => {
        let container = document.createElement('div');
        document.body.appendChild(container);
        render(<ProblemThree/>); 
        expect(await screen.findByText(/T-100/i)).toBeInTheDocument();
        expect(await screen.findByText(/Barry/i)).toBeInTheDocument();
        expect(await screen.findByText(/Roger/i)).toBeInTheDocument();
        // screen.debug();
    })
})