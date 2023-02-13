function init() {
    //let question= confirm("Click yes for a cleaner look...");
    swal("Use the DOM to clean up the look?", {buttons: ["yes", "no"]})
      .then((value) => {
        // console.log(value);
        if (value===null){
            document.body.style.margin="auto";
            document.getElementById("mainHeading").style.color="black";
            document.getElementsByClassName("funParagraph")[0].style.color="black";
        }
      });
  }
  
  window.addEventListener("load", init);