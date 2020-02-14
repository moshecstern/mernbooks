// import React, { useState } from "react";
// import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
// // import Paper from 'material-ui/Paper';
// // import Typography from 'material-ui/Typography';
// // import { typography } from 'material-ui/styles';
// // class GoogleMapsContainer extends React.Component {
//   const GoogleMapsContainer = props => {
// const [showingInfoWindow, setshowingInfoWindow] = useState(false)
// const [activeMarker, setactiveMarker] = useState({})
// const [selectedPlace, setselectedPlace] = useState({})
//   // constructor(...props) {
//   //   super(props);
    
//   //   this.state = {
//   //     showingInfoWindow: false,
//   //     activeMarker: {},
//   //     selectedPlace: {}
//   //   }
//     // binding this to event-handler functions
//     this.onMarkerClick = this.onMarkerClick.bind(this);
//     this.onMapClick = this.onMapClick.bind(this);
//   }
//   onMarkerClick = (props, marker, e) => {
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//   }
//   onMapClick = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   }
//   // render() {
//   //   const style = {
//   //     width: '50vw',
//   //     height: '75vh',
//   //     'marginLeft': 'auto',
//   //     'marginRight': 'auto'
//   //   }
//     return (
//       <Map
//         item
//         xs = { 12 }
//         // style = { style }
//         google = { this.props.google }
//         onClick = { this.onMapClick }
//         zoom = { 14 }
//         initialCenter = {{ lat: this.props.lat, lng: this.props.long }}
//       >
//         <Marker
//           onClick = { this.onMarkerClick }
//           title = { 'Changing Colors Garage' }
//           position = {{ lat: this.props.lat, lng: this.props.long }}
//           name = { 'Changing Colors Garage' }
//         />
//         {/* <InfoWindow
//           marker = { this.state.activeMarker }
//           visible = { this.state.showingInfoWindow }
//         >
//           <Paper>
//             <Typography
//               variant = 'headline'
//               component = 'h4'
//             >
//               Changing Colors Garage
//             </Typography>
//             <Typography
//               component = 'p'
//             >
//               98G Albe Dr Newark, DE 19702 <br />
//               302-293-8627
//             </Typography>
//           </Paper>
//         </InfoWindow> */}
//       </Map>
//     );
//   }
// }
// export default GoogleApiWrapper({
//     // api: "AIzaSyCyRUzNluvXdWY35tsdEcQ3OdAfGGvruYs"
//     api: (process.env.GOOGLE_API_KEY)
// })(GoogleMapsContainer)









// // import { functions, isEqual, omit } from 'lodash'
// // import React, { useState, useEffect, useRef } from 'react'

// // function Map({ options, onMount, className, onMountProps }) {
// //   const ref = useRef()
// //   const [map, setMap] = useState()

// //   useEffect(() => {
// //     // The Google Maps API modifies the options object passed to
// //     // the Map constructor in place by adding a mapTypeId with default
// //     // value 'roadmap'. { ...options } prevents this by creating a copy.
// //     const onLoad = () =>
// //       setMap(new window.google.maps.Map(ref.current, { ...options }))
// //     if (!window.google) {
// //       const script = document.createElement(`script`)
// //       script.src =
// //         `https://maps.googleapis.com/maps/api/js?key=` +
// //         process.env.GOOGLE_MAPS_API_KEY
// //       document.head.append(script)
// //       script.addEventListener(`load`, onLoad)
// //       return () => script.removeEventListener(`load`, onLoad)
// //     } else onLoad()
// //   }, [options])

// //   if (map && typeof onMount === `function`) onMount(onMountProps)(map)

// //   return (
// //     <div
// //       style={{ height: `60vh`, margin: `1em 0`, borderRadius: `0.5em` }}
// //       {...{ ref, className }}
// //     />
// //   )
// // }

// // function shouldNotUpdate(props, nextProps) {
// //   const [funcs, nextFuncs] = [functions(props), functions(nextProps)]
// //   const noPropChange = isEqual(omit(props, funcs), omit(nextProps, nextFuncs))
// //   const noFuncChange =
// //     funcs.length === nextFuncs.length &&
// //     funcs.every(fn => props[fn].toString() === nextProps[fn].toString())
// //   return noPropChange && noFuncChange
// // }

// // export default React.memo(Map, shouldNotUpdate)

// // Map.defaultProps = {
// //   options: {
// //     center: { lat: 48, lng: 8 },
// //     zoom: 5,
// //   },
// // }