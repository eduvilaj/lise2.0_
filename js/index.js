var myPlayer = videojs('my-video');
document.querySelector('#pdf_view').style.display = 'none';
document.querySelector('#playvideo').style.display = 'none';

function Afficher() {
  myPlayer.pause();
  document.querySelector('#pdf_view').style.display = 'block';
  document.querySelector('#playvideo').style.display = 'none';

  let Niv_ = document.getElementById('Niveau');
  let Mat_ = document.getElementById('Matiere');
  let Les_ = document.getElementById('Lesson');
  let info_ = document.getElementById('info');

  let ch_ = `ressources/${Niv_.value}_${Mat_.value}_${Les_.value}.pdf`;
  //info_.innerHTML=`Tu viens de selectionner le fichier : ${ch_}`;

  PDFObject.embed(ch_, '#pdf_view');
}

function VoirVideo() {
  myPlayer = videojs('my-video');
  document.querySelector('#pdf_view').style.display = 'none';
  document.querySelector('#playvideo').style.display = 'block';

  let Niv_ = document.getElementById('Niveau');
  let Mat_ = document.getElementById('Matiere');
  let Les_ = document.getElementById('Lesson');
  let info_ = document.getElementById('info');

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

function LireJson() {
  let gg = '';
  fetch('../data/database.json')
    .then(response => response.json())
    .then(data => {
      let gg = '';
      console.log(data.lise2_0);
      if (data.lise2_0[0].lesons.length > 0) {
        let kk = data.lise2_0[0].lesons;
        gg += `<ul class="list-group"> `;
        kk.map(d => {
          gg += `<li class="list-group-item">${d.t1}</li>`;
        });
        gg += `</ul>`;
      }
      document.getElementById('info').innerHTML = gg;
    })
    .catch(err => console.error(err.message));
}
