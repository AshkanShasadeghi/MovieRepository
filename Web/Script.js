fetch("./../Information.json")
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
    EngMusicVideo.map((body) => {
      OutPut += `
      <section class="post">
      <h5>${body.ID + "<br/>" + body.Artist + "<br/>" + body.Title}</h5>
        <img src="https://s${body.Cover.Server}.picofile.com/file/${
        body.Cover.Code
      }/${body.Artist} - ${body.Title}.${body.Cover.Format}" class="cover" />
      </section>
      `;
    });
    document.querySelector("#OutPut").innerHTML = OutPut;
  });
