/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    console.log(news)
   
    const { _id, details, author, image_url, rating, thumbnail_url, title,total_view,} = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header>
                    <Image src={author.img} roundedCircle />
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
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;