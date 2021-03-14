import {useState} from "react";
import {connect} from "react-redux";
import {addTodo} from "../../redux/todo/actions";


const Form = ({addTodo}) => {

    const [form, setForm] = useState({
        title: ''
    });

    const submitHandle = (e) => {
        e.preventDefault();
        const {title} = form;
        addTodo({title, id: Date.now().toString()});
        setForm(p => ({
            ...p, title: ''
        }));
    };

    const changeInputHandler = (e) => {
        e.persist();
        setForm(p => ({
            ...p, ...{[e.target.name]: e.target.value}
        }));
    };

    return (
        <div className="row">
            <form onSubmit={submitHandle}>
                <div className="mb-3">
                    <label htmlFor="todoTitle" className="form-label">Заголовок</label>
                    <input onChange={changeInputHandler} value={form.title} type="text" name="title" className="form-control" id="todoTitle" />
                </div>
                <button type="submit" className="btn btn-primary">Сохранить</button>
            </form>
        </div>
    );
};

export default connect(null, {addTodo})(Form);