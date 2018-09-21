const render = (props) => {
    return <section>
        <div className="code">
            {props.code}
        </div>
        { 
            props.result &&
            <div className="result">
                <strong>=> </strong>
                <div>
                    {props.result}
                </div>
            </div>
        }
    </section>
};

export default render

