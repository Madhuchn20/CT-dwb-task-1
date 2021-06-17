let rgb=["cyan","greenyellow","burlywood","hotpink","maroon","coral"]; 
let rgbC1 = [0,0,0,0,0,0]; 
let rgbC2 =[0,0,0,0,0,0];

let a_3 = [[0,0,0],[0,0,0],[0,0,0]]; 

let a_5 = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
const beauty = document.querySelector("button");
beauty.onclick = function gay (){
   a_3 =[[0,0,0],[0,0,0],[0,0,0]];
   rgbC1=[0,0,0,0,0,0];
   for(let x =0; x<9; x++){
       for(let i=0;i<3;i++)
           for(let j=0;j<3;j++){    
               let r=Math.floor(Math.random()*6);
               if((a_3[i][j]==0)&&(rgbC1[r]<4)){
                   document.getElementById("hi"+i+j).style.backgroundColor=rgb[r];
                   a_3[i][j]++;
                   rgbC1[r]++;
               }
           }
   gay_colour(); 
   } 
}
function gay_colour(){
   a_5 =[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
   rgbC2=[0,0,0,0,0,0];
   for(let x =0; x<25; x++){
       for(let i=0;i<5;i++){
           for(let j=0;j<5;j++){    
               let r=Math.floor(Math.random()*6);
               if((a_5[i][j]==0)&&(rgbC2[r]<4)){
                   if (i===4&&j===4){
                       continue;
                   }
                   document.getElementById("bye"+i+j).style.backgroundColor=rgb[r];
                   a_5[i][j]++;
                   rgbC2[r]++;
               }
           }
       }
   }
}

function motormouth(k1,k2){
   let a = document.getElementById(k1).className;
   document.getElementById(k1).className = document.getElementById(k2).className;
   document.getElementById(k2).className = a;
   let b = document.getElementById(k1).style.backgroundColor;
   document.getElementById(k1).style.backgroundColor = document.getElementById(k2).style.backgroundColor;
   document.getElementById(k2).style.backgroundColor = b;
}
        
function motorhead (i,j){
   let main = document.getElementById("bye"+i+j)
   let dududu = main.className;
   if( dududu != "blank"){
       if (i>0) {
          if ( document.getElementById("bye"+(i-1)+j).className=="blank") {
             motormouth("bye"+i+j,"bye"+(i-1)+j);
           }
       }
       if (i<4) {
           if ( document.getElementById("bye"+(i+1)+j).className=="blank") {
             motormouth("bye"+i+j,"bye"+(i+1)+j);
           }
       }
       if (j>0) {
         if ( document.getElementById("bye"+i+(j-1)).className=="blank") {
             motormouth("bye"+i+j,"bye"+i+(j-1));
         }
     }
       if (j<4) {
         if ( document.getElementById("bye"+i+(j+1)).className=="blank") {
           motormouth("bye"+i+j,"bye"+i+(j+1));
         }
      } 
   }
}