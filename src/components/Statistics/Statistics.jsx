import s from "./Statistics.module.css"
import PropTypes from "prop-types"; 
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    
    return (
        <div className={s.statBox}>
            <h3>Statistics:</h3>
            <ul className={s.list}>
                <li className={s.item}>Good - <span className={s.feetBack}>{good}</span></li>
                <li className={s.item}>Neutral - <span className={s.feetBack}>{neutral}</span></li>
                <li className={s.item}>Bad - <span className={s.feetBack}>{bad}</span></li>
            </ul>
            <p className={s.titleTotal}>Total -<span className={s.feetBack}>{total}</span></p>
            <p className={s.titlePercent}>Positive Feedback -<span className={s.feetBack}>{positivePercentage}%</span></p>
        </div>
        
        
    )
}
Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
};
export default Statistics;