import React, {Component} from 'react';
import {Link} from 'react-router';


//Sidebar component that can store Add question button, additional menu or some ads
class Sidebar extends Component {
    render() {
        return (
            <div>
                <Link className="btn btn-warning" to="ask-a-question" activeClassName="active">Ask a Question</Link>
            </div>
        );
    }
}

export default Sidebar;