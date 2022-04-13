import s from "./FeedbackOptions.module.css"
import PropTypes from "prop-types"; 

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
       
    return <ul className={s.listButton}>
        {options.map(name => (
            <li className={s.title} key = {name}><button className={s.button} onClick={()=>{onLeaveFeedback(name)}}>{name}</button></li>
        ))}
    </ul>
    
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func
   
};

export default FeedbackOptions