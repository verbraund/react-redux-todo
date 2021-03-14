import {connect} from "react-redux";
import {removeTodo} from "../../redux/todo/actions";


const Todo = ({item,removeTodo}) => {



    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {item.title}
            <button onClick={() => removeTodo(item.id)} type="button" className="btn-close" aria-label="Close" />
        </li>
    );
};

export default connect(null,{removeTodo})(Todo);