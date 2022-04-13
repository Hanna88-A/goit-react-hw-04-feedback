import e from "./Section.module.css"
import PropTypes from "prop-types"; 

const Section = ({ title, children }) => {
 
    return (
        <section className={e.section}>
            <h2>{title}</h2>
            {children}
        </section>
        
    )
}
Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.array
   
};
export default Section