import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    // fetch the data from JSON file 
    useEffect(() => {
        fetch('https://hidden-dusk-70127.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className="my-5">
            <h1 className="m-5 fw-bolder mt-5 text-center">Customer's Review</h1>
            <div className="container">
                <div className="row">
                    {
                        reviews.map(review => <Review review={review} key={review._id}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;