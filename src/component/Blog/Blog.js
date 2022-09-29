import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blogs'>

                <div className='blog-info'>
                    <img src="2.svg" alt=""></img>
                    <p className='activities-name'>
                        How Does react Work?
                    </p>
                    <p className='activities-details'>
                        React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.
                    </p>


                </div>

            </div>
            <div className='blogs'>

                <div className='blog-info'>
                    <img src="2.svg" alt=""></img>
                    <p className='activities-name'>
                        Difference Between Pros and States
                    </p>
                    <p className='activities-details'>
                        In props,The Data is passed from one component to another.In state,The Data is passed within the component only.Props is Immutable (cannot be modified).	State is Mutable ( can be modified).Props can be used with state and functional components.
                    </p>


                </div>

            </div>
            <div className='blogs'>

                <div className='blog-info'>
                    <img src="2.svg" alt=""></img>
                    <p className='activities-name'>
                        Different Use of UseEffect
                    </p>
                    <p className='activities-details'>
                        By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
                    </p>


                </div>

            </div>


        </div >
    );
};

export default Blog;