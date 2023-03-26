import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getUserById } from './userSlice';
import './Profile.css'

function Profile(props) {
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(getUserById(id))
  }, [dispatch, id])
  const userData = useSelector((state) => state.user?.user)
  const currentUser = useSelector((state) => state.auth?.user)
  const isUser = (id === currentUser?.user)

  // protect route for logged in users
  if (!currentUser) {
    return <h3>Must be logged in to view profile.</h3>
  }

  return (
    <div className='profile'>
      <h3>{userData?.name}'s profile</h3>
      <p>pronouns: {userData?.pronouns}</p>
      <p>email: {userData?.email}</p>
      <p>location: {userData?.location}</p>
      {isUser &&
        <Link to={`/user/${id}/edit`} className='edit-button'>Edit Profile</Link>
      }
    </div>
  );
}

export default Profile;