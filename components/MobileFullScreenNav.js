
function MobileFullScreenNav(props) {
    let className = "";
    if (props.direction === "forward") {
        className = "fixed h-full w-1/6 z-20 top-0 right-0 hover:cursor-pointer"
    }
    else if (props.direction === "backward") {
        className = "fixed h-full w-1/6 z-20 top-0 left-0 hover:cursor-pointer"
    }

    return (
        <div className={className}
            onClick={() => { props.onClick() }}>
        </div>
    );
}

export default MobileFullScreenNav;