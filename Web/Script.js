fetch("./../employee.json")
  .then((response) => response.json())
  .then((Data) => {
    const { Per, Eng } = Data;
    const {
      Movie: PerMovie,
      Series: PerSeries,
      Music: PerMusic,
      MusicVideo: PerMusicVideo,
      Software: PerSoftware,
      PCGame: PerPCGame,
      Application: PerApplication,
      AndroidGame: PerAndroidGame,
    } = Per;
    let OutPut = "";
    // PerMovie.map((body) => {
    //   body.Actors.map((actor) => {
    //     OutPut += `${actor.Name} <br/>`;
    //   });
    // });
    PerMusic.map((body) => {
      OutPut += `
        <section>
        <img src="./../Images/${body.Artist} - ${body.Album}.jpg" alt="./../Images/${body.Artist} - ${body.Album}.jpg" />
        <p>
          ${body.Artist} - ${body.Title}
        </p>
        </section>
      `;
    });
    document.querySelector("#OutPut").innerHTML = OutPut;
  });
