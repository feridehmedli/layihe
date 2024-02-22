import { Link } from "react-router-dom";
import "./AdminHeader.scss";

const AdminHeader = () => {
  return (
    <div>
      <div className="navbars">
        <div className="navbars__items">
          <div className="navbars__logo">
            <Link to="/">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Etsy_logo_lg_rgb.png" alt="" />
            </Link>
          </div>
          
         
          <div className="right__sects">
           <Link to='/addProduct' style={{"textDecoration" : "none","color" : "black"}}><span>Add Product</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
