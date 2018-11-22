import React, { Component } from 'react'
import styles from './styling.css'

export default class LTable extends Component {

    constructor(props){
        super(props);
        this.state={
            rows: props.rows,
            columns: props.columns,
            styles: props.styles
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.rows!==prevState.rows || nextProps.columns!==prevState.columns){
            return { rows: nextProps.rows, columns: nextProps.columns};
        }

        return null;
    }

    render() {
        if(this.state.rows && this.state.columns){

            return (
                <table data-spec="lTable" style={this.state.styles}>
                    <thead>
                    <tr>
                        {Object.keys(this.state.columns).map((columnKey, i) => {
                            return (
                                <th key={i}>{this.state.columns[columnKey]}</th>
                            );
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.rows.map((row, i) => {
                        return (
                            <tr key={i}>
                                {Object.keys(this.state.columns).map((columnKey, i) => {
                                    return (
                                        <td data-column={this.state.columns[columnKey]} key={i}>{row[columnKey]}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            );
        }

        return null;

    }
}