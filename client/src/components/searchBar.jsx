import { React, useState } from 'react';
import TextField from "@mui/material/TextField";
import List from './List';
import './styles/searchBar.css';

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
        id="searchEntry"
        data-testid = "searchEntry"
        
        onChange={inputHandler}
        variant="outlined"
        size="normal"
        margin="none"
        
        fullWidth
       
        label="Search for a user..."
        
        InputLabelProps={{ style: { fontFamily:'Poppins', fontWeight: '700px',borderWidth:'3px'}  }}
        borderWidth='5px'
      />
    </div>

    <List input={inputText}/>
  </div>
);
}

export default SearchBar;