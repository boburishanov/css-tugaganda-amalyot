// let kod = "+998";
// let kod_1 =  "90";
// let nummber = Math.random()*1000;
// nummber = Math.trunc(nummber);
// let nummber_1 = Math.random()*100;
// nummber_1 = Math.trunc(nummber_1);
// let nummber_end = Math.random()*100;
// nummber_end = Math.trunc(nummber_end);

// console.log ( kod + " " + "(" +  kod_1 + ")" +  "  " + nummber + " - " + nummber_1 + " - " +   nummber_end  +  "  "  + "SIZNING RAQAMINGIZ" );


// let son = 532;

// let bir = son%10;
// let ikki = ((son-son%10)/10)%10
// let uch = (son-son%100)/100
// let tort = ()

// console.log(bir+ikki+uch);
// console.log(bir);
// console.log(ikki);
// console.log(uch);

let ism = "Bobur"
let kod_raqam = 9909
let xisob = 1000
let user = prompt("salom ismingizni yozing")
if(ism === user){
    let karta_raqam = +prompt("karta raqamingizni yozing")
    if(karta_raqam === kod_raqam){
        let mony = +prompt("qancha pul yechmoqchisan?")
        let kommisya = mony + mony*2/1000     
        if(kommisya <= xisob){
            let natija = xisob - kommisya
            alert(xisob + " " + "so'mdan" + "  " + "yechildi" + " " + " " + kommisya +  "  "  +  "so'm ( bank xizmatlari uchun" + " " + xisob*2/1000 + " " + "yechildi")
        }else{
            alert("xisobingizda mablag yetarli emas")
        }
    }else{
        alert("karta raqamda xatolik bor")
    }
}else{
    alert("Bu ism topilmadi")
}


