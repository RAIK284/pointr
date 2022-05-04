import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event';
import List from '../../List';

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

describe("<List />", () => {

    // --------------- Unit Tests for Rendering Profile List ---------------



    // --------------- Unit Tests for Search Bar Functionality ---------------

    test('Input state of component is updated from user input', () => {
        const component = render(<List input = "bsimpleman"/>, container);

        expect(container.props.input === ["bsimpleman"])

        //Need to reference "filteredData", as well as specify what the expected value should be.
    });

});