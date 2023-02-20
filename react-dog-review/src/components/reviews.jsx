import { useState, useEffect } from 'react'


export default function Review() {
    const [reviews, setReviews ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/reviews')
        }
    })
    return (
        <h1>Reviews</h1>
    )
}