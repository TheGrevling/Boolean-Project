import { useEffect, useState } from "react";
import { FetchData, environment } from "../../../../Services/FetchService";
import { useParams } from "react-router-dom";

function Reviews() {
    let { id: id } = useParams()
    const [data, setData] = useState([]);
  
    useEffect(() => {
      FetchData(environment + `/reviews/all?productId=${id}`, setData); console.log(data)
    }, [] )

    return (
        <div>
            {data && data.map((review, index) => (
                <div key={index}>
                    <hr className="separator"/>
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
                </div>
            ))}
        </div>
    )
}

export default Reviews