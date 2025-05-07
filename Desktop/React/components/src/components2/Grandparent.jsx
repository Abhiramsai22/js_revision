import Parent from "./parents"


function Grandparent(props){
    return <Parent Grandparent={props}/>
}

export default Grandparent