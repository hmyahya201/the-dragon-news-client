/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const { _id, details, author, image_url, rating, title,total_view,} = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{height:"40px"}} src={author?.img} roundedCircle />
                    <div className='flex-grow-1 ms-2'>
                        <p className='mb-0 mt-2'>{author?.name}</p>
                        <p className='pt-0'><small>{moment(author?.published_date).format("YYYY-MM-D")}</small></p>
                    </div>
                    <div>
                        <FaRegBookmark/>
                        <FaShareAlt />
                    </div>
                </Card.Header>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Text>
                            {details.length <= 250 ? <>{details}</>:<>{details.slice(0, 250)}...
                            <Link to = {`/news/${_id}`}>Read More</Link>
                            </>}
                        </Card.Text>
                    </Card.Body>
                <Card.Footer className="text-muted d-flex align-items-center">
                    <div className='flex-grow-1g'>
                        <Rating 
                             placeholderRating={rating?.number}
                             readonly
                             emptySymbol={<FaRegStar/>}
                             placeholderSymbol={<FaStar className='text-warning'/>}
                             fullSymbol={<FaStar/>}
                        />
                        <span>{rating?.number}</span>
                    </div>
                    <div>
                        <FaRegEye/>
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;