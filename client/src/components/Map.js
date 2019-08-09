import React from 'react'
import GoogleMapReact from 'google-map-react'
import Axios from 'axios';
import Marker from "../components/Marker"



const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends React.Component {

    static defaultProps = {
        center: {
            lat: 28.5383355,
            lng: -81.3792365
        },
        zoom: 9
    };

    state = {
        lat: "",
        lng: "",
        load: false
    }

    getCoords = () =>{
        let location = window.localStorage.getItem('location')
        let queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=AIzaSyAA5SlE2LTsTT6T1ly7vaSqbS3FL408yFg"

        Axios.get(queryURL).then(res => {
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
            <div style={{ height: '300px', width: '300px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAA5SlE2LTsTT6T1ly7vaSqbS3FL408yFg' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat={this.state.lat}
                        lng={this.state.lng}
                        name="Dentist 1"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

    export default Map