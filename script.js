
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
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show More"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Show Less"; 
      moreText.style.display = "inline";
    }
  }