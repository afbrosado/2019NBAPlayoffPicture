import React, {Component} from 'react'
import axios from 'axios'

import Series from './series'
import Cell from './cell'

import '../css/styles.css'

const URL = 'https://site.web.api.espn.com/apis/v2/sports/basketball/nba/standings?region=us&lang=en&contentorigin=espn&type=0&level=2&sort=playoffseed%3Aasc'
const pics = 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/'

class Playoffs extends Component{
	constructor(props){
		super(props)
		this.state = {
			east: [],
			west: [],
			imagesEast: [],
			imagesWest:[],
			recordsEast: [],
			recordsWest: []
		}

		this.refresh = this.refresh.bind(this)

		this.refresh()
	}

	refresh(){
		axios.get(`${URL}`)
		.then(resp => {
			const obj = resp.data.children

			for(let i = 0;i < 8;i++){
				this.setState({
					east: [...this.state.east,obj[0].standings.entries[i].team.abbreviation],
					west: [...this.state.west,obj[1].standings.entries[i].team.abbreviation],
					imagesEast:[...this.state.imagesEast,`${pics}` + obj[0].standings.entries[i].team.abbreviation],
					imagesWest:[...this.state.imagesWest,`${pics}` + obj[1].standings.entries[i].team.abbreviation],
					recordsEast:[...this.state.recordsEast, obj[0].standings.entries[i].stats[1].value + `${'-'}` + obj[0].standings.entries[i].stats[2].value],
					recordsWest:[...this.state.recordsWest, obj[1].standings.entries[i].stats[1].value + `${'-'}` + obj[1].standings.entries[i].stats[2].value]

                })
			}
		})
	}

	render(){
		const east = this.state.east
		const west = this.state.west
        const imagesEast = this.state.imagesEast
        const imagesWest = this.state.imagesWest
		const recordsEast = this.state.recordsEast
		const recordsWest = this.state.recordsWest

		return(
			<div className='container' id='container'>
				<h2>2019 NBA Playoff Picture</h2>
				<div className='row' id='row1'>
					<div className='col-md-2'>
						<Series>
							<Cell team={west[0]} pic={imagesWest[0]} alt={west[0]} record={recordsWest[0]}/>
							<Cell team={west[7]} pic={imagesWest[7]} alt={west[7]} record={recordsWest[7]}/>
						</Series>
					</div>
					<div className='col-md-2 offset-md-8'>
						<Series>
							<Cell team={east[0]} pic={imagesEast[0]} alt={east[0]} conf='east' record={recordsEast[0]}/>
							<Cell team={east[7]} pic={imagesEast[7]} alt={east[7]} conf='east' record={recordsEast[7]}/>
						</Series>
					</div>
				</div>
				<div className='row'>

					<div className='col-md-2 offset-md-2'>
						<Series>
							<Cell/>
							<Cell/>
						</Series>
					</div>
					<div className='col-md-2 offset-md-4'>
						<Series>
							<Cell/>
							<Cell/>
						</Series>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-2'>
						<Series>
							<Cell team={west[3]} pic={imagesWest[3]} alt={west[3]} record={recordsWest[3]}/>
							<Cell team={west[4]} pic={imagesWest[4]} alt={west[4]} record={recordsWest[4]}/>
						</Series>
					</div>
					<div className='col-md-2 offset-md-8'>
						<Series>
							<Cell team={east[3]} pic={imagesEast[3]} alt={east[3]} conf='east' record={recordsEast[3]}/>
							<Cell team={east[4]} pic={imagesEast[4]} alt={east[4]} conf='east' record={recordsEast[4]}/>
						</Series>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-2 offset-md-4'>
						<Series>
							<Cell/>
						</Series>
					</div>
					<div className='col-md-2'>
						<Series>
							<Cell/>
						</Series>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-2'>
						<Series>
							<Cell team={west[2]} pic={imagesWest[2]} alt={west[2]} record={recordsWest[2]}/>
							<Cell team={west[5]} pic={imagesWest[5]} alt={west[5]} record={recordsWest[5]}/>
						</Series>
					</div>
					<div className='col-md-2 offset-md-8'>
						<Series>
							<Cell team={east[2]} pic={imagesEast[2]} alt={east[2]} conf='east' record={recordsEast[2]}/>
							<Cell team={east[5]} pic={imagesEast[5]} alt={east[5]} conf='east' record={recordsEast[5]}/>
						</Series>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-2 offset-md-2'>
						<Series>
							<Cell/>
							<Cell/>
						</Series>
					</div>
					<div className='col-md-2 offset-md-4'>
						<Series>
							<Cell/>
							<Cell/>
						</Series>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-2'>
						<Series>
							<Cell team={west[1]} pic={imagesWest[1]} alt={west[1]} record={recordsWest[1]}/>
							<Cell team={west[6]} pic={imagesWest[6]} alt={west[6]} record={recordsWest[6]}/>
						</Series>
					</div>
					<div className='col-md-2 offset-md-8'>
						<Series>
							<Cell team={east[1]} pic={imagesEast[1]} alt={east[1]} conf='east' record={recordsEast[1]}/>
							<Cell team={east[6]} pic={imagesEast[6]} alt={east[6]} conf='east' record={recordsEast[6]}/>
						</Series>
					</div>
				</div>
			</div>
		)
	}
}

export default Playoffs
