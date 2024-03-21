import { useState } from "react";
import { PostData, environment } from "../../../../Services/FetchService";
import { useParams } from "react-router-dom";

function NewReview(){
    let { id } = useParams()
    const [formData, setFormData] = useState({
        rating: '',
        title: '',
        content: '',
      });
  // Event handler to update form data when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    await PostData(environment + `/reviews/{id}?productId=${id}`, formData, setFormData);
  };
  return (
    <div>
        <hr className="separator"/>
          <div>Write your review</div>
          <form onSubmit={handleSubmit}>
            <div className='form-field'>
              <label htmlFor="rating">Rating:</label>
              <input
                type="text"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor="content">Body:</label>
              <input
                type="text"
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
    </div>
  )
}

export default NewReview