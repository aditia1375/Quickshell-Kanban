import React, { useEffect, useState } from "react";
import styles from "../Column/Column.module.css";
import AvatarWithStatus from "../Card/Avatar/Avatar";
import FeatureRequestCard from "../Card/FeatureCard";

import doneIcon from '../../assets/Done.svg'
import inProgressIcon from '../../assets/in-progress.svg'
import canceledIcon from '../../assets/Cancelled.svg';
import todoIcon from '../../assets/To-do.svg';
import backlogIcon from '../../assets/Backlog.svg';
import noPriorityIcon from '../../assets/No-priority.svg';
import lowPriorityIcon from '../../assets/LowPriority.svg';
import mediumPriorityIcon from '../../assets/MediumPriority.svg';
import highPriorityIcon from '../../assets/HighPriority.svg';
import urgentIcon from '../../assets/urgent.svg';
import plus from '../../assets/add.svg';
import dotsIcon from '../../assets/dotMenu.svg'

const icons = {
  Done: <img src={doneIcon} alt="Done" className={styles.icon} />,
  "In progress": <img src={inProgressIcon} alt="In progress" className="styles.icon" />,
  Canceled: <img src={canceledIcon} alt="Canceled" className={styles.icon} />,
  Todo: <img src={todoIcon} alt="Todo" className={styles.icon} />,
  Backlog: <img src={backlogIcon} alt="Backlog" className={styles.icon} />,
  "No priority": <img src={noPriorityIcon} alt="No priority" className={styles.icon} />,
  Urgent: <img src={urgentIcon} alt="Urgent" className={styles.icon} />,High: <img src={highPriorityIcon} alt="High priority" className={styles.icon} />,
  Low: <img src={lowPriorityIcon} alt="Low priority" className={styles.icon} />,Medium: <img src={mediumPriorityIcon} alt="Medium priority" className={styles.icon} />, 
};
const Column = ({ title,tickets, ordering, grouping }) => {
    
  return (
    <div className={styles.column}>
      <div className={styles.leftview}>
        <div className="dot">
          {grouping !== undefined && grouping === "user" ? (
            <>
              <div>
                <AvatarWithStatus statusColor={"green"} grouping={grouping} indashBoard={grouping === "user"}/>
              </div>
            </>
          ) : (
            <>{icons[title]}</>
          )}

       
        </div>
        <div className={styles.name_label}>
        <h5 className={styles.toLeft}> {title}</h5>
        <h5 className={styles.heading}>{tickets.length}</h5>
        </div>
        
        <div className={styles.lineHead}>
        <img className={styles.icon} src={plus} alt="Add" />
        <img className={styles.icon} src={dotsIcon} alt="Options" />

        </div>
      </div>

      <div className={styles.card_container}>
        {tickets !== undefined &&
          tickets.map((ticket, i) => {
            return (
              <FeatureRequestCard
                key={i}
                id={ticket.id}
                tag={ticket.tag.join("")}
                title={ticket.title}
                grouping={grouping}
                priority ={ticket.priority}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Column;