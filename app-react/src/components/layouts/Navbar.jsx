import { NavLink } from "react-router-dom"
import { LoginContext } from "../../auth/context/LoginContext";
import { useContext } from "react";

import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';;
import DropdownButton from 'react-bootstrap/DropdownButton';

export const Navbar = () => {

    const { login, handlerLogout, usernameLogued } = useContext(LoginContext);

    return (

        <>

        <nav className="navbar navbar-expand-lg navbar-light bg-light opacity-100 rounded" style={{zIndex: '10'}}>
  
            <div className="container-fluid">
                <NavLink className="nav-link mt-2" to="/stock">
                    <img src="../src/images/react_original_wordmark_logo_icon_146375.ico"  className="me-3" style={{width:'50px', height:'50px'}} />
                    <img src="../src/images/boot_spring_logo_icon_214693.ico" className="me-3" style={{width:'50px', height:'50px'}}/>
                    <img src="../src/images/mysql_plain_wordmark_logo_icon_146415.ico" className="me-3" style={{width:'50px', height:'50px'}} />
                </NavLink>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                
                    <ul className="navbar-nav mt-2">

                    <li className="nav-item ms-3">
                            <NavLink className="nav-link" to="/stock">
                                <p className="h6">Stock list</p>
                            </NavLink>
                        </li>
                        
                        <li className="nav-item ms-3">
                            <NavLink className="nav-link" to="/stock/register">
                                <p className="h6">Register stock</p>
                            </NavLink>
                        </li>
                        
                        <li className="nav-item ms-3">
                            <NavLink className="nav-link" to="/user-system/list">
                                <p className="h6">User system list</p>
                            </NavLink>
                        </li>

                        <li className="nav-item ms-3">
                            <NavLink className="nav-link" to="/user-system/form">
                                <p className="h6">Create user</p>
                            </NavLink>
                        </li>

                    </ul>

                </div>

            </div>


            {
                        
                (usernameLogued === '')  ?
                    <div className="mx-2">
                        <button className="btn btn-outline-primary rounded-pill btn-lg opacity-75">
                            <NavLink className="nav-link" to="/login" style={{width:'108px'}}>
                                <img src="../src/images/login.ico"  className="me-3" style={{width:'35px', height:'35px'}} />
                                Login
                            </NavLink>
                        </button>
                    </div>

                : ''
                        
            }
    




            {

                (usernameLogued != '') ? 

                <div>

                <Dropdown className="mx-2 ">

                    <Dropdown.Toggle variant="outline-primary rounded-pill btn-lg opacity-75" id="dropdown-basic">
                    <img src="../src/images/pngfind.com-skeletor-png-792083.png"  className="me-3" style={{width:'35px', height:'35px'}} />
                        {'Hi ' + usernameLogued + '!'}
                    </Dropdown.Toggle>
          
                    <Dropdown.Menu className="bg-light mr-2 my-3" >
                        
                        <Dropdown.Item className="my-3" href="#/action-1">
                            <img src="../src/images/pngfind.com-skeletor-png-792083.png"  className="me-3" style={{width:'35px', height:'35px'}} />
                            {usernameLogued}
                        </Dropdown.Item>

                        <Dropdown.Divider />
                        
                        <Dropdown.Item className="my-3" href="#/action-2">
                        <img src="../src/images/config.ico"  className="me-3" style={{width:'35px', height:'35px'}} />
                            Manage your acccount 
                        </Dropdown.Item>
                        
                        <Dropdown.Item className="my-3" href="#/action-3">
                            <img src="../src/images/cloud.ico"  className="me-3" style={{width:'35px', height:'35px'}} /> 
                            Something else ... ..   
                        </Dropdown.Item>
                        
                        <Dropdown.Item className="my-3" href="#/action-4">
                            <img src="../src/images/moon.ico"  className="me-3" style={{width:'35px', height:'35px'}} /> 
                            Dark theme
                        </Dropdown.Item>
                        
                        <Dropdown.Item className="my-3" href="#/action-5">
                        <img src="../src/images/help.ico"  className="me-3" style={{width:'35px', height:'35px'}} /> 
                            Help
                            </Dropdown.Item>
                        
                        <Dropdown.Divider />
                        
                        <Dropdown.Item className="my-3" href="#/action-6">
                            <img src="../src/images/logout.ico"  className="me-3" style={{width:'35px', height:'35px'}} />
                            <a  onClick={handlerLogout}>Sign out</a>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                </div>
                
                : ''

            }

        </nav>

            <div className=" w-75 ">
                <div className="bg-info rounded w-25 opacity-50 text-white">
                    My full stack app demo 2025!
                </div>
                
            </div>

        </>


    )
}