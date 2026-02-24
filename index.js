// get express module
const express = require("express");
const app = express();

// sample data
this.vendors = {
  status: "success",
  totalRecords: 2,
  lastUpdated: "2026-02-24T10:30:00Z",
  data: {
    suppliers: [
      {
        id: "VEND-001",
        name: "Alpha Electronics",
        status: "Active",
        rating: 4.8,
        isPreferred: true,
        contact: {
          email: "contact@alphaelec.in",
          phone: "+91-80-5555-1234",
        },
        suppliedCategories: ["Microcontrollers", "Sensors", "UI Displays"],
      },
      {
        id: "VEND-002",
        name: "Omega Component Works",
        status: "Inactive",
        rating: 3.2,
        isPreferred: false,
        contact: {
          email: "sales@omegacomp.in",
          phone: "+91-80-5555-5678",
        },
        suppliedCategories: ["Cables", "Connectors"],
      },
    ],
  },
};

// creating a get route
app.get("/", (req, res) => {
  res.json(this.vendors);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


// using url parameters
app.get("/vendors/:id",(req,res)=>{
    const vendorId = req.params.id;
    const isVendorPresent = this.vendors.data.suppliers.find(vendor => vendor.id === vendorId);
    const userText = isVendorPresent ? `Vendor with ID ${vendorId} is present` : `Vendor with ID ${vendorId} is not present`;
    res.send(userText);
})