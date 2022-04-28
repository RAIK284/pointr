import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event';
import SignIn from '../../signIn';

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

describe("<SingIn />", () => {

    // --------------- Unit Tests for Rendering Log In ---------------

    test('Log in text is rendered', () => {
        render(<SignIn/>, container);

        expect(container.textContent).toContain("Log In to Pointr");
    });

    test('Email field is rendered onto screen', () => {
        render(<SignIn/>, container);

        const inputElement = screen.getByTestId("email");
        expect(inputElement).toBeInTheDocument();
    });

    test('Password field is rendered onto screen', () => {
        render(<SignIn/>, container);

        const inputElement = screen.getByTestId("password");
        expect(inputElement).toBeInTheDocument();
    });

    test('Log in button is rendered onto screen', () => {
        render(<SignIn/>, container);

        const inputElement = screen.getByTestId("loginbutton");
        expect(inputElement).toBeInTheDocument();
    });

    // --------------- Unit Tests for Log In Input ---------------

    test('Email field is able to accept user input correctly', () => {
        render(<SignIn/>, container);

        const inputElement = screen.getByTestId("email");
        userEvent.type(inputElement, "testEmail@gmail.com");

        expect(screen.getByTestId("email")).toHaveValue("testEmail@gmail.com");
    });

    test('Password field is able to accept user input correctly', () => {
        render(<SignIn/>, container);

        const inputElement = screen.getByTestId("password");
        userEvent.type(inputElement, "passwordTest");

        expect(screen.getByTestId("password")).toHaveValue("passwordTest");
    });
});