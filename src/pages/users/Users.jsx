import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditDetailsModal from "../../components/EditDetails";

const Users = () => {
  const users = useSelector((state) => state.user.userData);
  const [selectedUserForEdit, setSelectedUserForEdit] = useState(null);

  const handleEditDeatails = (userId) => {
    const userLastUpdatedDetails = users[userId].slice(-1)[0];
    setSelectedUserForEdit({
      userId: userId,
      userName: userLastUpdatedDetails.userName,
      userEmail: userLastUpdatedDetails.userEmail,
      userPhone: userLastUpdatedDetails.userPhone,
      bankAccountNumber: userLastUpdatedDetails.bankAccountNumber,
      bankIfsc: userLastUpdatedDetails.bankIfsc,
    });
  };

  const fields = [
    { label: "Name", field: "userName" },
    { label: "Email", field: "userEmail" },
    { label: "Phone", field: "userPhone" },
    { label: "Account Number", field: "bankAccountNumber" },
    { label: "IFSC Code", field: "bankIfsc" },
    { label: "Edit", field: "edit" },
  ];

  return (
    <>
      {selectedUserForEdit && (
        <EditDetailsModal
          userDetails={selectedUserForEdit}
          isOpen={!!selectedUserForEdit}
          onClose={() => setSelectedUserForEdit(null)}
        />
      )}
      <div
        style={{
          padding: "max(16px, 2vw) max(16px, 2vw)",
          minHeight: "calc(100vh - 58px - 50px)",
          background: "#efeff1",
        }}
      >
        <div
          style={{ fontWeight: "bold", fontSize: "1.8rem", color: "#0000ff" }}
        >
          Users List
        </div>
        <div style={{ fontSize: "18px", color: "#606060" }}>
          Users registered with us
        </div>

        <div style={{ display: "flex", marginTop: "24px" }}>
          {/* this is th fixed table*/}
          <table style={{ borderCollapse: "collapse", width: "240px" }}>
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #000080",
                    padding: "8px",
                    fontWeight: "bold",
                    backgroundColor: "#fff",
                    color: "#000080",
                    position: "sticky",
                    left: 0,
                    zIndex: 2,
                  }}
                >
                  Field
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ height: "38px" }}>
                <td
                  style={{
                    border: "1px solid #000080",
                    padding: "8px",
                    fontWeight: "bold",
                    backgroundColor: "#fff",
                    color: "#000080",
                    position: "sticky",
                    left: 0,
                    zIndex: 1,
                  }}
                ></td>
              </tr>
              {fields.map((row) => (
                <tr key={row.label}>
                  <td
                    style={{
                      border: "1px solid #000080",
                      padding: "8px",
                      fontWeight: "bold",
                      backgroundColor: "#fff",
                      color: "#000080",
                      position: "sticky",
                      left: 0,
                      zIndex: 1,
                    }}
                  >
                    {row.label}
                  </td>
                </tr>
              ))}
              <tr style={{ height: "10px" }}>
                <td
                  style={{
                    borderTop: "1px solid #000080",
                    padding: "8px",
                    fontWeight: "bold",
                    color: "#000080",
                    position: "sticky",
                    left: 0,
                    zIndex: 1,
                  }}
                ></td>
              </tr>
            </tbody>
          </table>

          {/* Scrollable colums to show users*/}
          <div
            style={{ overflowX: "auto", width: "100%", scrollbarWidth: "0px" }}
          >
            <table
              style={{
                borderCollapse: "collapse",
                minWidth: "max-content",
              }}
            >
              <thead>
                <tr>
                  {Object.entries(users).map(([userId], idx) => (
                    <th
                      key={`user-${userId}`}
                      colSpan={2}
                      style={{
                        border: "1px solid #505050",
                        padding: "8px",
                        textAlign: "center",
                        backgroundColor: idx % 2 === 0 ? "#eeeef9" : "#eef9ee",
                      }}
                    >
                      User {idx + 1}
                    </th>
                  ))}
                </tr>
                <tr
                  style={{
                    height: "38px",
                  }}
                >
                  {Object.entries(users).map(([userId, details], idx) => {
                    const haveUpdatedData = details[1]?.userId;
                    return (
                      <React.Fragment key={`sub-${userId}`}>
                        <th
                          colSpan={haveUpdatedData ? 1 : 2}
                          style={{
                            border: "1px solid #505050",
                            padding: "8px",
                            textAlign: "center",
                            fontSize: "14px",
                            color: "#606060",
                            backgroundColor:
                              idx % 2 === 0 ? "#eeeeff" : "#eeffee",
                          }}
                        >
                          Initial Data
                        </th>
                        {haveUpdatedData && (
                          <th
                            style={{
                              border: "1px solid #505050",
                              padding: "8px",
                              textAlign: "center",
                              fontSize: "14px",
                              color: "#606060",
                              backgroundColor:
                                idx % 2 === 0 ? "#eeeeff" : "#eeffee",
                            }}
                          >
                            Last Modified
                          </th>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {fields.map((row) => (
                  <tr key={row.label}>
                    {Object.entries(users).map(([userId, details], idx) => {
                      const first = details[0];
                      const last = details[1];

                      if (row.field === "edit") {
                        return (
                          <td
                            key={`${userId}-edit`}
                            colSpan={2}
                            style={{
                              border: "1px solid #505050",
                              padding: "8px",
                              textAlign: "center",
                              backgroundColor: "#fff",
                            }}
                          >
                            <button
                              onClick={() => handleEditDeatails(userId)}
                              className="table-edit-btn"
                            >
                              Edit
                            </button>
                          </td>
                        );
                      }

                      return (
                        <React.Fragment key={`${userId}-${row.field}`}>
                          <td
                            colSpan={last?.userId ? 1 : 2}
                            style={{
                              border: "1px solid #505050",
                              backgroundColor:
                                idx % 2 === 0 ? "#eeeeff" : "#eeffee",
                              padding: "8px 16px",
                            }}
                          >
                            {first[row.field]}
                          </td>
                          {last?.userId && (
                            <td
                              style={{
                                border: "1px solid #505050",
                                padding: "8px 16px",
                                backgroundColor:
                                  idx % 2 === 0 ? "#eeeeff" : "#eeffee",
                              }}
                            >
                              {last[row.field]}
                            </td>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
