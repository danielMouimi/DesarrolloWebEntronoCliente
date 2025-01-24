export function Jokes(){
    
    var jokes = [
        {
            id: 1,
            setup: "What's the best thing about a Boolean?",
            punchline: "Even if you're wrong, you're only off by a bit"
        },
        {
            id: 2,
            setup: "Why do programmers wear glasses?",
            punchline: "Because they need to C#"
        }
    ]
    
    var divs = jokes.map(joke => 
      <>
      <div>
      <h2>{joke.setup}</h2>
      <p>{joke.punchline}</p>
      </div>
      </>

    );
    return (
      <>
      {divs}
      </>
    );
}