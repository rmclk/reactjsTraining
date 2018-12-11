class PropertyPassing extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.lecturer} manages the course {this.props.course}</h1>
            </div>
        );
    }
};

ReactDOM.render(
    <div>
        <PropertyPassing lecturer="Gerry Byrne" course="ReactJS"/>
        <PropertyPassing lecturer="David Wilson" course="Angular2"/>
        <PropertyPassing lecturer="Robert McLean" course="Emotional Intelligence"/>
    </div>, document.getElementById('contentgoeshere'));