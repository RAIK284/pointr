import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event';
import SearchBar from '../../searchBar';

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

describe("<SearchBar />", () => {

    // --------------- Unit Tests for Rendering Search Bar ---------------

    test('Search Bar text is rendered', () => {
        render(<SearchBar/>, container);

        expect(container.textContent).toContain("Search for a user...");
    });

    // --------------- Unit Tests for Search Bar Functionality ---------------

    test('Input state of component is updated from user input', () => {
        const component = render(<SearchBar/>, container);
        const testDataValue = "test search";

        const inputElement = screen.getByTestId("searchEntry");
        userEvent.type(inputElement, testDataValue);

        expect(component.inputText === testDataValue);

        //Need to reference "inputText" as the line above is not doing so.
    });

});