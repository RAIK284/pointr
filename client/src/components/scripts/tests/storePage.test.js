import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event';
import StorePage from '../../storePage';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("<StorePage />", () =>   {

    test('FUNds sentence is rendered', () => {
        render(<HomePage/>, container);

        expect(container.textContent).toContain("FUNDs available:");
    });

    test('Popular title is rendered', () => {
        render(<HomePage/>, container);

        expect(container.textContent).toContain("Today's Most Popular:");
    });

    test('Popular subtitle is rendered', () => {
        render(<HomePage/>, container);

        expect(container.textContent).toContain("Explore today's most popular trophies!");
    });
});