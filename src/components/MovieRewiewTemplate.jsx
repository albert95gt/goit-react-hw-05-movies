export const MovieReviewTemplate = ({ reviews }) => {
    return (
        <ul>
                {reviews.map(({id, author, content}) => (
                    <li key={id}>
                        <h3>Author: {author}</h3>
                        <p>{content}</p>
                    </li>
                ))}
        </ul>
    )
}