window.onload = function() {
    const body = document.body;
    const hamburger = document.getElementById('js-hamburger');
    const blackBg = document.getElementById('js-black-bg');
    hamburger.addEventListener('click', function() {
      body.classList.toggle('nav-open');
    }, false);
    blackBg.addEventListener('click', function() {
      body.classList.remove('nav-open');
    }, false);
  }
  
  
  //toggleNav();
  
  /*
  // Change bcColor after scroll
  window.addEventListener( "scroll", function() {
  
      //var header = document.getElementsByTagName('header');
      //var headerLogo = header.querySelector("h1");
      var header = document.querySelector("header");
      var headerUl = document.getElementById("headerUl");
      var headerLinks = document.querySelectorAll("header li a");
      var rect = header.getBoundingClientRect();
      var y = rect.top + window.pageYOffset; 
      if (y > 0) {    
        headerUl.classList.add('header-moved');
        gsap.to("header",{duration: 1.5, background: "rgb(6,36,118)", background: "linear-gradient(125deg, rgba(6,36,118,1) 0%, rgba(41,132,168,1) 100%)",});
        var i = 0, length = headerLinks.length;
            for ( ; i < length; i++) {
                headerLinks[i].style.color = "white";
                }
      } else {
              gsap.to("header",{duration: 1.5, background: "transparent",});
              gsap.to("header li a",{color: "var(--mainColor)",});
        }
    });

    */