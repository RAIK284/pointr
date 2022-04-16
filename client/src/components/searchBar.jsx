import { React, useState } from 'react';
import TextField from "@mui/material/TextField";
import List from './List';
import data from "./ListData.json";
import './styles/searchBar.css';
import { fontFamily } from '@mui/system';


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
        className="searchPlaceholder"
        id="searchEntry"
        
        onChange={inputHandler}
        variant="outlined"
        size="normal"
        fullWidth
       
        label="Enter a username..."
        /* InputProps={{ style: { fontFamily:'Poppins'} }} */
        InputLabelProps={{ style: { fontFamily:'Poppins '}  }}
        
      />
    </div>
    <List input={inputText}/>
  </div>
);
}

export default SearchBar;