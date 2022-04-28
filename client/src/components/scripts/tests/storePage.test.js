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

    // --------------- Unit Tests for Rendering Settings Page ---------------

    test('FUNds sentence is rendered', () => {
        render(<StorePage/>, container);

        expect(container.textContent).toContain("FUNDs available:");
    });

    test('Popular title is rendered', () => {
        render(<StorePage/>, container);

        expect(container.textContent).toContain("Today's Most Popular");
    });

    test('Popular subtitle is rendered', () => {
        render(<StorePage/>, container);

        expect(container.textContent).toContain("Explore today's most popular trophies!");
    });

    test('Most Popular Trophy image is rendered', () => {
        render(<StorePage/>, container);

        const topTrophyImg = screen.getByTestId("mostPopTroph");
        expect(topTrophyImg).toBeInTheDocument();
    });

    test('Most Popular Trophy title is rendered', () => {
        render(<StorePage/>, container);

        const topTrophyTitle = screen.getByTestId("MPTitle");
        expect(topTrophyTitle).toBeInTheDocument();
    });

    test('Trophy Box is rendered', () => {
        render(<StorePage/>, container);

        const trophyBox = screen.getByTestId("trophyBox");
        expect(trophyBox).toBeInTheDocument();
    });

    test('Single Trophies are rendered', () => {
        render(<StorePage/>, container);

        const singleTrophy = screen.getByTestId("singleTrophy");
        expect(singleTrophy).toBeInTheDocument();

        //Not sure
    });

    test('Clicked Trophies are Updated on the Page', () => {
        const component = render(<StorePage/>, container);

        const trophy = screen.getByTestId("ball"); //need to reference a specific trophy
        userEvent.click(trophy);

        expect(component.state.trophyStatus[0] === true);

        //Not sure
    });

    test('FUNds available is taken from user info', () =>   {

        const userFUNds = screen.getByTestId("userFUNds");

        expect(userFUNds).toHaveValue(screen.state.funds);

        //Not finding something via "userFUNds"
    });

    // --------------- Unit Tests for Purchasing Trophies ---------------

    test('Clicking on the Most Popular Trophy sets state to true', () =>    {

        const component = render(<StorePage/>, container);

        const topTrophy = screen.getByTestId("mostPopTroph");

        userEvent.click(topTrophy);

        expect(component.state.mostPopularTrophyStatus).toBe(true);

        //mostPopularTrophyStatus is undefined, even if you just render the page and do nothing else.
    });

    
});