import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Seo from '../../../shared/layout-components/seo/seo'

//Images
import logolight from "../../../public/assets/img/brand/logo-light.png"

const UnderConstruction = () => {
  const router = useRouter();

  // Auto redirect to dashboard after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

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
      <Seo title="Loading - Elections Gabon" />

      {/* <!-- Row --> */}
      <div className="error-bg">
        <div className="main-container container-fluid">
          <div className="inner-body">
            <div className="row sidemenu-height">
              <div className="col-md-12">
                <div className="construction1 text-center details">
                  <div className="">
                    <br /><br /><br /><br /><br />
                    <div className="col-lg-12 ">
                      <h1> <img src='/assets/img/SkyElectjpg.jpg' alt='logo' style={{maxWidth: '200px'}}/> </h1>
                      <h3 className="mt-4 mb-2">Elections Gabon</h3>
                      <h6 className="tx-15 mt-3 mb-4 text-muted">
                        Chargement en cours...
                      </h6>
                      <div className="text-center">
                        <div className="lds-circle">
                          <div></div>
                        </div>
                      </div>
                      <p className="mt-4">
                        <button 
                          className="btn btn-primary"
                          onClick={() => router.push('/dashboard')}
                        >
                          Aller au tableau de bord
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Row --> */}
    </div>
  )
}
UnderConstruction.layout = "Authenticationlayout"

export default UnderConstruction