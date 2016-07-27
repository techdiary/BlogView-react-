import React from 'react';

class BlogBox extends React.Component{
	getInitialState(){
		return {
				like: 0
			};
	}
	performLike(){
			setState({
				like: this.state.like + 1
			}
		);
	}
	render(){
		var posts =['First', 'Second', 'Third']
		var likes = this.state.like;
		return (
			<div className="blogBox">
				<div>
					<h1>Read Blogs of: {this.props.author}</h1>
					<BlogPost postList={posts} onLikeClick={this.performLike} likeAmt={likes}/>
					<BlogForm />
				</div>
			</div>
		);
	}	
}

class BlogPost extends React.Component{
	render(){
		var postListItem = this.props.postList.map(function(post){
			return <li><a href="#"> {post}</a> </li>
		});
		return (
			<div className="blogPost">
				<h2>Posts</h2>
				<ul>{postListItem}</ul>
				<button onClick={this.props.onLikeClick}>{this.props.likeAmt}</button>
			</div>
		);
	}
}

// class BlogBox extends React.Component{
//     constructor(props) {
//         super(props);
//         this.performLike= this.performLike.bind(this);
//     }
 
class BlogForm extends React.Component {
   render() {
     return (
       <div>
       	<h1>Blog Form</h1>
       </div>
     );
   }
 }
  

export default BlogBox 