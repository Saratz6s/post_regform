import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const RegistraionForm = () => {
    const [getData, setData] = useState({
        studentName: "",
        studentAddress: "",
        studentphn:"",
        studentMail: "",
        studentGender: "",
        studentDOB: "",
        studentCourse: "",
    });

    const [validationErrors, setValidationErrors] = useState({});
    const [isFormValid, setFormValid] = useState(false);

    const validateForm = () => {
        const errors = {};
        const { studentName, studentAddress, studentphn, studentMail, studentGender, studentDOB, studentCourse } = getData;

        if (!studentName.trim()) errors.studentName = "Name is required.";
        if (!studentAddress.trim()) errors.studentAddress = "Address is required.";
        if (!studentphn) errors.studentphn = "Phone number is required.";

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(studentMail)) errors.studentMail = "Invalid email address.";
        if (!studentGender) errors.studentGender = "Gender is required.";
        if (!studentDOB) errors.studentDOB = "Date of Birth is required.";
        if (!studentCourse) errors.studentCourse = "Course selection is required.";

        setValidationErrors(errors);
        setFormValid(Object.keys(errors).length === 0);
    };

    const handleInputChange = (field, value) => {
        setData((prevData) => {
            const updatedData = { ...prevData, [field]: value };
            setValidationErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
            return updatedData;
        });
    };

    const handleBlur = () => {
        validateForm();
    };

    const handleSubmit = () => {
        validateForm();
        if (isFormValid) {
            const { studentName, studentAddress, studentphn, studentMail, studentGender, studentDOB, studentCourse } = getData;
            const alertMessage = `
            Name: ${studentName}
            Address: ${studentAddress}
            Phone: ${studentphn}
            E-mail: ${studentMail}
            Gender: ${studentGender}
            Date of Birth: ${studentDOB}
            Course: ${studentCourse}
            `;
            alert(alertMessage);
        } else {
            alert("Please correct the errors in the form.");
        }
    };

    const handleCancel = () => {
        setData({
            studentName: "",
            studentAddress: "",
            studentphn:"",
            studentMail: "",
            studentGender: "",
            studentDOB: "",
            studentCourse: "",
        });
        setValidationErrors({});
        setFormValid(false);
    };

    return (
        <div className="d-flex justify-content-center my-4">
            <div style={{ width: "500px" }} className="bg-warning border rounded p-4">
                <FloatingLabel controlId="floatingName" label="Enter your name">
                    <Form.Control
                        value={getData.studentName}
                        onChange={(e) => handleInputChange("studentName", e.target.value)}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="name"
                    />
                    {validationErrors.studentName && <div className="text-danger">{validationErrors.studentName}</div>}
                </FloatingLabel>
                <FloatingLabel controlId="floatingAddress" label="Enter your Address" className="mt-3">
                    <Form.Control
                        value={getData.studentAddress}
                        onChange={(e) => handleInputChange("studentAddress", e.target.value)}
                        onBlur={handleBlur}
                        as="textarea"
                        placeholder="Enter your address"
                        style={{ height: "100px" }}
                    />
                    {validationErrors.studentAddress && <div className="text-danger">{validationErrors.studentAddress}</div>}
                </FloatingLabel>

                <FloatingLabel controlId="floatingnumber" label="Phone number" className="mt-3">
                    <Form.Control
                        value={getData.studentphn}
                        onChange={(e) => handleInputChange("studentphn", e.target.value)}
                        onBlur={handleBlur}
                        type="number"
                        placeholder="Enter your number"
                    />
                    {validationErrors.studentphn && <div className="text-danger">{validationErrors.studentphn}</div>}
                </FloatingLabel>
               

                <FloatingLabel controlId="floatingInput" label="Email address" className="mt-3">
                    <Form.Control
                        value={getData.studentMail}
                        onChange={(e) => handleInputChange("studentMail", e.target.value)}
                        onBlur={handleBlur}
                        type="email"
                        placeholder="name@example.com"
                    />
                    {validationErrors.studentMail && <div className="text-danger">{validationErrors.studentMail}</div>}
                </FloatingLabel>
                <Form>
                    <div key="gender-radio-group" className="mt-3 d-flex justify-content-between text-light px-3">
                        <Form.Check
                            type="radio"
                            id="gender-male"
                            name="gender"
                            value="Male"
                            label="Male"
                            checked={getData.studentGender === "Male"}
                            onChange={(e) => handleInputChange("studentGender", e.target.value)}
                            onBlur={handleBlur}
                        />
                        <Form.Check
                            type="radio"
                            id="gender-female"
                            name="gender"
                            value="Female"
                            label="Female"
                            checked={getData.studentGender === "Female"}
                            onChange={(e) => handleInputChange("studentGender", e.target.value)}
                            onBlur={handleBlur}
                        />
                        <Form.Check
                            type="radio"
                            id="gender-others"
                            name="gender"
                            value="Others"
                            label="Others"
                            checked={getData.studentGender === "Others"}
                            onChange={(e) => handleInputChange("studentGender", e.target.value)}
                            onBlur={handleBlur}
                        />
                    </div>
                    {validationErrors.studentGender && <div className="text-danger mt-2">{validationErrors.studentGender}</div>}
                </Form>
                <FloatingLabel controlId="floatingDOB" label="Enter your Date of Birth" className="mt-3">
                    <Form.Control
                        value={getData.studentDOB}
                        onChange={(e) => handleInputChange("studentDOB", e.target.value)}
                        onBlur={handleBlur}
                        type="date"
                        placeholder="DOB"
                    />
                    {validationErrors.studentDOB && <div className="text-danger">{validationErrors.studentDOB}</div>}
                </FloatingLabel>
                <Form.Select
                    value={getData.studentCourse}
                    onChange={(e) => handleInputChange("studentCourse", e.target.value)}
                    onBlur={handleBlur}
                    aria-label="Default select example"
                    className="mt-3"
                >
                    <option hidden>Open this select menu</option>
                    <option value="Biology">Biology</option>
                    <option value="ComputerScience">Computer Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Humanities">Humanities</option>
                </Form.Select>
                {validationErrors.studentCourse && <div className="text-danger mt-2">{validationErrors.studentCourse}</div>}
                <div className="d-flex mt-3 justify-content-center">
                    <button onClick={handleCancel} className="btn btn-danger border rounded me-2">
                        Cancel
                    </button>
                    <button onClick={handleSubmit} className="btn btn-success border rounded" disabled={!isFormValid}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegistraionForm;