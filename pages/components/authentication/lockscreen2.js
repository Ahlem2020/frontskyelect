import React, { Fragment } from 'react'
import Seo from '../../../shared/layout-components/seo/seo'

import { Card, Col, Row } from "react-bootstrap";


//Images
import logolight from "../../../public/assets/img/brand/logo-light.png"
import user from "../../../public/assets/img/svgs/user.svg"
import logo from "../../../public/assets/img/brand/logo.png"
import users1 from "../../../public/assets/img/users/1.jpg"
import Link from 'next/link';



const Lockscreen = () => {
    function Swicherbutton() {
        document.querySelector(".demo_changer").classList.toggle("active");
        document.querySelector(".demo_changer").style.right = "0px";
    }

    function remove() {
        document.querySelector(".demo_changer").style.right = "-270px";
        document.querySelector(".demo_changer").classList.remove("active");
    }
    return (
        <div>
            <Seo title="Déverrouiller" />

            {/* <!-- Row --> */}
            <Fragment>
                <div className="page main-signin-wrapper">

                    <Row className="signpages text-center"
                        onClick={() => remove()}
                    >
                        <Col md={12}>
                            <Card>
                                <Row className="row-sm">
                                    <Col lg={6} xl={5} className=" d-none d-lg-block details " style={{ backgroundColor: 'rgb(64, 120, 198) ' }}>
                                        <div className="mt-4 pt-4 ps-5 ms-3 pe-5 pos-absolute">
                                            <br /><br />
                                            <div className="clearfix"></div>
                                            <img
                                                src={user.src}
                                                className="ht-100 mb-0"
                                                alt="user"
                                            />
                                            <h5 className="mt-4 text-white">Déverrouiller</h5>
                                            <span className="tx-white-6 tx-13 mb-5 mt-xl-0">
                                                Entrez votre mot de passe pour accéder à l&apos;administrateur.                      </span>
                                        </div>
                                    </Col>
                                    <Col lg={6} xl={7} xs={12} sm={12} className=" login_form ">
                                        <div className="main-container container-fluid">
                                            <div className="row row-sm">
                                                <div className="card-body main-profile-overview mt-3 mb-3">
                                                    <img
                                                        src={logo.src}
                                                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                                                        alt="logo"
                                                    />
                                                    <img
                                                        src={logolight.src}
                                                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
                                                        alt="logo"
                                                    />
                                                    <div className="clearfix"></div>
                                                    <h5 className="text-start mb-2">Écran verrouillé</h5>
                                                    <p className="mb-4 text-muted tx-13 ms-0 text-start">
                                                        Déverrouillez votre écran en entrant votre mot de passe                          </p>
                                                    <form>
                                                        <div className="text-start d-flex float-start mb-4 user-lock">
                                                            <img
                                                                alt="avatar avatar-sm"
                                                                src={users1.src}
                                                            />
                                                            <div className="my-auto">
                                                                <p className="font-weight-semibold my-auto ms-2 text-uppercase ">
                                                                    Administrateur
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                className="form-control"
                                                                placeholder="Enter your password"
                                                                type="password"
                                                            />
                                                        </div>
                                                        <div className="text-start">
                                                            <label className="form-switch ps-0">
                                                                <input
                                                                    type="checkbox"
                                                                    name="form-switch-checkbox"
                                                                    className="form-switch-input me-2"
                                                                />
                                                                <span className="form-switch-indicator"></span>
                                                                <span className="form-switch-description">
                                                                    afficher le mot de passe                                </span>
                                                            </label>
                                                        </div>

                                                        <Link href="/components/crypto-currencies/wallet" className="btn ripple btn-main-primary btn-block mt-4">
                                                            Déverrouiller
                                                        </Link>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </div>

            </Fragment>
            {/* <!-- End Row --> */}
        </div>
    )
}
Lockscreen.layout = "Authenticationlayout"

export default Lockscreen