
import React from 'react'
import moment from 'moment';
import { Link } from "react-router-dom";
import { Post } from '../../../../models/Post'
import "../styles/PostMeta.sass"

interface PostMetaProps extends Post {
  includeLink?: boolean;
}

const PostMeta: React.FC<PostMetaProps> = (props) => {

  const isToday = moment(props.createdAt).isSame(moment(), 'day');
  const postRowContentStyle = isToday ? { backgroundColor: '#FF0000'} : {};
  return (
    <div className="post-row-content" style={postRowContentStyle}>
      {props.includeLink === false ? '' : <Link to={`/discuss/${props.slug}`} className="title">"{props.title}" {props.link ? <span className="link">[link]</span> : ''}</Link>}
      <div className="post-row-meta">
        {moment(props.createdAt).fromNow()} | {`by `} <Link to={`/member/${props.postAuthor}`}>{props.postAuthor}</Link> | {`${props.numComments} comments`}
      </div>
    </div>
  );
}

export default PostMeta;