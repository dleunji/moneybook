import React from 'react';
import Header from '../../components/Header';
import { useSelector } from 'react-redux';
const HomeContainer = () => {
  const { user } = useSelector(({ auth }) => ({
    user: auth.currentUser,
  }));

  return (
    <div>
      <Header user={user}/>
      부자가 되자~
    </div>
  );
}
export default HomeContainer;