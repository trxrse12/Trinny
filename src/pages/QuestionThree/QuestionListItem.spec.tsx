import React from 'react';
import {render, screen} from '@testing-library/react';
import Android from "@material-ui/icons/Android";
import {QuestionListItem} from './QuestionListItem';

describe('QuestionListItem component', () => {
    it('should list simple data', async () => {
        const simpleProps = {
            icon: Android,
            itemName: 'Remus',
            species: 'Human',
            id: 100,
            divider: true,
            description: 'bla',
        }
        let container = document.createElement('div');
        document.body.appendChild(container);
        render(<QuestionListItem {...simpleProps}/>);
        expect(await screen.findByText(/Remus/i)).toBeInTheDocument()
        // screen.debug();
    })
})
