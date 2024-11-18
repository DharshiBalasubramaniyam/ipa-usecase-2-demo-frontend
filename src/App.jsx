import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    home_address: '',
    mailing_address: '',
    employment_History: [],
    invoice: null
  });

  const [invoice, setInvoice] = useState({
    subtotal: "",
    discount: "",
    tax_rate: "",
    balance_due: "",
    products: [],
  })

  const [employmentHistory, setEmplymentHistory] = useState({
    start_date: '',
    end_date: '',
    employer_name: '',
    position: '',
    reason_for_leaving: '',
  })

  const [product, setProduct] = useState({
    description: '',
    qty: "",
    total: "",
  })

  const [output, setOutput] = useState(null)

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {
        output ? (
          <div className='max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-4'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Submitted data:</h2>
            <pre>{JSON.stringify(output, null, 2)}</pre>
            <button
              type="button"
              className="text-blue-500 hover:underline mt-3"
              id='new-response'
              onClick={() => {
                setOutput(null)
              }}
            >
              Fill the form again
            </button>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">RPA use case 2</h1>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  id='full-name'
                  value={formData.full_name}
                  onChange={(e) => {
                    setFormData({ ...formData, full_name: e.target.value })
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  id='phone'
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value })
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Home Address</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  id='home-address'
                  value={formData.home_address}
                  onChange={(e) => {
                    setFormData({ ...formData, home_address: e.target.value })
                  }}
                />
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Employment History</h2>

              <div className="border rounded-md p-4 mb-4 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Start Date"
                    className="block w-full border border-gray-300 rounded-md p-2"
                    id='start-date'
                    value={employmentHistory.start_date}
                    onChange={(e) => {
                      setEmplymentHistory({ ...employmentHistory, start_date: e.target.value })
                    }}
                  />
                  <input
                    type="text"
                    placeholder="End Date"
                    id='end-date'
                    className="block w-full border border-gray-300 rounded-md p-2"
                    value={employmentHistory.end_date}
                    onChange={(e) => {
                      setEmplymentHistory({ ...employmentHistory, end_date: e.target.value })
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Employer Name"
                    id='employer-name'
                    className="block w-full border border-gray-300 rounded-md p-2"
                    value={employmentHistory.employer_name}
                    onChange={(e) => {
                      setEmplymentHistory({ ...employmentHistory, employer_name: e.target.value })
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Position"
                    id='position'
                    className="block w-full border border-gray-300 rounded-md p-2"
                    value={employmentHistory.position}
                    onChange={(e) => {
                      setEmplymentHistory({ ...employmentHistory, position: e.target.value })
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Reason for Leaving"
                    className="block w-full border border-gray-300 rounded-md p-2"
                    id='reason'
                    value={employmentHistory.reason_for_leaving}
                    onChange={(e) => {
                      setEmplymentHistory({ ...employmentHistory, reason_for_leaving: e.target.value })
                    }}
                  />
                </div>
                <br />
                <button
                  type="button"
                  className="text-blue-500 hover:underline"
                  id='add-history'
                  onClick={() => {
                    const newHistory = [...formData.employment_History, employmentHistory]
                    setFormData({ ...formData, employment_History: newHistory })
                    setEmplymentHistory({
                      start_date: '',
                      end_date: '',
                      employer_name: '',
                      position: '',
                      reason_for_leaving: '',
                    })
                  }}
                >
                  Add Employment History
                </button>
              </div>
              {formData.employment_History.map((entry, index) => (

                <p key={index}>{entry.employer_name} | {entry.start_date} - {entry.end_date} | {entry.position} | {entry.reason_for_leaving}</p>

              ))}

            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Invoice</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Subtotal"
                  id='subtotal'
                  className="block w-full border border-gray-300 rounded-md p-2"
                  value={invoice.subtotal}
                  onChange={(e) => {
                    setInvoice({ ...invoice, subtotal: e.target.value })
                  }}
                />
                <input
                  type="text"
                  placeholder="Discount"
                  id='discount'
                  className="block w-full border border-gray-300 rounded-md p-2"
                  value={invoice.discount}
                  onChange={(e) => {
                    setInvoice({ ...invoice, discount: e.target.value })
                  }}
                />
                <input
                  type="text"
                  placeholder="Tax rate"
                  id='tax-rate'
                  className="block w-full border border-gray-300 rounded-md p-2"
                  value={invoice.tax_rate}
                  onChange={(e) => {
                    setInvoice({ ...invoice, tax_rate: e.target.value })
                  }}
                />
                <input
                  type="text"
                  placeholder="Balance Due"
                  id='balance'
                  className="block w-full border border-gray-300 rounded-md p-2"
                  value={invoice.balance_due}
                  onChange={(e) => {
                    setInvoice({ ...invoice, balance_due: e.target.value })
                  }}
                />
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Products</h3>
                <div className="border rounded-md p-4 mb-4 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Description"
                      id='product-desc'
                      className="block w-full border border-gray-300 rounded-md p-2"
                      value={product.description}
                      onChange={(e) => {
                        setProduct({ ...product, description: e.target.value })
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Quantity"
                      id='qty'
                      className="block w-full border border-gray-300 rounded-md p-2"
                      value={product.qty}
                      onChange={(e) => {
                        setProduct({ ...product, qty: e.target.value })
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Total"
                      id='total'
                      className="block w-full border border-gray-300 rounded-md p-2"
                      value={product.total}
                      onChange={(e) => {
                        setProduct({ ...product, total: e.target.value })
                      }}
                    />
                  </div>
                  <br />
                  <button
                    type="button"
                    className="text-blue-500 hover:underline"
                    id='add-product'
                    onClick={() => {
                      const newProducts = [...invoice.products, product]
                      setInvoice({ ...invoice, products: newProducts })
                      setProduct({
                        description: '',
                        qty: "",
                        total: "",
                      })
                    }}
                  >
                    Add Product
                  </button>
                </div>
                {invoice.products.map((product, index) => (
                  <p key={index}>{product.description} | {product.qty} | {product.total}</p>
                ))}

              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              id='submit'
              onClick={() => {
                const newForm = { ...formData, invoice: invoice };
                alert("Form submitted successfully!");
                console.log(newForm);
                setOutput(newForm);
                setFormData({
                  full_name: '',
                  phone: '',
                  home_address: '',
                  mailing_address: '',
                  employment_History: [],
                  invoice: null
                });
                setInvoice({
                  subtotal: "",
                  discount: "",
                  tax_rate: "",
                  balance_due: "",
                  products: [],
                })
              }}
            >
              Submit
            </button>
          </div>
        )
      }
    </div>
  );
};

export default App;
