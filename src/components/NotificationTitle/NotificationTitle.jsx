import s from "./NotificationTitle.module.css"
import PropTypes from "prop-types"; 

const Notification = ({ message }) => {
    return (
        <b className={s.title}>{message}</b>
    )
};
Notification.propTypes = {
    message: PropTypes.string,  
};
export default Notification;