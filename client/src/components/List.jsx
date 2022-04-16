import { React, useState } from 'react'
import data from "./ListData.json"
import ProfileBox from "./profileBox"
import "./styles/explorePage.css";

/* let count = 0 */
function List(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <div className="resultsDisplay">
        {/* <ul> */}
            {filteredData.map((item) => (
                <div>
                    {
                        /* count < 3
                        ? */
                        /* onLoad={()=>{count++}} */
                        <div  >
                            <ProfileBox otherProfile={item}/>
                        </div>
                        /* :
                        false */
                    }
                </div>
                
            ))}
{/*         </ul>
 */}
        </div>
    )
}
export default List