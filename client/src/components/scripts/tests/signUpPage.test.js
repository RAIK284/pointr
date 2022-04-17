import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event';
import SignUp from '../../signUp';

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

describe("<SignUp />", () => {

    // --------------- Unit Tests for Rendering SignUp Page ---------------

    test('Title content is rendered', () => {
        render(<SignUp/>, container);

        expect(container.textContent).toContain("Welcome to Pointr!");
    });

    test('Subtitle content is rendered', () => {
        render(<SignUp/>, container);

        expect(container.textContent).toContain("Sign up for a free account today.");
    });

    test('Name field is rendered onto screen', () => {
        render(<SignUp/>, container);

        const inputElement = screen.getByTestId("name-input");
        expect(inputElement).toBeInTheDocument();
    });

    test('Username field is rendered onto screen', () => {
        render(<SignUp/>, container);

        const inputElement = screen.getByTestId("username-input");
        expect(inputElement).toBeInTheDocument();
    });

    test('Email field is rendered onto screen', () => {
        render(<SignUp/>, container);

        const inputElement = screen.getByTestId("email-input");
        expect(inputElement).toBeInTheDocument();
    });

    test('Password field is rendered onto screen', () => {
        render(<SignUp/>, container);

        const inputElement = screen.getByTestId("password-input");
        expect(inputElement).toBeInTheDocument();
    });

    test('Password Confirmation field is rendered onto screen', () => {
        render(<SignUp/>, container);

        const inputElement = screen.getByTestId("passwordConfirmation-input");
        expect(inputElement).toBeInTheDocument();
    });

    // --------------- Unit Tests for Passing Values into SignUp Page ---------------

    test('Name field is able to accept user input correctly', () => {
        render(<SignUp/>, container);

        const inputElement = screen.getByTestId("name-input");
        userEvent.type(inputElement, "Test Name");

        expect(screen.getByTestId("name-input")).toHaveValue("Test Name");
    });

    test('Username field is able to accept user input correctly', () => {
        render(<SignUp/>, container);

        const inputElement = screen.getByTestId("username-input");
        userEvent.type(inputElement, "Test Username");

        expect(screen.getByTestId("username-input")).toHaveValue("Test Username");
    });

    test('Email field is able to accept user input correctly', () => {
        render(<SignUp/>, container);

        const inputElement = screen.getByTestId("email-input");
        userEvent.type(inputElement, "testEmail@gmail.com");

        expect(screen.getByTestId("email-input")).toHaveValue("testEmail@gmail.com");
    });

    test('Password field is able to accept user input correctly', () => {
        render(<SignUp/>, container);

        const inputElement = screen.getByTestId("password-input");
        userEvent.type(inputElement, "testPassword123");

        expect(screen.getByTestId("password-input")).toHaveValue("testPassword123");
    });

    test('Password Confirmation field is able to accept user input correctly', () => {
        render(<SignUp/>, container);

        const inputElement = screen.getByTestId("passwordConfirmation-input");
        userEvent.type(inputElement, "testPassword123");

        expect(screen.getByTestId("passwordConfirmation-input")).toHaveValue("testPassword123");
    });

    // --------------- Unit Tests for Updating SignUp Page State Based Upon User Input ---------------

    test('Name state of component is updated from user input', () => {
        const component = render(<SignUp/>, container);
        const testDataValue = "Test Name";

        const inputElement = screen.getByTestId("name-input");
        userEvent.type(inputElement, testDataValue);

        expect(component.state.name === testDataValue);
    });

    test('Username state of component is updated from user input', () => {
        const component = render(<SignUp/>, container);
        const testDataValue = "testUsername12345";

        const inputElement = screen.getByTestId("username-input");
        userEvent.type(inputElement, testDataValue);

        expect(component.state.username === testDataValue);
    });

    test('Email state of component is updated from user input', () => {
        const component = render(<SignUp/>, container);
        const testDataValue = "testEmail@gmail.com";

        const inputElement = screen.getByTestId("email-input");
        userEvent.type(inputElement, testDataValue);

        expect(component.state.email === testDataValue);
    });

    test('Password state of component is updated from user input', () => {
        const component = render(<SignUp/>, container);
        const testDataValue = "testPassword123";

        const inputElement = screen.getByTestId("password-input");
        userEvent.type(inputElement, testDataValue);

        expect(component.state.password === testDataValue);
    });

    test('Password Confirmation state of component is updated from user input', () => {
        const component = render(<SignUp/>, container);
        const testDataValue = "testPassword123";

        const inputElement = screen.getByTestId("passwordConfirmation-input");
        userEvent.type(inputElement, testDataValue);

        expect(component.state.passwordConfirmation === testDataValue);
    });
});



