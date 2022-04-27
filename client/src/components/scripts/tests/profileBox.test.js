import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import ProfileBox from '../../profileBox';

let container = null;

let user = 
{
    username: "Bobby",
    bio: "cool bio"
}
let index = 0

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
// ['Profile', 'Messages', 'Store', 'Explore', 'Leaderboard', 'Settings']
describe("<HeaderDrawer />", () => {

    test('Label for the change name field is rendered', () => {
        render(<ProfileBox index={index} otherProfile={user}/>, container);

        expect(container.textContent).toContain(user.username);
    });

    test('Label for the change password field is rendered', () => {
        render(<ProfileBox index={index} otherProfile={user}/>, container);

        expect(container.textContent).toContain(user.bio);
    });
});