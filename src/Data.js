import img from './images/c6.jpg'

export const listTableRows = [
  {
    id : 1322,
    product : "Asus Laptop",
    customer : "Peter Griffin",
    amount : 2000,
    status : "Pending",
    img, 
    date : "1 March",
    method : "Retail"
  },
  {
    id : 1323,
    product : "Dell Dual Cell",
    customer : "Lois Griffin",
    amount : 800,
    status : "Approved",
    img,
    date : "22 May",
    method : "Retail"
  },
  {
    id : 1324,
    product : "Macbook Air",
    customer : "Quagmire",
    amount : 3200,
    status : "Approved",
    img,
    date : "2 February",
    method : "Online"
  },
  {
    id : 1325,
    product : "Airpods",
    customer : "Ted Mosby",
    amount : 300,
    status : "Pending",
    img,
    date : "12 March",
    method : "Online"
  },
  {
    id : 1326,
    product : "Headset",
    customer : "Robin Schebatsky",
    amount : 2000,
    status : "Approved",
    img,
    date : "1 January",
    method : "Retail"
  },
  {
    id : 1327,
    product : "Hp EliteBook Pro",
    customer : "Vivek Rohit",
    amount : 2500,
    status : "Approved",
    img,
    date : "16 June",
    method : "Online"
  },
]

export const listScreenRows = [
  { id: 1, lastName: "Snow", firstName: "Jon", status: "active", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", status: "passive", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", status: "pending", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", status: "active", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", status: "passive", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, status: "passive", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", status: "pending", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", status: "active", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", status: "pending", age: 65 },
];
export const listScreenColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "age", headerName: "Age", type: "number", width: 90 },
  { field: "status", headerName: "Status", width: 130,
    renderCell : (params) => {
      return ( 
        <div className={`p-2 rounded-lg ${params.row.status === "active" ? "bg-green-400 text-green-600" : params.row.status === "pending" ? "text-orange-600 bg-orange-400" : "bg-red-300 text-red-500" }`}>
          {params.row.status}
        </div>
      )
    }
  },
  { field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    renderCell : (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];
