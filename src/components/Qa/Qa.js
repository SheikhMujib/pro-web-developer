import React from 'react';

const Qa = () => {
    return (
        <div class="container text-center">
            <div class="row row-cols-1">
                <div class="col">
                    <p>Ques-1: How does React work?</p>
                    <p>Let’s say one of your friends posted a photograph on Facebook. Now you go and like the image and then you started checking out the comments too. Now while you are browsing over comments you see that the likes count has increased by 100, since you liked the picture, even without reloading the page. This magical count change is because of ReactJS.
                        React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’ denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.
                        React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                        A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.</p>
                </div>
                <div class="col">
                    <p>Ques-2: What is the difference between props and state?</p>
                    <p>
                        State
                        The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.

                        Props
                        Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
                    </p>
                </div>
                <div class="col">
                    <p>Ques-3: What is the use of useEffect except loading data using api?</p>
                    <p>
                        Uses of useEffect:
                        1. useEffect() is for side-effects <br />
                        2. Dependencies argument <br />
                        3. Component lifecycle <br />
                        3.1 Component did mount <br />
                        3.2 Component did update <br />
                        4. Side-effect cleanup
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Qa;