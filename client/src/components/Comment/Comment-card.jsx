import '../../assets/styles/Audio.css';
import userlogo from '../../assets/images/User-logo.png';
import useFetch from '../../features/usefetch';
import { useParams } from 'react-router-dom';

const Commentcard = ({ audioid }) => {
    const { id } = useParams();
    const { data } = useFetch(`/comment/${id}`);

    const comments = data?.comments;
    return (
        <>
            <div className="commentcardgrid">
                {comments &&
                    comments.map((comment) => (
                        <div key={comment.id}>
                            <div className="Comment-card">
                                <img
                                    className="user-image"
                                    src={userlogo}
                                ></img>
                                <div className="Comment-info">
                                    <div className="Comment-name">
                                        <div className="Comment-user">
                                            {comment?.author.name}
                                        </div>
                                        {/* <div className="Comment-dot">
                                            {' '}
                                            &nbsp;.{' '}
                                        </div>
                                        <div className="Comment-time">
                                            &nbsp;{comment.editedAt}
                                        </div> */}
                                    </div>
                                    <div className="Comment-desc">
                                        {comment.desc}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Commentcard;
