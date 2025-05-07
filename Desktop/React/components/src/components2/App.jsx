import Grandparent from "./Grandparent"


function App(){
    const name = "Abhiramsai"
    const age=30
    return(
        <>
 
 <Grandparent  
 app={name} 
 age={age}
 location="earth"
 occupation="enginering"
 hobbies={["Reading","Traveling"]}
 />
    
        </>
    )
}

export default App