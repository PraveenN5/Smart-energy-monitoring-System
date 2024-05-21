import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../pages/logo.png'; // Adjust the path to your logo file
import { InfluxChart } from './InfluxChart';

export default function App() {
    return (
        <div>
            <div style={{ 
                position: 'sticky', 
                zIndex: 99999, 
                top: '0', 
                maxWidth: '100%', 
                height: '5rem', 
                backgroundColor: '#ed635c', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '0 3rem' 
            }}>
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center' 
                }}>
                    <img 
                        src={logo} 
                        alt="Logo" 
                        style={{ 
                            height: '4rem', 
                            marginRight: '1rem',
                            borderRadius: '50%' // Adding rounded border
                        }} 
                    />

                    <h1 style={{ 
                        color: 'white', 
                        fontFamily: 'Poppins', 
                        fontSize: '1.5rem', 
                        margin: 0 
                    }}>
                        Smart Energy Management
                    </h1>
                </div>
                <div style={{ 
                    backgroundColor: '#82c7a5', // Changed the background color
                    padding: '8px', 
                    borderRadius: '10px' 
                }}>
                    <Link to="/analysis" style={{ 
                        color: 'white', // Changed the text color
                        textDecoration: 'none', 
                        fontWeight: 'bold', 
                        fontFamily: 'Poppins' 
                    }}>
                        Live data
                    </Link>
                </div>
                <div></div> {/* This empty div maintains the spacing for centering the button */}
            </div>
            <div className="App" style={{ 
                height: '100vh', 
                width: '100vw', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                <InfluxChart />
            </div>
        </div>
    );
}
