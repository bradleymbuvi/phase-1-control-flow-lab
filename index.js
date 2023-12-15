
  // Write your code here!

const scuberGreetingForFeet = (ride)=> {
  if (ride <= 400){
    return 'This one is on me!';
  }
  else if(ride >2000 && ride< 2500 ){
    return 'I will gladly take your thirty bucks.';
  }
  return 'No can do.';
}

  // Write your code here!

const ternaryCheckCity = (city) =>{
  if (city === 'NYC'){
      return 'Ok, sounds good.'
  }
  else{
    return "No go."
  }
}


  // Write your code here!

const switchOnCharmFromTip = (tip)=>{
  if (tip === 'generous'){
    return 'Thank you so much.'
  }
  else if (tip === 'not as generous'){
    return 'Thank you.'
  }
  return 'Bye.'
}