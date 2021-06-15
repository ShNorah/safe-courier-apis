import {v4 as uuidv4} from 'uuid';
uuidv4();  // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

//creating an array of parcels
let parcels =[];

export const createParcel = (req,res)=>{
    //console.log(req.body);
    const parcel = req.body;
    
    parcels.push({...parcel, id:uuidv4()}); //spread all the properties of user, add userid

    res.send(`parcel of weight ${parcel.parcelWeight}kg added to the array`)
}

export const getParcels = (req, res)=>{
    // console.log(parcels);
     res.send(parcels)
 }

 //parcel/1 is stored in req.params {id=1} 
 export const getParcel = (req, res)=>{  
    //console.log(req.params)
    const {id} = req.params;
  
    const foundParcel = parcels.find((parcel)=>parcel.id===id);
    res.send(foundParcel)
  }

  export const deleteParcel = (req, res)=>{
    const {id} = req.params;

    parcels = parcels.filter((parcel)=>parcel.id ===! id);

    res.send(`parcel with id ${id} deleted from the array`);
}

export const updateParcel = (req,res)=>{
    const {id} = req.params;
  
    const {
      parcelWeight, 
      parcelCode, 
      currentlocation, 
      parcelDestination, 
      parcelCreator, 
      contact, 
      email
    } = req.body;
  
    const parcel = parcels.find((parcel)=>parcel.id === id);
    if(parcelCreator)parcel.parcelCreator = parcelCreator;
    if(contact)parcel.contact = contact;
    if(email)parcel.email = email;
    if(parcelCode)parcel.parcelCode = parcelCode;
    if(parcelWeight) parcel.parcelWeight;
    if(currentlocation)parcel.currentlocation = currentlocation;
    if(parcelDestination)parcel.parcelDestination = parcelDestination;
    
  
    res.send(`Parcel with id ${id} has been updted`) 
  
  }
//getting parcesls of a particular
  export const getUserParcels = (req,res)=>{
    const userId = req.params;

    const userParcels = parcels.filter((parcel)=>parcel.userId==userId);

    if (userParcels){
      console.log(userParcels);
      return (userParcels)
    }
    return('no parcels found')

  }

  