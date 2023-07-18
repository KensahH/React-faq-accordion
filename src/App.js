import React from "react";
import "./style.css";
import{useState} from "react";

export default function App() {
 const[answer, setAnswer]= useState("")
function updateAnswer(id){
setAnswer(id);


}


  return (
    <div>
      <h1>Faq Accordion</h1>
    <div className="faq">
<h3 className="question"> What should i put in FAQ on my website . </h3>
<button  onClick={()=> updateAnswer(1)} className="btn"> +</button>
<div className="showcase">
<p className={answer ===1?" showanswer": "answer"}> Your faq should address the most common questions <br></br>customers ask about your products, services and brand<br></br>as a whole </p>
</div>
    </div>

    <div className="faq">
<h3 className="question"> What are basic FAQ questions </h3>
<button onClick={()=> updateAnswer(2)} className="btn">+</button>
<div className="showcase">
<p className={answer === 2? "showanswer":"answer"}> FAQs are mostly questions amd answers<br></br> that follow a topic </p>
</div>

   </div>

<div className="faq">
<h3 className="question"> How many questions shoul be on a FAQ</h3>
<button  onClick={()=> updateAnswer(3)} className="btn"> +</button>
<div className="showcase">
<p className={ answer===3?"showanswer" : "answer"}> Fewer than five questions can indicate you havent done <br></br>your research or that tou didnt need a faq to begin with</p>
</div>
</div>


<div className="faq">
<h3 className="question"> What is a FAQ format</h3>
<button onClick={()=> updateAnswer(4)} className="btn"> + </button>
<div className="showcase">
<p className={answer===4? "showanswer" :"answer"}>  it stands for frequently asked questions and its a <br></br>page on a website that gives quick answers to customers</p>
</div>
</div>

<div className="faq">
<h3 className="question"> What are the five types of questions</h3>
<button onClick={()=> updateAnswer(5)} className="btn"> + </button>
<div className="showcase">
<p className={ answer===5?"showanswer": "answer"}> There are five types of questions :factual, <br></br>convergent, divergent,relative and combination</p>
</div>
</div>







    </div>
  );
}
