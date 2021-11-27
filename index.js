const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const cros = document.getElementById("cros");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
crose2.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const autowrite = document.getElementById("autowrite");
setInterval(() => {
  setTimeout(() => {
    autowrite.style.color = "red";
    autowrite.textContent = "javaScript";
    setTimeout(() => {
      autowrite.style.color = "#22cdf4";
      autowrite.textContent = "HTML";
      setTimeout(() => {
        autowrite.style.color = "#ffc137";
        autowrite.textContent = "CSS";
        setTimeout(() => {
          autowrite.style.color = "#3ce0f0";
          autowrite.textContent = "Web developer";
          setTimeout(() => {
            autowrite.style.color = "#3ce0f0";
            autowrite.textContent = "React js";
            setTimeout(() => {
              autowrite.style.color = "#3ce0f0";
              autowrite.textContent = "Node js";
            }, 6000);
          }, 5000);
        }, 4000);
      }, 3000);
    }, 2000);
  }, 1000);
}, 7000);

const time = () => {
  const times = new Date();
  const gettime = document.getElementById("gettime");
  gettime.innerText = times.toLocaleString();
};
setInterval(() => {
  time();
}, 1000);
