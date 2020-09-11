import React from 'react';

// below prop is passed from static router (context)

const NotFoundPage = ({staticContext = {}}) => {
    staticContext.notFound = true;
    return <h1>Oops, route not found.</h1>
}

export default {
    component: NotFoundPage
};

