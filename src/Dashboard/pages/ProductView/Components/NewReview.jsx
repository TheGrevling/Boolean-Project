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

  const handleChangeReview = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: Math.min(Math.max( value, e.target.min), e.target.max)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    await PostData(environment + `/reviews/{id}?productId=${id}`, formData, setFormData);
  };
  return (
    <div className="review-field">
        <div className="review-title">Write your review</div>
          <form onSubmit={handleSubmit} className="review-form">
            <div className='form-field'>
              <label htmlFor="rating" className="input-title">Rating:</label>
              <input
                className="review-input-num"
                type="number"
                id="rating"
                name="rating"
                min="1"
                max="5"
                value={formData.rating}
                onChange={handleChangeReview}
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor="title" className="input-title">Title:</label>
              <input
                className="button"  
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor="content" className="input-title">Body:</label>
              <input
                className="button"
                type="text"
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
              />
            </div>
            <div className="review-button-field">
              <button className="review-button-submit" type="submit">Submit</button>
            </div>
          </form>
    </div>
  )
}

export default NewReview