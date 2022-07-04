import { quote } from "./quote.js"
console.log(quote)
function getRandomInt() {
    return Math.floor(Math.random() * quote.length);
  }

  let randomQuote = getRandomInt()
  let defaultQuote = quote[randomQuote]
 

  const quoteText =document.getElementById("quote-text")
  const quoteAuthor= document.getElementById("quote-author")
  const quoteProfession = document.createElement("small")
  const btnNew = document.getElementById("btn-click")
  const btnShare = document.getElementById("btn-share")
  const animation = document.getElementById("hello")
  
  quoteProfession.classList = "text-xl"
  quoteProfession.id        = "author-prfession"
  
  
  quoteText.innerText = defaultQuote["quote"]
  quoteAuthor.innerText =defaultQuote["author"] + " :"
  quoteProfession.innerText = defaultQuote["profession"] 
  quoteAuthor.append(quoteProfession)


  const topicsDomUl = document.getElementById("topics") ;
  const topicsItems = defaultQuote["topics"]

// function of topicsItems ***********************************************************
  function generateTopics (listDOM, items) {
    for(let t of items) {
      const topicsItem = document.createElement("li")
      topicsItem.classList = "px-4 rounded-full bg-white text-black mr-2 mb-4"
      topicsItem.innerText = t ;
      listDOM.append(topicsItem)
      }
  }
  generateTopics (topicsDomUl, topicsItems)


//  create click btn ******************************************** //
  btnNew.addEventListener ("click", function () {
    const randomIndex = getRandomInt();
    let newQuote =  quote[randomIndex] ;
    quoteText.innerText = newQuote["quote"]
    quoteAuthor.innerText =newQuote["author"] + " :"
    quoteProfession.innerText = newQuote["profession"] 
    quoteAuthor.append(quoteProfession)
    const topicsItems = newQuote["topics"]
    topicsDomUl.innerHTML = "";
    generateTopics (topicsDomUl, topicsItems)
    animation.classList.add("effect") 
  })

  // create share btn *******************************************************//
  // btnShare.addEventListener ("click", function () {
  //   const quote = quoteText.innerText;
  //   const author = quoteAuthor.innerText;

  //   const facebookUrl = `https://developers.facebook.com/docs/plugins/?text=${quote}-${author}`
  //   window.open (facebookUrl, "_blank")
  // })

