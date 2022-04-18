import { React, useState, useEffect } from 'react'
//import data from "./ListData.json"
import ProfileBox from "./profileBox"
import "./styles/explorePage.css";


function List(props) {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:8080/api/usersInfo')
            const json = await res.json();

            setUserData(json);
        }

        fetchData();
    }, [])

    console.log(userData)
    //const data = fetch()
    const filteredData = userData.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.username.toLowerCase().includes(props.input)
        }
    })

    return (userData !== []) ? (
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
) : '';
}
export default List