// function checktab(param) {
//   let nbrPair = [];
//   let check = false;
//   for (let i = 0; i < param.length; i++) {
//     if (typeof param[i] == "number") {
//       check = true;

//       if (param[i] % 2 == 1) {
//         nbrPair.push(param[i]);
//       }
//     }
//   }

//   if (!check) {
//     console.log("la fonction contient des nombres");
//   } else if (nbrPair.length > 0) {
//     console.log(nbrPair);
//   } else {
//     console.log(-1);
//   }
// }

// checktab([1, 2, 3, 4, "diara"]);

// function secondDegre(a, b, c) {
//   console.log(a);
//   var X1;
//   var X2;
//   var X;

//   var delt = b * b - 4 * (a * c);
//   console.log(delt);
//   switch (delt) {
//     case delt > 0:
//       X1 = (-b - Math.sqrt(delt)) / (2 * a);
//       X2 = (-b + Math.sqrt(delt)) / (2 * a);
//       alert("les solutions sont : \n X1=" + X1 + "\n X2= " + X2);
//       break;
//     case (delt = 0):
//       X = -b / (2 * a);
//       alert(X);
//       break;
//     default:
//       alert("pas de solutions");
//       break;
//   }
// }

// secondDegre(
//   parseInt(prompt("Entrer la valeur de A")),
//   parseInt(prompt("Entrer la valeur de b")),
//   parseInt(prompt("Entrer la valeur de c"))
// );

// function secondegre() {}

// let tab = [];

// var A = null;
// for (let x = 0; x < 3; x++) {
//   if (x == 0) {
//     do {
//       A = prompt("entrez la valeur de A");
//     } while (isNaN(A));
//     tab.push(A);
//   } else if (x == 1) {
//     do {
//       A = prompt("entrez la valeur de B");
//     } while (isNaN(A));
//     tab.push(A);
//   } else {
//     do {
//       A = prompt("entrez la valeur de C");
//     } while (isNaN(A));
//     tab.push(A);
//   }
// }
// console.log(tab);

// var val1 = document.getElementById("val1");
// var val2 = document.getElementById("val2");

// // var nbre1 , nbre2
// var nbre1;
// var Para = document.getElementById("demo");

// val1.addEventListener("input", (e) => {
//   nbre1 = e.target.value;
//   console.log(nbre1);

//   console.log(val2.value);

//   console.log(nbre2);

//   let sum = parseInt(nbre2) + parseInt(nbre1);

//   Para.append(sum);
//   console.log(typeof sum);
// });

// val2.addEventListener("input", (e) => {
//   nbre2 = e.target.value;

//   console.log(val1.value);

//   console.log(nbre2);

//   let sum = parseInt(nbre2) + parseInt(nbre1);

//   Para.append(sum);
//   console.log(typeof sum);
// });

// val1.addEventListener("input", (e) => {
//   nbre1 = e.target.value;
//   console.log(nbre1);

//   for (let i = 0; i <= 10; i++) {
//     let sum = parseInt(nbre1 * i);
//     let desh = document.createElement("p");
//     // Para.append(sum +"\n")

//     // console.log(typeof(sum))

//     desh.innerText = `${nbre1} * ${i} = ${nbre1 * i} \n`;

//     document.body.append(desh);
//   }
// });

// If imbriqu??

// let tets = confirm("Avez Vous plus de 18 ans");

// if(tets == true){
//       let demo = parseInt(prompt("entrer un nombre de 1 ?? 10"));
//       if (demo % 2 == 0){
//           let deo = parseInt(prompt(`entrez un nombre compris entre 1 et ${demo}`));
//           if (deo >= 1 && deo <= demo && deo%3 === 0) {
//               alert("Vous avez gagner")
//           }else{
//             alert("Vous avez Perdu")
//           }
//       } else {
//         alert("vous avez perdu");
//       }
// } else {
//   alert("vous n'??tes pas autoris??");
// }

////

// let nmber = parseInt(prompt('Entrer un nombre'));

// if((nmber%2==0 && nmber&&5==0) || (nmber%3==0 && nmber%9== 0)){
//   alert('Gagn??')
// }else{
//   alert('tu as gor')
// }

// let diar = prompt(
//   "Entrer les trois valeurs a,b,c en les separant par des espaces"
// );

