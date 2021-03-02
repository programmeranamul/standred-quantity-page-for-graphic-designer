const serviceName = document.getElementById("s-name");
const imageQuantity = document.getElementById("img-quantity-input");
let imgQuantityInfo = document.querySelector(".img-quantity-info");
const servImg1 = document.getElementById("img-info-img1")
const servImg2 = document.getElementById("img-info-img2")
const servImg3 = document.getElementById("img-info-img3")
const imgBesicPrice = document.getElementById("img-basic-price")
const imgStanderdPrice = document.getElementById("img-standerd-price")
const imgPremiumPrice = document.getElementById("img-remiupm-price")
console.log(imgBesicPrice,imgStanderdPrice,imgPremiumPrice);
const imgCustomInfo = document.getElementById("img-custom-info")
const imgInfoDes = document.getElementById("img-infoDes")
const imgTime = document.getElementById("img-time")
const unImgBesic= document.getElementById("un_img_besic")
const unImgStandred = document.getElementById("un_img_standred")
const unImgPremium = document.getElementById("un_img_Premium")
let imgDelevaryTime;





let service;
const ChangHandler = (e) => {
    service = e.target.value;
    serviceName.innerText = service;
    imgQuantityInfo.innerText = imageQuantity.value;
    updateAllInfo()
    
}

document.getElementById("selecService").addEventListener("change", ChangHandler);


const imgQuantityHandler = () => {
    console.log(imageQuantity.value);
    imgQuantityInfo.innerText = imageQuantity.value;
    updateAllInfo()
    
}
const imgQuantityHandler1 = () => {
    imgQuantityInfo.innerText = imageQuantity.value;
    updateAllInfo()
    
}

imageQuantity.addEventListener("keyup", imgQuantityHandler)
imageQuantity.addEventListener("change", imgQuantityHandler1)

const imgTimeHandler = (e) => {
    console.log(e.target.value);
    imgDelevaryTime = e.target.value;
    imgQuantityInfo.innerText = imageQuantity.value;
    updateAllInfo()
}

imgTime.addEventListener("change", imgTimeHandler)

const updateAllInfo = () => {
    const sName = serviceName.innerText;
    let fainalImgQuantity = parseInt(imgQuantityInfo.innerText)

    if (isNaN(fainalImgQuantity)) {
        fainalImgQuantity = 0;
        imgQuantityInfo.innerText = 0
    }
    console.log(fainalImgQuantity,sName);
    if(sName == "" || sName ==="Selec Your Service" ){
        imgBesicPrice.value = 0;
        imgStanderdPrice.value = 0;
        imgPremiumPrice.value = 0;
        servImg1.src = "img/clipping path/basic.jpg";
        servImg2.src = "img/clipping path/medium.jpg";
        servImg3.src = "img/clipping path/premium.jpg";
        imgCustomInfo.style.display = "none";
        imgInfoDes.style.display = "block";
    }else{
        imgInfoDes.style.display = "none";
        imgCustomInfo.style.display = "block";

        if(sName === "Clipping Path Service"){
            updateImg("img/Background Removal/basic.jpg","img/clipping path/medium.jpg","img/clipping path/premium.jpg")
            if(imgDelevaryTime == 12){                
                updatePrice(12,12,12,fainalImgQuantity)
            }else if(imgDelevaryTime == 24){
                // imgBesicPrice.value = 24
                // imgStanderdPrice.value = 24
                // imgPremiumPrice.value =24
                // servImg1.src = "img/Background Removal/basic.jpg";
                // servImg2.src = "img/Background Removal/medium.jpg";
                // servImg3.src = "img/clipping path/premium.jpg";
                // update("img/Background Removal/basic.jpg","img/clipping path/medium.jpg","img/clipping path/premium.jpg",122,242,482,fainalImgQuantity)
                updatePrice(24,24,24,fainalImgQuantity)
            }else{                
                updatePrice(48,48,48,fainalImgQuantity)
            }
        }

        if(sName === "Background Remove Service"){
            updateImg("img/Background Removal/basic.jpg","img/Background Removal/medium.jpg","img/Background Removal/premium.jpg")
            if(imgDelevaryTime == 12){                
                updatePrice(12,12,12,fainalImgQuantity)
            }else if(imgDelevaryTime == 24){
                // imgBesicPrice.value = 24
                // imgStanderdPrice.value = 24
                // imgPremiumPrice.value =24
                // servImg1.src = "img/Background Removal/basic.jpg";
                // servImg2.src = "img/Background Removal/medium.jpg";
                // servImg3.src = "img/clipping path/premium.jpg";
                // update("img/Background Removal/basic.jpg","img/clipping path/medium.jpg","img/clipping path/premium.jpg",122,242,482,fainalImgQuantity)
                updatePrice(24,24,24,fainalImgQuantity)
            }else{                
                updatePrice(48,48,48,fainalImgQuantity)
            }
        }

        if(sName === "Image Masking Servuce"){
            updateImg("img/Image Masking/basic.jpg","img/Image Masking/medium.jpg","img/Image Masking/premium.jpg")
            if(imgDelevaryTime == 12){                
                updatePrice(12,12,12,fainalImgQuantity)
            }else if(imgDelevaryTime == 24){
                // imgBesicPrice.value = 24
                // imgStanderdPrice.value = 24
                // imgPremiumPrice.value =24
                // servImg1.src = "img/Background Removal/basic.jpg";
                // servImg2.src = "img/Background Removal/medium.jpg";
                // servImg3.src = "img/clipping path/premium.jpg";
                // update("img/Background Removal/basic.jpg","img/clipping path/medium.jpg","img/clipping path/premium.jpg",122,242,482,fainalImgQuantity)
                updatePrice(24,24,24,fainalImgQuantity)
            }else{                
                updatePrice(48,48,48,fainalImgQuantity)
            }
        }


    }
}
updateAllInfo()

const updatePrice = (besicPice,standadPrice,primiumPrice,fainalImgQuantity) => {     
    imgBesicPrice.value = (besicPice * fainalImgQuantity).toFixed(2);
    imgStanderdPrice.value = (standadPrice * fainalImgQuantity).toFixed(2);
    imgPremiumPrice.value =(primiumPrice * fainalImgQuantity).toFixed(2);
    updateUnImgPrice()
}
const updateImg = (img1,im2,img3) =>{
    servImg1.src = img1;
    servImg2.src = im2;
    servImg3.src = img3;
}

const updateUnImgPrice = () => {
    unImgBesic.innerText = imgBesicPrice.value;
    unImgStandred.innerText = imgStanderdPrice.value ;
    unImgPremium.innerText = imgPremiumPrice.value;
}

