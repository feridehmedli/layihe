import React, { useContext, useEffect, useState } from "react";
import "./AccesoriesAdmin";
import { MainContext } from "../../../context/Context";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const AccesoriesAdmin = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/accesories");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8080/accesories/${itemId}`);
      setData((prevData) => prevData.filter((item) => item._id !== itemId));
      toast.success("Item deleted successfully!");
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Error deleting item");
    }
  };

  return (
    <div>
      {loading ? (
        <div>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">
              <div className="text-center">Loading...</div>
            </span>
          </Spinner>
        </div>
      ) : (
        <div className="dashboard__table">
          <div className="dashboard__table__items">
            {data.map((item, index) => (
              <div className="dashboard__in" key={index}>
                <div className="table__title">
                  <span>{item.name.slice(0, 40)}</span>
                </div>
                <div className="table__price">
                  <span style={{ fontWeight: "bold" }}>USD {item.price}</span>
                </div>
                <div className="table__delete">
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default AccesoriesAdmin;
