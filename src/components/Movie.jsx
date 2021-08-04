import React from 'react'
import axios from 'axios'

export default class Movie extends React.Component{

    state={
        movies:[]
    }

    componentDidMount(){
        axios.get('https://api.tvmaze.com/search/shows?q=superman')
            .then(res=>{
                const infoMovie=res.data
                this.setState({ movies:infoMovie })
            }).catch((erro)=>console.log('Houve um erro '+erro))
    }

    render(){
        return(
            <div>                
                {this.state.movies.map(
                    movie=>(<div key={movie.show.id}> {movie.show.name}</div>)
                )}
            </div>
        )

    }


}