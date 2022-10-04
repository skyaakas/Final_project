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
        image: null,
      });

      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };

      const handleImage = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.files[0],
        });
        console.log(formData)
      }

      const handleSubmit = ()=>{
       
        // const rentalCred = {...formData, user_id: currentUser.id, available: false, canshare: false}

        const data = new FormData()

        data.append('location', formData.location)
        data.append('description', formData.description)
        data.append('price', formData.price)
        data.append('picture', formData.picture)
        data.append('image', formData.image)
        data.append('user_id', currentUser.id)
        data.append('available', false)
        data.append('canshare', false)





        fetch(`/rentals`,{
            method: "POST",
            body: data,
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
        htmlFor="image"
        value="Picture of your rental property"
      />
    </div>
    <TextInput
    name='image'
      id="image"
      type="file"
      required={true}
      onChange={handleImage}
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