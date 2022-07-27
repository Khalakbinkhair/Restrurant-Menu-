import React from 'react'
import '../Assets/css/style.css'
import Hotmeals_menu from './Hotmeals_menu';
import Hotmeals_details from './Hotmeals_details';

import { Link } from "react-router-dom";


const Hotmeals = () => {


    return (
        <div>




            <div class="container fluid">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <div class="card table-responsive">
                            <div class="card-header"><b>NORTH END COFFEE</b></div>

                            <div class="input-group">
                                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                <button type="button" class="btn btn-outline-secondary">search</button>
                            </div>

                            <div class="card-body" >

                                <div class='row' style={{ "padding": "1rem" }} >

                                    <div class="col-md-12 ">
                                        <Link to="/">
                                            <button type="button" class="btn btn-secondary">Back</button>
                                        </Link>
                                    </div>

                                </div>
                                <hr/>
                                    <b>HOTMEALS</b>
                                    <hr/>

                                <div class='row' >
                                    <div class="col-md-4 " style={{ "padding": "1rem" }}>
                                        <div class="card body ">
                                            <Hotmeals_menu urlname="/Set_menu_1" className="link" name="Set Menu 1" />
                                        </div>
                                    </div>

                                    <div class="col-md-4 " style={{ "padding": "1rem" }}>
                                        <div class="card body ">
                                            <Hotmeals_menu urlname="/Caffe_Mocha" className="link" name="CAFFÈ MOCHA" />
                                        </div>
                                    </div>

                                    <div class="col-md-4 " style={{ "padding": "1rem" }}>
                                        <div class="card body ">
                                            <Hotmeals_menu urlname="/Cafe_au_lait" className="link" name="CAFÈ AU LAIT" />
                                        </div>
                                    </div>

                                    <div class="col-md-4 " style={{ "padding": "1rem" }}>
                                        <div class="card body ">
                                            <Hotmeals_menu urlname="/Cappuccino" className="link" name="CAPPUCCINO" />
                                        </div>
                                    </div>

                                    <div class="col-md-4 " style={{ "padding": "1rem" }}>
                                        <div class="card body ">
                                            <Hotmeals_menu urlname="/Double_espresso_(doppio)" className="link" name="DOUBLE ESPRESSO" />
                                        </div>
                                    </div>

                                    <div class="col-md-4 " style={{ "padding": "1rem" }}>
                                        <div class="card body ">
                                            <Hotmeals_menu urlname="/Espresso" className="link" name="ESPRESSO" />
                                        </div>
                                    </div>

                                    <div class="col-md-4 " style={{ "padding": "1rem" }}>
                                        <div class="card body ">
                                            <Hotmeals_menu urlname="/Espresso_con_panna" className="link" name="ESPRESSO CON PANNA" />
                                        </div>
                                    </div>

                                    <div class="col-md-4 " style={{ "padding": "1rem" }}>
                                        <div class="card body ">
                                            <Hotmeals_menu urlname="/Espresso_macchiato" className="link" name="ESPRESSO MACCHIATO " />
                                        </div>
                                    </div>

                                    <div class="col-md-4 " style={{ "padding": "1rem" }}>
                                        <div class="card body ">
                                            <Hotmeals_menu urlname="/Flat_white" className="link" name="FLAT WHITE " />
                                        </div>
                                    </div>

                                    <div class="col-md-4 " style={{ "padding": "1rem" }}>
                                        <div class="card body ">
                                            <Hotmeals_menu urlname="/Frappe" className="link" name="FRAPPÉ" />
                                        </div>
                                    </div>

                                    <div class="col-md-4 " style={{ "padding": "1rem" }}>
                                        <div class="card body ">
                                            <Hotmeals_menu urlname="/Iced_mocha" className="link" name="ICED MOCHA" />
                                        </div>
                                    </div>

                                    <div class="col-md-4 " style={{ "padding": "1rem" }}>
                                        <div class="card body ">
                                            <Hotmeals_menu urlname="/Latte_macchiato" className="link" name="LATTE MACCHIATO" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        <div >
    </div>
</div>





    )
}
export default Hotmeals;