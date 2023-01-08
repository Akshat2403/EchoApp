import './AddComment.css';
import next from './next.png';
import cross from './cross.png';

const AddComment = () => {
    return (
        <div className="Addcomment-main">
            <div className="comment-cross">
                <img src={cross}></img>
            </div>
            <div className="Comment-bar">
                <form action="">
                    <label for="comment">Add a comment</label>
                    <br />
                    <input
                        type="text"
                        name="comment"
                        placeholder="Write something..."
                    />
                </form>
                <button className="Comment-button">
                    <img src={next} alt="" />
                </button>
            </div>
        </div>
    );
};

export default AddComment;
