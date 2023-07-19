import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



export default Loginpage;




function Loginpage(){
    return(
        <div>


            <div  class="headdiv"> 

            <h1 className="customh1login ">Seva</h1>
            <p className="para2login"><i><b>“Karmanye vadhikaraste Ma Phaleshu Kadachana,Ma<br></br> Karma Phala Hetur Bhur Ma Te Sango Stv Akarmani”</b></i></p>
            <img class="image1st" height="293" width="580" src="https://1.bp.blogspot.com/-N6egk09kZok/WOjE03AYtSI/AAAAAAAAAHM/ls-0F2DzkhMXM5I64sssc2gxLXLT_YEBgCLcB/s1600/Poverty%2B-%2BEmaan%2BN.%2B%2B%2B%2B%2BZoha%2BR..jpg"></img>
            <img src="https://th.bing.com/th/id/R.ff0c8f16fd2c555ce034eec3e72a42dd?rik=a3oqCTp7V116cQ&riu=http%3a%2f%2fd2oadd98wnjs7n.cloudfront.net%2ffile_attachments%2f116008%2ffiles%2f20131006091412-Slum_Children_Collage_for_INDIEGOGO_main.jpeg%3f1381076052&ehk=2qGV7kBI97NGoANSDNbMFTTZZgWZg%2bVB6VIaCv3TW2g%3d&risl=&pid=ImgRaw&r=0" height="300" width="580"></img>
            <img src="https://1.bp.blogspot.com/-N6egk09kZok/WOjE03AYtSI/AAAAAAAAAHM/ls-0F2DzkhMXM5I64sssc2gxLXLT_YEBgCLcB/s1600/Poverty%2B-%2BEmaan%2BN.%2B%2B%2B%2B%2BZoha%2BR..jpg" height="290" width="580"></img>
            <div class="overlay"></div>
            
            </div>





      <div class="logindiv" id="glassmorphic">
        
        <form action="">
        <h1 class="donate-now">Donate Now</h1>
       
        <div class="form-group">
      <label for="Name"><b>Name</b></label>
      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name"/>
    </div>
    <br/>
    <div class="form-group">
      <label for="exampleInputEmail1"><b>Email address</b></label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
         
   
    <Link to="/homepage">
    <button  type="submit" class="pink"><b>Donate</b></button>
    </Link>
  </form>
        </div>

   
        <div class="logindiv" id="glassmorphic">
        <form action="">
        <h1 class="donate-now">Volunteer Now</h1>
      
        <div class="form-group">
      <label for="Name"><b>Name</b></label>
      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name"/>
    </div>
    <br/>
    <div class="form-group">
      <label for="exampleInputEmail1"><b>Email address</b></label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>   
   
    <Link to="/homepage">
    <button  type="submit" class="pink"><b>Join Us</b></button>
    </Link>
  </form>
        </div>


        <div class="div3" id="glassmorphic">
       
    <p><b><i>"If you can't feed hundred people then feed just one" -Mother Teresa</i></b></p>

    <Link to="/homepage">
    <button  type="submit" class="pinky"><b>About Us</b></button>
    </Link>
 
        </div>
        </div>
    )
  }
   