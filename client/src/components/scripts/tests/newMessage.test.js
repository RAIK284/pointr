import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event';
import MessagingPage from '../../messagingPage';
import NewMessage from '../../newMessage';
import EmojiData from '../../emojiData';

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

describe("<NewMessage />", () => {

    // --------------- Unit Tests for Rendering Settings Page ---------------

    test('Send button for new message is rendered', () => {
        const component = render(<MessagingPage/>, container);

        const newMessageButton = screen.getByTestId("newMessageButton")

        userEvent.click(newMessageButton)

        const button = screen.getByTestId("newMessageSendButton");

        expect(button).toBeInTheDocument();
    });

    test('Message input box is rendered', () => {
        const component = render(<MessagingPage/>, container);

        const newMessageButton = screen.getByTestId("newMessageButton")
        userEvent.click(newMessageButton)

        const inputBox = screen.getByTestId("messageInputBox");

        expect(inputBox).toBeInTheDocument();
    });

    test('Send message to label renders', () => {
        const component = render(<MessagingPage/>, container);

        const newMessageButton = screen.getByTestId("newMessageButton")

        userEvent.click(newMessageButton)

        expect(container.textContent).toContain("Send a message to:");
    });

    test('TokensBox emoji renders in token box', () => {
        const component = render(<MessagingPage/>, container);

        const newMessageButton = screen.getByTestId("newMessageButton")
        userEvent.click(newMessageButton)

        const tokensBox = screen.getByTestId("tokensBox");

        expect(tokensBox).toBeInTheDocument();
    });

});