import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const TableTest = () => {
  const [tbldata, setTbldata] = useState([]);
  const [coldata, setColdata] = useState([]);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  // const handleEdit = () => {
  //   console.log('edit');
  // };

  // const handleDelete = () => {
  //   console.log('delete');
  // };

  const getData = async () => {
    const res = await fetch('/tbldata2');
    const data = await res.json();
    console.log(data);
    setTbldata(data);

    setColdata(
      Object.keys(data[0]).map(key => {
        return {
          Header: key,
          accessor: key
          //   Cell: row => (
          //     <div>
          //       <button onClick={() => handleEdit(row.original)}>Edit</button>
          //       <button onClick={() => handleDelete(row.original)}>Delete</button>
          //     </div>
          //   )
        };
      })
    );
  };

  return (
    <div>
      <ReactTable
        data={tbldata}
        columns={coldata}
        defaultPageSize={10}
        className="-striped -highlight"
      />
      <br />
    </div>
  );
};

export default TableTest;
