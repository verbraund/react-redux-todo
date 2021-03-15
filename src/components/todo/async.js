import {connect} from "react-redux";
import {fetchTodos} from "../../redux/todo/actions";

const Async = ({fetchTodos}) => {


    const clickHandler = () => {
        fetchTodos();
    };


    return (
        <div>
            <div className="row">
                <button onClick={clickHandler} type="submit" className="btn btn-primary">Загрузить</button>
            </div>
        </div>
    );
};

export default connect(null, {fetchTodos})(Async);