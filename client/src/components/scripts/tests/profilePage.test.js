import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import ProfilePage from '../../profilePage';

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
        render(<ProfilePage/>, container);

        expect(container.textContent).toContain("Welcome,");
    });

    test('Label for the change password field is rendered', () => {
        render(<ProfilePage/>, container);

        expect(container.textContent).toContain("Leaderboard Rank");
    });

    test('Label for the change bio field is rendered', () => {
        render(<ProfilePage/>, container);

        expect(container.textContent).toContain("messaging points");
    });

    test('Label for the privacy checkbox is rendered', () => {
        render(<ProfilePage/>, container);

        expect(container.textContent).toContain("FUNds");
    });
});