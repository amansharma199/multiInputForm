import { useState } from "react";
import "./inputForm.css";
import { useDispatch } from 'react-redux';
import { addStudentData } from "../../redux/finalDataSlice";
import {useNavigate} from 'react-router-dom';


const InputForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [userAdmission, setUserAdmission] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    cPassword: "",
    subject: "",
    gender: ""
  })

  const [studentData, setStudentData] = useState([])

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserAdmission({ ...userAdmission, [name]: value })
    console.log(name, value)
  }


  const handleSubject = () => {
    const selectedSub = document.getElementById("selectedSub");
    setUserAdmission({ ...userAdmission, subject: selectedSub.value })
  }

  const handleGender = (e) => {
    const selectedGender = e.target.value;
    console.log(selectedGender);
    setUserAdmission({ ...userAdmission, gender: selectedGender })
  }

  const handleSubmit = (e) => {
    const { fullname, username, password, cPassword, phone, gender, subject } = userAdmission;
    e.preventDefault();
    if (fullname && username && password && cPassword && gender && subject) {
      if (phone.length < 10) {
        alert("Please fill Correct Mobile No.")
      } else if (fullname.length < 3) {
        alert("Please Fill Correct Fullname")
      } else if (password !== cPassword) {
        alert("Password Not Match")
      }
      else {
        const newStudentData = {
          ...userAdmission,
          id: new Date().getTime().toString()
        }
        setStudentData([...studentData, newStudentData])
        console.log(studentData);
        alert("data Saved Succesfully");
        dispatch(addStudentData(studentData));

        

        
      }
    } else {
      alert("Please fill all the Inputs")
    }


  }

  return (
    <>
      <form onSubmit={handleSubmit} className='input-form'>
        <div className='inputWrapper'>
          <div className='input-heading'>
            <h2>Student Admission Form</h2>
          </div>
          <div className="input-field">

            <div className='userInfo fullname'>
              <span>Full Name</span>
              <input type="text"
                autoComplete="off"
                name="fullname"
                value={userAdmission.fullname}
                onChange={handleInput} />
            </div>

            <div className='userInfo username'>
              <span>Username</span>
              <input type="text"
                autoComplete="off"
                name="username"
                value={userAdmission.username}
                onChange={handleInput} />
            </div>

            <div className='userInfo email'>
              <span>Email</span>
              <input type="email"
                autoComplete="off"
                name="email"
                value={userAdmission.email}
                onChange={handleInput} />
            </div>

            <div className='userInfo phone'>
              <span>Phone</span>
              <input type="number"
                autoComplete="off"
                name="phone"
                value={userAdmission.phone}
                onChange={handleInput} />
            </div>

            <div className='userInfo password'>
              <span>Password</span>
              <input type="password"
                autoComplete="off"
                name="password"
                value={userAdmission.password}
                onChange={handleInput} />
            </div>

            <div className='userInfo confirm-password'>
              <span>Confirm Password</span>
              <input type="password"
                autoComplete="off"
                name="cPassword"
                value={userAdmission.cPassword}
                onChange={handleInput} />
            </div>

          </div>
          <div className="gender">
            <input type="radio" name="gender" value="male" id="male" onChange={handleGender} /><label>Male</label>
            <input type="radio" name="gender" value="female" id="female" onChange={handleGender} /><label>Female</label>
            <input type="radio" name="gender" value="not-to-say" id="not-to-say" onChange={handleGender} /><label>Prefer Not to Say</label>
          </div>
          <div className="subject">
            <select onChange={handleSubject} id="selectedSub">
              <option>Select Your Subject</option>
              <option>Math</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Biology</option>
              <option>History</option>
              <option>Geography</option>
              <option>Civics</option>
              <option>Political Science</option>
            </select>
          </div>
          <div className="register-btn">
            <button type="submit">register</button>
            <button type="go-to-data-page" onClick={()=>navigate('/final-data')}>View Data</button>
          </div>
        </div>
      </form>

      
    </>
  )
}

export default InputForm;