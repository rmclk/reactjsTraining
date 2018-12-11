class FirstReactProgram extends React.Component{
    render(){
        return(
        <div>
            <h1> I am returning these details -
            <b> Gerry + David: React tutorials </b>
            </h1>
        </div>
        );
    }
};

ReactDOM.render(<FirstReactProgram />, document.getElementById('contentgoeshere'));
