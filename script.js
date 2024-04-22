// let str = 'Saidakbar, Amirbek, Behruz'
// let strPrompt = prompt('Ism kiriting !')

// console.log(str);

// if (str.includes(strPrompt)) {
//     console.log('Ha bunday ism bor');
// }

// else {
//     console.log('Uzr unday ism topilmadi');
// }





// let str1 = 'Web'
// let str2 = 'Brain'

// console.log(`str1:${str1.replace(str1,str2)}\nstr2: ${str2.replace(str2,str1)}`);



let IsmPrompt = prompt('Ism kiriting !').toLowerCase()
let HarfPrompt = prompt('Ismning ichidagi bitta harfni kiriting !').toLowerCase()

if (IsmPrompt.includes(HarfPrompt)) {
    console.log('Ha bu harf ismning ichida mavjud');
}


else {
    console.log('Uzr bu harf ismning ichidan topilmadi');
}