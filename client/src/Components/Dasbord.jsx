import { useEffect, useState } from "react"



export default function Dasbord() {

  const [data, getData] = useState([]);


    useEffect(() => {
      fetch('/dasbord', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        
      }).then(res => res.json())
        .then((y) => getData(y));
  },[])

  return (
    <>

      <div className="term_section">  
        <div className="container" >
          <h1 className="text-center py-5">Welcome To Dashboard</h1>
        <div className="d-flex justify-content-center align-items-center  "
            style={{
          background:' #8d3dbc',
          width: '100%',
              overflow: 'auto',
              borderRadius:'10px'
          }}>
            <table class="rounded" >
                
              <thead style={{width:'500px'}} >
                <tr className="text-center text-white" >
                  <th className="" scope="col">Users</th>
                  <th scope="col">Name</th>
                  <th scope='col'>Number</th>
                  <th className="px-3" scope="col">Method</th>
                  <th scope="col">Dollor</th>
                  <th  scope="col">Time</th>
                </tr>
              </thead>
              <tbody>

                {
                 
                  data.map((e) => {

                    return (
                      <tr className="text-center">
                      <td scope="row">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="rounded"
                          style={{
                            width: "50px",
                            height: "50px",
                            background: "#d9700",
                            padding: '10px',

                      
                          }}
                          viewBox="0 0 20 20"
                          fill="#fef3e4 "
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </td>
                        <td>{ e.name}</td>
                        <td>{ e.number}</td>
                        <td>{ e.MMT_Companey}</td>
                        <td>${ e.dolor}</td>
                        <td>{ e.date}</td>
                    </tr>
                    )
                  
                  
                  })
                }



              </tbody>
            </table>
        </div>
        </div>
        </div >
    </>
  )
 }


