import React from 'react'
import GoogleMapReact from 'google-map-react'
import Axios from 'axios';



const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends React.Component {

    static defaultProps = {
        center: {
            lat: -28.5383355,
            lng: 81.3792365
        },
        zoom: 11
    };

    state = {
        lat: "",
        lng: "",
        load: false
    }

    getCoords = () =>{
        
        Axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=Orlando&key=AIzaSyAA5SlE2LTsTT6T1ly7vaSqbS3FL408yFg").then(res => {
            //console.log(res.results[0].geometry.location)
            //coords = res.results[0].geometry.location
            //console.log(coords)
            console.log(res)
            console.log(res.data.results[0].geometry.location)
            console.log(res.data.results[0].geometry.location.lat)
            console.log(res.data.results[0].geometry.location.lng)
            
            
           this.setState({
               lat: JSON.stringify(res.data.results[0].geometry.location.lat),
               lng: JSON.stringify(res.data.results[0].geometry.location.lng)
        })
    })
        
    }

    componentDidMount = () => {
        this.getCoords()

    }





    render() {

        
       console.log(this.state)
    

        
        return (
            
            // Important! Always set the container height explicitly
            <div style={{ height: '200px', width: '200px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAA5SlE2LTsTT6T1ly7vaSqbS3FL408yFg' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={this.state.lat}
                        lng={this.state.lng}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

    export default Map