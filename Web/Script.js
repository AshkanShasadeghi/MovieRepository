fetch("./../employee.json")
  .then((response) => response.json())
  .then((Data) => {
    const { Per, Eng } = Data;
    const {
      Movie: PerMovie,
      Series: PerSeries,
      Animation: PerAnimation,
      Music: PerMusic,
      MusicVideo: PerMusicVideo,
      Software: PerSoftware,
      PCGame: PerPCGame,
      Application: PerApplication,
      AndroidGame: PerAndroidGame,
    } = Per;
    let OutPut = "";
    PerAnimation.map((body) => {
      body.Actors.map((actor) => {
        const { Name } = actor;
        OutPut += `
          <section>
            <img src="./../Images/Actors/${Name}.jpg" alt="./../Images/Actors/${Name}.jpg" />
            <p>${Name}</p>
          </section>
          `;
      });
    });
    document.querySelector("#OutPut").innerHTML = OutPut;
  });
