import React from "react";
import styles from "./Avatar.module.css";

const AvatarWithStatus = ({ statusColor, grouping, indashBoard }) => {



  // const getInitials = (name)=>{
  //   if(!name) return "";
  //   return name.charAt(0).toUpperCase();
  // }

  return (
    <>
      {indashBoard ? (
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}>
              {getInitials(name)}
          </div>
        <span
          className={styles.status}
          style={{ backgroundColor: statusColor }}
        />
      </div>) : (<div></div>)}
      {
      }

      {}
    </>
  );
};

export default AvatarWithStatus;