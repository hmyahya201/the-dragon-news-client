/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsigts from './EditorsInsigts/EditorsInsigts';

const News = () => {
    const news = useLoaderData();
    const {title, image_url, details, category_id
    } = news;
    return (
        <div>
            <h2 >Dragon News</h2>

            <Card className='shadow-sm p-3'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}> <FaArrowLeft/> All news in this category</Link>
                </Card.Body>
            </Card>
            <EditorsInsigts ></EditorsInsigts>
        </div>
    );
};

export default News;