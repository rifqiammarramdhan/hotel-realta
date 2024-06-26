//import "./App.css";
//import "./test.css";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import { Routes, BrowserRouter as Router,Route } from "react-router-dom";
import Main from "./components/master/Main";
import Loc from "./components/master/Loc";
import Pol from "./components/master/Pol";
import Cat from "./components/master/Cat";
import Pri from "./components/master/Pri";
import Ser from "./components/master/Ser";
import DeptNew from "./components/HR/dept_new";
import LayoutNew from "./components/HR/layout_new";
import AddDeptNew from "./components/HR/add_dept_new";
import EditDeptNew from "./components/HR/edit_dept_new";
import EmployeeNew from "./components/HR/employee_new";
import AddEmployeeNew from "./components/HR/add_employee_new";
import EditEmployeeNew from "./components/HR/edit_employee_new";
import WorkOrderNew from "./components/HR/work_order_new";
import AddWoroNew from "./components/HR/add_woro_new";
import EditWoroNew from "./components/HR/edit_woro_new";
import WorkOrderDetailNew from "./components/HR/work_order_detail_new";
import AddWodeNew from "./components/HR/add_wode_new";
import EditWodeNew from "./components/HR/edit_wode_new";
import { Vendor, Stock, Gallery, Order } from "./Pages";

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="/master">
          <Route path="locations" element={<Loc />} />
          <Route path="policy" element={<Pol />} />
          <Route path="category" element={<Cat />} />
          <Route path="priceitems" element={<Pri />} />
          <Route path="servicetasks" element={<Ser />} />
        </Route>
        <Route path="/HR" element={<LayoutNew></LayoutNew>}>
  <Route path='dept' element={<DeptNew></DeptNew>}></Route>
  <Route path='dept/add_dept' element={<AddDeptNew></AddDeptNew>}></Route>
  <Route path='dept/edit_dept/:id/:name' element={<EditDeptNew></EditDeptNew>}></Route>
  <Route path='employee' element={<EmployeeNew></EmployeeNew>}></Route>
  <Route path='employee/add_employee' element={<AddEmployeeNew></AddEmployeeNew>}></Route>
  <Route path='employee/edit/edit_employee/:national_id/:id/:fullname/:birth_date/:hire_date/:image' element={<EditEmployeeNew></EditEmployeeNew>}></Route>
  <Route path='work_order' element={<WorkOrderNew></WorkOrderNew>}></Route>
  <Route path='work_order/add_woro' element={<AddWoroNew></AddWoroNew>}></Route>
  <Route path='work_order/edit/edit_woro/:id/:date' element={<EditWoroNew></EditWoroNew>}></Route>
  <Route path='work_order/get/work_order_detail/' element={<WorkOrderDetailNew></WorkOrderDetailNew>}></Route>
  <Route path='work_order/get/work_order_detail/add_wode' element={<AddWodeNew></AddWodeNew>}></Route>
  <Route path='work_order/get/work_order_detail/edit/edit_wode/:id/:task_name/:start/:end/:note' element={<EditWodeNew></EditWodeNew>}></Route> 
</Route>
   {/* Purchasing */}
        <Route path="/purchasing/vendor" element={<Vendor Content="vendor" />} />
        <Route path="/purchasing/vendor/edit/:id" element={<Vendor Content="editVendor" />} />
        <Route path="/purchasing/vendor/:vendorId/addproduk" element={<Vendor Content="addProduk" />} />
        <Route path="/purchasing/stock" element={<Stock Content="stock" />} />
        <Route path="/purchasing/stock/:id" element={<Stock Content="stockDetail" />} />
        <Route path="/purchasing/gallery" element={<Gallery />} />
        <Route path="/purchasing/listorder" element={<Order Content="OrderHeader" />} />
        <Route path="/purchasing/listorder/:ponumber" element={<Order Content="OrderDetail" />} />
        <Route path="purchasing/listorder/edit/:id" element={<Order Content="OrderDetailEdit" />} />
      </Routes>
    </div>
  );
}

export default App;
