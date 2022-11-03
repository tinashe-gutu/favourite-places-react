import { FavouritePlace } from "./FavouritePlace";

function App(): JSX.Element {
  const places = [
    {
      img: "https://media.istockphoto.com/photos/bangkok-cityscape-picture-id483816132?k=20&m=483816132&s=612x612&w=0&h=w9TX3ICqSQ4mhakng6eJYhcnciMQB6O3awnZzCu1o2Y=",
      title: "Best of Bangkok",
      place: ["Thailand", "Bangkok"],
      placeURL:
        "https://www.google.com/maps/place/Bangkok,+Thailand/@13.8316056,100.4006026,9.67z/data=!4m5!3m4!1s0x311d6032280d61f3:0x10100b25de24820!8m2!3d13.7563309!4d100.5017651",
      description:
        "First place i visited in Asia. Amazing people, very humid weather.",
    },
    {
      img: "https://media.istockphoto.com/photos/modern-bedroom-room-interior-at-night-picture-id1356149036?k=20&m=1356149036&s=612x612&w=0&h=107J9-PBZXjjlIVIiCG71Qf_Dv85rNfrvHACi4Har5s=",
      title: "Best of Beds",
      place: ["House", "BedRoom"],
      placeURL:
        "https://www.google.com/maps/place/Royal+Leamington+Spa/@52.2854181,-1.5622588,13z/data=!3m1!4b1!4m5!3m4!1s0x48773134f8c8a587:0xc558ff5e604fbae3!8m2!3d52.2851905!4d-1.5200789",
      description: "Nothing better than a bed, especially in winter.",
    },
    {
      img: "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWlsa3klMjB3YXl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      title: "The Milky Way Galxy",
      place: ["Universe", "Milky Way"],
      placeURL:
        "https://www.google.com/maps/search/milky+way+galaxy+map/@-75.3265076,179.1520122,3450993m/data=!3m1!1e3",
      description: "Really dont know where i would be without this place.",
    },
    {
      img: "https://media.istockphoto.com/photos/victoria-falls-sunrise-long-exposure-picture-id951405086?b=1&k=20&m=951405086&s=170667a&w=0&h=YXD7Jt83Fdb-RQhZfnCNaoUwGemaVS7xxrMbHRQBAb0=",
      title: "Victoria Falls",
      place: ["Zimbabwe", "Livingstone"],
      placeURL:
        "https://www.google.com/maps/place/Victoria+Falls,+Zimbabwe/@-17.9316801,25.8092289,14z/data=!3m1!4b1!4m5!3m4!1s0x194fe53f0d97964b:0xb5064359416ab317!8m2!3d-17.9315803!4d25.8301677",
      description: "One beautiful site from my birth.",
    },
  ];
  const FavPlaces = [];
  for (const place of places) {
    FavPlaces.push(<FavouritePlace {...place} />);
  }

  return (
    <>
      <h1>Tinashe's Favourite Places</h1>
      {FavPlaces}
      <footer>
        <i>
          images from <a href="https://unsplash.com/">unsplash.com</a>
        </i>
      </footer>
    </>
  );
}

export default App;
