 interface Place {
    image: string;
    title: string;
    place: string[];
    placeURL: string
    description: string
}

function FavrouitePlace(props: Place): JSX.Element {
  return (
    <div>
      <img src={props.image} alt="Place" />
      <h1> {props.title} </h1>
      <h2>
        {props.place.join(',')}
        <a href={props.placeURL}>map link</a>
      </h2>
      <p>{props.description}</p>
    </div>
  );
}
