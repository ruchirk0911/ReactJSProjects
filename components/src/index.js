import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Permanently Delete photos?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Ruchir" timeAgo="Yesterday at 10:32PM" content="Awesome pic!!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Aniket" timeAgo="Today at 4:45PM" content="Enjoy man" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Omkar" timeAgo="1 hour ago" content="How's your trip going?" />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);