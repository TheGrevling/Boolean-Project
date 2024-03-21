import { useEffect, useState } from "react";
import { FetchData, environment } from "../../../../Services/FetchService";
import { useParams } from "react-router-dom";

function Reviews() {
    let { id: id } = useParams()
    const [data, setData] = useState([]);
  
    useEffect(() => {
      FetchData(environment + `/reviews/all?productId=${id}`, setData);
    }, [id] )

    return (
        <div>
          {data && data.map((review, index) => (
            <div key={index}>
              <div >
                <h4> Anonymous user says...</h4>
              </div>
              <div>
                <h4>Rating: {review.rating}</h4>
              </div>
              <div>
                <p>Title: {review.title}</p>
              </div>
              <div>
                <p>Content: {review.content}</p>
              </div>
              <hr className="separator"/>
            </div>
          ))}
        </div>
    )
}

export default Reviews