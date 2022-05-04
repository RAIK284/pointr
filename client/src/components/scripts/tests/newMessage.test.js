import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event';
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

    test('Send label is rendered', () => {
        render(<NewMessage/>, container);

        expect(container.textContent).toContain("Send a message to:");
    });

    test('Remove emojis properly extracts emojis from string', () => {
        var string = "hello this string has an emoji 🌟";
        // var output = removeEmojis(string);
        var output = EmojiData.removeEmojis(string);
        console.log(output);

        expect(output).toEqual("🌟")

    })
    

    });