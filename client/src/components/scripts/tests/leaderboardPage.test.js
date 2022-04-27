import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import LeaderBoardPage from '../../leaderboardPage';

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
describe("<LeaderBoardPage />", () => {

    test('Label for the change name field is rendered', () => {
        render(<LeaderBoardPage/>, container);

        expect(container.textContent).toContain("Your all-time FUNds:");
    });
});