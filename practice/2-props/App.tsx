
  interface ProfileProps{
    name: string;
    profession: string;
    awards: number|string;
    desc: string;
    discovery: string;
  }

  function getImageUrl({imageId}: {imageId: string}, size = 's') {
    return (
      'https://i.imgur.com/' +
      imageId +
      size +
      '.jpg'
    );
  }


  export function Profile({name, profession, awards, desc, discovery}: ProfileProps)
  {
    return (
      <div>
      <section className="profile">
          <h2>{name}</h2>
          <img
            className="avatar"
            src={getImageUrl('szV5sdG')}
            alt="Maria Skłodowska-Curie"
            width={70}
            height={70}
          />
          <ul>
            <li>
              <b>Profession: </b>
              {profession}
            </li>
            <li>
              <b>Awards: {awards} </b>
              {desc}
            </li>
            <li>
              <b>Discovered: </b>
              {discovery}
            </li>
          </ul>
        </section>
      </div>
    )
  };

  export default function Gallery() {
    return (
      <div>
        <h1>Notable Scientists</h1>
        <Profile name="Maria Skłodowska-Curie"
                profession="physicist and chemist"
                awards="4"
                desc="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
                discovery="polonium (chemical element)" />
      <Profile name="Katsuko Saruhashi"
                profession="geochemist"
                awards="2"
                desc="Miyake Prize for geochemistry, Tanaka Prize"
                discovery="a method for measuring carbon dioxide in seawater"
      />
      </div>
    );
  }
