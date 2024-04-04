import React, { Component } from 'react';
import photoGrid from "../assets/photo-grid.png"

export class Hero extends Component {
	render() {
		return (
			<section className="hero">
				<img className="hero--photo" src={photoGrid} /> 
				<h1 className="hero--header">Online Experiences</h1>
				<p className="hero--text">Join unique interactive activities led by
					one-of-a-kind hosts—all without leaving home.</p>
			</section>
		);
	}
	
}
