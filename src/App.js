import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./navbar/Home";
import Payouts from "./navbar/Payouts";
import AccountStatement from "./navbar/AccountStatement";
import Contacts from "./navbar/Contacts";
import VendorPayments from "./navbar/VendorPayments";
import TaxPayments from "./navbar/TaxPayments";
import PayoutLinks from "./navbar/PayoutLinks";
import Payroll from "./navbar/Payroll";
import Reports from "./navbar/Reports";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <div className="ml-20 text-white">
          <Routes>
            {/* setting payouts page as default */}
            <Route path="/" element={<Payouts />} />

            <Route path="Home" element={<Home />} />
            <Route path="Payouts" element={<Payouts />} />
            <Route path="AccountStatement" element={<AccountStatement />} />
            <Route path="Contacts" element={<Contacts />} />
            <Route path="VendorPayments" element={<VendorPayments />} />
            <Route path="TaxPayments" element={<TaxPayments />} />
            <Route path="PayoutLinks" element={<PayoutLinks />} />
            <Route path="Payroll" element={<Payroll />} />
            <Route path="Reports" element={<Reports />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
