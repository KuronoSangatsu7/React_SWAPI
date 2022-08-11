const FullWrapper = (props) => {
    return <div className="h-full bg-slate-800 max-h-full overflow-scroll">{props.children}</div>
}

export default FullWrapper