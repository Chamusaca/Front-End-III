import styles from "./styles.module.css";

function Card (props) {
    const {item} = props;
    return(
        <li className={styles.borda}>
            <p>{item.id}</p>
            <p>{item.country}</p>
            <p>{item.city}</p>
            <p>{item.population}</p>
            <p style={{color:item.color}}>{item.color}</p>
        </li>
    )
}

export default Card;