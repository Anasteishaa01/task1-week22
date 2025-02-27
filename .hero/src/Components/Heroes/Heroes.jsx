import './Heroes.css';

function Heroes(props) {
    return (
        <div className="hero-card">
            <h2 className="card-name">{props.name}</h2>
            <p className="card-text">Вселенная: {props.universe}</p>
            <p className="card-text">Альтер эго: {props.alterego}</p>
            <p className="card-text">Род деятельности: {props.occupation}</p>
            <p className="card-text">Друзья: {props.friends}</p>
            <p className="card-text">Суперсилы: {props.superpowers}</p>
            <img className="hero-image" src={props.url} alt={props.name}></img>
        </div>
    )
}

export default Heroes;