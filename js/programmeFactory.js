// DOM
const programme = document.getElementById("programme");
const movieList = document.getElementById("movieList");
let html = ``;

programmation.forEach((jour) => {
  jour.films.forEach((film, index) => {
    html += `
    <tr>
      <td>${index ? "" : jour.date} </td>
      <td>${film.heure} </td>
      <td>
        <img src="assets/${film.img}" alt="">
        <p>${film.titre}</p>
      </td>
      <td>${film.duration}</td>
    </tr>`;
  });
});

movieList.innerHTML = html;

function init(nav) {
  htmlBtn = `<div class="nav">`;
  programmation.forEach((programme, index) => {
    htmlBtn += `<button ${index == nav ? 'class="btn-selected"' : ""} class="nav-${index}" >${programme.date}</button>`;
  });

  html = `
  </div>
  <div class="list">`;
  programmation[nav].films.forEach((film, index) => {
      html += `
      <div class="card row">
        <div class="heure">${film.heure}</div>
        <img src="assets/${film.img}" alt="">
        <div class="card-content">
          <h3>${film.titre}</h3>
          <p class="author"><span>Un films de<strong>${film.auteur}</strong></span> <span class="duration">Durée: ${film.duration}</span></p>
          <p class="description">${film.description}</p>
        </div>
        <div class="card-right">
          <button>Réserver</button>
        </div>
      </div>`;
  });
  html += `</div>`;

  programme.innerHTML = htmlBtn + html + htmlBtn;

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (event) => {
      init(event.target.classList.value.split("-")[1]);
    });
  });
}
init(0);

function programmeFactory(date) {
  let html = `date: ${date}`;
  programme.innerHTML = html;
}
// init();
// programmeFactory();

//        ${}

// ` <nav>
//     <div class="nav nav-tabs" id="nav-tab" role="tablist">`;
//   html += ``;
//   programmation.forEach((jour, key) => {
//     html += `<a class="nav-link ${key == 0 ? "active" : ""}" id="nav-0${key + 1}" data-toggle="tab" href="#nav-${
//       key + 1
//     }" role="tab" aria-controls="nav-home" aria-selected="true">${jour.date}</a>`;
//   });
//   html += `</div>
//     </nav>
//     <div class="tab-content" id="nav-tabContent">`;
//   programmation.forEach((jour, key) => {
//     html += `<div class="tab-pane fade ${key == 0 ? "show active" : ""}" id="nav-${
//       key + 1
//     }" role="tabpanel" aria-labelledby="nav-home-tab">`;

//     jour.films.forEach((film, key) => {
//       html += `<div class="card mb-3">
//                 <div class="row no-gutters align-items-center">
//                   <div class="col-md-3"><img src="/assets/${film.img}" class="card-img-top" alt="..." /></div>
//                   <div class="col-md-9">
//                     <p class="card-text heure">${film.heure}</p>
//                     <div class="card-body row align-items-center">
//                       <div class="col">
//                         <h3 class="card-title">${film.titre}</h3>
//                         <p class="card-text">De <strong>${film.auteur}</strong></p>
//                         <p class="card-text">${film.description}</p>
//                       </div>
//                       <div class="col-auto text-center right-col">
//                         <a href="resa.html" target="_blank" class="btn btn-primary">Réserver <i class="bi bi-calendar"></i></a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>`;
//     });

//     html += `</div>`;
//   });
