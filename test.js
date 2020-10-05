test = [
    {
        number: 1
    },
    {
        number: 2
    },
    {
        number: 3,
        name: "ehatevs"
    },
    {
        number: 3
    }
]

for(i=0; i<test.length; i++) {
current = test[i]
    console.log(current);
    
}

function generateInterns(){
    function intern(person){
      return person.number===3
    }
   const interns = test.filter(intern)
   console.log(interns, "filtered?");
   
   
  
   for (let i = 0; i < interns.length; i++) {
    let current = interns[i]
    console.log("hello", current);
    
  }
  }

  generateInterns()