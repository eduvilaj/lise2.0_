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
  fetch('../data/database.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      //console.log(data.lise_2['0'].pwogram);
      // console.log(data.lise_2['0'].lyen_dokiman_pdf);
      // let t = JSON.parse(data);
      //  console.log("Salut");
      // console.log(t);
      // document.getElementById("info").innerHTML= JSON.stringify(data.lise_2['0']);
    })
    .catch(error => console.error(error));
}
