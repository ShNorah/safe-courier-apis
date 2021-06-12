import {v4 as uuidv4} from 'uuid';
uuidv4();  // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

//creating an array of users
let users =[];

export const createUser = (req,res)=>{
    //console.log(req.body);
    const user = req.body;
    
    users.push({...user, id:uuidv4()}); //spread all the properties of user, add userid
  
    res.send(`user ${user.firstName} added to the array`)
  }

  export const getUsers =(req, res)=>{
    //  console.log(users)
      res.send(users)
  }

  export const getUser = (req, res)=>{
    //console.log(req.params)
    const {id} = req.params;
  
    const foundUser = users.find((user)=>user.id===id);
    res.send(foundUser)
  }

  export const deleteUser = (req, res)=>{
    const {id} = req.params;

    users = users.filter((user)=>user.id ===! id);

    res.send(`User with id ${id} deleted from the array`);
  }

  export const updateUser = (req,res)=>{
    const {id} = req.params;
  
    const {firstName, lastName, location} = req.body;
  
    const user = users.find((user)=>user.id === id);
  
    if(firstName)user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(location)user.location = location;
  
    res.send(`User with id ${id} has been updted`) 
  
  }

 