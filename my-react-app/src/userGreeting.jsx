function UserGreeting(props) {
   if (props.isLoggedIn){
       return <h1>Welcome {props.username}</h1>
   }

}
export default UserGreeting;