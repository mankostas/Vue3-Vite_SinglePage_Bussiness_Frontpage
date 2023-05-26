<script>
  import {useVuelidate } from '@vuelidate/core'
  import { sameAs } from '@vuelidate/validators'
  import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators'



  export function validName(name) {
      const validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
    if (validNamePattern.test(name)){
      return true;
    }
    return false;
  }



  export default {

    setup () {
      return {
          v$: useVuelidate(),
      }
    },

    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          checkbox: false,
        }
      }
    },
    validations() {
      return {
        form: {
          name: {
            required,
            name_validation: {
              $validator: validName,
              $message: 'Invalid Name. Field must contain only letters'
            }
          },
          email: {
              required,
              email,
          },
          phone: {
              required,
              minLength: minLength(10),
              maxLength: maxLength(10)
          },
          checkbox: { 
            required,
            sameAs: sameAs( () => true ) },

        },
      }
    },
    computed: {
    	isChecked: function () {
      	return this.form.checkbox
      }
    },
    methods: {
       submitForm() {

         this.v$.form.$touch();

        if (this.v$.form.$pending || this.v$.form.$error) {
          alert('Form has errors')
        } else {
          alert('Form Submmited')
        }


      },
    },
  }
</script>

<template>
  <div id="contact" class="section container mx-auto">
    <div class="section-heading">
      <span
        >I am interested in getting the benefits of
        <span style="color: #FD9E19">Up Hellas</span></span
      >
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="form-container text-center">
          <form @submit.prevent="submit" >
            <div class="row container">
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="name">NAME & SURNAME</label>
                  <input
                    id="name"
                    class="form-control"
                    type="text"
                    name="name"
                    v-model="v$.form.name.$model"
                  />
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.name.$errors"
                    :key="index"
                  >
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="email">EMAIL</label>
                  <input
                    id="email"
                    class="form-control"
                    type="email"
                    v-model="v$.form.email.$model"
                  />
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.email.$errors"
                    :key="index"
                  >
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row container">
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="phone">PHONE</label>
                  <input
                    class="form-control"
                    id="phone"
                    type="number"
                    name="phone"
                    maxlength="10"
                    v-model="v$.form.phone.$model"
                  />
                  <!-- Error Message -->
                  <div
                    class="input-errors"
                    v-for="(error, index) of v$.form.phone.$errors"
                    :key="index"
                  >
                    <div class="error-msg">{{ error.$message }}</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="select_product">PRODUCT</label>

                  <select
                    class="form-control"
                    id="select_product"
                    name="product"
                  >
                    <option disabled selected value> -- select an option -- </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                name="checkbox"
                required
                v-model="v$.form.checkbox.$model"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Επιθυμώ να χρησιμοποιηθούνε τα παραπάνω στοιχεία μου από την Up
                Hellas, προκειμένου να ενημερωθώ για τα προϊόντα της.<br />
                βάση και του Γενικού Κανονισμού για την Προστασία Προσωπικών
                Δεδομένων που ισχύει από 25/5/2018
              </label>
            </div>

            <div class="buttons_container">
              <button @click="submitForm" type="submit" class="submit-button">
                SEND US YOUR MESSAGE
              </button>
              <span>OR</span>
              <button class="meeting-button">
                <img
                  class="img-fluid meeting-img"
                  src="@/assets/icons/meeting-logo.svg"
                />
                SCHEDULE A MEETING
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .contact {
    max-width: 100%;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .error-msg {
    background-color: #fff;
    border-radius: 10px;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 10px;
    color: red;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  .meeting-button {
    background-color: #fff;
    border-radius: 30px;
    border-color: #303644;
    border: 4px solid;
    box-shadow: -5px 2px #303644;
    font-family: "cf_asty_stdbold";
    color: #303644;
    margin-top: 20px;
    padding-bottom: 6px;
    padding-top: 13px;
    padding-left: 50px;
    padding-right: 50px;
  }
  .submit-button {
    background-color: #FFCE3C;
    border-radius: 30px;
    border-color: #303644;
    border: 4px solid;
    box-shadow: -5px 2px #303644;
    font-family: "cf_asty_stdbold";
    color: #303644;
    margin-top: 20px;
    padding-bottom: 13px;
    padding-top: 13px;
    padding-left: 50px;
    padding-right: 50px;
  }

  .buttons_container > span {
    font-family: "cf_asty_stdbold";
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 10px;
    margin-right: 15px;
  }

  .section-heading span {
    font-family: "cf_asty_stdbold";
    color: #303644;
    font-size: 33px;
  }

  .section-heading {
    margin-bottom: 30px;
    margin-top: 50px;
  }

  #contact {
    background-color: #00C8FF;
  }
  label {
    text-align: left;
    width: 100%;
    font-family: "cf_asty_stdbold";
    font-size: 13px;
    padding-bottom: 5px;
    padding-top: 10px;
  }
  select:focus,
  input:focus {
    background-color: #fff;
  }
  select,
  input {
    background-color: #CCF4FF;
    transition: 0.5s ease-in-out;
    border-radius: 20px;
    box-shadow: 5px -3px #262626;
    border: 3px solid #262626;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: "cf_asty_stdbold";
  }
  select {
    
    border-radius: 20px;
    box-shadow: 5px -3px #262626;
    border: 3px solid #262626;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: "cf_asty_stdbold";
  }
  .form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25);
    box-shadow: -5px 3px #262626;
    border: 3px solid #262626;
}
  .form-check-input:focus,
  .form-check-input:checked {
    background-color: transparent;
    border-color: inherit;
    box-shadow: -5px 3px #262626;
    width: 23px;
    height: 23px;
    margin-right: 12px;
}
  .form-check label {
    font-family: "cf_asty_stdlight";
    font-weight: 600;
    font-size: 12px;
  }

  .form-check-input {
    width: 23px;
    height: 23px;
    margin-right: 12px;
  }
  .form-check {
    max-width: 790px;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }
 


select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #000;
}

  .meeting-img {
    max-width: 25px;
    padding-bottom: 6px;
  }

  form {
    max-width: 900px;
    margin: 0 auto;
  }

  .section {
    padding-bottom: 100px;
  }

  #contact {
    max-width: 100%;
  }

  @media (max-width: 1199px) {
    .buttons_container {
      display: flex;
      flex-direction: column;
    }

    .meeting-button {
      margin-top: 20px;
    }

    .submit-button {
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
