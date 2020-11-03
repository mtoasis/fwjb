
import React from "react";
import {ProfileTextContainer, ProfileContainer} from './profile.styles'

const userArray = [
  {
    id: 1,
    userName: "Julian",
    skills: "JavaScript",
    interests: ["Skiing", "Baseball", "Soccer"],
    createdAt: null,
  },
  {
    id: 2,
    userName: "Brian",
    skills: "Ruby on Rails",
    interests: ["Running", "fitness"],
    createdAt: null,
  },
  {
    id: 3,
    userName: "Ryan",
    skills: "JavaScript",
    interests: ["Basketball", "Food", "Fishing"],
    createdAt: null,
  },
  {
    id: 4,
    userName: "Justin",
    skills: "Ruby on Rails",
    interests: ["Fishing", "Programming"],
    createdAt: null,
  },
];

function editSubmit(){
  //when I have information to change I send post request to the back to change the details
  //edit form should bring me to a form where the skills can be edited

  console.log("Clicked!")

  // this submit opens up the editprofile component either a modal or changes what the form currently is
}

const Profile = () => {
  const userInfo = userArray[0];

  return (
    <ProfileContainer>
      <button onClick={()=>editSubmit()} >Edit Me!</button>
      {/* <img src={imgSrc} alt="image" /> */}
      <h2>username: {userInfo.userName}</h2>
      <ProfileTextContainer>skills: {userInfo.skills}</ProfileTextContainer>
      <ProfileTextContainer>interests: {userInfo.interests}</ProfileTextContainer>
    </ProfileContainer>
  );
};

export default Profile;



//UserInfo
//profile pics
//userName
//skills
//interests
//contact

