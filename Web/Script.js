fetch("./../employee.json")
  .then((response) => response.json())
  .then((Data) => {
    const { English } = Data;
    const {
      Movie: EngMovie,
      Series: EngSeries,
      Animation: EngAnimation,
      Music: EngMusic,
      MusicVideo: EngMusicVideo,
      Software: EngSoftware,
      PCGame: EngPCGame,
      Application: EngApplication,
      AndroidGame: EngAndroidGame,
    } = English;
    let OutPut = "";
    EngAnimation.map((body) => {
      body.Country.map((Count) => {
        const { Name, Flags } = Count;
        OutPut += `
          <section>
            <img src="${Flags.Whatsapp}" alt="${Name}" />
            <p>${Name}</p>
          </section>
          `;
      });
    });
    document.querySelector("#OutPut").innerHTML = OutPut;
  });
