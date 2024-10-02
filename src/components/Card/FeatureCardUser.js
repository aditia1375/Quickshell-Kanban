import React from "react";
import styles from "./Card.module.css";
import AvatarWithStatus from "./Avatar/Avatar";

import noPriorityIcon from '../../assets/No-priority.svg';
import lowPriorityIcon from '../../assets/LowPriority.svg';
import mediumPriorityIcon from '../../assets/MediumPriority.svg';
import highPriorityIcon from '../../assets/HighPriority.svg';
import urgentIcon from '../../assets/urgent.svg';

import doneIcon from '../../assets/Done.svg'
import inProgressIcon from '../../assets/in-progress.svg'
import canceledIcon from '../../assets/Cancelled.svg';
import todoIcon from '../../assets/To-do.svg';
import backlogIcon from '../../assets/Backlog.svg';

const priorityIcons = {
    "No priority": <img src={noPriorityIcon} alt="No priority" className={styles.icon} />,
    Low: <img src={lowPriorityIcon} alt="Low priority" className={styles.icon} />,
    Medium: <img src={mediumPriorityIcon} alt="Medium priority" className={styles.icon} />,
    High: <img src={highPriorityIcon} alt="High priority" className={styles.icon} />,
    Urgent: <img src={urgentIcon} alt="Urgent" className={styles.icon} />,
};

const statusIcons = {
    Done: <img src={doneIcon} alt="Done" className={styles.icon} />,
    "In progress": <img src={inProgressIcon} alt="In progress" className="styles.icon" />,
    Canceled: <img src={canceledIcon} alt="Canceled" className={styles.icon} />,
    Todo: <img src={todoIcon} alt="Todo" className={styles.icon} />,
    Backlog: <img src={backlogIcon} alt="Backlog" className={styles.icon} />,
}

const FeatureRequestUser =({id,title,tag,grouping})=>{
    return(
        <div>
            <div className={styles.card}>
                <div className={styles.header}>
                    
                </div>
                <div className={styles.content}>

                </div>
            </div>
        </div>
    );
};

export default FeatureRequestUser;