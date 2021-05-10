// .media_kit_btn


let MaediaKitBtn = document.querySelector('.media_kit_btn');
let SociallPanel =  document.querySelector('.contactSocials');


MaediaKitBtn.addEventListener("click", function(){
    console.log(MaediaKitBtn);

    if(SociallPanel.classList.contains('active') ){
        SociallPanel.classList.remove('active')
    } else {
        SociallPanel.classList.add('active')

    }



});