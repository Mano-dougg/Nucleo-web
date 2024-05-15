import "./../../css-files/nav-styles/ToggleSwitch.css"

export default function ToggleSwitch () {
    return (
        <div className="toggle">
        <h3 className="dark-toggle">Dark Mode:</h3>
        <label className="switch">
            <input type="checkbox"></input>
            <span className="slider round"></span>
        </label>
        </div>
    )
}