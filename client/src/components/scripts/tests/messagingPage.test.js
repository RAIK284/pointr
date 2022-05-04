import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event';
import MessagingPage from '../../messagingPage';

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

describe("<MessagingPage />", () => {

    // --------------- Unit Tests for Rendering Settings Page ---------------

    test('Internal Heading is rendered', () => {
        render(<MessagingPage/>, container);

        expect(container.textContent).toContain("Messages");
    });

    test('Sent/Received Span is rendered', () => {
        render(<MessagingPage/>, container);

        const sentReceivedSpan = screen.getByTestId("sentReceivedCheck");
        expect(sentReceivedSpan).toBeInTheDocument();
    });

    test('New Message Button is rendered', () => {
        render(<MessagingPage/>, container);

        const newMessageButton = screen.getByTestId("newMessageButton");
        expect(newMessageButton).toBeInTheDocument();
    });

    test('Message Box is rendered', () => {
        render(<MessagingPage/>, container);

        const messageDisplayBox = screen.getByTestId("messageDisplayBoxes");
        expect(messageDisplayBox).toBeInTheDocument();
    });

    // --------------- Unit Tests for Interacting With Messaging Page Elements ---------------

    test('Clicking on the New Message Button Renders New Message Popup', () =>    {

        const component = render(<MessagingPage/>, container);

        const newMessageButton = screen.getByTestId("newMessageButton");

        userEvent.click(newMessageButton);

        expect(component.state.newMessage).toBe(true);
    });

    test('Clicking on the Sent/Received Checkbox Switches Render', () =>    {

        const component = render(<MessagingPage/>, container);

        const checkbox = screen.getByTestId("checkbox");

        userEvent.click(checkbox);

        expect(component.state.viewStatus).toBe(true);
    });
});