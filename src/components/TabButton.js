export default function TabButton(props) {

    return <li>
        <button className={props.isSelected ?'active' :undefined} onClick={props.onClick}>{props.label}</button>
    </li>
}