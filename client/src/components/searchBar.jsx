import { React, useState } from 'react';
import TextField from "@mui/material/TextField";
import List from './List';
import data from "./ListData.json";
import './styles/explorePage.css';


/* code inspired by this tutorial: https://dev.to/salehmubashar/search-bar-in-react-js-545l */


function SearchBar() {

const [inputText, setInputText] = useState("");
let inputHandler = (e) => {
  //convert input text to lower case
  var lowerCase = e.target.value.toLowerCase();
  setInputText(lowerCase);
};

return (
  <div className="main">
    
    <div className="search">
      <TextField
        
        onChange={inputHandler}
        variant="outlined"
        fullWidth
        label="Search"
      />
    </div>
    <List input={inputText} />
  </div>
);
}

export default SearchBar;