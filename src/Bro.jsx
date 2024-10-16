export default function Bro ({friend}) {
    const {name , email , id} = friend
    // console.log(friend);

    // const styles = {
    //     margin : '9px',
    //     padding : '6px',
    //     border : '2px solid yellow',
    //     borderRadius : '5px'
    // }

    return (
        <div className="box">
            <p>Id : {id}</p>
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
        </div>
    )
}