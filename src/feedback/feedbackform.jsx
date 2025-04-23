import React, { useState } from 'react';
import './FeedbackForm.css';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState({
    role: '',
    name: '',
    email: '',
    rating: 0,
    comments: '',
  });

  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStarClick = (rating) => {
    setFeedback(prev => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Feedback:', feedback);
    setSubmitted(true);
  };

  return (
    <div className="feedback-container">
      {!submitted ? (
        <>
          <h2>Feedback Form</h2>
          <form className="feedback-form" onSubmit={handleSubmit}>
            <select
              name="role"
              value={feedback.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="User">User</option>
              <option value="NGO">NGO</option>
            </select>

            <input
              type="text"
              name="name"
              placeholder={feedback.role === 'NGO' ? 'Organization Name' : 'Your Name'}
              value={feedback.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={feedback.email}
              onChange={handleChange}
              required
            />

            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${
                    (hoveredRating || feedback.rating) >= star ? 'filled' : ''
                  }`}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => handleStarClick(star)}
                >

                  ★
                </span>
              ))}
              <br />
              <button onClick={() => setFeedback(prev => ({...prev , rating : 0}))}>Reset Rating</button>
            </div>

            <textarea
              name="comments"
              placeholder="Additional Comments"
              value={feedback.comments}
              onChange={handleChange}
              rows="4"
            />
            <button type="submit" onClick={()=>navigate("/donatehistory")}>Submit Feedback</button>
          </form>
        </>
      ) : (
        <div className="thankyou-box">
          <h2>Feedback</h2>
          <hr />
          <p>Thank you! You have already submitted your feedback.</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
