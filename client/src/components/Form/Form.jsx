import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import './Form.css'
import { doc, setDoc, getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4ufeeesjva37mAR3zpqpAi30XNCcmTi4",
  authDomain: "feldmans-73cb5.firebaseapp.com",
  projectId: "feldmans-73cb5",
  storageBucket: "feldmans-73cb5.appspot.com",
  messagingSenderId: "938683646758",
  appId: "1:938683646758:web:6199e264850057298ab7e7",
  measurementId: "G-4XPW96J4M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    })
  }

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, message } = data
    try {
      await setDoc(doc(db, "mail",`${name}-${Date.now()}`), {
        name,
        to: "korzioukova@gmai.com",
        message: {
          subject: "New submission on contact form!",
          text: `${name}, submitted a request on your advocacy site contact form.\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
        }
      })

      reset()
      toastifySuccess()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="form">
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Row 1 of form */}

        <div className="row">
          <div className="contactform">
            <input
              type="text"
              name="name"
              {...register('name', {
                required: { value: true, message: 'Please enter your name' },
                maxLength: {
                  value: 30,
                  message: 'Please use 30 characters or less',
                },
              })}
              className="form-control formInput"
              placeholder="Name"
            ></input>
            {errors.name && (
              <span className="errorMessage">{errors.name.message}</span>
            )}
          </div>

          <div className="contactform">
            <input
              type="email"
              name="email"
              {...register('email', {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              className="form-control formInput"
              placeholder="Email"
            ></input>
            {errors.email && (
              <span className="errorMessage">
                Please enter a valid email address
              </span>
            )}
          </div>
        </div>

        <div className="formRow">
          <div className="messageform">
            <textarea
              rows={8}
              name="message"
              {...register('message', {
                required: true,
              })}
              className="form-control formInput"
              placeholder="Message"
            ></textarea>
            {errors.message && (
              <span className="errorMessage">Please enter a message</span>
            )}
          </div>
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>

      <ToastContainer />
    </div>
  )
}

export default ContactForm
