import { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils, {act} from 'react-dom/test-utils';
import {ProblemOne} from './ProblemOne';

type Component = ReactElement<any, string>;
type Render = (component: Component) => void;

describe("ProblemOne button",() => {
    let container:any;
    let render:Render;
    beforeEach(() => {
        container = document.createElement('div');
        render = (component:Component) => ReactDOM.render(component, container);
    })
    it('renders correctly when initially rendered', () => {
        render(<ProblemOne/>);
        expect(container.textContent).toEqual("I've been clicked:  0 times")
    });

    it ('increments values correctly when clicked', () => {
        render(<ProblemOne/>);
        const button = container.querySelectorAll('button')[0];
        ReactTestUtils.Simulate.click(button);
        expect(container.textContent).toMatch("I've been clicked:  1 times")
    })
})