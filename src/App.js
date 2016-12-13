import React, { Component } from 'react';
import { Panel, FormControl, Button } from 'react-bootstrap'

class NumbersList extends Component {

  fizzBuzz(i) {
    let str = ''
    if (!(i%3)) str +='Fizz'
    if (!(i%5)) str +='Buzz'

    return str || i
  }

  render() {
    let entries = []
    for (let i = 1; i <= this.props.num; i++) {
      entries.push(this.fizzBuzz(i))
    }
    return (
      <ul>
        { entries.map((item, index) =>
          <li key={index}> {item} </li>
        )}
      </ul>
    );
  }
}

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      num : '',
      listShown: false
    }
  }

  handleChange (e) {
    +e.target.value > 0 && this.setState({ num: +e.target.value, listShown: false})
  }

  renderList () {
    this.state.num >0 && this.setState({ listShown: true})
  }

  render() {
    return (
      <div className='App'>
        <Panel bsStyle='info' header={'FizzBuzz App'}>
          <FormControl
            type='number'
            value={this.state.num}
            placeholder='Enter number'
            onChange={(e) => this.handleChange(e)}
          />
        <Button onClick={() => this.renderList()}> Start </Button>
        </Panel>
        <Panel>
          {this.state.listShown && <NumbersList num={this.state.num}/>}
        </Panel>
      </div>
    );
  }
}

export default App;
