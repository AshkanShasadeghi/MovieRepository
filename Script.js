fetch("./../JSON/Animation.json")
  .then((response) => response.json())
  .then((Data) => {
    let OutPut = "";
    Data.map((body) => {
      OutPut += `
      <section class="post">
      
      <h5>${
        body.ID +
        "<br/>" +
        body.Name +
        "<br/>" +
        body.Title +
        "<br/>" +
        body.Year +
        "<br/>" +
        body.Genre.map((p) => <>{p},</>)
      }</h5>
        <img src="https://s${body.Cover.Server}.picofile.com/file/${
        body.Cover.Code
      }/${body.Artist} - ${body.Title}.${body.Cover.Format}" class="cover" />

      </section>
      `;
    });
    document.querySelector("#OutPut").innerHTML = OutPut;
  });
