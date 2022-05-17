fetch("./../JSON/Music Video.json")
  .then((response) => response.json())
  .then((Data) => {
    let OutPut = "";
    Data.map((body) => {
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