// let tab = diar.split(" ");
// let delta = 0;

// let X1, X2, X;
// if (
//   tab.length == 3 &&
//   tab.every((str) => {
//     return !isNaN(str);
//   })
// ){
//     const [a,b,c] = tab
//     delta = parseInt(b) ** 2 - 4 * parseInt(a) * parseInt(c);
//     console.log(delta);

//     if (delta == 0) {
//       X = -parseInt(b) / (2 * parseInt(a));

//       alert(`Discriminant est ??gale ?? ${delta}.\n La racine unique est ${X}`);
//     } else if (delta > 0) {
//       X1 =
//         (-parseInt(b) - Math.floor(Math.sqrt(delta))) /
//         (2 * a);
//       X2 =
//         (-parseInt(b) + Math.floor(Math.sqrt(delta))) /
//         (2 * a);
//       alert(
//         `Discriminant est postif et ??gale ?? ${delta}.\n Les racines sont sont ${X1} et ${X2}`
//       );
//     } else {
//       alert(
//         `Discriminant est n??gatif et ??gale ${delta} , l'equation n'admet pas de solution`
//       );
//   }
// } else {
//   console.log("entrez un nombre");
// }

// function funsplit(char, separate) {
//     //  cr??er une fonction split qui divise une chaine de caractere et la divise en fonction du separateur  @@
//     let tab = []
//     let total = "";

//     char = char.replaceAll(separate, ",");
//     console.log(char)
//     for (const chr of char) {

//             if(chr != separate){total += chr}
//             if(chr == separate){
//                 tab.push(total)
//                 console.log(tab)
//                 total == ""
//             }
//         }

//         tab.push(total)

//        if(separate == ""){
//                 tab.pop()
//                 tab.shift()
//        }

//         return tab
// }
// console.log(funsplit("Bonjour je suis Nanien je suis ivoirien tout le monde", "je"));

// function decoupeur(mot, separateur) {
//     // Va contenir les sous-cha??ne qu'on va s??parer
//     let archive = [];
//     // Va recevoir la sous-cha??ne
//     let sousChaine = "";
//     // Par d??faut je r??cup??re indice de la sous-cha??ne dans le mot
//     let indexSousChaine = mot.indexOf(separateur);
//     console.log(indexSousChaine);
//     // Si separateur existe dans le mot
//     while (indexSousChaine > -1 ){
//         // Si separateur est diferent de cha??ne vide
//         if (separateur != "" ){
//             // Je r??cup??re les caract??res qui se trouve avant la pr??mi??re occurance du s??parateur
//             sousChaine = mot.Slice(0, indexSousChaine);
//             // Dans le mot je remplace la premi??re occurance de s??parateur par cha??ne vide et je stocke dans mot
//             mot = mot.replace(separateur, "");
//             // Dans le mot je remplace la sous-cha??ne ?? s??parer par cha??ne vide et je stocke dans mot
//             mot = mot.replace(sousChaine, "");
//             // J'ajoute la sous-chaine ?? s??parer dans le tableau archive
//             archive.push(sousChaine);
//             // Je recherche ?? nouveau d'indice du s??parateur dans le nouveau mot
//             indexSousChaine = mot.indexOf(separateur);
//         }else{
//             // Si s??parateur est une cha??ne vide j'ajoute chaque caract??re du mot dans le tableau archive
//             archive.push(mot[mot.indexOf(separateur)]);
//             // Je remplace le premier caract??re du mot par une cha??ne vide
//             mot = mot.replace(mot[0], "");
//             // Si le mot contient un seul caract??re,
//             if(mot.length === 1 ){
//                 // j'ajoute imm??diatement le mot dans l'archive
//                 archive.push(mot);
//                 // Et je sorts syst??matiquement dans la boucle
//                 break;
//             }
//         }
//     }
//     // Si le s??parateur n'existe pas dans le mot,
//     if (indexSousChaine === -1 ){
//         // J'ajoute te texte brute dans l'archive
//         archive.push(mot);
//     }
//     // Je retourne le tableau archive
//     return archive;
// }

//console.log(decoupeur("Bonjour, je suis Nanien, je suis ivoirien ", "je"));

// La fonction Slice
// La focntion Substr

