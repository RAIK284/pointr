import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeaderDrawer from '../../headerDrawer';

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
// ['Profile', 'Messages', 'Store', 'Explore', 'Leaderboard', 'Settings']
describe("<HeaderDrawer />", () => {

    test('Label for the change name field is rendered', () => {
        render(<HeaderDrawer/>, container);

        expect(container.textContent).toContain("Profile");
    });

    test('Label for the change password field is rendered', () => {
        render(<HeaderDrawer/>, container);

        expect(container.textContent).toContain("Messages");
    });

    test('Label for the change bio field is rendered', () => {
        render(<HeaderDrawer/>, container);

        expect(container.textContent).toContain("Store");
    });

    test('Label for the privacy checkbox is rendered', () => {
        render(<HeaderDrawer/>, container);

        expect(container.textContent).toContain("Explore");
    });

    test('Label for the notifications checkbox is rendered', () => {
        render(<HeaderDrawer/>, container);

        expect(container.textContent).toContain("Leaderboard");
    });

    test('Privacy information is rendered', () => {
        render(<HeaderDrawer/>, container);

        expect(container.textContent).toContain("Settings");
    });
});