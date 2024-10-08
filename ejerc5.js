document.querySelector(".btn.btn-primary").addEventListener("click", function () {
    alert("Hola, mundo!");
  });

  
  document.querySelector(".btn.btn-secondary").addEventListener("mouseenter", function () {
    alert("Mouse enter event!");
  });

  document.querySelector(".btn.btn-success").addEventListener("mouseup", function () {
    alert("Mouse up event!");
  });

  document.querySelector(".btn.btn-danger").addEventListener("mouseleave", function () {
    alert("Mouse leave event!");
  });

document.querySelector(".btn.btn-warning").addEventListener("mouseover", function () {
  this.style.backgroundColor = "red"; 
});

document.querySelector(".btn.btn-warning").addEventListener("mouseout", function () {
  this.style.backgroundColor = "yellow"; 
});

document.querySelector(".btn.btn-info").addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

document.querySelector(".btn.btn-light").addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
});

document.querySelector(".btn.btn-dark").addEventListener("click", function () {
  const botones = document.querySelectorAll(".btn");
  botones.forEach(function(button, index) {
    if (index !== botones.length - 1) {
        button.style.backgroundColor = "black"; 
        button.style.color = "white"; 
    }
});
});