// function multi(A) {
//     let i=1;
//     multi= ""
//     while(i<=10){
//         multi+= `${A*i},`
//         if(i==10){
//             multi+= `${A*i}`
//         }
//         i++
//     }
//     return multi

// }
// console.log(multi(4))
// console.log(multi(5))
// console.log(multi(10))
// function multi(A) {
//         let i=1;
//         multi= ""
//         while(i<=10){
//             multi+= `${A*i},`
//             if(i==10){
//                 multi+= `${A*i}`
//             }
//             i++
//         }
//         return parseInt(multi)

//     }

function contreSplit(stg) {
  let tab = [];
  let somme = 0;
  if (stg == "" || stg == 0) {
    return -1;
  } else {
    for (const i of stg) {
      if (!isNaN(i)) {
        tab.push(i);
      } else {
        return -1;
      }
    }
    for (const j of tab) {
      somme += parseInt(j);
    }
  }
  return somme;
}

//SLICE HOMO

// function Slice(debut, long1, long2) {
//   // console.log(debut,debut.length);
//   let subt = "";

//   if (long2 > debut.length) {
//     long2 = debut.length - 1;

//     for (let i = long1; i <= long2; i++) {
//       subt += debut[i];
//     }
//     console.log("If", subt);
//   } else {
//     if (long2 < 0) {
//       long2 = debut.length + long2;
//       for (let i = long1; i < long2; i++) {
//         subt += debut[i];
//       }
//       console.log("else If", subt);
//     } else {
//       for (let i = long1; i < long2; i++) {
//         subt += debut[i];
//       }
//       console.log("else", subt);
//     }
//   }
// }
// console.log("Mozilla", Slice("Mozilla", 6, 0));
// console.log("Mozilla", "Mozilla".slice(6, 0));

// function Substr(debut, long1, long2) {
//   // console.log(debut,debut.length);
//   let subt = "";

//   if (long2 > debut.length) {
//       long2 = debut.length - 1;

//     for (let i = long1; i <= long2; i++) {
//       subt += debut[i];
//     }
//     console.log("If", subt);
//   } else {
//     if (long2 < 0) {
//       long2 = debut.length + long2;
//       console.log(long2)
//       for (let i = long1; i < long2; i++) {
//         subt += debut[i];
//       }
//       console.log("else If", subt);
//     } else {
//       for (let i = long1; i < long2; i++) {
//         subt += debut[i];
//       }
//       console.log("else", subt);
//     }
//   }
// }
// console.log("Mozilla", Substr("Mozilla", -5, -1));
// console.log("Mozilla", "Mozilla".slice(-5, -1));

function Slice(chaine, indDebut, indFin) {
  let outpout = "";
  indDebut =
    indDebut < -chaine.length
      ? 0
      : indDebut > chaine.length
      ? chaine.length
      : indDebut;
  indFin =
    indFin < -chaine.length
      ? 0
      : indFin > chaine.length
      ? chaine.length
      : indFin;

  if (indDebut > indFin) {
    indDebut = indDebut < 0 ? chaine.length + indDebut : indDebut;
    indFin = indFin < 0 ? chaine.length + indFin : indFin;
  }

  for (let i = indDebut; i < indFin; i++) {
    outpout += chaine[i];
  }

  console.log("slice =", chaine.slice(indDebut, indFin));

  return outpout;
}

console.log(Slice("bonjour", 3, 9));

function Substr(chaine, indDebut, indFin) {
  let outpout = "";
  indDebut =
    indDebut < -chaine.length
      ? 0
      : indDebut > chaine.length
      ? chaine.length
      : indDebut;
  indFin =
    indFin < -chaine.length
      ? 0
      : indFin > chaine.length
      ? chaine.length
      : indFin;

  if (indDebut > indFin) {
    indDebut = indDebut < 0 ? chaine.length + indDebut : indDebut;
    indFin = indFin < 0 ? chaine.length + indFin : indFin;
  }

  for (let i = indDebut; i < indFin; i++) {
    outpout += chaine[i];
  }

  console.log("Subst =", chaine.substr(indDebut, indFin));

  return outpout;
}

console.log(Substr("bonjour", 2, 1));

form = document.querySelector("form");
inp = document.querySelector("bouton");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Ok", e);
});
// btn.addEventListener('mouseout',(e)=>{
//     console.log(e)
//     alert('bonjour')
// })

// console.log(btn)
