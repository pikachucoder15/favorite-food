var txts=[
"This is a mango 🥭 ",
"Chapati with palak paneer",
 "Biriyani",
  "Paneer",
  "Mango Jelly",
];
var imgs=[
"https://en-media.thebetterindia.com/uploads/2025/02/TBI-featured-image-20_11zon-1740154477.jpg",
"https://img.freepik.com/premium-photo/palak-paneer-spinach-cottage-cheese-curry-is-healthy-main-course-recipe-india-served-with-roti-chapati-naan-selective-focus_466689-12835.jpg?w=2000",
"https://i.pinimg.com/originals/f5/cc/8a/f5cc8a54338a60e9f3ef2c5fb2cca529.jpg",
  "https://thumbs.dreamstime.com/b/paneer-mutter-masala-served-roti-banana-leaf-traditional-indian-cuisine-creamy-curry-green-peas-soft-atop-showcasing-429681539.jpg", "https://5.imimg.com/data5/SELLER/Default/2021/1/SW/YY/NG/120541131/mango-jelly-1000x1000.jpg"
]

var idx =0
function next(){
  idx=idx+1
  if(idx>4){
  idx=0
  }
 document.getElementById("indianfd").innerHTML= txts[idx];
  document.getElementById("indianffs").src=imgs[idx];
  
  
  
   }
