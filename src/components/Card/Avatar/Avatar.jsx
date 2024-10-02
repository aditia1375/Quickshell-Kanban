import React, { useEffect, useState,useMemo } from "react";
import styles from "./Avatar.module.css";

const AvatarWithStatus = ({ statusColor, grouping, indashBoard }) => {

  const [name, setName] = useState(""); // State to store the fetched user name

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment"); 
        const data = await response.json();
        setName(data.name); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const initials = useMemo(()=>{
    return grouping
      .split(" ")
      .map((item)=> item[0])
      .join("");
  },[grouping]);


  const getInitials = (name)=>{
    if(!name) return "";
    return name.charAt(0).toUpperCase();
  }

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