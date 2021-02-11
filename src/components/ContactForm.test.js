import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';


test("renders no errors", async () => {
    render(<ContactForm/>);


const fnameInput = screen.getByLabelText(/First Name/i);
const lnameInput = screen.getByLabelText(/Last Name/i);
const emailInput = screen.getByLabelText(/email/i);
const messageInput = screen.getByLabelText(/message/i);
const button = screen.getByRole("button");

userEvent.type(fnameInput, "Chase");
userEvent.type(lnameInput, "Snider");
userEvent.type(emailInput, "Blah@blah.com");
userEvent.type(messageInput, "Message is working");
userEvent.click(button);


const firstInput = await screen.findByText(/Chase/i)
const secondInput= await screen.findByText(/Snider/i)
const thirdInput = await screen.findByText(/Blah@blah.com/i)
const fourthInput = await screen.findByText(/Message is working/i)

expect(firstInput).toBeInTheDocument();
expect(secondInput).toBeInTheDocument();
expect(thirdInput).toBeInTheDocument();
expect(fourthInput).toBeInTheDocument();

})