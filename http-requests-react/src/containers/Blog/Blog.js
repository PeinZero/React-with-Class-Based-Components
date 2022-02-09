import React, { Component } from 'react';
// Required imports for routing
import {Route, NavLink} from 'react-router-dom'
// NAVLINK FOR STYLING ELSE LINK [ replacing a tags since a tags reloads the page, instead of re-rendering and we lose our previous state]

import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className = "Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" exact 
                                // activeClassName ="can replace default active task"
                                // INLINE STYLES
                                // activeStyle = {{
                                //     color:"#fa923f",
                                //     textDecoration: 'underline'

                                // }}
                                >Home</NavLink>
                            </li>
                            <li>
                                {/* Here to prop is further exploited */}
                                <NavLink to={{
                                    //  href equivalent
                                    pathname: '/new-post',
                                    // to jump to certain point after rendering the page
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header> 
                {/* MAKING ROUTING HAPPEN USING ROUTE TAGS */}
                {/* path is basically the url
                    exact is a boolean value that will make the Route content available to defined path only.*/}
                {/* render can be used to add some jsx to render in the page */}
                {/* component to load an component */}
                {/* <Route path="/" exact render={ () => <Posts/>}/> */}
                {/* <Route path="/new-post" exact render={ () => <h2> HYE malah</h2>}/> */}
                <Route path="/" exact component={ Posts}/>
                <Route path="/new-post" component={ NewPost}/>
            </div>
        );
    }
}

export default Blog;