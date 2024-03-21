let body = document.querySelector("body");

const usePrompt = () => {
  let userInput = prompt(" Insert a question if you are not scared to know your destiny ");
  console.log(userInput);
  body.append(userInput);
};

function GetAnswer()
{
    let myarray= new Array("Yes","No","Maybe","Try again Later","It is certain","It is decidedly so","Without a doubt","Most likely","Reply hazy,try again","Don't count on it","My sources say no","Outlook not so good","Very doubtful");
    let random = myarray[Math.floor(Math.random() * myarray.length)];
    // alert(random);
    document.getElementById("answer").innerText=random;
}

