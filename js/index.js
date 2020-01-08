var myPlayer = videojs('my-video');
document.querySelector('#pdf_view').style.display = 'none';
document.querySelector('#playvideo').style.display = 'none';
//document.getElementById('.info').innerHTML = '';

function Afficher() {
  document.getElementById('info').innerHTML = '';
  myPlayer.pause();
  document.querySelector('#pdf_view').style.display = 'block';
  document.querySelector('#playvideo').style.display = 'none';
  //document.getElementById('.info').innerHTML = '';
  //document.querySelector('.info').innerHTML = '';

  let Niv_ = document.getElementById('Niveau');
  let Mat_ = document.getElementById('Matiere');
  let Les_ = document.getElementById('Lesson');
  let info_ = document.getElementById('info');

  let ch_ = `ressources/${Niv_.value}_${Mat_.value}_${Les_.value}.pdf`;
  //info_.innerHTML=`Tu viens de selectionner le fichier : ${ch_}`;

  PDFObject.embed(ch_, '#pdf_view');
}

function VoirVideo() {
  document.getElementById('info').innerHTML = '';
  myPlayer = videojs('my-video');
  document.querySelector('#pdf_view').style.display = 'none';
  document.querySelector('#playvideo').style.display = 'block';
  //document.getElementById('.info').innerHTML = '';
  //document.querySelector('.info').innerHTML = '';

  let Niv_ = document.getElementById('Niveau');
  let Mat_ = document.getElementById('Matiere');
  let Les_ = document.getElementById('Lesson');
  //let info_ = document.getElementById('info');

  let ch = `ressources/videos/${Niv_.value}_${Mat_.value}_${Les_.value}.mp4`;
  // info_.innerHTML=`La video ${Mat_.value},Lessson ${Les_.value} est selecctionnee `;

  let lise_2_video = {
    type: 'video/mp4',
    poster: '../images/logo_lise2_0.jpg',
    src: ch
  };
  myPlayer.src(lise_2_video);
  //myPlayer.play();
}

let nb_kesyon = 0;
let no_leson = 0;
let kesyon_yo = [];

function suivant(i) {
  afficherLesson(kesyon_yo[i - 1], i);
  console.log(kesyon_yo);
}

function verifier_reponse(vrai_reponse_, reponse_eleve_) {
  if (reponse_eleve_ === vrai_reponse_) {
    alert('Bravo !!!!');
  } else {
    alert('Mauvaise Reponse');
  }
}
function afficherLesson(lesson, i) {
  document.getElementById('info').innerHTML = '';
  let m = `<p style='font-weight:bold'>Q${lesson.No_Question} - ${lesson.Question}</p>`;
  let aaa = '  ';
  let gg = "<ul class='list-group'> ";
  lesson.reponses.map(r => {
    gg += `<li class="list-group-item"  onclick="verifier_reponse('${lesson.Vrai_reponse}','${r.Lettre}');">${r.Lettre} -) ${r.possible_reponse} </li>`;
  });
  gg += `</ul>`;
  m += gg;

  let b = `<p /><p /><p style="display:flex; justify-content:center"><button class='btn btn-warning btn-sm' " onclick="suivant(${lesson.No_Question -
    1});" ${
    i - 1 <= 0 ? 'disabled' : ''
  } > ${' < '} </button>&nbsp;&nbsp;<button class='btn btn-warning btn-sm'  onclick="suivant(${lesson.No_Question +
    1});" ${i >= nb_kesyon ? 'disabled' : ''}> ${' > '} </button> </p>`;

  m += b;
  document.getElementById('info').innerHTML = m;
}

function LireJson() {
  document.querySelector('#pdf_view').style.display = 'none';
  document.querySelector('#playvideo').style.display = 'none';
  //alert('Cette Fonctionnalité est encours de developpement');

  let bb = `<div class="alert alert-info">
  <strong>Info!</strong> Cette Fonctionnalité est encours de developpement.
</div>`;
  fetch('../data/database.json')
    .then(response => response.json())
    .then(data => {
      let gg = data.lise2_0.Ns1.pwogram;

      let konbyenKesyon = data.lise2_0.Ns1.L1.length;
      nb_kesyon = konbyenKesyon;
      no_leson = 0;
      kesyon_yo = data.lise2_0.Ns1.L1;

      //appel a la fonction afficherLesson(data.lise2_0.Ns1.L1[i])

      afficherLesson(data.lise2_0.Ns1.L1[no_leson]);

      //console.log(data.lise2_0.Ns1.pwogram);
      /* if (data.lise2_0[0].lesons.length > 0) {
        let kk = data.lise2_0[0].lesons;
        gg += "<ul class='list-group'> ";
        kk.map(d => {
          gg += `<li class="list-group-item">${d.t1}</li>`;
        });
        gg += `</ul>`;
      }
  */
      // document.getElementById('info').innerHTML = gg; //bb;
    })
    .catch(err => console.error(err.message));
}
