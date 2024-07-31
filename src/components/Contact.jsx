import { Form, useNavigation } from "react-router-dom";
import { Wrapper } from "../wrappers/Contact";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";
import Loading from "./Loading";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    const response = await customFetch.post("/email", data);
    toast.success("Message sent successfully!");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

const Contact = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <h2>Get In Touch</h2>
      <Form className="form" method="post">
        <div className="form-row">
          <input
            placeholder="Name"
            type="text"
            name="name"
            className="form-input"
          />
        </div>
        <div className="form-row">
          <input
            placeholder="Email"
            type="email"
            name="email"
            className="form-input"
          />
        </div>
        <div className="form-row">
          <textarea
            placeholder="Message"
            name="message"
            className="form-textarea"
          />
        </div>
        <button className="btn" disabled={isSubmitting} type="submit">
          {isSubmitting ? (
            <>
              <Loading />
              submitting...
            </>
          ) : (
            "submit"
          )}
        </button>
      </Form>
    </Wrapper>
  );
};
export default Contact;
