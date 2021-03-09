import React from 'react';
import { useForm } from "react-hook-form";
import Layout from '../../components/common/Layout';
import _ from "lodash/fp";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formWrap: {
    margin:'0 20px',
  },
  form: {
    maxWidth: '500px',
    margin: '0 auto',
    backgroundColor: '#aaa',
    display: 'flex',
    flexDirection:'column',
    '& input': {

    }
  },

}));

const Foodadmin = () => {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input


  return (
    <div>
      <Layout>
        <h1>메뉴</h1>
          <Box className={classes.formWrap}>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>

            <label>type</label>
            <select name="hello"                  ref={register()}>
              <option value="떡볶이">떡볶이</option>
              <option value="튀김">튀김</option>
              <option value="순대와어묵">순대와어묵</option>
              <option value="김밥">김밥</option>
              <option value="음료">음료</option>
            </select>

                <label>First Name</label>
                <input
                  name="firstName"
                  ref={register({
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i
                  })}
                />
                {_.get("firstName.type", errors) === "required" && (
                  <p>This field is required</p>
                )}
                {_.get("firstName.type", errors) === "maxLength" && (
                  <p>First name cannot exceed 20 characters</p>
                )}
                {_.get("firstName.type", errors) === "pattern" && (
                  <p>Alphabetical characters only</p>
                )}
                <label>Laste Name</label>
                <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
                {_.get("lastName.type", errors) === "pattern" && (
                  <p>Alphabetical characters only</p>
                )}
                <label>Age</label>a
                <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
                {errors.age && (
                  <p>You Must be older then 18 and younger then 99 years old</p>
                )}
                <input type="submit" />
              </form>
          </Box>
      </Layout>
    </div>
  );
};

export default Foodadmin;






