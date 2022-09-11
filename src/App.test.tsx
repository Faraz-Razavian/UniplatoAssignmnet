import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import Profile from './Components/Profile';
import Home from './Components/Home';
import Search from './Components/Search';
import GetData from './Components/GetData';


const axios = require("axios");
jest.mock("axios");

test('renders Home', () => {
  render(<Home/>);
  const componentText = screen.getByText(/Home/i);
  expect(componentText).toBeInTheDocument();
});

test('renders Search', () => {
  render(<Search/>);
  const componentText = screen.getByText(/Search/i);
  expect(componentText).toBeInTheDocument();
});

test('renders Profile', () => {
  render(<Profile/>);
  const componentText = screen.getByText(/Profile/i);
  expect(componentText).toBeInTheDocument();
});

test("returns the title of the first album", async () => {
  axios.get.mockResolvedValue({
    data:{data:{data: [
      {
        id: 1,
        title: "How Green Was My Valley",
        description:"Phasellus id sapien in s…i vehicula condimentum.",
        image: "https://picsum.photos/id/240/300/300"
      },
    ],
  }}});
  
  const {getByText,container}=render(<GetData/>);
  await waitFor(() =>{
    const componentText = getByText(/How Green Was My Valley/i);
    expect(componentText).toBeInTheDocument();
  })
});