var modal = document.getElementById('id01');
var modal1 = document.getElementById('id011');
var modal2 = document.getElementById('id012');
var modal4 = document.getElementById('id04');
function initData() {
    let acc = [{
        user: "hung",
        password: "123"
    },
    {
        user: "hau",
        password: "123"
    },
    ];

    let jsonacc = localStorage.getItem('acc1');
    if (jsonacc == null)
        localStorage.setItem('acc1', JSON.stringify(acc))
}
initData();
let jsonacc = localStorage.getItem("acc1");
let acc = JSON.parse(jsonacc);
console.log(acc);
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function playAudio() {

    var x = new Audio('On My Way.mp3');
    x.play();
    // alert("Phát nhạc !");

}

function car() {
    alert("I Love U")
}
// let acc1 = {
//     user: "hung",
//     password: "123"
// }

// let acc2 = {
//     user: "hau",
//     password: "123"
// }
// let acc = [acc1, acc2]
// console.log(acc);



function kiemTra1() {
    let notInputUses = document.getElementById("useName");
    let notInputPassword = document.getElementById("passWord");

    let ten = notInputUses.value;
    let pass = notInputPassword.value;

    console.log(ten);
    console.log(pass);
    console.log("Click kiểm tra");

   
    // if (ten == `` || pass == ``) {
    //     alert("Bạn Nhập Thiếu Kìa >.<")
    // } else 
    if(ten != `` || pass != ``){
        
        for (let i = 0; i < acc.length; i++) {
            if (acc[i].user == ten && acc[i].password == pass) {
                
                return true;
               
            } 
           

        }
        
       


    }

}
console.log(kiemTra1);
function kiemTra() {
    if (kiemTra1() == true) {
        modal1.style.display = "block";
        modal.style.display = "none";
    }
    if (kiemTra1() == false) {
        modal2.style.display = "block";
        modal.style.display = "none";
    }

}

function kiemTraDK() {
  
    var email = document.getElementById('mail');
    var error = document.querySelector('.error');
    
    email.addEventListener("input", function (event) {
      // kiểm tra khi user bắt đầu nhập
      if (email.validity.valid) {
        // nếu valid, remove
        error.innerHTML = ""; 
        error.className = "error"; 
      }
    });
    ;

    let notInputUses = document.getElementById("useNameRegister");
    let notInputPassword = document.getElementById("passWordRegister");

    let tenNew = notInputUses.value;
    let passNew = notInputPassword.value;

    console.log(tenNew);
    console.log(passNew);
    console.log("Click kiểm tra");

    console.log("clickaaa")
    if (tenNew == `` || passNew == `` || email ==``) {
        alert("Bạn Nhập Thiếu Kìa >.<");
    } else {
    
        let accNew = {
            user: tenNew,
            password: passNew,
        }


        acc.push(accNew);
        let acc2 = JSON.stringify(acc);
        localStorage.setItem("acc1", acc2);
        alert("Thêm Thành Công>.<");
    }
    

}
function dangKi() {

    modal4.style.display = "block";
    modal.style.display = "none";
}
function dangNhap() {

    modal4.style.display = "none";
    modal.style.display = "block";
}



function initData1() {

    let mang1 = [
        {
            hinhAnh:"images/products/9.jpg",
    
        },
        {
            hinhAnh:"images/products/10.jpg",
    
        },
        {
            hinhAnh:"images/products/11.jpg",
    
        },
        {
            hinhAnh:"images/products/12.jpg",
    
        },
        {
            hinhAnh:"images/products/13.jpg",
    
        },
        {
            hinhAnh:"images/products/14.jpg",
    
        },
        {
            hinhAnh:"images/products/15.jpg",
    
        },
    
    ];
    let jsonacc = localStorage.getItem('mang');
    if (jsonacc == null)
        localStorage.setItem('mang', JSON.stringify(mang1))
}
initData1();
let jsonacc1 = localStorage.getItem("mang");
let mang = JSON.parse(jsonacc1);



function hienThids(mang, idnode) {
    let sp = document.getElementById(idnode);
    sp.innerHTML = ``;
    for (let i = 0; i < mang.length; i++) {
        sp.innerHTML = sp.innerHTML + `
        <div class="listTrendingCon">
        <img src="${mang[i].hinhAnh}" alt="" srcset="">
        <a href="#">Red Women Purses</a>
        <p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></p>

            <h3 class="s35">$35</h3>
    </div>
    `
    }

}

hienThids(mang, "dssp");



const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart); 
});

droppableElements.forEach(elem => {
  elem.addEventListener("dragenter", dragEnter); 
  elem.addEventListener("dragover", dragOver); 
  elem.addEventListener("dragleave", dragLeave); 
  elem.addEventListener("drop", drop);
});

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id); 
}

function dragEnter(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event) {
  if(!event.target.classList.contains("dropped")) {
    event.preventDefault(); 
  }
}

function dragLeave(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}

function drop(event) {
  event.preventDefault(); 
  event.target.classList.remove("droppable-hover");
  const draggableElementData = event.dataTransfer.getData("text"); 
  const droppableElementData = event.target.getAttribute("data-draggable-id");
  const isCorrectMatching = draggableElementData === droppableElementData;
  if(isCorrectMatching) {
    const draggableElement = document.getElementById(draggableElementData);
    event.target.classList.add("dropped");
    event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");
    event.target.insertAdjacentHTML("afterbegin", `<i class="fas fa-${draggableElementData}"></i>`);
  }
}