// DOM

// DOCUMENT OBJECT MODEL, bir web sayfasının yapısını programlama dillerinin anlayacağı şekilde temsil eden bir arayüzdür.

let sonuc;

sonuc = document.all;
sonuc = document.all[6];

sonuc = document.all.length;
sonuc = document.documentElement; // <html></html> elementinin kendisini döndürür.

sonuc = document.head; // <head> elementini döndürür.
sonuc = document.body; // <body> elementini döndürür.

sonuc = document.body.children; // <body></body> içindeki tüm direkt çocuk elementleri döndürür.

sonuc = document.doctype; // DOCTYPE bilgisini döndürür.
sonuc = document.URL; // Sayfanın tam URL adresini döndürür

sonuc = document.characterSet; // Kullanılan karakter setini döndürür
sonuc = document.contentType; // Sayfanın içerik tipini döndürür

sonuc = document.forms; // Sayfadaki tüm <form> elementlerini içeren bir htmlCollection döndürür
sonuc = document.forms[0];
sonuc = document.forms[0].method;
sonuc = document.forms[0].action;

sonuc = document.links;
sonuc = document.links[0];
sonuc = document.links[0].id = "Hepsi";
sonuc = document.links[0].className;
sonuc = document.links[0].className = "btn btn-sm btn-primary active";

console.log(sonuc);
