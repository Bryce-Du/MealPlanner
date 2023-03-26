import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from './userSlice';
import './Profile.css'

function ProfileForm(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const { user } = useSelector((state) => state.user)
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(id)
    dispatch(editUser({ id, editedUserData: formData }));
    navigate(`/user/${id}`)
  };

  return (
    <div className='profile'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData?.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pronouns">Pronouns:</label>
          <input
            type="text"
            name="pronouns"
            id="pronouns"
            value={formData?.pronouns}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData?.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData?.location}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default ProfileForm;