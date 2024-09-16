import React, { useState } from "react";
import Layout from "../Utils/Layout";
import { useNavigate } from "react-router-dom";
import { EventData } from "../../context/EventContext";
import EventCard from "../../components/EventCard";
import "./admincourses.css";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../main";

const categories = ["SENSE", "SELECT", "SCOPE", "SMEC"];

const AdminCourses = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [members, setMembers] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    console.log("Image Changed");

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const { events, fetchEvents } = EventData();

  const submitHandler = async (e) => {
    e.preventDefault();
    setBtnLoading(true);

    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("category", category);
    myForm.append("price", price);
    myForm.append("createdBy", createdBy);
    myForm.append("time", time);
    myForm.append("venue", venue);
    myForm.append("members", members);
    myForm.append("file", image);

    try {
      const { data } = await axios.post(`${server}/api/event/new`, myForm, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      toast.success(data.message);
      setBtnLoading(false);
      await fetchEvents();
      setImage("");
      setTitle("");
      setDescription("");
      setTime("");
      setVenue("");
      setMembers("");
      setImagePrev("");
      setCreatedBy("");
      setPrice("");
      setCategory("");
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <Layout>
      <div className="admin-courses">
        <div className="left">
          <h1>All Events</h1>
          <div className="dashboard-content">
            {events && events.length > 0 ? (
              events.map((e) => {
                return <EventCard key={e._id} event={e} />;
              })
            ) : (
              <p>No Events Yet</p>
            )}
          </div>
        </div>

        <div className="right">
          <div className="add-course">
            <div className="course-form">
              <h2>Add Event</h2>
              {/* <form onSubmit={submitHandler}>
                <label htmlFor="text">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />

                <label htmlFor="text">Description</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />

                <label htmlFor="text">Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />

                <label htmlFor="text">createdBy</label>
                <input
                  type="text"
                  value={createdBy}
                  onChange={(e) => setCreatedBy(e.target.value)}
                  required
                />

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value={""}>Select Category</option>
                  {categories.map((e) => (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  ))}
                </select>

                <label htmlFor="text">Time</label>
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />

                <label htmlFor="text">Venue</label>
                <input
                  type="text"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  required
                />

                <label htmlFor="text">Members</label>
                <input
                  type="text"
                  value={members}
                  onChange={(e) => setMembers(e.target.value)}
                  required
                />

                <input type="file" required onChange={changeImageHandler} />
                {imagePrev && <img src={imagePrev} alt="" width={300} />}

                <button
                  type="submit"
                  disabled={btnLoading}
                  className="common-btn"
                >
                  {btnLoading ? "Please Wait..." : "Add"}
                </button>
              </form> */}
              <form onSubmit={submitHandler}>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title" // Add id attribute here
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />

                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description" // Add id attribute here
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />

                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  id="price" // Add id attribute here
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />

                <label htmlFor="createdBy">Created By</label>
                <input
                  type="text"
                  id="createdBy" // Add id attribute here
                  value={createdBy}
                  onChange={(e) => setCreatedBy(e.target.value)}
                  required
                />

                <label htmlFor="category">Category</label>
                <select
                  id="category" // Add id attribute here
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  {categories.map((e) => (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  ))}
                </select>

                <label htmlFor="time">Time</label>
                <input
                  type="text"
                  id="time" // Add id attribute here
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />

                <label htmlFor="venue">Venue</label>
                <input
                  type="text"
                  id="venue" // Add id attribute here
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  required
                />

                <label htmlFor="members">Members</label>
                <input
                  type="text"
                  id="members" // Add id attribute here
                  value={members}
                  onChange={(e) => setMembers(e.target.value)}
                  required
                />

                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  id="image" // Add id attribute here
                  required
                  onChange={changeImageHandler}
                />
                {imagePrev && <img src={imagePrev} alt="" width={300} />}

                <button
                  type="submit"
                  disabled={btnLoading}
                  className="common-btn"
                >
                  {btnLoading ? "Please Wait..." : "Add"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminCourses;
