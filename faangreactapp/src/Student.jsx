import * as Yup from "yup";
import { useFormik } from "formik";
function Student() {
  var studentForm = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      gender: "",
      age: "",
      technology: [],
      terms: [],
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required(),
      age: Yup.number()
        .required()
        .test({
          name: "ageTest",
          test: function (value, ctx) {
            console.log(value, ctx);
            if (!ctx.parent.gender) {
              return this.createError({
                message: "Mundu gender select chey",
              });
            } else {
              if (ctx.parent.gender === "male") {
                if (value < 25) {
                  return this.createError({
                    message: "Boys ki min 25 years undali",
                  });
                } else {
                  return true;
                }
              }
              if (ctx.parent.gender === "female") {
                if (value < 23) {
                  return this.createError({
                    message: "Girls ki min 23 years undali",
                  });
                } else {
                  return true;
                }
              }
            }
          },
          message: "appude pelli vaddu",
        }),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      {/* {console.log(studentForm.errors)} */}
      <h1>Student</h1>
      <form onSubmit={studentForm.handleSubmit}>
        <input {...studentForm.getFieldProps("firstname")} />
        {studentForm.touched.firstname && studentForm.errors.firstname && (
          <div>First Name is Mandatory</div>
        )}
        <br />
        <input {...studentForm.getFieldProps("lastname")} />
        <br />
        <label htmlFor="">Gender:</label>
        <input
          type="radio"
          {...studentForm.getFieldProps("gender")}
          value="male"
        />
        :Male
        <input
          type="radio"
          {...studentForm.getFieldProps("gender")}
          value="female"
        />
        :Female
        <input
          type="radio"
          {...studentForm.getFieldProps("gender")}
          value="others"
        />
        :Others
        <br />
        <input {...studentForm.getFieldProps("age")} />
        {studentForm.touched.age && studentForm.errors.age && (
          <div>{studentForm.errors.age}</div>
        )}
        <br />
        <label>Technology:</label>
        <input
          type="checkbox"
          {...studentForm.getFieldProps("technology")}
          value="njs"
        />
        :NodeJS
        <input
          type="checkbox"
          {...studentForm.getFieldProps("technology")}
          value="ajs"
        />
        :Angular
        <input
          type="checkbox"
          {...studentForm.getFieldProps("technology")}
          value="rjs"
        />
        :ReactJS
        <input
          type="checkbox"
          {...studentForm.getFieldProps("technology")}
          value="ejs"
        />
        :ExpressJS
        <input
          type="checkbox"
          {...studentForm.getFieldProps("technology")}
          value="vjs"
        />
        :VueJS
        <br />
        <br />
        <input
          type="checkbox"
          {...studentForm.getFieldProps("terms")}
          value="on"
        />
        :I Agree Terms and Conditions
        <br />
        {studentForm.values.terms.length === 0 && (
          <button type="submit" disabled>
            Show Data
          </button>
        )}
        {studentForm.values.terms.length !== 0 && (
          <button type="submit">Show Data</button>
        )}
      </form>
    </div>
  );
}

export default Student;
