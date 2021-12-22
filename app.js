

//the arnold!

const arnold= {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    isAlive: true,

//function for our ship to attack the aliens 

attack(target){
     accuracyNum= Math.random();{
    console.log(`Scanning........Alien shields are at ${target.hull}`)
     alert(`Scanning.......Alien shields are at ${target.hull}`) 
    }
     input=prompt(`Should we attack? Yes or no!`)
    if (input.toLowerCase()=="no"){
        return alert(`Coward!!!!!!`)  
    }
    if (input.toLowerCase()=="yes"){
    if (accuracyNum< this.accuracy){
        console.log(`Its a hit! Way to go kid!`);
        alert(`Its a hit! Way to go Kid!`)
        target.hull= target.hull-this.firepower;
        console.log(`Alien shields down to ${target.hull}`)
        alert(`Alien shields down to ${target.hull}`)
         attackAgain = prompt(`Should we attack again?`)
        if  (attackAgain.toLowerCase()=="no"){
            return alert(`Coward!!!!!!`)
        }
        
        if (target.hull<=0){
            target.isAlive=false;
            console.log(`We knocked them out of the sky!`);
            alert(`We knocked them out of the sky!`)
        }

            
        }
    }
    
    else{
        console.log(`Do you need space glasses!? You missed!`);
        alert(`Do you need space glasses! You missed!`)
    }
    }
}


//alienScum

// class alienScum {
//     constructor(hull,firepower,accuracy, isAlive)
//     {
//     this.hull=hull;
//     this.firepower=firepower;
//     this.accuracy=accuracy;
//     this.isAlive=isAlive;
//     }
// }

//  alienScumFleet=[];
// for(let i =0; i<6;i++) { 
//  alienScumFleet[i] = new alienScum(Math.floor((Math.random()*(6-3)) +3), Math.floor((Math.random()*(4-2))+2), Math.random()*(.8-.6)+.6, true )
// }



const alienScum={
hull: Math.floor((Math.random()*(6-3)) +3),
firepower: Math.floor((Math.random()*(4-2))+2),
accuracy: Math.random()*(.8-.6)+.6,
isAlive: true,




            //function for aliens to attack Arnold
attack(target){
      accuracyNum= Math.random();
     if (accuracyNum<this.accuracy){
        console.log(`We've been hit!`)
        alert(`We've been hit!`)
        target.hull=target.hull-this.firepower;
        if (target.hull<=0){
            target.isAlive=false;
            console.log(`Our shields have...... aaaaarrrghhhh BOOM!!!!!!`)
            alert(`Our shields have.........aaaaaarrrrgggghhhhh BOOM!!!!!`)
        }
    } 
    else { console.log(`You missed you Alien Scum!`)
    alert(`You missed Alien scum!!!!!`)
    }
}   
}
///the spacefight logic

const spacefight=(arnold,alienScum) =>{
    while(arnold.isAlive && alienScum.isAlive){
        arnold.attack(alienScum);
        if (alienScum.isAlive){
            alienScum.attack(arnold);
            
        }
    }
}
 document.getElementById("gameStart").addEventListener("click", "").innerHTML= text;

console.log(spacefight(arnold,alienScum))
//  input=prompt(`Should we attack? Yes or no!`)