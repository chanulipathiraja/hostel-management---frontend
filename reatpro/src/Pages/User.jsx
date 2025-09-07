import React, { useState } from "react";
import axios from "axios";
import "./User.css";

function User() {
  const [formData, setFormData] = useState({
    studentName: "",
    userName: "",
    hostelName: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    floorNo: "1",
    regNo: "",
    roomNo: "",
    indexNo: "",
    address: "",
    parentDetails: "",
    otherDetails: "",
    image: null,
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // use FormData for file upload
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      const res = await axios.post("http://localhost:3001/api/users/register", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("User added successfully!");
      console.log("User added successfully!", res.data);
    } catch (err) {
      console.error(err);
      alert("Error adding user");
    }
  };

  return (
    <div className="User">
      <h1>User Registration</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="studentName">Student Name</label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          placeholder="Your name here"
        />
        <br /><br />

        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="User name"
        />
        <br /><br />

        <label htmlFor="hostelName">Your Hostel Name</label>
        <input
          type="text"
          id="hostelName"
          name="hostelName"
          value={formData.hostelName}
          onChange={handleChange}
          placeholder="Your hostel name"
        />
        <br /><br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /><br />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <br /><br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <br /><br />

        <label htmlFor="image">Upload an image</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
        <br /><br />

        <label htmlFor="phone">Phone No</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone No"
        />
        <br /><br />

        <label htmlFor="floorNo">Floor No</label>
        <select
          id="floorNo"
          name="floorNo"
          value={formData.floorNo}
          onChange={handleChange}
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <br /><br />

        <label htmlFor="regNo">Registration No</label>
        <input
          type="text"
          id="regNo"
          name="regNo"
          value={formData.regNo}
          onChange={handleChange}
          placeholder="Registration No"
        />
        <br /><br />

        <label htmlFor="roomNo">Room No</label>
        <input
          type="text"
          id="roomNo"
          name="roomNo"
          value={formData.roomNo}
          onChange={handleChange}
          placeholder="Room No"
        />
        <br /><br />

        <label htmlFor="indexNo">Index No</label>
        <input
          type="text"
          id="indexNo"
          name="indexNo"
          value={formData.indexNo}
          onChange={handleChange}
          placeholder="Index No"
        />
        <br /><br />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <br /><br />

        <label htmlFor="parentDetails">Parent Name & Phone No</label>
        <textarea
          id="parentDetails"
          name="parentDetails"
          value={formData.parentDetails}
          onChange={handleChange}
          placeholder="Parent Name & Phone No"
        />
        <br /><br />

        <label htmlFor="otherDetails">Other Details</label>
        <textarea
          id="otherDetails"
          name="otherDetails"
          value={formData.otherDetails}
          onChange={handleChange}
          placeholder="Other Details"
        />
        <br /><br />

        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default User;
