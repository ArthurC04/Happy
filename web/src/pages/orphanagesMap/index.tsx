import React, { useEffect, useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../../images/map-marker.svg';

import '../../styles/pages/orphanagesMap.css';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
    
    const [ InitialPosition, setInitialPosition ] = useState<[number, number]>([
        0,
        0,
      ]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
    
            setInitialPosition([latitude, longitude]);
          },
        );
      }, []);

    return(
        <div id='page-map'>
            <aside>
                <header>
                    <img src={mapMarkerImg} alt='Happy' />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>RJ</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>

        <Map 
        center={InitialPosition} 
        zoom={15}
        style={{width: '100%', height: '100%'}}
        >
        {/* <TileLayer url={"https://a.tile.openstreatmap.org/{z}/{x}/{y}.png"} /> */}
				<TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        </Map>

            <Link to='' className='create-orphanage'>
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;