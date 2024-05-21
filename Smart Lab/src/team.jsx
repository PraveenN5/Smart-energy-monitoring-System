import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../pages/logo.png'; // Adjust the path to your logo file
import { InfluxChart } from './InfluxChart';

const App = () => {
    return (
        <div>
            {/* Navigation Header */}
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
                {/* Logo and Title */}
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
                            borderRadius: '50%' // Adding rounded border to the logo
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
                {/* Navigation Links */}
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center' 
                }}>
                    <Link to="/analysis" style={{ 
                        color: 'white', 
                        textDecoration: 'none', 
                        fontWeight: 'bold', 
                        fontFamily: 'Poppins',
                        marginRight: '1rem' 
                    }}>
                        Live data
                    </Link>
                    <Link to="/home" style={{ 
                        color: 'white', 
                        textDecoration: 'none', 
                        fontWeight: 'bold', 
                        fontFamily: 'Poppins',
                        marginRight: '1rem' 
                    }}>
                        Team
                    </Link>
                    <button 
                        onClick={() => {localStorage.removeItem('token'); window.location.href = '/';}} 
                        style={{ 
                            backgroundColor: '#82c7a5', // Changed the background color
                            color: 'white', 
                            border: 'none', 
                            padding: '8px 10px', 
                            cursor: 'pointer', 
                            borderRadius: '10px', 
                            fontWeight: 'bold', 
                            fontFamily: 'Poppins' 
                        }}
                    >
                        About
                    </button>
                </div>
            </div>
            
            {/* Main Content */}
            <div className="App" style={{ 
                height: 'calc(100vh - 5rem)', // Adjust height to fit the main content
                width: '100vw', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                <InfluxChart /> {/* Render the InfluxChart component */}
            </div>

            {/* Team Members */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginTop: '2rem' 
            }}>
                <Team /> {/* Render the Team component */}
            </div>
        </div>
    );
};

export default App;
