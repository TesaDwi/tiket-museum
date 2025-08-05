function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if(document.Formfill.NomorTelepon.value==""){
        document.getElementById("result").innerHTML="Enter your Number";
        return false;
    }
    else if(document.Formfill.Produk.value==""){
        document.getElementById("result").innerHTML="Enter your Product*";
        return false;
    }
    else if(document.Formfill.JumlahProduk.value==""){
        document.getElementById("result").innerHTML="Enter your Number of Products";
        return false;
    }
    else if(document.Formfill.JumlahProduk.value){
        popup.classList.add("open-slide")
        return false;
    }
}
var popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove("open-slide")
}