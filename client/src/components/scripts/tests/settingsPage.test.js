import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event';
import SettingsPage from '../../settingsPage';

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

describe("<SettingsPage />", () => {

    // --------------- Unit Tests for Rendering Settings Page ---------------

    test('Title content is rendered', () => {
        render(<SettingsPage/>, container);

        expect(container.textContent).toContain("Settings");
    });

    test('Label for the change name field is rendered', () => {
        render(<SettingsPage/>, container);

        expect(container.textContent).toContain("Change name");
    });

    test('Label for the change password field is rendered', () => {
        render(<SettingsPage/>, container);

        expect(container.textContent).toContain("Change password");
    });

    test('Label for the change bio field is rendered', () => {
        render(<SettingsPage/>, container);

        expect(container.textContent).toContain("Change bio");
    });

    test('Label for the privacy checkbox is rendered', () => {
        render(<SettingsPage/>, container);

        expect(container.textContent).toContain("Display my information publicly");
    });

    test('Label for the notifications checkbox is rendered', () => {
        render(<SettingsPage/>, container);

        expect(container.textContent).toContain("Receive email notifications");
    });

    test('Privacy information is rendered', () => {
        render(<SettingsPage/>, container);

        expect(container.textContent).toContain("Enabling this will allow other users to see your tropies, FUNDs, and leaderboard rank.");
    });

    test('Notification information is rendered', () => {
        render(<SettingsPage/>, container);

        expect(container.textContent).toContain("Notifications will be sent by email one week after your last message.");
    });

    test('Name field is rendered onto screen', () => {
        render(<SettingsPage/>, container);

        const inputElement = screen.getByTestId("name-input");
        expect(inputElement).toBeInTheDocument();
    });

    test('Password field is rendered onto screen', () => {
        render(<SettingsPage/>, container);

        const inputElement = screen.getByTestId("password-input");
        expect(inputElement).toBeInTheDocument();
    });

    test('Password Confirmation field is rendered onto screen', () => {
        render(<SettingsPage/>, container);

        const inputElement = screen.getByTestId("passwordConfirmation-input");
        expect(inputElement).toBeInTheDocument();
    });

    test('Bio field is rendered onto screen', () => {
        render(<SettingsPage/>, container);

        const inputElement = screen.getByTestId("bio-input");
        expect(inputElement).toBeInTheDocument();
    });

    test('Privacy checkbox is rendered onto screen', () => {
        render(<SettingsPage/>, container);

        const inputElement = screen.getByTestId("privacy-checkbox");
        expect(inputElement).toBeInTheDocument();
    });

    test('Notifications checkbox is rendered onto screen', () => {
        render(<SettingsPage/>, container);

        const inputElement = screen.getByTestId("notifications-checkbox");
        expect(inputElement).toBeInTheDocument();
    });

    test('Logout button is rendered onto screen', () => {
        render(<SettingsPage/>, container);

        const inputElement = screen.getByTestId("logout-button");
        expect(inputElement).toBeInTheDocument();
    });

    test('Save button is rendered onto screen', () => {
        render(<SettingsPage/>, container);

        const inputElement = screen.getByTestId("save-button");
        expect(inputElement).toBeInTheDocument();
    });

    // --------------- Unit Tests for Passing Values into Settings Page ---------------

    test('Name field is able to accept user input correctly', () => {
        render(<SettingsPage/>, container);

        const inputElement = screen.getByTestId("name-input");
        userEvent.type(inputElement, "Test Name");

        expect(screen.getByTestId("name-input")).toHaveValue("Test Name");
    });

    test('Password field is able to accept user input correctly', () => {
        render(<SettingsPage/>, container);

        const inputElement = screen.getByTestId("password-input");
        userEvent.type(inputElement, "testPassword123");

        expect(screen.getByTestId("password-input")).toHaveValue("testPassword123");
    });

    test('Password Confirmation field is able to accept user input correctly', () => {
        render(<SettingsPage/>, container);

        const inputElement = screen.getByTestId("passwordConfirmation-input");
        userEvent.type(inputElement, "testPassword123");

        expect(screen.getByTestId("passwordConfirmation-input")).toHaveValue("testPassword123");
    });

    test('Bio field is able to accept user input correctly', () => {
        render(<SettingsPage/>, container);

        const inputElement = screen.getByTestId("bio-input");
        userEvent.type(inputElement, "testBio");

        expect(screen.getByTestId("bio-input")).toHaveValue("testBio");
    });

    // --------------- Unit Tests for Updating Settings Page State Based Upon User Input ---------------

    test('Name state of component is updated from user input', () => {
        const component = render(<SettingsPage/>, container);
        const testDataValue = "Test Name";

        const inputElement = screen.getByTestId("name-input");
        userEvent.type(inputElement, testDataValue);

        expect(component.state.name === testDataValue);
    });

    test('Password state of component is updated from user input', () => {
        const component = render(<SettingsPage/>, container);
        const testDataValue = "testPassword123";

        const inputElement = screen.getByTestId("password-input");
        userEvent.type(inputElement, testDataValue);

        expect(component.state.password === testDataValue);
    });

    test('Password Confirmation state of component is updated from user input', () => {
        const component = render(<SettingsPage/>, container);
        const testDataValue = "testPassword123";

        const inputElement = screen.getByTestId("passwordConfirmation-input");
        userEvent.type(inputElement, testDataValue);

        expect(component.state.passwordConfirmation === testDataValue);
    });

    test('Bio state of component is updated from user input', () => {
        const component = render(<SettingsPage/>, container);
        const testDataValue = "Test Bio";

        const inputElement = screen.getByTestId("bio-input");
        userEvent.type(inputElement, testDataValue);

        expect(component.state.name === testDataValue);
    });

    // --------------- Unit Tests for Receiving Checkbox Input ---------------

    test('Privacy checkbox can be changed from checked to unchecked by clicking it', () => {
        const component = render(<SettingsPage/>, container);

        const inputElement = screen.getByTestId("privacy-checkbox");

        // Click the checkbox
        fireEvent.click(inputElement)

        expect(inputElement.checked).toEqual(false);
    });

    test('Privacy checkbox can be changed from unchecked to checked by clicking it', () => {
        const component = render(<SettingsPage/>, container);

        const inputElement = screen.getByTestId("privacy-checkbox");

        // Click the checkbox twice
        fireEvent.click(inputElement)
        fireEvent.click(inputElement)

        expect(inputElement.checked).toEqual(true);
    });

    test('Notifications checkbox can be changed from unchecked to checked by clicking it', () => {
        const component = render(<SettingsPage/>, container);

        const inputElement = screen.getByTestId("notifications-checkbox");

        // Click the checkbox
        fireEvent.click(inputElement)

        expect(inputElement.checked).toEqual(true);
    });

    test('Notifications checkbox can be changed from checked to unchecked by clicking it', () => {
        const component = render(<SettingsPage/>, container);

        const inputElement = screen.getByTestId("notifications-checkbox");

        // Click the checkbox twice
        fireEvent.click(inputElement)
        fireEvent.click(inputElement)

        expect(inputElement.checked).toEqual(false);
    });

    // --------------- Unit Tests for Updating Settings Page State Based Upon User Input ---------------

    test('Name state of component is updated from user input', () => {
        const component = render(<SettingsPage/>, container);
        const testDataValue = "Test Name";

        const inputElement = screen.getByTestId("name-input");
        userEvent.type(inputElement, testDataValue);

        expect(component.state.name === testDataValue);
    });

    test('Password state of component is updated from user input', () => {
        const component = render(<SettingsPage/>, container);
        const testDataValue = "testPassword123";

        const inputElement = screen.getByTestId("password-input");
        userEvent.type(inputElement, testDataValue);

        expect(component.state.password === testDataValue);
    });

    test('Password Confirmation state of component is updated from user input', () => {
        const component = render(<SettingsPage/>, container);
        const testDataValue = "testPassword123";

        const inputElement = screen.getByTestId("passwordConfirmation-input");
        userEvent.type(inputElement, testDataValue);

        expect(component.state.passwordConfirmation === testDataValue);
    });

    test('Bio state of component is updated from user input', () => {
        const component = render(<SettingsPage/>, container);
        const testDataValue = "test bio";

        const inputElement = screen.getByTestId("bio-input");
        userEvent.type(inputElement, testDataValue);

        expect(component.state.password === testDataValue);
    });

});



