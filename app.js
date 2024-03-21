let h2 = document.querySelector("h2");
const usePromptOne = () => {
  let userInput = prompt("Insert a question if you are not scared to know your destiny");
  console.log(userInput);
  h2.append(userInput);
  setTimeout(function() {document.getElementById('question').innerHTML='';},5000);
  document.getElementById("question").innerText=random;
};
function GetAnswer()
{
    let myarray= new Array("Yes","No","Maybe","Try again Later","It is certain","It is decidedly so","Without a doubt","Most likely","Reply hazy,try again","Don't count on it","My sources say no","Outlook not so good","Very doubtful");
    let random = myarray[Math.floor(Math.random() * myarray.length)];
    setTimeout(function() {document.getElementById('answer').innerHTML='';},3000)
    document.getElementById("answer").innerText=random;
}

