const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let titleCased = ()=>{

  const newTt = tutorials.map(t=>{
     

    let f = "";

    t.split(" ").forEach(w=>{f+=(w.charAt(0).toUpperCase()+w.slice(1)+" ");});
        return f;

 });  
 
 