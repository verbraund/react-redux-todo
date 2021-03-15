
import TodoCreate from './todo/form';
import TodoList from "./todo/list";
import TodoAsync from "./todo/async";
import Theme from "./theme";
import {connect} from "react-redux";

const Application = ({dark}) => {

    return (
        <div className={"container " + (dark  && "dark")}>
            <div className="row mt-4 justify-content-end">
                <div className="col-md-3">
                    <Theme />
                </div>
            </div>
            <div className="row mt-2 mb-2">
                <h3 className="h3">Todo</h3>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <TodoCreate />
                </div>
                <div className="col-md-4">
                    <TodoList />
                </div>
                <div className="col-md-4">
                    <TodoAsync />
                </div>
            </div>
        </div>
    );
};

export default connect(state => state.theme)(Application);