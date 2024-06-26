import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { addItem, addPost } from '../../actions/HR/user';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const AddEmployeeNew = () => {
    const [imageShow, setImageShow] = useState(require("./test.png"));
    const [isSelec, setSelect] = useState(false);
    const [image, setImage] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {addPostItemError, addPostItemResult} = useSelector((state) => state.list);
    const [item, setItem] = useState({
        national_id:'',
        name:'',
        birth_date:'',
        hire_date:'',
        martial_status:'',
        gender:'',
        salaried_flag:'',
        current_flag:'',
        job_role:'',
        frequency:'',
        department:'',
        start_date:'',
        end_date:'',
        shift:'',
        salary_rate:0,
        vacation_hour:0,
        sick_leave:0,
        change_date:''
    });
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
      };
    
    const [vac, setvac] = useState(0);
    const [test, set] = useState([]);
    const [sick, setsick] = useState(0);
    const [salary_rate, setsalary] = useState(0);
    const [dept, setdept] = useState([]);
    const [isAdd, setAdd] = useState(false);
    const [shift, setShift] = useState([]);
    const get_data = async () => {
        const result = await axios({
            method: "GET",
            url: "http://localhost:3000/job_role"
             });
        set(result.data.data);
    }
    //console.log(file)
    const get_dept = async () => {
        const result = await axios({
            method: "GET",
            url: "http://localhost:3000/department"
             });
        setdept(result.data.data);
        //console.log(result);
    }
    const get_shift = async () => {
        const result = await axios({
            method: "GET",
            url: "http://localhost:3000/shift"
             });
        setShift(result.data.data);
        //console.log(result);
    }

    const add = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('national_id', item.national_id);
        formData.append('fullname', item.name);
        formData.append('birth_date', (item.birth_date + ' '+'00:00:00'));
        formData.append('hire_date', item.hire_date+ ' '+'00:00:00');
        formData.append('martial_status', item.martial_status);
        formData.append('gender', item.gender);
        formData.append('salaries_flag', item.salaried_flag);
        formData.append('current_flag', item.current_flag);
        formData.append('vacation_hour', item.vacation_hour);
        formData.append('sickleave', item.sick_leave);
        formData.append('job_role', item.job_role);
        formData.append('salary_rate', item.salary_rate);
        formData.append('frequency', item.frequency);
        formData.append('department', item.department);
        formData.append('start_date', item.start_date);
        formData.append('end_date', item.end_date);
        formData.append('shift', item.shift);
        formData.append('change_date', item.change_date);
        try {
            dispatch(addPost(formData));
            setAdd(true);    
        } catch (error) {
            console.log('asasasa');
        }
        
    }
    //console.log(item);
    const change = (e) => {
        setItem({...item, [e.target.name] : e.target.value});
    }
    const add_vac = () => {
        //console.log('aaaaa');
    }
    const handleImageChange = (event, setImageShowNumber) => {
      const selectedImage = event.target.files[0];
      if (selectedImage) {
        setSelect(true);
        setImageShowNumber(URL.createObjectURL(selectedImage));
        setFile(event.target.files[0]);
      }
    };
    const fileInputRef = useRef(null);
    const handleClearFile = () => {
      // Mengosongkan state file
      if (fileInputRef.current) {
        setImageShow(require("./test.png"));
        setSelect(false);
        setFile(null);
        fileInputRef.current.value = '';

      }
    };
  
    useEffect(() => {
        get_data();
        get_dept();
        get_shift();
        if (isAdd) {
          if (addPostItemResult) {
            if (addPostItemResult.message) {
              Swal.fire(
                "Kesalahan Pada Input Data",
                'Nama Pegawai Atau National ID Sudah Ada',
                "warning"
              );
              setAdd(false); 
            }
            else if (addPostItemResult.status === 400) {
              Swal.fire(
                "Kesalahan Pada Input Data",
                addPostItemResult.pesan,
                "warning"
              );
              setAdd(false);
            }
            else{
              Swal.fire(
                `Berhasil Menambah data`,
                'Menambah Data Department Berhasil',
                "success"
              );
              setAdd(false);
              navigate('/HR/employee');
            }
          }
            if (addPostItemError) {
                
                Swal.fire(
                    "File Yang Diupload Salah!",
                    'Ekstensi FIle salah Atau Ukuran File Melebihi 1 MB',
                    "warning"
                  );
                  setAdd(false);    
            }
            
        }
    }, [dispatch, addPostItemError, addPostItemResult]);
    console.log(item);
    return (
        <div>
            <form encType="multipart/form-data" onSubmit={(e) => add(e)}>
            <h1 class="h3 mb-2 text-gray-800">Add Employee</h1>
            <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">General Information</h6>
            </div>
            <div class="card-body">
              <div className='d-flex justify-content-center'>
            <Row >
            <Col >
          <Form.Group controlId="col3">
            <Form.Label>Upload Photo</Form.Label>
            <br></br>
            <img src={imageShow} style={{width:'500px', height:'250px'}} className="img-thumbnail img-fluid" alt="..." />
            <br></br>
            {isSelec ? (
              <div>
              <br></br>
              <button type="button" className='btn btn-danger' style={{marginLeft:'227px'}} onClick={(e) => handleClearFile()}>Remove</button>
              <br></br>
              <br></br>
              </div>
            ) : <br></br> }
            
            
            <Form.Control className='justify-content-end' ref={fileInputRef} type='file' onChange={(e) => handleImageChange(e, setImageShow)} rows={10} placeholder="Isi kolom 3" />
          </Form.Group>
        </Col>
            </Row>
            </div>
            <br></br>
            <Row>
        <Col>
          <Form.Group controlId="col1">
            <Form.Label>National Id</Form.Label>
            <Form.Control required name='national_id' onChange={(e) => change(e)}  rows={2} placeholder="National ID" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="col2">
            <Form.Label>Fullname</Form.Label>
            <Form.Control required name='name' onChange={(e) => change(e)}  rows={2} placeholder="Fullname" />
          </Form.Group>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Form.Group controlId="col1">
            <Form.Label>Birth Date</Form.Label>
            <Form.Control required name='birth_date' type='date' onChange={(e) => change(e)}  rows={2} placeholder="Isi kolom 1" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="col2">
            <Form.Label>Hire Date</Form.Label>
            <Form.Control required name='hire_date' type='date' onChange={(e) => change(e)}  rows={2} placeholder="Isi kolom 2" />
          </Form.Group>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Form.Group controlId="col1">
            <Form.Label>Martial Status</Form.Label>
            <select required name='martial_status' onChange={(e) => change(e)} class="form-select" aria-label="Default select example" >
                <option selected>Open this select menu</option>
                <option value="M">Maried</option>
                <option value="S">Single</option>
            </select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="col2">
            <Form.Label>Gender</Form.Label>
            <select required name='gender' onChange={(e) => change(e)} class="form-select" aria-label="Default select example" >
                <option selected>Open this select menu</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>
          </Form.Group>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Form.Group controlId="col1">
            <Form.Label>Salaried Flag</Form.Label>
            <select required name='salaried_flag' onChange={(e) => change(e)} class="form-select" aria-label="Default select example" >
                <option selected>Open this select menu</option>
                <option value="0">Hourly</option>
                <option value="1">Monthly</option>
            </select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="col2">
            <Form.Label>Current Flag</Form.Label>
            <select required name='current_flag' onChange={(e) => change(e)} class="form-select" aria-label="Default select example" >
                <option selected>Open this select menu</option>
                <option value={1}>Active</option>
                <option value={0}>Inactive</option>
            </select>
          </Form.Group>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Form.Group controlId="col1">
            <Form.Label>Vacation Hours</Form.Label>
            <Form.Control  name='vacation_hour' required type='number' onChange={(e) => change(e)}  rows={2} placeholder="Vacation Hour" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="col2">
            <Form.Label>Sick Leave Hours</Form.Label>
            <Form.Control name='sick_leave' required type='number' onChange={(e) => change(e)}  rows={2} placeholder="Sick Leave Hour" />
          </Form.Group>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Form.Group controlId="col1">
            <Form.Label>Job Role</Form.Label>
            <select required name='job_role' class="form-select" aria-label="Default select example" onChange={(e) => change(e)}>
                <option selected>Open this select menu</option>
                {test.map((item) => (<option value={item.job_id}>{item.joro_name}</option>))}
            </select>
          </Form.Group>
        </Col>
      </Row>
      
            </div>
            <br></br>
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Salary</h6>
            </div>
            <div class="card-body">
            
            <Row>
        <Col>
          <Form.Group controlId="col1">
            <Form.Label>Salary Rate</Form.Label>
            <Form.Control  type='number' required name='salary_rate' onChange={(e) => change(e)}  rows={2} placeholder="Salary Rate" />
          </Form.Group>
        </Col>
        <Col>
            <Form.Label>Salary Rate Change Date</Form.Label>
            <Form.Control required name='change_date' type='date' onChange={(e) => change(e)}  rows={2} placeholder="Isi kolom 1" />
        </Col>
        <Col>
          <Form.Group controlId="col2">
            <Form.Label>Frequency</Form.Label>
            <select required name='frequency' onChange={(e) => change(e)} class="form-select" aria-label="Default select example" >
                <option selected>Open this select menu</option>
                <option value="0">Hourly</option>
                <option value="1">Monthly</option>
            </select>
          </Form.Group>
        </Col>
      </Row>
      
            </div>
            <br></br>

            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Assignment</h6>
            </div>
            <div class="card-body">
            
            <Row>
        <Col>
          <Form.Group controlId="col1">
            <Form.Label>Department</Form.Label>
            <select required name='department' onChange={(e) => change(e)} class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
        {dept.map((item) => (<option value={item.dept_id}>{item.dept_name}</option>))}
    </select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="col1">
            <Form.Label>Start Date</Form.Label>
            <Form.Control required name='start_date' type='date' onChange={(e) => change(e)}  rows={2} placeholder="Isi kolom 1" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="col1">
            <Form.Label>End Date</Form.Label>
            <Form.Control required name='end_date' type='date' onChange={(e) => change(e)}  rows={2} placeholder="Isi kolom 1" />
          </Form.Group>
        </Col>
      </Row>

      
      
            </div>
            <br></br>

            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Shift</h6>
            </div>
            <div class="card-body">
            
            <Row>
        <Col>
          <Form.Group controlId="col1">
            <Form.Label>Shfit</Form.Label>
            <select required name='shift' onChange={(e) => change(e)} class="form-select" aria-label="Default select example" >
            <option selected>Open this select menu</option>
        {shift.map((item) => (<option value={item.shift_id}>{item.shift_name} (From {item.shift_start_time} To {item.shift_end_time})</option>))}
    </select>
          </Form.Group>
        </Col>
      </Row>
            </div>
            <hr style={{backgroundColor:'black'}}></hr>
      
            <div class="card-body">
            
            <Row>
        <Col>
          <Form.Group controlId="col1">
          <Form.Control type='submit' style={{backgroundColor:'blue', color:'white'}}  rows={2} placeholder="Isi kolom 1" />
          </Form.Group>
        </Col>
      </Row>
            </div>
            
          </div>
          </form>
        </div>
    );
}

export default AddEmployeeNew;
