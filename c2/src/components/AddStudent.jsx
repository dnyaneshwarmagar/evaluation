import { useState } from "react";

export const AddStudent = () => {
  const [formData, setFormData] = useState({
    "first_name": "",
"last_name": "",
"email": "",
"gender": "",
"age": null,
"tenth_score": null,
"twelth_score": null,
"preferred_branch": ""
  });

  const handle= (e) =>{
    const {name,value} = e.target;
    console.log(e.target)
    setFormData({
      ...formData,[name]:value
    })
    console.log(formData)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    fetch("http://localhost:8080/students",{
      method:"POST",
      headers:{
          "content-type":"application/json",
      },
      body:JSON.stringify({...formData}),
    
    }).then(()=>{
      
    })
    // const create = e.target.value;
    console.log("formData: :", formData.first_name, formData.age)
  }

  return (
    <form className="addstudent" onSubmit={handleSubmit}>
      <div>
        Firstname:{" "}
        <input
          onChange={handle}
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          onChange={handle}
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          onChange={handle}
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            onChange={handle}
            name="gender"
            className="male"
            type="radio"
            value={"male"}
          />{" "}
          Female{" "}
          <input
            onChange={handle}
            name="gender"
            className="female"
            type="radio"
            value={"female"}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          onChange={handle}
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          onChange={handle}
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          onChange={handle}
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
        />{" "}
      </div>
      <div>
        <select
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
