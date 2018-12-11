class App extends React.Component{
    render(){
        return(
            <div>
                <Header course ={this.props.course} />
                <Content location={this.props.location} />
            </div>
        );
    }
};

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1 id="header">{this.props.course} </h1>
            </div>
        );
    }
};

class Content extends React.Component{
    render(){
        return(
            <div>
                <h2>Given in Training Room</h2>
                <p>Here in {this.props.location}</p>
            </div>
        );
    }
};

ReactDOM.render(
    <div>
        <App course="C" location="Mays Meadow"/>
        <App course="ReactJS " location="Northland"/>
        <App course="Java" location="Chicago"/>
    </div>, document.getElementById('contentgoeshere'));