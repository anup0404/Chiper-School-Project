import React from 'react'
import UserDetails from './UserDetails';

const AllUserList =() =>{
    let allUsers =[{
        name:"John kumar",
        email:"kumar@gmail.com",
        phone: "+911352321391",
    },
    {
        name:"Anup gupta ",
        email:"gupta@gmail.com",
        phone: "7004402877",
    },
    {
        name:"ankit ",
        email:"nayak@gmail.com",
        phone: "9934349811",
    },

];
let array =allUsers.map((user,index) =>(
    <UserDetails key={index} user={user} />
));



return(
    // <div>
    //     <UserDetails user={allUsers[0]} />
    //     <UserDetails user={allUsers[1]} />
    //     <UserDetails  user={allUsers[2]}/>
    // </div>

    //using map rendering
    <div>
    {allUsers.map((user,index) =>(
        <UserDetails key={index} user={user} />
    ))};
</div>
);


};

export default AllUserList;