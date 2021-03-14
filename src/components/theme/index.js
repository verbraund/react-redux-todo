import {connect} from "react-redux";
import {disableDarkTheme, enableDarkTheme} from "../../redux/theme/actions";

const Theme = ({dark,enableDarkTheme,disableDarkTheme}) => {


    const changeHandler = (e) => {
        if(e.target.checked){
            enableDarkTheme();
        }else{
            disableDarkTheme();
        }
    };


    return (
        <div className="form-check form-switch">
            <input onChange={changeHandler} checked={dark} className="form-check-input" type="checkbox" id="enableDarkTheme" />
            <label className="form-check-label" htmlFor="enableDarkTheme">Включить темную тему</label>
        </div>
    );
};

export default connect(state => state.theme, {enableDarkTheme, disableDarkTheme})(Theme);