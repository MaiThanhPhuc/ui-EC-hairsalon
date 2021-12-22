import "./AddAgency.css";

export default function AddAgency() {
  return (
    <div className="newAgency">
      <h1 className="newAgencyTitle">New Agency</h1>
      <form className="newAgencyForm">
        <div className="newAgencyItem">
          <label>Name</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="newAgencyItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newAgencyItem">
          <label>District</label>
          <select className="newAgencySelect" name="district" id="district">
            <option value="vvn">Vo van ngan</option>
            <option value="quan1">quan 1</option>
          </select>
        </div>
        <button className="newAgencyButton">Create</button>
      </form>
    </div>
  );
}
