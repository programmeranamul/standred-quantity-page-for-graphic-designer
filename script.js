const serviceName = document.getElementById("s-name");
const imageQuantity = document.getElementById("img-quantity-input");
let imgQuantityInfo = document.querySelector(".img-quantity-info");
const servImg1 = document.getElementById("img-info-img1")
const servImg2 = document.getElementById("img-info-img2")
const servImg3 = document.getElementById("img-info-img3")
const imgBesicPrice = document.getElementById("img-basic-price")
const imgStanderdPrice = document.getElementById("img-standerd-price")
const imgPremiumPrice = document.getElementById("img-remiupm-price")
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
    //sjfsfdgs
    imgQuantityInfo.innerText = parseInt(imageQuantity.value,10);
    updateAllInfo()
    
}

document.getElementById("selecService").addEventListener("change", ChangHandler);


const imgQuantityHandler = () => {
    console.log(imageQuantity.value);
    imgQuantityInfo.innerText = parseInt(imageQuantity.value,10);
    updateAllInfo()
    
}
const imgQuantityHandler1 = () => {
    imgQuantityInfo.innerText = parseInt(imageQuantity.value,10);
    updateAllInfo()
    
}

imageQuantity.addEventListener("keyup", imgQuantityHandler)
imageQuantity.addEventListener("change", imgQuantityHandler1)

