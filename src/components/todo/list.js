import {connect} from "react-redux";
import Todo from './index'

const TodoList = ({todo}) => {

    return (
        <ul className="list-group">
            {todo.map(i => <Todo item={i} key={i.id} />)}
        </ul>
    );
};

export default connect(state => state)(TodoList);