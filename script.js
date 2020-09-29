
const setProperty = (duration) => {
    document.documentElement.style.setProperty(
      "--animation-time",
      duration + "s"
    );
  };
  
  const changeAnimationTime = () => {
    const animationDuration = Math.random();
    setProperty(animationDuration);
  };
  
  setInterval(changeAnimationTime, 100);
  
  function myFunction() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (more.style.display === "none") {
      btnText.innerHTML = "Show Less"; 
      moreText.style.display = "block";
    } else {  
      btnText.innerHTML = "Show More"; 
      moreText.style.display = "none";
    }
  }