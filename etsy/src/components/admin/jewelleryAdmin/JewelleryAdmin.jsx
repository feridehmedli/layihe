import React, { useEffect, useState } from "react";
import "./JewelleryAdmin.scss";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const JewelleryAdmin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingItemId, setEditingItemId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    price: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/jewellery");
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
      await axios.delete(`http://localhost:8080/jewellery/${itemId}`);
      setData((prevData) => prevData.filter((item) => item._id !== itemId));
      toast.success("Item deleted successfully!");
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Error deleting item");
    }
  };

  const handleEdit = (itemId) => {
    const selectedItem = data.find((item) => item._id === itemId);
    setEditingItemId(itemId);
    setEditFormData({
      name: selectedItem.name,
      price: selectedItem.price,
    });
  };

  const handleSaveEdit = async (itemId) => {
    try {
      await axios.put(`http://localhost:8080/jewellery/${itemId}`, editFormData);
      const response = await axios.get("http://localhost:8080/jewellery");
      setData(response.data);
      setEditingItemId(null);
      toast.success("Item updated successfully!");
    } catch (error) {
      console.error("Error updating item:", error);
      toast.error("Error updating item");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
            {data.map((item) => (
              <div className="dashboard__in" key={item._id}>
                <div className="table__title">
                  <span>{item.name.slice(0, 40)}</span>
                </div>
                <div className="table__price">
                  <span style={{ fontWeight: "bold" }}>USD {item.price}</span>
                </div>
                <div className="table__buttons">
                  <button className="edit" onClick={() => handleEdit(item._id)}>Edit</button>
                  <button className="delete" onClick={() => handleDelete(item._id)}>Delete</button>
                </div>
                {editingItemId === item._id && (
                  <div className="edit-form">
                    <label>
                      Name:
                      <input
                        type="text"
                        name="name"
                        value={editFormData.name}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Price:
                      <input
                        type="number"
                        name="price"
                        value={editFormData.price}
                        onChange={handleInputChange}
                      />
                    </label>
                    <button className="save__button" onClick={() => handleSaveEdit(item._id)}>Save</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default JewelleryAdmin;
