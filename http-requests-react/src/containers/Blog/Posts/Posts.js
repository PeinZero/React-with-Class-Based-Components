import React, {Component} from 'react'
import axios from '../../../axios';

import Post from '../../../components/Post/Post'
import './Posts.css';


class Posts extends Component{
    state = {
        posts: [],
    }

    componentDidMount(){
        console.log(this.props)
        axios.get('/posts')
            .then( response => {
                const posts = response.data.slice(0,4)
                const updatePosts = posts.map( post =>{
                    return {
                        ...post,
                        author: 'Max'
                    }
                })  
                this.setState({posts: updatePosts})
            })
            .catch (error => {
                console.log(error)
            })
    }

    fetchPostHandler = (id) =>{
        this.setState({selectedPostID: id})
    }
    render(){
        let posts = <p style = {{textAlign: 'center'}}> Something went wrong</p>
        if (!this.state.error){
            posts = this.state.posts.map( post => {
                return <Post key = {post.id} clicked = {this.fetchPostHandler.bind(this,post.id)} title = {post.title}  author = {post.author} />
            })
        }
        return(
            <section className="Posts">
            {posts}
          </section>
        );
    }
}

export default Posts;