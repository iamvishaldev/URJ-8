import React from "react";
import Card from "../UI/Card";
import styles from "../UserItem/UserItem.module.css"
const UserItem = (props) => {
  return (
    <Card className={styles.userItem__style}>
      <li
      className={styles.userItem__list}
      key={props.listId}
      >{` ${props.currentItem.name} ${props.currentItem.age} Year Old`}</li>
    </Card>
  );
};

export default UserItem;
