import React from "react";
import styles from "./UserList.module.css";
import UserItem from "../UserItem/UserItem";

const UserList = (props) => {
  return (
    <div className={styles.user}>
      <ul className={styles.userList}>
        {props.UserItems.map((currentItem) => {
          return (
            <UserItem currentItem={currentItem} listId={currentItem.id}/>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
