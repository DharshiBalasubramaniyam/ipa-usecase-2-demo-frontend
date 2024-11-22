import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({});
  const [emergency, setemergency] = useState({});
  const [olResultDetails, setolResultDetails] = useState({});
  const [olResultArr, setolResultArr] = useState([]);
  const [olResult, setolResult] = useState({});
  const [alResultDetails, setalResultDetails] = useState({});
  const [alResultArr, setalResultArr] = useState([]);
  const [alResult, setalResult] = useState({});
  const [otherQualificationArr, setotherQualificationArr] = useState([]);
  const [otherQualification, setotherQualification] = useState({});
  const [extraActivities, setextraActivities] = useState("");
  const [refreeArr, setrefreeArr] = useState([]);
  const [refree, setrefree] = useState({});

  const handleSubmit = () => {

    const form = {
      "personalDetails": formData, "emergency": emergency,
      "ol": {...olResultDetails, "results": olResultArr},
      "al": {...alResultDetails, "results": alResultArr},
      "otherQualification": otherQualificationArr,
      "extraActivities": extraActivities,
      "refrees": refreeArr
    }
    console.log(form);
    setFormData({})
    setemergency({})
    setolResultDetails({})
    setolResultArr([])
    setolResult({})
    setalResultDetails({})
    setalResultArr([])
    setalResult({})
    setotherQualificationArr([])
    setotherQualification({})
    setextraActivities({})
    setrefreeArr([])
    setrefree({})
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">IPA use case 2</h1>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-center">Personal Informataion</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='fullName'
              value={formData?.full_name}
              onChange={(e) => {
                setFormData({ ...formData, full_name: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Name with initials</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='nameWithInitials'
              value={formData?.nameWithInitials}
              onChange={(e) => {
                setFormData({ ...formData, nameWithInitials: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date of birth</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='dob'
              value={formData?.dob}
              onChange={(e) => {
                setFormData({ ...formData, dob: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='age'
              value={formData?.age}
              onChange={(e) => {
                setFormData({ ...formData, age: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Nationality</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='nationality'
              value={formData?.nationality}
              onChange={(e) => {
                setFormData({ ...formData, nationality: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <label htmlFor="male" className='mr-4'>
              <input
                type="radio"
                className="mt-1"
                id='male'
                value="Male"
                name='gender'
                onChange={(e) => {
                  setFormData({ ...formData, gender: e.target.value })
                }}
              />Male
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                className="mt-1"
                id='female'
                value="Female"
                name='gender'
                onChange={(e) => {
                  setFormData({ ...formData, gender: e.target.value })
                }}
              />Female
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='address'
              value={formData.address}
              onChange={(e) => {
                setFormData({ ...formData, address: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">mobile</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='mobile'
              value={formData.mobile}
              onChange={(e) => {
                setFormData({ ...formData, mobile: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">district</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='district'
              value={formData.district}
              onChange={(e) => {
                setFormData({ ...formData, district: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">Grama Seva Division</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='gramaSevaka'
              value={formData.gramaSevaka}
              onChange={(e) => {
                setFormData({ ...formData, gramaSevaka: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">N.I.C</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='nic'
              value={formData.nic}
              onChange={(e) => {
                setFormData({ ...formData, nic: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">passport no</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='passport'
              value={formData.passport}
              onChange={(e) => {
                setFormData({ ...formData, passport: e.target.value })
              }}
            />
          </div>

          <h2 className="text-xl font-semibold mb-4 text-center">Emergency details</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='emer-name'
              value={emergency?.name}
              onChange={(e) => {
                setemergency({ ...emergency, name: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='emer-address'
              value={emergency.address}
              onChange={(e) => {
                setemergency({ ...emergency, address: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">mobile</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='emer-mobile'
              value={emergency.mobile}
              onChange={(e) => {
                setemergency({ ...emergency, mobile: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">relationship</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='relationship'
              value={emergency.relationship}
              onChange={(e) => {
                setemergency({ ...emergency, relationship: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">email</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='emer-email'
              value={emergency.email}
              onChange={(e) => {
                setemergency({ ...emergency, email: e.target.value })
              }}
            />
          </div>

          <h2 className="text-xl font-semibold mb-4 text-center">G.C.E. (O/L) Examination</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">school</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='ol-school'
              value={olResultDetails.school}
              onChange={(e) => {
                setolResultDetails({ ...olResultDetails, school: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">year</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='ol-year'
              value={olResultDetails.year}
              onChange={(e) => {
                setolResultDetails({ ...olResultDetails, year: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">index no</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='ol-index'
              value={olResultDetails.index}
              onChange={(e) => {
                setolResultDetails({ ...olResultDetails, index: e.target.value })
              }}
            />
          </div>

          <div className="mt-3">
            <h2 className="block text-sm font-medium text-gray-700 capitalize mb-1">Results</h2>
            <div className="border rounded-md p-4 mb-4 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <input
                  type="text"
                  placeholder='Subject'
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  id='ol-subject'
                  value={olResult.subject}
                  onChange={(e) => {
                    setolResult({ ...olResult, subject: e.target.value })
                  }}
                />
                <input
                  type="text"
                  placeholder='Grade'
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  id='ol-grade'
                  value={olResult.grade}
                  onChange={(e) => {
                    setolResult({ ...olResult, grade: e.target.value })
                  }}
                />
                <button
                  type="button"
                  className="text-blue-500 hover:underline"
                  id='add-ol-result'
                  onClick={() => {
                    setolResultArr([...olResultArr, olResult])
                    setolResult({ ...olResult, subject: "", grade: "" })
                  }}
                >
                  Add result
                </button>
              </div>
              {
                olResultArr.map(res => {
                  return <p className='mt-1 text-bold'>{res?.subject} - {res?.grade}</p>
                })
              }
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-center">G.C.E. (A/L) Examination</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">school</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='al-school'
              value={alResultDetails.school}
              onChange={(e) => {
                setalResultDetails({ ...alResultDetails, school: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">year</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='al-year'
              value={alResultDetails.year}
              onChange={(e) => {
                setalResultDetails({ ...alResultDetails, year: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">index no</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='al-index'
              value={alResultDetails.index}
              onChange={(e) => {
                setalResultDetails({ ...alResultDetails, index: e.target.value })
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 capitalize">z score </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              id='zScore'
              value={alResultDetails.zScore}
              onChange={(e) => {
                setalResultDetails({ ...alResultDetails, zScore: e.target.value })
              }}
            />
          </div>

          <div className="mt-3">
            <h2 className="block text-sm font-medium text-gray-700 capitalize mb-1">Results</h2>
            <div className="border rounded-md p-4 mb-4 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <input
                  type="text"
                  placeholder='Subject'
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  id='al-subject'
                  value={alResult.subject}
                  onChange={(e) => {
                    setalResult({ ...alResult, subject: e.target.value })
                  }}
                />
                <input
                  type="text"
                  placeholder='Grade'
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  id='al-grade'
                  value={alResult.grade}
                  onChange={(e) => {
                    setalResult({ ...alResult, grade: e.target.value })
                  }}
                />
                <button
                  type="button"
                  className="text-blue-500 hover:underline"
                  id='add-al-result'
                  onClick={() => {
                    setalResultArr([...alResultArr, alResult])
                    setalResult({ ...alResult, subject: "", grade: "" })
                  }}
                >
                  Add result
                </button>
              </div>
              {
                alResultArr.map(res => {
                  return <p className='mt-1 text-bold'>{res?.subject} - {res?.grade}</p>
                })
              }
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-center">Other Educational Qualifications</h2>
          <div className="border rounded-md p-4 mb-4 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <input
                type="text"
                placeholder='Course'
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id='course'
                value={otherQualification.course}
                onChange={(e) => {
                  setotherQualification({ ...otherQualification, course: e.target.value })
                }}
              />
              <input
                type="text"
                placeholder='NVQ level'
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id='nvq'
                value={otherQualification.nvq}
                onChange={(e) => {
                  setotherQualification({ ...otherQualification, nvq: e.target.value })
                }}
              />
              <input
                type="text"
                placeholder='Institute'
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id='institute'
                value={otherQualification.institute}
                onChange={(e) => {
                  setotherQualification({ ...otherQualification, institute: e.target.value })
                }}
              />
              <input
                type="text"
                placeholder='Year'
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id='nvq-year'
                value={otherQualification.year}
                onChange={(e) => {
                  setotherQualification({ ...otherQualification, year: e.target.value })
                }}
              />
              <input
                type="text"
                placeholder='Result'
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id='nvq-result'
                value={otherQualification.result}
                onChange={(e) => {
                  setotherQualification({ ...otherQualification, result: e.target.value })
                }}
              />
              <button
                type="button"
                className="text-blue-500 hover:underline"
                id='add-nvq-result'
                onClick={() => {
                  setotherQualificationArr([...otherQualificationArr, otherQualification])
                  setotherQualification({ ...otherQualification, course: "", nvq: "", institute: "", year: "", result: "" })
                }}
              >
                Add result
              </button>
            </div>
            {
              otherQualificationArr.map(res => {
                return <p className='mt-1 text-bold'>{res?.course} - {res?.nvq} - {res?.institute} - {res?.year} - {res?.result}</p>
              })
            }
          </div>

          <h2 className="text-xl font-semibold mb-4 text-center capitalize">EXTRA CURRICULAR ACTIVITIES</h2>
          <textarea
            id="extra-activities"
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            rows={10}
            value={extraActivities}
            onChange={(e) => {
              setextraActivities(e.target.value)
            }}
          ></textarea>

          <h2 className="text-xl font-semibold mb-4 text-center capitalize">NON-RELATED REFEREES</h2>
          <div className="border rounded-md p-4 mb-4 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <input
                type="text"
                placeholder='Name'
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id='refree-name'
                value={refree.name}
                onChange={(e) => {
                  setrefree({ ...refree, name: e.target.value })
                }}
              />
              <input
                type="text"
                placeholder='Designation'
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id='designation'
                value={refree.designation}
                onChange={(e) => {
                  setrefree({ ...refree, designation: e.target.value })
                }}
              />
              <input
                type="text"
                placeholder='Address'
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id='refree-address'
                value={refree.address}
                onChange={(e) => {
                  setrefree({ ...refree, address: e.target.value })
                }}
              />
              <input
                type="text"
                placeholder='Mobile No'
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                id='refree-mobile'
                value={refree.mobile}
                onChange={(e) => {
                  setrefree({ ...refree, mobile: e.target.value })
                }}
              />
              <button
                type="button"
                className="text-blue-500 hover:underline"
                id='add-refree'
                onClick={() => {
                  setrefreeArr([...refreeArr, refree])
                  setrefree({ ...refree, name: "", mobile: "", designation: "", address: "" })
                }}
              >
                Add refree
              </button>
            </div>
            {
              refreeArr.map(res => {
                return <p className='mt-1 text-bold'>{res?.name} - {res?.designation} - {res?.address} - {res?.mobile}</p>
              })
            }
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            id='submit'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
