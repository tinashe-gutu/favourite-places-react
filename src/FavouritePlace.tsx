function FavrouitePlace(props: any): JSX.Element {
  return (
    <div>
      <img src={props.image} alt="Place" />
      <h1> {props.title} </h1>
      <h2>
        {props.place}, {props.country}
        <a href={props.placeURL}>map link</a>
      </h2>
      <p>{props.description}</p>
    </div>
  );
}
