


function expand(elementNum){


    document.getElementsByClassName("explanation")[elementNum].style.display="block";
    document.getElementsByClassName("explanation")[elementNum].style.fontSize ="36px";
    document.getElementsByTagName("li")[elementNum].style.width="100%"
    document.getElementsByTagName("li")[elementNum].style.transition = "width 0.2s";
    document.getElementsByTagName("li")[elementNum].style.height="550px"
    document.getElementsByTagName("li")[elementNum].style.transition = "height 0.2s";
    document.getElementsByTagName("li")[elementNum].style.marginLeft="-80px"
    document.getElementsByTagName("button")[elementNum].style.display="block"
    document.getElementsByTagName("button")[elementNum].style.margin="auto"
    document.getElementsByTagName("button")[elementNum].style.marginTop="20px"
    document.getElementsByTagName("button")[elementNum].style.fontSize="0.8em"
    document.getElementsByTagName("button")[elementNum].style.backgroundColor="orange"
    document.getElementsByTagName("button")[elementNum].style.padding="10px"
    document.getElementsByTagName("button")[elementNum].style.border="5px solid white"
    document.getElementsByTagName("button")[elementNum].style.borderRadius="20px"
    document.getElementsByTagName("button")[elementNum].style.cursor="pointer"

   
    for(var i=0 ;i<5;i++){
      if(i==elementNum){
        continue;
      }
      document.getElementsByTagName("li")[i].style.display="none"
      document.getElementsByTagName("button")[i].style.display="none"
    }
  }



  
    function contraction(){
      for(var i=0 ;i<5;i++){
        document.getElementsByTagName("button")[i].style.display="none"
      document.getElementsByClassName("explanation")[i].style.display="none";
      document.getElementsByTagName("li")[i].style.display="block"
      document.getElementsByTagName("li")[i].style.height="50px";
      document.getElementsByTagName("li")[i].style.width="14.5%";
      document.getElementsByTagName("li")[i].style.margin="auto"
      document.getElementsByTagName("li")[i].style.fontSize="34px";
      document.getElementsByTagName("li")[i].style.marginLeft="15px";
      document.getElementsByTagName("li")[i].style.marginTop="35px";
      document.getElementsByTagName("li")[i].style.transition = "height 0.2s";
      }
   } 

