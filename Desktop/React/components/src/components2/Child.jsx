
function Child(props){
    console.log(props.Parent.Grandparent.app)
    return <p>{props.Parent.Grandparent.app}</p>
}
 export default Child