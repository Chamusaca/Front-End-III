import styles from "./styles.module.css";

function Card (props) {
    const {id, country, city, population, color} = props;
    return(
        <div className={styles.borda}>
            <p>{id}</p>
            <p>{country}</p>
            <p>{city}</p>
            <p>{population}</p>
            <p style={{color:color}}>{color}</p>
        </div>
    )
}

export default Card;