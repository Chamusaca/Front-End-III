function Card(props){
    const {img, title, description} = props;

    return (
        <div style={{ width: 70, border: "1px solid black" }}>
            <img width={40} src={img} alt={title} />
            <h2>{title}</h2>
            <span>{description}</span>
        </div>
    )
}

export default Card;