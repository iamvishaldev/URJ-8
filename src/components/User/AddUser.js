import React, { useState, Fragment } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import UserForm from "../UserForm/UserForm";
import UserList from "../UserList/UserList";

const AddUser = () => {
  const [userData, setUserData] = useState([]);


  const AddedFormData = (formData) => {
    // setUserData((prevData)=>{
    //   return[...prevData,formData]
    // })
    // console.log(userData)
    setUserData([...userData,formData]);
  };

  return (
    <Fragment>
      <Card className={styles.input}>
        <UserForm onSaveFormData={AddedFormData} />
      </Card>
      <UserList UserItems={userData} />
    </Fragment>
  );
};

export default AddUser;
