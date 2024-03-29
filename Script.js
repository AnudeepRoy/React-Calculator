
	//output

class Output extends React.Component{

	clearAll = ()=>{
	this.props.clearAll();
}

	render(){
	return(
		<div className='row'>
			<div className='col-md-4'></div>
			<div className='col-md-3'>
		<input className='form-control' type='text' value={this.props.value} disabled/>
			</div>
			<div className='col-md-1'>
				<button type='button' className='btn btn-danger btn-block' onClick={this.clearAll} name='ce'>CE</button>
			</div>
			<div className='col-md-4'></div>
		</div>
	)
}
}

//keypad

class Keypad extends React.Component{
	buttonPressed=e=>{
	this.props.buttonPressed(e.target.name);
	}
	render(){
	return(
		<>
		<div className='row'>
			<div className='col-md-4'></div>
			<div className='col-md-1'>
		<button className='btn btn-info btn-block' onClick={this.buttonPressed} name='1'>1</button>
			</div>
			<div className='col-md-1'>
		<button className='btn btn-info btn-block' onClick={this.buttonPressed} name='2'>2</button>
			</div>
			<div className='col-md-1'>
		<button className='btn btn-info btn-block' onClick={this.buttonPressed} name='3'>3</button>
			</div>
			<div className='col-md-1'>
		<button className='btn btn-dark btn-block'onClick={this.buttonPressed} name='+'>+</button>
			</div>
		</div><br/>

		<div className='row'>
			<div className='col-md-4'></div>
			<div className='col-md-1'>
		<button className='btn btn-info btn-block' onClick={this.buttonPressed} name='4'>4</button>
			</div>
			<div className='col-md-1'>
		<button className='btn btn-info btn-block' onClick={this.buttonPressed} name='5'>5</button>
			</div>
			<div className='col-md-1'>
		<button className='btn btn-info btn-block' onClick={this.buttonPressed} name='6'>6</button>
			</div>
			<div className='col-md-1'>
		<button className='btn btn-dark btn-block' onClick={this.buttonPressed} name='-'>-</button>
			</div>
		</div><br/>

		<div className='row'>
			<div className='col-md-4'></div>
			<div className='col-md-1'>
		<button className='btn btn-info btn-block' onClick={this.buttonPressed} name='7'>7</button>
			</div>
			<div className='col-md-1'>
		<button className='btn btn-info btn-block' onClick={this.buttonPressed} name='8'>8</button>
			</div>
			<div className='col-md-1'>
		<button className='btn btn-info btn-block' onClick={this.buttonPressed} name='9'>9</button>
			</div>
			<div className='col-md-1'>
		<button className='btn btn-dark btn-block' onClick={this.buttonPressed} name='*'>*</button>
			</div>
		</div><br/>

		<div className='row'>
			<div className='col-md-4'></div>
			<div className='col-md-1'>
		<button className='btn btn-info btn-block' onClick={this.buttonPressed} name='0'>0</button>
			</div>
			<div className='col-md-1'>
		<button className='btn btn-info btn-block' onClick={this.buttonPressed} name='.'>.</button>
			</div>
			<div className='col-md-1'>
		<button className='btn btn-success btn-block' onClick={this.buttonPressed} name='='>=</button>
			</div>
			<div className='col-md-1'>
		<button className='btn btn-dark btn-block' onClick={this.buttonPressed} name='/'>/</button>
			</div>
		</div><br/>

		
		</>
	)
}
}

//app

class App extends React.Component{
	state={
	result:''
}

	buttonPressed = (buttonName) =>{

			if(buttonName === '='){
			this.calculate();
		}
		else{
	this.setState({
		result:this.state.result + buttonName
})
}
}

	calculate = ()=>{
		this.setState({
		result:eval(this.state.result)
	})
}
	clearAll = ()=>{
	this.setState({
	result:''
})
}

	render(){
	return(
		<div className='container'>
		<Output value={this.state.result} clearAll={this.clearAll}/><br/>
		<Keypad buttonPressed={this.buttonPressed}/>
		</div>
	)
}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
)
