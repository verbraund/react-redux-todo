import {connect} from "react-redux";
import Todo from './index'

const TodoList = ({todo}) => {

    return (
        <ul className="list-group">
            {todo.map((i,index) => <Todo item={i} key={index} />)}
        </ul>
    );
};

export default connect(state => state)(TodoList);