import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function AddMovie({handleAdd}) {
  const [show, setShow] = useState(false);
const navigate = useNavigate(); 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [form, setform] = useState(
    {
    title: '',
    description: '',
    rating: 0,
    posterURL: '',trailer:""
    });
    const handleChange = (e) =>{
        setform ({ ...form, [e.target.name] : e.target.value})
    };
    const handleSubmit = (e) => { 
        e.preventDefault();
        handleAdd(form)
    setform({
    title: '',
    description: '',
    rating: 0,
    posterURL: '',
    trailer:''

    })
    handleClose();
    navigate("/")
    };
   
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" 
                    value={form.title}
                    name="title" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">PosterUrl</label>
                    <input type="url"
                    value={form.posterURL}
                    name="posterURL" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Rating</label>
                    <input type="number"
                    value={form.rating}
                    name="rating" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <input type="text"
                    value={form.description}
                    name="description" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="">Trailer</label>
                    <input type="text"
                    value={form.trailer}
                    name="trailer" onChange={handleChange}/>
                </div>
                <button>Save Changes</button>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddMovie;