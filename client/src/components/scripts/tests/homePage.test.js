import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event';
import HomePage from '../../homePage';

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

describe("<HomePage />", () => {

    test('Welcome message is rendered', () => {
        render(<HomePage/>, container);

        expect(container.textContent).toContain("Welcome to Pointr.");
    });

    test('Subtitle is rendered', () => {
        render(<HomePage/>, container);

        expect(container.textContent).toContain("The new way to be positive");
    });

    test('Features 1 is rendered', () => {
        render(<HomePage/>, container);

        expect(container.textContent).toContain("Send a motivational note.");
    });

    test('Features 2 is rendered', () => {
        render(<HomePage/>, container);

        expect(container.textContent).toContain("Earn points for your positivity.");
    });

    test('Features 3 is rendered', () => {
        render(<HomePage/>, container);

        expect(container.textContent).toContain("Buy trophies to inspire others!");
    });
});