// 1-masala
// 3 ta sondan kattasini topuvchi funksiya yozing

// function engKattason(qator) {
//     return qator.sort((a, b) => b - a).slice(0, 1);
// }

// let sonlar = [5, 9, 16];
// let engKattaSon = engKattason(sonlar);

// console.log("Eng katta uch son:", engKattaSon);


// 2-masala
// Raqamlar bilan berilgan ixtiyoriy 2 xonali sonni so'zlar bilan ifodalab beruvchi funksiya yozing (switch...case)

// function ifodalabBer(son) {
//     if (son < 10 || son > 99) {
//         return "Faqat 2 xonali sonlarni qo'llab quvvatlash";
//     }

//     let birliklarSozlar = ["", "bir", "ikki", "uch", "to'rt", "besh", "olti", "yetti", "sakkiz", "to'qqiz"];
//     let unliklarSozlar = ["", "o'n", "yigirma", "o'ttiz", "qirq", "ellik", "oltmish", "yetmish", "sakson", "to'qson"];

//     let birliklar = son % 10;
//     let unliklar = Math.floor(son / 10);

//     return unliklarSozlar[unliklar] + " " + birliklarSozlar[birliklar];
// }

// // Namuna:
// let son = 42;
// let ifodalab = ifodalabBer(son);
// console.log(son + " -> " + ifodalab);

// let a = 12;
// let onliklar = Math.floor(a / 10);
// let birliklar = a % 10;

// switch (onliklar) {
//     case 1:
//         console.log("o'n");
//         break;
//     case 2:
//         console.log("yigirma");
//         break;
//     case 3:
//         console.log("o'ttiz");
//         break;
//     case 4:
//         console.log("qirq");
//         break;
//     case 5:
//         console.log("ellik");
//         break;
//     case 6:
//         console.log("oltmish");
//         break;
//     case 7:
//         console.log("yetmish");
//         break;
//     case 8:
//         console.log("sakson");
//         break;
//     case 9:
//         console.log("to'qson");
//         break;

//     default:
//         console.log("bunday son mavjud emas");
//         break;
// }
// switch (birliklar) {
//     case 1:
//         console.log("o'n");
//         break;
//     case 2:
//         console.log("ikki");
//     break;
//     case 3:
//         console.log("uch");
//         break;
//     case 4:
//         console.log("to'rt");
//         break;
//     case 5:
//         console.log("besh");
//         break;
//     case 6:
//         console.log("olti");
//         break;
//     case 7:
//         console.log("yetti");
//         break;
//     case 8:
//         console.log("sakkiz");
//         break;
//     case 9:
//         console.log("to'qqiz");
//         break;

//     default:
//         console.log("bunday son mavjud emas");
//         break;
// }

// console.log("sonlarnihariflardagiifodasi" + " -> " + );


// 3-masala
// 1 dan n gacha nechta toq son borligini aniqlovchi funksiya yozing



// 4-masala
// Ixtiyoriy sonning bo'luvchilar sonini topuvchi funksiya yozing

// function boluvchilarSoniTop(son) {
//     if (son <= 1) return "2 dan katta son kiriting";

//     let boluvchilarSoni = 0;

//     for (let i = 2; i <= son; i++) {
//         if (son % i === 0) boluvchilarSoni++;
//     }

//     return boluvchilarSoni;
// }

// const son = 15;
// const boluvchilarSoni = boluvchilarSoniTop(son);
// console.log(`${son} sonining bo'luvchilar soni: ${boluvchilarSoni}`);


// 5-masala
// Agar berilgan son 3ga hamda 5ga karrali bolsa uning kvadiratini aks holda kubini qaytaruvchi funksiya yozing.

// let num2 = 8;
// let num1 = 15;
// function sum(num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         return num * num;
//     } else {
//         return num * num * num;
//     }
// }

// let result1 = kvadratYokiKub(num1);
// console.log(`${num1} sonning kvadrati yoki kubi: ${result1}`);

// let result2 = kvadratYokiKub(num2);
// console.log(`${num2} sonning kvadrati yoki kubi: ${result2}`);


// 6-masala
// Ixtiyoriy 2 ta sondan raqamlari kopaytmasi eng katta boladigani topib beruvchi funksiya yozing.

let son1 = 6;
let son2 = 9;
function Kopaytma(son1, son2) {
    let kopaytma1 = son1 % 10;
    let kopaytma2 = son2 % 10;

    return (kopaytma1 > kopaytma2) ? son1 : son2;
}

let engKattasi = Kopaytma(son1, son2);
console.log(`sonlarining raqamlari ko'paytmasini eng kattasi: ${engKattasi}`);


// 7-masala
// Ixtiyoriy sonning tub yoki tub emasligini aniqlovchi funksiya yozing.

// let son2 = 8;
// let son1 = 17;
// function tub(son) {
//     if (son < 2) {
//         return "Son 2 dan kichik, tub emas";
//     } else {
//         for (let i = 2; i <= Math.sqrt(son); i++) {
//             if (son % i === 0) {
//                 return "Son tub emas";
//             }
//         }
//         return "Son tub";
//     }
// }
// console.log(`${son1} - ${tubYokiTubEmas(son1)}`);
// console.log(`${son2} - ${tubYokiTubEmas(son2)}`);
