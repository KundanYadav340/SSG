import React, { useState } from "react";
import CustomModal from "./Modal";
import { PersonalDeatilsInputs } from "./PersonalDeatils";
import { BankDeatilsInputs } from "./BankDeatils";
import { BankDetailsAccordian, PersonalDetailsAccordian } from "./UserDeatils";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/slices/userSlice";
import { allOkInPersonalDeatils } from "../utils/FormDetailsValidation";
import { toast } from "react-toastify";
const EditDetailsModal = ({ userDetails, isOpen, onClose }) => {
  const dispatch = useDispatch();

  const [userDeatilsLocal, setUserDeatilsLocal] = useState({
    userId: userDetails.userId,
    userName: userDetails.userName,
    userEmail: userDetails.userEmail,
    userPhone: parseInt(userDetails.userPhone),
    bankAccountNumber: userDetails.bankAccountNumber,
    bankIfsc: userDetails.bankIfsc,
  });
  const [error, setError] = useState({
    type: "",
    msg: "",
  });
  const editDetailsSubmitHandler = () => {
    if (
      allOkInPersonalDeatils(userDeatilsLocal, setError) &&
      allOkInPersonalDeatils(userDeatilsLocal, setError)
    ) {
      dispatch(
        updateUser({
          userId: userDetails.userId,
          updatedUser: {
            userName: userDeatilsLocal.userName,
            userEmail: userDeatilsLocal.userEmail,
            userPhone: userDeatilsLocal.userPhone,
            bankAccountNumber: userDeatilsLocal.bankAccountNumber,
            bankIfsc: userDeatilsLocal.bankIfsc,
          },
        })
      );
      toast("user details updated successfully", {
        type: "success",
      });
      onClose();
    }
  };
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <div
        style={{
          width: "fit-content",
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          marginTop: "0px",
          display: "flex",
          flexDirection: "row",
          gap: "32px",
        }}
      >
        <div
          style={{
            width: "420px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            Previous Details
          </div>
          <PersonalDetailsAccordian
            details={{
              userName: userDeatilsLocal.userName,
              userEmail: userDeatilsLocal.userEmail,
              userPhone: userDeatilsLocal.userPhone,
              bankAccountNumber: userDeatilsLocal.bankAccountNumber,
              bankIfsc: userDeatilsLocal.bankIfsc,
            }}
          />
          <BankDetailsAccordian
            bankDeatils={{
              bankAccountNumber: userDeatilsLocal.bankAccountNumber,
              bankIfsc: userDeatilsLocal.bankIfsc,
            }}
          />
        </div>
        <div
          style={{
            width: "420px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Edit Details
          </div>
          <div>
            <PersonalDeatilsInputs
              details={{
                userName: userDeatilsLocal.userName,
                userEmail: userDeatilsLocal.userEmail,
                userPhone: userDeatilsLocal.userPhone,
              }}
              error={error}
              changeDeatilsHandler={(name, value) => {
                setUserDeatilsLocal({
                  ...userDeatilsLocal,
                  [name]: value,
                });
              }}
            />
            <BankDeatilsInputs
              bankDeatils={{
                bankAccountNumber: userDeatilsLocal.bankAccountNumber,
                bankIfsc: userDeatilsLocal.bankIfsc,
              }}
              error={error}
              changeBankDetailsHandler={(name, value) => {
                setUserDeatilsLocal({
                  ...userDeatilsLocal,
                  [name]: value,
                });
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "12px",
            }}
          >
            <button
              className="edit-submit-btn"
              onClick={editDetailsSubmitHandler}
            >
              Edit details
            </button>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default EditDetailsModal;
