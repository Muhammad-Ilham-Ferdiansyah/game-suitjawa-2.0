function getPilihanComputer(){
    const comp = Math.random();
    if ( comp < 0.34) return "gajah";
    if ( comp >= 0.34 && comp < 0.67) return "orang";
    return "semut";
}

let totalMenang = 0;
let totalKalah = 0;
function getHasil(player, comp){
 function menang(){
  totalMenang++;
  const menang = document.querySelector('.score-player');
  menang.innerHTML = totalMenang;
  return 'MENANG';
 }
 function kalah(){
  
  totalKalah++;
  const kalah = document.querySelector('.score-computer');
  kalah.innerHTML = totalKalah;
  return 'KALAH';
 }
 if(comp == player) return 'SERI';
 if(player == 'gajah') return (comp == 'orang') ? menang() : kalah();
 if(player == 'orang') return (comp == 'semut') ? menang() : kalah();
 if(player == 'semut') return (comp == 'gajah') ? menang() : kalah();
}
// function getHasil(comp, player){
//     if ( player == comp) return 'SERI!';
//     if ( player == 'gajah') return ( comp == 'orang') ? 'MENANG!' : 'KALAH!';
//     if ( player == 'orang') return ( comp == 'gajah') ? 'KALAH!' : 'MENANG!';
//     if ( player == 'semut') return ( comp == 'orang') ? 'KALAH!' : 'MENANG!';
// }


function putarComp(){
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if (new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if( i == gambar.length) i = 0;
    },100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pComputer = getPilihanComputer();
        const pPlayer = pil.className;
        const hasil = getHasil(pComputer, pPlayer);

        putarComp();

        setTimeout(function(){

            const imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src', 'img/' + pComputer + '.png');
    
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
            
            
        },1000);
        
        
    });
    
});



// let scorePlayer = 0;
// let scoreComputer = 0;

// function getScore(hasil){
//     if (hasil == 'SERI!') scorePlayer = scorePlayer, scoreComputer = scoreComputer;
//     if (hasil == 'MENANG!') scorePlayer = scorePlayer + 1;
//     if (hasil == 'KALAH!') scoreComputer = scoreComputer + 1;

//     const sPlayer = document.querySelector('.score-player').innerHTML = scorePlayer;
//     const sComp = document.querySelector('.score-computer').innerHTML = scoreComputer;
// }
















// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     const pComputer = getPilihanComputer();
//     const pPlayer = pGajah.className;
//     const hasil = getHasil(pComputer, pPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//     const pComputer = getPilihanComputer();
//     const pPlayer = pOrang.className;
//     const hasil = getHasil(pComputer, pPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//     const pComputer = getPilihanComputer();
//     const pPlayer = pSemut.className;
//     const hasil = getHasil(pComputer, pPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

