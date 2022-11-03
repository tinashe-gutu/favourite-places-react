interface Place {
  img: string;
  title: string;
  place: string[];
  placeURL: string;
  description: string;
}

export function FavouritePlace(props: Place): JSX.Element {
  return (
    <div>
      <img src={props.img} alt="Place" />
      <h1> {props.title} </h1>
      <h2>
        {props.place.join(", ")}
        <a href={props.placeURL}> (map link)</a>
      </h2>
      <p>{props.description}</p>
    </div>
  );
}
