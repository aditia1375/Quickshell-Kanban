import React, { useMemo } from "react";
import styles from "./Card.module.css";
import AvatarWithStatus from "./Avatar/Avatar";

import noPriorityIcon from '../../assets/No-priority.svg';
import lowPriorityIcon from '../../assets/LowPriority.svg';
import mediumPriorityIcon from '../../assets/MediumPriority.svg';
import highPriorityIcon from '../../assets/HighPriority.svg';
import urgentIcon from '../../assets/urgent.svg';



const priorityIcons = {
    "No priority": <img src={noPriorityIcon} alt="No priority" className={styles.icon} />,
    Low: <img src={lowPriorityIcon} alt="Low priority" className={styles.icon} />,
    Medium: <img src={mediumPriorityIcon} alt="Medium priority" className={styles.icon} />,
    High: <img src={highPriorityIcon} alt="High priority" className={styles.icon} />,
    Urgent: <img src={urgentIcon} alt="Urgent" className={styles.icon} />,
};  

const FeatureRequestCard = ({ id, title, tag,grouping,priority }) => {

  

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 0:
        return (
          <>
            <img src={noPriorityIcon} alt="No Priority" className={styles.icon} />
            
          </>
        );
      case 1:
        return (
          <>
            <img src={lowPriorityIcon} alt="Low Priority" className={styles.icon} />
            
          </>
        );
      case 2:
        return (
          <>
            <img src={mediumPriorityIcon} alt="Medium Priority" className={styles.icon} />
           
          </>
        );
      case 3:
        return (
          <>
            <img src={highPriorityIcon} alt="High Priority" className={styles.icon} />
            
          </>
        );
      case 4:
        return (
          <>
            <img src={urgentIcon} alt="Urgent Priority" className={styles.icon} />
            
          </>
        );
      default:
        return "";
    }
  };
  
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.headerText}>{id}</span>
          
          <span className={styles.statusBubble}></span>
          <AvatarWithStatus statusColor={"grey"} grouping={grouping} indashBoard={grouping!=="user"}/>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <div  className={styles.inside}>
            <div className={styles.nafl}>
            <span className={styles.priorityLabel}>{getPriorityLabel(priority)}</span>
            </div>
            <div className={styles.dot}></div>
            <button className={styles.featureRequestButton}> {tag} </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureRequestCard;