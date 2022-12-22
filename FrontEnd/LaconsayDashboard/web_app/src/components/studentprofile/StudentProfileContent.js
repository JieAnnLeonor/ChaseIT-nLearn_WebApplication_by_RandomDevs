import React, { Component } from 'react';
import StudentProfileStyle from "./StudentProfileStyle.css";

class StudentProfileContent extends Component{

    constructor(props) {
        super(props);
        this.myFunction = this.myFunction.bind(this);
    }

    render(){
        return(
            <>
            <div class="sidenav">
        <div class="profile">
            <span class = "fa-solid fa-user-circle fa-7x"></span>

            <div class="name">
                Ken Hoffman
            </div>
            <div class="job">
                Student
            </div>
        </div>

        <div class="sidenav-url">
            <div class="url">
                <a href="#profile" class="active">Profile</a>
                <hr align="center"></hr>
            </div>
            <div class="url">
                <a href="#settings">Settings</a>
                <hr align="center"></hr>
            </div>
        </div>
    </div>
            <div class="main">
        <h2>PROFILE</h2>
        <div class="card">
            <div class="card-body">
                <i class="fa fa-pen fa-xs edit"></i>
                <table>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>:</td>
                            <td>Ken</td>
                        </tr>
                        <tr>
                            <td>Middle Name</td>
                            <td>:</td>
                            <td>Roberts</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>:</td>
                            <td>Hoffman</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>kenhoff@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Year Level</td>
                            <td>:</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>:</td>
                            <td>09123456789</td>
                        </tr>
                        <tr>
                            <td colSpan={3}><button class = "button buttonUpdate" onClick={this.myFunction}>Update</button></td>     
                            <div id="snackbar">Nothing Changed</div>                       
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <h2>SOCIAL MEDIA</h2>
        <div class="card">
            <div class="card-body">
                <i class="fa fa-pen fa-xs edit"></i>
                <div class="social-media">
                    <span class="fa-stack fa-sm">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-facebook fa-stack-1x fa-inverse"></i>
                    </span>
                    <span class="fa-stack fa-sm">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>                    
                    <span class="fa-stack fa-sm">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-invision fa-stack-1x fa-inverse"></i>
                    </span>
                    <span class="fa-stack fa-sm">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                    <span class="fa-stack fa-sm">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
                    </span>                    
                </div>
            </div>
        </div>
    </div>    
            </>
        )
    }

     myFunction() {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }
}
export default StudentProfileContent;