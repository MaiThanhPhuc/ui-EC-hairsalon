import {
  LocationSearching,
  Lock,
  PhoneAndroid,
  Publish,
  Security,
} from "@mui/icons-material";
import "./StaffDetail.css";

export default function StaffDetail() {
  return (
    <div className="staff">
      <div className="staffTitleContainer">
        <h1 className="staffTitle">Edit Staff</h1>
      </div>
      <div className="staffContainer">
        <div className="staffShow">
          <div className="staffShowTop">
            <div className="staffShowTopTitle">
              <span className="staffShowUsername">Anna Becker</span>
            </div>
          </div>
          <div className="staffShowBottom">
            <span className="staffShowTitle">Information Details</span>
            <div className="staffShowInfo">
              <Lock className="staffShowIcon" />
              <span className="staffShowInfoTitle">abcdefu</span>
            </div>
            <div className="staffShowInfo">
              <Security className="staffShowIcon" />
              <span className="staffShowInfoTitle">ADMIN</span>
            </div>
            <span className="staffShowTitle">Contact Details</span>
            <div className="staffShowInfo">
              <PhoneAndroid className="staffShowIcon" />
              <span className="staffShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="staffShowInfo">
              <LocationSearching className="staffShowIcon" />
              <span className="staffShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="staffUpdate">
          <span className="staffUpdateTitle">Edit</span>
          <form className="staffUpdateForm">
            <div className="staffUpdateLeft">
              <div className="staffUpdateItem">
                <label>Staff Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="staffUpdateInput"
                />
              </div>
              <div className="staffUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="0123xxxx"
                  className="staffUpdateInput"
                />
              </div>
              <div className="staffUpdateItem">
                <label>Password</label>
                <input
                  type="text"
                  placeholder="asvas**"
                  className="staffUpdateInput"
                />
              </div>
              <div className="staffUpdateItem">
                <label>Role</label>
                <input
                  type="text"
                  placeholder="ADMIN/SUBADMIN"
                  className="staffUpdateInput"
                />
              </div>
              <div className="staffUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="staffUpdateInput"
                />
              </div>
              <button className="staffUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
