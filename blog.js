






var boxData = [{ image: "https://www.sendinblue.com/wp-content/uploads/2022/01/klaviyo_alternatives-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2017/12/emojis_in_email-300x116.png", date: "July 15,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2022/07/WP-featured-image.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2022/07/Back-to-School-WP-featured-image-1-1-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2018/07/email-list-building-ft-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2018/07/email-list-building-ft-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2022/06/Best-Email-Automation-Tools-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2022/06/Email-Automation-Examples-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2021/11/cheap_email_marketing-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2022/06/Best_Marketing_Automation_Software-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2020/08/Best-email-marketing-services-ft-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2018/05/noreply_email-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

]

boxData.map(function(elem){


    //creating child boxes
var box = document.createElement("div");
//creating image element
var avatar = document.createElement("img");
avatar.setAttribute("src",elem.image);


var date = document.createElement("p");
date.innerText=elem.date;


var head = document.createElement("h3");
head.innerText = elem.head;


var desc = document.createElement("p");
desc.innerText = elem.desc;


box.append(avatar,date,head,desc);

document.querySelector("#container").append(box);



});




var boxData1 = [{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Chatbot_vs_Live-Chat-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Email-Automation-Examples-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2019/11/are_emails_case_sensitive-300x117.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/01/iStock-903002884-770x300-1-300x117.jpg" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Copy-of-4-Easy-Steps-to-Creating-a-Successful-Drip-Campaign-300x157.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Copy-of-4-Easy-Steps-to-Creating-a-Successful-Drip-Campaign-300x157.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2021/06/4th-of-July-Email-Inspiration-300x140.jpg" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/06/live-chat-ft-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/06/live-chat-ft-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2021/03/How-to-Put-a-GIF-in-an-Email-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2019/07/What_is_email_marketing.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Chatbot_vs_Live-Chat-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },
];



function myFunction1(){
container.innerHTML = "";

boxData1.map(function(elem){
    //creating child boxes
var box = document.createElement("div");
//creating image element
var avatar = document.createElement("img");
avatar.setAttribute("src",elem.image);


var date = document.createElement("p");
date.innerText=elem.date;


var head = document.createElement("h3");
head.innerText = elem.head;


var desc = document.createElement("p");
desc.innerText = elem.desc;

box.append(avatar,date,head,desc);
document.querySelector("#container").append(box);


});

}


var boxData2 = [{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Chatbot_vs_Live-Chat-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Email-Automation-Examples-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2019/11/are_emails_case_sensitive-300x117.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/01/iStock-903002884-770x300-1-300x117.jpg" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Copy-of-4-Easy-Steps-to-Creating-a-Successful-Drip-Campaign-300x157.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Copy-of-4-Easy-Steps-to-Creating-a-Successful-Drip-Campaign-300x157.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2021/06/4th-of-July-Email-Inspiration-300x140.jpg" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/06/live-chat-ft-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/06/live-chat-ft-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2021/03/How-to-Put-a-GIF-in-an-Email-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2019/07/What_is_email_marketing.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Chatbot_vs_Live-Chat-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },
];

function myFunction2(){
container.innerHTML = "";
boxData2.map(function(elem){
//creating child boxes
var box = document.createElement("div");
//creating image element
var avatar = document.createElement("img");
avatar.setAttribute("src",elem.image);


var date = document.createElement("p");
date.innerText=elem.date;


var head = document.createElement("h3");
head.innerText = elem.head;


var desc = document.createElement("p");
desc.innerText = elem.desc;

box.append(avatar,date,head,desc);
document.querySelector("#container").append(box);
});

};


var boxData3 = [{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Chatbot_vs_Live-Chat-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Email-Automation-Examples-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2019/11/are_emails_case_sensitive-300x117.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/01/iStock-903002884-770x300-1-300x117.jpg" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Copy-of-4-Easy-Steps-to-Creating-a-Successful-Drip-Campaign-300x157.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Copy-of-4-Easy-Steps-to-Creating-a-Successful-Drip-Campaign-300x157.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2021/06/4th-of-July-Email-Inspiration-300x140.jpg" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/06/live-chat-ft-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/06/live-chat-ft-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2021/03/How-to-Put-a-GIF-in-an-Email-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2019/07/What_is_email_marketing.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Chatbot_vs_Live-Chat-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },
];

function myFunction3(){
container.innerHTML = "";
boxData3.map(function(elem){
//creating child boxes
var box = document.createElement("div");
//creating image element
var avatar = document.createElement("img");
avatar.setAttribute("src",elem.image);


var date = document.createElement("p");
date.innerText=elem.date;


var head = document.createElement("h3");
head.innerText = elem.head;


var desc = document.createElement("p");
desc.innerText = elem.desc;

box.append(avatar,date,head,desc);
document.querySelector("#container").append(box);
});

};


var boxData4 = [{ image: "https://www.sendinblue.com/wp-content/uploads/2022/01/klaviyo_alternatives-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2017/12/emojis_in_email-300x116.png", date: "July 15,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2022/07/WP-featured-image.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2022/07/Back-to-School-WP-featured-image-1-1-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2018/07/email-list-building-ft-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2018/07/email-list-building-ft-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2022/06/Best-Email-Automation-Tools-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2022/06/Email-Automation-Examples-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2021/11/cheap_email_marketing-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2022/06/Best_Marketing_Automation_Software-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2020/08/Best-email-marketing-services-ft-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

{ image: "https://www.sendinblue.com/wp-content/uploads/2018/05/noreply_email-300x116.png", date: "July 18,2022", head: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?", desc: "Reading time about 12 min" },

]

function myFunction4(){
container.innerHTML = "";
boxData4.map(function(elem){
//creating child boxes
var box = document.createElement("div");
//creating image element
var avatar = document.createElement("img");
avatar.setAttribute("src",elem.image);


var date = document.createElement("p");
date.innerText=elem.date;


var head = document.createElement("h3");
head.innerText = elem.head;


var desc = document.createElement("p");
desc.innerText = elem.desc;

box.append(avatar,date,head,desc);
document.querySelector("#container").append(box);
});

};

var boxData5 = [{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Chatbot_vs_Live-Chat-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Email-Automation-Examples-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2019/11/are_emails_case_sensitive-300x117.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/01/iStock-903002884-770x300-1-300x117.jpg" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Copy-of-4-Easy-Steps-to-Creating-a-Successful-Drip-Campaign-300x157.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Copy-of-4-Easy-Steps-to-Creating-a-Successful-Drip-Campaign-300x157.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2021/06/4th-of-July-Email-Inspiration-300x140.jpg" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/06/live-chat-ft-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/06/live-chat-ft-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2021/03/How-to-Put-a-GIF-in-an-Email-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2019/07/What_is_email_marketing.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Chatbot_vs_Live-Chat-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },
];

function myFunction5(){
container.innerHTML = "";
boxData5.map(function(elem){
//creating child boxes
var box = document.createElement("div");
//creating image element
var avatar = document.createElement("img");
avatar.setAttribute("src",elem.image);


var date = document.createElement("p");
date.innerText=elem.date;


var head = document.createElement("h3");
head.innerText = elem.head;


var desc = document.createElement("p");
desc.innerText = elem.desc;

box.append(avatar,date,head,desc);
document.querySelector("#container").append(box);
});

};


var boxData6 = [{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Chatbot_vs_Live-Chat-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Email-Automation-Examples-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2019/11/are_emails_case_sensitive-300x117.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/01/iStock-903002884-770x300-1-300x117.jpg" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Copy-of-4-Easy-Steps-to-Creating-a-Successful-Drip-Campaign-300x157.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Copy-of-4-Easy-Steps-to-Creating-a-Successful-Drip-Campaign-300x157.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2021/06/4th-of-July-Email-Inspiration-300x140.jpg" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/06/live-chat-ft-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/06/live-chat-ft-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2021/03/How-to-Put-a-GIF-in-an-Email-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2019/07/What_is_email_marketing.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Chatbot_vs_Live-Chat-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },
];

function myFunction6(){
container.innerHTML = "";
boxData6.map(function(elem){
//creating child boxes
var box = document.createElement("div");
//creating image element
var avatar = document.createElement("img");
avatar.setAttribute("src",elem.image);


var date = document.createElement("p");
date.innerText=elem.date;


var head = document.createElement("h3");
head.innerText = elem.head;


var desc = document.createElement("p");
desc.innerText = elem.desc;

box.append(avatar,date,head,desc);
document.querySelector("#container").append(box);
});

};


var boxData7 = [{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Chatbot_vs_Live-Chat-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Email-Automation-Examples-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2019/11/are_emails_case_sensitive-300x117.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/01/iStock-903002884-770x300-1-300x117.jpg" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Copy-of-4-Easy-Steps-to-Creating-a-Successful-Drip-Campaign-300x157.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Copy-of-4-Easy-Steps-to-Creating-a-Successful-Drip-Campaign-300x157.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2021/06/4th-of-July-Email-Inspiration-300x140.jpg" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/06/live-chat-ft-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2020/06/live-chat-ft-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2021/03/How-to-Put-a-GIF-in-an-Email-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2019/07/What_is_email_marketing.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },

{image:"https://www.sendinblue.com/wp-content/uploads/2022/06/Chatbot_vs_Live-Chat-300x116.png" ,date:"July 18,2022" ,head:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, aut voluptates earum quas nulla veritatis?" , desc:"Reading time about 12 min" },
];

function myFunction7(){
container.innerHTML = "";
boxData7.map(function(elem){
//creating child boxes
var box = document.createElement("div");
//creating image element
var avatar = document.createElement("img");
avatar.setAttribute("src",elem.image);


var date = document.createElement("p");
date.innerText=elem.date;


var head = document.createElement("h3");
head.innerText = elem.head;


var desc = document.createElement("p");
desc.innerText = elem.desc;

box.append(avatar,date,head,desc);
document.querySelector("#container").append(box);
});

};