const imgTimeHandler = (e) => {
    console.log(e.target.value);
    imgDelevaryTime = e.target.value;
    imgQuantityInfo.innerText = parseInt(imageQuantity.value,10);
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
  
    if(sName == "" || sName ==="Selec Your Service" ){
        imgBesicPrice.value = 0;
        imgStanderdPrice.value = 0;
        imgPremiumPrice.value = 0;
        servImg1.src = "img/Color Variant & Color Color Changing/basic.jpg";
        servImg2.src = "img/Drop Shadow/medium.jpg";
        servImg3.src = "img/Ghost Mannequin/premium.jpg";
        imgCustomInfo.style.display = "none";
        imgInfoDes.style.display = "block";
    }else{
        imgInfoDes.style.display = "none";
        imgCustomInfo.style.display = "block";

        if(sName === "Clipping Path Service"){
            updateImg("img/clipping path/basic.jpg","img/clipping path/medium.jpg","img/clipping path/premium.jpg")
            if(imgDelevaryTime == 12){                
                updatePrice(0.29,1.39,12,fainalImgQuantity)
            }else if(imgDelevaryTime == 24){                
                updatePrice(24,24,24,fainalImgQuantity)
            }else{                
                updatePrice(48,48,48,fainalImgQuantity)
            }
        }

        else if(sName === "Background Remove Service"){
            updateImg("img/Background Removal/basic.jpg","img/Background Removal/medium.jpg","img/Background Removal/premium.jpg")
            if(imgDelevaryTime == 12){                
                updatePrice(12,12,12,fainalImgQuantity)
            }else if(imgDelevaryTime == 24){               
                updatePrice(24,24,24,fainalImgQuantity)
            }else{                
                updatePrice(48,48,48,fainalImgQuantity)
            }
        }

        else if(sName === "Image Masking Servuce"){
            updateImg("img/Image Masking/basic.jpg","img/Image Masking/medium.jpg","img/Image Masking/premium.jpg")
            if(imgDelevaryTime == 12){                
                updatePrice(12,12,12,fainalImgQuantity)
            }else if(imgDelevaryTime == 24){                
                updatePrice(24,24,24,fainalImgQuantity)
            }else{                
                updatePrice(48,48,48,fainalImgQuantity)
            }
        }
        else if(sName === "Image Masking Servuce"){
            updateImg("img/Image Masking/basic.jpg","img/Image Masking/medium.jpg","img/Image Masking/premium.jpg")
            if(imgDelevaryTime == 12){                
                updatePrice(12,12,12,fainalImgQuantity)
            }else if(imgDelevaryTime == 24){                
                updatePrice(24,24,24,fainalImgQuantity)
            }else{                
                updatePrice(48,48,48,fainalImgQuantity)
            }
        }
        else if(sName === "Deop Shadow Service"){
            updateImg("img/Drop Shadow/basic.jpg","img/Drop Shadow/medium.jpg","img/Drop Shadow/premium.jpg")
            if(imgDelevaryTime == 12){                
                updatePrice(12,12,12,fainalImgQuantity)
            }else if(imgDelevaryTime == 24){                
                updatePrice(24,24,24,fainalImgQuantity)
            }else{                
                updatePrice(48,48,48,fainalImgQuantity)
            }
        }
        else if(sName === "Ghost Mannequin Service"){
            updateImg("img/Ghost Mannequin/basic.jpg","img/Ghost Mannequin/medium.jpg","img/Ghost Mannequin/premium.jpg")
            if(imgDelevaryTime == 12){                
                updatePrice(12,12,12,fainalImgQuantity)
            }else if(imgDelevaryTime == 24){                
                updatePrice(24,24,24,fainalImgQuantity)
            }else{                
                updatePrice(48,48,48,fainalImgQuantity)
            }
        }
        else if(sName === "Color Variants & Color Changing"){
            updateImg("img/Color Variant & Color Color Changing/basic.jpg","img/Color Variant & Color Color Changing/medium.jpg","img/Color Variant & Color Color Changing/premium.jpg")
            if(imgDelevaryTime == 12){                
                updatePrice(12,12,12,fainalImgQuantity)
            }else if(imgDelevaryTime == 24){                
                updatePrice(24,24,24,fainalImgQuantity)
            }else{                
                updatePrice(48,48,48,fainalImgQuantity)
            }
        }
        else if(sName === "Product Photo Editing"){
            updateImg("img/Product Photo Editing/basic.jpg","img/Product Photo Editing/medium.jpg","img/Product Photo Editing/premium.jpg")
            if(imgDelevaryTime == 12){                
                updatePrice(12,12,12,fainalImgQuantity)
            }else if(imgDelevaryTime == 24){                
                updatePrice(24,24,24,fainalImgQuantity)
            }else{                
                updatePrice(48,48,48,fainalImgQuantity)
            }
        }
        else{
            updateImg("img/Vector Conversion/basic.jpg","img/Vector Conversion/medium.jpg","img/Vector Conversion/premium.jpg")
            if(imgDelevaryTime == 12){                
                updatePrice(12,12,12,fainalImgQuantity)
            }else if(imgDelevaryTime == 24){                
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


//================================================ start Photo Retuching Area======================================================================

const phServiceName = document.getElementById("ph-s-name");
const phImageQuantity = document.getElementById("ph-img-quantity-input");
let phImgQuantityInfo = document.querySelector(".ph-img-quantity-info");
const phServImg1 = document.getElementById("ph-img-info-img1")
const phServImg2 = document.getElementById("ph-img-info-img2")
const phServImg3 = document.getElementById("ph-img-info-img3")
const phBesicPrice = document.getElementById("ph-basic-price")
const phStanderdPrice = document.getElementById("ph-standerd-price")
const phPremiumPrice = document.getElementById("ph-remiupm-price")
const phCustomInfo = document.getElementById("ph-custom-info")
const phInfoDes = document.getElementById("ph-infoDes")
const phTime = document.getElementById("ph-time")
const unPhBesic= document.getElementById("un_ph_besic")
const unPhStandred = document.getElementById("un_ph_standred")
const unPhPremium = document.getElementById("un_ph_Premium")
let phDelevaryTime;


// let service;
let phservice;
const phChangHandler = (e) => {
    phservice = e.target.value;
    phServiceName.innerText = phservice;
    phImgQuantityInfo.innerText = parseInt(phImageQuantity.value, 10);
    upPhAllInfo()
    
}

document.getElementById("phselecService").addEventListener("change", phChangHandler);


const phQuantityHandler = () => {
    
    phImgQuantityInfo.innerText = parseInt(phImageQuantity.value, 10);
    upPhAllInfo()
    
}
const phQuantityHandler1 = () => {
    phImgQuantityInfo.innerText = parseInt(phImageQuantity.value, 10);
    upPhAllInfo()
    
}

phImageQuantity.addEventListener("keyup", phQuantityHandler)
phImageQuantity.addEventListener("change", phQuantityHandler1)

const phTimeHandler = (e) => {
    
    phDelevaryTime = e.target.value;
    phImgQuantityInfo.innerText = parseInt(phImageQuantity.value, 10);
    upPhAllInfo()
}

phTime.addEventListener("change", phTimeHandler)

const upPhAllInfo = () => {
    const sPhName = phServiceName.innerText;
    let fainalPhQuantity = parseInt(phImgQuantityInfo.innerText)

    if (isNaN(fainalPhQuantity)) {
        fainalPhQuantity = 0;
        phImgQuantityInfo.innerText = 0
    }
    
    if(sPhName == "" || sPhName ==="Selec Your Service" ){
        phBesicPrice.value = 0;
        phStanderdPrice.value = 0;
        phPremiumPrice.value = 0;
        phServImg1.src = "img/Photo Retouching Service/eCommerce/basic.jpg";
        phServImg2.src = "img/Photo Retouching Service/Magazine/medium.jpg";
        phServImg3.src = "img/Photo Retouching Service/Reastoration/premium.jpg";
        phCustomInfo.style.display = "none";
        phInfoDes.style.display = "block";
    }else{
        phInfoDes.style.display = "none";
        phCustomInfo.style.display = "block";

        if(sPhName === "Portrait Retouch Service"){
            updatePh("img/Photo Retouching Service/portrait/basic.jpg","img/Photo Retouching Service/portrait/medium.jpg","img/Photo Retouching Service/portrait/Premium.jpg")
            if(phDelevaryTime == 12){                
                updatePhPrice(12,12,12,fainalPhQuantity)
            }else if(phDelevaryTime == 24){
                updatePhPrice(24,24,24,fainalPhQuantity)
            }else{                
                updatePhPrice(48,48,48,fainalPhQuantity)
            }
        }
        else if(sPhName === "Headshot Retouching Services"){
            updatePh("img/Photo Retouching Service/Headshot/basic.jpg","img/Photo Retouching Service/Headshot/medium.jpg","img/Photo Retouching Service/Headshot/premium.jpg")
            if(phDelevaryTime == 12){                
                updatePhPrice(12,12,12,fainalPhQuantity)
            }else if(phDelevaryTime == 24){
                updatePhPrice(24,24,24,fainalPhQuantity)
            }else{                
                updatePhPrice(48,48,48,fainalPhQuantity)
            }
        }
        else if(sPhName === "Wedding Retouching Services"){
            updatePh("img/Photo Retouching Service/Wedding Photo Editing/basic.jpg","img/Photo Retouching Service/Wedding Photo Editing/medium.jpg","img/Photo Retouching Service/Wedding Photo Editing/premium.jpg")
            if(phDelevaryTime == 12){                
                updatePhPrice(12,12,12,fainalPhQuantity)
            }else if(phDelevaryTime == 24){
                updatePhPrice(24,24,24,fainalPhQuantity)
            }else{                
                updatePhPrice(48,48,48,fainalPhQuantity)
            }
        }
        else if(sPhName === "Jewelry retouching services"){
            updatePh("img/Photo Retouching Service/Jewelry/basic.jpg","img/Photo Retouching Service/Jewelry/medium.jpg","img/Photo Retouching Service/Jewelry/premium.jpg")
            if(phDelevaryTime == 12){                
                updatePhPrice(12,12,12,fainalPhQuantity)
            }else if(phDelevaryTime == 24){
                updatePhPrice(24,24,24,fainalPhQuantity)
            }else{                
                updatePhPrice(48,48,48,fainalPhQuantity)
            }
        }
        else if(sPhName === "Real Estate Photo Editing Services"){
            updatePh("img/Photo Retouching Service/Real-state/basic.jpg","img/Photo Retouching Service/Real-state/Stranderd.jpg","img/Photo Retouching Service/Real-state/premium.jpg")
            if(phDelevaryTime == 12){                
                updatePhPrice(12,12,12,fainalPhQuantity)
            }else if(phDelevaryTime == 24){
                updatePhPrice(24,24,24,fainalPhQuantity)
            }else{                
                updatePhPrice(48,48,48,fainalPhQuantity)
            }
        }
        else if(sPhName === "Car Photography Retouching"){
            updatePh("img/Photo Retouching Service/Car/basic.jpg","img/Photo Retouching Service/Car/medium.jpg","img/Photo Retouching Service/Car/premium.jpg")
            if(phDelevaryTime == 12){                
                updatePhPrice(12,12,12,fainalPhQuantity)
            }else if(phDelevaryTime == 24){
                updatePhPrice(24,24,24,fainalPhQuantity)
            }else{                
                updatePhPrice(48,48,48,fainalPhQuantity)
            }
        }
        else if(sPhName === "Photo Restoration Services"){
            updatePh("img/Photo Retouching Service/Reastoration/basic.jpg","img/Photo Retouching Service/Reastoration/medium.jpg","img/Photo Retouching Service/Reastoration/premium.jpg")
            if(phDelevaryTime == 12){                
                updatePhPrice(12,12,12,fainalPhQuantity)
            }else if(phDelevaryTime == 24){
                updatePhPrice(24,24,24,fainalPhQuantity)
            }else{                
                updatePhPrice(48,48,48,fainalPhQuantity)
            }
        }
        else {
            updatePh("img/Photo Retouching Service/Magazine/basic.jpg","img/Photo Retouching Service/Magazine/medium.jpg","img/Photo Retouching Service/Magazine/premium.jpg")
            if(phDelevaryTime == 12){                
                updatePhPrice(12,12,12,fainalPhQuantity)
            }else if(phDelevaryTime == 24){
                updatePhPrice(24,24,24,fainalPhQuantity)
            }else{                
                updatePhPrice(48,48,48,fainalPhQuantity)
            }
        }


    }
}
upPhAllInfo()

const updatePhPrice = (besicPice,standadPrice,primiumPrice,fainalPhQuantity) => {     
    phBesicPrice.value = (besicPice * fainalPhQuantity).toFixed(2);
    phStanderdPrice.value = (standadPrice * fainalPhQuantity).toFixed(2);
    phPremiumPrice.value =(primiumPrice * fainalPhQuantity).toFixed(2);
    updateUnPhPrice()
}
const updatePh = (img1,im2,img3) =>{
    phServImg1.src = img1;
    phServImg2.src = im2;
    phServImg3.src = img3;
}

const updateUnPhPrice = () => {
    unPhBesic.innerText = phBesicPrice.value;
    unPhStandred.innerText = phStanderdPrice.value ;
    unPhPremium.innerText = phPremiumPrice.value;
}

