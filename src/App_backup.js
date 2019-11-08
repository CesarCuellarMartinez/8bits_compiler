import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Tone from 'tone';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
var squareOptions = {
  oscillator:{
    type: "square"
  },
  envelope:{
    release: 0.07
  }
};

let synth = new Tone.Synth().toMaster();
let notes = ["C3", "Eb3", "G3", "Bb3"];
class App extends Component{
  
  reproducir = () =>{
    let synthPart = new Tone.Sequence(
      function(time, note) {
        synth.triggerAttackRelease(note, "8n", time);
      },
      notes,
      "4n"
    );
    synthPart.start();
    Tone.Transport.start();
    
  }
  render(){
    return (
      <div className="App">
        <div id="wrapper">
    

    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon" style={{display: 'none'}}>8BC</div>
        <div className="sidebar-brand-text mx-3">8 bit compiler</div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          <i className="fas fa-home" title="Inicio"></i>
          <span>Inicio</span></a>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">
        Música
      </div>


      <li className="nav-item">
        <a className="nav-link" href="nuevo.html">
          <i className="fas fa-music" title="Nuevo"></i>
          <span>Nuevo</span>
        </a>
        
      </li>
      <li className="nav-item">
          <a className="nav-link" title="Cargar" href="#" >
              <i className="fas fa-arrow-up"></i>
            <span>Cargar</span>
          </a>
          
        </li>

      <hr className="sidebar-divider" />


      <div className="sidebar-heading">
        Más
      </div>

      <li className="nav-item">
          <a className="nav-link" href="#" title="Documentación">
              <i className="fas fa-book"></i>
            <span>Documentación</span>
          </a>
          
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#" title="Ejemplos">
                <i className="fas fa-archive"></i>
              <span>Ejemplos</span>
            </a>
            
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#" title="Biblioteca">
                  <i className="fas fa-folder"></i>
                <span>Biblioteca</span>
              </a>
              
            </li>

      <hr className="sidebar-divider d-none d-md-block"/>


      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
    </div>

    <div id="content-wrapper" className="d-flex flex-column">

      <div id="content">

        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
          </button>


          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100">
            <h1 className="h3 mb-0 text-gray-800"> Música de 8 Bits</h1>
          </form>


          <ul className="navbar-nav ml-auto">



            <div className="topbar-divider d-none d-sm-block"></div>

            <li className="nav-item dropdown no-arrow">
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" style={{float: 'right'}}><i className="fas fa-music fa-sm text-white-50"></i> Nueva composición</a>
          
            </li>

          </ul>

        </nav>

        <div className="container-fluid">


          <div className="d-sm-flex align-items-center justify-content-between mb-4">
           
            </div>

          <div className="row">


            <div className="col-lg-6 mb-4">
              

              <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Sobre 8 Bit Compiler</h6>
                  </div>
                  <div className="card-body">
                      <div className="text-center">
                          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '15em'}} src="img/logo.png" alt="" />
                        </div>
                    <p>Cras enim arcu, ornare sit amet sodales vel, pellentesque non justo. Aenean ultrices quam eu lectus sodales tempus. Sed porta scelerisque turpis vitae accumsan. </p>
                    </div>
                </div>
              

            </div>

            <div className="col-lg-6 mb-4">


             
              <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Documentación</h6>
                  </div>
                  <div className="card-body">
                   
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum convallis lectus, et rhoncus ipsum dictum ut. Nullam congue facilisis aliquet. </p> 
                    <p className="mb-0">Aliquam maximus dapibus augue at semper. Cras quis nisl nibh. Integer vel nunc nisi. Maecenas vitae magna ante. Maecenas malesuada ex sed tellus viverra, nec commodo lacus scelerisque.</p>
                 <br/>
                      <a target="_blank" rel="nofollow" href="#" style={{textDecoration: 'none'}}>Ir a la documentación &rarr;</a>
                  </div>
                </div>

            </div>
          </div>

        </div>


      </div>

      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Compi 2019</span>
          </div>
        </div>
      </footer>


    </div>
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up"></i>
  </a>


  <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button className="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div className="modal-footer">
          <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a className="btn btn-primary" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>
      </div>
    );
  }
}
export default App;
