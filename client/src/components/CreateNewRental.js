import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { Label, TextInput, Button, Checkbox } from 'flowbite-react'

function CreateNewRental({currentUser}) {

    const history = useHistory();

    const [formData, setFormData] = useState({
        location: "",
        description: "",
        price: "",
        picture: "",
      });

      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };

      const handleSubmit = ()=>{
        const rentalCred = {...formData, user_id: currentUser.id, available: false, canshare: false}
        fetch(`/rentals`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(rentalCred),
          }).then((res) => res.json())
            history.push('/rental')
        
      }
    
  return (
    <form className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="location"
        value="Location"
      />
    </div>
    <TextInput
    name='location'
      id="location"
      type="text"
      required={true}
      onChange={handleChange}
      value={formData.location}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="description"
        value="Description"
      />
    </div>
    <TextInput
    name='description'
      id="description"
      type="textbox"
      required={true}
      onChange={handleChange}
      value={formData.description}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="price"
        value="Price"
      />
    </div>
    <TextInput
    name='price'
      id="price"
      type="text"
      required={true}
      onChange={handleChange}
      value={formData.price}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="picture"
        value="Picture of your rental property"
      />
    </div>
    <TextInput
    name='picture'
      id="picture"
      type="text"
      required={true}
      onChange={handleChange}
      value={formData.picture}
    />
  </div>
  {/* <div className="flex items-center gap-2">
    <Checkbox id="remember" />
    <Label htmlFor="remember">
      Remember me
    </Label>
  </div> */}
  <Button  onClick={handleSubmit} type="submit">
    Submit
  </Button>
</form>
  )
}

export default CreateNewRental