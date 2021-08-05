import React from 'react';

import './home.css';
import { Link } from "react-router-dom";


function Home(){
    
    return <div>

        <div class="bg-image d-flex justify-content-center align-items-center sfondo text-center">
 
        <div>

            <p class="open fst-italic"> Gym Up </p>

            <div class="row g-3">
                <div class="col ">

                <Link to="/signin" class="sposto" >
                <button type="button" class="btn btn-light">
                    Sign in
                </button>
                </Link>



                <Link to="/login" >
                <button type="button" class="btn btn-light">
                    Log in
                </button>
                </Link>
                
                </div>


                
            </div>
            
            <div class="mt-5 ">

                <Link to="/out" >
                    <button type="button" class="btn btn-dark">
                        Log our or delete account
                    </button>
                </Link>

            </div>


        </div>


        </div>

    </div>
}

export default Home;