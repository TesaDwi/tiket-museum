function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if(document.Formfill.Umur.value==""){
        document.getElementById("result").innerHTML="Enter your Age*";
        return false;
    }
    else if(document.Formfill.NomorTelepon.value==""){
        document.getElementById("result").innerHTML="Enter your Number";
        return false;
    }
    else if(document.Formfill.Alamat.value==""){
        document.getElementById("result").innerHTML="Enter your Address";
        return false;
    }
    else if(document.Formfill.TanggalBerkunjung.value==""){
        document.getElementById("result").innerHTML="Enter your Visiting Date";
        return false;
    }
    else if(document.Formfill.JumlahPengunjung.value==""){
        document.getElementById("result").innerHTML="Enter your Number of Visitors";
        return false;
    }
    else if(document.Formfill.JumlahPengunjung.value){
        popup.classList.add("open-slide")
        return false;
    }
}
var popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove("open-slide")
}