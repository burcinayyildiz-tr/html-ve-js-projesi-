let cinsiyet="";

    function cinsiyetiniSec(secim){
        cinsiyet=secim;
        if (secim === "kadin") {
           document.getElementById("cinsiyetYazi").innerText = "Kadın seçildi.";
        }
        if(secim==="erkek"){
            document.getElementById("cinsiyetYazi").innerText="Erkek seçildi."
        }
    }
    function kartGoster(){
        document.getElementById("kart").hidden = false;
        
        if(cinsiyet==="kadin"){
            document.getElementById("youtube").hidden=false;
        }else{
            document.getElementById("youtube").hidden=true;
        }
    }
    function uzgun(){
        kartGoster ();
        let baslik=document.getElementById("baslik");
        let resim=document.getElementById("resim");
        let dizi=document.getElementById("dizi");
        baslik.innerText="Seçim: Üzgün ruh hali";
        resim.src="uzgun.jpg"
        dizi.innerText="Friends ";
    }
    function sinirli(){
        kartGoster ();
        let baslik=document.getElementById("baslik");
        let resim=document.getElementById("resim");
        let dizi=document.getElementById("dizi");
        baslik.innerText="Seçim: Sinirli ruh hali";
        resim.src="sinirli.jpg"
        dizi.innerText="Feride";
    }
    function asik(){
        kartGoster ();
        let baslik=document.getElementById("baslik");
        let resim=document.getElementById("resim");
        let dizi=document.getElementById("dizi");
        baslik.innerText="Seçim: Aşık ruh hali";
        resim.src="asik.jpg"
        dizi.innerText="How I Met Your Mother ";
    }
    function mutlu(){
        kartGoster ();
        let baslik=document.getElementById("baslik");
        let resim=document.getElementById("resim");
        let dizi=document.getElementById("dizi");
        baslik.innerText="Seçim: Mutlu ruh hali";
        resim.src="mutlu.jpg"
        dizi.innerText="The Big Bang Theory ";
    }
    function yorgun(){
        kartGoster ();
        let baslik=document.getElementById("baslik");
        let resim=document.getElementById("resim");
        let dizi=document.getElementById("dizi");
        baslik.innerText="Seçim: Yorgun ruh hali";
        resim.src="yorgun.jpg"
        dizi.innerText="Friends ";
    }
    function depresif(){
        kartGoster ();
        let baslik=document.getElementById("baslik");
        let resim=document.getElementById("resim");
        let dizi=document.getElementById("dizi");
        baslik.innerText="Seçim: Depresig ruh hali";
        resim.src="depresif.jpg"
        dizi.innerText="Gilmore Girls ";
    }
