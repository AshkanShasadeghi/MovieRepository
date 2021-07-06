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
    EngSeries.map((body) => {
      OutPut +=
        `
      <section class="post">
      <h5>${body.ID + " - " + body.Name}</h5>
        <img src="https://s${body.Cover.Server}.picofile.com/file/${
          body.Cover.Code
        }/Background.${body.Cover.Format}" class="cover" />
        <img src="https://s${body.Background.Server}.picofile.com/file/${
          body.Background.Code
        }/Background.${body.Background.Format}" class="background" />
      <div class="flags">
        ` +
        body.Country.map((flag) => {
          return `<img class="flag" src="${flag.Flags.Facebook}" />`;
        }) +
        `
      </div>
      </section>
      `;
    });
    document.querySelector("#OutPut").innerHTML = OutPut;
  });
