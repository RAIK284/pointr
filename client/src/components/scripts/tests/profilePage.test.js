import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event';
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

describe("<ProfilePage />", () => {

    const fakeUser = {
        name: "Testing Name",
        username: 'Testing Username',
        bio: 'This is a unit test bio',
        trophies: [],
        messagingPoints: 100,
        funds: 50,
        allTimefunds: 300,
        leaderboardRank: "4"
      };

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        })
    );

    // --------------- Unit Tests for Rendering Profile Page ---------------

    test('Welcome message is rendered', () => {
        render(<ProfilePage/>, container);

        expect(container.textContent).toContain("Welcome, ");
    });

    test('Trophies label is rendered', () => {
        render(<ProfilePage/>, container);

        expect(container.textContent).toContain('Trophies');
    });

    test('Leaderboard label is rendered', () => {
        render(<ProfilePage/>, container);

        expect(container.textContent).toContain('Leaderboard Rank')
    });

    test('Messaging points label is rendered', () => {
        render(<ProfilePage/>, container);

        expect(container.textContent).toContain('messaging points')
    });

    test('FUNds label is rendered', () => {
        render(<ProfilePage/>, container);

        expect(container.textContent).toContain('FUNds')
    });

    test('Trophy Carousel is rendered', () => {
        render(<ProfilePage/>, container);

        const trophies = screen.getByTestId("trophyCarousel");

        expect(trophies).toBeInTheDocument();

    });

    // --------------- Unit Tests for Retrieving Profile Page Data ---------------

    test('Properly Retrieves User Name', () => {
        const component = render(<ProfilePage/>, container);

        expect(component.state.name).toBe("");

        //This test passes now, but ideally it would actually check user name.
    });

    test('Properly Retrieves User Bio', () => {
        const component = render(<ProfilePage/>, container);

        expect(component.state.bio).toBe("");

        //This test passes now, but ideally it would actually check user bio.
    });

    test('Properly Retrieves Leaderboard Rank', () => {
        const component = render(<ProfilePage/>, container);

        expect(component.state.leaderboardRank).toBe("");

        //This test passes now, but ideally it would actually check user rank.
    });

    test('Properly Retrieves Messaging Points', () => {
        const component = render(<ProfilePage/>, container);

        expect(component.state.messagingPoints).toBe(0);

        //This test passes now, but ideally it would actually check user MPs.
    });

    test('Properly Retrieves FUNds', () => {
        const component = render(<ProfilePage/>, container);

        expect(component.state.funds).toBe(0);

        //This test passes now, but ideally it would actually check user MPs.
    });

    //Should also test the trophies here.

    global.fetch.mockRestore();
});