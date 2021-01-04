import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.value,
       // tags:["tag1","tag2","tag3"]
     //   imageUrl:"https://picsum.photos/200"
    }
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // renderTag = () => {
    //     if (this.state.tags.length === 0) return "There are no tags";

    // return <ul> {this.state.tags.map((tag) => <li key={tag}>{tag}</li>)} </ul>
    // }

    handleIncrement = () => {
        console.log("Increased");
     this.setState({count:this.state.count + 1})
    }

    handleDecrement = () => {
        console.log("Decrease");
        this.setState({count:this.state.count - 1})
}

    handleDelete = () => {
        console.log("Deleted");
    }

    render() {
        return (
            <div>       
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">+</button>
                <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm" disabled={this.state.count === 0 ? "disabled":""}>-</button>
                <button onClick={this.handleDelete}>X</button>
                {/* {this.renderTag()} */}
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
        
    }
}

export default Counter;
