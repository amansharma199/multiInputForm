import "./finalData.css"
import {useSelector} from "react-redux";

const FinalData = () => {

  const finalStudentData = useSelector((state) => state.studentData);
  console.log(finalStudentData[finalStudentData.length]); 

 

  return (
    <div className="finalData">
        <div className="finalDataWrapper">
            <table>
              <tr className="heading-table">
                <th>Full Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Password</th>
                <th>Gender</th>
                <th>Subject</th>
              </tr>
              {/* {finalStudentData.map((curr)=>{
                <tr>
                  <td>{curr.fullname}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              })} */}
                
            </table>
        </div>
    </div>
  )
}

export default FinalData